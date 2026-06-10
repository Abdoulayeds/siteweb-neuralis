import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio et demonstrations NEURALIS : sites web, LMS, ERP, dashboards, IA, branding et prototypes digitaux.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio et demonstrations"
        title="Nos realisations et prototypes pour montrer le niveau d'execution."
        description="NEURALIS construit progressivement son portfolio client. En attendant, nous presentons des demonstrations et prototypes pour illustrer nos capacites en developpement web, plateformes metiers, data, IA et communication digitale."
        secondaryLabel="Voir les offres"
        secondaryHref="/offres"
      />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Demos"
            title="Des preuves visuelles, meme avant les premiers grands cas clients."
            description="Chaque demonstration peut devenir une base pour discuter avec un prospect et adapter la solution a son contexte."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="h-44 bg-slate-950 p-4">
                  <div className="h-full rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.28),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                        {item.category}
                      </span>
                      <span className="h-3 w-3 rounded-full bg-white" />
                    </div>
                    <div className="mt-8 grid gap-2">
                      <span className="h-3 rounded-full bg-white/50" />
                      <span className="h-3 w-3/4 rounded-full bg-cyan-300/70" />
                      <span className="h-3 w-1/2 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
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
            eyebrow="Honnetete"
            title="Le portfolio client va se construire avec les premiers projets."
            description="Au lancement, les demonstrations permettent de montrer la qualite attendue. Chaque mission livree deviendra ensuite une etude de cas, avec temoignage et resultats quand le client l'autorise."
            align="center"
          />
          <div className="mt-8">
            <ButtonLink href="/contact">Construire un cas avec NEURALIS</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

