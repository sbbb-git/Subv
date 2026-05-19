import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/subvention-teulade",
    "/subvention-teulade/conditions",
    "/subvention-teulade/calcul",
    "/subvention-teulade/dossier-cpam",
    "/accompagnement",
    "/autres-financements",
    "/faq",
    "/blog",
    "/simulateur",
    "/contact",
    "/mentions-legales",
  ];
  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
