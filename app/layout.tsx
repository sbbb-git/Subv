import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SubventionsCDS — Cabinet de conseil pour centres de santé",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "centre de santé", "CDS", "consulting centre de santé", "accompagnement CDS",
    "créer un centre de santé", "ouvrir un CDS", "développer un centre de santé",
    "comptabilité centre de santé", "dossier ARS centre de santé", "conventionnement CPAM",
    "subventions centre de santé", "financement CDS", "ACI centre de santé", "FIR",
    "URSSAF centre de santé", "projet de santé", "subvention Teulade", "article L162-32",
    "audit financier CDS", "cabinet conseil CDS",
  ],
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SubventionsCDS — Cabinet de conseil pour centres de santé",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: DEFAULT_DESCRIPTION },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  category: "santé",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    areaServed: "FR",
    serviceType: "Conseil et accompagnement des centres de santé",
    knowsAbout: [
      "Création de centre de santé",
      "Développement de centre de santé",
      "Comptabilité de centre de santé",
      "Dossier ARS",
      "Conventionnement CPAM",
      "Accord Conventionnel Interprofessionnel (ACI)",
      "Fonds d’Intervention Régional (FIR)",
      "Subventions et financements CDS",
    ],
  };
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1659d0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
