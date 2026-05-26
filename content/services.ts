export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  pillars: { title: string; desc: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "creation-centre-de-sante",
    name: "Création de centre de santé",
    short: "De l’étude de faisabilité à l’ouverture conventionnée.",
    hero: "Accompagnement complet pour créer un centre de santé : étude territoriale, statut juridique, projet de santé, dossier ARS, conventionnement CPAM, plan de financement.",
    pillars: [
      { title: "Étude de faisabilité", desc: "Diagnostic territorial via le zonage ARS, modélisation économique, validation du périmètre." },
      { title: "Constitution juridique", desc: "Choix du statut (association loi 1901, SCIC, SCM, centre municipal, mutualiste) et formalités." },
      { title: "Projet de santé", desc: "Rédaction du document central exigé par l’ARS : organisation des soins, gouvernance, protocoles." },
      { title: "Conventionnement CPAM", desc: "Dossier d’ouverture des droits aux remboursements et accès aux dispositifs conventionnels." },
      { title: "Plan de financement", desc: "Architecture des recettes prévisionnelles, identification des aides à l’installation et des cofinancements." },
    ],
    metaTitle: "Créer un centre de santé : accompagnement complet (CDS, ARS, CPAM)",
    metaDescription: "Création d’un centre de santé clés en main : étude de faisabilité, statut juridique, projet de santé, dossier ARS, conventionnement CPAM, plan de financement.",
    keywords: ["créer un centre de santé", "création CDS", "ouvrir un centre de santé", "projet de santé CDS", "conventionnement CPAM"],
  },
  {
    slug: "developpement-cds",
    name: "Développement d’un CDS existant",
    short: "Faire grandir un centre de santé en activité.",
    hero: "Accompagnement au développement d’un centre de santé déjà ouvert : structuration RH, élargissement de l’offre de soins, ouverture d’antennes, montée en charge des financements.",
    pillars: [
      { title: "Diagnostic stratégique", desc: "Analyse de la patientèle, des recettes, de la concurrence et des marges de progression." },
      { title: "Élargissement de l’offre", desc: "Ouverture de nouvelles spécialités, intégration paramédicale, télémédecine." },
      { title: "Ouverture d’antennes", desc: "Étude d’opportunité, structuration multi-sites, mutualisation administrative." },
      { title: "Structuration RH", desc: "Recrutement médical, ingénierie contractuelle, attractivité salariale." },
      { title: "Montée en charge des financements", desc: "Optimisation ACI, FIR, dispositifs CPAM, aides régionales." },
    ],
    metaTitle: "Développer un centre de santé : ouverture d’antennes, RH, offre de soins",
    metaDescription: "Accompagnement au développement d’un centre de santé : élargissement de l’offre, ouverture d’antennes, structuration RH, optimisation financière.",
    keywords: ["développer un centre de santé", "agrandir un CDS", "ouvrir une antenne CDS", "RH centre de santé"],
  },
  {
    slug: "comptabilite-cds",
    name: "Optimisation comptable & gestion",
    short: "Pilotage budgétaire, paie, URSSAF, fiscalité — adapté aux CDS.",
    hero: "Accompagnement comptable et financier sur-mesure pour les centres de santé : tenue de gestion, suivi budgétaire, paie URSSAF, fiscalité, rapprochement avec les financements CPAM et ARS.",
    pillars: [
      { title: "Tenue de gestion", desc: "Comptabilité analytique adaptée aux CDS, ventilation par activité, suivi mensuel." },
      { title: "Pilotage budgétaire", desc: "Construction et suivi du budget, alertes, prévisions de trésorerie." },
      { title: "Paie & URSSAF", desc: "Suivi des bulletins, DSN, attestations URSSAF, conformité." },
      { title: "Fiscalité spécifique", desc: "Optimisation fiscale tenant compte du statut juridique (association, mutuelle, SCIC, public)." },
      { title: "Reporting & gouvernance", desc: "Tableaux de bord pour la direction et les administrateurs." },
    ],
    metaTitle: "Comptabilité & gestion d’un centre de santé — pilotage adapté CDS",
    metaDescription: "Tenue de gestion, pilotage budgétaire, paie URSSAF, fiscalité : un accompagnement comptable conçu spécifiquement pour les centres de santé.",
    keywords: ["comptabilité centre de santé", "gestion CDS", "URSSAF centre de santé", "paie CDS", "comptable CDS"],
  },
  {
    slug: "dossier-ars",
    name: "Montage d’un dossier ARS",
    short: "Élaboration, dépôt et suivi de vos dossiers ARS.",
    hero: "Accompagnement pour le montage et le suivi de dossiers ARS : ouverture, renouvellement, financements FIR, mise en conformité, projets territoriaux.",
    pillars: [
      { title: "Diagnostic des attendus ARS", desc: "Lecture fine des appels à projets et des critères d’évaluation de votre ARS." },
      { title: "Rédaction du dossier", desc: "Projet structuré, indicateurs, budget, gouvernance — calibré pour l’ARS concernée." },
      { title: "Annexes financières", desc: "Construction du plan de financement, articulation avec les autres dispositifs (ACI, FIR, collectivités)." },
      { title: "Dépôt & relances", desc: "Suivi administratif jusqu’à la décision de financement." },
      { title: "Reporting post-octroi", desc: "Préparation des bilans intermédiaires et finaux exigés par l’ARS." },
    ],
    metaTitle: "Monter un dossier ARS pour un centre de santé — accompagnement",
    metaDescription: "Montage de dossier ARS clé en main : rédaction du projet, annexes financières, dépôt, suivi et reporting. Spécialiste des appels à projets ARS pour CDS.",
    keywords: ["dossier ARS centre de santé", "appel à projets ARS", "FIR centre de santé", "dossier ARS CDS"],
  },
  {
    slug: "conventionnement-cpam",
    name: "Conventionnement CPAM",
    short: "Ouverture, renouvellement et gestion conventionnelle avec la CPAM.",
    hero: "Accompagnement pour la mise en place ou le renouvellement du conventionnement de votre centre de santé avec l’Assurance Maladie.",
    pillars: [
      { title: "Préparation du dossier", desc: "Vérification des prérequis, constitution des pièces, formalisation des engagements." },
      { title: "Interface avec la CPAM", desc: "Échanges techniques et juridiques avec votre caisse primaire." },
      { title: "Gestion conventionnelle", desc: "Avenants, mises à jour, suivi des évolutions de l’accord national." },
      { title: "Articulation avec l’ACI", desc: "Sécurisation de l’éligibilité à l’Accord Conventionnel Interprofessionnel." },
    ],
    metaTitle: "Conventionnement CPAM d’un centre de santé — accompagnement",
    metaDescription: "Accompagnement pour conventionner ou renouveler le conventionnement de votre CDS auprès de la CPAM : dossier, échanges, articulation avec l’ACI.",
    keywords: ["conventionnement CPAM CDS", "convention nationale centre de santé", "ACI centre de santé"],
  },
  {
    slug: "subventions-et-financements",
    name: "Subventions & financements",
    short: "Mobilisation de tous les dispositifs publics et conventionnels.",
    hero: "Cartographie et activation de l’ensemble des financements mobilisables par votre centre de santé : dispositifs CPAM, ARS, ACI, FIR, aides à l’installation, fonds collectivités.",
    pillars: [
      { title: "Cartographie des dispositifs", desc: "Identification de tous les financements auxquels votre CDS peut prétendre." },
      { title: "Mobilisation opérationnelle", desc: "Préparation et dépôt des dossiers, suivi auprès des organismes." },
      { title: "Dispositifs CDS spécifiques", desc: "Dont la subvention prévue à l’article L162-32 du code de la sécurité sociale (dite subvention Teulade)." },
      { title: "Optimisation pluriannuelle", desc: "Calendrier prévisionnel, articulation des dispositifs, sécurisation de la trésorerie." },
    ],
    metaTitle: "Subventions & financements d’un centre de santé — ACI, FIR, ARS, CPAM",
    metaDescription: "Mobilisation de toutes les subventions et financements d’un centre de santé : dispositifs CPAM (dont subvention Teulade), ACI, FIR, ARS, aides collectivités.",
    keywords: ["subventions centre de santé", "financements CDS", "subvention Teulade", "ACI", "FIR centre de santé"],
  },
  {
    slug: "audit-financier",
    name: "Audit financier 360°",
    short: "Diagnostic complet des recettes, charges et financements de votre CDS.",
    hero: "Audit financier confidentiel des centres de santé : vue d’ensemble des recettes, des coûts, des financements actuels et du potentiel non mobilisé.",
    pillars: [
      { title: "Analyse des recettes", desc: "FSE, tiers payant, forfaits, ROSP, financements conventionnels et publics." },
      { title: "Analyse des charges", desc: "Coût de la structure, rémunérations, charges sociales, immobilier." },
      { title: "Détection des angles morts", desc: "Identification des dispositifs financiers non mobilisés ou sous-optimisés." },
      { title: "Plan d’action chiffré", desc: "Priorisation, calendrier et estimation du potentiel récupérable." },
    ],
    metaTitle: "Audit financier d’un centre de santé — diagnostic 360°",
    metaDescription: "Audit financier 360° confidentiel pour centre de santé : analyse des recettes, charges, financements, identification du potentiel non mobilisé.",
    keywords: ["audit financier CDS", "audit centre de santé", "diagnostic financier CDS"],
  },
  {
    slug: "conformite-projet-de-sante",
    name: "Conformité & projet de santé",
    short: "Renouvellement du projet de santé, mise en conformité, visite ARS.",
    hero: "Mise à jour du projet de santé, accompagnement aux visites ARS, préparation aux contrôles, conformité réglementaire et RGPD.",
    pillars: [
      { title: "Audit conformité", desc: "Revue documentaire et organisationnelle de votre CDS." },
      { title: "Rédaction / mise à jour du projet de santé", desc: "Conforme aux attendus de l’ARS et de la convention nationale." },
      { title: "Préparation aux visites", desc: "Coaching, dossier de visite, dry-run." },
      { title: "RGPD & règlement intérieur", desc: "Mise en place des politiques internes attendues." },
    ],
    metaTitle: "Mise en conformité d’un centre de santé : projet de santé, visite ARS",
    metaDescription: "Mise en conformité d’un centre de santé : renouvellement du projet de santé, préparation de la visite ARS, conformité RGPD et règlement intérieur.",
    keywords: ["projet de santé CDS", "visite ARS centre de santé", "conformité CDS", "RGPD centre de santé"],
  },
];
