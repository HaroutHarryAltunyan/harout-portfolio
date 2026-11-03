import { Download } from "lucide-react";
import { RESUME_FILE } from "@/content/site";
import { asset } from "@/lib/asset";

const STYLES = {
  solid: "bg-white text-obsidian hover:scale-[1.03]",
  outline: "border border-white/25 hover:border-white",
} as const;

/** Downloads the PDF resume. */
export function ResumeButton({ variant = "outline", className = "", label = "Download resume" }: { variant?: keyof typeof STYLES; className?: string; label?: string }) {
  return (
    <a
      href={asset(RESUME_FILE)}
      download="Harout_Altunyan_Resume.pdf"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-all ${STYLES[variant]} ${className}`}
    >
      <Download size={14} aria-hidden /> {label}
      <span className="sr-only"> (PDF, 2 pages)</span>
    </a>
  );
}
