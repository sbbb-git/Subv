import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Accompagnement & consulting pour centres de santé",
  description:
    "SubventionsCDS accompagne les centres de santé sur l’ensemble de leur cycle de vie : audit financier, mobilisation des financements, création, mise en conformité, direction administrative.",
  alternates: { canonical: "/accompagnement" },
};

const offers = [
  {
    id: "audit",
    title: "Audit financier 360°",
    pitch: "Cartographie complète des recettes et financements de votre centre de santé.",
    bullets: [
      "Diagnostic confidentiel livré sous 48h",
      "Identification des dispositifs non mobilisés",
      "Estimation chiffrée du potentiel récupérable",
      "Plan d’action priorisé",
    ],
    badge: "🚀 Point d’entrée",
  },
  {
    id: "financements",
    title: "Mobilisation des financements",
    pitch: "Mise en œuvre opérationnelle des dispositifs identifiés : préparation des dossiers, dépôt et suivi auprès des organismes.",
    bullets: [
      "Préparation des dossiers CPAM, ARS et URSSAF",
      "Suivi des relances et recours",
      "Reporting mensuel et tableau de bord",
      "Interlocuteur unique pour vos démarches",
    ],
  },
  {
    id: "aci",
    title: "Optimisation ACI",
    pitch: "Pilotage des indicateurs de l’Accord Conventionnel Interprofessionnel et négociation annuelle avec la CPAM.",
    bullets: [
      "Cartographie des indicateurs socle et optionnels",
      "Recueil et fiabilisation des données",
      "Préparation de l’assemblée annuelle CPAM",
      "Sécurisation de l’avance",
    ],
  },
  {
    id: "creation",
    title: "Création de centre de santé",
    pitch: "De l’étude de faisabilité à l’ouverture conventionnée.",
    bullets: [
      "Étude d’opportunité territoriale (zonage ARS)",
      "Rédaction du projet de santé",
      "Constitution juridique (association, SCIC, SCM…)",
      "Dossier de conventionnement CPAM + déclaration ARS",
      "Plan de financement et recherche d’aides",
    ],
  },
  {
    id: "conformite",
    title: "Mise en conformité",
    pitch: "Renouvellement du projet de santé, préparation aux visites ARS, mises à jour réglementaires.",
    bullets: [
      "Audit de conformité réglementaire",
      "Rédaction / mise à jour du projet de santé",
      "Préparation à la visite ARS",
      "Politique RGPD et règlement intérieur",
    ],
  },
  {
    id: "gestion",
    title: "Direction administrative externalisée",
    pitch: "Pour les CDS sans direction dédiée : pilotage de gestion à temps partagé.",
    bullets: [
      "Pilotage budgétaire mensuel",
      "Suivi RH, paie et URSSAF",
      "Interlocuteur unique CPAM / ARS / URSSAF",
      "Reporting trimestriel aux administrateurs",
    ],
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Accompagnement" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Consulting & accompagnement pour centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Notre cabinet est dédié à une seule typologie de structure : les
            centres de santé. Nous mettons cette spécialisation au service de
            l’<strong>équilibre financier</strong> de votre CDS et de la{" "}
            <strong>sécurisation de l’ensemble de vos financements</strong>.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
              Diagnostic gratuit
            </Link>
            <Link href="#offres" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Voir nos offres
            </Link>
          </div>
        </div>
      </section>

      <section id="offres" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos offres"
            title="6 missions sur-mesure"
            subtitle="Honoraires transparents — forfait ou résultat — toujours contractualisés avant le démarrage."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {offers.map((o) => (
              <div id={o.id} key={o.id} className="rounded-2xl bg-white ring-1 ring-brand-100 p-7 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold text-ink">{o.title}</h2>
                  {o.badge && (
                    <span className="text-xs font-semibold rounded-full bg-brand-100 text-brand-800 px-2.5 py-1">
                      {o.badge}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-ink-soft">{o.pitch}</p>
                <ul className="mt-5 space-y-2">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[15px] text-ink-soft">
                      <span className="text-brand-600">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Un parcours simple, des résultats mesurables"
          />
          <div className="mt-12 space-y-5">
            {[
              ["J+0", "Premier échange (30 min) — cadrage du périmètre, transmission sécurisée des éléments."],
              ["J+2", "Audit confidentiel et estimation chiffrée du potentiel."],
              ["J+10", "Plan d’action priorisé et contractualisation de la mission."],
              ["J+30 à J+360", "Mise en œuvre, suivi et reporting jusqu’à aboutissement."],
            ].map(([j, t]) => (
              <div key={j} className="flex gap-5 items-start rounded-xl bg-white ring-1 ring-brand-100 p-5">
                <div className="shrink-0 w-16 text-brand-700 font-bold">{j}</div>
                <div className="text-ink-soft">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
