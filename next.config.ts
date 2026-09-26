import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone for the dev environment
  output: process.env.NETLIFY_STATIC_EXPORT === "1" ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
  // Allow clean static HTML output
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
