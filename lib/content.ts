export const profile = {
  name: "Waleed Tahir",
  firstName: "Waleed",
  lastName: "Tahir",
  role: "Senior FullStack Engineer",
  location: "Islamabad, Pakistan",
  email: "waleedtahirmuhammad@gmail.com",
  phone: "+92 335 9495771",
  phoneHref: "tel:+923359495771",
  linkedin: "https://www.linkedin.com/in/waleed-tahir",
  github: "https://github.com/waleedsimmings",
  resume: "/Waleed-Tahir-CV.pdf",
  summary:
    "Full-stack engineer with commercial Next.js, React, and TypeScript experience on production web and commerce platforms. I adopt an existing codebase, extend it for new requirements, and integrate payment gateways, APIs, and third-party services.",
};

export const nav = [
  { href: "#approach", label: "Approach" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const snapshot = [
  { label: "Now", value: "Senior Software Engineer, Newcleux" },
  { label: "Based", value: "Islamabad · remote-ready" },
  { label: "Stack", value: "Next.js, React, TypeScript, Node.js" },
  { label: "Focus", value: "APIs, payments, realtime product work" },
];

export const ticker = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Stripe",
  "Prisma",
  "MongoDB",
];

export const principles = [
  {
    number: "01",
    title: "Extend what already runs",
    body: "I join the codebase that is in production and adapt its components, services, and patterns for the next requirement.",
  },
  {
    number: "02",
    title: "Connect the outside world",
    body: "Payments, inbound email, webhooks, analytics, and third-party APIs land inside the architecture that already exists.",
  },
  {
    number: "03",
    title: "Leave it shippable",
    body: "Agile delivery with distributed product and engineering teams. Reviews, mentoring, and changes that stay reusable for the next release.",
  },
];

export type CaseStudy = {
  name: string;
  org: string;
  period: string;
  summary: string;
  points?: string[];
  stack: string[];
};

export const featured: CaseStudy[] = [
  {
    name: "Newcleux",
    org: "Senior Software Engineer",
    period: "Mar 2026 — Present · Abu Dhabi, remote",
    summary:
      "Extending a live platform with React, TypeScript, and Node.js. Frontend journeys stay wired to backend APIs and external services, with production debugging shared across product, UI, and backend.",
    points: [
      "Adapting current components and services for new requirements",
      "Real-time, context-aware flows inside an established architecture",
      "Reusable changes a later release can build on",
    ],
    stack: ["React", "TypeScript", "Node.js", "REST"],
  },
  {
    name: "GrowthRune",
    org: "Backend Team Lead",
    period: "Jan 2025 — Mar 2026 · South Bay, remote",
    summary:
      "Led a 12-engineer Agile team on an established product: planning, code review, mentoring, and production deploys. The live platform scaled on a multi-instance AWS setup with Redis, without a rewrite.",
    points: [
      "Ready Player Me, Twilio, and AWS webhooks beside GraphQL and REST",
      "EC2, ECS, and Lambda with Redis for cache, sessions, and cross-instance sync",
      "Cache-aside, write-through, and TTL caching that cut database load and API latency",
    ],
    stack: ["Node.js", "GraphQL", "AWS", "Redis", "Twilio"],
  },
];

export const work: CaseStudy[] = [
  {
    name: "Campsite",
    org: "Codistan Ventures",
    period: "2024 — 2025",
    summary:
      "Production Next.js platform and admin dashboard, including full chat, connected to Node.js, MongoDB, and AWS along the product’s existing patterns.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "AWS"],
  },
  {
    name: "Parabolic",
    org: "Codistan Ventures",
    period: "2024 — 2025",
    summary:
      "Real-time Next.js trading web app across Twitter, Reddit, and Binance. API contract changes, error states, and production debugging included.",
    stack: ["Next.js", "Binance", "Twitter", "Reddit"],
  },
  {
    name: "StratFinder",
    org: "DevStarX",
    period: "2023 — 2024",
    summary:
      "Storefront and admin UI on Prisma and Medusa. Commerce functionality wired to REST services, with Google Analytics and client-specific enhancements where they were needed.",
    stack: ["Next.js", "TypeScript", "Prisma", "Medusa"],
  },
  {
    name: "GeniHunt",
    org: "K2X Technologies",
    period: "2022 — 2023",
    summary:
      "Stripe payment processing and event streaming for analytics. B2B search improved by 50% through Redis caching, indexing, and load balancing.",
    stack: ["Stripe", "Redis", "Node.js"],
  },
  {
    name: "ECOWAS",
    org: "K2X Technologies",
    period: "2022 — 2023",
    summary:
      "API-driven Sankey visualizations of energy flow across 16 countries, built from Excel data. Acted as product owner and adapted the data and UI for multi-market use.",
    stack: ["APIs", "Data viz", "Sankey"],
  },
  {
    name: "Report intake",
    org: "Codistan Ventures",
    period: "2024 — 2025",
    summary:
      "SendGrid Inbound Parse and Firebase Functions ingest external email and PDF data, persist it in MySQL, and run Redis background jobs.",
    stack: ["SendGrid", "Firebase", "MySQL", "Redis"],
  },
];

export type Role = {
  org: string;
  title: string;
  period: string;
  place: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    org: "Newcleux",
    title: "Senior Software Engineer",
    period: "Mar 2026 — Present",
    place: "Abu Dhabi, UAE (Remote)",
    current: true,
    points: [
      "Extending an existing production platform with React, TypeScript, and Node.js — adapting current components and services for new requirements.",
      "Integrating frontend UI with backend APIs and third-party services for real-time, context-aware user journeys.",
      "Debugging and shipping production APIs and web flows with a distributed team of product, UI, and backend engineers.",
    ],
  },
  {
    org: "GrowthRune",
    title: "Backend Team Lead",
    period: "Jan 2025 — Mar 2026",
    place: "South Bay, FL (Remote)",
    points: [
      "Led a 12-engineer Agile/Scrum team: sprint planning, code reviews, mentoring, and reliable production deployments.",
      "Built and supported Ready Player Me, Twilio, and AWS webhook integrations, plus GraphQL and REST APIs consumed by the live web product.",
      "Designed a multi-instance AWS architecture (EC2, ECS, Lambda) with Redis for caching, sessions, and cross-instance sync.",
      "Implemented cache-aside, write-through, and TTL caching that reduced database queries and lowered API latency under high traffic.",
    ],
  },
  {
    org: "Codistan Ventures",
    title: "Software Engineer",
    period: "June 2024 — June 2025",
    place: "Islamabad, Pakistan",
    points: [
      "Report website: SendGrid Inbound Parse and Firebase Functions ingest email and PDF data into MySQL, with Redis background jobs.",
      "Campsite: delivered a production Next.js platform and admin dashboard with full chat on Node.js, MongoDB, and AWS.",
      "Parabolic: built a real-time Next.js trading app integrating Twitter, Reddit, and Binance, including contract changes and error states.",
      "Implemented subscription billing and payment flows in Next.js as targeted enhancements inside the existing codebase.",
    ],
  },
  {
    org: "DevStarX",
    title: "Software Engineer",
    period: "Oct 2023 — May 2024",
    place: "Islamabad, Pakistan",
    points: [
      "Built production Next.js, React, and TypeScript features for StratFinder on Prisma and Medusa — storefront and admin UI wired to commerce APIs.",
      "Integrated commerce functionality with REST services, Medusa, and Google Analytics.",
      "Worked inside an established product architecture with clients and internal engineers, focused on maintainable TypeScript.",
    ],
  },
  {
    org: "K2X Technologies",
    title: "Software Engineer",
    period: "Sept 2022 — Sept 2023",
    place: "Peshawar, Pakistan",
    points: [
      "ECOWAS: API-driven Sankey visualizations from Excel data covering energy flow across 16 countries. Acted as product owner for multi-market use.",
      "GeniHunt: Stripe payments and event streaming for analytics. Improved B2B search by 50% with Redis caching, indexing, and load balancing.",
      "NTU & PMP Ukraine: owned database and user administration on a project-management platform, and contributed backend APIs on a funds-management system.",
    ],
  },
  {
    org: "Quantum Learning Academy",
    title: "Software Engineer Intern",
    period: "July 2022 — Oct 2022",
    place: "Peshawar, Pakistan",
    points: [
      "Built full-stack features with Express and Node.js: HTTP APIs, file I/O, and database interactions.",
    ],
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
  coursework: "Data Structures & Algorithms, Database Management, Web Engineering",
};

export const certifications = [
  "Express.js (TestDome)",
  "Programming Foundations with JavaScript",
  "Web Development Bootcamp",
];
