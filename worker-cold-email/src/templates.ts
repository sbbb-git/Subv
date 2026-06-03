// Templates et helpers de génération de drafts

export type Contact = {
  id: number;
  email: string;
  first_name: string | null;
  nom_cds: string | null;
  ville: string | null;
  specialite?: string | null;
};

const hello = (c: Contact) => (c.first_name ? `Bonjour ${c.first_name},` : "Bonjour,");

const footer = (unsubUrl: string) =>
  `\n\n---\nMail envoyé à titre professionnel à l'adresse publique de votre établissement.\nPour ne plus recevoir nos messages : ${unsubUrl}`;

// ---- Génère un draft auto à l'import (l'utilisateur peut ensuite éditer) ----
export function buildDraft(c: Contact): { subject: string; body: string } {
  return {
    subject: `Un financement Assurance Maladie que la plupart des CDS ne demandent pas`,
    body: `${hello(c)}

Je dirige Opti-CDS — on accompagne les centres de santé sur un dispositif de financement de l'Assurance Maladie auquel tous les CDS ont droit, mais que la quasi-totalité ne demande jamais.

Pas par négligence : le sujet est si peu connu (même des comptables et avocats généralistes) et le dossier tellement administratif que la plupart des directions finissent par laisser tomber. Pourtant c'est une rentrée non négligeable chaque année quand on s'en occupe correctement.

On prend tout en charge, de bout en bout, sans avance de votre part : on n'est rémunéré qu'au succès — uniquement si le versement arrive sur votre compte.

Vous avez 15 min cette semaine pour qu'on en parle ?

Bonne journée,

Sacha
Opti-CDS
https://opti-cds.fr`,
  };
}

// ---- Relances (toujours templatées, pas custom-éditées) ----
export function buildJ4(c: Contact, unsubUrl: string, j0Subject: string) {
  const subject = `Re: ${j0Subject}`;
  const text = `${hello(c)}

Petit up au cas où mon mail serait passé sous le radar.

Pour faire simple : on prend le dossier de A à Z, c'est nous qui passons les heures dessus (pas votre équipe), et vous ne payez rien tant que rien ne tombe. Aucun risque, juste un sujet qu'on connaît bien et que peu de gens savent monter.

Un créneau de 15 min vous arrange cette semaine ou la suivante ?

Sacha${footer(unsubUrl)}`;
  return { subject, text };
}

export function buildJ9(c: Contact, unsubUrl: string, j0Subject: string) {
  const subject = `Re: ${j0Subject}`;
  const text = `${hello(c)}

Sans retour de votre part je vais clôturer la prise de contact, pas de souci.

Si le sujet redevient prioritaire un jour, un mail suffira pour reprendre.

Bonne continuation à votre équipe,

Sacha
Opti-CDS${footer(unsubUrl)}`;
  return { subject, text };
}

// ---- Wrapping final du J0 : on prend le draft user et on ajoute le footer ----
export function wrapJ0Body(draftBody: string, unsubUrl: string): string {
  // n'ajoute pas le footer s'il est déjà là (au cas où l'utilisateur l'ait collé)
  if (draftBody.includes("Pour ne plus recevoir nos messages")) return draftBody;
  return draftBody + footer(unsubUrl);
}
