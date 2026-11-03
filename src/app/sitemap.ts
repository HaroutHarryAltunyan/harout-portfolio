import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-02");
  return ["", "work/saecula/", "work/hyelynk/", "projects/"].map((p, i) => ({
    url: `${SITE_URL}/${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: i === 0 ? 1 : 0.8,
  }));
}
