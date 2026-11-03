export const SITE_URL = "https://haroutharryaltunyan.github.io/harout-portfolio";

export const person = {
  name: "Harout Altunyan",
  alternateName: "Harry Altunyan",
  givenName: "Haroutyun",
  location: "Los Angeles, California",
  email: "altunyanharoutyunh93@gmail.com",
  headline: "Engineering intelligence. Building what's next.",
  roles: ["Founder.", "Engineer.", "Architect.", "Builder."],
  statement: "I architect intelligent systems and build technology companies.",
  support:
    "From AI-powered healthcare to community platforms, I turn ambitious ideas into working software.",
  positioning: "Building intelligent systems at the intersection of AI, health, and human connection.",
  jobTitle: "Co-Founder & CTO, SAECULA",
  description:
    "Harout Altunyan is a Los Angeles technology founder and full-stack software engineer. Co-Founder & CTO of SAECULA, an AI health intelligence platform, and founder of HyeLynk, a community social platform.",
};

export const links = {
  github: "https://github.com/HaroutHarryAltunyan",
  // From the resume dated 2026-08-07 (Harout_Altunyan_Full_Resume.docx).
  linkedin: "https://www.linkedin.com/in/haroutyun-altunyan-b631292bb/",
  saecula: "https://saecula.ai",
  // The bare hyelynk.ai domain does not serve HTTPS as of 2026-11-02; www does.
  hyelynk: "https://www.hyelynk.ai",
  philly: "https://phillyontheblock.com",
};

export const nav = [
  { label: "Home", href: "/#top", id: "top" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "AI Lab", href: "/#lab", id: "lab" },
  { label: "Expertise", href: "/#expertise", id: "expertise" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

/** Optional form endpoint (for example Formspree or Web3Forms). When unset the form hands off to email. */
export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
