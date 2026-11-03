"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, RESUME_FILE } from "@/content/site";
import { asset } from "@/lib/asset";
import { Download } from "lucide-react";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const current = isHome ? active : pathname.startsWith("/work") || pathname.startsWith("/projects") ? "work" : "";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 gutter"
      style={{ paddingTop: "max(14px, env(safe-area-inset-top, 0px))" }}
    >
      <div
        className={`container-x flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 md:px-5 ${
          scrolled || open ? "glass bg-obsidian/60 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)]" : "border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Harout Altunyan, home">
          <span className="grid size-8 place-items-center rounded-lg bg-white font-display text-sm font-bold text-obsidian">H</span>
          <span className="hidden font-display text-[13px] font-semibold tracking-tight sm:inline">HAROUT ALTUNYAN</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <Link
                  href={n.href}
                  aria-current={current === n.id ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors ${
                    current === n.id ? "bg-white/10 text-white" : "text-silver hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={asset(RESUME_FILE)}
            download="Harout_Altunyan_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-2 text-[13px] transition-colors hover:border-white"
          >
            <Download size={14} aria-hidden /> Resume<span className="sr-only"> (PDF download)</span>
          </a>
          <Link href="/#contact" className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-obsidian transition-transform hover:scale-[1.03]">
            Let&apos;s connect
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="container-x glass mt-2 rounded-3xl bg-obsidian/85 p-3 md:hidden"
      >
        <ul className="grid">
          {nav.map((n) => (
            <li key={n.id}>
              <Link
                href={n.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center justify-between rounded-2xl px-4 font-display text-lg ${
                  current === n.id ? "bg-white/10" : ""
                }`}
              >
                {n.label}
                <span className="font-mono text-[11px] text-silver">0{nav.indexOf(n) + 1}</span>
              </Link>
            </li>
          ))}
          <li>
            <a
              href={asset(RESUME_FILE)}
              download="Harout_Altunyan_Resume.pdf"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between rounded-2xl px-4 font-display text-lg"
            >
              Download resume <Download size={18} aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
