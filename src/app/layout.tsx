import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const siteUrl = "https://neuralis-mali.com";

export const metadata: Metadata = {
  title: {
    default: "NEURALIS - Creation de sites web, applications et solutions digitales au Mali",
    template: "%s | NEURALIS",
  },
  description:
    "NEURALIS accompagne les entreprises, ecoles et organisations a Bamako et au Mali : sites web, applications, LMS, ERP, data, IA, automatisation et formation.",
  keywords: [
    "NEURALIS",
    "NEURALIS Mali",
    "transformation digitale Mali",
    "agence digitale Mali",
    "agence web Bamako",
    "site web Bamako",
    "creation site web Mali",
    "application web Mali",
    "developpement web Bamako",
    "LMS Mali",
    "ERP Mali",
    "dashboard Mali",
    "intelligence artificielle Mali",
    "formation digitale Bamako",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEURALIS - Solutions digitales professionnelles au Mali",
    description:
      "Sites web, applications, plateformes metiers, communication digitale, data, IA et formation pour les organisations au Mali.",
    url: siteUrl,
    siteName: "NEURALIS",
    locale: "fr_ML",
    type: "website",
    images: [
      {
        url: "/logo-neuralis.jpeg",
        width: 1200,
        height: 630,
        alt: "NEURALIS Mali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEURALIS - Solutions digitales professionnelles au Mali",
    description:
      "Creation de sites web, applications, LMS, ERP, data, IA et formation pour les organisations au Mali.",
    images: ["/logo-neuralis.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: "NEURALIS",
  url: siteUrl,
  logo: `${siteUrl}/logo-neuralis.jpeg`,
  email: "contact@neuralis-mali.com",
  description:
    "NEURALIS accompagne les entreprises, ecoles, PME et organisations au Mali dans la creation de sites web, applications, plateformes metiers, data, IA, automatisation et formation.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bamako",
    addressCountry: "ML",
  },
  areaServed: [
    { "@type": "Country", name: "Mali" },
    { "@type": "City", name: "Bamako" },
  ],
  knowsAbout: [
    "Creation de sites web",
    "Developpement web et mobile",
    "LMS",
    "ERP",
    "Data",
    "Business Intelligence",
    "Intelligence artificielle",
    "Automatisation",
    "Formation digitale",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@neuralis-mali.com",
    contactType: "customer service",
    areaServed: "ML",
    availableLanguage: ["fr"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
