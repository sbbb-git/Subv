export type CdsType = {
  slug: string;
  name: string;
  longName: string;
  short: string;
  intro: string;
  /**
   * Corps éditorial de la page, en HTML BRUT injecté via
   * dangerouslySetInnerHTML. Utiliser <h2>, <p>, <ul>, <a href>, jamais <Link>.
   *
   * Optionnel : en son absence, la page retombe sur un bloc générique. Ce
   * bloc étant strictement identique sur les 8 typologies, il constitue du
   * contenu dupliqué. Renseigner `body` est donc la voie normale.
   */
  body?: string;
};

export const cdsTypes: CdsType[] = [
  {
    slug: "medical",
    name: "Centre de santé médical",
    longName: "Centre de santé médical",
    short: "Centres salariant des médecins généralistes ou spécialistes.",
    intro:
      "Les centres de santé médicaux salarient des médecins. Leur équilibre économique repose sur l’articulation entre rémunérations conventionnelles, dispositifs forfaitaires et financements publics. Plusieurs subventions spécifiques peuvent être mobilisées.",
    body: `<h2>Un gestionnaire, des médecins salariés, une responsabilité partagée</h2>
<p>Ce qui distingue le centre de santé médical du cabinet de ville n’est pas la pratique, c’est la structure. Le médecin n’y est pas exploitant : il est salarié. Un gestionnaire, association, collectivité, mutuelle ou autre organisme à but non lucratif, porte la responsabilité juridique, emploie l’équipe et engage la conformité du centre auprès de l’agence régionale de santé. Le centre pratique le tiers payant et les tarifs opposables. Cette dissociation commande tout le reste du modèle : la structure supporte des charges fixes qu’un libéral ne connaît pas, salaires, cotisations, secrétariat, locaux, informatique, et ne peut les ajuster d’un mois sur l’autre. Le choix du porteur se joue donc tôt, comme nous l’expliquons sur le <a href="/ressources/statut-juridique-centre-de-sante">statut juridique du centre de santé</a>.</p>

<h2>Des recettes à plusieurs étages, rarement toutes mobilisées</h2>
<p>La facturation à l’acte reste le socle des produits d’un centre médical, mais elle ne couvre presque jamais à elle seule le coût employeur d’un médecin. S’y ajoutent les dispositifs prévus par l’<a href="/ressources/accord-national-centres-de-sante">accord national des centres de santé</a> : rémunération liée à la structure, valorisation de la patientèle médecin traitant, rémunération sur objectifs de santé publique. Ces lignes ne tombent pas seules. Elles supposent des déclarations dans les délais, des indicateurs suivis toute l’année et un système d’information bien paramétré. Beaucoup de centres les sous-déclarent faute d’une personne chargée du sujet, alors qu’il s’agit de recettes déjà acquises sur le papier. Les <a href="/ressources/forfaits-structure-centre-de-sante">forfaits structure</a> et la <a href="/ressources/rosp-centre-de-sante">ROSP</a> méritent à eux seuls un pilotage dédié.</p>

<h2>Le temps médical, première contrainte du modèle</h2>
<p>Un centre médical vaut par le temps médical qu’il parvient à installer durablement. La difficulté n’est pas seulement de trouver un généraliste ou un spécialiste, elle est de proposer un cadre qui tienne dans la durée. Niveau et structure de la rémunération, déchargement des tâches administratives, appui d’un secrétariat, qualité du logiciel métier : ces éléments pèsent autant que le salaire affiché lors d’un entretien. Nos ressources sur le <a href="/ressources/contrat-medecin-salarie-centre-de-sante">contrat du médecin salarié</a> et notre offre de <a href="/services/recrutement-de-medecins">recrutement de médecins</a> traitent ces deux volets. Un poste vacant plusieurs mois dégrade immédiatement le résultat, puisque les charges de structure continuent de courir sans recette en face.</p>

<h2>Trois difficultés qui reviennent</h2>
<p>La première est un dimensionnement irréaliste au démarrage : un nombre de praticiens insuffisant pour absorber les charges fixes du projet. La deuxième est une facturation dégradée, avec des rejets non retraités, des actes non cotés ou un suivi lacunaire du tiers payant. La troisième est l’absence de pilotage des recettes conventionnelles, personne n’en ayant la charge dans l’équipe. Elles se corrigent, mais supposent un diagnostic chiffré plutôt que des impressions, ce que permet un <a href="/services/audit-financier">audit financier</a> appuyé sur des <a href="/ressources/indicateurs-pilotage-centre-de-sante">indicateurs de pilotage</a> stables.</p>

<h2>Les financements qui concernent ce type de centre</h2>
<p>Un centre médical peut selon sa situation solliciter des aides à l’installation en zone sous-dense, des crédits régionaux, des soutiens de collectivités et, s’il en remplit les conditions, la <a href="/subvention-teulade">subvention Teulade</a> prévue à l’article L162-32 du code de la sécurité sociale. Nous n’en exposons ici ni la méthode ni la procédure : l’éligibilité et le montage s’apprécient dossier par dossier, sur pièces. Le panorama général des dispositifs est présenté sur notre page <a href="/financements">financements</a>.</p>

<h2>Ce que nous faisons pour un centre médical</h2>
<p>Opti-CDS intervient sur le modèle avant d’intervenir sur les formulaires. Nous reprenons la structure des recettes, vérifions ce qui est facturé et ce qui ne l’est pas, mesurons le coût réel d’une vacation, puis identifions les financements accessibles. Selon les cas, la suite prend la forme d’un travail sur l’<a href="/services/optimisation-de-l-activite">optimisation de l’activité</a>, d’un appui au recrutement ou d’une remise à plat de l’organisation. Notre <a href="/accompagnement">accompagnement</a> se poursuit jusqu’à l’obtention effective des financements.</p>

<h2>Contactez-nous</h2>
<p>Si vous portez un centre de santé médical, en projet ou déjà ouvert, un premier échange situe votre modèle et vos marges de manoeuvre. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "dentaire",
    name: "Centre de santé dentaire",
    longName: "Centre de santé dentaire",
    short: "Centres dentaires salariant des chirurgiens-dentistes.",
    intro:
      "Les centres de santé dentaires emploient des chirurgiens-dentistes salariés. Leur modèle combine enjeux RH, productivité et cadre conventionnel exigeant. Comme tout centre de santé conventionné, ils peuvent bénéficier de plusieurs dispositifs de financement.",
    body: `<h2>Une typologie sous encadrement renforcé</h2>
<p>Le centre de santé dentaire est aujourd’hui la typologie la plus surveillée du secteur. Les dérives d’un petit nombre d’enseignes ont conduit le législateur à durcir les conditions d’ouverture et de fonctionnement : agrément préalable des activités dentaires par l’agence régionale de santé, dépôt d’un dossier complet avant toute ouverture, comité dentaire associant les praticiens, obligations de transparence sur la gouvernance et sur les liens capitalistiques du gestionnaire. Un porteur sérieux n’a rien à craindre de ce cadre, mais il doit le prendre au sérieux : un dossier incomplet ou un projet de santé mal écrit retarde l’ouverture et fragilise la relation avec l’autorité de tutelle. C’est l’objet de nos missions de <a href="/services/conformite-projet-de-sante">conformité et projet de santé</a> et d’appui au <a href="/services/dossier-ars">dossier ARS</a>.</p>

<h2>Un modèle économique à deux moteurs</h2>
<p>L’économie d’un centre dentaire ne ressemble à aucune autre typologie de centre de santé. Elle repose sur l’équilibre entre les soins conservateurs, très encadrés tarifairement, et les actes prothétiques, implantaires et orthodontiques, qui portent la marge. Le panier de soins sans reste à charge a rebattu les cartes de cet équilibre et impose de raisonner en mix d’activité plutôt qu’en volume brut. S’y ajoutent deux spécificités : un plateau technique lourd à amortir, fauteuils, radiologie, stérilisation, informatique métier, et une dépendance directe aux fournisseurs et au laboratoire de prothèse, dont le coût pèse sur chaque acte. Nous détaillons cette mécanique dans notre analyse du <a href="/ressources/modele-economique-centre-dentaire">modèle économique du centre dentaire</a>.</p>

<h2>Le fauteuil, unité de mesure de la performance</h2>
<p>La bonne question dans un centre dentaire n’est pas le nombre de patients vus, mais ce que produit chaque fauteuil chaque jour d’ouverture. Un fauteuil équipé qui reste inoccupé par manque de praticien, un planning percé par les rendez-vous non honorés, un binôme mal constitué entre praticien et assistante : ces trois situations coûtent bien plus que les postes sur lesquels on cherche habituellement à économiser. L’organisation du planning, la préparation des plans de traitement et le suivi des devis acceptés déterminent le résultat autant que le tarif des actes. C’est le terrain de nos missions de <a href="/services/conseil-en-organisation">conseil en organisation</a>.</p>

<h2>Recruter des chirurgiens-dentistes salariés</h2>
<p>Le recrutement dentaire obéit à ses propres règles. La rémunération se négocie souvent en lien avec l’activité produite, ce qui suppose un contrat clair et des règles de calcul incontestables. La stabilité du praticien conditionne la fidélisation de la patientèle, particulièrement sur les traitements longs, dont l’interruption en cours de plan génère des litiges et des devis abandonnés. Le poste d’assistante dentaire qualifiée est tout aussi structurant, et souvent le plus difficile à pourvoir. Toute rotation d’équipe se lit dans le chiffre du mois suivant.</p>

<h2>Trésorerie et investissement, les deux points de rupture</h2>
<p>Un centre dentaire consomme de la trésorerie avant d’en produire. L’investissement initial est lourd, la montée en charge progressive, et le décalage entre les encaissements et les charges peut mettre en tension un projet pourtant viable. Les difficultés que nous rencontrons le plus souvent tiennent à un plan d’investissement mal séquencé, à des conditions d’achat non négociées ou à un suivi de <a href="/ressources/tresorerie-centre-de-sante">trésorerie</a> trop tardif. Nos missions d’<a href="/services/achats-et-investissements">achats et investissements</a> portent précisément sur ces postes.</p>

<h2>Financements et intervention d’Opti-CDS</h2>
<p>Un centre dentaire conventionné accède à des dispositifs de soutien souvent ignorés de ses gestionnaires, présentés dans notre article sur les <a href="/ressources/subventions-centre-dentaire">subventions du centre dentaire</a> et sur notre page <a href="/financements">financements</a>. La <a href="/subvention-teulade">subvention Teulade</a> de l’article L162-32 peut concerner cette typologie, sous conditions que nous examinons dossier par dossier, sans exposer ici de méthode. Notre intervention part toujours des comptes et de l’organisation réelle du centre avant d’aborder le financement.</p>

<h2>Contactez-nous</h2>
<p>Que votre centre dentaire soit en cours d’agrément, en montée en charge ou en difficulté, un premier échange permet d’identifier les leviers disponibles. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "infirmier",
    name: "Centre de santé infirmier",
    longName: "Centre de santé infirmier (CSI)",
    short: "Centres infirmiers (CSI) et centres de soins infirmiers.",
    intro:
      "Les centres de santé infirmiers, souvent appelés CSI, salarient des IDE pour des soins à domicile ou au centre. Leur viabilité dépend de l’organisation et de la mobilisation des dispositifs financiers adaptés au secteur.",
    body: `<h2>Une histoire ancienne et un porteur presque toujours non lucratif</h2>
<p>Le centre de santé infirmier est la plus ancienne des typologies de centres de santé. Beaucoup de CSI sont nés de bureaux d’aide sociale, de congrégations, de mutuelles ou d’associations de quartier, et leur gestionnaire reste associatif, mutualiste ou communal. Cette filiation explique deux traits qui les caractérisent encore. Le premier est une forte implantation locale, avec une patientèle âgée, souvent dépendante. Le second est une gouvernance bénévole, engagée mais rarement outillée sur le plan financier, qui découvre les tensions du modèle une fois qu’elles sont installées. Notre article sur le <a href="/ressources/centre-de-sante-infirmier">centre de santé infirmier</a> revient sur ce cadre et sur les obligations communes à tous les centres conventionnés.</p>

<h2>Une économie de tournée, pas une économie de cabinet</h2>
<p>Le modèle du CSI se distingue radicalement de celui des centres médicaux ou dentaires. L’essentiel de l’activité se produit hors les murs, au domicile des patients, ce qui déplace le sujet économique du taux d’occupation vers l’organisation des tournées. Les recettes viennent de la nomenclature infirmière, actes techniques, soins d’hygiène, bilans de soins des patients dépendants, majorations de déplacement, auxquelles s’ajoutent les dispositifs conventionnels des centres de santé. Le poste de coût déterminant n’est pas le plateau technique mais le temps non facturable : trajets, coordination avec les médecins traitants, transmissions, véhicules et carburant. Un CSI dont les tournées sont mal sectorisées perd son résultat en kilomètres, sans que cela apparaisse dans le nombre d’actes réalisés.</p>

<h2>Salarier des infirmières face à l’exercice libéral</h2>
<p>La contrainte RH d’un CSI est particulière : il recrute sur un marché où l’exercice libéral offre généralement un revenu supérieur. L’argument du salariat se construit ailleurs, sur la sécurité de l’emploi, les horaires prévisibles, les congés, l’absence de gestion administrative individuelle et le travail en équipe. Encore faut-il que la promesse soit tenue au quotidien. Les plannings de week-end, la couverture des absences et la charge des soins lourds décident de la fidélisation des IDE. Une équipe stable coûte toujours moins cher qu’un recours répété au remplacement.</p>

<h2>Des marges étroites et des difficultés récurrentes</h2>
<p>Les CSI travaillent avec des marges structurellement faibles, ce qui rend chaque dysfonctionnement immédiatement visible. Les situations les plus fréquentes sont un logiciel de télégestion sous-exploité, avec des actes réalisés mais non facturés, une cotation prudente qui ne valorise pas la réalité du soin, un absentéisme absorbé par les collègues jusqu’à l’épuisement, ou une comptabilité tenue trop loin de la gestion courante. La <a href="/ressources/tresorerie-centre-de-sante">trésorerie</a> devient alors le seul indicateur regardé, ce qui est toujours un signal tardif. Un travail de fond sur l’organisation des tournées et sur la chaîne de facturation, tel que nous le menons en <a href="/services/conseil-en-organisation">conseil en organisation</a>, produit des effets plus rapides qu’une recherche isolée de subventions.</p>

<h2>Les financements adaptés au secteur infirmier</h2>
<p>Un CSI n’est pas exclu des dispositifs de soutien, contrairement à une idée répandue chez les gestionnaires associatifs. Il peut relever de crédits régionaux, d’<a href="/ressources/aides-collectivites-centre-de-sante">aides de collectivités</a> attachées au maintien à domicile, de financements liés à la <a href="/ressources/coordination-centre-de-sante">coordination</a> lorsqu’il s’inscrit dans un exercice en équipe, et le cas échéant de la <a href="/subvention-teulade">subvention Teulade</a> de l’article L162-32. Nous n’en détaillons ni le calcul ni la procédure : l’examen se fait sur pièces, centre par centre. La vue d’ensemble des dispositifs figure sur notre page <a href="/financements">financements</a>.</p>

<h2>Ce que nous apportons à un centre de soins infirmiers</h2>
<p>Opti-CDS travaille avec les CSI sur des sujets concrets : structurer la facturation, fiabiliser la cotation, revoir le découpage des tournées, remettre à niveau la gestion et redonner à la gouvernance des indicateurs lisibles. Ce diagnostic conditionne ensuite l’accès aux financements, qu’aucun organisme n’accorde à une structure dont les comptes ne sont pas tenus. Notre <a href="/accompagnement">accompagnement</a> couvre l’ensemble de cette chaîne.</p>

<h2>Contactez-nous</h2>
<p>Si votre centre de santé infirmier cherche à sécuriser son équilibre ou à financer son développement, nous en examinons les leviers avec vous. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "polyvalent",
    name: "Centre de santé polyvalent",
    longName: "Centre de santé polyvalent",
    short: "Centres associant plusieurs disciplines (médico-dentaire, etc.).",
    intro:
      "Les centres de santé polyvalents combinent plusieurs typologies de soins. Cette diversité offre un fort potentiel financier mais complexifie la gestion. Plusieurs subventions sont mobilisables en parallèle.",
    body: `<h2>Un seul centre, plusieurs métiers, un seul gestionnaire</h2>
<p>Le centre de santé polyvalent réunit sous une même structure juridique et un même agrément des activités qui, ailleurs, seraient portées par des entités distinctes : médecine générale, consultations spécialisées, soins dentaires, parfois actes paramédicaux. Cette réunion impose un projet de santé unique, une organisation capable de faire cohabiter des rythmes de travail très différents et une direction qui arbitre en permanence entre les besoins de chaque pôle. C'est cette dimension d'arbitrage, plus encore que la diversité des soins, qui fait la difficulté propre du polyvalent. Notre <a href="/ressources/centre-de-sante-polyvalent">article consacré au centre de santé polyvalent</a> revient sur ce cadre.</p>

<h2>Des recettes diversifiées, des économies hétérogènes</h2>
<p>La diversification est le premier atout du modèle. Les recettes ne dépendent pas d'une discipline unique, ce qui protège la structure lorsqu'un poste reste vacant. Mais chaque pôle possède sa propre économie. L'activité dentaire est capitalistique : fauteuils, imagerie, stérilisation, prothèses, consommables, amortissements lourds. L'activité médicale repose davantage sur le temps de consultation, les rémunérations conventionnelles et les dispositifs forfaitaires. Fondre ces logiques dans un compte de résultat unique revient à piloter sans instruments. Un pôle durablement déficitaire peut être financé à son insu par un pôle excédentaire, jusqu'à ce que la trésorerie révèle le problème. La mise en place d'une comptabilité analytique par activité, et des <a href="/ressources/indicateurs-pilotage-centre-de-sante">indicateurs de pilotage adaptés au centre de santé</a>, constitue le préalable à toute décision structurante.</p>

<h2>Le pilotage opérationnel, principal point de rupture</h2>
<p>Dans un centre polyvalent, la difficulté quotidienne se concentre sur l'accueil et les plannings. Le secrétariat est mutualisé alors que les compétences attendues diffèrent : gérer un agenda de médecine générale, un plan de traitement dentaire pluri-séances et un flux de spécialités ne mobilise pas les mêmes réflexes. Les taux d'occupation des salles et des fauteuils s'écartent, et les rendez-vous non honorés ne pèsent pas du même poids selon la discipline. Sans règles d'affectation des espaces, sans protocole de rappel des patients et sans supervision d'un coordinateur identifié, la polyvalence produit de la perte de temps médical plutôt que des synergies. Nos travaux de <a href="/services/conseil-en-organisation">conseil en organisation</a> portent en priorité sur ces circuits.</p>

<h2>Des enjeux RH démultipliés</h2>
<p>Le polyvalent emploie des professions dont les statuts, les grilles et les cultures de travail diffèrent : médecins salariés, chirurgiens-dentistes, assistantes dentaires, secrétaires médicales, personnel de coordination. La direction doit tenir plusieurs politiques salariales cohérentes entre elles, sans créer de sentiment d'inéquité interne. L'attractivité se joue également sur des critères distincts selon la discipline, ce que nous détaillons dans notre article sur le <a href="/ressources/recruter-medecins-salaries-centre-de-sante">recrutement de médecins salariés en centre de santé</a>. Une vacance prolongée sur un pôle déséquilibre immédiatement l'ensemble, puisque les charges fixes de structure restent réparties sur une activité réduite.</p>

<h2>Les financements qui concernent le plus cette typologie</h2>
<p>Un centre polyvalent peut relever de plusieurs dispositifs en parallèle, mais chacun possède son périmètre d'activité éligible et ses conditions propres. Le cumul n'est jamais automatique, et c'est précisément là que ces structures perdent des ressources : un dispositif est mobilisé pour une partie de l'activité seulement, un autre est ignoré parce qu'il est associé à tort à une typologie unique. La <a href="/subvention-teulade">subvention Teulade</a>, prévue par l'article L162-32 du code de la sécurité sociale, figure parmi les dispositifs concernés, au même titre que les aides des collectivités ou les financements régionaux présentés sur notre page <a href="/financements">financements des centres de santé</a>.</p>

<h2>Ce sur quoi Opti-CDS intervient</h2>
<p>Sur une structure polyvalente, notre travail commence par la séparation analytique des pôles et la reconstitution d'un compte de résultat lisible par activité. Nous examinons ensuite la couverture réelle des financements, les plannings et l'accueil, puis nous formalisons un plan d'action hiérarchisé, selon la démarche décrite sur notre page <a href="/accompagnement">accompagnement</a>.</p>

<h2>Contactez-nous</h2>
<p>Si votre centre polyvalent constate des écarts entre ses pôles sans parvenir à les expliquer, un premier échange permet d'identifier les points à traiter. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "pluriprofessionnel",
    name: "Centre de santé pluriprofessionnel",
    longName: "Centre de santé pluriprofessionnel",
    short: "Centres en équipe coordonnée éligibles à l’ACI.",
    intro:
      "Le centre de santé pluriprofessionnel répond aux critères de l’Accord Conventionnel Interprofessionnel : équipe coordonnée, projet de santé formalisé, salariés médicaux et paramédicaux. Il peut cumuler plusieurs dispositifs financiers spécifiques.",
    body: `<h2>Une typologie définie par un mode d'exercice, pas par une spécialité</h2>
<p>Le centre de santé pluriprofessionnel ne se caractérise ni par sa discipline dominante ni par son porteur juridique, qui peut être une association, une mutuelle, une collectivité ou un organisme à but non lucratif. Ce qui le définit, c'est la manière dont l'équipe travaille : des professionnels médicaux et paramédicaux salariés qui prennent en charge une même patientèle de façon coordonnée, sur la base d'un projet de santé écrit et opposable. Cette qualification ouvre l'accès à des rémunérations d'équipe prévues par l'Accord Conventionnel Interprofessionnel, versées à la structure et non aux praticiens à titre individuel. Autrement dit, la coordination cesse d'être une bonne intention pour devenir un objet contractuel, mesuré et rémunéré.</p>

<h2>Le projet de santé, pièce maîtresse et point de fragilité</h2>
<p>Beaucoup de structures possèdent un projet de santé rédigé lors de l'ouverture, puis jamais actualisé. Il décrit une organisation qui n'existe plus, des partenariats devenus caducs et des engagements que l'équipe ne tient pas. Or ce document est le socle de la qualification pluriprofessionnelle : il doit décrire les modalités concrètes de concertation, les protocoles partagés, les publics prioritaires et les liens avec les acteurs du territoire. Sa mise à jour n'est pas une formalité administrative, c'est une condition de maintien des droits. Nous traitons ce chantier au sein de notre mission de <a href="/services/conformite-projet-de-sante">conformité du projet de santé</a>, en articulation avec les exigences décrites dans notre article sur l'<a href="/ressources/accord-national-centres-de-sante">accord national des centres de santé</a>.</p>

<h2>Un modèle économique à deux étages</h2>
<p>Le premier étage reste l'activité de soins, facturée à l'acte et complétée par les dispositifs conventionnels applicables à chaque profession. Le second étage est propre à cette typologie : la rémunération d'équipe, conditionnée à l'atteinte d'indicateurs relatifs à l'accès aux soins, au travail en équipe et au système d'information partagé. Ce second étage a une conséquence de gestion souvent sous-estimée. Il rémunère des activités qui ne produisent aucun acte facturable : réunions de concertation, protocoles, coordination des parcours, temps de suivi. Ces heures doivent être identifiées dans les plannings et budgétées, sinon elles sont absorbées par le temps clinique et l'organisation perd sur les deux tableaux. Notre article sur la <a href="/ressources/coordination-centre-de-sante">coordination en centre de santé</a> détaille ces mécanismes.</p>

<h2>Des enjeux RH centrés sur la fonction de coordination</h2>
<p>La difficulté de recrutement ne porte pas seulement sur les professionnels de santé. Elle porte aussi sur le coordinateur, poste charnière dont dépend la production des indicateurs, l'animation des réunions et la traçabilité des actions dans le système d'information. Un centre pluriprofessionnel sans coordinateur stable finit par déclarer moins que ce qu'il fait réellement. S'y ajoute une question de gouvernance : faire adhérer des professions aux cultures différentes à des protocoles communs suppose un temps d'animation d'équipe que peu de structures formalisent.</p>

<h2>L'articulation avec le territoire</h2>
<p>Cette typologie est celle qui interagit le plus avec son environnement : établissements, services sociaux, professionnels libéraux, et le cas échéant communautés professionnelles territoriales de santé. Ces liens ne sont pas seulement stratégiques, ils sont valorisés dans le cadre conventionnel. Notre article sur les relations entre <a href="/ressources/centre-de-sante-cpts">centre de santé et CPTS</a> précise les points d'attention, notamment le risque de doublonner des missions déjà financées par ailleurs.</p>

<h2>Ce sur quoi Opti-CDS intervient</h2>
<p>Nous vérifions d'abord la cohérence entre ce que l'équipe pratique réellement et ce que la structure déclare, puis nous remettons à niveau le projet de santé, le système d'information et le suivi des indicateurs. Nous examinons ensuite les financements applicables, dont la subvention Teulade issue de l'article L162-32, dans le cadre de nos missions de <a href="/services/subventions-et-financements">subventions et financements</a>.</p>

<h2>Contactez-nous</h2>
<p>Si votre centre travaille en équipe coordonnée sans être certain de sécuriser l'ensemble de ses droits, un état des lieux permet de mesurer l'écart entre la pratique et le cadre conventionnel. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "municipal",
    name: "Centre municipal de santé",
    longName: "Centre municipal de santé (CMS)",
    short: "Centres portés par une commune ou une collectivité.",
    intro:
      "Les centres municipaux de santé sont portés par une collectivité territoriale. Leur gouvernance et leur statut RH spécifiques nécessitent un accompagnement adapté. Plusieurs financements publics et conventionnels peuvent venir compléter le budget de la collectivité.",
    body: `<h2>Un centre de santé dans le périmètre de la collectivité</h2>
<p>Le centre municipal de santé est géré par une commune, un centre communal d'action sociale ou un établissement public de coopération intercommunale. Cette appartenance change tout. La structure n'est pas une entité autonome qui décide seule : elle s'inscrit dans un budget public, relève d'un ordonnateur élu et d'un comptable public, et ses décisions engagent une assemblée délibérante. Le plus souvent, l'activité est isolée dans un budget annexe, ce qui donne une visibilité comptable réelle mais expose aussi le résultat au regard direct des élus, année après année. Un centre associatif discute avec son conseil d'administration. Un centre municipal, lui, discute avec un conseil municipal, une direction générale des services et une direction des finances, chacun avec ses propres critères d'appréciation.</p>

<h2>Une équation budgétaire lue comme une dépense publique</h2>
<p>Les recettes proviennent de l'activité de soins et des dispositifs conventionnels, comme dans toute structure conventionnée. La différence tient à ce qui complète : une participation d'équilibre versée par la collectivité, votée chaque année. Cette contribution est légitime, elle finance une mission d'accès aux soins que le marché ne couvre pas sur le territoire. Mais elle est aussi la ligne la plus scrutée du budget annexe, et la première interrogée lors d'un changement de mandature ou d'un exercice contraint. La question posée n'est jamais seulement financière, elle est politique : que produit ce centre pour la population, et à quel coût net. Une structure qui ne sait pas répondre à cette question avec ses propres chiffres se fragilise, même lorsque son activité est solide. Nous détaillons ces mécanismes dans notre article sur le <a href="/ressources/centre-municipal-de-sante-financement">financement d'un centre municipal de santé</a>.</p>

<h2>Un cadre RH contraint par le statut public</h2>
<p>Les praticiens sont généralement recrutés comme agents contractuels de droit public, dans un cadre de rémunération encadré et peu modulable. Face à des offres libérales ou à des employeurs privés plus souples, la collectivité dispose de marges de négociation réduites sur la seule rémunération. Son avantage se situe ailleurs : stabilité de l'emploi, absence de charge de gestion pour le praticien, qualité des conditions d'exercice, appui d'une équipe administrative. Encore faut-il construire et présenter cette proposition d'emploi de façon explicite, ce que peu de communes formalisent. Notre article sur le <a href="/ressources/recrutement-medecin-centre-municipal">recrutement d'un médecin en centre municipal</a> revient sur les leviers réellement mobilisables, y compris contractuels.</p>

<h2>Des contraintes de procédure qui pèsent sur la gestion</h2>
<p>L'achat d'un équipement, le renouvellement d'un logiciel métier ou le recours à un prestataire passent par les règles de la commande publique. La signature d'une convention peut nécessiter une délibération. Ces étapes sont normales, mais elles imposent d'anticiper très en amont, notamment lorsqu'un financement suppose un engagement dans un calendrier donné. Beaucoup d'occasions se perdent non par refus, mais par décalage entre le rythme d'un dispositif et celui d'une assemblée délibérante.</p>

<h2>Les financements qui concernent le plus les communes</h2>
<p>Un centre municipal peut mobiliser les dispositifs conventionnels applicables aux centres de santé, des soutiens régionaux, ainsi que des aides propres aux collectivités et aux territoires fragiles, présentées dans notre article sur les <a href="/ressources/aides-collectivites-centre-de-sante">aides des collectivités pour un centre de santé</a>. La subvention Teulade, fondée sur l'article L162-32 du code de la sécurité sociale, fait partie des ressources qui concernent également ces structures. Chaque dispositif obéit à des conditions distinctes, et leur articulation avec un budget annexe communal demande une lecture précise.</p>

<h2>Ce sur quoi Opti-CDS intervient</h2>
<p>Nous reconstruisons une lecture financière du centre exploitable par les services de la collectivité, à travers un <a href="/services/audit-financier">audit financier</a> adapté au cadre public, puis nous identifions les recettes non mobilisées et les leviers d'organisation disponibles. Nous accompagnons aussi les communes sur la présentation du dossier aux élus.</p>

<h2>Contactez-nous</h2>
<p>Si votre collectivité s'interroge sur le niveau de sa participation d'équilibre ou sur les ressources encore mobilisables pour son centre, un premier diagnostic apporte des réponses documentées. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "associatif",
    name: "Centre de santé associatif",
    longName: "Centre de santé associatif (loi 1901)",
    short: "Centres portés par une association loi 1901.",
    intro:
      "Les centres de santé associatifs représentent une grande partie du parc français. Souplesse de gouvernance, mais besoin fort de structuration administrative et de mobilisation des subventions disponibles.",
    body: `<h2>Un porteur associatif, une gouvernance à deux étages</h2>
<p>Le centre de santé associatif repose sur une association loi 1901 qui en est le gestionnaire juridique. Cette configuration crée une gouvernance à deux étages. D'un côté un conseil d'administration composé de bénévoles, souvent des habitants du territoire ou des représentants d'usagers. De l'autre une équipe salariée qui porte l'activité quotidienne et la relation avec les tutelles. Cette séparation ancre le centre dans sa commune, mais elle devient fragile lorsque les statuts, les délégations de signature et les règles de décision n'ont pas été revus depuis la création. Le <a href="/ressources/statut-juridique-centre-de-sante">statut juridique retenu</a> et sa mise à jour régulière conditionnent la capacité du centre à contracter, à embaucher et à répondre aux appels à projets.</p>
<h2>Un modèle économique sans filet de rattachement</h2>
<p>À la différence d'un centre porté par une collectivité ou par un groupe, le centre associatif ne dispose d'aucun budget de rattachement pour absorber un exercice déficitaire. Ses recettes proviennent de la facturation des actes, des forfaits conventionnels et des concours publics obtenus au fil des années. Le départ d'un praticien ou le retard de versement d'une aide se traduisent immédiatement en tension de <a href="/ressources/tresorerie-centre-de-sante">trésorerie</a>. La comptabilité associative, souvent tenue par un cabinet généraliste peu familier du secteur, ne restitue pas toujours la lecture analytique par ligne d'activité dont le conseil d'administration aurait besoin pour arbitrer.</p>
<h2>Des enjeux de ressources humaines propres au cadre associatif</h2>
<p>Les salariés d'un centre associatif relèvent d'une convention collective du secteur privé à but non lucratif. Les grilles, la reprise d'ancienneté et les régimes de temps de travail y diffèrent de ceux d'un centre municipal ou d'un centre de groupe. La question de la rémunération et de sa soutenabilité devient centrale, en particulier pour le <a href="/ressources/recruter-medecins-salaries-centre-de-sante">recrutement de médecins salariés</a>. L'association assume par ailleurs un rôle d'employeur à part entière. Document unique, entretiens professionnels, plan de développement des compétences, représentation du personnel : autant d'obligations qui reposent sur une direction unique cumulant plusieurs fonctions.</p>
<h2>Les difficultés que nous rencontrons le plus souvent</h2>
<p>Trois situations reviennent régulièrement. La première est la perte de mémoire administrative. Les conventions signées avec l'agence régionale de santé ou avec la collectivité ne sont plus réunies en un seul endroit et les échéances de renouvellement passent inaperçues. La deuxième est le décalage entre le <a href="/ressources/projet-de-sante-centre-de-sante">projet de santé déposé</a> et l'activité réellement conduite, décalage qui expose le centre lors d'un contrôle ou d'une demande de renouvellement. La troisième est la sous mobilisation des ressources disponibles : beaucoup de centres associatifs ignorent une partie des dispositifs auxquels ils sont éligibles, ou y renoncent faute de temps pour instruire les dossiers.</p>
<h2>Les financements qui concernent le plus ce type de centre</h2>
<p>Le porteur associatif est généralement bien positionné sur les leviers réservés ou favorables aux structures à but non lucratif. Cela couvre les dispositifs conventionnels, les concours des collectivités, les crédits régionaux et la <a href="/subvention-teulade">subvention Teulade</a> prévue à l'article L162-32 du code de la sécurité sociale. Nous n'en détaillons ici ni les conditions ni la procédure : leur appréciation dépend de la situation du centre et relève d'une intervention. Notre page <a href="/financements">financements</a> présente les leviers que nous instruisons.</p>
<h2>L'intervention d'Opti-CDS auprès des centres associatifs</h2>
<p>Nous commençons par une lecture complète de la structure : statuts, conventions, comptes annuels, contrats de travail, projet de santé. Cette phase distingue ce qui est déjà acquis, ce qui est exposé et ce qui n'a jamais été demandé. Nous conduisons ensuite un <a href="/services/audit-financier">audit financier</a> orienté vers la reconstitution des droits ouverts, puis nous prenons en charge le montage et le suivi des dossiers jusqu'à leur aboutissement. Nous aidons enfin le conseil d'administration à se doter d'outils de pilotage lisibles, afin que les décisions ne dépendent plus de la mémoire d'une seule personne.</p>
<h2>Contactez-nous</h2>
<p>Si votre association gère un centre de santé et que vous n'avez jamais fait vérifier l'ensemble de vos droits ouverts, l'exercice mérite d'être conduit. Opti-CDS travaille exclusivement avec des centres de santé et connaît les contraintes propres au modèle associatif. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "mutualiste",
    name: "Centre de santé mutualiste",
    longName: "Centre de santé mutualiste",
    short: "Centres portés par une mutuelle (livre III).",
    intro:
      "Les centres de santé mutualistes sont rattachés à une mutuelle. Ils combinent un cadre conventionnel strict et des exigences propres au groupe mutualiste. Plusieurs subventions publiques peuvent compléter leur modèle.",
    body: `<h2>Le livre III du code de la mutualité comme cadre porteur</h2>
<p>Le centre de santé mutualiste est géré par une mutuelle ou une union relevant du livre III du code de la mutualité, celui qui régit les activités sanitaires et sociales des organismes mutualistes. Il n'est donc pas une entité autonome mais l'un des établissements d'un gestionnaire plus large, avec ses instances propres et ses circuits de validation des dépenses. Cette appartenance confère une solidité que peu d'autres typologies possèdent, ainsi qu'un accès à des fonctions support mutualisées. Elle impose en contrepartie que chaque projet local soit défendu devant une direction régionale ou nationale, selon des critères qui ne sont pas ceux du terrain.</p>
<h2>Un modèle économique sous double contrainte</h2>
<p>Le centre mutualiste vit avec deux cadres qui se superposent. Le premier est conventionnel : la facturation, les forfaits et les engagements découlent de l'<a href="/ressources/accord-national-centres-de-sante">accord national des centres de santé</a>, qui s'applique quel que soit le porteur. Le second est interne au groupe : objectifs d'équilibre, refacturation des fonctions support, règles d'investissement, politique tarifaire commune. Un centre peut ainsi être jugé déficitaire au regard des règles du groupe alors que son activité conventionnelle est saine, parce que la quote-part de charges qui lui est imputée n'a jamais été rediscutée. Distinguer ces deux lectures est le point de départ de tout redressement.</p>
<h2>Le tiers payant et l'accessibilité comme marqueurs d'identité</h2>
<p>La pratique du tiers payant intégral et des tarifs sans dépassement fait partie de l'identité mutualiste et constitue un atout d'attractivité. Elle déplace en revanche la difficulté vers la chaîne de facturation. Rejets non retravaillés, impayés de part complémentaire, régularisations tardives : ces frottements pèsent directement sur le résultat. Un centre qui ne suit pas finement son <a href="/ressources/tiers-payant-centre-de-sante">tiers payant</a> perd des recettes qu'il a déjà produites. C'est l'un des postes où nous retrouvons le plus souvent de la valeur récupérable, sans modifier ni l'organisation ni le volume de soins.</p>
<h2>Des ressources humaines intégrées au réseau</h2>
<p>Les praticiens et les personnels d'un centre mutualiste sont salariés de la mutuelle, avec les grilles et les accords d'entreprise qui en découlent. La marge de négociation locale est réduite, ce qui complique le recrutement sur les spécialités tendues, notamment en dentaire et en ophtalmologie. Les leviers d'attractivité ne sont alors ni le salaire brut ni la prime, mais les conditions d'exercice : plateau technique, assistanat au fauteuil, temps administratif absorbé par la structure, mobilité au sein du réseau. Ce travail se mène avec la direction des ressources humaines du groupe et rejoint notre approche du <a href="/recrutement-medecins">recrutement de médecins</a>.</p>
<h2>Difficultés récurrentes et financements mobilisables</h2>
<p>La difficulté la plus fréquente est l'invisibilité du centre dans les comptes du gestionnaire. Sans comptabilité analytique par établissement et sans <a href="/ressources/indicateurs-pilotage-centre-de-sante">indicateurs de pilotage</a> propres, il devient impossible de défendre un plan de redressement devant les instances. Vient ensuite la question des aides publiques. Parce qu'ils sont adossés à un organisme solide, les centres mutualistes se pensent parfois hors du champ des dispositifs de soutien. C'est une erreur de lecture. Ils demeurent des centres de santé au sens du code de la santé publique et relèvent des mêmes leviers que les autres porteurs, y compris la <a href="/subvention-teulade">subvention Teulade</a> de l'article L162-32. L'éligibilité s'apprécie centre par centre, dans le cadre d'une intervention et jamais en autodiagnostic.</p>
<h2>L'intervention d'Opti-CDS auprès des centres mutualistes</h2>
<p>Notre travail consiste d'abord à isoler le centre de son environnement de groupe pour en lire la performance réelle : recettes par ligne d'activité, occupation des fauteuils et des cabinets, délai moyen d'encaissement, charges imputables. Nous conduisons ensuite un travail d'<a href="/services/optimisation-de-l-activite">optimisation de l'activité</a> et de reconstitution des droits non demandés, puis nous produisons les éléments chiffrés qui permettront à la direction de défendre ses arbitrages en interne. Les autres profils de porteurs que nous accompagnons sont présentés sur notre page <a href="/centres-de-sante">centres de santé</a>.</p>
<h2>Contactez-nous</h2>
<p>Que votre établissement soit en redressement, en développement ou en simple vérification, un regard extérieur spécialisé sur ses recettes conventionnelles et ses droits ouverts se rentabilise vite. Opti-CDS intervient exclusivement auprès des centres de santé et connaît les circuits internes des gestionnaires mutualistes. Contactez-nous pour un check-up.</p>`,
  },
];

export function getType(slug: string) {
  return cdsTypes.find((t) => t.slug === slug);
}
