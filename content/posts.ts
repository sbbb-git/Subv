export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  content: string; // markdown-lite HTML
};

export const posts: Post[] = [
  {
    slug: "subvention-teulade-tout-comprendre",
    title: "Subvention Teulade : tout comprendre en 5 minutes",
    description:
      "L’essentiel sur la subvention Teulade pour les centres de santé : base légale, taux, calcul, démarches CPAM et erreurs à éviter.",
    date: "2026-04-12",
    readingTime: "6 min",
    category: "Comprendre",
    content: `
<h2>Le principe en une phrase</h2>
<p>La CPAM rembourse à votre centre de santé <strong>11,5 % de l’assiette des cotisations patronales</strong> URSSAF (maladie, maternité, invalidité, décès) versées pour vos soignants salariés.</p>
<h2>Un droit ancien mais sous-utilisé</h2>
<p>Codifié à l’article L162-32 du code de la sécurité sociale, le dispositif date du décret du 14 décembre 1992 signé par René Teulade. Près de 30 ans plus tard, un quart des CDS ne le perçoit toujours pas.</p>
<h2>Comment calculer en 30 secondes</h2>
<ul>
  <li>Listez vos soignants salariés.</li>
  <li>Sommez leurs salaires bruts annuels.</li>
  <li>Multipliez par 11,5 %.</li>
</ul>
<p>Un CDS de 8 soignants à 50 000 € brut moyen reçoit ainsi <strong>≈ 46 000 € par an</strong>, et jusqu’à <strong>184 000 € avec le rattrapage 3 ans</strong>.</p>
<h2>Trois erreurs à éviter</h2>
<ol>
  <li>Inclure le personnel administratif dans l’assiette.</li>
  <li>Oublier les exercices N-1 à N-3 non versés.</li>
  <li>Ne pas relancer la CPAM passé 6 mois.</li>
</ol>
<h2>Et après ?</h2>
<p>Si vous n’avez jamais demandé Teulade — ou si vous suspectez un montant minoré — un audit gratuit en 48h permet de chiffrer précisément les sommes récupérables.</p>
`,
  },
  {
    slug: "igas-subvention-teulade-non-versee",
    title: "Rapport IGAS 2025 : pourquoi 25 % des CDS n’ont pas perçu la subvention Teulade",
    description:
      "Analyse du rapport IGAS de février 2025 sur le modèle économique des centres de santé pluriprofessionnels et le non-versement de la subvention Teulade.",
    date: "2026-03-04",
    readingTime: "7 min",
    category: "Actualité",
    content: `
<h2>Le constat du rapport IGAS</h2>
<p>Dans son rapport de février 2025 sur le modèle économique des centres de santé pluriprofessionnels, l’Inspection Générale des Affaires Sociales relève que <strong>près d’un quart des CDS</strong> n’a pas perçu la subvention Teulade au titre de 2022.</p>
<h2>Les causes structurelles</h2>
<ul>
  <li>Un formulaire propre à chaque CPAM, peu documenté.</li>
  <li>Une coordination URSSAF–CPAM laissée à la charge du CDS.</li>
  <li>Un défaut d’information des directions et trésoreries des CDS.</li>
</ul>
<h2>L’impact financier</h2>
<p>Pour un CDS pluriprofessionnel moyen (10 ETP soignants), le manque à gagner annuel se situe entre <strong>50 000 € et 90 000 €</strong>. Avec le rattrapage 3 ans, on parle de <strong>plus de 200 000 €</strong> de trésorerie qui restent à la CPAM.</p>
<h2>Que recommande l’IGAS ?</h2>
<p>Le rapport propose d’uniformiser la procédure et de désigner un référent CPAM dédié dans chaque caisse. En attendant que ces recommandations soient mises en œuvre, c’est aux CDS d’aller chercher leur dû — seuls ou accompagnés.</p>
`,
  },
  {
    slug: "teulade-vs-aci-cumul",
    title: "Subvention Teulade et ACI : comment les cumuler intelligemment",
    description:
      "Règles de cumul entre la subvention Teulade et l’Accord Conventionnel Interprofessionnel (ACI) pour les centres de santé pluriprofessionnels.",
    date: "2026-02-15",
    readingTime: "5 min",
    category: "Optimisation",
    content: `
<h2>Deux dispositifs complémentaires</h2>
<p>L’ACI rémunère le centre pour sa structuration pluriprofessionnelle (1 point = 7 €, minimum 20 000 €/an). Teulade compense les charges patronales. Les deux sont <strong>cumulables</strong> à condition de ne pas financer deux fois la même mission.</p>
<h2>Cas à risque</h2>
<ul>
  <li>Un coordinateur intégralement financé par l’ACI ne doit pas figurer dans l’assiette Teulade.</li>
  <li>Une action de prévention financée par le FIR ne doit pas l’être aussi dans l’assiette Teulade.</li>
</ul>
<h2>Bonne pratique : la quotité d’activité</h2>
<p>Pour un salarié à temps partagé soins/coordination, calculez sa quotité « activité de soins remboursable » → seule cette part entre dans l’assiette Teulade. Le reste relève de l’ACI ou du FIR.</p>
<h2>Notre conseil</h2>
<p>Pilotez les deux dispositifs ensemble, avec un même tableau de bord. C’est la seule façon d’éviter les doublons tout en maximisant les recettes.</p>
`,
  },
  {
    slug: "creer-centre-de-sante-2026",
    title: "Créer un centre de santé en 2026 : aides, statuts, étapes",
    description:
      "Guide complet pour créer un centre de santé en 2026 : statuts juridiques, projet de santé, conventionnement CPAM, aides à l’installation et financements.",
    date: "2026-01-20",
    readingTime: "8 min",
    category: "Création",
    content: `
<h2>Étape 1 — L’étude de faisabilité</h2>
<p>Diagnostic territorial via le zonage ARS, identification de la patientèle, modélisation économique. C’est l’étape qui valide (ou pas) la viabilité de votre projet.</p>
<h2>Étape 2 — Le statut juridique</h2>
<ul>
  <li><strong>Association loi 1901</strong> : souple, peu fiscalisée, idéale pour porter un projet collectif.</li>
  <li><strong>SCIC</strong> : statut coopératif d’intérêt collectif, adapté aux projets territoriaux.</li>
  <li><strong>Centre municipal de santé</strong> : portage public, accès à des aides spécifiques.</li>
  <li><strong>Mutuelle</strong> : portage par un acteur mutualiste.</li>
</ul>
<h2>Étape 3 — Le projet de santé</h2>
<p>Document central exigé par l’ARS. Il décrit l’organisation des soins, la coordination, la prévention, les protocoles, la gouvernance.</p>
<h2>Étape 4 — Le conventionnement CPAM</h2>
<p>Dossier transmis à la CPAM pour ouverture des droits aux remboursements. Sans conventionnement, pas de Teulade, pas d’ACI.</p>
<h2>Étape 5 — Mobiliser les financements</h2>
<ul>
  <li>Subvention Teulade dès le premier salaire soignant.</li>
  <li>ACI dès l’atteinte des critères pluripro.</li>
  <li>Aides à l’installation (CAIM, COSCOM, COTRAM).</li>
  <li>Cofinancements ARS/FIR et collectivités.</li>
</ul>
`,
  },
];
