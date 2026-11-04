import Link from "next/link";
import { links } from "@/content/site";
import { ResumeButton } from "@/components/ResumeButton";

const cols = [
  {
    title: "Site",
    items: [
      { label: "Work", href: "/#work" },
      { label: "About", href: "/#about" },
      { label: "AI Lab", href: "/#lab" },
      { label: "Skills", href: "/#expertise" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Ventures",
    items: [
      { label: "SAECULA case study", href: "/work/saecula/" },
      { label: "HyeLynk case study", href: "/work/hyelynk/" },
      { label: "Project archive", href: "/projects/" },
    ],
  },
  {
    title: "Elsewhere",
    items: [
      { label: "GitHub", href: links.github, ext: true },
      { label: "LinkedIn", href: links.linkedin, ext: true },
      { label: "saecula.ai", href: links.saecula, ext: true },
      { label: "hyelynk.ai", href: links.hyelynk, ext: true },
      { label: "altunyanaihedgefund.com", href: links.hedgeFund, ext: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="gutter relative overflow-hidden border-t border-line pt-24" style={{ paddingBottom: "max(32px, env(safe-area-inset-bottom, 0px))" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] opacity-60"
        style={{ background: "radial-gradient(60% 80% at 50% 120%, rgb(0 123 255 / 0.25), transparent 70%)" }}
      />
      <div className="container-x relative">
        <p className="display text-[clamp(44px,11vw,168px)] leading-[0.86]">
          HAROUT
          <br />
          <span className="text-gradient-cyan">ALTUNYAN</span>
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <p className="font-mono text-xs tracking-[0.2em] text-silver uppercase">Founder. Engineer. Architect.</p>
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-display text-lg">Building what&apos;s next.</p>
            <ResumeButton variant="solid" />
          </div>
        </div>
        <div className="hairline my-12" />
        <div className="grid gap-10 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="eyebrow mb-4">{c.title}</p>
              <ul className="grid gap-2.5">
                {c.items.map((i) =>
                  "ext" in i ? (
                    <li key={i.label}>
                      <a href={i.href} target="_blank" rel="noopener noreferrer" className="text-silver transition-colors hover:text-white">
                        {i.label} ↗
                      </a>
                    </li>
                  ) : (
                    <li key={i.label}>
                      <Link href={i.href} className="text-silver transition-colors hover:text-white">
                        {i.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 font-mono text-[11px] tracking-wider text-silver/70 uppercase">
          <span>© 2026 Harout Altunyan</span>
          <span>Los Angeles, California</span>
        </div>
      </div>
    </footer>
  );
}
