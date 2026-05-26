import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Financements pour centres de santé : ACI, FIR, ARS, CPAM, Teulade",
  description:
    "Panorama des financements mobilisables par un centre de santé : ACI, FIR, dotations ARS, Forfait Structure, ROSP, aides à l’installation, dispositifs CPAM (subvention Teulade), aides collectivités.",
  alternates: { canonical: "/financements" },
};

const items = [
  { id: "remunerations", name: "Rémunérations conventionnelles", base: "Accord national des centres de santé", desc: "Actes remboursables, tiers payant, forfaits divers : la recette de base de tout centre de santé conventionné." },
  { id: "aci", name: "Accord Conventionnel Interprofessionnel (ACI)", base: "Arrêté 21 août 2019", desc: "Rémunération forfaitaire pour les structures pluriprofessionnelles, calculée sur indicateurs socle et optionnels." },
  { id: "fir", name: "Fonds d’Intervention Régional (FIR)", base: "Géré par l’ARS", desc: "Cofinancement de missions de prévention, coordination territoriale, accès aux soins, projets innovants." },
  { id: "teulade", name: "Dispositif L162-32 (subvention Teulade)", base: "Article L162-32 CSS", desc: "Dispositif ancien prévoyant la prise en charge par l’Assurance Maladie d’une partie des charges sociales des centres de santé conventionnés. Voir la page dédiée." },
  { id: "forfait-structure", name: "Forfait Structure", base: "Convention médicale", desc: "Forfait versé aux médecins pour la modernisation de leur outil de travail." },
  { id: "rosp", name: "ROSP", base: "Convention médicale", desc: "Rémunération sur Objectifs de Santé Publique, sur indicateurs de qualité." },
  { id: "installation", name: "Aides à l’installation (CAIM, COSCOM, COTRAM, CSTM)", base: "Convention médicale", desc: "Contrats d’aide à l’installation et à la consultation en zones sous-dotées." },
  { id: "collectivites", name: "Aides des collectivités", base: "Régions, départements, EPCI, communes", desc: "Cofinancement d’investissements, locaux, équipements, postes de coordination." },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Financements" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Les financements d’un centre de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Une dizaine de dispositifs cumulables pour structurer durablement le
            modèle économique d’un centre de santé.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {items.map((it) => (
            <article key={it.id} id={it.id} className="rounded-2xl bg-white ring-1 ring-brand-100 p-7 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-3 justify-between">
                <h2 className="text-2xl font-bold text-ink">{it.name}</h2>
                <span className="text-xs font-semibold rounded-full bg-brand-100 text-brand-800 px-2.5 py-1">{it.base}</span>
              </div>
              <p className="mt-3 text-ink-soft leading-relaxed">{it.desc}</p>
              {it.id === "teulade" && (
                <Link href="/subvention-teulade" className="mt-3 inline-block text-brand-700 hover:text-brand-900 font-semibold text-sm">
                  Voir la page dédiée subvention Teulade →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Parlons de votre situation
          </h2>
          <Link href="/contact" className="mt-8 inline-block rounded-lg bg-white text-brand-700 hover:bg-brand-50 px-6 py-3 font-semibold shadow">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
