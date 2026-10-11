import type { NextConfig } from "next";

// Fully static: `next build` writes plain HTML/CSS/JS to /out, which any static host can serve.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
