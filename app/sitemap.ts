import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/content/services";
import { cdsTypes } from "@/content/types";
import { publishedPosts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/subvention-teulade", priority: 0.95, freq: "monthly" },
    { path: "/financements", priority: 0.9, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/centres-de-sante", priority: 0.85, freq: "monthly" },
    { path: "/ressources", priority: 0.8, freq: "weekly" },
    { path: "/faq", priority: 0.75, freq: "monthly" },
    { path: "/lexique", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.9, freq: "yearly" },
    { path: "/mentions-legales", priority: 0.1, freq: "yearly" },
  ];
  return [
    ...staticRoutes.map(({ path, priority, freq }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...cdsTypes.map((t) => ({
      url: `${SITE_URL}/centres-de-sante/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...publishedPosts().map((p) => ({
      url: `${SITE_URL}/ressources/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
