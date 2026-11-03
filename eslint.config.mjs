import next from "eslint-config-next";

const config = [
  ...next,
  { ignores: ["out/**", ".next/**", "legacy/**", "next-env.d.ts"] },
  {
    rules: {
      // Static export: images are pre-optimized WebP served as plain <img>.
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
