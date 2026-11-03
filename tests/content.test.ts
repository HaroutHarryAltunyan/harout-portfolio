import { describe, expect, it } from "vitest";
import { ventures, saecula, hyelynk } from "@/content/ventures";
import { archive } from "@/content/projects";
import { links, person } from "@/content/site";
import { validate } from "@/lib/contact";
import { existsSync } from "node:fs";
import { creative } from "@/content/expertise";

describe("content accuracy guards", () => {
  it("every metric names its source and check date", () => {
    for (const v of ventures) {
      for (const m of v.metrics) {
        expect(m.source.length, `${v.name}: ${m.label}`).toBeGreaterThan(10);
        expect(m.checked).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  it("every capability carries a status", () => {
    for (const v of ventures) for (const c of v.capabilities) expect(["verified", "in-development", "planned", "archived"]).toContain(c.status);
  });

  it("wearables stay planned until an integration exists in code", () => {
    expect(saecula.capabilities.find((c) => c.id === "wearables")?.status).toBe("planned");
  });

  it("HyeLynk never claims an active token or rewards", () => {
    const h = hyelynk.capabilities.find((c) => c.id === "hyecoin")!;
    expect(h.status).not.toBe("verified");
    expect(h.summary).toMatch(/not a traded token/i);
  });

  it("architecture edges reference real nodes", () => {
    for (const v of ventures) {
      const ids = new Set(v.architecture.nodes.map((n) => n.id));
      for (const [a, b] of v.architecture.edges) {
        expect(ids.has(a), `${v.name} edge ${a}`).toBe(true);
        expect(ids.has(b), `${v.name} edge ${b}`).toBe(true);
      }
      for (const n of v.architecture.nodes) expect(v.architecture.groups).toContain(n.group);
    }
  });

  it("archive projects list the full set without fake demo links", () => {
    expect(archive).toHaveLength(11);
    for (const p of archive) expect(p.demo).toBeUndefined();
  });

  it("external links are https", () => {
    for (const href of Object.values(links)) expect(href).toMatch(/^https:\/\//);
    expect(person.email).toMatch(/@/);
  });

  it("every referenced image exists in public/img", () => {
    const files = [
      ...creative.brand.map((b) => b.img),
      ...creative.packs.map((p) => p.file),
      ...creative.campaign.map((c) => c.file),
      "portrait-hero.webp",
      "portrait-square.webp",
      "saecula-app-home.webp",
    ];
    for (const f of files) expect(existsSync(`public/img/${f}`), f).toBe(true);
  });
});

describe("contact form validation", () => {
  const ok = { name: "Ada Lovelace", email: "ada@example.com", company: "", subject: "Hello there", message: "I'd like to talk about an AI health project." };
  it("accepts a complete message", () => expect(validate(ok)).toEqual({}));
  it("rejects a bad email", () => expect(validate({ ...ok, email: "ada@" }).email).toBeDefined());
  it("rejects a short message", () => expect(validate({ ...ok, message: "hi" }).message).toBeDefined());
  it("rejects an overlong message", () => expect(validate({ ...ok, message: "x".repeat(4001) }).message).toBeDefined());
  it("rejects an empty name", () => expect(validate({ ...ok, name: " " }).name).toBeDefined());
});
