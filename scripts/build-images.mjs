// Regenerates optimized site images in public/img from the original assets on this machine.
// Source files live outside the repo; the generated WebP files are committed so CI never needs them.
// Usage: npm run images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";

const HOME = homedir();
const D = (p) => path.join(HOME, "Desktop", p);
const OUT = path.resolve("public/img");

const PACKS = [
  "brain_pack",
  "daily_multivitamin_pack",
  "energy_optimization_pack",
  "focus_pack",
  "endurance_vo2_pack",
  "eye_vision_pack",
  "cortisol_recovery_pack",
  "beauty_pack",
];

const jobs = [
  // Portrait: square crop of face and shoulders, plus a 4:5 crop for the hero.
  {
    src: D("Podcast 8 for SAECULA — AI-Powered Personalized Health & Longevity Platform (1).png"),
    out: "portrait-square.webp",
    extract: { left: 172, top: 454, width: 1196, height: 1196 },
    resize: [720, 720],
  },
  {
    src: D("Podcast 8 for SAECULA — AI-Powered Personalized Health & Longevity Platform (1).png"),
    out: "portrait-hero.webp",
    extract: { left: 0, top: 380, width: 1536, height: 1920 },
    resize: [960, 1200],
  },
  { src: D("ffghjjkj.png"), out: "saecula-app-home.webp", resize: [560] },
  { src: D("01saeculaad.png"), out: "saecula-cell.webp", resize: [1280] },
  { src: D("imasdsdsddge.png"), out: "campaign-mitochondria.webp", resize: [900] },
  { src: D("imdcsdage.png"), out: "campaign-protein.webp", resize: [900] },
  { src: D("imasaacascge.png"), out: "campaign-molecules.webp", resize: [900] },
  { src: D("imasdsdsdge.png"), out: "campaign-device.webp", resize: [900] },
  { src: D("imascascge.png"), out: "campaign-box.webp", resize: [900] },
  {
    src: D("healixhealthicon.icon/Assets/logosun.jpg"),
    out: "brand-healix.webp",
    extract: { left: 76, top: 16, width: 1019, height: 1019 },
    resize: [640, 640],
  },
  { src: D("2990257.png"), out: "brand-aevum.webp", resize: [900] },
  ...PACKS.map((p) => ({ src: D(`saecula/card/${p}.webp`), out: `pack-${p.replace(/_pack$/, "").replace(/_/g, "-")}.webp`, resize: [640] })),
];

await mkdir(OUT, { recursive: true });
for (const j of jobs) {
  let img = sharp(j.src);
  if (j.extract) img = img.extract(j.extract);
  if (j.resize) img = img.resize(j.resize[0], j.resize[1], { fit: "cover", withoutEnlargement: true });
  const info = await img.webp({ quality: 80 }).toFile(path.join(OUT, j.out));
  console.log(`${j.out.padEnd(36)} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
}

// Open Graph card: portrait on the right, name and role on the left.
const portrait = await sharp(path.join(OUT, "portrait-square.webp")).resize(630, 630).toBuffer();
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#080F20"/><stop offset="1" stop-color="#050508"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="64" y="250" font-family="Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#FFFFFF" letter-spacing="-2">HAROUT</text>
  <text x="64" y="335" font-family="Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#FFFFFF" letter-spacing="-2">ALTUNYAN</text>
  <rect x="64" y="372" width="64" height="4" fill="#FF681E"/>
  <text x="64" y="425" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#AAB3C5">Co-Founder &amp; CTO, SAECULA</text>
  <text x="64" y="461" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#AAB3C5">Founder, HyeLynk</text>
  <text x="64" y="509" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#00E5FF">AI Systems Architect</text>
</svg>`;
await sharp(Buffer.from(svg))
  .composite([{ input: portrait, left: 570, top: 0 }])
  .jpeg({ quality: 84 })
  .toFile(path.resolve("public/og.jpg"));
console.log("og.jpg 1200x630");
