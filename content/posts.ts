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
    slug: "subvention-teulade-centres-de-sante",
    title: "Subvention Teulade : ce qu’il faut savoir pour un centre de santé",
    description:
      "La subvention Teulade est l’un des dispositifs de financement spécifiques aux centres de santé. Présentation, principes généraux et raisons d’un accompagnement.",
    date: "2026-05-12",
    readingTime: "4 min",
    category: "Subventions",
    content: `
<h2>Qu’est-ce que la subvention Teulade ?</h2>
<p>La subvention dite Teulade est un dispositif spécifique aux centres de santé conventionnés, prévu par le code de la sécurité sociale. Elle s’inscrit dans l’ensemble des financements publics et conventionnels mobilisables par un CDS.</p>
<h2>Pour quels centres ?</h2>
<p>Tous les centres de santé conventionnés peuvent en principe être concernés, sous réserve de conditions précises. Chaque situation s’apprécie individuellement.</p>
<h2>Pourquoi un accompagnement ?</h2>
<p>Une part significative des centres de santé ne perçoit pas la totalité des subventions auxquelles ils ont droit, par complexité des démarches ou manque de ressources internes. Un accompagnement spécialisé sécurise la mobilisation des bons dispositifs.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit de votre situation : nous évaluons les dispositifs mobilisables et la marche à suivre.</p>
`,
  },
  {
    slug: "financement-centre-de-sante",
    title: "Financement d’un centre de santé : panorama général",
    description:
      "Vue d’ensemble du financement d’un centre de santé : rémunérations conventionnelles, dispositifs forfaitaires, subventions, aides à l’installation.",
    date: "2026-04-22",
    readingTime: "4 min",
    category: "Financement",
    content: `
<h2>Un modèle économique pluriel</h2>
<p>Le financement d’un centre de santé combine plusieurs sources : rémunérations conventionnelles, dispositifs forfaitaires, financements publics, subventions spécifiques et aides à l’installation.</p>
<h2>Des subventions souvent sous-mobilisées</h2>
<p>De nombreux dispositifs existent mais restent peu utilisés. Méconnaissance, complexité administrative, manque de temps : les raisons sont multiples.</p>
<h2>L’importance d’une vue d’ensemble</h2>
<p>Plutôt que de traiter chaque dispositif isolément, une approche intégrée permet d’articuler les financements et de sécuriser le modèle économique.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit. Nous identifions les leviers mobilisables pour votre centre.</p>
`,
  },
  {
    slug: "subventions-centre-dentaire",
    title: "Subventions pour un centre de santé dentaire",
    description:
      "Les centres de santé dentaires peuvent mobiliser plusieurs dispositifs de financement spécifiques. Présentation générale et points d’attention.",
    date: "2026-03-18",
    readingTime: "3 min",
    category: "Subventions",
    content: `
<h2>Un secteur spécifique</h2>
<p>Les centres de santé dentaires combinent enjeux RH, cadre conventionnel et productivité. Comme tout centre de santé conventionné, ils peuvent mobiliser plusieurs dispositifs de financement.</p>
<h2>Quels dispositifs ?</h2>
<p>Au-delà des rémunérations conventionnelles, plusieurs subventions et dispositifs forfaitaires peuvent être mobilisés. Chaque cas s’apprécie individuellement selon le statut juridique, la typologie et l’organisation.</p>
<h2>Pourquoi un accompagnement</h2>
<p>L’articulation entre les différents financements est complexe. Un accompagnement spécialisé permet de sécuriser la démarche et d’éviter les angles morts.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’évaluer rapidement les leviers mobilisables.</p>
`,
  },
  {
    slug: "creer-centre-de-sante",
    title: "Créer un centre de santé : les grandes étapes",
    description:
      "Étude de faisabilité, statut juridique, projet de santé, conventionnement : panorama du parcours de création d’un centre de santé.",
    date: "2026-02-15",
    readingTime: "4 min",
    category: "Création",
    content: `
<h2>Un projet structuré dans le temps</h2>
<p>La création d’un centre de santé est un projet exigeant qui se construit sur 12 à 18 mois en moyenne. Plusieurs étapes clés se succèdent : faisabilité, juridique, projet de santé, conventionnement.</p>
<h2>Les principaux jalons</h2>
<ul>
  <li>Étude de faisabilité et zonage</li>
  <li>Choix du statut juridique</li>
  <li>Projet de santé pour l’ARS</li>
  <li>Conventionnement avec l’Assurance Maladie</li>
  <li>Plan de financement et mobilisation des aides</li>
</ul>
<h2>Anticiper le modèle économique</h2>
<p>Le plan de financement doit être anticipé dès le départ. Plusieurs dispositifs publics et conventionnels peuvent contribuer à sécuriser l’équilibre du projet.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit. Nous évaluons la faisabilité et les financements mobilisables.</p>
`,
  },
  {
    slug: "centre-municipal-de-sante-financement",
    title: "Financement d’un centre municipal de santé",
    description:
      "Les centres municipaux de santé peuvent compléter le budget de la collectivité par plusieurs dispositifs publics et conventionnels.",
    date: "2026-01-30",
    readingTime: "3 min",
    category: "Financement",
    content: `
<h2>Un portage public</h2>
<p>Les centres municipaux de santé (CMS) sont portés par une collectivité territoriale. Leur gouvernance et leur statut RH spécifiques nécessitent un accompagnement adapté.</p>
<h2>Plusieurs financements possibles</h2>
<p>Au-delà du budget de la collectivité, plusieurs dispositifs publics et conventionnels peuvent contribuer au modèle économique d’un CMS. Ces financements sont souvent sous-mobilisés.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour évaluer les leviers mobilisables pour votre CMS.</p>
`,
  },
  {
    slug: "developper-centre-de-sante",
    title: "Développer un centre de santé : les bonnes questions",
    description:
      "Les bonnes questions à se poser avant d’élargir l’offre, ouvrir une antenne ou structurer un réseau multi-sites.",
    date: "2025-12-20",
    readingTime: "3 min",
    category: "Développement",
    content: `
<h2>Quel besoin territorial ?</h2>
<p>Le développement se justifie quand le besoin de soins existe et que la patientèle potentielle est suffisante.</p>
<h2>Quels moyens ?</h2>
<p>Le développement suppose des moyens RH, juridiques et financiers. Plusieurs dispositifs de financement peuvent être mobilisés pour accompagner la croissance.</p>
<h2>Quelle gouvernance ?</h2>
<p>Multi-sites, réseau, structure unique : les choix de gouvernance ont des conséquences durables. Ils méritent d’être tranchés en amont.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit de votre projet de développement.</p>
`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
