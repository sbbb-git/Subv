import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site SubventionTeulade.fr",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
      <h1 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-ink">Mentions légales</h1>
      <div className="prose-content mt-8">
        <h2>Éditeur</h2>
        <p>
          <strong>{SITE_NAME}</strong> — Cabinet de conseil spécialisé dans
          l’accompagnement des centres de santé.
          <br />Adresse : [à compléter]
          <br />Email : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />SIRET : [à compléter] — RCS : [à compléter]
          <br />Directeur de la publication : [à compléter]
        </p>
        <h2>Hébergement</h2>
        <p>Hébergeur : [à compléter] — Adresse : [à compléter]</p>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, visuels, logo,
          structure) est protégé par le droit d’auteur. Toute reproduction sans
          autorisation est interdite.
        </p>
        <h2>Données personnelles</h2>
        <p>
          Les données collectées via le formulaire de contact sont utilisées
          exclusivement pour répondre à votre demande. Vous disposez d’un droit
          d’accès, de rectification et de suppression en écrivant à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <h2>Indépendance</h2>
        <p>
          {SITE_NAME} est un cabinet privé, indépendant de la CPAM, de l’URSSAF, de
          l’Assurance Maladie, de la FNCS et de toute autorité publique. Les marques
          et dispositifs cités le sont uniquement à titre informatif.
        </p>
      </div>
    </section>
  );
}
