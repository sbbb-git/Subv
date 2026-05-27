import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { cdsTypes } from "@/content/types";

export const metadata: Metadata = {
  title: "Centres de santé : typologies et accompagnement",
  description:
    "Tous les types de centres de santé : médical, dentaire, infirmier, polyvalent, pluriprofessionnel, municipal, associatif, mutualiste. Accompagnement Opti-CDS.",
  alternates: { canonical: "/centres-de-sante" },
  keywords: [
    "centre de santé médical",
    "centre de santé dentaire",
    "centre de santé infirmier",
    "centre de santé polyvalent",
    "centre de santé pluriprofessionnel",
    "centre municipal de santé",
    "cms centre santé",
    "centre de santé associatif",
    "centre de santé mutualiste",
    "typologie cds",
  ],
};

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Centres de santé" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Typologies</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            Tous les <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">centres de santé</span>.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Médical, dentaire, infirmier, polyvalent — associatif, mutualiste,
            municipal. Chaque typologie a ses spécificités et ses financements.
          </p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cdsTypes.map((t) => (
            <Link
              key={t.slug}
              href={`/centres-de-sante/${t.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-md transition p-6 block"
            >
              <h2 className="text-lg font-bold text-ink group-hover:text-accent-700">{t.name}</h2>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{t.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-700">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
