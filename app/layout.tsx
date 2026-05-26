import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, OG_IMAGE } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-fraunces", axes: ["opsz", "SOFT"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Subvention Teulade & accompagnement des centres de santé · SubventionsCDS",
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "subvention Teulade",
    "Teulade centre de santé",
    "article L162-32",
    "L162-32 code sécurité sociale",
    "cabinet conseil centre de santé",
    "accompagnement centre de santé",
    "consultant centre de santé",
    "créer un centre de santé",
    "ouvrir un centre de santé",
    "développer un centre de santé",
    "comptabilité centre de santé",
    "dossier ARS centre de santé",
    "conventionnement CPAM",
    "subventions centre de santé",
    "financement centre de santé",
    "ACI centre de santé",
    "FIR centre de santé",
    "URSSAF centre de santé",
    "projet de santé",
    "audit financier centre de santé",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Subvention Teulade & accompagnement des centres de santé",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subvention Teulade · SubventionsCDS",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  category: "santé",
  formatDetection: { telephone: true, email: true, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#cabinet`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    areaServed: "FR",
    serviceType: "Conseil et accompagnement des centres de santé",
    knowsAbout: [
      "Subvention Teulade",
      "Article L162-32 du code de la sécurité sociale",
      "Création de centre de santé",
      "Développement de centre de santé",
      "Comptabilité de centre de santé",
      "Dossier ARS",
      "Conventionnement CPAM",
      "Accord Conventionnel Interprofessionnel (ACI)",
      "Fonds d’Intervention Régional (FIR)",
    ],
    sameAs: [],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}#cabinet` },
    inLanguage: "fr-FR",
  };

  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1660C9" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
