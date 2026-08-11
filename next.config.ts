import type { NextConfig } from "next";

const r2Host =
  process.env.NEXT_PUBLIC_IMAGE_BASE?.replace(/^https?:\/\//, "") ??
  "pub-b09a677af6a84e489708bae5457ea79b.r2.dev";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: r2Host, pathname: "/**" }],
    // The R2 sources top out at 1584px wide, so asking for anything larger just
    // makes the optimizer re-encode at the source width under a different key.
    deviceSizes: [420, 640, 828, 1080, 1280, 1584],
    imageSizes: [96, 160, 256, 384, 512, 768],
    // Next 16 only honours qualities listed here; anything else falls back to 75.
    qualities: [70, 75, 80, 82],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
