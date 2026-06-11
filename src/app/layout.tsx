import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { businessInfo } from "@/lib/business-info";
import "./globals.css";

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
  metadataBase: new URL(businessInfo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEURALIS - Solutions digitales professionnelles au Mali",
    description:
      "Sites web, applications, plateformes metiers, communication digitale, data, IA et formation pour les organisations au Mali.",
    url: businessInfo.siteUrl,
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
  name: businessInfo.name,
  url: businessInfo.siteUrl,
  logo: `${businessInfo.siteUrl}/logo-neuralis.jpeg`,
  email: businessInfo.email,
  telephone: businessInfo.phoneInternational,
  description:
    "NEURALIS accompagne les entreprises, ecoles, PME et organisations au Mali dans la creation de sites web, applications, plateformes metiers, data, IA, automatisation et formation.",
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.city,
    addressCountry: businessInfo.countryCode,
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
    email: businessInfo.email,
    telephone: businessInfo.phoneInternational,
    contactType: "customer service",
    areaServed: businessInfo.countryCode,
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
