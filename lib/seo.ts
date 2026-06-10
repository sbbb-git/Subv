export const SITE_NAME = "Opti-CDS";
export const SITE_URL = "https://opti-cds.fr";
export const DEFAULT_DESCRIPTION =
  "Opti-CDS accompagne les centres de santé : création, recrutement, organisation, gestion, financements. Notre offre phare : la récupération des subventions.";

export const CONTACT_EMAIL = "contact@opti-cds.fr";

export const OG_IMAGE = "/og-image.svg";

// ---------------------------------------------------------------------------
// Helpers d'écriture des Metadata Next (corrige le bug "OG image disparaît").
//
// Quand une page définit `openGraph: { title, description, url }`, Next écrase
// COMPLÈTEMENT le openGraph racine défini dans app/layout.tsx — y compris
// l'image, le site_name, la locale et le type. Résultat : ouverture social
// sans visuel, et Ahrefs flag "Open Graph tags incomplete" sur toutes les
// pages internes.
//
// makePageMeta() construit un objet Metadata cohérent (title, description,
// alternates.canonical, openGraph complet, twitter card) à partir des seuls
// champs spécifiques de la page. Le canonical et og.url sont toujours
// alignés, ce qui supprime aussi le warning "Open Graph URL not matching
// canonical".
// ---------------------------------------------------------------------------
export type PageMetaInput = {
  title: string;             // titre court (Next y ajoute "· Opti-CDS" via template du layout)
  description: string;       // 110-150 caractères pour rester dans le sweet spot SEO
  path: string;              // chemin absolu sans domaine (ex: "/services/audit-financier")
  ogType?: "website" | "article";
  publishedTime?: string;    // pour les articles, format ISO
};

export function makePageMeta(input: PageMetaInput): import("next").Metadata {
  const url = `${SITE_URL}${input.path}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      type: input.ogType ?? "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      url,
      title: input.title,
      description: input.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [OG_IMAGE],
    },
  };
}
