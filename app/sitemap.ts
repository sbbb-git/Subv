import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { posts } from "@/content/posts";
import { cities } from "@/content/cities";
import { cdsTypes } from "@/content/cds-types";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/accompagnement", priority: 0.95 },
    { path: "/financements", priority: 0.9 },
    { path: "/centre-de-sante", priority: 0.85 },
    { path: "/subvention-teulade", priority: 0.8 },
    { path: "/subvention-teulade/conditions", priority: 0.7 },
    { path: "/subvention-teulade/villes", priority: 0.75 },
    { path: "/article-l162-32", priority: 0.7 },
    { path: "/comparatif-cds-msp", priority: 0.7 },
    { path: "/lexique", priority: 0.65 },
    { path: "/faq", priority: 0.8 },
    { path: "/blog", priority: 0.75 },
    { path: "/contact", priority: 0.9 },
    { path: "/a-propos", priority: 0.6 },
    { path: "/mentions-legales", priority: 0.2 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...cities.map((c) => ({
      url: `${SITE_URL}/subvention-teulade/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...cdsTypes.map((t) => ({
      url: `${SITE_URL}/centre-de-sante/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];
}
