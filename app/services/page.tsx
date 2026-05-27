import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Nos services pour centres de santé",
  description:
    "Création, recrutement de médecins, conseil en organisation, optimisation de l’activité, comptabilité, dossier ARS, subventions et financements, audit financier, conformité.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <section className="bg-soft border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Services" }]} />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-ink">
            Nos services
          </h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Tous les sujets administratifs et stratégiques d’un centre de
            santé, traités par une équipe spécialisée.
          </p>
          <Link href="/#contact" className="mt-7 inline-flex btn-primary">Contactez-nous</Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl bg-white ring-1 ring-line hover:ring-accent-300 hover:shadow-md transition p-6 block"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent-700 grid place-items-center mb-4 group-hover:bg-accent-600 group-hover:text-white transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z"/></svg>
              </div>
              <h2 className="text-lg font-semibold text-ink group-hover:text-accent-700">{s.name}</h2>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-700">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
