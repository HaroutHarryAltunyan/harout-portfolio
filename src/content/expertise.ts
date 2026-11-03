export const lab = {
  heading: "Building systems that think",
  modules: [
    {
      id: "llm",
      title: "LLM applications",
      items: ["Prompt engineering", "Tool calling", "Structured outputs", "Context management", "RAG", "Model evaluation"],
      body: "Language models are most useful when they return structured, checkable output and call tools with clear permissions.",
    },
    {
      id: "agents",
      title: "Multi-agent systems",
      items: ["Orchestration", "Specialized agents", "Tool permissions", "Memory and context", "Workflow coordination", "Guardrails"],
      body: "SAECULA's agents each own one domain, such as labs, nutrition or supplement safety, and an orchestrator coordinates them over shared health context.",
    },
    {
      id: "recs",
      title: "Recommendation systems",
      items: ["Collaborative filtering", "Content-based filtering", "Vector similarity", "Ranking", "Signal aggregation", "Evaluation"],
      body: "Every SAECULA recommendation can be traced from assessment question to signal to ingredient to pack. HyeLynk's feed ranking is designed around Gorse.",
    },
    {
      id: "twin",
      title: "Digital twin systems",
      items: ["Computational modeling", "Longitudinal data", "Health state estimation", "Uncertainty", "Simulation", "Visualization"],
      body: "A digital twin is a model, not a diagnosis. It has to show its uncertainty and the data behind each estimate.",
    },
    {
      id: "safety",
      title: "AI safety and reliability",
      items: ["Validation", "Data provenance", "Evaluation frameworks", "Deterministic calculations", "Privacy boundaries", "Human oversight"],
      body: "Scores and doses come from deterministic code. Models explain and assist, and people stay in the loop for anything clinical.",
    },
    {
      id: "local",
      title: "Local AI development",
      items: ["Local LLM hosting", "Model evaluation", "Inference optimization", "AI dev tooling"],
      body: "I experiment with locally hosted models to compare quality, latency and cost before choosing what runs in production.",
    },
  ],
};

export const architecture = {
  heading: "The systems behind the experience",
  categories: [
    {
      id: "frontend",
      label: "Frontend",
      tech: ["React", "Next.js", "TypeScript", "Server rendering", "Design systems"],
      body: "Next.js apps that render on the server where it helps speed and SEO, share a component library, and keep data fetching behind typed clients.",
      layers: ["Pages & routes", "Shared UI components", "Typed API client", "Server rendering"],
    },
    {
      id: "mobile",
      label: "Mobile",
      tech: ["React Native", "iOS", "Android", "Secure auth", "Native integrations"],
      body: "One React Native codebase for iOS and Android, with secure token storage, certificate pinning and shared business logic from the monorepo.",
      layers: ["Screens & navigation", "Shared logic package", "Secure storage", "Native modules"],
    },
    {
      id: "backend",
      label: "Backend",
      tech: ["Python", "FastAPI", "Node.js", "Fastify", "GraphQL", "Microservices"],
      body: "A Fastify layer handles sessions, CSRF and request shaping for clients, and FastAPI services own domain logic and background jobs.",
      layers: ["Fastify API layer", "FastAPI domain services", "Background workers", "Event bus"],
    },
    {
      id: "data",
      label: "Data",
      tech: ["PostgreSQL", "MongoDB", "Redis", "Search", "Vector retrieval"],
      body: "PostgreSQL is the system of record. Redis handles caching and rate limits. Document and vector stores are used only where the access pattern calls for them.",
      layers: ["PostgreSQL", "Redis cache", "Search index", "Vector store"],
    },
    {
      id: "ai",
      label: "AI",
      tech: ["LLM agents", "Orchestration", "Recommendation engines", "Evaluation"],
      body: "Agents sit behind a contract package that defines their inputs, outputs and safety limits, so every caller sees the same behavior.",
      layers: ["Agent orchestrator", "Domain agents", "AI contracts", "Evaluation harness"],
    },
    {
      id: "cloud",
      label: "Cloud",
      tech: ["Azure", "AWS", "Docker", "Kubernetes", "Infrastructure as code"],
      body: "SAECULA production is defined in Bicep on Azure. HyeLynk ships with Docker Compose and Kubernetes manifests.",
      layers: ["Bicep / Terraform", "Container runtime", "Managed databases", "Secrets & identity"],
    },
    {
      id: "security",
      label: "Security",
      tech: ["AuthN / AuthZ", "MFA", "RBAC", "Encryption", "Privacy by design"],
      body: "Role-based access, MFA for admins, encrypted health data and audit logging. Privacy rules are part of the architecture, not an afterthought.",
      layers: ["Identity & MFA", "Role-based access", "Encryption", "Audit trail"],
    },
    {
      id: "devops",
      label: "DevOps",
      tech: ["CI/CD", "Automated testing", "Monitoring", "Release management"],
      body: "CI runs tests and architecture-rule checks on every change. A launch scorecard decides what is allowed to reach production.",
      layers: ["CI pipeline", "Test suites", "Release gates", "Monitoring"],
    },
  ],
};

export const lifecycle = [
  { step: "Discover", body: "Talk to users, define the problem and the outcome worth building for." },
  { step: "Architect", body: "Choose the topology, data model and boundaries, and record decisions as ADRs." },
  { step: "Design", body: "Shape flows, interfaces and the brand so the product feels like one system." },
  { step: "Develop", body: "Write the frontend, mobile, backend and AI code, with shared packages for anything used twice." },
  { step: "Test", body: "Unit, integration and end-to-end tests, plus checks that enforce architecture rules." },
  { step: "Deploy", body: "Infrastructure as code, staged environments and release gates." },
  { step: "Observe", body: "Logging, metrics and audit trails that show how the system actually behaves." },
  { step: "Iterate", body: "Feed what we learn back into the roadmap and ship the next improvement." },
];

export const skills = [
  { cluster: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"], body: "TypeScript for every client and API layer, Python for services, data and AI." },
  { cluster: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Responsive design"], body: "Server-rendered React apps with shared design systems." },
  { cluster: "Mobile", items: ["React Native", "iOS", "Android"], body: "Cross-platform apps from one codebase, prepared for store release." },
  { cluster: "Backend", items: ["Node.js", "FastAPI", "Fastify", "REST", "GraphQL"], body: "Typed APIs, microservices and background processing." },
  { cluster: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"], body: "Relational modeling first, with caching and document stores where they fit." },
  { cluster: "Artificial intelligence", items: ["LLM systems", "AI agents", "Recommendation engines", "Vector search", "PyTorch", "TensorFlow"], body: "Applied AI with evaluation, provenance and guardrails." },
  { cluster: "Cloud & infrastructure", items: ["Azure", "AWS", "Docker", "Kubernetes", "Bicep", "CI/CD"], body: "Infrastructure as code and repeatable deployments." },
  { cluster: "Product engineering", items: ["System architecture", "UX/UI design", "Product strategy", "Technical roadmaps", "Testing", "Release management"], body: "Taking a product from idea to a gated, staged launch." },
  { cluster: "Business & leadership", items: ["Startup development", "Product vision", "Cross-functional coordination", "Technical decisions", "Subscription design"], body: "Building companies, not only codebases." },
];

export const creative = {
  heading: "Engineering meets creative direction",
  brand: [
    { name: "Healix", period: "Aug 2025 – Jun 2026", img: "brand-healix.webp", note: "Healix Wellness, the original identity: a DNA helix rising toward a sun." },
    { name: "AEVUM Health", period: "Jun – Oct 2026", img: "brand-aevum.webp", note: "AEVUM moved to a dark, scientific look with custom supplement packs." },
    { name: "SAECULA", period: "Oct 2026 – Present", img: "campaign-box.webp", note: "SAECULA set the current cyan, violet and white wordmark across app, packaging and campaigns." },
  ],
  packs: [
    { file: "pack-brain.webp", name: "Brain Pack" },
    { file: "pack-focus.webp", name: "Focus Pack" },
    { file: "pack-energy-optimization.webp", name: "Energy Optimization" },
    { file: "pack-endurance-vo2.webp", name: "Endurance & VO2 Pack" },
    { file: "pack-eye-vision.webp", name: "Eye and Vision Pack" },
    { file: "pack-cortisol-recovery.webp", name: "Cortisol Recovery Pack" },
    { file: "pack-beauty.webp", name: "Beauty Pack" },
    { file: "pack-daily-multivitamin.webp", name: "Daily Multivitamin" },
  ],
  packsNote:
    "AI-generated packaging concepts made from real capsule photographs. Each ingredient label matches the pack's formula. These are not photos of final shipped packaging.",
  campaign: [
    { file: "campaign-mitochondria.webp", title: "Life, at every scale", tag: "Biomedical visualization" },
    { file: "campaign-protein.webp", title: "Complexity, beautifully formed", tag: "Molecular environments" },
    { file: "campaign-molecules.webp", title: "Small scale, endless wonder", tag: "Molecular environments" },
    { file: "campaign-device.webp", title: "Intelligent health, limitless life", tag: "Product advertising" },
  ],
};
