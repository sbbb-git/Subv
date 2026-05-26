export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "creer-centre-de-sante-etapes",
    title: "Créer un centre de santé : les grandes étapes",
    description:
      "Étude de faisabilité, statut juridique, projet de santé, conventionnement CPAM : panorama du parcours de création d’un centre de santé.",
    date: "2026-05-12",
    readingTime: "6 min",
    category: "Création",
    content: `
<h2>Étape 1 — L’étude de faisabilité</h2>
<p>Diagnostic territorial via le zonage ARS, identification de la patientèle, modélisation économique. C’est l’étape qui valide la viabilité du projet.</p>
<h2>Étape 2 — Le statut juridique</h2>
<ul>
  <li><strong>Association loi 1901</strong> : souple, idéale pour porter un projet collectif.</li>
  <li><strong>SCIC</strong> : statut coopératif d’intérêt collectif.</li>
  <li><strong>Centre municipal</strong> : portage par une collectivité.</li>
  <li><strong>Mutuelle</strong> : portage mutualiste.</li>
</ul>
<h2>Étape 3 — Le projet de santé</h2>
<p>Document central exigé par l’ARS : organisation des soins, coordination, prévention, gouvernance.</p>
<h2>Étape 4 — Le conventionnement CPAM</h2>
<p>Préalable à toute facturation en tiers payant et à l’accès aux dispositifs conventionnels.</p>
<h2>Étape 5 — L’architecture financière</h2>
<p>Plan de financement anticipé, identification des dispositifs mobilisables, calendrier d’activation.</p>
`,
  },
  {
    slug: "modele-economique-cds",
    title: "Le modèle économique des centres de santé",
    description:
      "Comprendre les leviers financiers d’un centre de santé et leur articulation : conventionnement, dispositifs CPAM, ACI, FIR, aides publiques.",
    date: "2026-04-22",
    readingTime: "5 min",
    category: "Comprendre",
    content: `
<h2>Une logique différente du libéral</h2>
<p>Un centre de santé salarie ses soignants. Cela change tout : charges patronales, gestion administrative, gouvernance, financements.</p>
<h2>Une mosaïque de recettes</h2>
<p>Actes remboursables, rémunérations forfaitaires (ACI, Forfait Structure, ROSP), financements publics (FIR, dotations ARS, aides collectivités), dispositifs spécifiques aux centres de santé.</p>
<h2>Un équilibre fragile</h2>
<p>Le rapport IGAS 2025 souligne la fragilité de cet équilibre, et le fait que de nombreux dispositifs restent sous-mobilisés.</p>
<h2>Un pilotage à organiser</h2>
<p>La viabilité d’un centre de santé repose sur une vision intégrée : cartographier, prioriser, sécuriser.</p>
`,
  },
  {
    slug: "monter-dossier-ars",
    title: "Comment structurer un dossier ARS",
    description:
      "Les bonnes pratiques pour préparer un dossier ARS solide : lecture de l’appel à projets, structuration du projet, annexes financières.",
    date: "2026-03-18",
    readingTime: "5 min",
    category: "Méthode",
    content: `
<h2>Lire l’appel à projets entre les lignes</h2>
<p>Chaque ARS a ses priorités et ses critères d’évaluation. Avant de rédiger, prendre le temps de comprendre ce que l’ARS cherche réellement.</p>
<h2>Structurer la réponse</h2>
<p>Un bon dossier ARS suit la trame attendue : contexte territorial, objectifs, moyens, indicateurs, gouvernance, budget.</p>
<h2>Soigner les annexes financières</h2>
<p>Plan de financement clair, articulation avec les autres dispositifs (FIR, ACI, collectivités), réalisme budgétaire.</p>
<h2>Anticiper le post-octroi</h2>
<p>Les rapports d’activité et bilans intermédiaires se préparent dès la candidature : indicateurs collectés dès le démarrage.</p>
`,
  },
  {
    slug: "comptabilite-centre-de-sante-specificites",
    title: "Les spécificités comptables d’un centre de santé",
    description:
      "Pourquoi la comptabilité d’un centre de santé demande une expertise particulière : ventilation analytique, paie URSSAF, articulation avec les financements publics.",
    date: "2026-02-15",
    readingTime: "5 min",
    category: "Gestion",
    content: `
<h2>Une analytique fine</h2>
<p>Le centre de santé doit ventiler ses recettes et charges par activité pour piloter correctement la rentabilité de chaque ligne.</p>
<h2>Une paie sous contrainte</h2>
<p>Les DSN et attestations URSSAF sont la base de plusieurs dispositifs financiers. La moindre erreur a des conséquences directes.</p>
<h2>Une articulation avec les financements publics</h2>
<p>Subventions, dotations, financements forfaitaires : tous doivent être reconnus correctement en comptabilité pour éviter les distorsions.</p>
<h2>Une fiscalité à adapter au statut</h2>
<p>Association, mutuelle, SCIC, public : chaque statut a ses règles fiscales propres.</p>
`,
  },
  {
    slug: "igas-2025-cds",
    title: "Rapport IGAS 2025 : ce qu’il faut retenir pour les centres de santé",
    description:
      "Synthèse du rapport IGAS de février 2025 sur l’évaluation du modèle économique des centres de santé pluriprofessionnels.",
    date: "2026-01-30",
    readingTime: "4 min",
    category: "Actualité",
    content: `
<h2>Un état des lieux attendu</h2>
<p>Le rapport IGAS de février 2025 propose un panorama fouillé du secteur des centres de santé pluriprofessionnels : diversité des modèles, sources de financement, viabilité économique.</p>
<h2>Des dispositifs sous-mobilisés</h2>
<p>Le rapport relève qu’un nombre significatif de dispositifs anciens restent sous-utilisés par les structures concernées, parfois faute d’information.</p>
<h2>Des recommandations structurelles</h2>
<p>Simplification des procédures, harmonisation des pratiques entre caisses, meilleure information des directions de centres de santé.</p>
<h2>Une responsabilité opérationnelle</h2>
<p>En attendant les évolutions réglementaires, c’est aux directions de centres de santé — accompagnées si besoin — de mobiliser correctement les leviers à leur disposition.</p>
`,
  },
  {
    slug: "developper-cds-antennes",
    title: "Développer un centre de santé : faut-il ouvrir une antenne ?",
    description:
      "Les bonnes questions à se poser avant d’ouvrir une seconde implantation pour un centre de santé existant.",
    date: "2025-12-20",
    readingTime: "5 min",
    category: "Développement",
    content: `
<h2>Quel besoin territorial ?</h2>
<p>L’ouverture d’une antenne se justifie quand le besoin de soins existe et que la patientèle potentielle est suffisante.</p>
<h2>Quels moyens humains ?</h2>
<p>Une antenne sans équipe stable est vouée à l’échec. Avant l’ouverture, sécuriser le recrutement.</p>
<h2>Quel modèle financier ?</h2>
<p>Mutualisation administrative, articulation des financements, calendrier de montée en charge : sans plan financier robuste, l’antenne fragilise la maison mère.</p>
<h2>Quelle gouvernance ?</h2>
<p>Une seule structure juridique ou plusieurs ? Comment décide-t-on ? Ces questions doivent être tranchées en amont.</p>
`,
  },
];
