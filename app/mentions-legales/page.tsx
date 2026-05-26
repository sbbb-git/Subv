import type { Metadata } from "next";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site SubventionsCDS",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">Mentions légales</h1>
      <div className="prose-content mt-8">
        <h2>Éditeur</h2>
        <p>
          <strong>{SITE_NAME}</strong>
          <br />Adresse : [à compléter]
          <br />Email : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />SIRET : [à compléter]
          <br />Directeur de la publication : [à compléter]
        </p>
        <h2>Hébergement</h2>
        <p>Cloudflare Pages — Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.</p>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site est protégé par le droit
          d’auteur. Toute reproduction sans autorisation est interdite.
        </p>
        <h2>Données personnelles</h2>
        <p>
          Les données collectées via le formulaire de contact sont utilisées
          exclusivement pour répondre à votre demande. Vous disposez d’un droit
          d’accès, de rectification et de suppression en écrivant à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </section>
  );
}
