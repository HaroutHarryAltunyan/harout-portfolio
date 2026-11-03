"use client";

import { useState } from "react";
import { Heart, MessageCircle, Repeat2, ShoppingBag, Bell, Home, Search, User } from "lucide-react";
import { Globe } from "@/components/three/lazy";

export function GlobeHero() {
  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div aria-hidden className="absolute inset-[8%] rounded-full" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgb(255 104 30 / 0.18), transparent 70%)" }} />
      <Globe className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      <figcaption className="absolute inset-x-0 -bottom-2 text-center font-mono text-[10.5px] leading-relaxed text-silver">
        Illustrative: Yerevan linked to cities with Armenian communities. Not real user locations or activity.
      </figcaption>
    </figure>
  );
}

const POSTS = [
  { who: "Ani", tag: "Community", text: "Hosting a Sunday supra for new arrivals in Glendale. All welcome.", tone: "#D90012" },
  { who: "Aram", tag: "Reel", text: "Yerevan at night from Cascade. Shot on my phone.", tone: "#0033A0" },
  { who: "Lusine", tag: "Shop", text: "Handmade pomegranate ceramics, shipping worldwide this week.", tone: "#F2A800" },
];

/** Illustrative interface built in code. Names and posts are sample content, not users. */
export function SocialMock() {
  const [liked, setLiked] = useState<number[]>([]);
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[44px] border border-white/15 bg-[#0b0a12] p-3 shadow-[0_40px_120px_-30px_rgb(255_104_30/0.35)]">
      <div className="overflow-hidden rounded-[34px] bg-obsidian">
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <span className="font-display text-lg">HyeLynk</span>
          <span className="flex gap-3 text-silver"><Bell size={18} /><MessageCircle size={18} /></span>
        </div>
        <div className="flex gap-3 overflow-hidden px-5 pb-4">
          {["You", "Ani", "Aram", "Lusine", "Nare"].map((s, i) => (
            <div key={s} className="grid justify-items-center gap-1">
              <span className="grid size-12 place-items-center rounded-full p-[2px]" style={{ background: i ? "linear-gradient(135deg,#D90012,#0033A0,#F2A800)" : "#2a2f3d" }}>
                <span className="grid size-full place-items-center rounded-full bg-obsidian font-display text-xs">{s[0]}</span>
              </span>
              <span className="font-mono text-[9px] text-silver">{s}</span>
            </div>
          ))}
        </div>
        <ul className="grid gap-3 px-3 pb-3">
          {POSTS.map((p, i) => (
            <li key={p.who} className="rounded-2xl border border-line bg-white/[0.02] p-4">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-full font-display text-[11px]" style={{ background: p.tone }}>{p.who[0]}</span>
                <span className="text-sm font-medium">{p.who}</span>
                <span className="ml-auto rounded-full border border-line px-2 py-0.5 font-mono text-[9px] text-silver uppercase">{p.tag}</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-snug text-silver">{p.text}</p>
              <div className="mt-3 flex gap-5 text-silver">
                <button type="button" aria-label={`Like ${p.who}'s post`} aria-pressed={liked.includes(i)} onClick={() => setLiked((l) => (l.includes(i) ? l.filter((x) => x !== i) : [...l, i]))} className={liked.includes(i) ? "text-[#ff4d5e]" : ""}>
                  <Heart size={16} fill={liked.includes(i) ? "currentColor" : "none"} />
                </button>
                <MessageCircle size={16} aria-hidden />
                <Repeat2 size={16} aria-hidden />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-around border-t border-line py-3 text-silver" aria-hidden>
          <Home size={18} className="text-white" /><Search size={18} /><ShoppingBag size={18} /><User size={18} />
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[10px] text-silver">Illustrative interface · sample content</p>
    </div>
  );
}

export function CommerceMock() {
  const items = [
    { name: "Pomegranate ceramic set", seller: "Studio Nur", price: "$64", tone: "#D90012" },
    { name: "Hand-woven carpet runner", seller: "Gyumri Looms", price: "$210", tone: "#0033A0" },
    { name: "Apricot preserves, 3 jars", seller: "Ararat Pantry", price: "$24", tone: "#F2A800" },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((it) => (
        <article key={it.name} className="overflow-hidden rounded-2xl border border-line">
          <div className="grid aspect-[4/3] place-items-center" style={{ background: `radial-gradient(60% 60% at 50% 40%, ${it.tone}55, transparent 70%), #0b0a12` }}>
            <ShoppingBag size={28} className="text-white/70" aria-hidden />
          </div>
          <div className="p-4">
            <p className="font-medium">{it.name}</p>
            <p className="mt-1 text-sm text-silver">{it.seller}</p>
            <p className="mt-3 font-display tabular-nums">{it.price}</p>
          </div>
        </article>
      ))}
      <p className="font-mono text-[10.5px] text-silver sm:col-span-3">Illustrative storefront · sample products and sellers.</p>
    </div>
  );
}

export function CrossPlatform() {
  const surfaces = ["Web app", "iOS app", "Android app", "Storefront", "Admin dashboard"];
  return (
    <div className="relative">
      <svg viewBox="0 0 600 240" className="w-full" aria-hidden>
        {surfaces.map((s, i) => {
          const x = 60 + i * 120;
          return <line key={s} x1={x} y1={60} x2={300} y2={190} stroke={["#D90012", "#0033A0", "#F2A800"][i % 3]} strokeOpacity="0.7" className="flow" />;
        })}
        <rect x="215" y="172" width="170" height="44" rx="12" fill="#0b0a12" stroke="#FF681E" strokeOpacity="0.7" />
        <text x="300" y="199" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="var(--font-plex)">Secure auth · account sync</text>
      </svg>
      <ul className="absolute inset-x-0 top-0 grid grid-cols-5 gap-1 text-center">
        {surfaces.map((s) => (
          <li key={s}>
            <span className="inline-block rounded-xl border border-line bg-obsidian px-1.5 py-2 font-mono text-[9.5px] leading-tight uppercase md:px-3 md:text-[11px]">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
