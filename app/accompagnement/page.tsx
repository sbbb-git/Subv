import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Accompagnement & consulting pour centres de santé (CDS)",
  description:
    "Cabinet de consulting spécialisé centres de santé : récupération de la subvention Teulade, optimisation ACI/FIR, audit administratif, création de centre, accompagnement CPAM/ARS.",
  alternates: { canonical: "/accompagnement" },
};

const offers = [
  {
    id: "teulade",
    title: "Mission Subvention Teulade",
    pitch: "Notre cœur de métier. Récupération de l’intégralité de la subvention en cours + rattrapage des 3 années non prescrites.",
    bullets: [
      "Audit gratuit des cotisations URSSAF sur 4 exercices",
      "Reconstitution des assiettes éligibles salarié par salarié",
      "Montage du dossier CPAM (formulaire, justificatifs, courrier)",
      "Relances et suivi jusqu’au versement",
      "Reporting mensuel et tableau de bord dédié",
    ],
    badge: "🚀 Mission phare",
  },
  {
    id: "audit",
    title: "Audit financier 360° du CDS",
    pitch: "Cartographie complète des recettes et financements de votre centre de santé : ce que vous touchez, ce que vous oubliez, ce que vous pouvez rattraper.",
    bullets: [
      "Analyse des recettes Assurance Maladie (FSE, tiers payant, ROSP, forfaits)",
      "Diagnostic ACI, FIR, dotations ARS, subventions collectivités",
      "Audit des cotations et codages CCAM / NGAP",
      "Plan d’action chiffré et priorisé",
    ],
  },
  {
    id: "aci",
    title: "Optimisation ACI",
    pitch: "Pilotage des indicateurs de l’Accord Conventionnel Interprofessionnel et négociation annuelle avec la CPAM.",
    bullets: [
      "Cartographie des indicateurs socle et optionnels",
      "Plan d’action pour maximiser les points (1 pt = 7 €)",
      "Préparation de l’assemblée annuelle CPAM",
      "Sécurisation de l’avance de 60 %",
    ],
  },
  {
    id: "creation",
    title: "Création de centre de santé",
    pitch: "De l’étude de faisabilité à l’ouverture conventionnée, on prend tout en charge.",
    bullets: [
      "Étude d’opportunité territoriale (zonage ARS)",
      "Rédaction du projet de santé conforme",
      "Constitution juridique (association, SCIC, SCM…)",
      "Dossier de conventionnement CPAM + déclaration ARS",
      "Plan de financement et recherche d’aides",
    ],
  },
  {
    id: "conformite",
    title: "Mise en conformité & projet de santé",
    pitch: "Renouvellement du projet de santé, préparation aux visites ARS, mises à jour réglementaires.",
    bullets: [
      "Audit conformité réglementaire",
      "Rédaction / mise à jour du projet de santé",
      "Préparation à la visite ARS",
      "Politique RGPD et règlement intérieur",
    ],
  },
  {
    id: "gestion",
    title: "Direction administrative externalisée",
    pitch: "Pour les petits CDS sans direction dédiée : pilotage de gestion à temps partagé.",
    bullets: [
      "Pilotage budgétaire mensuel",
      "Suivi RH, paie et URSSAF",
      "Interlocuteur unique CPAM/ARS/URSSAF",
      "Reporting trimestriel aux administrateurs",
    ],
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Notre accompagnement" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Consulting & accompagnement pour centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Notre cabinet est dédié à <strong>une seule typologie de structure</strong> :
            les centres de santé. Nous mettons cette spécialisation au service de
            votre <strong>équilibre financier</strong>, à commencer par la subvention
            Teulade — trop souvent oubliée — puis par l’ensemble des financements
            CPAM, URSSAF, ACI, FIR et ARS auxquels vous avez droit.
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
            subtitle="Toutes nos missions sont rémunérées au résultat ou en honoraires fixes transparents — jamais au pourcentage caché."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {offers.map((o) => (
              <div id={o.id} key={o.id} className="rounded-2xl bg-white ring-1 ring-brand-100 p-7 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-ink">{o.title}</h3>
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
            eyebrow="Comment on travaille"
            title="Une mission Teulade, 4 jalons"
          />
          <div className="mt-12 space-y-5">
            {[
              ["J+0", "Premier échange (30 min) — cadrage du périmètre, transmission sécurisée des DSN/URSSAF."],
              ["J+2", "Estimation chiffrée du montant Teulade récupérable (en cours + rattrapage)."],
              ["J+10", "Dépôt du dossier complet à la CPAM, avec courrier d’accompagnement juridique."],
              ["J+60 à 270", "Relances, recours gracieux si nécessaire, suivi jusqu’au virement effectif."],
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
