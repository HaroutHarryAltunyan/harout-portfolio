import type { Metadata } from "next";
import Link from "next/link";
import { archive, otherWork } from "@/content/projects";
import { ArchiveCard } from "@/components/ArchiveCard";
import { Chips, Reveal, Section, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Project archive",
  description: "Foundational full-stack projects by Harout Altunyan from the UC Berkeley program, plus live client work.",
  alternates: { canonical: "projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <Section className="pt-40 md:pt-48" label="Project archive">
        <Link href="/#archive" className="font-mono text-[11px] tracking-[0.16em] text-silver uppercase hover:text-white">← Back home</Link>
        <div className="mt-10">
          <SectionHead
            eyebrow="Development archive"
            title="Where the engineering started"
            lede="Eleven foundational projects from the UC Berkeley full-stack program, each with what was hard and what it taught me. Private repositories are marked rather than linked."
          />
        </div>
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {archive.map((p, i) => (
            <Reveal as="li" key={p.name} delay={(i % 3) * 0.05}>
              <ArchiveCard p={p} index={i} detailed />
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section label="Client work" className="pt-0">
        <h2 className="display text-3xl uppercase md:text-5xl">Client work</h2>
        {otherWork.map((w) => (
          <Reveal as="article" key={w.name} className="mt-8 rounded-[28px] border border-line p-7 md:p-10">
            <p className="eyebrow">{w.category}</p>
            <h3 className="mt-3 font-display text-2xl md:text-3xl">{w.name}</h3>
            <p className="mt-3 max-w-2xl text-silver">{w.description}</p>
            <Chips items={w.stack} className="mt-5" />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={w.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">Live site ↗</a>
              <a href={w.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">Source ↗</a>
            </div>
          </Reveal>
        ))}
      </Section>
    </>
  );
}
