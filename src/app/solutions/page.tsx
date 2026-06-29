import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { sectors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solutions digitales NEURALIS pour ecoles, PME, commerces, ONG, startups, cabinets et institutions au Mali.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Des solutions pensees par besoin client, pas seulement par technologie."
        description="Mieux gerer une ecole, suivre les ventes, attirer des clients ou automatiser une tache : NEURALIS transforme ces besoins en solutions concretes."
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Secteurs"
            title="Chaque organisation trouve un chemin clair vers le digital."
            description="Nos solutions s'adaptent au niveau, aux objectifs et aux realites de chaque client."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <article key={sector.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <sector.icon className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-6 text-xl font-semibold text-slate-950">{sector.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{sector.description}</p>
                <div className="mt-6 grid gap-2">
                  {sector.needs.map((need) => (
                    <div key={need} className="flex gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" aria-hidden />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-eyebrow text-cyan-200">Cadrage</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold md:text-6xl">
            La bonne solution commence par le bon diagnostic.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Un audit rapide permet d&apos;identifier la premiere action utile pour votre organisation.
          </p>
          <div className="mt-9">
            <ButtonLink href="/contact">Demander un diagnostic</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
