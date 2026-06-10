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

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(6,182,212,0.28),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(135deg,#0F172A,#020617_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Basee a Bamako, construite pour l&apos;Afrique digitale
            </div>
            <h1 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
              NEURALIS, le partenaire digital des entreprises ambitieuses.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
              Nous accompagnons les entreprises, ecoles, organisations et porteurs de projets dans leur
              transformation digitale grace au developpement web et mobile, aux plateformes metiers, a la
              communication digitale, a la data, a l&apos;automatisation et a l&apos;intelligence artificielle.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Demander un devis</ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Decouvrir nos services
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {socialProof.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" aria-hidden />
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
              description="Aujourd'hui, une entreprise qui n'est pas visible en ligne perd des opportunites. Beaucoup d'organisations utilisent encore des methodes manuelles, des outils disperses ou une communication peu structuree."
            />
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-lg font-medium leading-8 text-slate-900">
                NEURALIS aide les entreprises a passer a un niveau superieur en construisant des solutions
                digitales utiles, modernes et faciles a utiliser.
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
              description="NEURALIS ne se limite pas a la creation de sites web. La marque est pensee comme un ecosysteme capable d'accompagner une organisation de sa premiere presence digitale jusqu'a l'IA et la data."
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
            description="Les services avances enrichissent l'offre sans brouiller le message commercial. Ils deviennent une suite logique une fois que le client a une base digitale solide."
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
                description="Beaucoup de prospects ne demandent pas un ERP ou un LMS. Ils veulent mieux gerer leur ecole, suivre leurs ventes, attirer plus de clients ou automatiser une tache."
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
                description="Le portfolio client se construira progressivement. En attendant, NEURALIS presente des prototypes et demonstrations pour illustrer ses capacites."
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
            description="Le site doit rassurer les visiteurs non techniques. Cette section aide a comprendre comment demarrer sans jargon."
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
