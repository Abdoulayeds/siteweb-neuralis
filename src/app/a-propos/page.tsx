import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "A propos",
  description:
    "Decouvrez NEURALIS, entreprise technologique basee a Bamako, sa mission, sa vision, ses valeurs et son ambition digitale pour le Mali et l'Afrique.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="A propos"
        title="Une entreprise malienne construite pour accompagner la transformation digitale."
        description="NEURALIS est nee d'une ambition simple : rendre les solutions digitales modernes plus accessibles aux entreprises, ecoles, organisations et entrepreneurs."
        secondaryLabel="Voir les services"
        secondaryHref="/services"
      />
      <section className="section-padding bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Origine"
              title="Combler l'ecart entre potentiel local et outils digitaux modernes."
              description="Nous croyons que le Mali et l'Afrique disposent d'un potentiel numerique immense. Beaucoup d'organisations ont des idees, des clients, des equipes et des activites solides, mais manquent d'outils digitaux adaptes pour accelerer leur croissance."
            />
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Le role de NEURALIS est d&apos;ecouter, conseiller, concevoir, developper et accompagner. Nous voulons
              construire des solutions utiles, professionnelles et adaptees aux realites locales.
            </p>
          </div>
          <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.055] p-6 shadow-xl shadow-slate-950/10">
            <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white">
              <div className="flex items-center gap-5">
                <span className="neuralis-mark relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-cyan-300/40 bg-slate-950 text-4xl font-black text-cyan-200 shadow-[0_0_44px_rgba(6,182,212,0.36)]">
                  N
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">NEURALIS</p>
                  <p className="mt-2 text-2xl font-semibold">Digital partner</p>
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Web & Mobile", "Plateformes metiers", "Data & IA", "Formation"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
              <p className="section-eyebrow text-cyan-200">Vision</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Devenir une reference malienne et africaine dans la transformation digitale.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                NEURALIS veut avancer du web et des plateformes metiers vers l&apos;intelligence artificielle appliquee,
                la data, les produits SaaS et la formation aux competences du futur.
              </p>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <p className="section-eyebrow">Mission</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-4xl">
                Accompagner les organisations dans leur modernisation avec des outils utiles.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Nous ameliorons la visibilite digitale, digitalisons les processus, developpons des solutions,
                formons les equipes et integrons progressivement la data et l&apos;IA.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Valeurs"
            title="Une technologie utile, professionnelle et adaptee."
            description="Les valeurs de NEURALIS guident la maniere de choisir les projets, de concevoir les solutions et d'accompagner les clients."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-950">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
