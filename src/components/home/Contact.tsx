"use client";

import { useRef, useState } from "react";
import { Copy, Mail } from "lucide-react";
import { CONTACT_ENDPOINT, links, person } from "@/content/site";
import { Reveal } from "@/components/ui";

import { validate, type Fields, type Errors } from "@/lib/contact";

const MIN_FILL_MS = 2500; // bots submit instantly
const COOLDOWN_MS = 60_000; // client-side rate limit between sends

export function Contact() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", company: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ kind: "idle" | "sending" | "sent" | "error" | "handoff"; text: string }>({ kind: "idle", text: "" });
  const [copied, setCopied] = useState("");
  const startedAt = useRef<number>(0);
  const lastSent = useRef<number>(0);
  const honeypot = useRef<HTMLInputElement>(null);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!startedAt.current) startedAt.current = Date.now();
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus({ kind: "error", text: "Check the highlighted fields." });
      return;
    }
    if (honeypot.current?.value || Date.now() - startedAt.current < MIN_FILL_MS) {
      setStatus({ kind: "error", text: "That was very fast. Wait a moment and try again." });
      return;
    }
    if (Date.now() - lastSent.current < COOLDOWN_MS) {
      setStatus({ kind: "error", text: "You just sent a message. Wait a minute before sending another." });
      return;
    }

    if (!CONTACT_ENDPOINT) {
      // No form backend is configured on this static site, so hand the message to the visitor's email app.
      const body = `${fields.message}\n\n— ${fields.name}${fields.company ? `, ${fields.company}` : ""}\n${fields.email}`;
      window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        kind: "handoff",
        text: `Your email app should open with the message ready to send. If it doesn't, email ${person.email} directly.`,
      });
      return;
    }

    setStatus({ kind: "sending", text: "Sending…" });
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, _gotcha: honeypot.current?.value ?? "" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      lastSent.current = Date.now();
      setStatus({ kind: "sent", text: "Message sent. I'll reply by email." });
      setFields({ name: "", email: "", company: "", subject: "", message: "" });
    } catch {
      setStatus({ kind: "error", text: `The message didn't send. Try again, or email ${person.email} directly.` });
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied("Email copied.");
    } catch {
      setCopied("Couldn't copy. Select the address above instead.");
    }
    setTimeout(() => setCopied(""), 2500);
  }

  const input =
    "w-full rounded-2xl border bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-silver/50 outline-none transition-colors focus:border-cyan";

  return (
    <section id="contact" aria-label="Contact" className="gutter relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-2/3" style={{ background: "radial-gradient(70% 60% at 50% 100%, rgb(255 104 30 / 0.22), transparent 70%), radial-gradient(60% 70% at 50% 110%, rgb(0 123 255 / 0.35), transparent 70%)" }} />
        <div className="absolute inset-x-0 bottom-[5%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgb(0 229 255 / 0.6), rgb(255 104 30 / 0.6), transparent)" }} />
      </div>
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-5 text-[clamp(40px,8.5vw,128px)] uppercase leading-[0.9]">
            Have an ambitious idea?
            <br />
            <span className="text-gradient-ember">Let&apos;s talk.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-silver">
            I&apos;m interested in conversations about artificial intelligence, health technology, software architecture, startups and ambitious digital products.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal className="grid content-start gap-6">
            <div>
              <p className="eyebrow">Email</p>
              <p className="mt-2 font-display text-lg break-all select-all md:text-xl">{person.email}</p>
            </div>
            <div>
              <p className="eyebrow">Location</p>
              <p className="mt-2 text-lg">{person.location}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-mono text-[11px] tracking-[0.16em] text-obsidian uppercase">
                <Mail size={14} /> Send email
              </a>
              <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">
                <Copy size={14} /> Copy email
              </button>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">GitHub ↗</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase hover:border-white">LinkedIn ↗</a>
            </div>
            <p role="status" className="min-h-5 font-mono text-[12px] text-cyan">{copied}</p>
          </Reveal>

          <Reveal>
            <form onSubmit={onSubmit} noValidate className="glass grid gap-4 rounded-[28px] p-6 md:grid-cols-2 md:p-8" aria-describedby="form-status">
              {(
                [
                  ["name", "Name", "text", "name"],
                  ["email", "Email", "email", "email"],
                  ["company", "Company / organization (optional)", "text", "organization"],
                  ["subject", "Subject", "text", "off"],
                ] as const
              ).map(([k, label, type, ac]) => (
                <div key={k} className="grid gap-2">
                  <label htmlFor={`f-${k}`} className="font-mono text-[11px] tracking-[0.14em] text-silver uppercase">{label}</label>
                  <input
                    id={`f-${k}`}
                    name={k}
                    type={type}
                    autoComplete={ac}
                    value={fields[k]}
                    onChange={set(k)}
                    aria-invalid={!!errors[k]}
                    aria-describedby={errors[k] ? `f-${k}-err` : undefined}
                    className={`${input} ${errors[k] ? "border-ember" : "border-line"}`}
                  />
                  {errors[k] && <p id={`f-${k}-err`} className="text-[13px] text-ember">{errors[k]}</p>}
                </div>
              ))}
              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="f-message" className="font-mono text-[11px] tracking-[0.14em] text-silver uppercase">Message</label>
                <textarea
                  id="f-message"
                  name="message"
                  rows={6}
                  value={fields.message}
                  onChange={set("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "f-message-err" : undefined}
                  className={`${input} resize-y ${errors.message ? "border-ember" : "border-line"}`}
                />
                {errors.message && <p id="f-message-err" className="text-[13px] text-ember">{errors.message}</p>}
              </div>
              {/* Honeypot: hidden from people, filled by bots. */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="f-website">Website</label>
                <input id="f-website" ref={honeypot} name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-2">
                <p id="form-status" role="status" aria-live="polite" className={`text-sm ${status.kind === "error" ? "text-ember" : status.kind === "sent" ? "text-emerald-300" : "text-silver"}`}>
                  {status.text || (CONTACT_ENDPOINT ? "" : "Sending opens your email app with the message filled in.")}
                </p>
                <button type="submit" disabled={status.kind === "sending"} className="rounded-full bg-white px-7 py-3.5 font-mono text-[12px] tracking-[0.16em] text-obsidian uppercase transition-transform hover:scale-[1.03] disabled:opacity-60">
                  {CONTACT_ENDPOINT ? "Send message" : "Send via email"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
