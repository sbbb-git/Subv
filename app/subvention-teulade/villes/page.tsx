import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { cities } from "@/content/cities";

export const metadata: Metadata = {
  title: "Subvention Teulade par ville et département — toutes nos zones d’intervention",
  description:
    "Carte des villes et départements où nous accompagnons les centres de santé pour la subvention Teulade : Paris, Marseille, Lyon, Toulouse, Nice, Nantes, Lille, Bordeaux et toute la France.",
  alternates: { canonical: "/subvention-teulade/villes" },
};

export default function Page() {
  const byRegion = cities.reduce<Record<string, typeof cities>>((acc, c) => {
    acc[c.region] = acc[c.region] || [];
    acc[c.region].push(c);
    return acc;
  }, {});

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Subvention Teulade", href: "/subvention-teulade" },
              { name: "Toutes les villes" },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Subvention Teulade — toute la France
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Notre cabinet accompagne les centres de santé partout en France
            métropolitaine et ultramarine. Retrouvez les pages dédiées à votre ville et
            à votre CPAM.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {Object.entries(byRegion).map(([region, list]) => (
            <div key={region}>
              <h2 className="text-2xl font-bold text-ink">{region}</h2>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {list.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/subvention-teulade/${c.slug}`}
                    className="rounded-xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 p-4 transition"
                  >
                    <div className="font-semibold text-ink">Teulade {c.name}</div>
                    <div className="text-xs text-ink-mute mt-1">{c.dept} ({c.deptNum}) · {c.cpam}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
