// Bibliothèque de 10 templates de cold email Opti-CDS.
//
// Stratégie (confidentielle) :
//  - Quick win commercial réel = la subvention Teulade.
//  - MAIS le mot "Teulade" n'apparaît jamais dans un cold email (sinon les gens googlent
//    et se disent "je le ferai moi-même"). On garde la précision pour le call.
//  - Le pitch est volontairement large : "on accompagne sur ce qui bloque" — financements,
//    structuration, conventionnement, RH. Le prospect ne se pré-juge pas hors-cible.
//  - Pas de chiffre, pas de moyenne, pas de nom de famille, signature courte.
//  - Plusieurs templates martèlent la même mécanique psychologique : "vous y avez TOUS
//    droit, mais personne ne demande car le dossier est lourd et le sujet peu connu."
//
// Chaque template a un id stable, une cible idéale, et build(contact) -> {subject, body}.

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
  angle: string;
  targetFit: string;
  build: (c: Contact) => { subject: string; body: string };
};

const hello = (c: Contact) => (c.first_name ? `Bonjour ${c.first_name},` : "Bonjour,");
const SIG = "Sacha\nOpti-CDS";
const SIG_LONG = "Sacha\nOpti-CDS\nhttps://opti-cds.fr";

export const TEMPLATES: Template[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t01_priorites",
    name: "Priorités du moment",
    angle: "Demande leurs 2-3 sujets du moment, zéro pitch.",
    targetFit: "Universel — défaut consultatif, hors spécialités identifiées",
    build: (c) => ({
      subject: `Vos 2 ou 3 sujets prioritaires en ce moment ?`,
      body: `${hello(c)}

Je dirige Opti-CDS — cabinet entièrement dédié aux centres de santé.

On accompagne les CDS sur ce qui pèse à un instant T : financements, conventionnement, structuration administrative, parfois RH ou organisation quand ça bloque. On adapte selon vos priorités, on n'arrive pas avec un produit pré-emballé.

Plutôt que de vous pitcher, je préfère poser la question : c'est quoi vos 2 ou 3 sujets prioritaires en ce moment ?

Selon votre réponse, on saura vite si on a un sujet ensemble ou pas. 15 min en visio quand ça vous arrange ?

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t02_enveloppe_hidden",
    name: "L'enveloppe oubliée",
    angle: "Hint financement non sollicité, sans nommer Teulade.",
    targetFit: "CDS associatifs, privés, mutualistes (touchent leur compte)",
    build: (c) => ({
      subject: `Une enveloppe Assurance Maladie que la quasi-totalité des CDS ne demande pas`,
      body: `${hello(c)}

Court message : il existe un dispositif annuel de financement de l'Assurance Maladie auquel tous les CDS ont droit, mais que la quasi-totalité ne sollicite pas.

Pas par négligence — le sujet est peu connu (même des comptables et cabinets juridiques classiques), et le dossier est suffisamment lourd à monter pour que la plupart des directions finissent par laisser tomber.

Chez Opti-CDS on s'en occupe de A à Z, sans avance de votre part, payé uniquement si le versement arrive sur votre compte. On accompagne aussi sur les autres sujets administratifs et financiers selon vos besoins.

15 min pour qu'on regarde votre cas précisément ?

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t03_constat",
    name: "Constat sectoriel",
    angle: "Le constat partagé qui interpelle (frustration sectorielle).",
    targetFit: "Universel — ton plus marqué, fonctionne bien en cold",
    build: (c) => ({
      subject: `Le sujet que la majorité des CDS découvre`,
      body: `${hello(c)}

Constat qu'on fait sur la quasi-totalité des CDS qu'on rencontre : un dispositif annuel de financement de l'Assurance Maladie auquel ils ont tous droit, qu'aucun comptable ni juriste généraliste ne maîtrise vraiment, et que personne ne leur a jamais expliqué clairement.

Résultat : la plupart laissent tomber. Quand on s'en occupe à votre place, c'est une rentrée structurelle chaque année, en plus de la dotation classique.

On accompagne aussi sur d'autres sujets (structuration, conventionnement, sujets administratifs récurrents) selon ce qui remonte chez vous. La rémunération sur les financements est exclusivement au succès — aucune avance de votre part.

15 min en visio pour qu'on en parle ?

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t04_une_question",
    name: "1 question (break-pattern court)",
    angle: "Ultra-court, casse le pattern des mails commerciaux verbeux.",
    targetFit: "Universel — bon pour A/B test, taux d'ouverture élevé",
    build: (c) => ({
      subject: `Question rapide`,
      body: `${hello(c)}

Une seule question : qui chez vous a aujourd'hui le temps de regarder les financements auxquels votre centre a droit ?

Si la réponse est "personne", c'est exactement notre métier — financements sous-utilisés, conventionnement, sujets administratifs récurrents. Rémunération au succès sur la partie financements, aucune avance.

15 min pour qu'on en parle ?

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t05_deux_questions",
    name: "2 questions courtes",
    angle: "Engagement par question fermée — force une réponse simple.",
    targetFit: "Universel — bon en relance ou sur prospect curieux",
    build: (c) => ({
      subject: `2 questions courtes`,
      body: `${hello(c)}

Je dirige Opti-CDS, cabinet de conseil entièrement dédié aux centres de santé.

Avant qu'on échange éventuellement, deux questions :

1. Sur les 24 derniers mois, vous avez sollicité un dispositif de financement spécifique aux CDS (autre que la dotation forfaitaire) ?
2. Qui suit ces sujets administratifs et financiers chez vous au quotidien ?

Selon vos réponses, j'aurai une idée claire de si on a un sujet ensemble ou pas. Pas de pitch automatique en retour, promis.

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t06_curiosity",
    name: "Question piège (curiosité)",
    angle: "Question intrigante en ouverture, force la réflexion.",
    targetFit: "Universel — fort taux de réponse car difficile à ignorer",
    build: (c) => ({
      subject: `Connaissez-vous ce dispositif ?`,
      body: `${hello(c)}

Une question pour démarrer : avez-vous déjà entendu parler du dispositif annuel de financement de l'Assurance Maladie réservé aux centres de santé ?

Si oui — vous l'avez sollicité cette année ?

(La quasi-totalité des CDS qu'on rencontre découvrent le sujet, donc aucun jugement si la réponse est non.)

C'est un sujet parmi d'autres sur lequel on accompagne chez Opti-CDS. Si vous voulez 15 min pour qu'on vous donne le contexte précis, je suis dispo.

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t07_peer",
    name: "Réseau / peer (vingtaine de CDS)",
    angle: "Social proof : je discute avec plein de CDS, vos enjeux m'intéressent.",
    targetFit: "Directions seniors, CDS de taille moyenne à grande",
    build: (c) => ({
      subject: `J'aimerais comprendre vos enjeux`,
      body: `${hello(c)}

Je suis en discussion en ce moment avec une vingtaine de directions de CDS en France sur leurs sujets de fond — financements, conventionnement, problématiques administratives.

Plus j'échange, plus je vois les mêmes enjeux revenir (trésorerie, manque de temps sur le non-clinique, équipes débordées). Et un sujet précis revient partout : un dispositif de financement très peu sollicité par méconnaissance, malgré le fait que tous les CDS y aient droit.

15 min pour comprendre votre situation à vous ? Pas pour vous pitcher — juste pour cadrer. Si on a un sujet on en parle, sinon ça aura été utile à tous les deux.

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t08_dentaire",
    name: "Spécifique dentaire",
    angle: "Reconnaît le profil dentaire, sujets adaptés (équipement notamment).",
    targetFit: "CDS dentaires uniquement",
    build: (c) => ({
      subject: `Sujets spécifiques aux centres dentaires`,
      body: `${hello(c)}

J'ai vu que vous étiez centre dentaire. On accompagne plusieurs CDS de votre profil sur des sujets précis : financement de l'équipement (sujet brûlant en dentaire), dispositifs Assurance Maladie sous-utilisés par les centres, optimisations conventionnelles, et parfois sujets RH ou organisationnels.

Tout n'est pas pertinent pour tout le monde — en 15 min de visio j'aurai une idée plus claire de ce qui peut vraiment vous servir, plutôt que de vous balancer un pitch générique.

Un créneau cette semaine ou la suivante ?

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t09_municipal",
    name: "Spécifique municipal",
    angle: "Adapté aux contraintes mairie / CCAS / budget public.",
    targetFit: "CDS municipaux, communaux, CCAS, intercommunaux",
    build: (c) => ({
      subject: `CDS municipaux : optimisations financières`,
      body: `${hello(c)}

On accompagne plusieurs centres municipaux de santé sur leurs sujets financiers et organisationnels — dispositifs ARS sous-utilisés, recettes annexes oubliées, optimisations conventionnelles côté CPAM.

Les CDS municipaux ont des contraintes spécifiques (tutelle financière de la mairie, équipes qui tournent, budget contraint) — on adapte selon ce qui remonte chez vous, pas un programme générique.

15 min en visio cette semaine ou la suivante ?

${SIG}`,
    }),
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "t10_direction_formel",
    name: "Direction formelle",
    angle: "Ton institutionnel pour directions seniors et réseaux mutualistes.",
    targetFit: "Mutualistes, polycliniques, gros groupes (Avec Santé, Oxance, etc.)",
    build: (c) => ({
      subject: `Présentation Opti-CDS — accompagnement direction CDS`,
      body: `${hello(c)}

Je dirige Opti-CDS, cabinet de conseil entièrement dédié aux centres de santé. Nous accompagnons les directions sur les sujets administratifs, financiers et stratégiques de leurs centres.

Nos missions varient selon vos besoins : montage de dossiers de financement sous-utilisés par les CDS, accompagnement conventionnel, audit organisationnel, ou simple appui sur les sujets administratifs récurrents. La rémunération sur la partie financements est exclusivement au succès, sans aucune avance de votre part.

Je souhaitais me présenter et identifier si nous pourrions vous être utile sur un sujet précis. 15 à 20 min en visio à votre convenance.

Cordialement,

${SIG_LONG}`,
    }),
  },
];

export function templateById(id: string): Template | null {
  return TEMPLATES.find(t => t.id === id) || null;
}

export function pickTemplateFor(c: Contact): Template {
  const spec = (c.specialite || "").toLowerCase();
  if (spec.includes("dentaire")) return TEMPLATES.find(t => t.id === "t08_dentaire")!;
  if (spec.includes("municipal")) return TEMPLATES.find(t => t.id === "t09_municipal")!;
  if (c.segment === "A_premium" || spec.includes("mutualiste")) {
    return TEMPLATES.find(t => t.id === "t10_direction_formel")!;
  }
  // Rotation déterministe sur les 7 universels via hash email
  const universals = ["t01_priorites","t02_enveloppe_hidden","t03_constat",
                      "t04_une_question","t05_deux_questions","t06_curiosity","t07_peer"];
  let h = 0;
  for (let i = 0; i < c.email.length; i++) h = (h * 31 + c.email.charCodeAt(i)) | 0;
  const pick = universals[Math.abs(h) % universals.length];
  return TEMPLATES.find(t => t.id === pick)!;
}
