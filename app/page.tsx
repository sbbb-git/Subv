import Link from "next/link";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subvention Teulade pour centres de santé (CDS) — Récupérez 11,5 % des charges patronales",
  description:
    "Cabinet de conseil expert de la subvention Teulade (art. L162-32 CSS). Nous récupérons pour votre centre de santé 11,5 % des cotisations patronales versées à l’URSSAF, en cours et sur les années antérieures non prescrites.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Qu’est-ce que la subvention Teulade pour un centre de santé ?",
    a: "La subvention Teulade, prévue à l’article L162-32 du code de la sécurité sociale, est un remboursement par la CPAM de 11,5 % de l’assiette des cotisations patronales (maladie, maternité, invalidité, décès) versées à l’URSSAF pour les professionnels de santé salariés d’un centre de santé qui réalisent des actes remboursés par l’Assurance Maladie.",
  },
  {
    q: "Quels centres de santé sont éligibles à la subvention Teulade ?",
    a: "Tous les centres de santé conventionnés (médicaux, dentaires, infirmiers et polyvalents) employant des praticiens et auxiliaires médicaux salariés qui réalisent des actes remboursables sont éligibles. La subvention ne couvre pas les personnels affectés à des missions déjà financées par ailleurs (ACI, FIR, prévention dédiée).",
  },
  {
    q: "Combien représente concrètement la subvention Teulade ?",
    a: "Pour un centre de santé employant 8 professionnels de santé salariés à temps plein, la subvention Teulade représente généralement entre 35 000 € et 90 000 € par an, selon les salaires, les statuts et la part d’activité conventionnée. Sur 3 années non prescrites, le rattrapage peut dépasser 200 000 €.",
  },
  {
    q: "Pourquoi un quart des CDS ne perçoivent pas cette subvention ?",
    a: "Le rapport IGAS 2025 indique qu’environ 25 % des centres de santé déclarent ne pas avoir perçu la subvention Teulade en 2022. En cause : un formulaire CPAM peu connu, une procédure différente selon les caisses, l’absence d’interlocuteur dédié et un suivi URSSAF complexe. C’est précisément la mission de notre cabinet.",
  },
  {
    q: "Pouvez-vous récupérer la subvention sur les années passées ?",
    a: "Oui. La prescription des créances vis-à-vis de la CPAM permet généralement de réclamer les exercices N-1, N-2 et N-3 non versés, sous réserve de produire les attestations URSSAF correspondantes. Nous reconstituons les dossiers manquants et obtenons des rattrapages significatifs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-100 blur-3xl opacity-60 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-xs font-semibold">
              ⚖️ Article L162-32 du code de la sécurité sociale
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
              Subvention <span className="text-brand-600">Teulade</span> :<br className="hidden md:block" />
              récupérez 11,5 % des charges patronales de votre centre de santé.
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">
              Cabinet de conseil spécialisé centres de santé (CDS). Nous identifions,
              constituons et défendons votre dossier auprès de la CPAM pour récupérer
              la subvention Teulade <strong>en cours d’année</strong> et <strong>sur les
              exercices non prescrits</strong>. Sans avance de frais, rémunération
              uniquement au succès.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 shadow"
              >
                Estimer mes droits en 48h
              </Link>
              <Link
                href="/subvention-teulade"
                className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-6 py-3"
              >
                Comprendre la subvention Teulade
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              {[
                ["11,5 %", "des cotisations patronales remboursées"],
                ["3 ans", "de rattrapage possible"],
                ["100 %", "succès — sans avance de frais"],
              ].map(([n, l]) => (
                <div key={n} className="rounded-xl bg-white ring-1 ring-brand-100 p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-brand-700">{n}</div>
                  <div className="text-xs text-ink-mute mt-1 leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white ring-1 ring-brand-100 shadow-xl p-7">
              <div className="absolute -top-4 left-7 inline-flex items-center rounded-full bg-brand-600 text-white text-xs font-semibold px-3 py-1">
                Diagnostic gratuit
              </div>
              <h2 className="text-xl font-bold text-ink">Combien votre CDS peut récupérer ?</h2>
              <p className="mt-2 text-sm text-ink-soft">
                Réponse chiffrée sous 48h ouvrées, sans engagement.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Audit gratuit des cotisations URSSAF des 3 derniers exercices",
                  "Estimation du montant Teulade récupérable",
                  "Identification des autres financements oubliés (ACI, FIR, ARS, FSS)",
                  "Modèle de demande CPAM + relances jusqu’à versement",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-ink-soft">
                    <span className="text-brand-600 font-bold">✓</span> {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 block text-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3"
              >
                Demander mon diagnostic
              </Link>
              <p className="mt-3 text-[11px] text-ink-mute text-center">
                Cabinet indépendant — sans lien officiel avec la CPAM/URSSAF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALERT BAR */}
      <section className="bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm flex flex-wrap items-center gap-x-4 gap-y-2 justify-center text-center">
          <span className="font-semibold text-brand-200">📊 Rapport IGAS 2025 :</span>
          <span className="text-white/85">
            25 % des centres de santé n’ont pas perçu la subvention Teulade en 2022.
          </span>
          <Link href="/blog/igas-subvention-teulade-non-versee" className="underline underline-offset-2 hover:text-brand-200">
            Lire notre analyse →
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Le constat"
            title="Une subvention de droit, trop souvent oubliée"
            subtitle="Depuis 1993, l’article L162-32 du code de la sécurité sociale impose à l’Assurance Maladie de rembourser 11,5 % des charges patronales des centres de santé. En pratique, des dizaines de milliers d’euros sont laissés chaque année à la CPAM."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Un formulaire CPAM méconnu",
                d: "Chaque CPAM utilise son propre imprimé. Beaucoup de directeurs de CDS ignorent l’existence du formulaire ou l’ont rempli avec une assiette erronée.",
              },
              {
                t: "Une articulation URSSAF complexe",
                d: "Le calcul s’appuie sur l’assiette des cotisations maladie/maternité/invalidité/décès, attestée par l’URSSAF. La moindre erreur de DSN décale la subvention.",
              },
              {
                t: "Pas d’interlocuteur unique",
                d: "La subvention Teulade tombe entre les services CPAM, URSSAF et la direction du CDS. Sans pilotage dédié, elle n’est ni demandée, ni relancée, ni rattrapée.",
              },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-white ring-1 ring-brand-100 p-7 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 grid place-items-center font-bold">!</div>
                <h3 className="mt-5 text-lg font-bold text-ink">{b.t}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-20 bg-brand-50/60 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre méthode"
            title="4 étapes pour récupérer la subvention Teulade"
            subtitle="Un process éprouvé sur tous types de centres de santé : médicaux, dentaires, infirmiers, polyvalents, municipaux ou associatifs."
          />
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                t: "Audit gratuit",
                d: "Analyse de vos bulletins de paie, DSN et attestations URSSAF. Détection des exercices non versés.",
              },
              {
                n: "02",
                t: "Calcul de l’assiette",
                d: "Reconstitution précise de l’assiette des cotisations patronales éligibles, professionnel par professionnel.",
              },
              {
                n: "03",
                t: "Montage CPAM",
                d: "Préparation du dossier, formulaire adapté à votre CPAM, justificatifs URSSAF et courrier d’accompagnement.",
              },
              {
                n: "04",
                t: "Suivi & relances",
                d: "Relances CPAM jusqu’au versement effectif sur le compte du centre de santé. Reporting mensuel.",
              },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl bg-white ring-1 ring-brand-100 p-6 shadow-sm">
                <div className="text-3xl font-extrabold text-brand-200">{s.n}</div>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="/accompagnement"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3"
            >
              Découvrir notre accompagnement complet
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos missions"
            title="Au-delà de la subvention Teulade"
            subtitle="Nous accompagnons les centres de santé sur l’ensemble de leurs financements publics et conventionnels."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Subvention Teulade", "Récupération de 11,5 % des charges patronales URSSAF, en cours et rattrapages N-3.", "/subvention-teulade"],
              ["Accord Conventionnel Interprofessionnel (ACI)", "Optimisation des indicateurs ACI, montage du dossier annuel et négociation avec la CPAM.", "/autres-financements#aci"],
              ["FIR & ARS", "Identification et obtention des financements ARS, FIR, dotations régionales pour CDS.", "/autres-financements#fir"],
              ["Forfait Structure", "Audit du forfait structure des médecins salariés et optimisation des indicateurs.", "/autres-financements#forfait-structure"],
              ["Création de centre de santé", "Accompagnement à la création, statuts, projet de santé, conventionnement CPAM.", "/accompagnement#creation"],
              ["Audit administratif & financier", "Diagnostic 360° de votre CDS : recettes, charges, cotations, financements oubliés.", "/accompagnement#audit"],
            ].map(([t, d, h]) => (
              <Link
                key={t}
                href={h}
                className="group rounded-2xl bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-lg transition p-7 block"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-600 text-white grid place-items-center font-bold">€</div>
                <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-brand-700">{t}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{d}</p>
                <span className="mt-4 inline-block text-brand-700 font-semibold text-sm">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-300 mb-3">
              Pourquoi nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Le seul cabinet 100 % dédié à la subvention Teulade.
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Nos consultants connaissent par cœur l’article L162-32 du code de la
              sécurité sociale, le décret du 14 décembre 1992, la doctrine CPAM et les
              pratiques URSSAF. Nous travaillons en direct avec les services CPAM des
              principales caisses françaises.
            </p>
            <ul className="mt-6 space-y-3 text-white/90 text-[15px]">
              {[
                "Expertise exclusive des centres de santé conventionnés",
                "Rémunération au résultat — pas de coût si pas de subvention",
                "Confidentialité totale (charte RGPD et engagement de discrétion)",
                "Reporting mensuel et tableau de bord dédié",
              ].map((t) => (
                <li key={t} className="flex gap-2"><span className="text-brand-300">✓</span> {t}</li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              ["+ 200 000 €", "Rattrapage moyen pour un CDS de 10 ETP soignants"],
              ["48h", "Délai de réponse pour le diagnostic gratuit"],
              ["3 ans", "Profondeur de rattrapage CPAM"],
              ["0 €", "Honoraires si nous n’obtenons rien"],
            ].map(([n, l]) => (
              <div key={n} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-3xl font-extrabold text-brand-300">{n}</div>
                <div className="mt-2 text-white/80 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Tout savoir sur la subvention Teulade"
            subtitle="Les questions les plus posées par les directeurs et gestionnaires de centres de santé."
          />
          <div className="mt-10">
            <Faq items={homeFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-brand-700 hover:text-brand-900 font-semibold">
              Voir toutes les questions →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
