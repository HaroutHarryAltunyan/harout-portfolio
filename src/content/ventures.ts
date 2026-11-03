import type { Venture } from "./types";
import { links } from "./site";

const CHECKED = "2026-11-02";

export const saecula: Venture = {
  slug: "saecula",
  name: "SAECULA",
  pronunciation: "SEK-yoo-luh",
  category: "AI Health Intelligence",
  role: "Co-Founder & CTO",
  period: "Aug 2025 – Present",
  tagline: "Intelligent health. Limitless life.",
  site: { label: "saecula.ai", href: links.saecula },
  overview: [
    "SAECULA is an AI-powered health and longevity platform that connects personal health information with intelligent wellness experiences.",
    "It brings together wellness assessments, biomarkers and lab results, nutrition, fitness, personalized supplement packs and telehealth workflows in one product.",
  ],
  responsibilities:
    "I own product architecture, software engineering, AI systems, infrastructure and technical strategy across every client app and the backend.",
  metrics: [
    {
      value: "4,600+",
      label: "commits I authored since Aug 2025",
      source: "git log of the SAECULA monorepo: 4,618 commits by Haroutyun Altunyan, first on 2025-08-26",
      checked: CHECKED,
    },
    {
      value: "4",
      label: "client apps: patient web, admin web, iOS, Android",
      source: "apps/web, apps/admino-web, apps/mobile (React Native, iOS + Android)",
      checked: CHECKED,
    },
    {
      value: "17",
      label: "active shared packages in the monorepo",
      source: "18 directories under packages/, one marked DEPRECATED",
      checked: CHECKED,
    },
  ],
  capabilities: [
    {
      id: "haios",
      title: "Health AI Operating System",
      status: "in-development",
      summary:
        "A multi-agent layer where specialized agents work over structured health context, behind safety controls and platform services. Agents support people and clinicians. They do not diagnose.",
      points: [
        "Health intelligence",
        "Lab interpretation",
        "Nutrition planning",
        "Fitness programming",
        "Supplement safety",
        "Clinical workflow support",
        "Personalized recommendations",
      ],
    },
    {
      id: "twin",
      title: "Health digital twin",
      status: "in-development",
      summary:
        "Computational models of a person's health state built from longitudinal wellness information, shown through interactive 3D visualization.",
      points: ["Cardiovascular", "Metabolic", "Musculoskeletal", "Recovery", "Activity", "Nutrition"],
    },
    {
      id: "biomarkers",
      title: "Biomarker intelligence",
      status: "in-development",
      summary:
        "Lab biomarkers mapped to reference ranges, health domains and trends over time, with the source of every value kept alongside it.",
      points: ["Reference ranges", "Historical trends", "Health domains", "Data provenance", "Interpretation workflows"],
    },
    {
      id: "wearables",
      title: "Wearable integration",
      status: "planned",
      summary:
        "Wearable signals feeding one personal health view. No wearable integration is implemented in the codebase yet.",
      points: ["Apple Health", "Oura", "WHOOP", "Fitbit", "Garmin"],
    },
    {
      id: "telehealth",
      title: "Telehealth",
      status: "in-development",
      summary:
        "Consultation booking, video visits, consent and privacy controls. Built behind launch flags and not yet available to the public.",
      points: [
        "Appointment scheduling",
        "Video consultation",
        "Patient portal",
        "Clinician workflows",
        "Consent management",
        "Privacy controls",
      ],
    },
    {
      id: "supplements",
      title: "Supplement intelligence",
      status: "in-development",
      summary:
        "Assessment answers become signals, signals map to ingredients and health domains, and the result is a personalized supplement pack with a traceable reason for every ingredient.",
      points: ["Assessment inputs", "Recommendation logic", "Ingredient mapping", "Personalized packs", "Subscriptions"],
    },
    {
      id: "platform",
      title: "Platform architecture",
      status: "verified",
      summary:
        "Infrastructure as code on Azure with Bicep, architecture decision records, machine-enforced architecture rules and a launch scorecard that gates every release.",
      points: [
        "Microsoft Azure",
        "Bicep IaC",
        "Containerized services",
        "CI/CD",
        "Environment separation",
        "ADRs",
        "Release gates",
      ],
    },
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "React Native",
    "TypeScript",
    "Python",
    "FastAPI",
    "Fastify",
    "PostgreSQL",
    "Redis",
    "Azure · Bicep",
    "Stripe",
    "LLM agents",
  ],
  architecture: {
    groups: ["Clients", "Edge", "Services", "Data", "Platform"],
    nodes: [
      { id: "mobile", label: "React Native · iOS + Android", group: "Clients" },
      { id: "web", label: "Next.js patient web", group: "Clients" },
      { id: "admin", label: "Next.js admin web", group: "Clients" },
      { id: "bff", label: "Fastify API layer", group: "Edge" },
      { id: "auth", label: "Authentication", group: "Edge" },
      { id: "api", label: "FastAPI backend", group: "Services" },
      { id: "ai", label: "AI agent services", group: "Services", status: "in-development" },
      { id: "pay", label: "Stripe payments", group: "Services" },
      { id: "pg", label: "PostgreSQL", group: "Data" },
      { id: "redis", label: "Redis", group: "Data" },
      { id: "azure", label: "Azure · Bicep", group: "Platform" },
      { id: "obs", label: "Observability", group: "Platform" },
    ],
    edges: [
      ["mobile", "bff"],
      ["web", "bff"],
      ["admin", "bff"],
      ["bff", "auth"],
      ["bff", "api"],
      ["api", "ai"],
      ["api", "pay"],
      ["api", "pg"],
      ["api", "redis"],
      ["ai", "pg"],
      ["api", "obs"],
      ["azure", "api"],
    ],
  },
  statusNote:
    "Pre-launch. The web app is in restricted preview and mobile is heading into internal beta. Health Aevum AI Inc. is the legal entity; SAECULA is the operating brand.",
};

export const hyelynk: Venture = {
  slug: "hyelynk",
  name: "HyeLynk",
  category: "Social networking · Community commerce",
  role: "Founder & Product Architect",
  period: "2024 – Present",
  tagline: "The Armenian world, connected.",
  site: { label: "hyelynk.ai", href: links.hyelynk },
  overview: [
    "HyeLynk is a social platform built to strengthen Armenian community connections and bring the global diaspora together.",
    "Its product vision combines social networking, community discovery, digital content, commerce and intelligent engagement.",
  ],
  responsibilities:
    "I own the product vision, architecture, engineering strategy, social features, recommendation infrastructure and platform ecosystem.",
  metrics: [
    {
      value: "16",
      label: "backend services designed",
      source: "16 directories under services/ in the HyeLynk monorepo",
      checked: CHECKED,
    },
    {
      value: "8",
      label: "services with implementation code",
      source:
        "user, content, media, API gateway, blockchain, AI orchestrator, AI, vision processing. The other 8 are scaffolds.",
      checked: CHECKED,
    },
    {
      value: "4",
      label: "client surfaces: web, mobile, storefront, admin",
      source: "apps/web, apps/mobile, apps/hyelynk-store, apps/admin-dashboard",
      checked: CHECKED,
    },
  ],
  capabilities: [
    {
      id: "social",
      title: "Social networking",
      status: "in-development",
      summary: "Feeds, posts, stories, reels, comments, likes, profiles, following, notifications and messaging.",
      points: ["Feeds", "Stories", "Reels", "Profiles", "Notifications", "Messaging"],
    },
    {
      id: "commerce",
      title: "Social commerce",
      status: "in-development",
      summary: "A marketplace and storefront where community members discover and sell products.",
      points: ["Marketplace", "Storefront", "Product discovery", "Seller experience"],
    },
    {
      id: "recs",
      title: "Recommendation intelligence",
      status: "planned",
      summary:
        "Content signals, interests and engagement events flow into a Gorse-based ranking service that personalizes the feed. The service is designed; its directory is still a scaffold.",
      points: ["Content signals", "User interests", "Engagement events", "Feed ranking"],
    },
    {
      id: "moderation",
      title: "AI content moderation",
      status: "in-development",
      summary:
        "Submissions pass image and text analysis and safety classification before publication, with human review when a case needs it.",
      points: ["Submission", "Image + text analysis", "Safety classification", "Human review", "Publication"],
    },
    {
      id: "realtime",
      title: "Real-time architecture",
      status: "in-development",
      summary: "A WebSocket gateway carries messaging, notifications and live events between user, content and media services.",
      points: ["WebSocket gateway", "Messaging", "Notifications", "Media processing"],
    },
    {
      id: "hyecoin",
      title: "HyeCoin rewards",
      status: "in-development",
      summary:
        "A concept for recognizing community participation, with a blockchain service built on the Hedera SDK. It is not a traded token, and no rewards are live.",
      points: ["Participation rewards", "Hedera SDK", "Governance concepts"],
    },
    {
      id: "agents",
      title: "Personal AI agents",
      status: "planned",
      summary:
        "A personal assistant for each member, limited to platform functions they authorize: discovery, community recommendations and commerce help.",
      points: ["Personal assistance", "Content discovery", "Commerce help", "Privacy controls"],
    },
  ],
  stack: [
    "TypeScript",
    "Node.js",
    "React",
    "React Native",
    "Python",
    "GraphQL",
    "WebSockets",
    "PostgreSQL",
    "Redis",
    "Hedera",
    "Docker",
    "Kubernetes",
  ],
  architecture: {
    groups: ["Clients", "Gateways", "Services", "Intelligence", "Ledger"],
    nodes: [
      { id: "web", label: "Web app", group: "Clients" },
      { id: "mobile", label: "iOS + Android", group: "Clients" },
      { id: "store", label: "Storefront", group: "Clients" },
      { id: "gw", label: "API gateway", group: "Gateways" },
      { id: "gql", label: "GraphQL gateway", group: "Gateways", status: "planned" },
      { id: "ws", label: "WebSocket gateway", group: "Gateways", status: "planned" },
      { id: "user", label: "User service", group: "Services" },
      { id: "content", label: "Content service", group: "Services" },
      { id: "media", label: "Media service", group: "Services" },
      { id: "orch", label: "AI orchestrator", group: "Intelligence" },
      { id: "vision", label: "Vision processing", group: "Intelligence" },
      { id: "gorse", label: "Gorse recommender", group: "Intelligence", status: "planned" },
      { id: "chain", label: "Blockchain service · Hedera", group: "Ledger" },
    ],
    edges: [
      ["web", "gw"],
      ["mobile", "gw"],
      ["store", "gw"],
      ["mobile", "ws"],
      ["web", "gql"],
      ["gw", "user"],
      ["gw", "content"],
      ["gw", "media"],
      ["content", "orch"],
      ["media", "vision"],
      ["content", "gorse"],
      ["user", "chain"],
    ],
  },
  statusNote:
    "In development. Eight of sixteen designed services have implementation code; the rest are scaffolds. Docker Compose and Kubernetes manifests exist for deployment.",
};

export const ventures = [saecula, hyelynk];
