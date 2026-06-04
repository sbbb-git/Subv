// Bibliothèque de 10 templates de cold email Opti-CDS.
//
// Philosophie générale :
//  - Le mot "Teulade" n'apparaît dans AUCUN cold email (sujet caché — quick win lors du call).
//  - On parle de "dispositif de financement de l'Assurance Maladie" ou de "subventions" en pluriel.
//  - On positionne Opti-CDS comme cabinet conseil large (financements + structuration + admin + RH)
//    pour ne pas être pré-jugé, mais on pousse subtilement vers la conversation.
//  - Signature toujours juste "Sacha" (pas de nom de famille).
//  - Pas de chiffre / pas de moyenne / pas de "si éligible" : tous les CDS y ont droit.
//
// Chaque template a un id stable, une cible idéale, et deux fonctions render(contact) -> {subject, body}.

export type Contact = {
  email: string;
  first_name: string | null;
  nom_cds: string | null;
  ville: string | null;
  specialite?: string | null;
  region?: string | null;
  segment?: string | null;
};

export type Template = {
  id: string;
  name: string;
  angle: string;            // une ligne — comment je pitche ce mail
  targetFit: string;        // à qui ce mail convient le mieux
  build: (c: Contact) => { subject: string; body: string };
};

const hello = (c: Contact) => (c.first_name ? `Bonjour ${c.first_name},` : "Bonjour,");
const SIG_SHORT = "Sacha\nOpti-CDS";
const SIG_LONG = "Sacha\nOpti-CDS\nhttps://opti-cds.fr";

export const TEMPLATES: Template[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t01_diagnostic_ouvert",
    name: "Diagnostic ouvert",
    angle: "Pas de pitch, juste curiosité : quels sont vos sujets ?",
    targetFit: "Tous CDS — bon défaut universel, ton consultatif",
    build: (c) => ({
      subject: `Vos sujets prioritaires en ce moment ?`,
      body: `${hello(c)}

Je m'appelle Sacha, je dirige Opti-CDS — un cabinet entièrement dédié aux centres de santé.

On accompagne les CDS sur ce qui bloque à un instant T : un dossier de financement à monter, une convention à renégocier, un sujet RH ou administratif récurrent. On adapte selon vos priorités, on n'arrive pas avec un produit pré-emballé.

Plutôt que de vous pitcher, je préfère vous poser la question : c'est quoi vos 2 ou 3 sujets prioritaires en ce moment ? Selon votre réponse, on sait vite si on a un sujet ensemble ou pas.

15 min en visio quand ça vous arrange ?

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t02_enveloppe_oubliee",
    name: "L'enveloppe oubliée",
    angle: "Hint financement non réclamé sans nommer Teulade.",
    targetFit: "CDS associatifs ou privés (qui touchent leur compte directement)",
    build: (c) => ({
      subject: `Un financement Assurance Maladie quasi jamais demandé`,
      body: `${hello(c)}

Message court : il existe un dispositif de financement de l'Assurance Maladie auquel tous les CDS ont droit, mais que la quasi-totalité ne sollicite pas. Pas par négligence : le sujet est peu connu, même des comptables et cabinets juridiques généralistes, et le montage du dossier est chronophage.

C'est un des sujets sur lesquels on accompagne chez Opti-CDS — pas le seul. On intervient aussi sur les autres problématiques administratives, financières et conventionnelles des centres de santé, selon ce qui remonte chez vous.

Vous avez 15 min cette semaine pour qu'on regarde votre cas précisément ?

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t03_2_questions",
    name: "Deux questions rapides",
    angle: "Engagement par question fermée — invite à répondre directement.",
    targetFit: "Tous CDS — fort taux de réponse, parfait pour relancer un dormant",
    build: (c) => ({
      subject: `2 questions rapides`,
      body: `${hello(c)}

Je dirige Opti-CDS, on accompagne les centres de santé sur leurs sujets financiers et administratifs.

Avant un éventuel échange, deux questions courtes :

1. Sur les 24 derniers mois, vous avez sollicité un dispositif de financement spécifique aux CDS (hors NMR) ?
2. Qui chez vous suit ces sujets au quotidien ?

Selon vos réponses, j'aurai une idée claire de si on a un sujet ensemble ou pas. Pas de pitch automatique en retour, promis.

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t04_pattern_break",
    name: "Break pattern (1 question)",
    angle: "Ultra-court, casse le pattern des mails commerciaux verbeux.",
    targetFit: "Tous CDS — bon pour A/B test avec un template plus long",
    build: (c) => ({
      subject: `1 question rapide`,
      body: `${hello(c)}

Je dirige un cabinet dédié aux centres de santé (financements, conventionnement, structuration).

Une seule question : qui chez vous a le temps de regarder les enveloppes de financement auxquelles votre centre a droit ?

Si la réponse est "personne", c'est exactement notre métier. 15 min pour qu'on en parle ?

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t05_constat_sectoriel",
    name: "Constat sectoriel",
    angle: "Observation forte sur l'ensemble des CDS — un constat partagé qui interpelle.",
    targetFit: "Tous CDS — variante de t02 mais avec un constat plus marqué",
    build: (c) => ({
      subject: `La majorité des CDS laissent ce financement de côté`,
      body: `${hello(c)}

Constat qu'on fait sur la quasi-totalité des CDS qu'on rencontre : un dispositif de financement de l'Assurance Maladie auquel ils ont tous droit, mais qu'ils ne demandent presque jamais.

Pas par négligence — le sujet est si peu maîtrisé, même par les comptables et cabinets juridiques classiques, que la plupart des directions finissent par laisser tomber. Et c'est dommage parce que c'est récurrent, chaque année.

Chez Opti-CDS on s'en occupe de A à Z, sans avance de votre part, payé uniquement si l'argent arrive. On accompagne aussi sur les autres sujets de fond (structuration, conventionnement, RH) quand il y en a.

15 min pour qu'on regarde votre cas ?

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t06_dentaire",
    name: "Spécifique dentaire",
    angle: "Reconnaît le profil dentaire — pertinent et flatteur.",
    targetFit: "CDS dentaires uniquement",
    build: (c) => ({
      subject: `Sujets spécifiques aux centres dentaires`,
      body: `${hello(c)}

J'ai vu que vous étiez centre dentaire. On accompagne plusieurs CDS de votre profil sur des sujets très précis : financement de l'équipement, dispositifs Assurance Maladie sous-utilisés, optimisations conventionnelles, parfois RH ou organisationnel quand ça bloque.

Tout n'est pas pertinent pour vous, mais en 15 min de visio j'aurais une idée plus claire de ce qui peut vraiment vous servir — plutôt que de vous envoyer un pitch générique.

Un créneau cette semaine ou la suivante ?

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t07_municipal",
    name: "Spécifique municipal",
    angle: "Reconnaît les contraintes d'un CDS municipal (mairie, budget, équipe).",
    targetFit: "CDS municipaux, communaux, CCAS",
    build: (c) => ({
      subject: `CDS municipaux : optimisations financières`,
      body: `${hello(c)}

On accompagne plusieurs centres municipaux de santé sur leurs sujets financiers et organisationnels — dispositifs ARS sous-utilisés, recettes annexes oubliées, optimisations conventionnelles.

Les CDS municipaux ont des contraintes spécifiques (tutelle financière de la mairie, équipes qui tournent, budget contraint) — on adapte selon ce qui remonte chez vous, pas un programme générique.

15 min en visio cette semaine ou la suivante ?

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t08_reseau_peer",
    name: "Réseau / peer",
    angle: "Je discute avec plein de CDS, j'aimerais comprendre votre situation.",
    targetFit: "CDS de taille moyenne à grande, directions sensibles au réseau",
    build: (c) => ({
      subject: `J'aimerais comprendre vos enjeux`,
      body: `${hello(c)}

Je suis en discussion en ce moment avec une vingtaine de centres de santé en France sur leurs sujets de fond — financements, conventionnement, problématiques administratives.

Plus j'échange, plus je vois que les enjeux se ressemblent (trésorerie, manque de temps sur les sujets non-cliniques, équipes débordées). Et certains sujets reviennent partout — notamment des dispositifs de financement très peu sollicités alors qu'ils sont accessibles.

15 min de votre temps pour comprendre votre situation ? Pas pour vous pitcher, juste pour cadrer. Si on a un sujet, on en parle, sinon ça aura été utile à tous les deux.

${SIG_SHORT}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t09_direction_formel",
    name: "Direction-to-direction formel",
    angle: "Ton institutionnel, vise directeur/coordinateur senior.",
    targetFit: "CDS grosses structures, mutualistes, polycliniques",
    build: (c) => ({
      subject: `Présentation Opti-CDS — accompagnement des directions de CDS`,
      body: `${hello(c)}

Je dirige Opti-CDS, cabinet de conseil dédié aux centres de santé. Nous accompagnons les directions sur les sujets administratifs, financiers et stratégiques de leurs centres.

Nos missions varient selon vos besoins : montage de dossiers de financement sous-utilisés par les CDS, accompagnement conventionnel, audit organisationnel, ou simplement appui sur les sujets administratifs récurrents. La rémunération est au succès sur la partie financements (aucune avance de votre part).

Je souhaitais me présenter et identifier si nous pourrions vous être utile sur un sujet précis. 15 à 20 min en visio, à votre convenance.

Cordialement,

${SIG_LONG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t10_question_piege",
    name: "Question piège",
    angle: "Question directe qui force à réfléchir et ouvre la porte.",
    targetFit: "Tous CDS — bon hook curiosité, à tester en variante d'objet",
    build: (c) => ({
      subject: `Connaissez-vous ce dispositif ?`,
      body: `${hello(c)}

Une question pour démarrer : avez-vous déjà entendu parler du dispositif de financement annuel de l'Assurance Maladie réservé aux centres de santé ?

Si oui — vous l'avez sollicité ?

(La quasi-totalité des CDS qu'on rencontre découvrent le sujet, donc aucun jugement si la réponse est non.)

C'est un sujet parmi d'autres sur lequel on accompagne les CDS chez Opti-CDS. Si vous voulez qu'on en parle 15 min, je vous donne le contexte précis.

${SIG_SHORT}`,
    }),
  },
];

export function templateById(id: string): Template | null {
  return TEMPLATES.find(t => t.id === id) || null;
}

// Heuristique d'attribution automatique d'un template à un contact.
// Évite de tout uniformiser : varie selon spécialité + segment + un hash de l'email
// pour la rotation pseudo-aléatoire des templates universels.
export function pickTemplateFor(c: Contact): Template {
  const spec = (c.specialite || "").toLowerCase();
  if (spec.includes("dentaire")) return TEMPLATES.find(t => t.id === "t06_dentaire")!;
  if (spec.includes("municipal")) return TEMPLATES.find(t => t.id === "t07_municipal")!;
  // Sources ARS / mutualistes → ton formel
  if (c.segment === "A_premium" || spec.includes("mutualiste")) {
    return TEMPLATES.find(t => t.id === "t09_direction_formel")!;
  }
  // Rotation déterministe sur les 7 templates universels via hash de l'email
  const universals = ["t01_diagnostic_ouvert","t02_enveloppe_oubliee","t03_2_questions",
                      "t04_pattern_break","t05_constat_sectoriel","t08_reseau_peer","t10_question_piege"];
  let h = 0;
  for (let i = 0; i < c.email.length; i++) h = (h * 31 + c.email.charCodeAt(i)) | 0;
  const pick = universals[Math.abs(h) % universals.length];
  return TEMPLATES.find(t => t.id === pick)!;
}
