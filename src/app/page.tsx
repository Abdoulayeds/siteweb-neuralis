import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { AccordionList } from "@/components/accordion-list";
import { ButtonLink } from "@/components/button-link";
import { ServiceCard } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { TechVisual } from "@/components/tech-visual";
import {
  advancedServices,
  branches,
  faqItems,
  guidedNeeds,
  launchServices,
  methodSteps,
  portfolioItems,
  sectors,
  socialProof,
  stats,
} from "@/lib/site-data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.description,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="hero-grid absolute inset-0 opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(6,182,212,0.3),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(14,116,144,0.2),transparent_28%),linear-gradient(135deg,rgba(15,23,42,.35),#020617_76%)]" />
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full border border-cyan-300/10" />
        <div className="absolute -left-12 top-40 h-44 w-44 rounded-full border border-cyan-300/15" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              {"De l'idee au lancement"} · Bamako
            </div>
            <h1 className="mt-8 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl xl:text-[4.65rem]">
              Des solutions digitales qui font <span className="text-cyan-300">avancer</span> votre entreprise.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Création de sites web, applications, plateformes métiers, data et IA : NEURALIS transforme vos idées
              en outils utiles, performants et pensés pour les réalités du Mali.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Démarrer mon projet</ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Explorer nos expertises
              </ButtonLink>
            </div>
            <div className="mt-11 grid gap-x-6 gap-y-3 border-t border-white/10 pt-7 sm:grid-cols-2">
              {socialProof.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" aria-hidden />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <TechVisual />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              eyebrow="Le probleme"
              title="Votre entreprise a besoin d'une presence digitale solide."
              description="Sans presence en ligne claire ni outils adaptes, une organisation perd des opportunites et du temps."
            />
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-lg font-medium leading-8 text-slate-900">
                NEURALIS construit des solutions digitales modernes, utiles et faciles a utiliser.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Image plus professionnelle",
                  "Outils adaptes a votre activite",
                  "Meilleure communication client",
                  "Processus plus simples",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-cyan-300/20 bg-white p-6 text-slate-950 shadow-[0_30px_100px_rgba(6,182,212,0.16)] md:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="section-eyebrow text-cyan-700">Parcours simple</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold text-slate-950 md:text-5xl">
                Pas besoin d&apos;etre technique pour demarrer.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Choisissez votre situation. NEURALIS traduit votre besoin en solution claire, avec les bonnes
                priorites et les prochaines etapes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Expliquer mon besoin
                </ButtonLink>
                <ButtonLink href="/offres" variant="secondary">
                  Voir les packs
                </ButtonLink>
              </div>
            </div>
            <AccordionList items={guidedNeeds} variant="light" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services de lancement"
            title="Commencer par le concret, construire ensuite plus grand."
            description="Sur la page d'accueil, NEURALIS met d'abord en avant les services les plus vendables au lancement, puis montre son ecosysteme complet."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {launchServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Ecosysteme NEURALIS"
              title="Une marque, plusieurs expertises connectees."
              description="De la presence digitale aux solutions data et IA, NEURALIS accompagne les organisations par etapes."
              inverted
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {branches.map((branch) => (
                <ServiceCard key={branch.title} {...branch} dark />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Vision avancee"
            title="Data, automatisation et IA comme prochaine etape naturelle."
            description="Une fois la base digitale en place, les donnees, l'automatisation et l'IA aident a aller plus vite."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advancedServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Solutions par secteur"
                title="Chaque client doit se reconnaitre rapidement."
                description="Ecoles, PME, commerces, ONG ou startups : chaque besoin peut devenir une solution simple."
              />
              <div className="mt-8">
                <ButtonLink href="/solutions" variant="light">
                  Voir les solutions
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.slice(0, 4).map((sector) => (
                <article key={sector.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <sector.icon className="h-6 w-6 text-cyan-600" aria-hidden />
                  <h3 className="mt-4 font-semibold text-slate-950">{sector.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{sector.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Methode"
            title="Une methode claire pour livrer des projets professionnels."
            description="Le processus NEURALIS permet de comprendre le besoin, cadrer le projet, livrer proprement et accompagner l'utilisation."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {methodSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <step.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Portfolio"
                title="Des demonstrations pour construire la credibilite des le lancement."
                description="Nos prototypes montrent concretement ce que NEURALIS peut concevoir pour ses clients."
                inverted
              />
              <div className="mt-8">
                <ButtonLink href="/portfolio" variant="ghost">
                  Voir les demonstrations
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioItems.slice(0, 4).map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="section-eyebrow text-cyan-200">Offres</p>
                <h2 className="mt-3 text-balance text-3xl font-semibold md:text-5xl">
                  Des packs clairs pour demarrer votre transformation digitale.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Chaque offre peut etre personnalisee selon le besoin, le budget, le calendrier et le niveau
                  d&apos;accompagnement attendu.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/offres">Voir les offres</ButtonLink>
                  <ButtonLink href="/contact" variant="ghost">
                    Parler du projet
                  </ButtonLink>
                </div>
              </div>
              <div className="grid gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="text-3xl font-semibold text-cyan-200">{stat.value}</span>
                    <span className="text-sm text-slate-300">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <SectionHeader
            eyebrow="Questions frequentes"
            title="Des reponses simples avant le premier rendez-vous."
            description="Des reponses directes pour demarrer sans jargon."
          />
          <AccordionList items={faqItems} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-eyebrow">Passons a l&apos;action</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold text-slate-950 md:text-6xl">
            Vous avez un projet digital ? Parlons-en.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Site web, application, LMS, ERP, communication digitale, data, IA ou formation : NEURALIS vous aide a
            choisir la bonne premiere etape.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Contacter NEURALIS</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              Voir les demos
            </ButtonLink>
          </div>
          <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
            Explorer tous les services <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
