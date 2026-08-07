export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  icon: string;
  pillar: "financement" | "structuration" | "developpement" | "accompagnement";
  pillars: { title: string; desc: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

const ICONS = {
  euro: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h4v2h-4v2h4v2h-4c-.55 0-1 .45-1 1v1h5v2H8v-2h2v-1c0-2.21 1.79-4 4-4h-3V7z",
  building: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
  user: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  chart: "M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-4h2v16h-2V5zm4 8h2v8h-2v-8zm4-4h2v12h-2V9z",
  grid: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z",
  megaphone: "M3 10v4l8 4V6L3 10zm12-3l3 1v8l-3 1v3l5-1V5l-5-1v3z",
  rocket: "M13 14l1.5-1.5L17 15l-1.5 1.5L13 14zM5 21l3-7 4 4-7 3zm14-9l-3-3 5-5 3 3-5 5zm-9.5-1.5L6 13l-1.5-1.5L8 8l1.5 2.5z",
  receipt: "M19 3l-1.5 1.5L16 3l-1.5 1.5L13 3l-1.5 1.5L10 3l-1.5 1.5L7 3 5.5 4.5 4 3v18l1.5-1.5L7 21l1.5-1.5L10 21l1.5-1.5L13 21l1.5-1.5L16 21l1.5-1.5L19 21V3z",
  document: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z",
  truck: "M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19.5 9.5l1.96 2.5H17V9.5h2.5zM18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
  shield: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  search: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z",
};

export const services: Service[] = [
  // ──────────── FINANCEMENT ────────────
  {
    slug: "subventions-et-financements",
    name: "Financement et subventions",
    short: "Identification et mobilisation des subventions publiques et conventionnelles.",
    hero: "Cartographie des dispositifs publics et conventionnels mobilisables par votre centre, montage des dossiers, suivi auprès des organismes financeurs.",
    icon: ICONS.euro,
    pillar: "financement",
    pillars: [
      { title: "Cartographie des dispositifs", desc: "Identification des financements auxquels votre centre peut prétendre, sur la base de votre situation et de votre territoire." },
      { title: "Montage des dossiers", desc: "Préparation, dépôt, relances : nous prenons en charge l’instruction complète." },
      { title: "Subvention Teulade", desc: "Dispositif spécifique aux centres de santé conventionnés." },
      { title: "Articulation des dispositifs", desc: "Mobilisation cohérente des différents leviers disponibles." },
    ],
    metaTitle: "Financement et subventions pour centres de santé",
    metaDescription: "Identification, montage et suivi des dossiers de subventions et financements pour votre centre de santé. On va chercher les aides que vous laissez de côté.",
    keywords: ["financement centre de santé", "subventions centre de santé", "subvention Teulade"],
  },
  {
    slug: "audit-financier",
    name: "Audit financier",
    short: "Diagnostic complet des recettes, charges et financements de votre centre.",
    hero: "Audit financier confidentiel : analyse des recettes, des charges et des financements mobilisés, identification du potentiel non exploité.",
    icon: ICONS.search,
    pillar: "financement",
    pillars: [
      { title: "Analyse des recettes", desc: "Actes, tiers payant, forfaits, financements conventionnels et publics." },
      { title: "Analyse des charges", desc: "Structure, rémunérations, charges sociales, immobilier." },
      { title: "Détection du potentiel", desc: "Dispositifs non mobilisés ou sous-optimisés." },
      { title: "Plan d’action chiffré", desc: "Priorisation, calendrier, gains attendus." },
    ],
    metaTitle: "Audit financier d’un centre de santé",
    metaDescription: "Audit financier confidentiel de votre centre de santé : recettes, charges, financements mobilisés et potentiel non réclamé. Une photo claire de votre situation.",
    keywords: ["audit financier centre de santé"],
  },

  // ──────────── STRUCTURATION ────────────
  {
    slug: "creation-centre-de-sante",
    name: "Création de centre de santé",
    short: "De l’étude de faisabilité à l’ouverture du centre.",
    hero: "Accompagnement complet à la création d’un centre de santé : étude territoriale, statut juridique, projet de santé, dossier ARS, plan de financement.",
    icon: ICONS.building,
    pillar: "structuration",
    pillars: [
      { title: "Étude de faisabilité", desc: "Diagnostic territorial, zonage ARS, modélisation économique." },
      { title: "Constitution juridique", desc: "Choix du statut (association, SCIC, SCM, mutualiste, public), formalités." },
      { title: "Projet de santé", desc: "Rédaction du document clé attendu par l’ARS." },
      { title: "Dossier ARS", desc: "Constitution du dossier d’ouverture et échanges avec l’agence." },
      { title: "Plan de financement", desc: "Recettes prévisionnelles, identification des aides mobilisables." },
    ],
    metaTitle: "Création de centre de santé",
    metaDescription: "Accompagnement à la création d’un centre de santé : faisabilité, statuts, projet de santé, dossier ARS, financement.",
    keywords: ["créer un centre de santé", "ouvrir un centre de santé", "projet de santé"],
  },
  {
    slug: "dossier-ars",
    name: "Dossier ARS",
    short: "Élaboration, dépôt et suivi des dossiers auprès de l’ARS.",
    hero: "Accompagnement pour le montage et le suivi des dossiers ARS : ouvertures, renouvellements, financements, mise en conformité.",
    icon: ICONS.document,
    pillar: "structuration",
    pillars: [
      { title: "Diagnostic des attendus", desc: "Lecture des appels à projets et critères de l’ARS concernée." },
      { title: "Rédaction du dossier", desc: "Projet structuré, indicateurs, budget, gouvernance." },
      { title: "Annexes financières", desc: "Plan de financement et articulation avec les autres dispositifs." },
      { title: "Dépôt et suivi", desc: "Suivi administratif jusqu’à la décision." },
      { title: "Reporting post-octroi", desc: "Bilans intermédiaires et finaux attendus par l’ARS." },
    ],
    metaTitle: "Monter un dossier ARS pour un centre de santé",
    metaDescription: "Montage de dossier ARS clé en main pour votre centre de santé : rédaction, annexes financières, dépôt et suivi jusqu'à la validation. On s'occupe de tout.",
    keywords: ["dossier ARS centre de santé", "appel à projets ARS"],
  },
  {
    slug: "conformite-projet-de-sante",
    name: "Conformité et projet de santé",
    short: "Renouvellement du projet de santé, préparation aux visites ARS.",
    hero: "Mise à jour du projet de santé, accompagnement aux visites ARS, préparation aux contrôles, conformité réglementaire et RGPD.",
    icon: ICONS.shield,
    pillar: "structuration",
    pillars: [
      { title: "Audit conformité", desc: "Revue documentaire et organisationnelle." },
      { title: "Projet de santé", desc: "Rédaction et mise à jour selon les attendus ARS." },
      { title: "Préparation aux visites", desc: "Coaching, dossier de visite, simulation." },
      { title: "RGPD et règlement intérieur", desc: "Politiques internes attendues." },
    ],
    metaTitle: "Conformité et projet de santé",
    metaDescription: "Mise en conformité et renouvellement du projet de santé, préparation à la visite ARS. On sécurise la conformité réglementaire de votre centre de santé.",
    keywords: ["projet de santé", "visite ARS", "conformité centre de santé"],
  },

  // ──────────── DÉVELOPPEMENT ────────────
  {
    slug: "developpement",
    name: "Développement et antennes",
    short: "Faire grandir un centre déjà en activité.",
    hero: "Accompagnement au développement : élargissement de l’offre de soins, ouverture d’antennes, structuration multi-sites, montée en charge financière.",
    icon: ICONS.rocket,
    pillar: "developpement",
    pillars: [
      { title: "Diagnostic stratégique", desc: "Analyse de la patientèle, des recettes, des marges de progression." },
      { title: "Élargissement de l’offre", desc: "Nouvelles spécialités, paramédical, télémédecine." },
      { title: "Ouverture d’antennes", desc: "Étude d’opportunité, structuration multi-sites, mutualisation." },
      { title: "Montée en charge financière", desc: "Articulation des financements existants et nouveaux." },
    ],
    metaTitle: "Développer un centre de santé",
    metaDescription: "Accompagnement au développement d'un centre de santé : élargissement de l'offre, ouverture d'antennes, structuration multi-sites et financement.",
    keywords: ["développer un centre de santé", "ouvrir une antenne"],
  },
  {
    slug: "recrutement-de-medecins",
    name: "Recrutement de médecins",
    short: "Sourcing via nos partenaires recruteurs, contrats, intégration et fidélisation.",
    hero: "Le recrutement de médecins est le premier frein au développement des centres de santé. Nous mobilisons nos partenariats avec des recruteurs spécialisés pour aller chercher vos praticiens, et nous sécurisons leur arrivée jusqu’à l’intégration.",
    icon: ICONS.user,
    pillar: "developpement",
    pillars: [
      { title: "Partenaires recruteurs spécialisés", desc: "Nous activons nos partenariats avec des recruteurs dédiés à la santé, avec leurs viviers de praticiens et leurs canaux de sourcing actifs." },
      { title: "Sourcing actif et présélection", desc: "Approche directe des médecins ciblés sur votre territoire, tri des candidatures, qualification. Vous ne recevez que des profils déjà filtrés." },
      { title: "Attractivité de votre centre", desc: "Nous structurons le discours qui fait venir un médecin : projet de santé, équipe, conditions d’exercice, atouts du salariat." },
      { title: "Contrats et rémunération", desc: "Statut salarié, package, clauses spécifiques au secteur des centres de santé." },
      { title: "Intégration et fidélisation", desc: "Onboarding, accompagnement des premières semaines, suivi dans la durée. Recruter ne suffit pas, il faut garder." },
    ],
    metaTitle: "Recrutement de médecins pour centres de santé",
    metaDescription: "Recrutement de médecins salariés via nos partenaires recruteurs : sourcing, attractivité, contrats, intégration. On vous aide à trouver vos praticiens.",
    keywords: ["recrutement médecin centre de santé", "médecin salarié", "trouver un médecin salarié", "recruter médecin CDS"],
  },
  {
    slug: "patientele-et-communication",
    name: "Patientèle et communication",
    short: "Référencement local, prise de RDV en ligne, communication territoriale.",
    hero: "Stratégie de patientèle et communication : référencement local, présence en ligne, prise de RDV, communication territoriale, fidélisation.",
    icon: ICONS.megaphone,
    pillar: "developpement",
    pillars: [
      { title: "Référencement local", desc: "Google, fiches d’établissement, présence locale." },
      { title: "Prise de RDV en ligne", desc: "Doctolib, Maiia, Keldoc : paramétrage et optimisation." },
      { title: "Communication territoriale", desc: "Relations institutionnelles, prescripteurs locaux." },
      { title: "Fidélisation patient", desc: "Parcours patient, satisfaction, rappels." },
    ],
    metaTitle: "Patientèle et communication pour centres de santé",
    metaDescription: "Référencement local, prise de rendez-vous en ligne, communication territoriale : on développe la patientèle et la visibilité de votre centre de santé.",
    keywords: ["communication centre de santé", "patientèle centre de santé"],
  },

  // ──────────── ACCOMPAGNEMENT / GESTION ────────────
  {
    slug: "conseil-en-organisation",
    name: "Conseil en organisation",
    short: "Process internes, gouvernance, flux patients, outils.",
    hero: "Conseil en organisation : process internes, gouvernance, flux patients, planification, coordination des équipes, outils métiers.",
    icon: ICONS.grid,
    pillar: "accompagnement",
    pillars: [
      { title: "Audit organisationnel", desc: "Cartographie des process et identification des points de friction." },
      { title: "Refonte des flux", desc: "Parcours patient, prise de RDV, accueil, facturation." },
      { title: "Gouvernance", desc: "Comité de direction, instances médicales, gouvernance partagée." },
      { title: "Outils métiers", desc: "Choix et déploiement des logiciels adaptés." },
    ],
    metaTitle: "Conseil en organisation pour centres de santé",
    metaDescription: "Conseil en organisation pour centre de santé : process, gouvernance, flux patients, planning et outils métiers. On fluidifie votre fonctionnement quotidien.",
    keywords: ["conseil organisation centre de santé"],
  },
  {
    slug: "comptabilite-gestion",
    name: "Comptabilité et gestion",
    short: "Tenue de gestion, paie, fiscalité adaptée au secteur.",
    hero: "Accompagnement comptable et financier pour centres de santé : tenue de gestion, suivi budgétaire, paie, fiscalité, reporting.",
    icon: ICONS.receipt,
    pillar: "accompagnement",
    pillars: [
      { title: "Tenue de gestion", desc: "Comptabilité analytique adaptée, ventilation par activité." },
      { title: "Pilotage budgétaire", desc: "Budget, prévisions de trésorerie, alertes." },
      { title: "Paie et social", desc: "Bulletins, DSN, attestations, conformité." },
      { title: "Fiscalité", desc: "Optimisation selon le statut juridique." },
      { title: "Reporting", desc: "Tableaux de bord pour la direction et les instances." },
    ],
    metaTitle: "Comptabilité et gestion d’un centre de santé",
    metaDescription: "Tenue de gestion, pilotage budgétaire, paie, fiscalité et reporting adaptés aux centres de santé. Une gestion saine et lisible, sans charge pour vos équipes.",
    keywords: ["comptabilité centre de santé", "gestion centre de santé"],
  },
  {
    slug: "optimisation-de-l-activite",
    name: "Pilotage de l’activité",
    short: "Indicateurs, cotation, qualité, satisfaction.",
    hero: "Pilotage de l’activité d’un centre de santé : tableaux de bord, suivi des indicateurs ACI et ROSP, cotation et facturation, qualité des soins.",
    icon: ICONS.chart,
    pillar: "accompagnement",
    pillars: [
      { title: "Tableaux de bord", desc: "Indicateurs d’activité, occupation, recettes par poste." },
      { title: "Cotation et facturation", desc: "Revue des cotations CCAM et NGAP, conformité." },
      { title: "Indicateurs forfaitaires", desc: "Pilotage des indicateurs ACI et ROSP." },
      { title: "Satisfaction patient", desc: "Recueil et analyse de la satisfaction." },
    ],
    metaTitle: "Pilotage de l’activité d’un centre de santé",
    metaDescription: "Pilotage de l'activité de votre centre de santé : tableaux de bord, cotation, indicateurs ACI et ROSP, satisfaction. On optimise vos recettes.",
    keywords: ["pilotage centre de santé", "indicateurs ACI"],
  },
  {
    slug: "achats-et-investissements",
    name: "Achats et investissements",
    short: "Cahiers des charges, négociation fournisseurs, financement.",
    hero: "Accompagnement aux achats et investissements : matériel médical, dentaire, informatique, immobilier. Cahiers des charges, négociation, financement.",
    icon: ICONS.truck,
    pillar: "accompagnement",
    pillars: [
      { title: "Cahiers des charges", desc: "Définir le bon besoin avant la consultation." },
      { title: "Sourcing fournisseurs", desc: "Consultation et comparaison sur le bon panel." },
      { title: "Négociation", desc: "Prix, conditions, SAV, formation." },
      { title: "Financement", desc: "Crédit-bail, location longue durée, prêts adaptés." },
    ],
    metaTitle: "Achats et investissements pour centres de santé",
    metaDescription: "Accompagnement aux achats et investissements : négociation fournisseurs et financement du matériel pour votre centre de santé. On optimise vos coûts.",
    keywords: ["achats centre de santé", "matériel centre de santé"],
  },
];

export const PILLARS: { id: Service["pillar"]; label: string; desc: string }[] = [
  { id: "financement", label: "Financement", desc: "Identification et mobilisation des financements et subventions." },
  { id: "structuration", label: "Structuration", desc: "Création, statuts juridiques, projet de santé, dossiers ARS." },
  { id: "developpement", label: "Développement", desc: "Recrutement, patientèle, ouverture d’antennes, croissance." },
  { id: "accompagnement", label: "Accompagnement", desc: "Gestion, organisation, pilotage de l’activité au quotidien." },
];
