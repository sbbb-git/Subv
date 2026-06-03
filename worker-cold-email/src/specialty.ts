// Devine la spécialité d'un CDS depuis son nom (FINESS)

const RULES: Array<[RegExp, string]> = [
  [/dentaire|dental|odonto|orthod/i, "Dentaire"],
  [/ophtalmo|optique|vision/i, "Ophtalmologie"],
  [/psychiatr|psycho|sante mentale|santé mentale|cmpp|cmp|smpr/i, "Psychiatrie / Santé mentale"],
  [/echographie|imagerie|radio|radiolog|scanner|irm/i, "Imagerie"],
  [/planning|planification|familial|ivg|cpef/i, "Planning familial"],
  [/dialyse|nephro/i, "Dialyse"],
  [/kine|rééducation|reeducation|kinesi/i, "Rééducation"],
  [/infirm|csi /i, "Infirmier"],
  [/maternel|petite enfance|pmi/i, "PMI / Petite enfance"],
  [/sage[- ]femme/i, "Sage-femme"],
  [/addict|cssra|csapa/i, "Addictologie"],
  [/polyvalent|pluridisciplin/i, "Polyvalent"],
  [/municipal/i, "Municipal"],
  [/mutualiste|mutuelle/i, "Mutualiste"],
];

export function guessSpecialty(nom: string | null | undefined): string {
  if (!nom) return "Médical";
  for (const [re, label] of RULES) {
    if (re.test(nom)) return label;
  }
  return "Médical";
}
