"use client";

import dynamic from "next/dynamic";

const Glow = ({ tone = "blue" }: { tone?: "blue" | "ember" }) => (
  <div
    aria-hidden
    className="absolute inset-0 animate-pulse"
    style={{
      background:
        tone === "blue"
          ? "radial-gradient(40% 40% at 50% 50%, rgb(0 123 255 / 0.18), transparent 70%)"
          : "radial-gradient(40% 40% at 50% 50%, rgb(255 104 30 / 0.16), transparent 70%)",
    }}
  />
);

/** WebGL scenes load after first paint and never during server rendering. */
export const NeuralField = dynamic(() => import("./NeuralField"), { ssr: false, loading: () => <Glow /> });
export const TwinScene = dynamic(() => import("./TwinScene"), { ssr: false, loading: () => <Glow /> });
export const Globe = dynamic(() => import("./Globe"), { ssr: false, loading: () => <Glow tone="ember" /> });
