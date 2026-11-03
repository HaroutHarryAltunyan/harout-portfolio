export const about = {
  heading: "The mind behind the systems",
  paragraphs: [
    "I'm Harout Altunyan, a Los Angeles technology founder and software engineer focused on building intelligent, scalable digital products.",
    "My work combines software engineering, artificial intelligence, systems architecture and entrepreneurship. I approach technology from both sides: I develop the vision, design the architecture, implement the systems and guide products through testing and deployment.",
    "My main areas are AI-powered health technology, digital health intelligence, cross-platform mobile apps, distributed backend systems and community platforms.",
  ],
  disciplines: [
    {
      id: "ai",
      label: "AI",
      body: "Multi-agent systems, LLM applications and recommendation engines, designed with safety controls and human oversight.",
    },
    {
      id: "engineering",
      label: "Engineering",
      body: "Full-stack TypeScript and Python across Next.js, React Native, FastAPI and Fastify, organized as monorepos with shared packages.",
    },
    {
      id: "health",
      label: "Health technology",
      body: "Assessments, biomarkers, telehealth and personalized supplements, built with privacy and HIPAA-focused controls from the start.",
    },
    {
      id: "product",
      label: "Product strategy",
      body: "Roadmaps, subscription design and staged launches that enable one approved feature at a time.",
    },
    {
      id: "cloud",
      label: "Cloud infrastructure",
      body: "Azure with Bicep, containers, CI/CD and release gates. Architecture rules are checked by machine so docs and code don't drift.",
    },
    {
      id: "creative",
      label: "Creative direction",
      body: "Naming, wordmarks, packaging systems and cinematic campaign content for the brands I build.",
    },
  ],
};

export type Job = {
  period: string;
  current?: boolean;
  title: string;
  org: string;
  href?: string;
  points: string[];
};

export const experience: Job[] = [
  {
    period: "Aug 2025 – Present",
    current: true,
    title: "Co-Founder & CTO",
    org: "SAECULA (Health Aevum AI Inc.), formerly Healix and AEVUM Health",
    href: "https://saecula.ai",
    points: [
      "Set the product vision, roadmap and technical strategy for an AI-powered health and longevity platform.",
      "Lead architecture across patient web, admin web, iOS and Android, a FastAPI backend, a Fastify API layer and 17 shared packages.",
      "Designed a traceable recommendation engine linking assessment answers to signals, ingredients, domains and supplement packs.",
      "Moved production infrastructure to Azure with Bicep, ADRs, machine-enforced architecture rules and a launch scorecard.",
      "Led the rebrands from Healix to AEVUM Health to SAECULA.",
    ],
  },
  {
    period: "Aug 2026 – Present",
    current: true,
    title: "Full-Stack Developer, client project",
    org: "Philly on the Block",
    href: "https://phillyontheblock.com",
    points: [
      "Built the restaurant's online ordering, table reservations and staff dashboard end to end.",
      "Integrated Stripe checkout with add-ons, coupons, stock tracking and configurable fees and tax.",
      "Deployed on Cloudflare with a D1 database and a one-time setup flow for the admin passcode.",
    ],
  },
  {
    period: "2024 – Present",
    title: "Founder & Product Architect",
    org: "HyeLynk",
    href: "https://www.hyelynk.ai",
    points: [
      "Designed a social and community commerce platform for the Armenian diaspora.",
      "Architected 16 backend services; 8 have implementation code today.",
      "Built content moderation, media processing and a Hedera-based blockchain service.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "Software Engineer & Security Researcher",
    org: "Independent projects",
    points: [
      "Built full-stack apps with React, Node.js, Express, PostgreSQL and MongoDB.",
      "Ran penetration tests in a home lab covering SQL injection, XSS, CSRF, SSRF and privilege escalation.",
      "Prototyped on-device media moderation in React Native with TensorFlow Lite.",
    ],
  },
];

export const journey = [
  {
    phase: "Foundations",
    period: "Before 2024",
    title: "Curiosity across disciplines",
    body: "Self-directed study in business, science, mathematics and cybersecurity led to software as the way to build what I was imagining.",
  },
  {
    phase: "Software engineering",
    period: "2024 – 2025",
    title: "UC Berkeley full-stack program",
    body: "JavaScript, React, Node.js, Express, SQL, NoSQL, REST APIs, full-stack architecture and deployment.",
  },
  {
    phase: "Building applications",
    period: "2024 – 2025",
    title: "Eleven foundational projects",
    body: "From a weather dashboard to a MERN book search engine with GraphQL. Each one added a layer of the stack.",
  },
  {
    phase: "Building startups",
    period: "2024 – 2025",
    title: "HyeLynk, then SAECULA",
    body: "Moved from assignments to architecting real platforms: microservices, mobile apps, payments and infrastructure.",
  },
  {
    phase: "AI systems",
    period: "2025 – Present",
    title: "Intelligence as architecture",
    body: "LLM applications, AI agents, recommendation engines, health intelligence, digital twins and distributed AI services.",
  },
  {
    phase: "Current work",
    period: "Now",
    title: "AI connected to real lives",
    body: "Building intelligent products that connect AI with meaningful, real-world experiences.",
  },
];

export const philosophy = [
  { title: "Build with purpose", body: "Technology should solve meaningful problems." },
  { title: "Think in systems", body: "Great products depend on the architecture beneath the interface." },
  { title: "Engineer for scale", body: "Design systems that can evolve without sacrificing reliability." },
  {
    title: "Connect intelligence with experience",
    body: "AI becomes valuable when it improves real human experiences.",
  },
  { title: "Never stop building", body: "Experimentation, learning and iteration are how anything new gets made." },
];

export const focus = [
  {
    title: "Advancing AI health intelligence",
    body: "Continuing to build SAECULA's AI-driven health technology toward a staged public launch.",
    accent: "cyan",
  },
  {
    title: "Connecting communities",
    body: "Building HyeLynk's cross-platform social and community experience.",
    accent: "ember",
  },
  {
    title: "Exploring intelligent systems",
    body: "Going deeper into AI architectures, autonomous agents, scalable infrastructure and personalized software.",
    accent: "purple",
  },
] as const;

export const education = {
  program: {
    school: "University of California, Berkeley",
    detail: "Full Stack Web Development Program (UC Berkeley Extension)",
    period: "2024 – 2025",
    focus: [
      "Full-stack engineering",
      "Frontend development",
      "Backend development",
      "Databases",
      "APIs",
      "Application deployment",
      "Software development practices",
    ],
  },
  background:
    "Alongside the program I've studied cybersecurity and ethical hacking in a home lab, machine learning with PyTorch and TensorFlow, and mathematics through calculus and algorithms. These are self-directed studies, not degrees or certifications.",
  learning: [
    "Artificial intelligence",
    "Distributed systems",
    "Machine learning",
    "Cloud architecture",
    "Software security",
    "Computational modeling",
    "Product engineering",
  ],
};
