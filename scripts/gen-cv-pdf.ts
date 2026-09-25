// Generates /public/cv.pdf using the minimal PDF generator
// (ported from the old /api/cv.pdf route that worked)
// Run: bun run scripts/gen-cv-pdf.ts
import { writeFileSync } from "node:fs";
import { SITE, ABOUT, EDUCATION, EXPERIENCE, PUBLICATIONS, CERTIFICATIONS } from "../src/lib/content";

function escapePdfText(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\r/g, "")
    .replace(/\n/g, " ");
}

interface TextLine {
  text: string;
  size: number;
  bold?: boolean;
  color?: [number, number, number];
  gapAfter?: number;
  gapBefore?: number;
}

function wrapText(text: string, maxLen: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length <= maxLen) {
      current = (current + " " + word).trim();
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function buildPdfContent(): string {
  const lines: TextLine[] = [];

  // Header
  lines.push({ text: SITE.name, size: 22, bold: true, color: [50, 30, 20], gapAfter: 4 });
  lines.push({ text: SITE.title, size: 12, color: [180, 100, 60], gapAfter: 6 });
  lines.push({ text: SITE.affiliation, size: 11, color: [60, 50, 40], gapAfter: 2 });
  lines.push({ text: `Email: ${SITE.email}  |  Phone: ${SITE.phone}`, size: 10, color: [80, 70, 60], gapAfter: 2 });
  lines.push({ text: `Location: ${SITE.location}`, size: 10, color: [80, 70, 60], gapAfter: 2 });
  lines.push({ text: `ORCID: ${SITE.orcid}`, size: 10, color: [80, 70, 60], gapAfter: 8 });

  // Profile
  lines.push({ text: "PROFESSIONAL PROFILE", size: 12, bold: true, color: [180, 100, 60], gapBefore: 4, gapAfter: 4 });
  ABOUT.paragraphs.forEach((p) => {
    const sentences = p.match(/[^.!?]+[.!?] ?/g) || [p];
    sentences.forEach((s) => {
      const clean = s.trim();
      const wrapped = wrapText(clean, 100);
      wrapped.forEach((line) => {
        lines.push({ text: line, size: 10, color: [50, 40, 30], gapAfter: 2 });
      });
    });
    lines.push({ text: "", size: 4, gapAfter: 2 });
  });

  // Education
  lines.push({ text: "EDUCATION", size: 12, bold: true, color: [180, 100, 60], gapBefore: 4, gapAfter: 4 });
  EDUCATION.forEach((edu) => {
    lines.push({ text: `${edu.degree} - ${edu.institution} (${edu.period})`, size: 11, bold: true, color: [40, 30, 20], gapAfter: 1 });
    lines.push({ text: `Specialization: ${edu.specialization}`, size: 10, color: [70, 60, 50], gapAfter: 4 });
  });

  // Experience
  lines.push({ text: "PROFESSIONAL EXPERIENCE", size: 12, bold: true, color: [180, 100, 60], gapBefore: 4, gapAfter: 4 });
  EXPERIENCE.forEach((exp) => {
    lines.push({ text: `${exp.role} - ${exp.organization} (${exp.period})`, size: 11, bold: true, color: [40, 30, 20], gapAfter: 1 });
    lines.push({ text: exp.focus, size: 10, color: [70, 60, 50], gapAfter: 4 });
  });

  // Publications
  lines.push({ text: "PUBLICATIONS & RESEARCH", size: 12, bold: true, color: [180, 100, 60], gapBefore: 4, gapAfter: 4 });
  PUBLICATIONS.forEach((pub) => {
    lines.push({ text: pub.title, size: 11, bold: true, color: [40, 30, 20], gapAfter: 1 });
    lines.push({ text: `${pub.venue} (${pub.year}) - ${pub.status.toUpperCase()}`, size: 10, color: [70, 60, 50], gapAfter: 1 });
    if (pub.metrics) {
      lines.push({ text: `Metrics: ${pub.metrics.accesses} accesses, ${pub.metrics.citations} citations`, size: 10, color: [70, 60, 50], gapAfter: 4 });
    } else {
      lines.push({ text: "", size: 4, gapAfter: 2 });
    }
  });

  // Certifications
  lines.push({ text: "CERTIFICATIONS & TRAINING", size: 12, bold: true, color: [180, 100, 60], gapBefore: 4, gapAfter: 4 });
  CERTIFICATIONS.forEach((cert) => {
    lines.push({ text: `${cert.title} - ${cert.issuer}`, size: 11, bold: true, color: [40, 30, 20], gapAfter: 1 });
    const wrapped = wrapText(cert.description, 100);
    wrapped.forEach((line) => lines.push({ text: line, size: 10, color: [70, 60, 50], gapAfter: 2 }));
    lines.push({ text: "", size: 4, gapAfter: 2 });
  });

  // Footer
  lines.push({ text: `Generated from ${SITE.url}`, size: 9, color: [140, 130, 120], gapBefore: 12 });

  return renderPdf(lines);
}

function renderPdf(lines: TextLine[]): string {
  const yStart = 770;
  let y = yStart;
  const left = 50;
  const bottomMargin = 50;

  const contentStreams: string[] = [];
  let currentStream = "";

  function endPage() {
    contentStreams.push(currentStream);
    currentStream = "";
    y = yStart;
  }

  for (const line of lines) {
    if (y < bottomMargin + 20) {
      endPage();
    }

    if (line.gapBefore) y -= line.gapBefore;

    const font = line.bold ? "F2" : "F1";
    const [r, g, b] = line.color || [50, 40, 30];

    if (line.text) {
      currentStream += `BT\n/${font} ${line.size} Tf\n${r / 255} ${g / 255} ${b / 255} rg\n1 0 0 1 ${left} ${y} Tm\n(${escapePdfText(line.text)}) Tj\nET\n`;
    }

    y -= line.size + (line.gapAfter || 4);
  }
  if (currentStream) endPage();

  const objects: string[] = [];
  const offsets: number[] = [];

  objects[0] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[1] = `<< /Type /Pages /Kids [${contentStreams.map((_, i) => `${5 + i * 2} 0 R`).join(" ")}] /Count ${contentStreams.length} /MediaBox [0 0 612 792] >>`;
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  contentStreams.forEach((stream, i) => {
    const pageObjNum = 5 + i * 2;
    const contentObjNum = 6 + i * 2;
    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjNum} 0 R >>`
    );
    const streamBytes = Buffer.from(stream, "latin1");
    objects.push(
      `<< /Length ${streamBytes.length} >>\nstream\n${stream}\nendstream`
    );
  });

  let pdf = "%PDF-1.4\n%\u00E2\u00E3\u00CF\u00D3\n";
  for (let i = 0; i < objects.length; i++) {
    offsets[i] = pdf.length;
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 0; i < objects.length; i++) {
    pdf += `${offsets[i].toString().padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return pdf;
}

const pdf = buildPdfContent();
writeFileSync("/home/z/my-project/public/cv.pdf", pdf, "latin1");
console.log(`OK cv.pdf written: ${Buffer.byteLength(pdf, "latin1")} bytes`);
