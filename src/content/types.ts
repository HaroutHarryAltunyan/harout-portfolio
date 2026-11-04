/**
 * Content status. Every claim about a product capability carries one, so the
 * site never presents planned work as shipped.
 *  - verified:        exists in a repository or live deployment today
 *  - in-development:  code exists but is not generally available (launch-gated, preview, partial)
 *  - planned:         designed or on the roadmap, no implementation yet
 *  - archived:        completed earlier work that is no longer active
 */
export type Status = "verified" | "in-development" | "planned" | "archived";

export const STATUS_LABEL: Record<Status, string> = {
  verified: "Verified",
  "in-development": "In development",
  planned: "Planned",
  archived: "Archived",
};

export type Link = { label: string; href: string };

export type Metric = {
  value: string;
  label: string;
  /** Where the number comes from, shown on hover / in a footnote. */
  source: string;
  checked: string; // ISO date the figure was verified
};

export type Capability = {
  id: string;
  title: string;
  summary: string;
  status: Status;
  points?: string[];
};

export type ArchNode = { id: string; label: string; group: string; status?: Status };
export type ArchEdge = [from: string, to: string];

export type Venture = {
  slug: "saecula" | "hyelynk" | "hedge-fund";
  name: string;
  pronunciation?: string;
  category: string;
  role: string;
  period: string;
  tagline: string;
  site: Link;
  overview: string[];
  responsibilities: string;
  metrics: Metric[];
  capabilities: Capability[];
  stack: string[];
  architecture: { nodes: ArchNode[]; edges: ArchEdge[]; groups: string[] };
  statusNote: string;
};

export type ArchiveProject = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  challenge: string;
  learning: string;
  repo: { name: string; public: boolean };
  demo?: string;
};
