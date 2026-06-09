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

  // ─────────────────────────────────────────────────────────────────────────
  // Calendrier éditorial : 30 articles programmés (1 par jour).
  // Chaque article ne devient visible qu'à partir de sa date (voir publishedPosts).
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "accord-national-centres-de-sante",
    title: "Accord national des centres de santé : ce qu’il structure",
    description:
      "L’accord national encadre les relations entre les centres de santé et l’Assurance Maladie. Rémunérations, engagements, dispositifs forfaitaires : ce qu’il faut comprendre.",
    date: "2026-06-07",
    readingTime: "4 min",
    category: "Conventionnement",
    content: `
<h2>Le cadre de référence des CDS</h2>
<p>L’accord national des centres de santé est le texte qui organise les relations entre les CDS conventionnés et l’Assurance Maladie. Il fixe les rémunérations, les engagements de chaque partie et les dispositifs financiers mobilisables.</p>
<h2>Plusieurs briques de rémunération</h2>
<p>Au-delà du paiement à l’acte, l’accord prévoit des forfaits liés à la structure, à la coordination et à la patientèle. Ces composantes évoluent au fil des avenants, ce qui rend leur suivi indispensable.</p>
<h2>Un suivi exigeant</h2>
<p>Beaucoup de centres ne mobilisent pas l’ensemble des dispositifs prévus, souvent par manque de temps pour suivre les évolutions réglementaires. C’est une source de financement laissée de côté.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit. Nous regardons quels dispositifs conventionnels votre centre mobilise déjà, et ceux qui restent à activer.</p>
`,
  },
  {
    slug: "conventionnement-centre-de-sante",
    title: "Conventionnement d’un centre de santé avec l’Assurance Maladie",
    description:
      "Le conventionnement ouvre l’accès aux financements de l’Assurance Maladie. Conditions, démarches et points d’attention pour un centre de santé.",
    date: "2026-06-08",
    readingTime: "3 min",
    category: "Conventionnement",
    content: `
<h2>Une étape déterminante</h2>
<p>Le conventionnement lie le centre de santé à l’Assurance Maladie et conditionne l’accès à la plupart des financements conventionnels. Sans lui, le modèle économique repose presque uniquement sur l’acte.</p>
<h2>Des engagements réciproques</h2>
<p>En contrepartie des financements, le centre s’engage sur l’accessibilité, le tiers payant et des objectifs de qualité. Ces engagements doivent être tenus dans la durée.</p>
<h2>Des financements à activer</h2>
<p>Le conventionnement ouvre droit à des forfaits et des dispositifs qui ne sont pas toujours réclamés dans leur totalité. Une revue régulière permet de sécuriser ces recettes.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de vérifier que votre conventionnement est pleinement valorisé.</p>
`,
  },
  {
    slug: "forfaits-structure-centre-de-sante",
    title: "Forfaits structure et d’équipe en centre de santé",
    description:
      "Les forfaits structure et d’équipe complètent le paiement à l’acte. Logique, conditions et raisons d’une sous-mobilisation fréquente.",
    date: "2026-06-09",
    readingTime: "3 min",
    category: "Financement",
    content: `
<h2>Au-delà de l’acte</h2>
<p>Les forfaits structure et d’équipe rémunèrent l’organisation du centre, sa coordination et son travail pluriprofessionnel. Ils représentent une part croissante du modèle économique des CDS.</p>
<h2>Des conditions précises</h2>
<p>Chaque forfait répond à des critères d’éligibilité et à des indicateurs à renseigner. La logique déclarative impose une organisation interne rigoureuse.</p>
<h2>Une valorisation incomplète</h2>
<p>Faute de temps ou d’outils, de nombreux centres ne déclarent pas l’ensemble des éléments qui leur ouvriraient droit à ces forfaits. Le manque à gagner est réel.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour évaluer la part de ces forfaits réellement perçue par votre centre.</p>
`,
  },
  {
    slug: "rosp-centre-de-sante",
    title: "ROSP en centre de santé : la rémunération sur objectifs",
    description:
      "La rémunération sur objectifs de santé publique concerne aussi les centres de santé. Principes, indicateurs et enjeux de pilotage.",
    date: "2026-06-10",
    readingTime: "3 min",
    category: "Financement",
    content: `
<h2>Une logique de résultats</h2>
<p>La rémunération sur objectifs de santé publique valorise l’atteinte d’indicateurs de prévention, de suivi des patients chroniques et d’organisation. Elle s’applique également en centre de santé.</p>
<h2>Des indicateurs à suivre</h2>
<p>Le niveau de rémunération dépend de la qualité du suivi et de la traçabilité des données. Un système d’information bien tenu fait une différence directe.</p>
<h2>Un levier souvent négligé</h2>
<p>Le pilotage de ces indicateurs demande du temps. Faute de ressources dédiées, beaucoup de centres laissent une partie de cette rémunération de côté.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’identifier les marges de progression sur ce dispositif.</p>
`,
  },
  {
    slug: "statut-juridique-centre-de-sante",
    title: "Statut juridique d’un centre de santé : quel choix",
    description:
      "Association, mutuelle, collectivité, SCIC : le statut juridique d’un centre de santé conditionne sa gouvernance, sa fiscalité et ses financements.",
    date: "2026-06-11",
    readingTime: "4 min",
    category: "Création",
    content: `
<h2>Un choix fondateur</h2>
<p>Le statut juridique d’un centre de santé détermine sa gouvernance, son régime fiscal, son cadre RH et les financements accessibles. C’est une décision qui engage durablement.</p>
<h2>Les formes les plus fréquentes</h2>
<ul>
  <li>Association loi 1901</li>
  <li>Centre porté par une collectivité territoriale</li>
  <li>Structure mutualiste</li>
  <li>Société coopérative d’intérêt collectif</li>
</ul>
<h2>Des conséquences financières</h2>
<p>Chaque statut ouvre ou ferme l’accès à certains dispositifs publics et conventionnels. Le choix doit être pensé en lien avec le plan de financement.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour articuler statut juridique et leviers de financement.</p>
`,
  },
  {
    slug: "projet-de-sante-centre-de-sante",
    title: "Le projet de santé d’un centre de santé",
    description:
      "Le projet de santé est la pierre angulaire d’un centre de santé. Contenu attendu, rôle auprès de l’ARS et lien avec le financement.",
    date: "2026-06-12",
    readingTime: "3 min",
    category: "Création",
    content: `
<h2>La colonne vertébrale du centre</h2>
<p>Le projet de santé décrit l’offre de soins, l’organisation et les engagements du centre envers son territoire. C’est le document de référence présenté à l’ARS.</p>
<h2>Un contenu structuré</h2>
<p>Il précise la patientèle visée, les coopérations, les actions de prévention et les modalités de continuité des soins. Sa qualité conditionne la crédibilité du projet.</p>
<h2>Un lien avec le financement</h2>
<p>Un projet de santé solide facilite la mobilisation des dispositifs publics et conventionnels. Il sert de socle aux demandes de financement.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de relier votre projet de santé aux financements mobilisables.</p>
`,
  },
  {
    slug: "centre-de-sante-cpts",
    title: "Centre de santé et CPTS : comment s’articuler",
    description:
      "Les centres de santé participent souvent aux communautés professionnelles territoriales de santé. Logique d’articulation et bénéfices attendus.",
    date: "2026-06-13",
    readingTime: "3 min",
    category: "Organisation",
    content: `
<h2>Deux échelles complémentaires</h2>
<p>Le centre de santé organise une offre de soins, la CPTS coordonne les acteurs d’un territoire. Les deux logiques se complètent plutôt qu’elles ne se concurrencent.</p>
<h2>Des coopérations concrètes</h2>
<p>Participer à une CPTS permet de partager des actions de prévention, d’organiser les parcours et de mutualiser certains moyens. Le centre y gagne en visibilité territoriale.</p>
<h2>Des financements dédiés</h2>
<p>Les actions menées dans ce cadre peuvent ouvrir droit à des financements spécifiques, distincts de ceux du centre lui-même.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour clarifier l’articulation entre votre centre et son territoire.</p>
`,
  },
  {
    slug: "recruter-medecins-salaries-centre-de-sante",
    title: "Recruter des médecins salariés en centre de santé",
    description:
      "Le modèle salarié attire de nombreux praticiens. Enjeux de recrutement, d’attractivité et d’équilibre économique pour un centre de santé.",
    date: "2026-06-14",
    readingTime: "4 min",
    category: "RH",
    content: `
<h2>Un modèle qui attire</h2>
<p>Le salariat séduit une partie croissante des praticiens, en quête de stabilité et de cadre. Les centres de santé en font un argument d’attractivité fort.</p>
<h2>Un équilibre à tenir</h2>
<p>Le coût salarial doit être couvert par l’activité et les financements mobilisés. L’équilibre repose sur une organisation efficace et une bonne valorisation des dispositifs.</p>
<h2>Fidéliser autant que recruter</h2>
<p>Attirer un médecin ne suffit pas. La qualité de l’organisation, des outils et de la coordination conditionne la fidélisation des équipes.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’examiner l’équilibre entre masse salariale et financements.</p>
`,
  },
  {
    slug: "centre-de-sante-ou-maison-de-sante",
    title: "Centre de santé ou maison de santé : les différences",
    description:
      "Centre de santé et maison de santé répondent à des logiques différentes. Statut des praticiens, financement et gouvernance comparés.",
    date: "2026-06-15",
    readingTime: "3 min",
    category: "Repères",
    content: `
<h2>Deux modèles distincts</h2>
<p>Le centre de santé repose sur des praticiens salariés et un gestionnaire. La maison de santé regroupe des professionnels libéraux autour d’un projet commun. Les deux cadres diffèrent profondément.</p>
<h2>Des financements différents</h2>
<p>Les dispositifs mobilisables ne sont pas les mêmes selon le modèle. Le centre de santé dispose de leviers conventionnels qui lui sont propres.</p>
<h2>Quel modèle pour quel projet</h2>
<p>Le choix dépend du territoire, des praticiens disponibles et des objectifs. Il mérite d’être tranché en connaissance de cause.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour clarifier le modèle le plus adapté à votre projet.</p>
`,
  },
  {
    slug: "tiers-payant-centre-de-sante",
    title: "Tiers payant en centre de santé : l’organiser",
    description:
      "Le tiers payant est une obligation et un enjeu de gestion en centre de santé. Organisation, suivi des rejets et impact sur la trésorerie.",
    date: "2026-06-16",
    readingTime: "3 min",
    category: "Gestion",
    content: `
<h2>Une obligation structurante</h2>
<p>Le tiers payant fait partie des engagements du centre de santé conventionné. Il facilite l’accès aux soins mais alourdit la gestion administrative.</p>
<h2>Le suivi des rejets</h2>
<p>Les factures rejetées non retraitées représentent une perte directe. Un suivi rigoureux des rejets et relances est essentiel à l’équilibre financier.</p>
<h2>Un impact sur la trésorerie</h2>
<p>Les délais de remboursement pèsent sur la trésorerie. Anticiper ces décalages fait partie d’une gestion saine.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de mesurer l’impact du tiers payant sur vos comptes.</p>
`,
  },
  {
    slug: "tresorerie-centre-de-sante",
    title: "Trésorerie d’un centre de santé : points de vigilance",
    description:
      "La trésorerie est un point sensible des centres de santé. Délais de remboursement, charges fixes et financements à mobiliser.",
    date: "2026-06-17",
    readingTime: "3 min",
    category: "Gestion",
    content: `
<h2>Un point de tension fréquent</h2>
<p>Entre charges fixes élevées et délais de remboursement, la trésorerie d’un centre de santé est souvent sous tension. La vigilance s’impose dès le démarrage.</p>
<h2>Anticiper les décalages</h2>
<p>Les recettes conventionnelles arrivent avec un décalage. Un plan de trésorerie réaliste permet d’éviter les mauvaises surprises.</p>
<h2>Mobiliser les bons leviers</h2>
<p>Des financements existent pour soutenir l’équilibre, mais ils sont parfois mobilisés trop tard. Les anticiper sécurise le modèle.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit de votre situation financière.</p>
`,
  },
  {
    slug: "indicateurs-pilotage-centre-de-sante",
    title: "Indicateurs de pilotage d’un centre de santé",
    description:
      "Piloter un centre de santé suppose de suivre quelques indicateurs clés. Activité, recettes, qualité : ce qu’il faut mesurer.",
    date: "2026-06-18",
    readingTime: "3 min",
    category: "Gestion",
    content: `
<h2>Mesurer pour décider</h2>
<p>Un pilotage efficace repose sur quelques indicateurs simples et suivis dans le temps. L’objectif n’est pas de tout mesurer, mais de mesurer l’essentiel.</p>
<h2>Les familles d’indicateurs</h2>
<ul>
  <li>Activité et patientèle</li>
  <li>Recettes par source de financement</li>
  <li>Taux de rejets de facturation</li>
  <li>Indicateurs de qualité et de prévention</li>
</ul>
<h2>Un outil de dialogue</h2>
<p>Ces indicateurs nourrissent le dialogue avec l’ARS, la gouvernance et les équipes. Ils donnent une lecture partagée de la situation.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de poser les bons indicateurs pour votre centre.</p>
`,
  },
  {
    slug: "role-ars-centre-de-sante",
    title: "Le rôle de l’ARS dans la vie d’un centre de santé",
    description:
      "L’agence régionale de santé est un interlocuteur clé des centres de santé. Autorisation, suivi et financements régionaux.",
    date: "2026-06-19",
    readingTime: "3 min",
    category: "Repères",
    content: `
<h2>Un interlocuteur central</h2>
<p>L’agence régionale de santé intervient à plusieurs étapes de la vie d’un centre, de l’ouverture au suivi de l’activité. C’est un partenaire à connaître et à entretenir.</p>
<h2>Un rôle de financeur</h2>
<p>L’ARS pilote des financements régionaux qui peuvent soutenir un centre de santé. Leur mobilisation suppose un dialogue construit et des dossiers solides.</p>
<h2>Une relation à cultiver</h2>
<p>La qualité de la relation avec l’ARS facilite l’accès aux dispositifs et la résolution des difficultés. Elle se construit dans la durée.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour identifier les financements régionaux mobilisables.</p>
`,
  },
  {
    slug: "aides-installation-zone-sous-dense",
    title: "Aides à l’installation en zone sous-dense",
    description:
      "Les zones sous-denses ouvrent droit à des aides spécifiques. Logique du zonage et dispositifs accessibles aux centres de santé.",
    date: "2026-06-20",
    readingTime: "3 min",
    category: "Financement",
    content: `
<h2>Le zonage comme point de départ</h2>
<p>Le classement d’un territoire en zone sous-dense conditionne l’accès à plusieurs aides. Connaître son zonage est un préalable utile.</p>
<h2>Des dispositifs ciblés</h2>
<p>Aides à l’installation, soutiens à l’exercice regroupé, appuis des collectivités : plusieurs leviers existent pour les centres implantés dans ces zones.</p>
<h2>Des opportunités à saisir</h2>
<p>Ces dispositifs sont parfois méconnus ou réclamés tardivement. Les identifier tôt permet d’en tirer pleinement parti.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de croiser votre implantation et les aides accessibles.</p>
`,
  },
  {
    slug: "fonds-intervention-regional-centre-de-sante",
    title: "Fonds d’intervention régional et centres de santé",
    description:
      "Le fonds d’intervention régional soutient des projets de santé. Logique, types de projets et lien avec les centres de santé.",
    date: "2026-06-21",
    readingTime: "3 min",
    category: "Financement",
    content: `
<h2>Un fonds au service des territoires</h2>
<p>Le fonds d’intervention régional permet aux agences régionales de santé de financer des projets favorisant l’accès aux soins et la coordination.</p>
<h2>Des projets variés</h2>
<p>Actions de prévention, organisation des parcours, soutien à des structures : les projets éligibles sont nombreux. Les centres de santé peuvent y trouver leur place.</p>
<h2>Un cadre exigeant</h2>
<p>L’accès à ces financements suppose des dossiers structurés et un dialogue avec l’ARS. La forme compte autant que le fond.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour évaluer la pertinence de ce levier pour votre centre.</p>
`,
  },
  {
    slug: "telemedecine-centre-de-sante",
    title: "Télémédecine en centre de santé",
    description:
      "La télémédecine s’intègre progressivement dans les centres de santé. Usages, cadre et conditions de valorisation.",
    date: "2026-06-22",
    readingTime: "3 min",
    category: "Organisation",
    content: `
<h2>Un usage qui se développe</h2>
<p>Téléconsultation et télé-expertise s’installent dans les pratiques des centres de santé. Bien intégrées, elles élargissent l’accès aux soins.</p>
<h2>Un cadre à respecter</h2>
<p>La télémédecine répond à des règles précises de réalisation et de facturation. Le respect du cadre conditionne la valorisation des actes.</p>
<h2>Un complément, pas un substitut</h2>
<p>La télémédecine complète l’activité présentielle sans la remplacer. Son intérêt dépend de l’organisation du centre et des besoins du territoire.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’évaluer la place de la télémédecine dans votre organisation.</p>
`,
  },
  {
    slug: "centre-de-sante-ophtalmologique",
    title: "Centre de santé ophtalmologique : spécificités",
    description:
      "Les centres de santé ophtalmologiques répondent à une forte demande. Organisation, délégation de tâches et modèle de financement.",
    date: "2026-06-23",
    readingTime: "3 min",
    category: "Spécialités",
    content: `
<h2>Une demande soutenue</h2>
<p>L’ophtalmologie connaît des délais d’accès élevés. Les centres de santé y apportent une réponse en structurant une offre accessible.</p>
<h2>La délégation de tâches</h2>
<p>Le travail aidé et la délégation entre professionnels permettent d’augmenter le nombre de patients pris en charge, dans un cadre encadré.</p>
<h2>Un modèle à équilibrer</h2>
<p>L’équipement et l’organisation représentent des coûts importants. Leur amortissement suppose une activité soutenue et des financements bien mobilisés.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit adapté à votre activité.</p>
`,
  },
  {
    slug: "centre-de-sante-infirmier",
    title: "Centre de santé infirmier : modèle et financement",
    description:
      "Les centres de santé infirmiers jouent un rôle clé dans les soins de proximité. Organisation, financement et enjeux de coordination.",
    date: "2026-06-24",
    readingTime: "3 min",
    category: "Spécialités",
    content: `
<h2>Des soins de proximité</h2>
<p>Les centres de santé infirmiers assurent une présence essentielle dans les territoires, notamment auprès des patients chroniques et dépendants.</p>
<h2>Un financement spécifique</h2>
<p>Leur modèle repose sur l’activité de soins et des dispositifs conventionnels propres. Leur équilibre demande une gestion attentive.</p>
<h2>La coordination au cœur</h2>
<p>La coordination avec les autres acteurs du territoire conditionne la qualité de la prise en charge et la continuité des soins.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’examiner l’équilibre de votre centre infirmier.</p>
`,
  },
  {
    slug: "coordination-centre-de-sante",
    title: "La fonction de coordination en centre de santé",
    description:
      "La coordination est un pilier du fonctionnement d’un centre de santé. Rôle, financement et impact sur la qualité des soins.",
    date: "2026-06-25",
    readingTime: "3 min",
    category: "Organisation",
    content: `
<h2>Un rôle souvent sous-estimé</h2>
<p>La coordination relie les professionnels, organise les parcours et fluidifie le fonctionnement quotidien. Son rôle est déterminant mais peu visible.</p>
<h2>Une fonction financée</h2>
<p>Des dispositifs conventionnels reconnaissent et financent la coordination. Encore faut-il les mobiliser et tracer l’activité correspondante.</p>
<h2>Un effet sur la qualité</h2>
<p>Une bonne coordination améliore la prise en charge des patients et la sérénité des équipes. C’est un investissement rentable.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour valoriser la coordination de votre centre.</p>
`,
  },
  {
    slug: "systeme-information-centre-de-sante",
    title: "Système d’information d’un centre de santé",
    description:
      "Le système d’information conditionne la facturation, le suivi et la valorisation des dispositifs. Enjeux pour un centre de santé.",
    date: "2026-06-26",
    readingTime: "3 min",
    category: "Gestion",
    content: `
<h2>Un outil structurant</h2>
<p>Le logiciel métier d’un centre de santé porte la facturation, le dossier patient et le suivi des indicateurs. Sa qualité influence directement les recettes.</p>
<h2>Données et financements</h2>
<p>De nombreux dispositifs reposent sur des données déclaratives. Un système d’information bien tenu sécurise leur valorisation.</p>
<h2>Un choix à ne pas négliger</h2>
<p>Le choix et le paramétrage de l’outil méritent du soin. Un système mal exploité fait perdre du temps et de l’argent.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’examiner l’usage que vous faites de votre système.</p>
`,
  },
  {
    slug: "reprise-centre-de-sante-difficulte",
    title: "Reprise d’un centre de santé en difficulté",
    description:
      "Reprendre un centre de santé fragilisé suppose un diagnostic précis. Trésorerie, organisation et financements à remobiliser.",
    date: "2026-06-27",
    readingTime: "4 min",
    category: "Développement",
    content: `
<h2>Un diagnostic d’abord</h2>
<p>Avant toute reprise, un diagnostic complet s’impose : trésorerie, organisation, recettes mobilisées et non mobilisées. Il conditionne la suite.</p>
<h2>Identifier les leviers</h2>
<p>Beaucoup de centres en difficulté ne mobilisent pas l’ensemble des financements auxquels ils ont droit. Les réactiver fait souvent partie du redressement.</p>
<h2>Un plan dans le temps</h2>
<p>Le redressement se construit par étapes, avec des objectifs réalistes. La précipitation est rarement bonne conseillère.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit de la situation à reprendre.</p>
`,
  },
  {
    slug: "aides-collectivites-centre-de-sante",
    title: "Aides des collectivités territoriales aux centres de santé",
    description:
      "Communes, départements et régions soutiennent les centres de santé. Types d’aides et conditions de mobilisation.",
    date: "2026-06-28",
    readingTime: "3 min",
    category: "Financement",
    content: `
<h2>Un soutien territorial</h2>
<p>Les collectivités voient dans les centres de santé un levier d’accès aux soins. Beaucoup soutiennent leur implantation et leur fonctionnement.</p>
<h2>Des formes variées</h2>
<p>Mise à disposition de locaux, subventions d’investissement, soutiens au fonctionnement : les aides prennent des formes diverses selon les territoires.</p>
<h2>Une mobilisation à construire</h2>
<p>Ces aides supposent un dialogue avec les élus et des dossiers argumentés. Le projet de santé sert souvent de point d’appui.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’identifier les soutiens locaux mobilisables.</p>
`,
  },
  {
    slug: "centre-de-sante-polyvalent",
    title: "Centre de santé polyvalent : organisation",
    description:
      "Le centre de santé polyvalent réunit plusieurs spécialités. Atouts, complexité de gestion et enjeux de financement.",
    date: "2026-06-29",
    readingTime: "3 min",
    category: "Repères",
    content: `
<h2>Plusieurs métiers sous un même toit</h2>
<p>Le centre polyvalent réunit médecine générale, soins spécialisés et parfois dentaire. Cette diversité répond largement aux besoins d’un territoire.</p>
<h2>Une gestion plus complexe</h2>
<p>La coexistence de plusieurs activités complexifie l’organisation, la facturation et le suivi. La rigueur de gestion devient déterminante.</p>
<h2>Des financements multiples</h2>
<p>Chaque activité ouvre droit à ses propres dispositifs. Les articuler suppose une vue d’ensemble que peu de centres ont le temps de construire.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit de votre centre polyvalent.</p>
`,
  },
  {
    slug: "fusion-centres-de-sante",
    title: "Fusion et regroupement de centres de santé",
    description:
      "Fusionner ou regrouper des centres de santé peut renforcer leur solidité. Logique, points de vigilance et effets sur le financement.",
    date: "2026-06-30",
    readingTime: "3 min",
    category: "Développement",
    content: `
<h2>Rechercher la solidité</h2>
<p>Le regroupement permet de mutualiser les moyens, de renforcer la gestion et de sécuriser le modèle économique. C’est une option de plus en plus envisagée.</p>
<h2>Des points de vigilance</h2>
<p>Gouvernance, statut RH, système d’information : un rapprochement soulève des questions concrètes qu’il faut traiter en amont.</p>
<h2>Un effet sur les financements</h2>
<p>Le périmètre issu d’un regroupement modifie l’accès à certains dispositifs. Anticiper ces effets fait partie d’une opération réussie.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’éclairer un projet de rapprochement.</p>
`,
  },
  {
    slug: "gestionnaire-centre-de-sante",
    title: "Le gestionnaire d’un centre de santé : ses missions",
    description:
      "Le gestionnaire assure le bon fonctionnement d’un centre de santé. Missions, compétences et place dans la valorisation des financements.",
    date: "2026-07-01",
    readingTime: "3 min",
    category: "RH",
    content: `
<h2>Un rôle central</h2>
<p>Le gestionnaire pilote le quotidien du centre : RH, facturation, relation avec les financeurs, suivi des indicateurs. C’est un poste clé.</p>
<h2>Des compétences larges</h2>
<p>La fonction demande des compétences de gestion, de droit social et de dialogue institutionnel. Elle est rarement facile à pourvoir.</p>
<h2>Un acteur de la performance</h2>
<p>Un bon gestionnaire sécurise les recettes et mobilise les financements disponibles. Son action a un effet direct sur l’équilibre du centre.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour appuyer votre gestionnaire sur les sujets de financement.</p>
`,
  },
  {
    slug: "qualite-centre-de-sante",
    title: "Qualité et amélioration continue en centre de santé",
    description:
      "La démarche qualité valorise un centre de santé et soutient certains financements. Principes et bénéfices concrets.",
    date: "2026-07-02",
    readingTime: "3 min",
    category: "Gestion",
    content: `
<h2>Une exigence croissante</h2>
<p>La qualité des soins et de l’organisation occupe une place grandissante. Elle conditionne la confiance des patients et de certains financeurs.</p>
<h2>Une démarche structurée</h2>
<p>Procédures, évaluation et amélioration continue forment le socle d’une démarche qualité. Elle se construit progressivement.</p>
<h2>Un lien avec le financement</h2>
<p>Plusieurs dispositifs valorisent les indicateurs de qualité. Une démarche bien tenue se traduit aussi en recettes.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de relier qualité et valorisation financière.</p>
`,
  },
  {
    slug: "modele-economique-centre-dentaire",
    title: "Modèle économique d’un centre de santé dentaire",
    description:
      "Le centre de santé dentaire combine forte activité et charges importantes. Équilibre, productivité et financements à mobiliser.",
    date: "2026-07-03",
    readingTime: "4 min",
    category: "Spécialités",
    content: `
<h2>Une activité intense</h2>
<p>Le dentaire se caractérise par une activité soutenue, des plateaux techniques coûteux et des enjeux RH spécifiques. L’équilibre y est exigeant.</p>
<h2>La productivité en question</h2>
<p>L’organisation des fauteuils, des plannings et du travail aidé influence directement le résultat. La marge d’optimisation est souvent réelle.</p>
<h2>Des financements à ne pas oublier</h2>
<p>Au-delà de l’acte, des dispositifs conventionnels existent et restent parfois sous-mobilisés. Les activer renforce l’équilibre.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit de votre centre dentaire.</p>
`,
  },
  {
    slug: "accessibilite-financiere-centre-de-sante",
    title: "Accessibilité financière et secteur 1 en centre de santé",
    description:
      "Les centres de santé pratiquent le secteur 1 et le tiers payant. Logique d’accessibilité et contreparties de financement.",
    date: "2026-07-04",
    readingTime: "3 min",
    category: "Repères",
    content: `
<h2>Un engagement d’accès aux soins</h2>
<p>Les centres de santé pratiquent les tarifs conventionnels et le tiers payant. L’accessibilité financière est au cœur de leur mission.</p>
<h2>Une contrepartie financière</h2>
<p>Cet engagement ouvre droit à des financements conventionnels qui soutiennent le modèle. L’accessibilité n’est donc pas qu’une contrainte.</p>
<h2>Un équilibre à tenir</h2>
<p>Maintenir l’accessibilité tout en assurant l’équilibre suppose de mobiliser pleinement les dispositifs disponibles.</p>
<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de vérifier cet équilibre dans votre centre.</p>
`,
  },
  {
    slug: "subventions-sous-mobilisees-centre-de-sante",
    title: "Subventions sous-mobilisées : pourquoi tant de centres passent à côté",
    description:
      "De nombreux centres de santé ne perçoivent pas toutes les aides auxquelles ils ont droit. Les raisons d’un phénomène courant.",
    date: "2026-07-05",
    readingTime: "3 min",
    category: "Subventions",
    content: `
<h2>Un constat répandu</h2>
<p>Une part importante des centres de santé ne mobilise pas l’ensemble des dispositifs auxquels ils sont éligibles. Le phénomène est plus courant qu’on ne le pense.</p>
<h2>Des causes connues</h2>
<ul>
  <li>Manque de temps des équipes</li>
  <li>Complexité administrative des démarches</li>
  <li>Méconnaissance de certains dispositifs</li>
  <li>Évolutions réglementaires fréquentes</li>
</ul>
<h2>Un enjeu d’équilibre</h2>
<p>Ces recettes non perçues pèsent sur l’équilibre des centres. Les récupérer ne demande pas toujours de transformer l’organisation, mais de regarder au bon endroit.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit de votre situation.</p>
`,
  },
  {
    slug: "optimiser-financement-centre-de-sante",
    title: "Optimiser le financement d’un centre de santé",
    description:
      "Optimiser le financement d’un centre de santé suppose une vue d’ensemble. Méthode, leviers et accompagnement.",
    date: "2026-07-06",
    readingTime: "4 min",
    category: "Financement",
    content: `
<h2>Partir d’une vue d’ensemble</h2>
<p>Optimiser le financement d’un centre de santé ne consiste pas à traiter chaque dispositif isolément, mais à les articuler dans une stratégie cohérente.</p>
<h2>Identifier les leviers</h2>
<p>Recettes conventionnelles, forfaits, subventions, aides locales : plusieurs leviers coexistent. L’enjeu est de savoir lesquels sont mobilisables et lesquels sont oubliés.</p>
<h2>Sécuriser dans la durée</h2>
<p>Une optimisation n’a de sens que si elle tient dans le temps. Le suivi régulier des dispositifs fait partie de la démarche.</p>
<h2>Pour aller plus loin</h2>
<p>Contactez-nous pour un check-up gratuit et une vue complète de vos leviers de financement.</p>
`,
  },
];

// Renvoie uniquement les articles dont la date de publication est atteinte.
// Le calendrier éditorial se révèle ainsi un article par jour, à chaque rebuild.
export function publishedPosts(now: Date = new Date()): Post[] {
  const today = now.toISOString().slice(0, 10);
  return posts.filter((p) => p.date <= today);
}

export function getPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return undefined;
  const today = new Date().toISOString().slice(0, 10);
  return post.date <= today ? post : undefined;
}
