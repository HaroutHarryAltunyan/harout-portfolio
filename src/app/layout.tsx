import type { Metadata, Viewport } from "next";
import { Unbounded, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { person, links, SITE_URL } from "@/content/site";
import { asset } from "@/lib/asset";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-unbounded", display: "swap" });
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Harout Altunyan · Founder, AI Systems Architect, Full-Stack Engineer",
    template: "%s · Harout Altunyan",
  },
  description: person.description,
  keywords: [
    "Harout Altunyan",
    "Harry Altunyan",
    "AI Systems Architect",
    "Full Stack Software Engineer",
    "AI Engineer",
    "Technology Founder",
    "SAECULA founder",
    "HyeLynk founder",
    "Altunyan AI Hedge Fund",
    "AI quantitative research",
    "Los Angeles software engineer",
  ],
  authors: [{ name: person.name, url: SITE_URL }],
  alternates: { canonical: "./" },
  openGraph: {
    type: "profile",
    url: "./",
    siteName: person.name,
    title: "Harout Altunyan · Founder, AI Systems Architect",
    description: person.description,
    images: [{ url: "og.jpg", width: 1200, height: 630, alt: "Harout Altunyan, Co-Founder & CTO of SAECULA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harout Altunyan · Founder, AI Systems Architect",
    description: person.description,
    images: ["og.jpg"],
  },
  icons: { icon: asset("/favicon.svg") },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  alternateName: person.alternateName,
  jobTitle: person.jobTitle,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/img/portrait-square.webp`,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
  sameAs: [links.github, links.linkedin],
  worksFor: [
    { "@type": "Organization", name: "SAECULA", legalName: "Health Aevum AI Inc.", url: links.saecula },
    { "@type": "Organization", name: "HyeLynk", url: links.hyelynk },
    { "@type": "Organization", name: "Altunyan AI Hedge Fund", url: links.hedgeFund },
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Berkeley Extension" },
  knowsAbout: ["Artificial intelligence", "Health technology", "Software architecture", "Full-stack development", "Cloud infrastructure", "Quantitative research"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${unbounded.variable} ${plex.variable} ${plexMono.variable}`}>
      <head>
        {/* Hold a dark frame on the first home visit until the intro mounts (max 3s), so the page doesn't flash under it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var b=${JSON.stringify(process.env.NEXT_PUBLIC_BASE_PATH ?? "")};var p=location.pathname.replace(/\\/$/,"");if(p!==b)return;if(localStorage.getItem("ha-intro-seen")==="1")return;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;var d=document.documentElement;d.classList.add("intro-pending");setTimeout(function(){d.classList.remove("intro-pending")},3000)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-obsidian"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
