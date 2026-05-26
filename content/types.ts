export type CdsType = {
  slug: string;
  name: string;
  longName: string;
  short: string;
  intro: string;
  enjeux: string[];
};

export const cdsTypes: CdsType[] = [
  {
    slug: "medical",
    name: "Centre de santé médical",
    longName: "Centre de santé médical",
    short: "Centres salariant des médecins généralistes et/ou spécialistes.",
    intro: "Les centres de santé médicaux salarient des médecins généralistes et/ou spécialistes. Leur modèle économique repose sur l’articulation fine entre rémunérations conventionnelles, dispositifs forfaitaires et financements publics.",
    enjeux: [
      "Attractivité et fidélisation des médecins salariés",
      "Mobilisation des dispositifs conventionnels (ACI, Forfait Structure, ROSP)",
      "Sécurisation des dispositifs spécifiques aux centres de santé",
      "Suivi RH et URSSAF irréprochable",
    ],
  },
  {
    slug: "dentaire",
    name: "Centre de santé dentaire",
    longName: "Centre de santé dentaire",
    short: "Centres dentaires salariant des chirurgiens-dentistes et assistants.",
    intro: "Les centres de santé dentaires emploient des chirurgiens-dentistes salariés. Souvent organisés en réseaux ou groupes, ils combinent enjeux RH, productivité et cadre conventionnel exigeant.",
    enjeux: [
      "Organisation des plannings et rotation des praticiens",
      "Cotation CCAM et facturation",
      "Cadre conventionnel et contrôles CPAM",
      "Mobilisation des dispositifs financiers spécifiques aux centres de santé",
    ],
  },
  {
    slug: "infirmier",
    name: "Centre de santé infirmier",
    longName: "Centre de santé infirmier (CSI)",
    short: "Centres infirmiers et centres de soins infirmiers (CSI).",
    intro: "Les centres de santé infirmiers — souvent appelés CSI — salarient des IDE pour des soins à domicile ou au centre. Leur viabilité repose sur des effectifs et une planification précise.",
    enjeux: [
      "Optimisation des tournées et logistique",
      "Pilotage RH multi-équipes",
      "Articulation SSIAD / HAD",
      "Mobilisation des dispositifs financiers adaptés",
    ],
  },
  {
    slug: "polyvalent",
    name: "Centre de santé polyvalent",
    longName: "Centre de santé polyvalent",
    short: "Centres associant plusieurs disciplines (médico-dentaire, médico-infirmier, etc.).",
    intro: "Les centres de santé polyvalents combinent plusieurs typologies de soins. Cette diversité offre un fort potentiel financier mais complexifie la gestion administrative.",
    enjeux: [
      "Comptabilité analytique par métier",
      "Coordination interprofessionnelle",
      "Cumul cohérent des dispositifs financiers",
      "Pilotage RH transversal",
    ],
  },
  {
    slug: "pluriprofessionnel",
    name: "Centre de santé pluriprofessionnel",
    longName: "Centre de santé pluriprofessionnel",
    short: "Centres répondant aux critères de l’ACI (équipe coordonnée).",
    intro: "Le Centre de santé pluriprofessionnel répond aux critères de l’Accord Conventionnel Interprofessionnel : équipe coordonnée, projet de santé formalisé, salariés médicaux et paramédicaux.",
    enjeux: [
      "Pilotage des indicateurs ACI socle et optionnels",
      "Démarche qualité et protocoles",
      "Cumul des financements conventionnels",
      "Coordination interprofessionnelle structurée",
    ],
  },
  {
    slug: "municipal",
    name: "Centre municipal de santé",
    longName: "Centre municipal de santé (CMS)",
    short: "Centres portés par une collectivité (commune, EPCI, métropole, département).",
    intro: "Les centres municipaux de santé sont portés par une collectivité territoriale. Leur gouvernance et leur statut RH spécifiques (FPT) nécessitent un accompagnement adapté.",
    enjeux: [
      "Articulation FPT / contractuels",
      "Inscription budgétaire des recettes",
      "Délibérations et gouvernance",
      "Cofinancements ARS et collectivités",
    ],
  },
  {
    slug: "associatif",
    name: "Centre de santé associatif",
    longName: "Centre de santé associatif (loi 1901)",
    short: "Centres portés par une association à but non lucratif.",
    intro: "Les centres de santé associatifs représentent une grande part du parc français. Leur souplesse de gouvernance se conjugue à un besoin fort de structuration administrative.",
    enjeux: [
      "Gouvernance associative et conformité",
      "Comptabilité et rapport d’activité",
      "Mobilisation des financements publics",
      "Pilotage de l’équilibre budgétaire",
    ],
  },
  {
    slug: "mutualiste",
    name: "Centre de santé mutualiste",
    longName: "Centre de santé mutualiste",
    short: "Centres portés par une mutuelle (livre III du code de la mutualité).",
    intro: "Les centres de santé mutualistes sont rattachés à une mutuelle. Ils combinent un cadre conventionnel CPAM strict et des exigences propres au groupe mutualiste.",
    enjeux: [
      "Articulation avec la mutuelle mère",
      "Comptabilité dédiée et refacturation interne",
      "Conformité Solvabilité / Livre III",
      "Mobilisation des financements publics complémentaires",
    ],
  },
];
