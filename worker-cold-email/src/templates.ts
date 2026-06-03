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
  const nomShort = (c.nom_cds || "votre centre").slice(0, 60);
  return {
    subject: `Subvention Teulade — éligibilité de votre centre`,
    body: `${hello(c)}

Je dirige Opti-CDS, on accompagne les centres de santé sur la subvention Teulade (article L162-32 du code de la sécurité sociale) et le montage des dossiers ARS associés.

En moyenne nos clients récupèrent 15 à 20 k€ par dossier validé. Rémunération exclusivement au succès — vous ne nous payez que si la subvention tombe sur votre compte.

Vous avez 15 min cette semaine pour qu'on regarde rapidement si ${nomShort} est éligible ? Je vous fais un check sans engagement.

Bonne journée,

Sacha Bitoun
Opti-CDS
https://opti-cds.fr`,
  };
}

// ---- Relances (toujours templatées, pas custom-éditées) ----
export function buildJ4(c: Contact, unsubUrl: string, j0Subject: string) {
  const subject = `Re: ${j0Subject}`;
  const text = `${hello(c)}

Petit up au cas où mon mail serait passé sous le radar.

Pour être concret, voici comment on travaille :

  1. On vérifie votre éligibilité en 48h (gratuit)
  2. On monte le dossier ARS à votre place
  3. On suit le versement jusqu'au virement
  4. Vous payez uniquement quand la subvention arrive

Dossier moyen : 15 à 20 k€. Délai d'instruction ARS : 2 à 4 mois.

Un créneau de 15 min vous arrange cette semaine ou la suivante ?

Sacha${footer(unsubUrl)}`;
  return { subject, text };
}

export function buildJ9(c: Contact, unsubUrl: string, j0Subject: string) {
  const subject = `Re: ${j0Subject}`;
  const text = `${hello(c)}

Sans retour de votre part je vais clôturer la prise de contact, pas de souci.

Si le sujet redevient prioritaire un jour (Teulade, FIR, FIQCS, montage de dossier ARS), un mail suffira pour reprendre.

Bonne continuation à votre équipe,

Sacha Bitoun
Opti-CDS${footer(unsubUrl)}`;
  return { subject, text };
}

// ---- Wrapping final du J0 : on prend le draft user et on ajoute le footer ----
export function wrapJ0Body(draftBody: string, unsubUrl: string): string {
  // n'ajoute pas le footer s'il est déjà là (au cas où l'utilisateur l'ait collé)
  if (draftBody.includes("Pour ne plus recevoir nos messages")) return draftBody;
  return draftBody + footer(unsubUrl);
}
