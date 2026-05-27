export type CdsType = {
  slug: string;
  name: string;
  longName: string;
  short: string;
  intro: string;
};

export const cdsTypes: CdsType[] = [
  {
    slug: "medical",
    name: "Centre de santé médical",
    longName: "Centre de santé médical",
    short: "Centres salariant des médecins généralistes ou spécialistes.",
    intro:
      "Les centres de santé médicaux salarient des médecins. Leur équilibre économique repose sur l’articulation entre rémunérations conventionnelles, dispositifs forfaitaires et financements publics. Plusieurs subventions spécifiques peuvent être mobilisées.",
  },
  {
    slug: "dentaire",
    name: "Centre de santé dentaire",
    longName: "Centre de santé dentaire",
    short: "Centres dentaires salariant des chirurgiens-dentistes.",
    intro:
      "Les centres de santé dentaires emploient des chirurgiens-dentistes salariés. Leur modèle combine enjeux RH, productivité et cadre conventionnel exigeant. Comme tout centre de santé conventionné, ils peuvent bénéficier de plusieurs dispositifs de financement.",
  },
  {
    slug: "infirmier",
    name: "Centre de santé infirmier",
    longName: "Centre de santé infirmier (CSI)",
    short: "Centres infirmiers (CSI) et centres de soins infirmiers.",
    intro:
      "Les centres de santé infirmiers, souvent appelés CSI, salarient des IDE pour des soins à domicile ou au centre. Leur viabilité dépend de l’organisation et de la mobilisation des dispositifs financiers adaptés au secteur.",
  },
  {
    slug: "polyvalent",
    name: "Centre de santé polyvalent",
    longName: "Centre de santé polyvalent",
    short: "Centres associant plusieurs disciplines (médico-dentaire, etc.).",
    intro:
      "Les centres de santé polyvalents combinent plusieurs typologies de soins. Cette diversité offre un fort potentiel financier mais complexifie la gestion. Plusieurs subventions sont mobilisables en parallèle.",
  },
  {
    slug: "pluriprofessionnel",
    name: "Centre de santé pluriprofessionnel",
    longName: "Centre de santé pluriprofessionnel",
    short: "Centres en équipe coordonnée éligibles à l’ACI.",
    intro:
      "Le centre de santé pluriprofessionnel répond aux critères de l’Accord Conventionnel Interprofessionnel : équipe coordonnée, projet de santé formalisé, salariés médicaux et paramédicaux. Il peut cumuler plusieurs dispositifs financiers spécifiques.",
  },
  {
    slug: "municipal",
    name: "Centre municipal de santé",
    longName: "Centre municipal de santé (CMS)",
    short: "Centres portés par une commune ou une collectivité.",
    intro:
      "Les centres municipaux de santé sont portés par une collectivité territoriale. Leur gouvernance et leur statut RH spécifiques nécessitent un accompagnement adapté. Plusieurs financements publics et conventionnels peuvent venir compléter le budget de la collectivité.",
  },
  {
    slug: "associatif",
    name: "Centre de santé associatif",
    longName: "Centre de santé associatif (loi 1901)",
    short: "Centres portés par une association loi 1901.",
    intro:
      "Les centres de santé associatifs représentent une grande partie du parc français. Souplesse de gouvernance, mais besoin fort de structuration administrative et de mobilisation des subventions disponibles.",
  },
  {
    slug: "mutualiste",
    name: "Centre de santé mutualiste",
    longName: "Centre de santé mutualiste",
    short: "Centres portés par une mutuelle (livre III).",
    intro:
      "Les centres de santé mutualistes sont rattachés à une mutuelle. Ils combinent un cadre conventionnel strict et des exigences propres au groupe mutualiste. Plusieurs subventions publiques peuvent compléter leur modèle.",
  },
];

export function getType(slug: string) {
  return cdsTypes.find((t) => t.slug === slug);
}
