import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Nos services — Cabinet de conseil pour centres de santé",
  description:
    "9 services dédiés aux centres de santé : création, développement, comptabilité, dossier ARS, conventionnement CPAM, conformité, audit financier, mobilisation des subventions.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Nos services" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Nos services pour centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Un cabinet, neuf expertises couvrant tout le cycle de vie d’un CDS —
            de l’étude d’opportunité jusqu’au pilotage financier au quotidien.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg p-6 transition"
            >
              <h2 className="text-xl font-bold text-ink group-hover:text-brand-700">{s.name}</h2>
              <p className="mt-3 text-ink-soft">{s.short}</p>
              <span className="mt-4 inline-block text-brand-700 font-semibold text-sm">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
