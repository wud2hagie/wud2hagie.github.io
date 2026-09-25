// Generates og-image.png (1200x630) for social sharing using sharp.
// Run: node scripts/gen-og-image.mjs
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF5EC"/>
      <stop offset="60%" stop-color="#F4E8D8"/>
      <stop offset="100%" stop-color="#E8D5BC"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C2683C"/>
      <stop offset="100%" stop-color="#D88B5A"/>
    </linearGradient>
    <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#C2683C" fill-opacity="0.07"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- Decorative spline curve -->
  <g stroke="#C2683C" fill="none" opacity="0.18">
    <path d="M 0 480 Q 200 380 400 460 T 800 440 T 1200 470" stroke-width="2"/>
    <path d="M 0 520 Q 200 420 400 500 T 800 480 T 1200 510" stroke-width="1.5" opacity="0.7"/>
    <path d="M 0 560 Q 200 460 400 540 T 800 520 T 1200 550" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- Left accent bar -->
  <rect x="80" y="120" width="6" height="160" rx="3" fill="url(#accent)"/>

  <!-- Eyebrow -->
  <text x="110" y="148" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="#C2683C" letter-spacing="3">ACADEMIC PORTFOLIO</text>

  <!-- Main name -->
  <text x="80" y="240" font-family="Playfair Display, Georgia, serif" font-size="68" font-weight="700" fill="#2A1E12">Wudneh Tilahun</text>
  <text x="80" y="320" font-family="Playfair Display, Georgia, serif" font-size="68" font-weight="700" fill="#2A1E12">Mengist</text>

  <!-- Subtitle -->
  <text x="80" y="380" font-family="Inter, sans-serif" font-size="24" font-weight="500" fill="#C2683C">Mathematics Lecturer &amp; Researcher</text>

  <!-- Affiliation -->
  <text x="80" y="430" font-family="Inter, sans-serif" font-size="18" fill="#5C4A36">Debre Tabor University · Department of Mathematics</text>

  <!-- Tags -->
  <g font-family="Inter, sans-serif" font-size="14" font-weight="600">
    <rect x="80" y="470" width="160" height="36" rx="18" fill="#C2683C"/>
    <text x="160" y="493" fill="#FDF8F0" text-anchor="middle">Numerical Analysis</text>

    <rect x="252" y="470" width="140" height="36" rx="18" fill="#FDF8F0" stroke="#C2683C" stroke-width="1.5"/>
    <text x="322" y="493" fill="#C2683C" text-anchor="middle">Burgers' Eqn</text>

    <rect x="404" y="470" width="120" height="36" rx="18" fill="#FDF8F0" stroke="#C2683C" stroke-width="1.5"/>
    <text x="464" y="493" fill="#C2683C" text-anchor="middle">B-Spline</text>

    <rect x="536" y="470" width="120" height="36" rx="18" fill="#FDF8F0" stroke="#C2683C" stroke-width="1.5"/>
    <text x="596" y="493" fill="#C2683C" text-anchor="middle">LaTeX</text>

    <rect x="668" y="470" width="130" height="36" rx="18" fill="#FDF8F0" stroke="#C2683C" stroke-width="1.5"/>
    <text x="733" y="493" fill="#C2683C" text-anchor="middle">Open edX</text>
  </g>

  <!-- Bottom decorative -->
  <rect x="80" y="570" width="6" height="40" rx="3" fill="url(#accent)"/>
  <text x="110" y="595" font-family="Georgia, serif" font-style="italic" font-size="20" fill="#5C4A36">Bridging rigor, computation, and pedagogy.</text>

  <!-- Right side logo block -->
  <g transform="translate(940, 90)">
    <rect width="180" height="180" rx="40" fill="#C2683C"/>
    <text x="90" y="115" font-family="Playfair Display, Georgia, serif" font-size="76" font-weight="700" fill="#FDF8F0" text-anchor="middle">W</text>
    <text x="90" y="155" font-family="Georgia, serif" font-style="italic" font-size="32" fill="#FDF8F0" text-anchor="middle" opacity="0.85">?</text>
  </g>
</svg>`;

const buffer = Buffer.from(svg);
const png = await sharp(buffer).png().toBuffer();

await writeFile("/home/z/my-project/public/og-image.png", png);
console.log("OK OG image saved to /home/z/my-project/public/og-image.png");
console.log(`Size: ${png.length} bytes`);
