import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import Simulator from "./Simulator";

export const metadata: Metadata = {
  title: "Simulateur subvention Teulade : estimez votre montant en 1 minute",
  description:
    "Estimez en quelques clics le montant de la subvention Teulade auquel votre centre de santé a droit, en cours et sur les 3 années non prescrites.",
  alternates: { canonical: "/simulateur" },
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white border-b border-brand-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Simulateur" }]} />
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Simulateur de subvention Teulade
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl">
            Renseignez les effectifs salariés soignants de votre centre de santé. Notre
            simulateur calcule instantanément le montant Teulade auquel vous avez droit.
          </p>
          <p className="mt-2 text-xs text-ink-mute max-w-3xl">
            Estimation indicative basée sur des salaires moyens du secteur. Pour une
            estimation précise sur vos chiffres réels, demandez un diagnostic gratuit.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Simulator />
        </div>
      </section>

      <CTASection
        title="Confirmer ce montant sur vos vraies données"
        subtitle="Notre audit gratuit utilise vos DSN et attestations URSSAF réelles."
      />
    </>
  );
}
