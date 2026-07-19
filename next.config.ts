import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export for Netlify (client-side site, no SSR features). Produces out/.
  output: "export",
  // Served through nginx at dev-<tenant>.jam-bot.com, which Next 15 treats as a
  // cross-origin dev request and blocks (fonts, HMR, client chunks) — that breaks
  // client hydration so motion `whileInView` reveals never fire and the page renders
  // "empty on scroll". Allow the dev subdomain(s) so dev resources load. (2026-07-19)
  allowedDevOrigins: ["dev-phatty.jam-bot.com", "*.jam-bot.com"],
  images: {
    // Static export has no on-demand image optimizer — serve images as-is.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
