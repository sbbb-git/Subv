export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  content: string; // markdown-lite HTML
};

export const posts: Post[] = [
  {
    slug: "subvention-teulade-tout-comprendre",
    title: "Subvention Teulade : tout comprendre en 5 minutes",
    description:
      "L’essentiel sur la subvention Teulade pour les centres de santé : base légale, taux, calcul, démarches CPAM et erreurs à éviter.",
    date: "2026-04-12",
    readingTime: "6 min",
    category: "Comprendre",
    content: `
<h2>Le principe en une phrase</h2>
<p>La CPAM rembourse à votre centre de santé <strong>11,5 % de l’assiette des cotisations patronales</strong> URSSAF (maladie, maternité, invalidité, décès) versées pour vos soignants salariés.</p>
<h2>Un droit ancien mais sous-utilisé</h2>
<p>Codifié à l’article L162-32 du code de la sécurité sociale, le dispositif date du décret du 14 décembre 1992 signé par René Teulade. Près de 30 ans plus tard, un quart des CDS ne le perçoit toujours pas.</p>
<h2>Comment calculer en 30 secondes</h2>
<ul>
  <li>Listez vos soignants salariés.</li>
  <li>Sommez leurs salaires bruts annuels.</li>
  <li>Multipliez par 11,5 %.</li>
</ul>
<p>Un CDS de 8 soignants à 50 000 € brut moyen reçoit ainsi <strong>≈ 46 000 € par an</strong>, et jusqu’à <strong>184 000 € avec le rattrapage 3 ans</strong>.</p>
<h2>Trois erreurs à éviter</h2>
<ol>
  <li>Inclure le personnel administratif dans l’assiette.</li>
  <li>Oublier les exercices N-1 à N-3 non versés.</li>
  <li>Ne pas relancer la CPAM passé 6 mois.</li>
</ol>
<h2>Et après ?</h2>
<p>Si vous n’avez jamais demandé Teulade — ou si vous suspectez un montant minoré — un audit gratuit en 48h permet de chiffrer précisément les sommes récupérables.</p>
`,
  },
  {
    slug: "igas-subvention-teulade-non-versee",
    title: "Rapport IGAS 2025 : pourquoi 25 % des CDS n’ont pas perçu la subvention Teulade",
    description:
      "Analyse du rapport IGAS de février 2025 sur le modèle économique des centres de santé pluriprofessionnels et le non-versement de la subvention Teulade.",
    date: "2026-03-04",
    readingTime: "7 min",
    category: "Actualité",
    content: `
<h2>Le constat du rapport IGAS</h2>
<p>Dans son rapport de février 2025 sur le modèle économique des centres de santé pluriprofessionnels, l’Inspection Générale des Affaires Sociales relève que <strong>près d’un quart des CDS</strong> n’a pas perçu la subvention Teulade au titre de 2022.</p>
<h2>Les causes structurelles</h2>
<ul>
  <li>Un formulaire propre à chaque CPAM, peu documenté.</li>
  <li>Une coordination URSSAF–CPAM laissée à la charge du CDS.</li>
  <li>Un défaut d’information des directions et trésoreries des CDS.</li>
</ul>
<h2>L’impact financier</h2>
<p>Pour un CDS pluriprofessionnel moyen (10 ETP soignants), le manque à gagner annuel se situe entre <strong>50 000 € et 90 000 €</strong>. Avec le rattrapage 3 ans, on parle de <strong>plus de 200 000 €</strong> de trésorerie qui restent à la CPAM.</p>
<h2>Que recommande l’IGAS ?</h2>
<p>Le rapport propose d’uniformiser la procédure et de désigner un référent CPAM dédié dans chaque caisse. En attendant que ces recommandations soient mises en œuvre, c’est aux CDS d’aller chercher leur dû — seuls ou accompagnés.</p>
`,
  },
  {
    slug: "teulade-vs-aci-cumul",
    title: "Subvention Teulade et ACI : comment les cumuler intelligemment",
    description:
      "Règles de cumul entre la subvention Teulade et l’Accord Conventionnel Interprofessionnel (ACI) pour les centres de santé pluriprofessionnels.",
    date: "2026-02-15",
    readingTime: "5 min",
    category: "Optimisation",
    content: `
<h2>Deux dispositifs complémentaires</h2>
<p>L’ACI rémunère le centre pour sa structuration pluriprofessionnelle (1 point = 7 €, minimum 20 000 €/an). Teulade compense les charges patronales. Les deux sont <strong>cumulables</strong> à condition de ne pas financer deux fois la même mission.</p>
<h2>Cas à risque</h2>
<ul>
  <li>Un coordinateur intégralement financé par l’ACI ne doit pas figurer dans l’assiette Teulade.</li>
  <li>Une action de prévention financée par le FIR ne doit pas l’être aussi dans l’assiette Teulade.</li>
</ul>
<h2>Bonne pratique : la quotité d’activité</h2>
<p>Pour un salarié à temps partagé soins/coordination, calculez sa quotité « activité de soins remboursable » → seule cette part entre dans l’assiette Teulade. Le reste relève de l’ACI ou du FIR.</p>
<h2>Notre conseil</h2>
<p>Pilotez les deux dispositifs ensemble, avec un même tableau de bord. C’est la seule façon d’éviter les doublons tout en maximisant les recettes.</p>
`,
  },
  {
    slug: "rattrapage-teulade-3-ans",
    title: "Rattrapage Teulade : comment réclamer 3 ans de subvention non versée",
    description:
      "Méthode pour récupérer les exercices N-1, N-2 et N-3 de subvention Teulade non versés par la CPAM : prescription, justificatifs URSSAF, courrier type, recours.",
    date: "2026-05-02",
    readingTime: "7 min",
    category: "Méthode",
    content: `
<h2>Combien d’années peut-on réclamer ?</h2>
<p>En pratique, la CPAM accepte un rattrapage <strong>jusqu’à N-3</strong>, soit les 3 derniers exercices clos en plus de l’année en cours. Au-delà, la prescription est généralement opposée.</p>
<h2>Documents à reconstituer</h2>
<ul>
  <li>Attestations URSSAF de paiement pour chaque exercice concerné.</li>
  <li>DSN annuelles ou bordereaux trimestriels.</li>
  <li>Liste actualisée du personnel soignant éligible, année par année.</li>
  <li>Détail des sorties/entrées de salariés et des changements de quotité.</li>
</ul>
<h2>Modèle de courrier de rattrapage</h2>
<p>Adressé en recommandé avec accusé de réception au directeur de la CPAM, le courrier doit viser explicitement l’article L162-32 du code de la sécurité sociale et le décret du 14 décembre 1992, lister les exercices concernés, et joindre l’intégralité des justificatifs.</p>
<h2>Si la CPAM oppose la prescription</h2>
<p>Demandez le motif précis par écrit. La prescription de droit commun en matière de créances sur l’Assurance Maladie est de 3 ans. Au-delà, un recours gracieux puis contentieux reste possible si vous démontrez un empêchement.</p>
<h2>Combien attendre ?</h2>
<p>Un rattrapage 3 ans bien monté pour un CDS de taille moyenne permet de récupérer entre <strong>100 000 € et 250 000 €</strong>. C’est l’opération qui finance souvent un an de fonctionnement.</p>
`,
  },
  {
    slug: "erreurs-frequentes-dossier-teulade",
    title: "Les 7 erreurs les plus fréquentes dans un dossier Teulade",
    description:
      "Mauvaise assiette URSSAF, oubli du rattrapage, inclusion de personnel non éligible : les pièges qui font perdre des dizaines de milliers d’euros aux CDS.",
    date: "2026-04-20",
    readingTime: "6 min",
    category: "Méthode",
    content: `
<h2>1. Confondre cotisations et assiette</h2>
<p>Le taux de 11,5 % s’applique à l’<strong>assiette</strong> (le salaire brut, en pratique), pas au <strong>montant</strong> des cotisations versées. C’est l’erreur la plus coûteuse, car elle divise la subvention par environ 3.</p>
<h2>2. Inclure le personnel administratif</h2>
<p>Seuls les soignants produisant des actes remboursables sont dans l’assiette. Inclure les secrétaires médicales, agents d’accueil ou direction expose à un rejet partiel du dossier.</p>
<h2>3. Oublier les exercices N-1 à N-3</h2>
<p>Beaucoup de CDS demandent uniquement l’année en cours, alors que la prescription autorise 3 années de rattrapage. C’est souvent là que se cache le plus gros gain.</p>
<h2>4. Mauvaise quotité d’activité</h2>
<p>Pour un salarié à temps partagé soins/prévention/coordination, seule la quotité « soins remboursables » entre dans l’assiette. Mal calibrer cette quotité expose à un redressement.</p>
<h2>5. Attestation URSSAF non concordante</h2>
<p>L’attestation URSSAF doit refléter exactement les montants des DSN. Toute divergence fait rejeter le dossier.</p>
<h2>6. Absence de relances</h2>
<p>Sans relance, un dossier peut rester 12 à 18 mois sans réponse. Une relance écrite tous les 60 jours est indispensable.</p>
<h2>7. Ne pas formaliser la subvention dans la comptabilité</h2>
<p>La subvention doit apparaître en recette dans le compte de résultat. Son oubli fausse l’analyse financière du CDS et complique les contrôles ultérieurs.</p>
`,
  },
  {
    slug: "subvention-teulade-cds-dentaire",
    title: "Subvention Teulade pour un centre dentaire : calcul et stratégie",
    description:
      "Spécificités du calcul Teulade dans un centre de santé dentaire : assiettes des chirurgiens-dentistes salariés, assistants, prothésistes, montants attendus.",
    date: "2026-03-22",
    readingTime: "6 min",
    category: "Typologie",
    content: `
<h2>Une assiette particulièrement élevée</h2>
<p>Les centres de santé dentaires emploient des chirurgiens-dentistes salariés dont l’assiette annuelle dépasse fréquemment 90 000 €. Avec 5 à 8 praticiens, l’assiette cumulée monte rapidement à plus de 500 000 €.</p>
<h2>Qui inclure dans le calcul ?</h2>
<ul>
  <li>Chirurgiens-dentistes salariés : oui.</li>
  <li>Assistants dentaires salariés participant aux actes : oui.</li>
  <li>Prothésistes salariés produisant des actes remboursables : oui.</li>
  <li>Hygiénistes (si statut salarié et actes remboursables) : oui.</li>
  <li>Accueil, secrétariat, technicien : non.</li>
</ul>
<h2>Cas à exclure</h2>
<p>Les chirurgiens-dentistes en <strong>collaboration libérale</strong> ne sont jamais dans l’assiette. Bien isoler les contrats avant le calcul.</p>
<h2>Exemple chiffré</h2>
<p>Un centre dentaire avec 6 chirurgiens-dentistes (assiette moyenne 90 000 €) + 4 assistantes (assiette moyenne 30 000 €) :</p>
<ul>
  <li>Assiette éligible : (6 × 90 000) + (4 × 30 000) = <strong>660 000 €</strong>.</li>
  <li>Subvention annuelle : 660 000 × 11,5 % = <strong>≈ 75 900 €</strong>.</li>
  <li>Rattrapage 3 ans : <strong>≈ 227 700 €</strong>.</li>
</ul>
`,
  },
  {
    slug: "centres-municipaux-sante-teulade",
    title: "Centres municipaux de santé : pourquoi Teulade est crucial",
    description:
      "Les centres municipaux de santé bénéficient pleinement de la subvention Teulade. Comment l’intégrer au budget communal et sécuriser le versement par la CPAM.",
    date: "2026-02-28",
    readingTime: "5 min",
    category: "Typologie",
    content: `
<h2>Un levier budgétaire majeur pour les collectivités</h2>
<p>Pour une commune ou un EPCI qui porte un centre de santé, la subvention Teulade peut représenter <strong>plusieurs dizaines de milliers d’euros</strong> par an de recettes nettes. À l’échelle d’un budget communal, c’est un poste qui mérite d’être sécurisé et anticipé.</p>
<h2>Spécificités RH</h2>
<p>Les CMS emploient à la fois des titulaires de la fonction publique territoriale (relevant de la CNRACL) et des contractuels (régime général). Seuls les seconds entrent dans l’assiette Teulade, sauf cas particuliers.</p>
<h2>Inscription budgétaire</h2>
<p>La subvention Teulade doit être inscrite au budget en recette de fonctionnement, sur un compte 7478 ou équivalent. Son non-versement bloque l’équilibre du budget annexe du CDS.</p>
<h2>Sécuriser le versement</h2>
<ul>
  <li>Mandater un référent unique à la collectivité.</li>
  <li>Faire valider par la CPAM la liste des personnels éligibles dès l’ouverture du centre.</li>
  <li>Inscrire un calendrier prévisionnel des demandes (annuel ou trimestriel).</li>
</ul>
`,
  },
  {
    slug: "creer-centre-de-sante-2026",
    title: "Créer un centre de santé en 2026 : aides, statuts, étapes",
    description:
      "Guide complet pour créer un centre de santé en 2026 : statuts juridiques, projet de santé, conventionnement CPAM, aides à l’installation et financements.",
    date: "2026-01-20",
    readingTime: "8 min",
    category: "Création",
    content: `
<h2>Étape 1 — L’étude de faisabilité</h2>
<p>Diagnostic territorial via le zonage ARS, identification de la patientèle, modélisation économique. C’est l’étape qui valide (ou pas) la viabilité de votre projet.</p>
<h2>Étape 2 — Le statut juridique</h2>
<ul>
  <li><strong>Association loi 1901</strong> : souple, peu fiscalisée, idéale pour porter un projet collectif.</li>
  <li><strong>SCIC</strong> : statut coopératif d’intérêt collectif, adapté aux projets territoriaux.</li>
  <li><strong>Centre municipal de santé</strong> : portage public, accès à des aides spécifiques.</li>
  <li><strong>Mutuelle</strong> : portage par un acteur mutualiste.</li>
</ul>
<h2>Étape 3 — Le projet de santé</h2>
<p>Document central exigé par l’ARS. Il décrit l’organisation des soins, la coordination, la prévention, les protocoles, la gouvernance.</p>
<h2>Étape 4 — Le conventionnement CPAM</h2>
<p>Dossier transmis à la CPAM pour ouverture des droits aux remboursements. Sans conventionnement, pas de Teulade, pas d’ACI.</p>
<h2>Étape 5 — Mobiliser les financements</h2>
<ul>
  <li>Subvention Teulade dès le premier salaire soignant.</li>
  <li>ACI dès l’atteinte des critères pluripro.</li>
  <li>Aides à l’installation (CAIM, COSCOM, COTRAM).</li>
  <li>Cofinancements ARS/FIR et collectivités.</li>
</ul>
`,
  },
];
