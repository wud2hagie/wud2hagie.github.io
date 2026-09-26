#!/usr/bin/env python3
"""
Generates a professional academic CV PDF for Wudneh Tilahun Mengist.
Uses ReportLab for precise typographic control.

Output: /home/z/my-project/public/cv.pdf

Design principles:
- Clean, academic, faculty-page standard
- Times-Roman serif body (academic standard) + Helvetica for section headers
- Gold accent rule under each section header
- Proper hanging indent for citations
- Page numbers in footer
- Hyperlinks for ORCID, DOI, and institutional websites
"""

import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch, mm
from reportlab.lib.colors import HexColor, black
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    PageBreak,
    KeepTogether,
    ListFlowable,
    ListItem,
)
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ==============================================================================
# COLOR PALETTE — matches the website (Ivory + Gold editorial theme)
# ==============================================================================
INK = HexColor("#1A1814")         # deep charcoal
GOLD = HexColor("#B8860B")       # warm gold
BURGUNDY = HexColor("#722F37")    # subtle burgundy
MUTED = HexColor("#5C4A36")      # muted brown for secondary text
PAPER = HexColor("#FAF6F0")       # ivory background (for body text contrast)
LIGHT_RULE = HexColor("#D4C9B0")  # hairline rule color
WHITE = HexColor("#FFFFFF")

# ==============================================================================
# PAGE GEOMETRY
# ==============================================================================
PAGE_W, PAGE_H = LETTER  # 612 x 792 points
MARGIN_L = 0.75 * inch
MARGIN_R = 0.75 * inch
MARGIN_T = 0.75 * inch
MARGIN_B = 0.75 * inch
CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R

# ==============================================================================
# PARAGRAPH STYLES
# ==============================================================================

# Name — large, bold serif
style_name = ParagraphStyle(
    "Name",
    fontName="Times-Bold",
    fontSize=22,
    leading=26,
    textColor=INK,
    spaceAfter=2,
    alignment=TA_LEFT,
)

# Title — gold, italic
style_title = ParagraphStyle(
    "Title",
    fontName="Times-Italic",
    fontSize=12,
    leading=14,
    textColor=GOLD,
    spaceAfter=8,
    alignment=TA_LEFT,
)

# Contact line — small, muted
style_contact = ParagraphStyle(
    "Contact",
    fontName="Helvetica",
    fontSize=9,
    leading=12,
    textColor=MUTED,
    spaceAfter=3,
    alignment=TA_LEFT,
)

# Section header — Helvetica bold, gold, with rule
style_section = ParagraphStyle(
    "Section",
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=13,
    textColor=GOLD,
    spaceBefore=12,
    spaceAfter=4,
    alignment=TA_LEFT,
)

# Subsection header (e.g., "Education")
style_subsection = ParagraphStyle(
    "Subsection",
    fontName="Helvetica-Bold",
    fontSize=9,
    leading=11,
    textColor=INK,
    spaceBefore=6,
    spaceAfter=2,
    alignment=TA_LEFT,
)

# Body text — Times Roman
style_body = ParagraphStyle(
    "Body",
    fontName="Times-Roman",
    fontSize=9.5,
    leading=12,
    textColor=INK,
    spaceAfter=3,
    alignment=TA_JUSTIFY,
)

# Entry header — Times Bold for degree/role titles
style_entry_header = ParagraphStyle(
    "EntryHeader",
    fontName="Times-Bold",
    fontSize=10,
    leading=12,
    textColor=INK,
    spaceAfter=1,
    alignment=TA_LEFT,
)

# Entry subtitle — institution, italic gold
style_entry_sub = ParagraphStyle(
    "EntrySub",
    fontName="Times-Italic",
    fontSize=9.5,
    leading=11,
    textColor=GOLD,
    spaceAfter=1,
    alignment=TA_LEFT,
)

# Entry detail — muted
style_entry_detail = ParagraphStyle(
    "EntryDetail",
    fontName="Times-Roman",
    fontSize=9,
    leading=11,
    textColor=MUTED,
    spaceAfter=4,
    alignment=TA_LEFT,
)

# Citation — hanging indent, small
style_citation = ParagraphStyle(
    "Citation",
    fontName="Times-Roman",
    fontSize=9,
    leading=11.5,
    textColor=INK,
    spaceAfter=4,
    leftIndent=16,
    firstLineIndent=-16,
    alignment=TA_LEFT,
)

# Skill line
style_skill = ParagraphStyle(
    "Skill",
    fontName="Times-Roman",
    fontSize=9.5,
    leading=12,
    textColor=INK,
    spaceAfter=2,
    alignment=TA_LEFT,
)

# Date — right-aligned, mono-feel (Helvetica)
style_date = ParagraphStyle(
    "Date",
    fontName="Helvetica",
    fontSize=9,
    leading=12,
    textColor=MUTED,
    alignment=TA_RIGHT,
)

# Footer
style_footer = ParagraphStyle(
    "Footer",
    fontName="Helvetica",
    fontSize=8,
    leading=10,
    textColor=MUTED,
    alignment=TA_CENTER,
)


# ==============================================================================
# HELPER: Two-column entry (left: title+subtitle, right: date)
# ==============================================================================
def two_col_entry(title, subtitle, detail, date_str, link=None):
    """Build a two-column table: left content, right date."""
    left_content = []
    if link:
        left_content.append(
            Paragraph(f'<a href="{link}" color="#B8860B">{title}</a>', style_entry_header)
        )
    else:
        left_content.append(Paragraph(title, style_entry_header))
    if subtitle:
        left_content.append(Paragraph(subtitle, style_entry_sub))
    if detail:
        left_content.append(Paragraph(detail, style_entry_detail))

    right_content = Paragraph(date_str, style_date) if date_str else Paragraph("", style_date)

    tbl = Table(
        [[left_content, right_content]],
        colWidths=[CONTENT_W - 90, 90],
    )
    tbl.setStyle(
        TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ])
    )
    return tbl


def section_header(title):
    """Build a section header with a gold rule underneath."""
    return [
        Paragraph(title.upper(), style_section),
        HRFlowable(
            width="100%",
            thickness=0.5,
            color=GOLD,
            spaceBefore=2,
            spaceAfter=6,
        ),
    ]


# ==============================================================================
# PAGE TEMPLATE — header/footer with page numbers
# ==============================================================================
def add_page_decorations(canv, doc):
    """Draw page number and footer on every page."""
    canv.saveState()

    # Footer rule
    canv.setStrokeColor(LIGHT_RULE)
    canv.setLineWidth(0.5)
    canv.line(MARGIN_L, MARGIN_B - 18, PAGE_W - MARGIN_R, MARGIN_B - 18)

    # Left footer: name
    canv.setFont("Helvetica", 8)
    canv.setFillColor(MUTED)
    canv.drawString(MARGIN_L, MARGIN_B - 30, "Wudneh Tilahun Mengist — Curriculum Vitae")

    # Right footer: page number
    page_num = canv.getPageNumber()
    canv.drawRightString(
        PAGE_W - MARGIN_R,
        MARGIN_B - 30,
        f"Page {page_num}",
    )

    # Center footer: last updated
    canv.drawCentredString(
        PAGE_W / 2,
        MARGIN_B - 30,
        "Updated September 2026",
    )

    canv.restoreState()


# ==============================================================================
# BUILD CV CONTENT
# ==============================================================================
def build_cv():
    output_path = "/home/z/my-project/public/cv.pdf"

    doc = SimpleDocTemplate(
        output_path,
        pagesize=LETTER,
        leftMargin=MARGIN_L,
        rightMargin=MARGIN_R,
        topMargin=MARGIN_T,
        bottomMargin=MARGIN_B,
        title="Wudneh Tilahun Mengist — Curriculum Vitae",
        author="Wudneh Tilahun Mengist",
        subject="Academic Curriculum Vitae",
    )

    story = []

    # ====================== HEADER ======================
    story.append(Paragraph("Wudneh Tilahun Mengist", style_name))
    story.append(Paragraph("Mathematics Lecturer &amp; Researcher", style_title))

    # Contact info — with hyperlinks
    contact_lines = [
        f'<a href="https://dtu.edu.et/" color="#5C4A36">Debre Tabor University</a> · Department of Mathematics · Debre Tabor, Amhara, Ethiopia',
        f'Email: <a href="mailto:wudneh.tilahun@dbtu.edu.et" color="#5C4A36">wudneh.tilahun@dbtu.edu.et</a>  |  Phone: +251 938 234 343',
        f'<a href="https://orcid.org/0000-0002-4335-3741" color="#5C4A36">ORCID: 0000-0002-4335-3741</a>  |  <a href="https://www.youtube.com/@hybridmathhub" color="#5C4A36">YouTube: @hybridmathhub</a>',
    ]
    for line in contact_lines:
        story.append(Paragraph(line, style_contact))

    # Top rule
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.2, color=GOLD, spaceAfter=4))

    # ====================== RESEARCH INTERESTS ======================
    story.extend(section_header("Research Interests"))
    story.append(Paragraph(
        "Numerical analysis · Spline collocation methods · Singularly perturbed boundary value problems · "
        "Burgers' equation · Computational mathematics · Blended learning and Open edX instructional design",
        style_body
    ))

    # ====================== EDUCATION ======================
    story.extend(section_header("Education"))

    story.append(two_col_entry(
        "Master of Science (MSc) in Mathematics",
        "Bahir Dar University",
        "Specialization: Numerical Analysis",
        "2008 — 2010",
        link="https://www.bdu.edu.et/",
    ))

    story.append(two_col_entry(
        "Bachelor of Science (BSc) in Mathematics",
        "Arba Minch University",
        "Specialization: Applied Mathematics",
        "2003 — 2007",
        link="https://www.amu.edu.et/",
    ))

    # ====================== ACADEMIC APPOINTMENTS ======================
    story.extend(section_header("Academic Appointments"))

    story.append(two_col_entry(
        "Lecturer in Mathematics",
        "Debre Tabor University",
        "Undergraduate teaching across Numerical Analysis, Calculus, Linear Algebra, "
        "Differential Equations, and Number Theory. Active in faculty development and "
        "digital learning initiatives.",
        "2011 — Present",
        link="https://dtu.edu.et/",
    ))

    story.append(two_col_entry(
        "Layout Editor",
        "Journal of Interdisciplinary Science &amp; Technology (JIST)",
        "Typesetting, design, and editorial standards for the inaugural volume. "
        "LaTeX template design and brand identity.",
        "2023 — Present",
        link="https://www.dtujist.com/",
    ))

    story.append(two_col_entry(
        "Master / Field Trainer",
        "National Election Board of Ethiopia",
        "Operational training and leadership across regional training cycles.",
        "2021 — 2026",
        link="https://www.nebe.gov.et/",
    ))

    # ====================== PUBLICATIONS ======================
    story.extend(section_header("Publications"))

    story.append(Paragraph("Peer-Reviewed Journal Article", style_subsection))

    story.append(Paragraph(
        'Mengist, W. T., et al. (2019). An exploration of quintic Hermite splines to '
        'solve Burgers\' equation. <i>Arabian Journal of Mathematics, 9</i>(2), 351–367. '
        '<a href="https://doi.org/10.1007/s40065-019-0247-y" color="#B8860B">https://doi.org/10.1007/s40065-019-0247-y</a>',
        style_citation,
    ))
    story.append(Paragraph(
        '<font color="#5C4A36"><i>Metrics:</i> 1,212 accesses · 13 citations · Published in Springer Nature</font>',
        style_citation,
    ))

    story.append(Paragraph("Manuscript Under Review", style_subsection))

    story.append(Paragraph(
        'Mengist, W. T. (2025, under review). An adaptive B-spline collocation framework '
        'for singularly perturbed boundary value problems with boundary layers. '
        '<i>Journal of Interdisciplinary Science and Technology (JIST)</i>. '
        '<a href="https://www.dtujist.com/" color="#B8860B">https://www.dtujist.com/</a>',
        style_citation,
    ))

    story.append(Paragraph("Technical Reports &amp; Frameworks", style_subsection))

    story.append(Paragraph(
        'Mengist, W. T. (2024). Enhancing research and manuscript writing capabilities '
        'for secondary school and college mathematics teachers [Regional training framework].',
        style_citation,
    ))

    # ====================== TEACHING ======================
    story.extend(section_header("Teaching Experience"))

    story.append(Paragraph(
        "Undergraduate courses taught at Debre Tabor University (2011 — Present):",
        style_body,
    ))

    courses = [
        ("MATH 2011", "Numerical Analysis"),
        ("MATH 1011", "Calculus I — Differential"),
        ("MATH 1012", "Calculus II — Integral"),
        ("MATH 2031", "Number Theory"),
        ("MATH 2041", "Linear Algebra"),
        ("MATH 3051", "Differential Equations"),
    ]

    for code, name in courses:
        story.append(Paragraph(
            f'<font face="Helvetica" size="8" color="#B8860B">{code}</font>  &nbsp; {name}',
            style_skill,
        ))

    # ====================== DIGITAL LEARNING & OUTREACH ======================
    story.extend(section_header("Digital Learning &amp; Outreach"))

    story.append(two_col_entry(
        "Creator &amp; Educator",
        "The Hybrid Math Hub (YouTube)",
        "Conceptualize, script, and produce video tutorials on numerical analysis, "
        "blended learning, multimedia design principles, and UDL-based course redesign.",
        "2020 — Present",
        link="https://www.youtube.com/@hybridmathhub",
    ))

    story.append(two_col_entry(
        "IDLT Trainer",
        "Interactive Digital Learning &amp; Teaching, Debre Tabor University",
        "Facilitated courses and mentored faculty on Open edX integration and "
        "modern digital learning frameworks.",
        "2024",
        link="https://dtu.edu.et/",
    ))

    # ====================== CERTIFICATIONS ======================
    story.extend(section_header("Certifications &amp; Professional Training"))

    certs = [
        ("Financial Services &amp; Capital Markets", "Ethiopian Securities Exchange (ESX) Digital Academy", "https://www.esx.com.et/"),
        ("English Language Improvement Program (ELIP)", "DTU Academic Development", "https://dtu.edu.et/"),
    ]
    for title, issuer, url in certs:
        story.append(Paragraph(
            f'<b>{title}</b> — <a href="{url}" color="#B8860B"><i>{issuer}</i></a>',
            style_citation,
        ))

    # ====================== TECHNICAL COMPETENCIES ======================
    story.extend(section_header("Technical Competencies"))

    competencies = [
        ("Mathematical Computing", "MATLAB, Python, R &amp; SPSS, Wolfram Mathematica"),
        ("Typesetting &amp; Design", "LaTeX (Overleaf), Graphic Design, Document Layout"),
        ("E-Learning &amp; Pedagogy", "Open edX, Instructional Design, Video Production"),
        ("Numerical Methods", "Spline Collocation, Burgers' Equation, Singular Perturbation, Finite Differences"),
    ]
    for cat, items in competencies:
        story.append(Paragraph(f"<b>{cat}:</b> {items}", style_skill))

    # ====================== PROFESSIONAL AFFILIATIONS ======================
    story.extend(section_header("Professional Affiliations"))

    story.append(Paragraph(
        f'<a href="https://orcid.org/0000-0002-4335-3741" color="#B8860B">ORCID</a> — '
        f'Open Researcher and Contributor ID (0000-0002-4335-3741)',
        style_citation,
    ))
    story.append(Paragraph(
        f'<a href="https://www.dtujist.com/" color="#B8860B">JIST</a> — '
        f'Journal of Interdisciplinary Science and Technology (Editorial Board)',
        style_citation,
    ))

    # ====================== LANGUAGES ======================
    story.extend(section_header("Languages"))
    story.append(Paragraph(
        "<b>Amharic</b> (Native) &nbsp;·&nbsp; <b>English</b> (Professional working proficiency)",
        style_skill,
    ))

    # ====================== REFERENCES ======================
    story.extend(section_header("References"))
    story.append(Paragraph(
        "Available upon request. Please contact via email at "
        '<a href="mailto:wudneh.tilahun@dbtu.edu.et" color="#B8860B">wudneh.tilahun@dbtu.edu.et</a> '
        "or via the contact form on the portfolio website.",
        style_body,
    ))

    # Build the PDF
    doc.build(story, onFirstPage=add_page_decorations, onLaterPages=add_page_decorations)

    size = os.path.getsize(output_path)
    print(f"✓ CV PDF generated: {output_path}")
    print(f"  Size: {size:,} bytes ({size/1024:.1f} KB)")

    # Get page count
    import subprocess
    result = subprocess.run(["pdfinfo", output_path], capture_output=True, text=True)
    for line in result.stdout.splitlines():
        if line.startswith("Pages:"):
            print(f"  {line.strip()}")
            break


if __name__ == "__main__":
    build_cv()
