import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SubventionsCDS — Accompagnement & financements pour centres de santé",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "subventions centre de santé",
    "financement CDS",
    "accompagnement centre de santé",
    "consulting centre de santé",
    "aides centre de santé",
    "ACI centre de santé",
    "FIR centre de santé",
    "CPAM centre de santé",
    "URSSAF centre de santé",
    "audit financier CDS",
    "subvention Teulade",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SubventionsCDS — Accompagnement & financements pour centres de santé",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "SubventionsCDS",
    description: DEFAULT_DESCRIPTION,
  },
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
    serviceType: "Accompagnement, conseil et mobilisation des financements pour les centres de santé",
    knowsAbout: [
      "Centres de santé",
      "Accord conventionnel interprofessionnel (ACI)",
      "Fonds d’intervention régional (FIR)",
      "Subvention Teulade",
      "Article L162-32 du code de la sécurité sociale",
      "Forfait Structure",
      "CPAM",
      "URSSAF",
      "ARS",
    ],
  };

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1659d0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
