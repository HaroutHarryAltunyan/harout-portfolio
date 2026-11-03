import type { NextConfig } from "next";

// GitHub Pages serves the site from /harout-portfolio. Locally BASE_PATH is empty.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactStrictMode: true,
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
