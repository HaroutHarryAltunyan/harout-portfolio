"use client";

import type { Status } from "@/content/types";
import { STATUS_LABEL } from "@/content/types";

const STATUS_STYLE: Record<Status, string> = {
  verified: "border-emerald-400/40 text-emerald-300",
  "in-development": "border-amber/40 text-amber",
  planned: "border-silver/30 text-silver",
  archived: "border-silver/20 text-silver/70",
};

export function StatusBadge({ status, className = "" }: { status: Status; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] uppercase ${STATUS_STYLE[status]} ${className}`}
    >
      <span
        aria-hidden
        className={`size-1.5 rounded-full ${
          status === "verified" ? "bg-emerald-300" : status === "in-development" ? "bg-amber" : "bg-silver/60"
        }`}
      />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "cyan",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  tone?: "cyan" | "ember" | "plain";
}) {
  const gradient = tone === "cyan" ? "text-gradient-cyan" : tone === "ember" ? "text-gradient-ember" : "";
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`display mt-5 text-[clamp(34px,6vw,80px)] uppercase ${gradient}`}>{title}</h2>
      {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver">{lede}</p>}
    </Reveal>
  );
}

/**
 * Fade-and-rise as the element scrolls into view, driven by CSS scroll timelines (see .reveal in globals.css).
 * No JavaScript: content is painted immediately, and browsers without scroll timelines just show it.
 */
export function Reveal({
  children,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}) {
  const Tag = as;
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}

export function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[11.5px] text-silver">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Section({
  id,
  children,
  className = "",
  label,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`gutter relative scroll-mt-24 py-28 md:py-40 ${className}`}>
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export function ExtLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
