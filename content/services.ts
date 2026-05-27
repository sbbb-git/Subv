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
    short: "De l’étude de faisabilité à l’ouverture.",
    hero: "Accompagnement complet pour créer un centre de santé : étude territoriale, statut juridique, projet de santé, dossier ARS, plan de financement.",
    pillars: [
      { title: "Étude de faisabilité", desc: "Diagnostic territorial, zonage ARS, modélisation économique, validation du périmètre." },
      { title: "Constitution juridique", desc: "Choix du statut (association, SCIC, SCM, mutualiste, public) et formalités." },
      { title: "Projet de santé", desc: "Rédaction du document exigé par l’ARS : organisation, gouvernance, protocoles." },
      { title: "Dossier ARS", desc: "Constitution du dossier d’ouverture, échanges avec l’agence régionale." },
      { title: "Plan de financement", desc: "Recettes prévisionnelles, identification des aides et cofinancements." },
    ],
    metaTitle: "Créer un centre de santé : accompagnement complet",
    metaDescription: "Création d’un centre de santé : étude de faisabilité, statut juridique, projet de santé, dossier ARS, plan de financement.",
    keywords: ["créer un centre de santé", "ouvrir un centre de santé", "projet de santé", "dossier ARS"],
  },
  {
    slug: "recrutement-de-medecins",
    name: "Recrutement de médecins",
    short: "Sourcer, attirer, recruter et fidéliser vos médecins.",
    hero: "Recrutement de médecins pour centres de santé : sourcing actif, ciblage, ingénierie contractuelle, attractivité salariale, intégration.",
    pillars: [
      { title: "Sourcing actif", desc: "Approche directe de médecins en exercice ou en fin d’études, ciblage territorial." },
      { title: "Marque employeur", desc: "Positionnement du centre, supports d’attractivité, présence sur les canaux médicaux." },
      { title: "Ingénierie contractuelle", desc: "Statut salarié, package de rémunération, clauses spécifiques au secteur." },
      { title: "Intégration & fidélisation", desc: "Onboarding, parcours, animation de l’équipe médicale, fidélisation dans la durée." },
    ],
    metaTitle: "Recrutement de médecins pour centres de santé",
    metaDescription: "Recrutement de médecins salariés pour centres de santé : sourcing, attractivité, contrats, intégration. Approche directe et durable.",
    keywords: ["recrutement médecin centre de santé", "recruter un médecin salarié", "médecin salarié centre de santé"],
  },
  {
    slug: "conseil-en-organisation",
    name: "Conseil en organisation",
    short: "Process, gouvernance, flux patients, planning.",
    hero: "Conseil en organisation des centres de santé : process internes, gouvernance, flux patients, planification, coordination des équipes.",
    pillars: [
      { title: "Audit organisationnel", desc: "Cartographie des process, identification des points de friction." },
      { title: "Refonte des flux", desc: "Parcours patient, prise de RDV, accueil, facturation, télétransmission." },
      { title: "Gouvernance", desc: "Comité de direction, comités médicaux, instances représentatives." },
      { title: "Outils & logiciels", desc: "Choix et déploiement des logiciels métiers (DPI, agenda, paie, comptabilité)." },
    ],
    metaTitle: "Conseil en organisation pour centres de santé",
    metaDescription: "Conseil en organisation des centres de santé : process, gouvernance, flux patients, planning, outils métiers.",
    keywords: ["conseil organisation centre de santé", "process centre de santé", "gouvernance CDS"],
  },
  {
    slug: "optimisation-de-l-activite",
    name: "Optimisation de l’activité",
    short: "Plus de patients, mieux soignés, mieux facturés.",
    hero: "Optimisation de l’activité d’un centre de santé : pilotage du taux d’occupation, cotation, facturation, amélioration des indicateurs.",
    pillars: [
      { title: "Pilotage de l’occupation", desc: "Analyse du planning, identification des plages sous-utilisées, équilibrage." },
      { title: "Cotation & facturation", desc: "Revue des cotations CCAM/NGAP, optimisation conforme au cadre conventionnel." },
      { title: "Indicateurs de qualité", desc: "Pilotage des indicateurs ROSP, ACI, satisfaction patient." },
      { title: "Reporting", desc: "Tableaux de bord clairs pour la direction et les équipes." },
    ],
    metaTitle: "Optimisation de l’activité d’un centre de santé",
    metaDescription: "Optimisation de l’activité d’un centre de santé : pilotage de l’occupation, cotation, facturation, indicateurs ACI et ROSP.",
    keywords: ["optimisation activité centre de santé", "cotation centre de santé", "indicateurs ACI"],
  },
  {
    slug: "developpement",
    name: "Développement & ouverture d’antennes",
    short: "Faire grandir un centre déjà en activité.",
    hero: "Accompagnement au développement d’un centre de santé existant : élargissement de l’offre, ouverture d’antennes, structuration multi-sites.",
    pillars: [
      { title: "Diagnostic stratégique", desc: "Analyse de la patientèle, des recettes, des marges de progression." },
      { title: "Élargissement de l’offre", desc: "Ouverture de spécialités, intégration paramédicale, télémédecine." },
      { title: "Ouverture d’antennes", desc: "Étude d’opportunité, structuration multi-sites, mutualisation administrative." },
      { title: "Montée en charge financière", desc: "Articulation des financements existants avec les nouveaux." },
    ],
    metaTitle: "Développer un centre de santé : antennes, offre, RH",
    metaDescription: "Développement d’un centre de santé : élargissement de l’offre, ouverture d’antennes, structuration RH, montée en charge financière.",
    keywords: ["développer un centre de santé", "ouvrir une antenne", "agrandir un centre de santé"],
  },
  {
    slug: "comptabilite-gestion",
    name: "Comptabilité & gestion",
    short: "Pilotage budgétaire, paie, fiscalité — adapté au secteur.",
    hero: "Accompagnement comptable et financier sur-mesure pour les centres de santé : tenue de gestion, suivi budgétaire, paie, fiscalité.",
    pillars: [
      { title: "Tenue de gestion", desc: "Comptabilité analytique, ventilation par activité, suivi mensuel." },
      { title: "Pilotage budgétaire", desc: "Budget, alertes, prévisions de trésorerie." },
      { title: "Paie & social", desc: "Suivi des bulletins, DSN, attestations, conformité." },
      { title: "Fiscalité", desc: "Optimisation tenant compte du statut (association, mutuelle, SCIC, public)." },
      { title: "Reporting", desc: "Tableaux de bord pour la direction et les administrateurs." },
    ],
    metaTitle: "Comptabilité et gestion d’un centre de santé",
    metaDescription: "Tenue de gestion, pilotage budgétaire, paie, fiscalité : un accompagnement comptable conçu pour les centres de santé.",
    keywords: ["comptabilité centre de santé", "gestion centre de santé", "paie centre de santé"],
  },
  {
    slug: "dossier-ars",
    name: "Dossier ARS",
    short: "Élaboration, dépôt et suivi de vos dossiers ARS.",
    hero: "Accompagnement pour le montage et le suivi de dossiers ARS : ouverture, renouvellement, financements, mise en conformité.",
    pillars: [
      { title: "Diagnostic des attendus", desc: "Lecture des appels à projets, critères d’évaluation par ARS." },
      { title: "Rédaction du dossier", desc: "Projet structuré, indicateurs, budget, gouvernance — calibré pour l’ARS." },
      { title: "Annexes financières", desc: "Plan de financement, articulation avec FIR, ACI, collectivités." },
      { title: "Dépôt & relances", desc: "Suivi administratif jusqu’à la décision." },
      { title: "Reporting post-octroi", desc: "Bilans intermédiaires et finaux exigés par l’ARS." },
    ],
    metaTitle: "Monter un dossier ARS pour un centre de santé",
    metaDescription: "Montage de dossier ARS clé en main : rédaction, annexes financières, dépôt, suivi et reporting.",
    keywords: ["dossier ARS centre de santé", "appel à projets ARS", "FIR centre de santé"],
  },
  {
    slug: "subventions-et-financements",
    name: "Subventions & financements",
    short: "Mobilisation de l’ensemble des dispositifs publics et conventionnels.",
    hero: "Cartographie et activation de l’ensemble des financements mobilisables par votre centre de santé : ACI, FIR, dispositifs spécifiques, aides à l’installation, fonds collectivités.",
    pillars: [
      { title: "Cartographie des dispositifs", desc: "Identification de tous les financements auxquels votre centre peut prétendre." },
      { title: "Mobilisation opérationnelle", desc: "Préparation et dépôt des dossiers, suivi auprès des organismes." },
      { title: "Subvention Teulade", desc: "Dispositif spécifique aux centres de santé conventionnés (article L162-32 du code de la sécurité sociale)." },
      { title: "Optimisation pluriannuelle", desc: "Calendrier, articulation des dispositifs, sécurisation de la trésorerie." },
    ],
    metaTitle: "Subventions et financements d’un centre de santé",
    metaDescription: "Mobilisation des subventions et financements d’un centre de santé : ACI, FIR, subvention Teulade, aides à l’installation, fonds collectivités.",
    keywords: ["subventions centre de santé", "financements centre de santé", "subvention Teulade", "ACI", "FIR"],
  },
  {
    slug: "audit-financier",
    name: "Audit financier",
    short: "Diagnostic complet de vos recettes et financements.",
    hero: "Audit financier confidentiel pour centres de santé : vue d’ensemble des recettes, des coûts, des financements actuels et du potentiel non mobilisé.",
    pillars: [
      { title: "Analyse des recettes", desc: "Actes, tiers payant, forfaits, ROSP, financements conventionnels et publics." },
      { title: "Analyse des charges", desc: "Structure, rémunérations, charges sociales, immobilier." },
      { title: "Détection des angles morts", desc: "Identification des dispositifs non mobilisés ou sous-optimisés." },
      { title: "Plan d’action chiffré", desc: "Priorisation, calendrier, potentiel récupérable estimé." },
    ],
    metaTitle: "Audit financier d’un centre de santé",
    metaDescription: "Audit financier confidentiel pour centre de santé : analyse des recettes, charges, financements, potentiel non mobilisé.",
    keywords: ["audit financier centre de santé", "diagnostic financier centre de santé"],
  },
  {
    slug: "conformite-projet-de-sante",
    name: "Conformité & projet de santé",
    short: "Renouvellement, mise en conformité, visites ARS.",
    hero: "Mise à jour du projet de santé, accompagnement aux visites ARS, préparation aux contrôles, conformité réglementaire et RGPD.",
    pillars: [
      { title: "Audit conformité", desc: "Revue documentaire et organisationnelle." },
      { title: "Projet de santé", desc: "Rédaction et mise à jour selon les attendus de l’ARS." },
      { title: "Préparation aux visites", desc: "Coaching, dossier de visite, simulation." },
      { title: "RGPD & règlement intérieur", desc: "Politiques internes attendues." },
    ],
    metaTitle: "Conformité et projet de santé d’un centre de santé",
    metaDescription: "Mise en conformité, renouvellement du projet de santé, préparation à la visite ARS, RGPD.",
    keywords: ["projet de santé", "visite ARS", "conformité centre de santé"],
  },
];
