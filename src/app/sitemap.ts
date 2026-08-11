import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "/what-we-build", priority: 0.9 },
    { path: "/capabilities", priority: 0.8 },
    { path: "/process", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
