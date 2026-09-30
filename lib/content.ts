export const profile = {
  name: "Waleed Tahir",
  firstName: "Waleed",
  lastName: "Tahir",
  role: "Senior FullStack Engineer",
  location: "Islamabad, Pakistan",
  availability: "Remote worldwide",
  email: "waleedtahirmuhammad@gmail.com",
  phone: "+92 335 9495771",
  phoneHref: "tel:+923359495771",
  linkedin: "https://www.linkedin.com/in/waleed-tahir",
  github: "https://github.com/itswaleedtahir",
  resume: "/Waleed-Tahir-CV.pdf",
  heroLine: "Products, engineered.",
  heroTags: "Next.js · React · Node.js · AWS",
  summary:
    "Senior full-stack engineer building production web and commerce products with Next.js, React, TypeScript, and Node.js — from UI through APIs, payments, and cloud.",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#methodology", label: "Methodology" },
  { href: "#skills", label: "Skills" },
];

export const heroCard = {
  availability: "Senior full-stack roles",
  status: "Building",
};

export const proof = [
  { index: "01", label: "Proof", value: "12", detail: "Engineers led" },
  { index: "02", label: "Proof", value: "50%", detail: "B2B search lift" },
  { index: "03", label: "Proof", value: "4+", detail: "Years shipping" },
  { index: "04", label: "Proof", value: "6+", detail: "Production products" },
];

export const about = {
  titleLead: "The engineer who",
  titleEm: "ships",
  titleTail: "end to end.",
  paragraphs: [
    "I'm a **Senior FullStack Engineer** with commercial experience on production web and commerce platforms — Next.js storefronts, admin dashboards, realtime chat, trading interfaces, and the Node.js services behind them.",
    "At **GrowthRune** I led a **12-engineer** backend team: sprint planning, code review, mentoring, and production deploys. I designed the multi-instance **AWS** architecture with **Redis** caching that cut database load and API latency under high traffic.",
    "I've integrated **Stripe**, **Twilio**, **SendGrid**, Binance, and third-party **GraphQL/REST** APIs into live products at **Codistan**, **DevStarX**, and **K2X** — including Medusa commerce, Firebase intake pipelines, and Sankey data visualizations across 16 countries.",
    "Today at **Newcleux** I'm building React, TypeScript, and Node.js features across UI, APIs, and external services — shipping real-time user journeys with product, design, and backend engineers.",
  ],
  badges: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Stripe",
    "Redis",
    "Team Lead",
    "BSc CS Engineering",
  ],
  sidebar: [
    { label: "Currently", value: "Senior Software Engineer at Newcleux" },
    { label: "Based In", value: "Islamabad, Pakistan" },
    { label: "Open To", value: "Remote · distributed product teams" },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: profile.phoneHref },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/waleed-tahir ↗",
      href: profile.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/itswaleedtahir ↗",
      href: profile.github,
      external: true,
    },
    { label: "Resume", value: "Download CV ↗", href: profile.resume, download: true },
  ],
};

export const stats = [
  { value: "12", label: "Engineers led on an Agile backend team at GrowthRune" },
  { value: "50%", label: "B2B search improvement on GeniHunt via Redis and indexing" },
  { value: "16", label: "Countries covered in ECOWAS energy-flow visualizations" },
  { value: "4+", label: "Years building production full-stack features" },
  { value: "6+", label: "Named products shipped — commerce, chat, trading, data" },
  { value: "300+", label: "Production features across UI, API, and integration layers" },
];

export const methodology = {
  lead: "A delivery model I use on product teams — interface, services, and the people who ship them.",
  steps: [
    {
      number: "01",
      title: "Product surface",
      body: "Next.js and React: storefronts, dashboards, chat, and realtime interfaces wired to real backend contracts.",
    },
    {
      number: "02",
      title: "Services & integrations",
      body: "Node.js APIs, GraphQL and REST, Stripe and webhooks, Redis caching, and AWS infrastructure that scales.",
    },
    {
      number: "03",
      title: "Team delivery",
      body: "Agile execution with code review, mentoring, and production deploys — from intern projects to a 12-engineer lead role.",
    },
  ],
};

export type CaseStudy = {
  name: string;
  org: string;
  period: string;
  summary: string;
  points?: string[];
  stack: string[];
  href?: string;
};

export const featured: CaseStudy[] = [
  {
    name: "GrowthRune platform",
    org: "Backend Team Lead",
    period: "2025 — 2026",
    summary:
      "Led 12 engineers and designed AWS + Redis architecture for a live web product — GraphQL, REST, Twilio, and Ready Player Me integrations.",
    stack: ["Node.js", "GraphQL", "AWS", "Redis"],
    href: profile.linkedin,
  },
  {
    name: "Campsite",
    org: "Codistan Ventures",
    period: "2024 — 2025",
    summary:
      "Production Next.js platform and admin dashboard with full chat on Node.js, MongoDB, and AWS.",
    stack: ["Next.js", "MongoDB", "AWS"],
    href: profile.github,
  },
];

export const work: CaseStudy[] = [
  {
    name: "Parabolic",
    org: "Codistan Ventures",
    period: "2024 — 2025",
    summary: "Real-time Next.js trading app on Twitter, Reddit, and Binance APIs.",
    stack: ["Next.js", "Binance"],
  },
  {
    name: "StratFinder",
    org: "DevStarX",
    period: "2023 — 2024",
    summary: "Commerce storefront and admin on Next.js, Prisma, and Medusa with analytics.",
    stack: ["Next.js", "Medusa", "Prisma"],
  },
  {
    name: "GeniHunt",
    org: "K2X Technologies",
    period: "2022 — 2023",
    summary: "Stripe payments, event streaming, and 50% search lift with Redis.",
    stack: ["Stripe", "Redis"],
  },
  {
    name: "ECOWAS",
    org: "K2X Technologies",
    period: "2022 — 2023",
    summary: "API-driven Sankey visualizations of energy flow across 16 countries.",
    stack: ["APIs", "Data viz"],
  },
];

export type Role = {
  org: string;
  title: string;
  period: string;
  place: string;
  current?: boolean;
  summary?: string;
  points: string[];
  stack?: string[];
};

export const experience: Role[] = [
  {
    org: "Newcleux",
    title: "Senior Software Engineer",
    period: "Mar 2026 — Present",
    place: "Abu Dhabi, UAE · Remote",
    current: true,
    summary:
      "Building React, TypeScript, and Node.js features across UI, APIs, and third-party services on a production platform.",
    points: [
      "Shipping real-time, context-aware user journeys from frontend through backend APIs.",
      "Debugging and releasing production web flows with product, UI, and backend engineers.",
    ],
    stack: ["React", "TypeScript", "Node.js", "REST"],
  },
  {
    org: "GrowthRune",
    title: "Backend Team Lead",
    period: "Jan 2025 — Mar 2026",
    place: "South Bay, FL · Remote",
    summary:
      "Led a 12-engineer Agile team on a live web product — planning, reviews, mentoring, and production deploys.",
    points: [
      "Designed multi-instance AWS architecture (EC2, ECS, Lambda) with Redis for cache, sessions, and cross-instance sync.",
      "Built Ready Player Me, Twilio, and AWS webhook integrations plus GraphQL and REST APIs.",
      "Implemented cache-aside, write-through, and TTL caching that reduced database queries and lowered API latency.",
    ],
    stack: ["Node.js", "GraphQL", "AWS", "Redis", "Twilio"],
  },
  {
    org: "Codistan Ventures",
    title: "Software Engineer",
    period: "June 2024 — June 2025",
    place: "Islamabad, Pakistan · Onsite",
    summary: "Full-stack delivery on Campsite, Parabolic, report intake, and billing flows.",
    points: [
      "Delivered Campsite: Next.js platform, admin dashboard, and full chat on Node.js, MongoDB, and AWS.",
      "Built Parabolic realtime trading on Twitter, Reddit, and Binance.",
      "Built SendGrid + Firebase email/PDF intake into MySQL with Redis background jobs.",
      "Built subscription billing and payment flows in Next.js.",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe", "SendGrid"],
  },
  {
    org: "DevStarX",
    title: "Software Engineer",
    period: "Oct 2023 — May 2024",
    place: "Islamabad, Pakistan · Onsite",
    summary: "Production Next.js and TypeScript on StratFinder — Medusa commerce and Prisma.",
    points: [
      "Built storefront and admin UI wired to commerce APIs, Medusa, and Google Analytics.",
      "Shipped maintainable TypeScript with clients and internal engineers.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Medusa"],
  },
  {
    org: "K2X Technologies",
    title: "Software Engineer",
    period: "Sept 2022 — Sept 2023",
    place: "Peshawar, Pakistan · Onsite",
    summary: "ECOWAS data viz, GeniHunt payments, and project-management platforms.",
    points: [
      "Built ECOWAS Sankey visualizations from Excel data; acted as product owner for multi-market use.",
      "Improved GeniHunt B2B search by 50% with Redis caching, indexing, and load balancing.",
      "Owned database and user administration on NTU & PMP Ukraine platforms.",
    ],
    stack: ["Stripe", "Redis", "Node.js"],
  },
  {
    org: "Quantum Learning Academy",
    title: "Software Engineer Intern",
    period: "July 2022 — Oct 2022",
    place: "Peshawar, Pakistan",
    points: ["Built full-stack features with Express and Node.js: HTTP APIs, file I/O, and database work."],
    stack: ["Express", "Node.js"],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Redux", "Material UI", "CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "Fastify", "GraphQL (Apollo)", "REST APIs", "Webhooks"],
  },
  {
    label: "Integrations",
    items: ["Stripe", "Twilio", "SendGrid", "Firebase Functions", "Third-party REST & GraphQL"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Mongoose", "Redis"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS EC2", "AWS ECS", "AWS Lambda", "Docker", "Nginx"],
  },
  {
    label: "Practices",
    items: ["Agile / Scrum", "Jest", "Mocha", "Git", "Postman", "Figma"],
  },
];

export const education = {
  school: "University of Engineering and Technology Peshawar",
  degree: "Bachelors of Computer System Engineering",
  year: "2023",
  place: "Peshawar, Pakistan",
};

export const certifications = [
  "Express.js (TestDome)",
  "Programming Foundations with JavaScript",
  "Web Development Bootcamp",
];
