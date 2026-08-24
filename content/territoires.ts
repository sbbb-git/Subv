// Pages territoriales de financement, servies sous /financements/<slug>.
//
// `body` est du HTML BRUT injecté via dangerouslySetInnerHTML : <a href>,
// jamais <Link>.
//
// RÈGLE DE SOURCING. Ces pages ne valent que si elles disent quelque chose de
// vrai et de propre au territoire. Les dispositifs nommés ici proviennent du
// portail PAPS Île-de-France et des cahiers des charges de l'ARS. On nomme les
// dispositifs et on décrit leur mécanique, qui est stable. On ne publie PAS
// les montants et plafonds, qui évoluent d'un exercice à l'autre et dont une
// valeur périmée décrédibiliserait le cabinet. Le montant courant s'apprécie
// au cas par cas, ce qui est précisément l'objet du check-up.
//
// Ne jamais créer une page territoriale sans matière réellement spécifique :
// huit pages départementales interchangeables seraient du contenu dupliqué,
// exactement le défaut corrigé sur les pages de typologie.

export type Territoire = {
  slug: string;
  nom: string;
  type: "region" | "departement";
  /** Numéro de département, absent pour une région. */
  code?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  body: string;
};

export const territoires: Territoire[] = [
  {
    slug: "ile-de-france",
    nom: "en Île-de-France",
    type: "region",
    metaTitle: "Financer un centre de santé en Île-de-France",
    metaDescription:
      "Aides de l’ARS Île-de-France, contrats en zone d’intervention prioritaire et soutiens régionaux : les leviers accessibles à un centre de santé francilien.",
    keywords: [
      "financement centre de santé Île-de-France",
      "aide ARS Île-de-France centre de santé",
      "subvention centre de santé Paris",
      "contrat aide installation Île-de-France",
      "zone intervention prioritaire Île-de-France",
      "créer un centre de santé en Île-de-France",
      "aide investissement immobilier centre de santé",
    ],
    body: `
<h2>Une région dense, et pourtant sous tension</h2>
<p>L’Île-de-France concentre une part importante de l’offre de soins nationale, ce qui alimente l’idée qu’un centre de santé francilien n’aurait pas de difficulté d’accès aux soins à résoudre. La réalité du terrain est plus contrastée. La densité médicale y est très inégale d’une commune à l’autre, parfois d’un quartier à l’autre, et plusieurs territoires franciliens sont classés en zone d’intervention prioritaire au même titre que des zones rurales.</p>
<p>Cette situation a une conséquence directe et souvent ignorée : un centre de santé implanté en Île-de-France peut être éligible à des dispositifs que ses porteurs croient réservés aux déserts médicaux ruraux.</p>

<h2>Les aides propres à l’ARS Île-de-France</h2>
<p>L’agence régionale de santé structure son soutien par phase de vie du projet, avec un cahier des charges régional qui lui est propre. Aux différentes étapes, elle peut intervenir sur :</p>
<ul>
  <li><strong>L’étude de faisabilité</strong>, réalisée par un prestataire extérieur, couvrant le projet de santé collectif, sa déclinaison architecturale et les coûts d’amorçage et de fonctionnement.</li>
  <li><strong>La création immobilière</strong>, pour les travaux, sous réserve de conformité au cahier des charges régional et de conventionnement avec l’agence.</li>
  <li><strong>Le démarrage</strong>, qui peut couvrir le système d’information conforme aux référentiels nationaux, la formation des professionnels et l’équipement médical et collectif.</li>
  <li><strong>La pérennisation</strong>, avec le renouvellement du système d’information, une aide organisationnelle finançant une étude de viabilité économique, et un soutien à l’extension ou à la rénovation.</li>
</ul>
<p>Un point mérite l’attention des porteurs de projet : les plafonds de plusieurs de ces aides peuvent être relevés lorsque le centre s’implante en zone d’aménagement concerté, en zone d’intervention prioritaire ou en quartier prioritaire de la politique de la ville. Le zonage n’est donc pas un détail administratif, il change le montant accessible.</p>

<h2>Les contrats liés au zonage</h2>
<p>Au-delà des aides d’investissement, trois contrats conventionnels concernent directement les centres franciliens selon leur situation géographique.</p>
<p>Le <strong>contrat d’aide à l’installation</strong> s’adresse aux centres médicaux ou polyvalents implantés en zone d’intervention prioritaire, contre un engagement pluriannuel, et soutient le financement de postes de médecin généraliste salarié. Le <strong>contrat de stabilisation et de coordination</strong> vise les centres de ces mêmes zones engagés dans une communauté professionnelle territoriale de santé. Le <strong>contrat de stabilité territoriale</strong> concerne à l’inverse un centre situé hors zone prioritaire qui met un praticien à disposition d’un territoire qui en manque.</p>
<p>Ce dernier mécanisme est le plus méconnu, et il inverse une intuition courante : être implanté dans une commune bien dotée n’exclut pas d’accéder à un soutien, à condition de contribuer à l’offre d’un territoire voisin.</p>

<h2>La Région et les collectivités, second étage du financement</h2>
<p>L’agence régionale de santé n’est pas le seul financeur. La Région Île-de-France et les collectivités locales interviennent sur l’investissement immobilier, avec leurs propres critères et leurs propres calendriers. Un projet peut donc mobiliser plusieurs guichets, à condition de les instruire dans le bon ordre : un dossier déposé auprès d’un financeur peut conditionner la recevabilité d’un autre.</p>
<p>C’est une différence importante avec des régions moins denses, où le nombre d’interlocuteurs est plus réduit. En Île-de-France, la difficulté n’est pas l’absence de dispositifs, c’est leur articulation.</p>

<h2>Ce que ces aides ne couvrent pas</h2>
<p>Toutes ces aides portent sur le projet : l’étude, les murs, l’équipement, le démarrage. Elles ne financent pas le fonctionnement courant d’un centre en régime de croisière. Celui-ci repose sur les recettes d’activité et sur les <a href="/ressources/forfaits-structure-centre-de-sante">dispositifs forfaitaires</a> du cadre conventionnel, auxquels s’ajoutent les financements propres au statut de centre de santé conventionné, dont la <a href="/subvention-teulade">subvention Teulade</a>.</p>
<p>Un porteur de projet francilien qui n’aurait sécurisé que les aides d’investissement se retrouve donc exposé une fois le centre ouvert. Les deux étages se préparent ensemble, pas l’un après l’autre. Le panorama complet figure sur notre page <a href="/financements">financements</a>.</p>

<h2>Les erreurs fréquentes en Île-de-France</h2>
<p>La première consiste à supposer que la densité médicale francilienne ferme l’accès aux dispositifs de zone sous-dense, sans avoir vérifié le zonage précis de la commune d’implantation. La deuxième est de raisonner guichet par guichet, en ignorant que les calendriers de l’agence, de la Région et des collectivités ne coïncident pas. La troisième est de sous-estimer le coût immobilier francilien dans le plan de financement, et donc le besoin de <a href="/ressources/tresorerie-centre-de-sante">trésorerie de démarrage</a>, comme nous le détaillons dans notre article sur le <a href="/ressources/business-plan-centre-de-sante">business plan d’un centre de santé</a>.</p>

<h2>Comment nous intervenons</h2>
<p>Nous vérifions d’abord le zonage réel de votre implantation, puis nous établissons la liste des dispositifs auxquels votre centre peut prétendre compte tenu de sa typologie, de son statut gestionnaire et de son stade d’avancement. Nous construisons ensuite la séquence de dépôt, puis nous prenons en charge l’instruction des dossiers jusqu’à leur terme. Cette démarche s’inscrit dans nos missions de <a href="/services/subventions-et-financements">financement et subventions</a> et, pour les projets en création, d’appui au <a href="/services/dossier-ars">dossier ARS</a>.</p>
<p>Les montants et les plafonds évoluent d’un exercice à l’autre et dépendent du zonage comme de la nature du projet. Nous ne les publions pas ici, parce qu’un chiffre périmé induit en erreur : ils s’apprécient au cas par cas, sur pièces.</p>

<h2>Contactez-nous</h2>
<p>Si votre centre est implanté ou se crée en Île-de-France, un check-up gratuit permet de vérifier votre zonage et d’identifier les dispositifs régionaux réellement mobilisables dans votre situation. Contactez-nous pour un check-up.</p>
`,
  },
];

export function getTerritoire(slug: string) {
  return territoires.find((t) => t.slug === slug);
}
