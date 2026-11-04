import { philosophy, education, focus } from "@/content/bio";
import { Chips, ExtLink, Reveal, Section, SectionHead } from "@/components/ui";

export function Philosophy() {
  return (
    <Section id="philosophy" label="Engineering philosophy">
      <SectionHead eyebrow="Engineering philosophy" title="How I think about technology" tone="plain" />
      <ol className="mt-16 border-t border-line">
        {philosophy.map((p, i) => (
          <Reveal as="li" key={p.title} className="group grid gap-3 border-b border-line py-10 md:grid-cols-[120px_minmax(0,1.3fr)_minmax(0,1fr)] md:items-baseline md:gap-10">
            <span className="font-mono text-sm text-ember tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="display text-[clamp(28px,4.6vw,60px)] uppercase transition-colors group-hover:text-cyan">{p.title}</h3>
            <p className="text-lg leading-relaxed text-silver">{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" label="Education and background">
      <SectionHead eyebrow="Education & background" title="A foundation in learning" />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <Reveal as="article" className="glass rounded-[28px] p-7 lg:col-span-2 md:p-10">
          <p className="eyebrow text-cyan">{education.program.period}</p>
          <h3 className="mt-4 font-display text-2xl md:text-4xl">{education.program.school}</h3>
          <p className="mt-2 text-lg text-silver">{education.program.detail}</p>
          <p className="mt-4 text-silver">
            Certificate: {education.program.certificate.name}, completed {education.program.certificate.completed}.{" "}
            <ExtLink
              href={education.program.certificate.verifyUrl}
              className="font-mono text-[11px] tracking-[0.14em] text-cyan uppercase hover:underline"
            >
              View certificate ↗
            </ExtLink>
          </p>
          <Chips items={education.program.focus} className="mt-8" />
        </Reveal>
        <Reveal as="article" delay={0.08} className="rounded-[28px] border border-line p-7 md:p-10">
          <p className="eyebrow">Interdisciplinary background</p>
          <p className="mt-4 leading-relaxed text-silver">{education.background}</p>
        </Reveal>
      </div>
      <Reveal className="mt-6 rounded-[28px] border border-line p-7 md:p-10">
        <p className="eyebrow">Continuous learning</p>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {education.learning.map((l) => (
            <li key={l} className="font-display text-lg md:text-xl">{l}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

const ACCENT = { cyan: "#00E5FF", ember: "#FF681E", purple: "#653BFF" } as const;

export function Focus() {
  return (
    <Section id="focus" label="Current focus">
      <SectionHead eyebrow="Current focus" title="What I'm building next" />
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {focus.map((f, i) => (
          <Reveal as="article" key={f.title} delay={i * 0.08} className="relative overflow-hidden rounded-[28px] border border-line p-7 md:p-8">
            <div aria-hidden className="absolute -top-24 -right-24 size-56 rounded-full blur-3xl" style={{ background: ACCENT[f.accent], opacity: 0.22 }} />
            <span aria-hidden className="relative block h-1 w-12 rounded-full" style={{ background: ACCENT[f.accent] }} />
            <h3 className="relative mt-8 font-display text-xl uppercase md:text-2xl">{f.title}</h3>
            <p className="relative mt-4 leading-relaxed text-silver">{f.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
