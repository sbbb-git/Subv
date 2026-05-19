import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Subvention Teulade : récupérez 11,5 % des charges patronales de votre centre de santé",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "subvention Teulade",
    "Teulade centre de santé",
    "article L162-32",
    "CPAM centre de santé",
    "financement centre de santé",
    "aide Teulade",
    "subvention CDS",
    "accompagnement centre de santé",
    "consulting centre de santé",
    "URSSAF centre de santé",
    "11,5 % charges patronales",
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
    title: "Subvention Teulade : récupérez 11,5 % des charges patronales de votre centre de santé",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Subvention Teulade pour centres de santé",
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
    serviceType: "Accompagnement administratif et financier des centres de santé",
    knowsAbout: [
      "Subvention Teulade",
      "Article L162-32 du code de la sécurité sociale",
      "Accord conventionnel interprofessionnel (ACI)",
      "Centre de santé pluriprofessionnel",
      "CPAM",
      "URSSAF",
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
