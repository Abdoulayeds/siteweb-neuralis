import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { allServices } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tous les services NEURALIS : sites web, applications web et mobiles, LMS, ERP, communication digitale, data, IA, automatisation, formation et consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Des solutions digitales pour chaque etape de votre croissance."
        description="NEURALIS aide votre organisation a gagner en visibilite, automatiser sa gestion, exploiter ses donnees et former ses equipes."
        secondaryLabel="Voir les offres"
        secondaryHref="/offres"
      />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {allServices.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                        <service.icon className="h-7 w-7" aria-hidden />
                      </span>
                      <div>
                        <p className="section-eyebrow">{service.eyebrow}</p>
                        <p className="text-sm font-semibold text-slate-300">0{index + 1}</p>
                      </div>
                    </div>
                    <h2 className="mt-6 text-balance text-3xl font-semibold text-slate-950 md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                    <div className="mt-7">
                      <ButtonLink href="/contact" variant="light">
                        {service.cta}
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="rounded-3xl bg-slate-50 p-5">
                      <h3 className="font-semibold text-slate-950">Pour qui ?</h3>
                      <ul className="mt-4 grid gap-3">
                        {service.forWho.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-3xl bg-slate-950 p-5 text-white">
                      <h3 className="font-semibold">Livrables possibles</h3>
                      <ul className="mt-4 grid gap-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Prochaine etape"
            title="Vous ne savez pas encore quel service choisir ?"
            description="Expliquez votre situation. Nous vous aidons a choisir la bonne premiere etape."
            align="center"
          />
          <div className="mt-8">
            <ButtonLink href="/contact">Discuter de mon projet</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
