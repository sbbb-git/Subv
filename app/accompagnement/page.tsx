import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { makePageMeta } from "@/lib/seo";

export const metadata: Metadata = makePageMeta({
  title: "Accompagnement des centres de santé",
  description:
    "On vous aide à trouver vos médecins et à récupérer vos financements. Au succès, sans avance, sans engagement. Le cabinet 100% dédié aux centres de santé.",
  path: "/accompagnement",
});

const pillars = [
  {
    t: "On résout le problème numéro un : le recrutement",
    d: "Là où les autres parlent paperasse, on parle médecins. C’est ce qui empêche un directeur de dormir, c’est par là qu’on entre. Nos partenaires recruteurs vont chercher vos praticiens.",
  },
  {
    t: "On transforme un coût en recette, sans effort pour vous",
    d: "On va chercher de l’argent existant, dû, que votre centre ne réclame pas. Vous ne mobilisez pas vos équipes, vous ne sortez rien, et vous touchez net.",
  },
  {
    t: "Zéro risque, zéro engagement",
    d: "100% au succès sur nos prestations financières. Pas d’avance, pas d’audit payant avant signature, pas de durée imposée. Vous ne pouvez pas perdre.",
  },
  {
    t: "Un seul interlocuteur pour tout le cycle de vie du centre",
    d: "Du recrutement au financement, de la conformité à la gestion. On connaît le secteur, rien que le secteur. 100% dédié aux centres de santé.",
  },
];

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Accompagnement" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Notre accompagnement</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            Vos <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">médecins</span> et vos financements. On s’occupe des deux.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Opti-CDS est un cabinet de conseil 100% dédié aux centres de santé français. Nous intervenons d’abord là où ça compte vraiment : le recrutement de vos praticiens et la récupération des financements auxquels votre centre a droit. Au succès, sans avance, sans engagement de durée.
          </p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary text-base">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre service phare</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Trouver des médecins, c’est votre vrai problème. C’est notre métier.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              La pénurie de praticiens est le premier frein à la croissance des centres de santé. Un cabinet inoccupé, c’est de la patientèle qui s’en va et du chiffre conventionné qui ne rentre pas. Recruter demande du temps, des réseaux et une attractivité que peu de centres peuvent construire seuls.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Nous mobilisons nos <Link href="/recrutement-medecins" className="text-accent-700 underline decoration-accent-200 underline-offset-2 hover:decoration-accent-500">partenaires recrutement</Link> pour aller chercher les praticiens qu’il vous faut. Sourcing actif, approche directe, réseaux de médecins, positionnement de votre centre, sécurisation des contrats. Notre objectif n’est pas de vous livrer des CV, mais des médecins qui s’installent et qui restent.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Les financements oubliés</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Une part de vos financements n’est jamais réclamée.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Il existe des financements conventionnels et publics réservés aux centres de santé. La plupart des centres n’en mobilisent qu’une fraction, faute de temps et parce que les dossiers sont longs et techniques. Année après année, ce sont des sommes significatives qui restent sur la table.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Nous identifions ces dispositifs, nous montons les dossiers et nous suivons les échanges jusqu’au versement effectif des fonds. Vous validez, nous agissons. Pour aller plus loin, découvrez notre prise en charge de la <Link href="/subvention-teulade" className="text-accent-700 underline decoration-accent-200 underline-offset-2 hover:decoration-accent-500">subvention Teulade</Link> et le panorama des <Link href="/financements" className="text-accent-700 underline decoration-accent-200 underline-offset-2 hover:decoration-accent-500">financements d’un centre de santé</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre façon de travailler</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Au succès. Sans avance. Sans engagement.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div key={p.t} className="rounded-2xl bg-white ring-1 ring-line p-6">
                <h3 className="text-lg font-bold text-ink">{p.t}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Une fois en place</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Un seul interlocuteur pour tout le cycle de vie de votre centre.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Une fois la confiance établie, vous avez un partenaire unique pour les sujets qui structurent et sécurisent votre centre : structuration et création, conformité ARS, gestion et pilotage, développement. Nous ne travaillons qu’avec des centres de santé. Nous connaissons votre secteur, vos contraintes et vos interlocuteurs.
            </p>
            <Link href="/services" className="mt-6 inline-flex btn-secondary text-base">Voir tous nos services</Link>
          </div>
        </div>
      </section>

      <CTASection title="On commence par un check-up." subtitle="Quinze minutes pour regarder vos besoins en recrutement et les financements que vous pourriez récupérer." label="Contactez-nous pour un check-up" href="/contact" />
    </>
  );
}
