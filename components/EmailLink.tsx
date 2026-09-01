import { CONTACT_EMAIL } from "@/lib/seo";

/**
 * Lien e-mail soustrait à l'obfuscation Cloudflare.
 *
 * Cloudflare réécrit tout `mailto:` en un lien vers /cdn-cgi/l/email-protection,
 * qui renvoie 404 aux crawlers. Résultat mesuré : les 82 pages du site
 * pointaient vers une URL morte, ce qu'un audit a remonté comme autant
 * d'erreurs.
 *
 * La protection était par ailleurs illusoire : l'adresse restait lisible en
 * clair dans les données de rendu React de chaque page. On payait donc un lien
 * cassé partout sans rien protéger.
 *
 * Les marqueurs `<!--email_off-->` sont la méthode documentée par Cloudflare
 * pour exclure une adresse de ce traitement. Ils doivent apparaître dans le
 * HTML servi, ce qu'un commentaire JSX ne produit pas : d'où
 * dangerouslySetInnerHTML.
 *
 * `display: contents` sur l'enveloppe évite qu'elle ne devienne l'élément
 * flex à la place du lien dans les mises en page qui en dépendent.
 */
export function EmailLink({
  className,
  children,
}: {
  className?: string;
  children?: string;
}) {
  const texte = children ?? CONTACT_EMAIL;
  const cls = className ? ` class="${className}"` : "";
  return (
    <span
      style={{ display: "contents" }}
      dangerouslySetInnerHTML={{
        __html: `<!--email_off--><a href="mailto:${CONTACT_EMAIL}"${cls}>${texte}</a><!--/email_off-->`,
      }}
    />
  );
}
