import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Serve images as-is instead of through Vercel's Image Optimization,
    // whose free-tier quota runs out and then breaks every image on the
    // live site. The source photos in src/assets are pre-compressed instead.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
