import Link from "next/link";
import { SITE_URL } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: `${SITE_URL}${it.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Fil d’Ariane" className="text-sm text-ink-mute">
      <ol className="flex flex-wrap gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {it.href ? (
              <Link href={it.href} className="hover:text-brand-700">{it.name}</Link>
            ) : (
              <span className="text-ink">{it.name}</span>
            )}
            {i < items.length - 1 && <span className="mx-1 text-ink-mute/50">/</span>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </nav>
  );
}
