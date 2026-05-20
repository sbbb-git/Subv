export type CdsType = {
  slug: string;
  name: string;
  longName: string;
  shortDesc: string;
  intro: string;
  pros: string[];
  cotisationsNote: string;
  exemple: { effectif: string; assiette: number; annuel: number; rattrapage: number };
  specifics: string[];
};

export const cdsTypes: CdsType[] = [
  {
    slug: "medical",
    name: "CDS médical",
    longName: "Centre de santé médical",
    shortDesc: "Centres de santé médicaux (généralistes et spécialistes salariés).",
    intro: "Les centres de santé médicaux salarient des médecins généralistes et/ou spécialistes. L’assiette des cotisations patronales y est particulièrement élevée — le levier Teulade y est donc considérable.",
    pros: [
      "Forte assiette URSSAF par médecin salarié",
      "Cumul possible avec ACI et Forfait Structure",
      "Rattrapage souvent significatif (rares CDS ayant fait toutes leurs demandes)",
    ],
    cotisationsNote: "Les médecins salariés génèrent une assiette annuelle moyenne comprise entre 70 000 € et 110 000 €.",
    exemple: { effectif: "5 médecins généralistes", assiette: 390000, annuel: 44850, rattrapage: 134550 },
    specifics: [
      "Attention aux médecins en activité mixte (libéral + salarié) : seule la part salariée est éligible.",
      "Les médecins coordonnateurs financés via l’ACI ne doivent pas être inclus dans l’assiette Teulade.",
    ],
  },
  {
    slug: "dentaire",
    name: "CDS dentaire",
    longName: "Centre de santé dentaire",
    shortDesc: "Centres dentaires salariant des chirurgiens-dentistes et assistants.",
    intro: "Les centres de santé dentaires sont des employeurs majeurs de chirurgiens-dentistes salariés. La subvention Teulade y est particulièrement importante en raison du nombre élevé de praticiens.",
    pros: [
      "Assiette élevée par chirurgien-dentiste (souvent > 90 000 € bruts)",
      "Effectifs souvent supérieurs à 5 praticiens",
      "Rattrapage 3 ans qui dépasse régulièrement les 100 000 €",
    ],
    cotisationsNote: "Les chirurgiens-dentistes salariés présentent des assiettes annuelles fréquemment au-delà de 90 000 €.",
    exemple: { effectif: "6 chirurgiens-dentistes", assiette: 540000, annuel: 62100, rattrapage: 186300 },
    specifics: [
      "Les assistants dentaires salariés sont éligibles dès lors qu’ils participent directement aux actes remboursables.",
      "Attention aux structures avec praticiens en collaboration libérale : ils ne sont pas dans l’assiette.",
    ],
  },
  {
    slug: "infirmier",
    name: "CDS infirmier",
    longName: "Centre de santé infirmier",
    shortDesc: "Centres infirmiers et centres de soins infirmiers (CSI).",
    intro: "Les centres de santé infirmiers (souvent appelés CSI — Centres de Soins Infirmiers) salarient des IDE assurant des soins à domicile ou au centre. Bien que les assiettes individuelles soient plus basses, les effectifs élevés rendent la subvention Teulade significative.",
    pros: [
      "Effectifs souvent élevés (10 à 30 IDE)",
      "Assiette cumulée importante",
      "Cumul possible avec aides ARS et collectivités",
    ],
    cotisationsNote: "Les IDE salariés présentent des assiettes annuelles moyennes autour de 30 000 à 36 000 €.",
    exemple: { effectif: "12 IDE salariés", assiette: 408000, annuel: 46920, rattrapage: 140760 },
    specifics: [
      "Bien distinguer les IDE coordinateurs (potentiellement financés par d’autres dispositifs) des IDE de soins.",
      "Vigilance sur les actes en SSIAD/HAD qui suivent une comptabilité distincte.",
    ],
  },
  {
    slug: "polyvalent",
    name: "CDS polyvalent",
    longName: "Centre de santé polyvalent",
    shortDesc: "Centres associant plusieurs disciplines (médico-dentaire, médico-infirmier, etc.).",
    intro: "Les centres de santé polyvalents combinent au moins deux types d’activités (médecine + dentaire, médecine + infirmier, etc.). Le calcul Teulade y est plus complexe : il faut isoler l’assiette par typologie de soignant.",
    pros: [
      "Cumul des leviers médicaux et paramédicaux",
      "Assiette globale très élevée",
      "Eligibilité simultanée à l’ACI",
    ],
    cotisationsNote: "L’assiette cumulée d’un centre polyvalent moyen dépasse fréquemment 500 000 €.",
    exemple: { effectif: "3 médecins + 2 dentistes + 4 IDE", assiette: 546000, annuel: 62790, rattrapage: 188370 },
    specifics: [
      "Calcul à mener métier par métier pour fiabiliser l’assiette.",
      "Penser à isoler la part de chaque salarié dédiée à des missions financées séparément (ACI, FIR).",
    ],
  },
  {
    slug: "pluriprofessionnel",
    name: "CDS pluriprofessionnel",
    longName: "Centre de santé pluriprofessionnel",
    shortDesc: "Centres pluriprofessionnels (au sens de l’ACI), exerçant en équipe coordonnée.",
    intro: "Le CDS pluriprofessionnel est un centre de santé qui répond aux critères de l’ACI : au moins un médecin et un auxiliaire médical salariés, projet de santé formalisé, équipe coordonnée. La double captation Teulade + ACI y est la norme.",
    pros: [
      "Cumul des dispositifs CDS (Teulade, ACI, FIR, Forfait Structure)",
      "Forte synergie avec FIR et aides régionales",
      "Modèle privilégié par la stratégie nationale de santé",
    ],
    cotisationsNote: "Le profil exact dépend de la composition de l’équipe — on retrouve souvent une assiette > 400 000 €.",
    exemple: { effectif: "4 médecins + 5 IDE + 1 kiné", assiette: 482000, annuel: 55430, rattrapage: 166290 },
    specifics: [
      "Le coordinateur, s’il est financé à 100 % par l’ACI, ne doit pas figurer dans l’assiette Teulade.",
      "Pilotage croisé Teulade/ACI fortement recommandé.",
    ],
  },
  {
    slug: "municipal",
    name: "Centre municipal de santé",
    longName: "Centre municipal de santé (CMS)",
    shortDesc: "Centres portés par une collectivité (commune, EPCI, métropole, département).",
    intro: "Les centres municipaux de santé sont portés par une collectivité territoriale. Leurs personnels relèvent souvent du statut de la fonction publique territoriale. Le calcul Teulade exige une attention particulière sur les assiettes spécifiques.",
    pros: [
      "Soutien budgétaire de la collectivité",
      "Cumul possible avec aides régionales et FIR",
      "Eligibilité pleine à Teulade et ACI dès lors que conventionné",
    ],
    cotisationsNote: "Les agents titulaires relèvent de la CNRACL — les contractuels de droit privé du régime général. Calcul Teulade à adapter en conséquence.",
    exemple: { effectif: "3 médecins + 4 IDE en CDI public", assiette: 370000, annuel: 42550, rattrapage: 127650 },
    specifics: [
      "Bien différencier titulaires et contractuels dans l’assiette éligible.",
      "Attention à la délibération budgétaire intégrant la subvention Teulade en recette.",
    ],
  },
  {
    slug: "associatif",
    name: "CDS associatif",
    longName: "Centre de santé associatif (loi 1901)",
    shortDesc: "Centres portés par une association à but non lucratif.",
    intro: "Les centres de santé associatifs sont les plus nombreux en France. L’association employeur cotise normalement à l’URSSAF — la subvention Teulade est donc pleinement applicable et constitue un levier financier vital pour la pérennité de la structure.",
    pros: [
      "Statut souple, gouvernance partagée",
      "Cumul plein Teulade + ACI + aides ARS",
      "Levier essentiel pour l’équilibre économique de l’association",
    ],
    cotisationsNote: "Régime général de sécurité sociale. Assiette Teulade construite à partir de la DSN classique.",
    exemple: { effectif: "5 ETP soignants moyens", assiette: 280000, annuel: 32200, rattrapage: 96600, },
    specifics: [
      "Vigilance comptable : la subvention Teulade doit apparaître clairement dans le compte de résultat.",
      "Penser à la mentionner dans le rapport d’activité destiné aux financeurs.",
    ],
  },
  {
    slug: "mutualiste",
    name: "CDS mutualiste",
    longName: "Centre de santé mutualiste",
    shortDesc: "Centres portés par une mutuelle (livre III du code de la mutualité).",
    intro: "Les centres de santé mutualistes sont rattachés à une mutuelle relevant du livre III du code de la mutualité. Ils bénéficient pleinement de la subvention Teulade dès lors qu’ils emploient des soignants salariés et sont conventionnés avec l’Assurance Maladie.",
    pros: [
      "Eligibilité pleine à Teulade",
      "Cumul possible avec ACI selon la structuration",
      "Forte capacité à mobiliser des financements transversaux",
    ],
    cotisationsNote: "Régime général. L’organisme employeur gère les cotisations à l’URSSAF.",
    exemple: { effectif: "8 ETP soignants moyens", assiette: 450000, annuel: 51750, rattrapage: 155250 },
    specifics: [
      "Attention aux refacturations internes au sein du groupe mutualiste : elles ne modifient pas l’assiette Teulade.",
    ],
  },
];

export function getCdsType(slug: string) {
  return cdsTypes.find((t) => t.slug === slug);
}
