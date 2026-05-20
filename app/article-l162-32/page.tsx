import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Article L162-32 du code de la sécurité sociale — repère pour les CDS",
  description:
    "Article L162-32 du code de la sécurité sociale : repères généraux sur ce texte fondateur des relations entre l’Assurance Maladie et les centres de santé.",
  alternates: { canonical: "/article-l162-32" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Article L162-32" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Article L162-32 du code de la sécurité sociale
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Repères généraux sur l’un des textes fondateurs des relations entre
            l’Assurance Maladie et les centres de santé.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content">
        <h2>Un texte structurant</h2>
        <p>
          L’article L162-32 du code de la sécurité sociale encadre les rapports
          entre les organismes d’assurance maladie et les centres de santé. Il
          renvoie à un accord national et à des décrets d’application qui
          précisent les modalités de prise en charge d’une partie des charges
          sociales des CDS conventionnés.
        </p>

        <h2>Une logique d’équilibre</h2>
        <p>
          Le législateur a souhaité, par ce texte, rééquilibrer la différence
          structurelle entre exercice libéral — où l’Assurance Maladie contribue
          à certaines cotisations des praticiens conventionnés — et exercice
          salarié, propre aux centres de santé. C’est de là que vient,
          historiquement, la <Link href="/subvention-teulade">subvention dite Teulade</Link>{" "}
          (du nom du ministre signataire du décret d’application de 1992).
        </p>

        <h2>Un cadre, plusieurs leviers</h2>
        <p>
          En pratique, l’article L162-32 et ses textes d’application interviennent
          en articulation avec d’autres dispositifs (<Link href="/financements#aci">ACI</Link>,
          <Link href="/financements#fir"> FIR</Link>, <Link href="/financements#forfait-structure">Forfait Structure</Link>,
          aides à l’installation). C’est l’architecture d’ensemble qui détermine
          la santé financière d’un CDS — pas un texte pris isolément.
        </p>

        <h2>Notre rôle</h2>
        <p>
          Nous accompagnons les centres de santé dans la mobilisation cohérente
          de l’ensemble de ces leviers, en lien avec la CPAM, l’URSSAF et l’ARS.
          Voir notre <Link href="/accompagnement">offre d’accompagnement</Link>.
        </p>
      </article>

      <CTASection />
    </>
  );
}
