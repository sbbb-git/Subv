import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Subvention Teulade : définition, calcul, conditions et démarches CPAM",
  description:
    "Tout savoir sur la subvention Teulade (article L162-32 du code de la sécurité sociale) : définition, 11,5 % de remboursement des charges patronales, conditions d’éligibilité des centres de santé, calcul de l’assiette URSSAF et procédure auprès de la CPAM.",
  alternates: { canonical: "/subvention-teulade" },
};

const faqs = [
  {
    q: "À quoi correspond le taux de 11,5 % de la subvention Teulade ?",
    a: "Il s’agit du taux de remboursement appliqué par la CPAM à l’assiette des cotisations patronales d’assurance maladie, maternité, invalidité et décès versées à l’URSSAF pour les praticiens et auxiliaires médicaux salariés du centre de santé.",
  },
  {
    q: "Quels professionnels du CDS sont concernés par la subvention Teulade ?",
    a: "Les médecins généralistes, médecins spécialistes, chirurgiens-dentistes, sages-femmes, infirmiers, masseurs-kinésithérapeutes, orthophonistes, orthoptistes et autres auxiliaires médicaux salariés du centre de santé, dès lors qu’ils réalisent des actes remboursables par l’Assurance Maladie.",
  },
  {
    q: "La subvention Teulade est-elle cumulable avec l’ACI ?",
    a: "Oui. La subvention Teulade et la rémunération de l’ACI (Accord Conventionnel Interprofessionnel) sont indépendantes et cumulables. Attention toutefois : un salarié dont la rémunération est intégralement financée par l’ACI ne peut pas être inclus dans l’assiette Teulade pour la même mission.",
  },
  {
    q: "Quels documents fournir à la CPAM pour obtenir la subvention Teulade ?",
    a: "Le formulaire de demande propre à votre CPAM, l’attestation URSSAF de paiement des cotisations sociales, le détail des assiettes par salarié, ainsi qu’une attestation sur l’honneur précisant que les personnels concernés ne sont pas déjà financés via d’autres dispositifs.",
  },
  {
    q: "Quel est le délai de versement de la subvention Teulade par la CPAM ?",
    a: "En pratique, entre 2 et 9 mois selon les caisses, à compter de la réception du dossier complet. Les rattrapages sur les exercices antérieurs nécessitent généralement un délai supplémentaire de traitement.",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "La subvention Teulade" },
            ]}
          />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            La subvention Teulade pour les centres de santé
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            La subvention Teulade est un <strong>droit prévu à l’article L162-32 du
            code de la sécurité sociale</strong> qui oblige les caisses primaires
            d’assurance maladie (CPAM) à rembourser aux centres de santé{" "}
            <strong>11,5 % des cotisations patronales</strong> d’assurance maladie,
            maternité, invalidité et décès versées pour leurs praticiens et auxiliaires
            médicaux salariés.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3">
              Estimer mon montant Teulade
            </Link>
            <Link href="/simulateur" className="rounded-lg ring-1 ring-brand-200 hover:bg-brand-50 text-ink font-semibold px-5 py-3">
              Utiliser le simulateur
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-content">
        <h2>Origine : pourquoi parle-t-on de subvention « Teulade » ?</h2>
        <p>
          La subvention tire son nom de <strong>René Teulade</strong>, ministre des
          Affaires sociales et de l’Intégration, signataire du{" "}
          <strong>décret du 14 décembre 1992</strong> qui a fixé les modalités du
          versement par les caisses primaires d’assurance maladie aux centres de
          santé. Le dispositif a depuis été codifié à l’article L162-32 du code de la
          sécurité sociale.
        </p>
        <p>
          Son objectif est simple : <strong>compenser une partie du coût du salariat</strong>{" "}
          des professionnels de santé exerçant en centre de santé, afin de maintenir
          la viabilité économique d’un modèle qui repose, contrairement à l’exercice
          libéral, sur la prise en charge intégrale des charges patronales par la
          structure.
        </p>

        <h2>Définition : que rembourse exactement la subvention Teulade ?</h2>
        <p>
          La subvention Teulade rembourse <strong>11,5 % de l’assiette des cotisations
          patronales</strong> d’assurance maladie, maternité, invalidité et décès
          dues à l’URSSAF pour les praticiens et auxiliaires médicaux salariés. Le
          calcul ne porte donc <em>pas</em> sur les cotisations versées mais sur leur{" "}
          <em>assiette</em> (la base de calcul, généralement le salaire brut).
        </p>

        <table>
          <thead>
            <tr><th>Élément</th><th>Détail</th></tr>
          </thead>
          <tbody>
            <tr><td>Base légale</td><td>Article L162-32 du code de la sécurité sociale</td></tr>
            <tr><td>Décret d’origine</td><td>Décret n° 92-1257 du 14 décembre 1992</td></tr>
            <tr><td>Taux</td><td>11,5 % de l’assiette des cotisations patronales</td></tr>
            <tr><td>Cotisations concernées</td><td>Maladie, maternité, invalidité, décès</td></tr>
            <tr><td>Personnels éligibles</td><td>Praticiens et auxiliaires médicaux salariés du CDS</td></tr>
            <tr><td>Payeur</td><td>CPAM du département du centre de santé</td></tr>
            <tr><td>Justificatif clé</td><td>Attestation URSSAF de paiement des cotisations</td></tr>
            <tr><td>Périodicité</td><td>Mensuelle, trimestrielle ou annuelle</td></tr>
          </tbody>
        </table>

        <h2>Qui peut bénéficier de la subvention Teulade ?</h2>
        <p>
          Tous les <strong>centres de santé conventionnés</strong> au sens de
          l’article L6323-1 du code de la santé publique :
        </p>
        <ul>
          <li>Centres de santé <strong>médicaux</strong> (généralistes et spécialistes)</li>
          <li>Centres de santé <strong>dentaires</strong></li>
          <li>Centres de santé <strong>infirmiers</strong></li>
          <li>Centres de santé <strong>polyvalents</strong> (médico-dentaires, médico-infirmiers…)</li>
          <li>Centres de santé <strong>pluriprofessionnels</strong></li>
        </ul>
        <p>
          Quel que soit leur statut juridique : associations loi 1901, mutuelles,
          collectivités territoriales (centres municipaux de santé), fondations,
          établissements publics, SCIC ou sociétés coopératives.
        </p>

        <h2>Conditions d’éligibilité</h2>
        <ol>
          <li>Le centre doit être <strong>conventionné avec l’Assurance Maladie</strong>.</li>
          <li>Les personnels concernés doivent être <strong>salariés du centre</strong> (et non libéraux mis à disposition).</li>
          <li>Ils doivent <strong>réaliser des actes remboursables</strong> par l’Assurance Maladie.</li>
          <li>Ils ne doivent <strong>pas être financés intégralement</strong> par un autre dispositif (ACI, FIR, prévention dédiée…).</li>
          <li>Les <strong>cotisations URSSAF doivent être à jour</strong> et attestées.</li>
        </ol>

        <h2>Comment calculer le montant Teulade auquel vous avez droit ?</h2>
        <p>
          Le calcul s’effectue salarié par salarié, sur la base de la DSN et des
          bordereaux URSSAF :
        </p>
        <blockquote>
          <strong>Montant Teulade</strong> = Σ (assiette cotisations patronales
          maladie/maternité/invalidité/décès) × 11,5 % × quotité d’activité conventionnée
        </blockquote>
        <p>
          <strong>Exemple chiffré</strong> — un centre de santé employant :
        </p>
        <ul>
          <li>3 médecins généralistes à 75 000 € brut annuel,</li>
          <li>2 chirurgiens-dentistes à 90 000 €,</li>
          <li>4 infirmiers à 32 000 €,</li>
          <li>1 secrétaire (non éligible).</li>
        </ul>
        <p>
          Assiette éligible cumulée : 3 × 75 000 + 2 × 90 000 + 4 × 32 000 = <strong>533 000 €</strong>.
          <br />
          Subvention Teulade annuelle : 533 000 × 11,5 % = <strong>≈ 61 295 €</strong>.
          <br />
          Sur 3 ans non prescrits : <strong>≈ 183 885 €</strong> de rattrapage potentiel.
        </p>
        <p>
          <Link href="/simulateur">→ Estimez votre montant avec notre simulateur Teulade</Link>
        </p>

        <h2>Procédure auprès de la CPAM</h2>
        <ol>
          <li><strong>Demander le formulaire</strong> de subvention Teulade à votre CPAM (chaque caisse utilise son propre imprimé).</li>
          <li><strong>Obtenir l’attestation URSSAF</strong> de paiement des cotisations sociales pour la période concernée.</li>
          <li><strong>Calculer l’assiette éligible</strong> pour chaque salarié soignant.</li>
          <li><strong>Renseigner le formulaire</strong> et joindre les justificatifs (DSN, bulletins, attestations).</li>
          <li><strong>Envoyer le dossier</strong> par courrier recommandé au service approprié de la CPAM.</li>
          <li><strong>Relancer</strong> jusqu’au versement effectif (en moyenne 2 à 9 mois).</li>
        </ol>

        <h2>Les pièges les plus fréquents</h2>
        <ul>
          <li><strong>Oublier le rattrapage N-1 à N-3</strong> : la prescription permet de récupérer plusieurs exercices.</li>
          <li><strong>Inclure du personnel non éligible</strong> (administratif pur, agents d’accueil) — la CPAM rejette alors tout ou partie du dossier.</li>
          <li><strong>Mauvaise quotité d’activité conventionnée</strong> pour les salariés mixtes (prévention + soins).</li>
          <li><strong>Attestation URSSAF non concordante</strong> avec les DSN.</li>
          <li><strong>Absence de relances</strong> : un dossier non relancé peut rester 18 mois en attente.</li>
        </ul>

        <h2>Pourquoi se faire accompagner ?</h2>
        <p>
          Selon le <strong>rapport IGAS de février 2025</strong> sur l’évaluation du
          modèle économique des centres de santé pluriprofessionnels, environ{" "}
          <strong>25 % des CDS</strong> n’ont pas perçu la subvention Teulade en
          2022. Un cabinet spécialisé reconstitue les dossiers manquants, sécurise les
          assiettes et porte les relances jusqu’au versement.
        </p>
        <p>
          <Link href="/accompagnement">→ Découvrir notre accompagnement</Link>
        </p>

        <h2>Questions fréquentes</h2>
      </article>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Faq items={faqs} />
      </section>

      <CTASection
        title="Estimez votre subvention Teulade en 48h"
        subtitle="Diagnostic gratuit, sans engagement. Honoraires uniquement au résultat."
        primary={{ href: "/contact", label: "Demander mon diagnostic" }}
        secondary={{ href: "/simulateur", label: "Utiliser le simulateur" }}
      />
    </>
  );
}
