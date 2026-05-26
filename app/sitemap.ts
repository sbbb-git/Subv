import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { services } from "@/content/services";
import { cdsTypes } from "@/content/types";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/centres-de-sante", priority: 0.85 },
    { path: "/financements", priority: 0.85 },
    { path: "/subvention-teulade", priority: 0.95 },
    { path: "/blog", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/lexique", priority: 0.65 },
    { path: "/a-propos", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/mentions-legales", priority: 0.1 },
  ];
  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
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
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
