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
    "It is live as an invite-only beta at www.hyelynk.ai: feeds, stories, reels, messaging, calls and live audio, groups, pages, events, ads, a shop and HYE, a community token on the Hedera network.",
  ],
  responsibilities:
    "I own the product vision, architecture, engineering across web, mobile and backend, the recommendation and moderation systems, the Azure infrastructure and every release.",
  metrics: [
    {
      value: "2,300+",
      label: "commits on main since Jul 2025",
      source: "git log of the HyeLynk repo main branch: 2,323 commits, all by Haroutyun Altunyan, first on 2025-07-21",
      checked: "2026-11-27",
    },
    {
      value: "610",
      label: "merged pull requests",
      source: "GitHub pull requests in the HyeLynk repo with state merged",
      checked: "2026-11-27",
    },
    {
      value: "3",
      label: "client apps: web, iOS, Android",
      source: "apps/web (Next.js 15), apps/mobile (Expo / React Native for iOS and Android), apps/backend (Fastify 5 API)",
      checked: "2026-11-27",
    },
  ],
  capabilities: [
    {
      id: "social",
      title: "Social networking",
      status: "verified",
      summary:
        "Feeds, stories, reels, comments, profiles, following, notifications, pages and events, live in the invite-only beta.",
      points: ["Feeds", "Stories", "Reels", "Pages", "Events", "Notifications"],
    },
    {
      id: "realtime",
      title: "Messaging, calls and live",
      status: "verified",
      summary:
        "Direct messages with end-to-end encryption built on standard algorithms, plus calls, Spaces and live streams on a LiveKit media server.",
      points: ["End-to-end encryption", "Calls", "Spaces", "Live streams", "LiveKit"],
    },
    {
      id: "recs",
      title: "Feed and Pulse ranking",
      status: "verified",
      summary:
        "Model-based ranking for the home feed and Pulse, a text-first stream, with a rules holdout. Models only take over when they beat the rules baseline, and with beta-sized data most still don't.",
      points: ["Engagement events", "Embeddings", "Python ranker service", "Rules holdout", "Shadow mode"],
    },
    {
      id: "moderation",
      title: "AI content moderation",
      status: "verified",
      summary:
        "A Python moderation service checks text and images before publication, with community review and an audited admin console for cases that need a person.",
      points: ["Image + text analysis", "Community review", "Human review", "Audit log"],
    },
    {
      id: "hyecoin",
      title: "HYE on Hedera",
      status: "verified",
      summary:
        "HYE is HyeLynk's community token on Hedera mainnet. Members can tip, pay Marketplace sellers and move HYE to their own wallet, including Ledger and Citadel hardware wallets in desktop Chrome and Edge. It is web-only and not offered in the iOS app. This is not investment advice.",
      points: ["Hedera mainnet", "Ledger (WebHID)", "Citadel (WebUSB)", "Central pause", "Admin audit"],
    },
    {
      id: "commerce",
      title: "Social commerce",
      status: "verified",
      summary: "A Marketplace and shop where members buy and sell, with Stripe checkout on the web and App Store billing for plans on iOS, plus self-serve ads for businesses.",
      points: ["Marketplace", "Shop", "Business pages", "Self-serve ads"],
    },
    {
      id: "groups",
      title: "Groups and communities",
      status: "in-development",
      summary: "Groups with chat, polls, live sessions and fundraisers are on main; announcements, pins and group files are still being finished.",
      points: ["Group chat", "Polls", "Fundraisers", "Group files"],
    },
    {
      id: "mobile",
      title: "iOS and Android apps",
      status: "in-development",
      summary:
        "One Expo / React Native codebase. The iOS app is going through App Store review; Android follows.",
      points: ["Expo", "React Native", "In-app purchases", "Push notifications"],
    },
  ],
  stack: [
    "TypeScript",
    "Fastify 5",
    "Next.js 15",
    "Expo · React Native",
    "Python",
    "PostgreSQL",
    "LiveKit",
    "Hedera",
    "Stripe",
    "Azure Container Apps",
    "Bicep",
  ],
  architecture: {
    groups: ["Clients", "API", "Intelligence", "Media", "Data"],
    nodes: [
      { id: "web", label: "Next.js web", group: "Clients" },
      { id: "mobile", label: "Expo · iOS + Android", group: "Clients", status: "in-development" },
      { id: "api", label: "Fastify API", group: "API" },
      { id: "pay", label: "Stripe + App Store billing", group: "API" },
      { id: "ranker", label: "Pulse ranker (Python)", group: "Intelligence" },
      { id: "mod", label: "Moderation service (Python)", group: "Intelligence" },
      { id: "livekit", label: "LiveKit media server", group: "Media" },
      { id: "blob", label: "Azure Blob storage", group: "Media" },
      { id: "pg", label: "PostgreSQL", group: "Data" },
      { id: "chain", label: "Hedera mainnet", group: "Data" },
    ],
    edges: [
      ["web", "api"],
      ["mobile", "api"],
      ["web", "livekit"],
      ["mobile", "livekit"],
      ["api", "pay"],
      ["api", "ranker"],
      ["api", "mod"],
      ["api", "blob"],
      ["api", "pg"],
      ["api", "chain"],
    ],
  },
  statusNote:
    "Live as an invite-only beta at www.hyelynk.ai on Azure Container Apps. The iOS app is in App Store review and Android is still to come.",
};

export const hedgeFund: Venture = {
  slug: "hedge-fund",
  name: "Altunyan AI Hedge Fund",
  category: "AI-native quantitative research · Paper trading",
  role: "Founder & Engineer",
  period: "2026 – Present",
  tagline: "Intelligence beyond the market.",
  site: { label: "altunyanaihedgefund.com", href: links.hedgeFund },
  overview: [
    "An AI-native research and paper-trading platform that keeps a hard wall between the intelligence that proposes trades and the execution system that is allowed to place them.",
    "A multi-agent research council, point-in-time market data and walk-forward validation feed strategy pods. Every order passes a deterministic risk engine and a named human approval before it reaches a paper broker.",
  ],
  responsibilities:
    "I designed and built the whole system: data pipelines, research agents, alpha models, risk engine, order management, the web terminal and the Azure deployment.",
  metrics: [
    {
      value: "11",
      label: "Python services",
      source: "11 directories under services/ in the ai-hedge-fund repo (risk engine, market data, intelligence, fund, execution, API and others)",
      checked: "2026-11-03",
    },
    {
      value: "10",
      label: "research programs, status published",
      source: "Strategy universe on altunyanaihedgefund.com, a static snapshot of the strategy registry",
      checked: "2026-11-03",
    },
    {
      value: "105",
      label: "US stocks and ETFs tracked",
      source: "105-ticker universe defined in services/market-data (README, Known limitations)",
      checked: "2026-11-03",
    },
  ],
  capabilities: [
    {
      id: "council",
      title: "Multi-agent research council",
      status: "verified",
      summary:
        "Fundamental, technical, sentiment, macro and quant analysts feed a CIO agent that writes a cited thesis. Agents have no broker credentials and cannot submit orders; deterministic models, not LLM confidence, drive sizing.",
      points: ["LangGraph", "Cited sources with as-of times", "Local model or Claude", "Heuristic fallback"],
    },
    {
      id: "data",
      title: "Point-in-time data",
      status: "verified",
      summary:
        "Ten years of daily bars, SEC filings by acceptance time, insider trades, short interest, Treasury curve and news. Every record carries the time it became public, so backtests can't see the future.",
      points: ["Alpaca SIP", "SEC EDGAR", "Form 4", "FINRA", "Fama-French since 1926"],
    },
    {
      id: "validation",
      title: "Scientific validation",
      status: "verified",
      summary:
        "Walk-forward tests through the same session engine used in paper mode, repeated at 2× costs and compared with equal-weight and SPY benchmarks. Out-of-sample tests so far find no strategy that significantly beats the equal-weight universe, and the site says so.",
      points: ["Walk-forward", "Purge + embargo", "Locked holdout", "Bootstrap CIs", "Deflated Sharpe"],
    },
    {
      id: "risk",
      title: "Deterministic risk engine",
      status: "verified",
      summary:
        "Pure functions with final veto over every order: position, sector, leverage, beta, liquidity and correlation limits, daily-loss and drawdown halts, and a fail-closed kill switch only a human can release.",
      points: ["Property-tested", "No shorting or margin", "Kill switch", "Re-check at submission"],
    },
    {
      id: "execution",
      title: "Human-approved paper execution",
      status: "verified",
      summary:
        "Approved orders go through an OMS to Alpaca's paper endpoint, unknown outcomes are reconciled before any retry, and positions are rebuilt from an append-only ledger with a hash-chained audit log.",
      points: ["Named approver", "Alpaca paper", "Reconciliation", "Append-only ledger"],
    },
    {
      id: "live",
      title: "Live trading",
      status: "planned",
      summary: "Not built. Phase 1 is paper trading only, and a LIVE mode does not exist in the code.",
    },
  ],
  stack: [
    "Python",
    "FastAPI",
    "LangGraph",
    "Next.js 15",
    "TypeScript",
    "PostgreSQL · Timescale",
    "Redis",
    "Alpaca paper API",
    "Claude · LM Studio",
    "Azure Static Web Apps",
  ],
  architecture: {
    groups: ["Data", "Intelligence", "Execution", "Surfaces"],
    nodes: [
      { id: "md", label: "Point-in-time market data", group: "Data" },
      { id: "council", label: "Research council", group: "Intelligence" },
      { id: "alpha", label: "Alpha models", group: "Intelligence" },
      { id: "pods", label: "Strategy pods", group: "Intelligence" },
      { id: "risk", label: "Deterministic risk engine", group: "Execution" },
      { id: "human", label: "Human approval", group: "Execution" },
      { id: "oms", label: "OMS · Alpaca paper", group: "Execution" },
      { id: "ledger", label: "Ledger + audit chain", group: "Execution" },
      { id: "web", label: "Next.js terminal", group: "Surfaces" },
    ],
    edges: [
      ["md", "council"],
      ["md", "alpha"],
      ["council", "alpha"],
      ["alpha", "pods"],
      ["pods", "risk"],
      ["risk", "human"],
      ["human", "oms"],
      ["oms", "ledger"],
      ["ledger", "web"],
    ],
  },
  statusNote:
    "Research and paper trading only. No client money, no live orders. The public site at altunyanaihedgefund.com is a static snapshot; the trading back end is offline and backed up until it returns.",
};

export const ventures = [saecula, hyelynk, hedgeFund];
