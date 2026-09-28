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
    "Senior full-stack engineer building production web and commerce products with Next.js, React, TypeScript, and Node.js. I take work from interface to API, payments, and cloud, and I have led a 12-engineer team through delivery.",
};

export const nav = [
  { href: "#approach", label: "Focus" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const snapshot = [
  { label: "Now", value: "Senior Software Engineer, Newcleux" },
  { label: "Based", value: "Islamabad · remote-ready" },
  { label: "Stack", value: "Next.js, React, TypeScript, Node.js" },
  { label: "Focus", value: "Products, APIs, payments, cloud" },
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
    title: "Build the product",
    body: "Next.js and React products: storefronts, admin dashboards, realtime chat, and trading interfaces used in production.",
  },
  {
    number: "02",
    title: "Build the services",
    body: "Node.js APIs, GraphQL and REST, payments, webhooks, and data pipelines that those products actually run on.",
  },
  {
    number: "03",
    title: "Lead the delivery",
    body: "A 12-engineer Agile team, AWS architecture, code review, and mentoring through to production deploys.",
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
      "Senior engineer on a production platform, building React, TypeScript, and Node.js features across the UI, APIs, and third-party services.",
    points: [
      "Real-time, context-aware user journeys from frontend to backend",
      "Production APIs and web flows shipped with product, UI, and backend engineers",
      "Features designed so the next release can build on them",
    ],
    stack: ["React", "TypeScript", "Node.js", "REST"],
  },
  {
    name: "GrowthRune",
    org: "Backend Team Lead",
    period: "Jan 2025 — Mar 2026 · South Bay, remote",
    summary:
      "Backend team lead for 12 engineers: planning, code review, mentoring, and production deploys. Designed the multi-instance AWS and Redis architecture the platform runs on.",
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
      "Built a production Next.js platform and admin dashboard, including full chat, on Node.js, MongoDB, and AWS.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "AWS"],
  },
  {
    name: "Parabolic",
    org: "Codistan Ventures",
    period: "2024 — 2025",
    summary:
      "Built a real-time Next.js trading app on Twitter, Reddit, and Binance, including API changes, error states, and production debugging.",
    stack: ["Next.js", "Binance", "Twitter", "Reddit"],
  },
  {
    name: "StratFinder",
    org: "DevStarX",
    period: "2023 — 2024",
    summary:
      "Built the StratFinder storefront and admin on Next.js, TypeScript, Prisma, and Medusa, with commerce APIs and Google Analytics.",
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
      "Built API-driven Sankey visualizations of energy flow across 16 countries from Excel data, and owned the product for multi-market use.",
    stack: ["APIs", "Data viz", "Sankey"],
  },
  {
    name: "Report intake",
    org: "Codistan Ventures",
    period: "2024 — 2025",
    summary:
      "Built an email and PDF intake pipeline: SendGrid Inbound Parse and Firebase Functions into MySQL, with Redis background jobs.",
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
      "Building production features with React, TypeScript, and Node.js across UI, APIs, and third-party services.",
      "Shipping real-time, context-aware user journeys from the frontend through backend APIs.",
      "Debugging and releasing production APIs and web flows with product, UI, and backend engineers.",
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
      "Built subscription billing and payment flows in Next.js.",
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
      "Shipped maintainable TypeScript with clients and internal engineers.",
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
