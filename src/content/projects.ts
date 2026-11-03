import type { ArchiveProject } from "./types";

/**
 * Foundational projects from the UC Berkeley full-stack program.
 * Repository visibility checked with the GitHub API on 2026-11-02. Private repos are labelled, never linked.
 * No live demos are listed: the only documented one (React Portfolio on Render) no longer responds.
 */
export const archive: ArchiveProject[] = [
  {
    name: "Weather Dashboard",
    category: "Server-side APIs",
    description: "A browser dashboard that shows current conditions and a five-day forecast for any searched city.",
    stack: ["HTML", "CSS", "JavaScript", "OpenWeather API", "localStorage"],
    challenge: "Chaining geocoding and forecast requests and reducing three-hour forecast slots into daily summaries.",
    learning: "Working with third-party REST APIs, async fetch flows and persisting search history in the browser.",
    repo: { name: "06-TheServerSideAPIweatherDash", public: true },
  },
  {
    name: "Task Board",
    category: "Third-party APIs",
    description: "A Kanban-style board for adding project tasks and dragging them between progress columns.",
    stack: ["jQuery", "jQuery UI", "Day.js", "Bootstrap", "localStorage"],
    challenge: "Color-coding tasks by deadline and keeping drag-and-drop state in sync with storage.",
    learning: "Integrating libraries, date handling and event-driven DOM updates.",
    repo: { name: "05-TheThirdPartyAPItask", public: true },
  },
  {
    name: "Professional README Generator",
    category: "Node.js CLI",
    description: "A command-line tool that asks about a project and writes a complete, formatted README.",
    stack: ["Node.js", "Inquirer", "fs"],
    challenge: "Turning free-form answers into consistent Markdown sections, badges and a table of contents.",
    learning: "Building CLIs, prompting users and generating files from templates.",
    repo: { name: "09-TheNode.jsReadMeGenerator", public: true },
  },
  {
    name: "SVG Logo Maker",
    category: "Object-oriented programming",
    description: "A CLI that takes a shape, colors and text and saves a matching SVG logo.",
    stack: ["Node.js", "Inquirer", "ES classes", "SVG"],
    challenge: "Modeling shapes as classes that share a render interface.",
    learning: "Inheritance, encapsulation and testing small units of rendering logic.",
    repo: { name: "10-Object-oriented-Programming-SVG-Logo-Maker", public: false },
  },
  {
    name: "Note Taker",
    category: "Express.js",
    description: "A note-taking app with an Express back end that saves and deletes notes in a JSON store.",
    stack: ["Node.js", "Express", "REST", "JSON storage"],
    challenge: "Designing GET, POST and DELETE routes with unique IDs and safe file writes.",
    learning: "Express routing, middleware and connecting a front end to an API.",
    repo: { name: "11-TheExpress.jsNoteTaker", public: true },
  },
  {
    name: "Employee Tracker",
    category: "SQL",
    description: "A command-line content management system for a company's departments, roles and employees.",
    stack: ["Node.js", "Inquirer", "PostgreSQL"],
    challenge: "Modeling relational tables and joining them for readable reports.",
    learning: "Schema design, seeds, parameterized queries and relational joins.",
    repo: { name: "12-TheSQlEmployeeTracker", public: false },
  },
  {
    name: "MVC Tech Blog",
    category: "Model-View-Controller",
    description: "A CMS-style blog where developers publish posts and comment on each other's work.",
    stack: ["Node.js", "Express", "Handlebars", "Sequelize", "Sessions"],
    challenge: "Separating models, views and controllers and protecting routes with session auth.",
    learning: "MVC structure, ORMs, server-side templates and authentication.",
    repo: { name: "14-TheMVCtechBlog", public: true },
  },
  {
    name: "NoSQL Social Network API",
    category: "NoSQL",
    description: "An API for a social network where users share thoughts, react and manage friend lists.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose"],
    challenge: "Modeling nested reactions as subdocuments and keeping friend references consistent.",
    learning: "Document modeling, virtuals and REST design without a relational schema.",
    repo: { name: "18-TheNoSQLsocialNetAPI", public: false },
  },
  {
    name: "PWA Text Editor",
    category: "Progressive web apps",
    description: "A single-page text editor that installs like an app and keeps working offline.",
    stack: ["JavaScript", "Webpack", "Service workers", "IndexedDB"],
    challenge: "Configuring caching and storage fallbacks so edits survive going offline.",
    learning: "Service workers, manifests, bundling and client-side persistence.",
    repo: { name: "19-ThePWAtextEditor", public: false },
  },
  {
    name: "React Portfolio",
    category: "React",
    description: "A single-page React portfolio with project, resume and contact views.",
    stack: ["React", "Vite", "Material UI"],
    challenge: "Component structure, client-side routing and responsive layout.",
    learning: "React state, props, reusable components and deployment.",
    repo: { name: "20-TheReactPortfolio", public: false },
  },
  {
    name: "MERN Book Search Engine",
    category: "MERN + GraphQL",
    description: "A Google Books search app refactored from a REST API to GraphQL with Apollo Server.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Apollo GraphQL", "JWT"],
    challenge: "Replacing REST routes with typeDefs and resolvers while keeping auth working end to end.",
    learning: "GraphQL schema design, Apollo client caching and token-based auth.",
    repo: { name: "21-TheMERNbookSeachEngine", public: false },
  },
];

export const otherWork = [
  {
    name: "Philly on the Block",
    category: "Client work · Live",
    description:
      "Restaurant ordering, reservations and staff dashboard with Stripe checkout, coupons and stock tracking, deployed on Cloudflare.",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS 4", "Drizzle ORM", "Cloudflare D1", "Stripe"],
    href: "https://phillyontheblock.com",
    repo: "https://github.com/HaroutHarryAltunyan/Philly-On-The-Block",
  },
];
