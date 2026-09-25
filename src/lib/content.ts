// Central content store for the portfolio.
// Edit this file to update copy across the entire site.

export const SITE = {
  name: "Wudneh Tilahun Mengist",
  shortName: "Wudneh",
  title: "Mathematics Lecturer & Researcher",
  affiliation: "Debre Tabor University",
  location: "Debre Tabor, Amhara, Ethiopia",
  tagline:
    "Bridging rigorous numerical analysis, computational mathematics, and advanced digital learning methodologies.",
  email: "wudneh.tilahun@ethernet.edu.et",
  phone: "+251938234343",
  orcid: "https://orcid.org/0000-0002-4335-3741",
  youtube: "https://www.youtube.com/@hybridmathhub",
  youtubeHandle: "@hybridmathhub",
  url: "https://wudnehtm.netlify.app",
} as const;

export const ABOUT = {
  heading: "Professional Profile",
  paragraphs: [
    "I am a dedicated Mathematics Lecturer and Researcher based in the Department of Mathematics at Debre Tabor University, Ethiopia. Holding a Master of Science degree in Mathematics specializing in Numerical Analysis from Bahir Dar University and a Bachelor of Science in Applied Mathematics from Arba Minch University, my academic foundation focuses on solving complex mathematical models efficiently.",
    "Since 2011, I have been deeply committed to cultivating undergraduate excellence across fundamental and applied courses including Numerical Analysis, Calculus, and Number Theory. Beyond traditional instruction, I am an active proponent of modern instructional design frameworks and open educational resources.",
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
  { label: "Years Teaching", value: 14, suffix: "+" },
  { label: "Undergraduate Courses", value: 12, suffix: "" },
  { label: "Published Citations", value: 13, suffix: "" },
  { label: "Publication Accesses", value: 1212, suffix: "+" },
  { label: "YouTube Subscribers", value: 1200, suffix: "+" },
  { label: "Faculty Trained (IDLT)", value: 80, suffix: "+" },
] as const;

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
    year: 2019,
    status: "published",
    authors: "W. T. Mengist et al.",
    description:
      "Introduces an innovative collocation scheme utilizing quintic Hermite splines as base functions to directly solve the non-linear Burgers' equation, effectively bypassing conventional transformations like Hopf-Cole while maintaining high accuracy.",
    metrics: { accesses: 1212, citations: 13 },
    links: [
      { label: "Springer", url: "https://link.springer.com/journal/40065" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-4335-3741" },
    ],
  },
  {
    title:
      "An Adaptive B-Spline Collocation Framework for Singularly Perturbed Boundary Value Problems with Boundary Layers",
    venue: "Journal of Interdisciplinary Science and Technology (JIST)",
    year: 2025,
    status: "review",
    authors: "W. T. Mengist",
    description:
      "Proposes an adaptive B-spline collocation framework that dynamically refines mesh density near boundary layers to capture sharp gradients in singularly perturbed BVPs with high precision.",
    metrics: null,
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
    year: 2024,
    status: "project",
    authors: "W. T. Mengist",
    description:
      "A comprehensive regional training framework titled 'Enhancing Research and Manuscript Writing Capabilities for Secondary School and College Mathematics Teachers.'",
    metrics: null,
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
    description:
      "Completed professional training modules covering modern financial ecosystems, market operations, and investment structures.",
    icon: "trending",
  },
  {
    title: "Interactive Digital Learning & Teaching (IDLT)",
    issuer: "Debre Tabor University",
    description:
      "Served as an IDLT Trainer, facilitating courses and mentoring faculty on modern digital learning frameworks and Open edX integration.",
    icon: "presentation",
  },
  {
    title: "Master & Field Trainer (Electoral Operations)",
    issuer: "National Election Board of Ethiopia",
    description:
      "Certified and deployed across regional training cycles as an official Master and Field Trainer (2021–2026).",
    icon: "badge",
  },
  {
    title: "English Language Improvement Program (ELIP)",
    issuer: "DTU Academic Development",
    description:
      "Completed specialized professional development focused on advanced academic communication, instructional delivery, and pedagogy enhancement.",
    icon: "language",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Lecturer in Mathematics",
    organization: "Debre Tabor University",
    focus: "Undergraduate Teaching & Research (2011–Present)",
    period: "2011 — Present",
  },
  {
    role: "Creator & Educator",
    organization: "The Hybrid Math Hub",
    focus: "Digital Content Production & Blended Learning",
    period: "2020 — Present",
  },
  {
    role: "Layout Editor",
    organization: "Journal of Interdisciplinary Science & Technology (JIST)",
    focus: "Typesetting, Design, and Editorial Standards",
    period: "2023 — Present",
  },
  {
    role: "Master / Field Trainer",
    organization: "National Election Board of Ethiopia",
    focus: "Operational Training & Leadership (2021–2026)",
    period: "2021 — 2026",
  },
] as const;

export const EDUCATION = [
  {
    degree: "Master of Science (MSc)",
    institution: "Bahir Dar University",
    specialization: "Numerical Analysis",
    period: "2008 — 2010",
  },
  {
    degree: "Bachelor of Science (BSc)",
    institution: "Arba Minch University",
    specialization: "Applied Mathematics",
    period: "2003 — 2007",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Wudneh has a rare gift for translating complex numerical methods into concepts students can actually visualize and apply. His course materials on spline collocation set a new standard at our department.",
    name: "Colleague, Mathematics Department",
    title: "Debre Tabor University",
  },
  {
    quote:
      "The Hybrid Math Hub videos got me through Numerical Analysis. He breaks each method down step-by-step with worked examples — better than most paid courses I've seen.",
    name: "Student Feedback",
    title: "Undergraduate Cohort, 2024",
  },
  {
    quote:
      "As an IDLT trainer he reshaped how our faculty designs blended learning modules on Open edX. Patient, hands-on, and genuinely invested in our progress.",
    name: "Workshop Participant",
    title: "Faculty Development Program",
  },
] as const;

export const YOUTUBE_VIDEOS = [
  {
    id: "duT1H5LQ-mY",
    title: "Numerical Methods — Introduction & Course Overview",
    description:
      "A guided tour of numerical analysis: when, why, and how we approximate solutions to mathematical problems.",
  },
  {
    id: "VfKcO-3Z_oM",
    title: "Calculus Made Visual — Limits & Continuity",
    description:
      "An intuitive visual introduction to limits, continuity, and the foundational language of calculus.",
  },
  {
    id: "qjB6c6LNYu8",
    title: "Burgers' Equation — Spline Collocation Walkthrough",
    description:
      "Step-by-step derivation and Python implementation of the quintic Hermite spline collocation scheme.",
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
  { href: "#stats", label: "Impact" },
  { href: "#teaching", label: "Teaching" },
  { href: "#publications", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;
