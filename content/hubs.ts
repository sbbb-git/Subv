// Corps éditorial des deux pages hub, /centres-de-sante et /services.
//
// HTML BRUT injecté via dangerouslySetInnerHTML : <a href>, jamais <Link>.
//
// Une page hub n'a pas vocation à être aussi longue qu'une page pilier, mais
// une simple grille de liens ne répond à aucune requête. Ces deux textes
// traitent la question que se pose réellement le visiteur avant de cliquer :
// quelle typologie me correspond, et par quel bout prendre mon sujet.

export const hubCentresBody = `
<h2>Comment se distinguent les types de centres de santé</h2>
<p>Tous les centres de santé partagent le même socle : des soignants salariés, un gestionnaire à but non lucratif, la pratique des tarifs opposables et du tiers payant. Ce socle les sépare nettement de la <a href="/ressources/centre-de-sante-ou-maison-de-sante">maison de santé pluriprofessionnelle</a>, où les professionnels restent libéraux. À partir de là, les typologies se distinguent sur deux axes : les disciplines exercées et la nature du porteur.</p>

<h2>La distinction par discipline</h2>
<p>Un <a href="/centres-de-sante/medical">centre médical</a> salarie des généralistes ou des spécialistes, et son équilibre repose sur le temps médical qu’il parvient à fixer durablement. Un <a href="/centres-de-sante/dentaire">centre dentaire</a> combine acte clinique et plateau technique amorti, dans un cadre réglementaire aujourd’hui renforcé. Un <a href="/centres-de-sante/infirmier">centre de soins infirmiers</a> travaille largement au domicile des patients, ce qui déplace la question économique vers l’organisation des tournées. Un <a href="/centres-de-sante/polyvalent">centre polyvalent</a> réunit plusieurs disciplines, facilitant les parcours internes au prix d’une gestion plus complexe. Un <a href="/centres-de-sante/pluriprofessionnel">centre pluriprofessionnel</a> associe professions médicales et paramédicales autour d’une prise en charge coordonnée.</p>

<h2>La distinction par porteur</h2>
<p>Le gestionnaire change la gouvernance, les délais de décision et parfois les financements accessibles. Un <a href="/centres-de-sante/municipal">centre municipal</a> bénéficie de l’assise d’une collectivité mais dépend de ses instances délibérantes et de ses règles budgétaires. Un <a href="/centres-de-sante/associatif">centre associatif</a> gagne en souplesse ce qu’il perd en capacité d’investissement, et suppose une gouvernance qui fonctionne réellement. Un <a href="/centres-de-sante/mutualiste">centre mutualiste</a> s’adosse à des fonctions support consolidées que peu de porteurs isolés possèdent. Ce choix se prépare en amont, comme le détaille notre article sur le <a href="/ressources/statut-juridique-centre-de-sante">statut juridique d’un centre de santé</a>.</p>

<h2>Ce qui ne change pas d’une typologie à l’autre</h2>
<p>Quelle que soit la catégorie, trois sujets reviennent systématiquement. Le premier est la sous-mobilisation des recettes conventionnelles, qui suppose des déclarations tenues à jour toute l’année. Le deuxième est la difficulté à recruter et à fidéliser des praticiens, qui pèse directement sur le résultat puisque les charges de structure continuent de courir. Le troisième est le décalage de trésorerie induit par le tiers payant. Le panorama des leviers disponibles figure sur notre page <a href="/financements">financements</a>.</p>

<h2>Contactez-nous</h2>
<p>Que votre projet soit en cours de montage ou que votre centre fonctionne depuis plusieurs années, la typologie détermine les leviers pertinents mais jamais à elle seule. Contactez-nous pour un check-up.</p>
`;

export const hubServicesBody = `
<h2>Par quel bout prendre son sujet</h2>
<p>Les centres de santé nous sollicitent rarement pour une mission isolée. Ils viennent avec une difficulté concrète : un résultat qui se dégrade sans explication claire, un poste médical vacant depuis des mois, un dossier bloqué chez l’autorité de tutelle, ou le sentiment diffus de laisser de l’argent sur la table. Nos missions sont organisées pour répondre à ces entrées, pas pour vendre un catalogue.</p>

<h2>Quand le sujet est financier</h2>
<p>Si la question porte sur l’équilibre, le point de départ est presque toujours un <a href="/services/audit-financier">audit financier</a>, qui mesure l’écart entre ce que le centre encaisse et ce qu’il devrait encaisser compte tenu de son activité. Il se prolonge naturellement dans la mission <a href="/services/subventions-et-financements">subventions et financements</a>, qui va chercher les dispositifs non sollicités, puis dans la <a href="/services/comptabilite-gestion">comptabilité et gestion</a>, puisqu’un financement obtenu doit ensuite être tracé et reconduit.</p>

<h2>Quand le sujet est humain</h2>
<p>Un centre sans praticiens ne tient pas. Le <a href="/services/recrutement-de-medecins">recrutement de médecins</a> mobilise nos partenaires recruteurs spécialisés, mais il ne se limite pas au sourcing : conditions d’exercice, structure de rémunération et qualité de l’organisation pèsent autant que l’annonce publiée. C’est pourquoi cette mission croise souvent le <a href="/services/conseil-en-organisation">conseil en organisation</a>.</p>

<h2>Quand le sujet est réglementaire</h2>
<p>L’ouverture d’un centre, l’ajout d’une activité ou une mise en conformité passent par l’autorité de tutelle. La mission <a href="/services/creation-centre-de-sante">création de centre de santé</a> couvre le montage d’ensemble, l’appui au <a href="/services/dossier-ars">dossier ARS</a> la constitution du dossier, et la mission <a href="/services/conformite-projet-de-sante">conformité et projet de santé</a> la cohérence entre ce qui est déclaré et ce qui est réellement pratiqué. Sur ces sujets, l’exhaustivité compte moins que la cohérence : des pièces qui se contredisent bloquent l’instruction.</p>

<h2>Quand le centre veut se développer</h2>
<p>Un centre stabilisé cherche à croître, à ouvrir un site ou à améliorer son rendement. Le <a href="/services/developpement">développement</a>, l’<a href="/services/optimisation-de-l-activite">optimisation de l’activité</a>, la <a href="/services/patientele-et-communication">patientèle et communication</a> et les <a href="/services/achats-et-investissements">achats et investissements</a> répondent à ces objectifs. Notre <a href="/accompagnement">accompagnement</a> peut aussi s’inscrire dans la durée plutôt que mission par mission.</p>

<h2>Contactez-nous</h2>
<p>Si vous ne savez pas par quelle mission commencer, c’est justement l’objet du premier échange : nous situons votre difficulté avant de proposer quoi que ce soit. Contactez-nous pour un check-up.</p>
`;
