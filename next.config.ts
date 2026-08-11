import type { NextConfig } from "next";

const r2Host =
  process.env.NEXT_PUBLIC_IMAGE_BASE?.replace(/^https?:\/\//, "") ??
  "pub-b09a677af6a84e489708bae5457ea79b.r2.dev";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: r2Host, pathname: "/**" }],
    // R2 originals are 600KB–1MB; these are the widths we actually render at.
    deviceSizes: [420, 640, 828, 1080, 1280, 1600, 1920, 2560],
    imageSizes: [96, 160, 256, 384, 512, 768],
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
