// Bibliothèque d'offres commerciales Opti-CDS.
//
// Contraintes posées :
//  - 100% au succès uniquement (rien à avancer pour le CDS)
//  - Pas d'engagement de durée (résiliation libre)
//  - Pas de minimum garanti
//  - Pas d'audit gratuit pré-signature (on signe le mandat puis on bosse)
//  - Décision en fin de call (offre simple, claire, mémorisable)
//
// Plusieurs modèles présentés : Sacha pourra choisir son défaut,
// mixer selon le profil prospect, ou A/B tester pendant les calls.

export type Offer = {
  id: string;
  name: string;
  tagline: string;            // une ligne pour résumer
  pricing: string;            // la formule de prix telle qu'on la dit
  forWho: string;             // profil prospect cible
  pitch: string;              // phrase orale prête à coller pendant le call
  winCds: string;             // pourquoi le CDS gagne
  winSacha: string;           // pourquoi Sacha gagne
  notes: string;              // pré-cautions, cas d'usage
  recommended?: boolean;      // ⭐ recommandé en défaut
};

export const OFFERS: Offer[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o01_pure_success",
    name: "Pure success — 1.5% du brut conventionné",
    tagline: "Le défaut universel. Zéro friction signature.",
    pricing: "1.5% du chiffre conventionné, prélevé sur chaque versement de la subvention. 0€ si rien ne tombe. Sans engagement de durée.",
    forWho: "90% des prospects. Parfait défaut quand tu n'es pas sûr du profil.",
    pitch: "C'est très simple : vous touchez 10% net de votre chiffre conventionné chaque année, je prends 1,5%. Sans avance, sans engagement. On n'est rémunérés que quand l'argent arrive sur votre compte.",
    winCds: "Zéro risque, zéro avance, équipe pas mobilisée. 10% net du CA chaque année.",
    winSacha: "Aligned sur la perf. Sur un CDS 500k€ = 7,5k€ récurrent.",
    notes: "À pousser en défaut. Très simple à pitcher, le CDS ne peut pas refuser sans paraître irrationnel.",
    recommended: true,
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o02_forfait_unique",
    name: "Forfait unique au succès",
    tagline: "Budget fixe maîtrisé, payé une seule fois.",
    pricing: "5 000€ HT one-shot, facturés à réception du 1er versement. Plus rien après. Sans engagement.",
    forWho: "Petits CDS / asso / directeurs qui n'aiment pas les %.",
    pitch: "Si vous préférez un tarif fixe : 5 000€ HT, facturés uniquement quand vous recevez le versement. Plus rien après — vous gérez les renouvellements vous-mêmes les années suivantes.",
    winCds: "Budget connu d'avance. Pas de récurrence à expliquer en interne. Bonne affaire si le CDS est gros.",
    winSacha: "Simple à pitcher, plafond bas mais cash rapide. Bon pour les CDS qui auraient refusé un %.",
    notes: "Attention : sur les gros CDS (>400k€ CA), tu touches MOINS qu'avec le %. À proposer surtout aux petits ou aux récalcitrants.",
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o03_paliers",
    name: "Paliers selon montant récupéré",
    tagline: "Tarif proportionnel à la valeur reçue, sans %.",
    pricing: "Au succès uniquement : 3 000€ si récupéré < 15k€ · 5 000€ si 15-30k€ · 8 000€ si > 30k€. Sans engagement.",
    forWho: "Directeurs qui aiment voir un tarif aligné sur la valeur, et qui détestent le concept de %.",
    pitch: "Le tarif s'adapte à ce qu'on récupère pour vous : 3 000€ jusqu'à 15k€, 5 000€ entre 15 et 30k€, 8 000€ au-delà. Toujours au succès, sans avance.",
    winCds: "Le tarif suit la valeur. Pas de surprise au-dessus de la tranche.",
    winSacha: "Tu captures bien sur les gros (8k€ vs 1.5% qui ferait 6k€ sur 400k€). Le tarif est mémorisable.",
    notes: "Bon compromis entre forfait et %. Le mot 'palier' rassure les directeurs procédurier.",
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o04_pourcentage_classique",
    name: "% du montant récupéré (style courtier)",
    tagline: "Le standard du marché fee-recovery — comprehensible pour tout le monde.",
    pricing: "10% du montant de la subvention récupérée, au succès. Sans avance, sans engagement.",
    forWho: "Directeurs qui ont déjà acheté du courtage / fee-recovery et qui s'attendent à ce modèle.",
    pitch: "Modèle classique fee-recovery : 10% du montant récupéré pour vous. Vous gardez 90%. Au succès uniquement, on n'avance rien.",
    winCds: "Format connu, comprehensible immédiatement. Ratio 90/10 très favorable au CDS.",
    winSacha: "Standard marché (les concurrents prennent 15-25%). Pitch facile, pas besoin d'expliquer.",
    notes: "Inférieur à o01 sur le récurrent (1.5% du brut ≈ 13% du récupéré sur la durée). À proposer si le prospect demande explicitement '%'.",
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o05_decomposed_milestones",
    name: "Paiement par livrables",
    tagline: "Paiement progressif aligné sur le travail livré.",
    pricing: "1 000€ à la signature du mandat · 1 500€ au dépôt complet du dossier ARS · 2 500€ au 1er versement. Total max 5 000€.",
    forWho: "Directeurs prudents qui veulent voir que tu bosses au fur et à mesure plutôt que tout au bout.",
    pitch: "Si vous préférez un paiement par étapes : 1 000€ à la signature du mandat, 1 500€ quand le dossier est déposé à l'ARS, 2 500€ au 1er versement. Vous payez progressivement, ce que vous voyez livré.",
    winCds: "Voit le travail livré en temps réel. Pas de gros chèque d'un coup.",
    winSacha: "Sécurise un revenu même si le versement met du temps. Couvre tes frais initiaux.",
    notes: "⚠️ N'est PAS 100% au succès (1k€ à la signature). À proposer si le prospect doute du sérieux/livraison. Toujours mentionner que le 1k€ est non-remboursable même si l'ARS refuse — c'est le prix du cadrage initial.",
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o06_abonnement_veille",
    name: "Abonnement Veille Subventions",
    tagline: "Partenaire continu, accès illimité à toutes les opportunités.",
    pricing: "299€ HT/mois, sans engagement (résiliable à 30 jours). Inclut Teulade + audit de tout nouveau dispositif + hotline + 1 point trimestriel.",
    forWho: "CDS qui veulent un cabinet conseil permanent à pas cher, plutôt que payer dossier par dossier.",
    pitch: "Si vous voulez qu'on soit votre partenaire continu sur tout ce qui touche aux financements et aux sujets administratifs : 299€ HT par mois, résiliable à 30 jours. On s'occupe de la Teulade ET de tout nouveau dispositif qui apparaît.",
    winCds: "Budget mensuel maîtrisé. Accès à un partenaire santé en continu, sans facture surprise.",
    winSacha: "MRR (recurring revenue) — 12 × 299€ = 3,6k€/an/client. Tu peux scaler.",
    notes: "Le retour sur Teulade seul dépasse largement les 3,6k€/an, donc le CDS y gagne tout de suite. Bon pour les directeurs qui veulent un budget annuel fixe en compta.",
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o07_tjm_conseil",
    name: "Tarif jour conseil",
    tagline: "Pour directeurs habitués au conseil classique.",
    pricing: "1 200€ HT/jour. Devis pré-établi : 4 à 5 jours pour un dossier Teulade complet, soit 4 800 - 6 000€ HT.",
    forWho: "Direction d'un gros CDS, mutualiste ou réseau habitué au conseil classique (Fidal, EY, etc.).",
    pitch: "Si vous préférez un modèle conseil classique : 1 200€ HT par jour, 4 à 5 jours pour le dossier complet. On vous fait un devis ferme à l'avance, vous savez exactement combien ça coûte.",
    winCds: "Format conseil classique, intégrable dans des process achat existants. TJM compétitif vs Fidal/EY.",
    winSacha: "Pas de risque sur tes jours. Tu factures même si l'ARS refuse (le travail a été fait).",
    notes: "⚠️ N'est PAS au succès. À proposer SEULEMENT si le prospect demande explicitement 'au TJM' ou évoque un process achat formel.",
  },
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "o08_an1_seulement",
    name: "Commission an 1 seulement",
    tagline: "Pour prospects qui détestent l'idée d'un % récurrent.",
    pricing: "2% du CA conventionné, uniquement la 1re année. Plus rien après — le CDS gère les renouvellements seul.",
    forWho: "Prospect verrouillé sur 'pas d'engagement' au sens fort. Petits CDS frileux du %.",
    pitch: "Vous ne payez la commission que la 1ère année — 2% de votre chiffre. Après, vous gérez les renouvellements vous-mêmes, on disparaît.",
    winCds: "Le CDS sent qu'il s'approprie le sujet — il paye une fois et garde le dispositif les années suivantes.",
    winSacha: "Léger surcoût en an 1 (2% au lieu de 1.5%) qui compense la perte des années suivantes. Argument fort si le prospect bloque sur 'récurrent'.",
    notes: "Risqué long-terme : si l'ARS pose des questions ou que le CDS change de directeur, ils peuvent re-venir te chercher en mode 'mission ponctuelle'. À proposer en dernier recours.",
  },
];

export function offerById(id: string): Offer | null {
  return OFFERS.find(o => o.id === id) || null;
}
