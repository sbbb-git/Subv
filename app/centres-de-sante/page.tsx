import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { cdsTypes } from "@/content/types";

export const metadata: Metadata = {
  title: "Centres de santé : typologies, statuts, accompagnement",
  description:
    "Panorama des centres de santé : CDS médical, dentaire, infirmier, polyvalent, pluriprofessionnel, municipal, associatif, mutualiste. Accompagnement spécifique pour chaque typologie.",
  alternates: { canonical: "/centres-de-sante" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Centres de santé" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Toutes les typologies de centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            De la maison médicale au centre dentaire en passant par le CMS et la
            structure pluriprofessionnelle, chaque typologie de CDS a ses
            spécificités. Nous les connaissons toutes.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {cdsTypes.map((t) => (
            <Link
              key={t.slug}
              href={`/centres-de-sante/${t.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg p-6 transition"
            >
              <h2 className="text-xl font-bold text-ink group-hover:text-brand-700">{t.name}</h2>
              <p className="mt-3 text-ink-soft">{t.short}</p>
              <span className="mt-4 inline-block text-brand-700 font-semibold text-sm">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
