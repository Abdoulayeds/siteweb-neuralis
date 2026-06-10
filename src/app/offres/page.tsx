import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { OfferCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { offers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Packs NEURALIS : Presence Digitale, Site Web Pro, Plateforme Metier, Data & Automatisation et Formation.",
};

export default function OffresPage() {
  return (
    <>
      <PageHero
        eyebrow="Offres commerciales"
        title="Des offres simples pour demarrer votre transformation digitale."
        description="Pour faciliter le lancement des projets, NEURALIS propose des offres claires et adaptables. Les prix peuvent etre definis sur devis selon le niveau de service, la duree et les objectifs."
        secondaryLabel="Nous contacter"
        secondaryHref="/contact"
      />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Packs"
            title="Choisissez une porte d'entree claire."
            description="Chaque pack peut etre personnalise apres un echange de cadrage. L'objectif est de rendre l'achat simple sans enfermer le projet."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.title} {...offer} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Sur mesure"
            title="Votre besoin ne rentre pas dans un pack ?"
            description="NEURALIS peut cadrer une solution sur mesure : application, LMS, ERP, dashboard, assistant IA, formation ou accompagnement complet."
            align="center"
          />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Demander une proposition</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Comparer les services
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

