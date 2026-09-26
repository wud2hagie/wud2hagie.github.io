// Personal brand site content store.

export const PERSON = {
  name: "Wudneh T. Mengist",
  fullName: "Wudneh Tilahun Mengist",
  title: "Mathematician · Educator · Builder",
  tagline: "I teach mathematics, study numerical analysis, and build tools that make learning more accessible.",
  location: "Debre Tabor, Ethiopia",
  email: "wudneh.tilahun@dbtu.edu.et",
  phone: "+251 938 234 343",
  timezone: "Africa/Addis_Ababa",
  lastUpdated: "September 2026",
  // Social links
  orcid: "https://orcid.org/0000-0002-4335-3741",
  youtube: "https://www.youtube.com/@hybridmathhub",
  youtubeHandle: "@hybridmathhub",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  twitter: "https://twitter.com/",
  // Academic portfolio (the other site)
  academicPortfolio: "https://wudnehtm-mengist.netlify.app/",
} as const;

export const HERO = {
  name: "Wudneh T. Mengist",
  role: "Mathematician · Educator · Builder",
  intro:
    "I teach mathematics at Debre Tabor University, research spline collocation methods for nonlinear PDEs, and build digital learning tools that make math accessible to everyone.",
  primaryCta: { label: "Explore my work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
} as const;

export const ABOUT = {
  heading: "About Me",
  paragraphs: [
    "I'm a mathematics lecturer and researcher based in Debre Tabor, Ethiopia. By day, I teach undergraduate courses in numerical analysis, calculus, and differential equations at Debre Tabor University. By night, I write, build educational content, and explore how digital tools can make mathematics more approachable.",
    "My research focuses on spline collocation methods for solving nonlinear and singularly perturbed differential equations — work that has appeared in Springer's Arabian Journal of Mathematics. I'm particularly interested in how adaptive mesh refinement can capture sharp gradients with fewer grid points.",
    "Beyond the classroom and the code editor, I run The Hybrid Math Hub, a YouTube channel dedicated to evidence-based multimedia learning principles and Universal Design for Learning (UDL). I believe great teaching is a craft — one that pairs mathematical rigor with genuine care for the learner.",
  ],
  facts: [
    { label: "Based in", value: "Debre Tabor, Ethiopia" },
    { label: "Working since", value: "2011" },
    { label: "Focus", value: "Numerical Analysis" },
    { label: "Languages", value: "Amharic, English" },
  ],
} as const;

export const NOW = {
  heading: "What I'm Doing Now",
  lastUpdated: "September 2026",
  // Inspired by nownownow.com
  items: [
    {
      category: "Research",
      title: "Adaptive B-Spline Collocation Framework",
      description:
        "Finalizing revisions on a manuscript proposing an adaptive B-spline collocation method for singularly perturbed boundary value problems. Currently under review at the Journal of Interdisciplinary Science and Technology (JIST).",
      status: "Under review",
    },
    {
      category: "Teaching",
      title: "Calculus I (Math 2021) — Fall 2026 Semester",
      description:
        "Teaching the introductory Calculus I course at Debre Tabor University, integrating blended learning modules on Open edX with traditional lecture format.",
      status: "In progress",
    },
    {
      category: "Writing",
      title: "The Hybrid Math Hub — Video Series",
      description:
        "Producing a new series on multimedia design principles for online mathematics courses, drawing from Mayer's cognitive theory of multimedia learning and UDL guidelines.",
      status: "Ongoing",
    },
    {
      category: "Learning",
      title: "Advanced LaTeX & TikZ for Mathematical Typesetting",
      description:
        "Deepening my TikZ skills for publication-quality mathematical diagrams — currently working through visualizations of boundary layer phenomena in singular perturbation problems.",
      status: "Active",
    },
    {
      category: "Reading",
      title: "Make It Stick: The Science of Successful Learning",
      description:
        "Re-reading Brown, Roediger, and McDaniel's evidence-based guide to learning — extracting principles I can apply to my Numerical Analysis course design.",
      status: "Currently reading",
    },
  ],
} as const;

export const USES = {
  heading: "What I Use",
  // Inspired by uses.this
  categories: [
    {
      name: "Hardware",
      icon: "monitor",
      items: [
        { name: "Dell Latitude 7420", note: "Daily driver — 16GB RAM, i7" },
        { name: "Samsung 27\" T550 monitor", note: "External display for grading and writing" },
        { name: "Logitech MX Master 3S", note: "Best mouse I've ever used" },
        { name: "Apple iPhone 13", note: "Photography and quick notes" },
      ],
    },
    {
      name: "Development",
      icon: "code",
      items: [
        { name: "VS Code", note: "Primary editor for Python, LaTeX, and web" },
        { name: "Overleaf", note: "Collaborative LaTeX for papers and the JIST journal" },
        { name: "Git & GitHub", note: "Version control for everything" },
        { name: "Bun", note: "JavaScript runtime — fast and reliable" },
      ],
    },
    {
      name: "Mathematical Computing",
      icon: "calculator",
      items: [
        { name: "MATLAB", note: "Numerical analysis and spline collocation experiments" },
        { name: "Python (NumPy, SciPy, Matplotlib)", note: "Open-source alternative for teaching" },
        { name: "Wolfram Mathematica", note: "Symbolic computation and verification" },
        { name: "R & SPSS", note: "Statistics and data analysis courses" },
      ],
    },
    {
      name: "Writing & Productivity",
      icon: "pen",
      items: [
        { name: "Obsidian", note: "Personal knowledge management and research notes" },
        { name: "Notion", note: "Course planning and student collaboration" },
        { name: "Grammarly", note: "Polishing academic prose" },
        { name: "Google Calendar", note: "Scheduling and time-blocking" },
      ],
    },
    {
      name: "Design & Media",
      icon: "palette",
      items: [
        { name: "Figma", note: "Designing course materials and the JIST journal layout" },
        { name: "Adobe Photoshop", note: "Photo editing for the YouTube channel" },
        { name: "OBS Studio", note: "Recording lectures and tutorials" },
        { name: "DaVinci Resolve", note: "Video editing for The Hybrid Math Hub" },
      ],
    },
    {
      name: "Teaching & E-Learning",
      icon: "graduation",
      items: [
        { name: "Open edX", note: "Hosting blended learning courses for DTU" },
        { name: "Moodle", note: "Backup LMS for institutional continuity" },
        { name: "Khan Academy", note: "Recommended supplementary resource for students" },
        { name: "Camtasia", note: "Screen recording with annotations" },
      ],
    },
  ],
} as const;

export const PROJECTS = {
  heading: "Selected Work",
  items: [
    {
      title: "Quintic Hermite Spline Collocation for Burgers' Equation",
      year: "2019",
      category: "Research",
      description:
        "Peer-reviewed publication in Springer's Arabian Journal of Mathematics introducing a direct collocation scheme using quintic Hermite splines to solve the nonlinear Burgers' equation — bypassing the conventional Hopf-Cole transformation.",
      tags: ["Numerical Analysis", "Spline Collocation", "PDEs", "Springer"],
      link: "https://link.springer.com/journal/40065",
      linkLabel: "Read on Springer",
      metrics: "1,212 accesses · 13 citations",
    },
    {
      title: "Adaptive B-Spline Collocation Framework",
      year: "2025",
      category: "Research",
      description:
        "Manuscript under review at the Journal of Interdisciplinary Science and Technology (JIST). Proposes an adaptive mesh refinement framework for singularly perturbed boundary value problems, achieving high precision near boundary layers with fewer grid points.",
      tags: ["B-Splines", "Singular Perturbation", "Adaptive Methods"],
      link: "https://www.dtujist.com/",
      linkLabel: "View at JIST",
      metrics: "Under review",
    },
    {
      title: "The Hybrid Math Hub — YouTube Channel",
      year: "2020 — Present",
      category: "Education",
      description:
        "Educational YouTube channel producing video tutorials on numerical analysis, blended learning design, multimedia principles, and UDL-based course redesign. Features three published courses with more in production.",
      tags: ["Education", "Video Production", "UDL", "Open edX"],
      link: "https://www.youtube.com/@hybridmathhub",
      linkLabel: "Visit channel",
      metrics: "3 videos · 15 subscribers",
    },
    {
      title: "JIST Journal Layout & Visual Identity",
      year: "2023 — Present",
      category: "Editorial",
      description:
        "Designed the visual brand identity, cover specifications, and professional article layout templates in LaTeX for Volume 1, Issue 1 of the Journal of Interdisciplinary Science and Technology at Debre Tabor University.",
      tags: ["LaTeX", "Editorial Design", "Typesetting"],
      link: "https://www.dtujist.com/",
      linkLabel: "View journal",
      metrics: "Volume 1, Issue 1",
    },
    {
      title: "IDLT Faculty Training Program",
      year: "2024",
      category: "Training",
      description:
        "Served as a trainer in the Interactive Digital Learning & Teaching program, mentoring faculty at Debre Tabor University on modern digital learning frameworks, multimedia learning principles, and Open edX integration.",
      tags: ["Faculty Development", "Open edX", "UDL"],
      link: "https://dtu.edu.et/",
      linkLabel: "DTU website",
      metrics: "80+ faculty trained",
    },
    {
      title: "Teacher Capacity Building Framework",
      year: "2024",
      category: "Outreach",
      description:
        "Authored a comprehensive regional training framework titled 'Enhancing Research and Manuscript Writing Capabilities for Secondary School and College Mathematics Teachers,' delivered to educator cohorts across the Amhara region.",
      tags: ["Teacher Training", "Manuscript Writing", "Regional Impact"],
      link: null,
      linkLabel: null,
      metrics: "Regional framework",
    },
  ],
} as const;

export const BLOG_POSTS = [
  {
    slug: "beauty-of-numerical-analysis",
    title: "The Beauty of Numerical Analysis",
    date: "2024-08-15",
    readingTime: "5 min",
    excerpt:
      "When students first hear 'numerical analysis,' they often imagine walls of floating-point arithmetic. But the field is, at its core, about something more beautiful: finding elegant approximations to problems that have no exact closed-form solution.",
    category: "Mathematics",
  },
  {
    slug: "blended-learning-openedx",
    title: "Designing a Blended Learning Course on Open edX",
    date: "2024-09-22",
    readingTime: "7 min",
    excerpt:
      "Building a course on Open edX that students actually finish is harder than it looks. After two years of teaching faculty how to author digital modules, here are the patterns I keep coming back to.",
    category: "Education",
  },
  {
    slug: "latex-vs-word",
    title: "Why LaTeX Still Beats Word for Academic Writing",
    date: "2024-10-30",
    readingTime: "4 min",
    excerpt:
      "I've typeset two journal volumes, dozens of research papers, and countless course notes in LaTeX. Each time a colleague asks 'but why not just use Word?' — I smile and pull up the same demo.",
    category: "Tools",
  },
  {
    slug: "udl-in-mathematics",
    title: "Universal Design for Learning in Mathematics",
    date: "2025-01-15",
    readingTime: "6 min",
    excerpt:
      "Universal Design for Learning (UDL) isn't just for accessibility offices — it's a framework that makes mathematics education better for every student. Here's how I've integrated it into my Numerical Analysis course.",
    category: "Education",
  },
  {
    slug: "burgers-equation-intuition",
    title: "Burgers' Equation — An Intuitive Introduction",
    date: "2025-03-08",
    readingTime: "8 min",
    excerpt:
      "Burgers' equation is the simplest nonlinear PDE that exhibits shock formation. It's the perfect gateway into the world of nonlinear conservation laws — and it's the equation that launched my research career.",
    category: "Mathematics",
  },
  {
    slug: "teaching-in-ethiopia",
    title: "Teaching Mathematics in Ethiopia: Reflections",
    date: "2025-06-12",
    readingTime: "10 min",
    excerpt:
      "After fifteen years of teaching at Debre Tabor University, I've learned that the most important variable in mathematics education isn't the curriculum or the technology — it's the relationship between teacher and student.",
    category: "Reflections",
  },
] as const;

export const GALLERY = {
  heading: "Gallery",
  description: "Moments from teaching, research, and life in Debre Tabor.",
  photos: [
    { src: "/profile-photo.jpg", alt: "Portrait at Debre Tabor University", caption: "Office portrait", year: "2024" },
    { src: "/myphoto.jpg", alt: "At the Department of Mathematics", caption: "Department of Mathematics", year: "2024" },
    { src: "/my2photo.jpg", alt: "Teaching context", caption: "In the classroom", year: "2024" },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    name: "YouTube",
    handle: "@hybridmathhub",
    href: "https://www.youtube.com/@hybridmathhub",
    icon: "youtube",
    description: "Educational video tutorials on mathematics and blended learning",
  },
  {
    name: "ORCID",
    handle: "0000-0002-4335-3741",
    href: "https://orcid.org/0000-0002-4335-3741",
    icon: "orcid",
    description: "Verified academic researcher profile and publications",
  },
  {
    name: "Email",
    handle: "wudneh.tilahun@dbtu.edu.et",
    href: "mailto:wudneh.tilahun@dbtu.edu.et",
    icon: "mail",
    description: "Best way to reach me for academic collaborations",
  },
  {
    name: "Phone",
    handle: "+251 938 234 343",
    href: "tel:+251938234343",
    icon: "phone",
    description: "Available weekdays 9 AM — 6 PM East Africa Time",
  },
  {
    name: "Academic Portfolio",
    handle: "wudnehtm-mengist.netlify.app",
    href: "https://wudnehtm-mengist.netlify.app/",
    icon: "external",
    description: "Full academic portfolio with research, publications, and CV",
  },
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#now", label: "Now" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Writing" },
  { href: "#uses", label: "Uses" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;
