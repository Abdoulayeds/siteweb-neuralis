import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NEURALIS - Le partenaire digital des entreprises ambitieuses",
    template: "%s | NEURALIS",
  },
  description:
    "NEURALIS accompagne les entreprises, ecoles et organisations a Bamako dans leur transformation digitale : sites web, applications, LMS, ERP, data, IA et formation.",
  keywords: [
    "NEURALIS",
    "transformation digitale Mali",
    "site web Bamako",
    "application web Mali",
    "LMS Mali",
    "ERP Mali",
    "data",
    "intelligence artificielle",
  ],
  metadataBase: new URL("https://neuralis.ml"),
  openGraph: {
    title: "NEURALIS - Le partenaire digital des entreprises ambitieuses",
    description:
      "Sites web, applications, plateformes metiers, communication digitale, data, IA et formation pour les organisations ambitieuses.",
    url: "https://neuralis.ml",
    siteName: "NEURALIS",
    locale: "fr_ML",
    type: "website",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

