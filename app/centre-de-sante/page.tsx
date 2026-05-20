import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { cdsTypes } from "@/content/cds-types";

export const metadata: Metadata = {
  title: "Centres de santé : typologies, statuts, financements Teulade et ACI",
  description:
    "Tout sur les centres de santé en France : CDS médical, dentaire, infirmier, polyvalent, pluriprofessionnel, municipal, associatif, mutualiste. Financements et subvention Teulade par typologie.",
  alternates: { canonical: "/centre-de-sante" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Centres de santé" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Centres de santé : panorama complet par typologie
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Qu’il soit médical, dentaire, infirmier, polyvalent ou pluriprofessionnel,
            qu’il soit porté par une commune, une association ou une mutuelle, votre
            centre de santé peut bénéficier de la subvention Teulade. Nous avons
            détaillé pour chaque typologie ses spécificités et ses leviers.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {cdsTypes.map((t) => (
            <Link
              key={t.slug}
              href={`/centre-de-sante/${t.slug}`}
              className="rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg p-6 transition group"
            >
              <h2 className="text-xl font-bold text-ink group-hover:text-brand-700">{t.name}</h2>
              <p className="mt-3 text-ink-soft text-[15px]">{t.shortDesc}</p>
              <div className="mt-4 text-xs text-brand-700 font-semibold">
                En savoir plus →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
