# Harout Altunyan — personal website

Cinematic portfolio for Harout Altunyan: Co-Founder & CTO of SAECULA, founder of HyeLynk.

**Live:** https://haroutharryaltunyan.github.io/harout-portfolio/

## Stack

Next.js 16 (static export) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Three.js via React Three Fiber · Lucide.
GSAP, Lenis and Drei were left out on purpose: Motion and CSS scroll timelines cover the animation, Lenis would hijack native scrolling, and the scenes don't need Drei.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck && npm run lint && npm test
BASE_PATH=/harout-portfolio npm run build   # static site in out/
```

Pushing to `main` runs `.github/workflows/deploy.yml`: typecheck, lint, tests, build, then deploy to GitHub Pages.

## Updating content

All copy lives in `src/content/` and is typed in `src/content/types.ts`:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, headline, email, social links, navigation |
| `bio.ts` | About, experience, founder journey, philosophy, focus, education |
| `ventures.ts` | SAECULA and HyeLynk case studies: metrics (with sources), capabilities, architecture |
| `projects.ts` | Bootcamp project archive and client work |
| `expertise.ts` | AI lab, architecture explorer, lifecycle, skills, brand & creative |

Every product capability has a status: `verified`, `in-development`, `planned` or `archived`. `tests/content.test.ts`
fails the build if a metric loses its source, a private repo gets linked, or wearables are marked anything but planned.

## Images

`npm run images` regenerates `public/img/*.webp` and `public/og.jpg` from the original files on this Mac
(see `scripts/build-images.mjs` for source paths). Outputs are committed so CI doesn't need the originals.

## Contact form

GitHub Pages can't run a server. Without configuration the form validates input, blocks bots (honeypot, minimum fill
time, cooldown) and opens the visitor's email app with the message filled in. To send directly, create a form at a
service such as Formspree, then set a repository variable `CONTACT_ENDPOINT` to its URL
(Settings → Secrets and variables → Actions → Variables). Server-side validation and rate limiting then come from that service.

## Legacy

`legacy/` holds the previous single-page site.
