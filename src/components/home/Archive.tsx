import Link from "next/link";
import { archive } from "@/content/projects";
import { ArchiveCard } from "@/components/ArchiveCard";
import { Reveal, Section, SectionHead } from "@/components/ui";

export function Archive() {
  return (
    <Section id="archive" label="Development project archive">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Development archive"
          title="Where the engineering started"
          lede="Foundational projects from the UC Berkeley full-stack program. They're coursework, not commercial products, and together they cover the stack I build on today."
        />
        <Reveal>
          <Link href="/projects/" className="rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">
            Full archive →
          </Link>
        </Reveal>
      </div>
      <Reveal className="mt-14">
        <ul className="snap-row -mx-5 flex gap-4 overflow-x-auto px-5 pb-4" aria-label="Archive projects (scroll horizontally)">
          {archive.map((p, i) => (
            <li key={p.name} className="w-[78vw] max-w-[320px] shrink-0">
              <ArchiveCard p={p} index={i} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
