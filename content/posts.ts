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
    slug: "modele-economique-centres-de-sante",
    title: "Le modèle économique des centres de santé : comprendre l’équilibre",
    description:
      "Comment se finance un centre de santé en France ? Articulation des rémunérations conventionnelles, dispositifs CPAM, ACI, FIR et aides publiques.",
    date: "2026-05-12",
    readingTime: "6 min",
    category: "Comprendre",
    content: `
<h2>Une structure fondamentalement différente d’un cabinet libéral</h2>
<p>Un centre de santé salarie ses soignants. C’est la principale différence avec une maison de santé pluriprofessionnelle (MSP), où les professionnels demeurent libéraux. Cette différence change tout : charges patronales, gestion administrative, gouvernance, et bien sûr, financement.</p>
<h2>Une mosaïque de recettes</h2>
<p>Les recettes d’un CDS proviennent de plusieurs sources : actes remboursables par l’Assurance Maladie, rémunérations forfaitaires (ACI, Forfait Structure, ROSP), financements publics (FIR, dotations ARS, aides des collectivités) et dispositifs spécifiques aux CDS, comme la subvention Teulade.</p>
<h2>Un équilibre fragile</h2>
<p>Le rapport IGAS 2025 sur le modèle économique des CDS pluriprofessionnels met en lumière la fragilité de cet équilibre. Beaucoup de centres ne mobilisent pas l’ensemble des leviers à leur disposition, parfois faute d’information, parfois faute de capacité d’instruction des dossiers.</p>
<h2>Un pilotage à organiser</h2>
<p>Sécuriser le modèle économique d’un CDS passe par une vision intégrée : cartographier les recettes, identifier les angles morts, prioriser les actions. C’est le sens de l’accompagnement que nous proposons.</p>
`,
  },
  {
    slug: "igas-2025-centres-de-sante",
    title: "Rapport IGAS 2025 : ce qu’il dit du financement des centres de santé",
    description:
      "Analyse du rapport IGAS de février 2025 sur l’évaluation du modèle économique des centres de santé pluriprofessionnels.",
    date: "2026-03-04",
    readingTime: "5 min",
    category: "Actualité",
    content: `
<h2>Un état des lieux attendu</h2>
<p>Publié en février 2025, le rapport de l’Inspection Générale des Affaires Sociales sur le modèle économique des centres de santé pluriprofessionnels propose un panorama fouillé du secteur. Il revient sur la diversité des modèles, leurs sources de financement et la viabilité économique des structures.</p>
<h2>Des dispositifs mal mobilisés</h2>
<p>Parmi les constats marquants, le rapport relève que plusieurs dispositifs anciens — dont la subvention prévue à l’article L162-32 du code de la sécurité sociale — sont insuffisamment mobilisés par les centres concernés. Près d’un quart des CDS interrogés déclaraient ne pas l’avoir perçue au titre de 2022.</p>
<h2>Des recommandations structurelles</h2>
<p>Le rapport plaide pour une simplification des procédures, une meilleure information des directions de CDS et une harmonisation des pratiques entre caisses départementales.</p>
<h2>Quelles conséquences pour les CDS ?</h2>
<p>En l’absence d’évolutions réglementaires immédiates, la responsabilité de mobiliser correctement les financements revient aux directions de CDS — accompagnées si besoin par des cabinets spécialisés.</p>
`,
  },
  {
    slug: "aci-comprendre-l-accord-conventionnel",
    title: "L’ACI : comprendre l’Accord Conventionnel Interprofessionnel",
    description:
      "Présentation du fonctionnement de l’Accord Conventionnel Interprofessionnel pour les structures pluriprofessionnelles, dont les centres de santé.",
    date: "2026-02-15",
    readingTime: "5 min",
    category: "Comprendre",
    content: `
<h2>Un accord cadre national</h2>
<p>L’ACI — Accord Conventionnel Interprofessionnel — est l’accord signé entre l’Assurance Maladie et les représentants des structures d’exercice coordonné, dont les centres de santé. Il définit les conditions de rémunération forfaitaire des structures éligibles.</p>
<h2>Une rémunération par points</h2>
<p>L’ACI fonctionne par points (1 point = 7 €). Une structure éligible cumule des points sur la base d’indicateurs socle (obligatoires) et optionnels (facultatifs), liés à la coordination, à l’accès aux soins, à la prévention et à la qualité de la prise en charge.</p>
<h2>Un dispositif cumulable</h2>
<p>L’ACI est cumulable avec les autres dispositifs propres aux CDS, sous réserve de ne pas financer deux fois la même mission. C’est précisément le point de vigilance que nous travaillons avec nos clients.</p>
<h2>Une mécanique à piloter</h2>
<p>L’atteinte des indicateurs n’est pas automatique. Elle suppose une démarche de pilotage tout au long de l’année : recueil des données, suivi des engagements, négociation annuelle avec la CPAM. Un accompagnement spécialisé permet d’en sécuriser le bénéfice.</p>
`,
  },
  {
    slug: "creer-centre-de-sante-2026",
    title: "Créer un centre de santé en 2026 : étapes, statuts, financements",
    description:
      "Guide général pour créer un centre de santé : étude de faisabilité, statuts juridiques, projet de santé, conventionnement CPAM.",
    date: "2026-01-20",
    readingTime: "7 min",
    category: "Création",
    content: `
<h2>Étape 1 — L’étude de faisabilité</h2>
<p>Diagnostic territorial via le zonage ARS, identification de la patientèle, modélisation économique. C’est l’étape qui valide la viabilité du projet.</p>
<h2>Étape 2 — Le statut juridique</h2>
<ul>
  <li><strong>Association loi 1901</strong> : souple, idéale pour porter un projet collectif.</li>
  <li><strong>SCIC</strong> : statut coopératif d’intérêt collectif, adapté aux projets territoriaux.</li>
  <li><strong>Centre municipal de santé</strong> : portage par une collectivité.</li>
  <li><strong>Mutuelle</strong> : portage mutualiste.</li>
</ul>
<h2>Étape 3 — Le projet de santé</h2>
<p>Document central exigé par l’ARS, il décrit l’organisation des soins, la coordination, la prévention, les protocoles, la gouvernance.</p>
<h2>Étape 4 — Le conventionnement CPAM</h2>
<p>Dossier transmis à la CPAM pour l’ouverture des droits aux remboursements et l’accès aux dispositifs conventionnels.</p>
<h2>Étape 5 — Construire le plan de financement</h2>
<p>L’architecture financière du futur CDS doit être pensée dès l’amont : recettes prévisionnelles, dispositifs mobilisables, calendrier d’activation. Sans cette anticipation, beaucoup de centres rencontrent des difficultés de trésorerie au cours des premières années.</p>
`,
  },
  {
    slug: "cds-vs-msp-bien-choisir",
    title: "Centre de santé ou maison de santé : bien choisir son modèle",
    description:
      "Comparaison entre CDS et MSP pour orienter le choix d’un projet d’exercice coordonné : gouvernance, fiscalité, financements, gouvernance.",
    date: "2025-12-10",
    readingTime: "6 min",
    category: "Comprendre",
    content: `
<h2>Deux logiques opposées</h2>
<p>Dans un CDS, les soignants sont salariés. Dans une MSP, ils restent libéraux mais exercent en équipe coordonnée. Tout en découle : statut du personnel, charges patronales, fiscalité, gouvernance, financement.</p>
<h2>Le critère décisif : qui porte le projet ?</h2>
<p>Si le projet est porté par une collectivité ou un opérateur souhaitant stabiliser durablement une offre de soins, le modèle CDS s’impose. S’il s’agit de coordonner des libéraux existants, la MSP est plus adaptée.</p>
<h2>Conséquences financières</h2>
<p>Le CDS dispose de dispositifs spécifiques (Teulade, accord national CDS) que la MSP n’a pas. À l’inverse, le CDS porte la charge salariale, ce qui suppose un volume d’activité suffisant et un pilotage administratif solide.</p>
<h2>Bien arbitrer dès le départ</h2>
<p>Le choix du modèle est structurant et difficile à modifier ensuite. Nous accompagnons les porteurs de projet dans cet arbitrage, en partant des objectifs et du contexte territorial.</p>
`,
  },
];
