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
  { id: "aci", name: "Accord Conventionnel Interprofessionnel", base: "ACI · Arrêté 21 août 2019", desc: "Rémunération forfaitaire pour les structures pluriprofessionnelles, calculée sur indicateurs socle et optionnels." },
  { id: "fir", name: "Fonds d’Intervention Régional", base: "FIR · Géré par l’ARS", desc: "Cofinancement de missions de prévention, coordination territoriale, accès aux soins, projets innovants." },
  { id: "teulade", name: "Dispositif Teulade", base: "Article L162-32 CSS", desc: "Dispositif ancien prévoyant la prise en charge par l’Assurance Maladie d’une partie des charges sociales des centres de santé conventionnés.", link: "/subvention-teulade" },
  { id: "forfait-structure", name: "Forfait Structure", base: "Convention médicale", desc: "Forfait versé aux médecins pour la modernisation de leur outil de travail." },
  { id: "rosp", name: "ROSP", base: "Convention médicale", desc: "Rémunération sur Objectifs de Santé Publique, sur indicateurs de qualité." },
  { id: "installation", name: "Aides à l’installation", base: "CAIM, COSCOM, COTRAM, CSTM", desc: "Contrats d’aide à l’installation et à la consultation en zones sous-dotées." },
  { id: "collectivites", name: "Aides des collectivités", base: "Régions, départements, EPCI, communes", desc: "Cofinancement d’investissements, locaux, équipements, postes de coordination." },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pb-28">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Financements" }]} />
          <div className="mt-12 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9">
              <p className="eyebrow">Vue d’ensemble</p>
              <h1 className="mt-6 serif text-5xl md:text-7xl text-ink tracking-tightest font-light leading-[1.02]">
                Les financements<br />d’un centre de santé.
              </h1>
              <p className="mt-10 text-ink-soft text-lg max-w-2xl leading-[1.65]">
                Une dizaine de dispositifs cumulables pour structurer
                durablement le modèle économique d’un centre de santé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <ul className="divide-y divide-line border-y border-line">
            {items.map((it, i) => (
              <li key={it.id} id={it.id} className="grid lg:grid-cols-12 gap-6 py-10">
                <div className="lg:col-span-1 text-ink-mute font-mono text-sm pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="lg:col-span-4">
                  <h2 className="serif text-2xl md:text-3xl text-ink font-light tracking-tight">
                    {it.name}
                  </h2>
                  <p className="mt-2 text-[12px] tracking-wide uppercase text-ink-mute">{it.base}</p>
                </div>
                <div className="lg:col-span-7 text-ink-soft text-[16px] leading-[1.7]">
                  <p>{it.desc}</p>
                  {it.link && (
                    <Link href={it.link} className="mt-3 inline-block text-accent-700 hover:text-accent-900 underline decoration-accent-300 underline-offset-4">
                      Voir la page dédiée →
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="serif text-4xl md:text-5xl text-bg font-light tracking-tight leading-[1.1]">
              Parlons de votre situation.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <Link href="/contact" className="inline-block text-[14px] tracking-wide uppercase font-medium border border-bg hover:bg-bg hover:text-ink text-bg transition px-6 py-3.5">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
