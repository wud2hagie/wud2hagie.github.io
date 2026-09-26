// Central content store for the portfolio.
// Edit this file to update copy across the entire site.

export const SITE = {
  name: "Wudneh Tilahun Mengist",
  shortName: "Wudneh",
  title: "Mathematics Lecturer & Researcher",
  affiliation: "Debre Tabor University",
  affiliationUrl: "https://dtu.edu.et/",
  location: "Debre Tabor, Amhara, Ethiopia",
  tagline:
    "Bridging rigorous numerical analysis, computational mathematics, and advanced digital learning methodologies.",
  email: "wudneh.tilahun@dbtu.edu.et",
  phone: "+251938234343",
  orcid: "https://orcid.org/0000-0002-4335-3741",
  orcidId: "0000-0002-4335-3741",
  youtube: "https://www.youtube.com/@hybridmathhub",
  youtubeHandle: "@hybridmathhub",
  url: "https://wudnehtm-mengist.netlify.app",
  timezone: "Africa/Addis_Ababa",
  lastUpdated: "September 2026",
} as const;

export const INSTITUTIONS = {
  dtu: { name: "Debre Tabor University", url: "https://dtu.edu.et/" },
  bdu: { name: "Bahir Dar University", url: "https://www.bdu.edu.et/" },
  amu: { name: "Arba Minch University", url: "https://www.amu.edu.et/" },
  springer: { name: "Springer Nature", url: "https://www.springer.com/" },
  arabianJM: {
    name: "Arabian Journal of Mathematics",
    url: "https://link.springer.com/journal/40065",
  },
  jist: {
    name: "Journal of Interdisciplinary Science and Technology",
    url: "https://www.dtujist.com/",
  },
  nebe: {
    name: "National Election Board of Ethiopia",
    url: "https://www.nebe.gov.et/",
  },
  esx: {
    name: "Ethiopian Securities Exchange",
    url: "https://www.esx.com.et/",
  },
  overleaf: { name: "Overleaf", url: "https://www.overleaf.com/" },
  openedx: { name: "Open edX", url: "https://openedx.org/" },
  orcid: { name: "ORCID", url: "https://orcid.org/" },
} as const;

export const ABOUT = {
  heading: "Professional Profile",
  paragraphs: [
    "I am a Mathematics Lecturer and Researcher in the Department of Mathematics at Debre Tabor University, Ethiopia. I hold a Master of Science in Mathematics specializing in Numerical Analysis from Bahir Dar University and a Bachelor of Science in Applied Mathematics from Arba Minch University. My academic foundation focuses on solving complex mathematical models efficiently.",
    "Since 2011, I have been committed to cultivating undergraduate excellence across fundamental and applied courses including Numerical Analysis, Calculus, and Number Theory. Beyond traditional instruction, I am an active proponent of modern instructional design frameworks and open educational resources.",
    "My technical expertise spans advanced mathematical software, data analysis, and professional typesetting tools such as LaTeX, Python, MATLAB, and Wolfram Mathematica. Whether developing open-access digital learning modules on Open edX or curating educational content for my channel, I strive to make mathematics intuitive and widely accessible.",
  ],
  skills: [
    {
      category: "Mathematical Computing",
      icon: "calculator",
      items: ["MATLAB", "Python", "R & SPSS", "Mathematica"],
    },
    {
      category: "Typesetting & Design",
      icon: "type",
      items: ["LaTeX (Overleaf)", "Graphic Design", "Document Layout"],
    },
    {
      category: "E-Learning & Pedagogy",
      icon: "cap",
      items: ["Open edX", "Instructional Design", "Video Production"],
    },
    {
      category: "Numerical Methods",
      icon: "sigma",
      items: [
        "Spline Collocation",
        "Burgers' Equation",
        "Singular Perturbation",
        "Finite Differences",
      ],
    },
  ],
} as const;

export const STATS = [
  { label: "Years Teaching", value: 15, suffix: "+" },
  { label: "Undergraduate Courses", value: 12, suffix: "" },
  { label: "Published Citations", value: 13, suffix: "" },
  { label: "Publication Accesses", value: 1212, suffix: "+" },
  { label: "YouTube Subscribers", value: 15, suffix: "" },
  { label: "Faculty Trained (IDLT)", value: 80, suffix: "+" },
] as const;

export const CAREER_TIMELINE = [
  {
    year: "2003",
    title: "BSc in Applied Mathematics",
    org: "Arba Minch University",
    orgUrl: "https://www.amu.edu.et/",
    description:
      "Began undergraduate studies in Applied Mathematics, building the foundational understanding of mathematical modeling, computation, and analysis that would shape a research career.",
    category: "education",
  },
  {
    year: "2008",
    title: "MSc Specialization in Numerical Analysis",
    org: "Bahir Dar University",
    orgUrl: "https://www.bdu.edu.et/",
    description:
      "Pursued postgraduate study specializing in Numerical Analysis — focusing on spline-based collocation methods for differential equations with sharp gradients.",
    category: "education",
  },
  {
    year: "2011",
    title: "Appointed Lecturer in Mathematics",
    org: "Debre Tabor University",
    orgUrl: "https://dtu.edu.et/",
    description:
      "Joined the Department of Mathematics at DTU, beginning what is now a fifteen-year commitment to undergraduate teaching across Numerical Analysis, Calculus, Number Theory, Linear Algebra, and Differential Equations.",
    category: "career",
  },
  {
    year: "2019",
    title: "Quintic Hermite Splines for Burgers' Equation",
    org: "Arabian Journal of Mathematics — Springer Nature",
    orgUrl: "https://link.springer.com/journal/40065",
    description:
      "Co-authored peer-reviewed publication introducing an innovative collocation scheme that directly solves the non-linear Burgers' equation using quintic Hermite splines, bypassing the conventional Hopf-Cole transformation.",
    category: "publication",
  },
  {
    year: "2020",
    title: "Founded The Hybrid Math Hub",
    org: "YouTube Educational Channel",
    orgUrl: "https://www.youtube.com/@hybridmathhub",
    description:
      "Launched an educational channel dedicated to making complex mathematical concepts accessible through structured video tutorials — currently featuring courses on blended learning, multimedia design principles, and UDL-based course redesign.",
    category: "milestone",
  },
  {
    year: "2021",
    title: "Certified Master & Field Trainer",
    org: "National Election Board of Ethiopia",
    orgUrl: "https://www.nebe.gov.et/",
    description:
      "Certified and deployed across regional training cycles as an official Master and Field Trainer for electoral operations — a five-year commitment to operational training and leadership.",
    category: "certification",
  },
  {
    year: "2023",
    title: "Layout Editor — JIST Volume 1, Issue 1",
    org: "Journal of Interdisciplinary Science and Technology",
    orgUrl: "https://www.dtujist.com/",
    description:
      "Designed the visual brand identity, cover specifications, and professional article layout templates in LaTeX for the inaugural volume of DTU's flagship interdisciplinary journal.",
    category: "career",
  },
  {
    year: "2024",
    title: "IDLT Trainer — Faculty Development",
    org: "Debre Tabor University",
    orgUrl: "https://dtu.edu.et/",
    description:
      "Served as a trainer in the Interactive Digital Learning & Teaching program, mentoring faculty on modern digital learning frameworks and Open edX integration across the university.",
    category: "milestone",
  },
  {
    year: "2025",
    title: "Adaptive B-Spline Collocation Framework — Under Review",
    org: "Journal of Interdisciplinary Science and Technology (JIST)",
    orgUrl: "https://www.dtujist.com/",
    description:
      "Submitted a manuscript proposing an adaptive B-spline collocation framework that dynamically refines mesh density near boundary layers to capture sharp gradients in singularly perturbed BVPs with high precision.",
    category: "publication",
  },
] as const;

export const METHODS = [
  {
    name: "Quintic Hermite Spline Collocation",
    family: "Spline Methods",
    description:
      "A high-order collocation scheme using C²-continuous quintic Hermite splines as base functions. Forces the differential equation to hold at selected collocation points, yielding smooth solutions with relatively few grid points.",
    applications: ["Burgers' equation", "Nonlinear PDEs", "Shock-capturing"],
    equation: "u_h(x,t) = Σ cᵢ(t) · Hᵢ⁵(x)",
    icon: "spline",
  },
  {
    name: "Adaptive B-Spline Collocation",
    family: "Adaptive Methods",
    description:
      "An adaptive framework that refines mesh density near boundary layers in singularly perturbed BVPs. Uses B-spline basis functions of varying orders with dynamic mesh adaptation guided by a posteriori error estimators.",
    applications: ["Singular perturbation", "Boundary layers", "Stiff BVPs"],
    equation: "‖u - u_h‖ ≤ C · h^p · ε",
    icon: "mesh",
  },
  {
    name: "Finite Difference Schemes",
    family: "Classical Methods",
    description:
      "Classical discretization techniques replacing derivatives with difference quotients on structured grids. Forms the pedagogical foundation for teaching numerical analysis and verifying more advanced methods.",
    applications: ["Teaching", "Verification", "Baseline comparisons"],
    equation: "f'(x) ≈ [f(x+h) - f(x-h)] / 2h",
    icon: "grid",
  },
  {
    name: "Hopf-Cole Transformation",
    family: "Analytical Methods",
    description:
      "A classical transformation converting the nonlinear Burgers' equation into the linear heat equation, enabling analytical solutions. My research develops methods that bypass this transformation for direct numerical treatment.",
    applications: ["Burgers' equation", "Benchmarking", "Validation"],
    equation: "u = -2ν ∂ₓ(ln φ)",
    icon: "transform",
  },
] as const;

export const CITATION_HISTORY = [
  { year: 2019, citations: 1, accesses: 95 },
  { year: 2020, citations: 3, accesses: 220 },
  { year: 2021, citations: 5, accesses: 410 },
  { year: 2022, citations: 8, accesses: 680 },
  { year: 2023, citations: 10, accesses: 905 },
  { year: 2024, citations: 12, accesses: 1090 },
  { year: 2025, citations: 13, accesses: 1212 },
] as const;

export const RESEARCH_SPOTLIGHT = {
  title:
    "An Adaptive B-Spline Collocation Framework for Singularly Perturbed Boundary Value Problems with Boundary Layers",
  status: "Under Review",
  venue: "Journal of Interdisciplinary Science and Technology (JIST)",
  venueUrl: "https://www.dtujist.com/",
  submitted: "2025",
  abstract:
    "This manuscript proposes an adaptive B-spline collocation framework that dynamically refines mesh density near boundary layers to capture sharp gradients in singularly perturbed boundary value problems (SPBVPs) with high precision. Unlike uniform mesh approaches, the proposed method uses a posteriori error estimators to guide local refinement, achieving comparable accuracy with significantly fewer grid points.",
  key_claims: [
    "Achieves O(h^p) convergence with p ≤ 6 in smooth regions",
    "Reduces grid point count by ~40% versus uniform mesh at equal accuracy",
    "Demonstrates stability across Reynolds numbers ranging from 10¹ to 10⁴",
    "Validated against the Hopf-Cole analytical benchmark for Burgers' equation",
  ],
  url: "https://www.dtujist.com/index.php/jist/authorDashboard/submission/34",
} as const;

export const COURSES = [
  {
    code: "MATH 2011",
    title: "Numerical Analysis",
    level: "Undergraduate",
    description:
      "Root-finding, interpolation, numerical integration & differentiation, ODE solvers, error analysis. Emphasis on practical implementation in MATLAB and Python.",
    topics: ["Interpolation", "Quadrature", "ODE Methods", "Error Analysis"],
  },
  {
    code: "MATH 1011",
    title: "Calculus I — Differential",
    level: "Undergraduate",
    description:
      "Limits, continuity, derivatives, applications of derivatives, introduction to optimization and curve sketching.",
    topics: ["Limits", "Derivatives", "Optimization", "Related Rates"],
  },
  {
    code: "MATH 1012",
    title: "Calculus II — Integral",
    level: "Undergraduate",
    description:
      "Antiderivatives, definite integrals, techniques of integration, applications to area and volume, Taylor series.",
    topics: ["Integration", "Series", "Applications", "Taylor Polynomials"],
  },
  {
    code: "MATH 2031",
    title: "Number Theory",
    level: "Undergraduate",
    description:
      "Divisibility, primes, modular arithmetic, Diophantine equations, Fermat's little theorem, RSA cryptography introduction.",
    topics: ["Primes", "Modular Arithmetic", "Diophantine", "RSA"],
  },
  {
    code: "MATH 2041",
    title: "Linear Algebra",
    level: "Undergraduate",
    description:
      "Vector spaces, matrices, determinants, eigenvalues, linear transformations, and applications to differential equations.",
    topics: ["Matrices", "Eigenvalues", "Vector Spaces", "Transforms"],
  },
  {
    code: "MATH 3051",
    title: "Differential Equations",
    level: "Undergraduate",
    description:
      "First-order equations, linear ODEs, systems of ODEs, Laplace transforms, boundary value problems, and applications.",
    topics: ["ODEs", "Laplace Transforms", "BVPs", "Systems"],
  },
] as const;

export const PUBLICATIONS = [
  {
    title:
      "An exploration of quintic Hermite splines to solve Burgers' equation",
    venue: "Arabian Journal of Mathematics (Springer Nature)",
    venueUrl: "https://link.springer.com/journal/40065",
    year: 2019,
    status: "published",
    authors: "W. T. Mengist et al.",
    description:
      "Introduces an innovative collocation scheme utilizing quintic Hermite splines as base functions to directly solve the non-linear Burgers' equation, effectively bypassing conventional transformations like Hopf-Cole while maintaining high accuracy.",
    metrics: { accesses: 1212, citations: 13 },
    doi: "10.1007/s40065-019-0247-y",
    apa: "Mengist, W. T., et al. (2019). An exploration of quintic Hermite splines to solve Burgers' equation. Arabian Journal of Mathematics, 9(2), 351–367. https://doi.org/10.1007/s40065-019-0247-y",
    links: [
      { label: "Springer", url: "https://link.springer.com/journal/40065" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-4335-3741" },
    ],
  },
  {
    title:
      "An Adaptive B-Spline Collocation Framework for Singularly Perturbed Boundary Value Problems with Boundary Layers",
    venue: "Journal of Interdisciplinary Science and Technology (JIST)",
    venueUrl: "https://www.dtujist.com/",
    year: 2025,
    status: "review",
    authors: "W. T. Mengist",
    description:
      "Proposes an adaptive B-spline collocation framework that dynamically refines mesh density near boundary layers to capture sharp gradients in singularly perturbed BVPs with high precision.",
    metrics: null,
    doi: null,
    apa: "Mengist, W. T. (2025, under review). An adaptive B-spline collocation framework for singularly perturbed boundary value problems with boundary layers. Journal of Interdisciplinary Science and Technology.",
    links: [
      {
        label: "Submission Dashboard",
        url: "https://www.dtujist.com/index.php/jist/authorDashboard/submission/34",
      },
    ],
  },
  {
    title:
      "Teacher Capacity Building Framework for Mathematics Educators",
    venue: "Regional Training Initiative",
    venueUrl: null,
    year: 2024,
    status: "project",
    authors: "W. T. Mengist",
    description:
      "A comprehensive regional training framework titled 'Enhancing Research and Manuscript Writing Capabilities for Secondary School and College Mathematics Teachers.'",
    metrics: null,
    doi: null,
    apa: "Mengist, W. T. (2024). Enhancing research and manuscript writing capabilities for secondary school and college mathematics teachers [Regional training framework].",
    links: [],
  },
] as const;

export const PROJECTS = [
  {
    title: "Blended Learning & Open edX Content",
    description:
      "Developed interactive digital course assets, video modules, and structured assessments as part of digital higher education training initiatives, deployed for seamless online accessibility.",
    status: "Completed Framework",
    icon: "rocket",
  },
  {
    title: "Journal Layout & Template Design (JIST)",
    description:
      "Designed visual brand identity, cover specifications, and professional article layout templates in LaTeX for Volume 1, Issue 1 of the Journal of Interdisciplinary Science and Technology.",
    status: "Active Editorial Role",
    icon: "layout",
  },
  {
    title: "Teacher Capacity Building Initiative",
    description:
      "Authored a comprehensive regional training framework titled 'Enhancing Research and Manuscript Writing Capabilities for Secondary School and College Mathematics Teachers.'",
    status: "Community Impact",
    icon: "users",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Financial Services & Capital Markets",
    issuer: "Ethiopian Securities Exchange (ESX) Digital Academy",
    issuerUrl: "https://www.esx.com.et/",
    description:
      "Completed professional training modules covering modern financial ecosystems, market operations, and investment structures.",
    icon: "trending",
  },
  {
    title: "Interactive Digital Learning & Teaching (IDLT)",
    issuer: "Debre Tabor University",
    issuerUrl: "https://dtu.edu.et/",
    description:
      "Served as an IDLT Trainer, facilitating courses and mentoring faculty on modern digital learning frameworks and Open edX integration.",
    icon: "presentation",
  },
  {
    title: "Master & Field Trainer (Electoral Operations)",
    issuer: "National Election Board of Ethiopia",
    issuerUrl: "https://www.nebe.gov.et/",
    description:
      "Certified and deployed across regional training cycles as an official Master and Field Trainer (2021–2026).",
    icon: "badge",
  },
  {
    title: "English Language Improvement Program (ELIP)",
    issuer: "DTU Academic Development",
    issuerUrl: "https://dtu.edu.et/",
    description:
      "Completed specialized professional development focused on advanced academic communication, instructional delivery, and pedagogy enhancement.",
    icon: "language",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Lecturer in Mathematics",
    organization: "Debre Tabor University",
    organizationUrl: "https://dtu.edu.et/",
    focus: "Undergraduate Teaching & Research (2011–Present)",
    period: "2011 — Present",
  },
  {
    role: "Creator & Educator",
    organization: "The Hybrid Math Hub",
    organizationUrl: "https://www.youtube.com/@hybridmathhub",
    focus: "Digital Content Production & Blended Learning",
    period: "2020 — Present",
  },
  {
    role: "Layout Editor",
    organization: "Journal of Interdisciplinary Science & Technology (JIST)",
    organizationUrl: "https://www.dtujist.com/",
    focus: "Typesetting, Design, and Editorial Standards",
    period: "2023 — Present",
  },
  {
    role: "Master / Field Trainer",
    organization: "National Election Board of Ethiopia",
    organizationUrl: "https://www.nebe.gov.et/",
    focus: "Operational Training & Leadership (2021–2026)",
    period: "2021 — 2026",
  },
] as const;

export const EDUCATION = [
  {
    degree: "Master of Science (MSc)",
    institution: "Bahir Dar University",
    institutionUrl: "https://www.bdu.edu.et/",
    specialization: "Numerical Analysis",
    period: "2008 — 2010",
  },
  {
    degree: "Bachelor of Science (BSc)",
    institution: "Arba Minch University",
    institutionUrl: "https://www.amu.edu.et/",
    specialization: "Applied Mathematics",
    period: "2003 — 2007",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Wudneh's treatment of spline collocation methods in our Numerical Analysis course set a department standard. He consistently connects theoretical rigor to computational implementation in ways students can actually reproduce — a rare combination in undergraduate instruction.",
    name: "Colleague, Department of Mathematics",
    title: "Debre Tabor University",
  },
  {
    quote:
      "The Hybrid Math Hub's Calculus I course introduction gave me a framework for navigating blended learning that I still use today. The way he structures multimedia principles — drawing from UDL, design research, and pedagogy — exceeds what most paid courses offer.",
    name: "Undergraduate Cohort Representative",
    title: "Calculus I (Math 2021), 2024 Academic Year",
  },
  {
    quote:
      "As an IDLT trainer, Wudneh reshaped how our faculty approaches Open edX course design. Patient, hands-on, and genuinely invested in our progress — and always anchoring digital tools in evidence-based multimedia learning principles.",
    name: "IDLT Workshop Participant",
    title: "Faculty Development Program, 2024",
  },
] as const;

export const YOUTUBE_VIDEOS = [
  {
    id: "oose5hJv__Q",
    title: "Calculus I (Math 2021) — Course Introduction & Blended Learning Guide",
    description:
      "Course introduction and blended learning guide for Calculus I (Math 2021) at Debre Tabor University — how the course is structured, what to expect, and how to succeed in a hybrid learning environment.",
  },
  {
    id: "18W9xDMN6Yg",
    title: "Multimedia Principles for Online Courses",
    description:
      "Evidence-based multimedia design principles for creating effective online courses — covering the modality, redundancy, and coherence principles every educator should know.",
  },
  {
    id: "Mmchb0nHstg",
    title: "Reducing Anxiety through Better Design — A UDL-Based Redesign of the Learner Analysis",
    description:
      "Applying Universal Design for Learning (UDL) principles to redesign course materials in ways that reduce learner anxiety and broaden accessibility for all students.",
  },
] as const;

export const CONTACT = {
  email: SITE.email,
  phone: SITE.phone,
  location: SITE.location,
  affiliation: SITE.affiliation,
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#research", label: "Research" },
  { href: "#methods", label: "Methods" },
  { href: "#teaching", label: "Teaching" },
  { href: "#publications", label: "Publications" },
  { href: "#youtube", label: "Hybrid Math Hub" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;
