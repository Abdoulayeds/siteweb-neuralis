import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { VisualServiceCard } from "@/components/visual-service-card";
import { serviceCatalog } from "@/lib/service-catalog";

export const metadata: Metadata = {
  title: "Nos expertises digitales à Bamako",
  description: "Explorez les 8 expertises NEURALIS : sites web, applications, plateformes métiers, communication, data, IA, formation et conseil. Fiches détaillées et exemples d’usage.",
  alternates: { canonical: "/services" },
};

const groups = [
  { category: "Créer", id: "creer", number: "01", title: "Une présence qui vous ressemble.", text: "Donnez une forme claire à votre marque, vos idées et vos services." },
  { category: "Organiser", id: "organiser", number: "02", title: "Des outils qui simplifient le quotidien.", text: "Reliez vos équipes, vos informations et vos processus." },
  { category: "Développer", id: "developper", number: "03", title: "Les compétences pour aller plus loin.", text: "Prenez du recul, définissez vos priorités et faites progresser vos équipes." },
];

export default function ServicesPage() {
  return <>
    <PageHero eyebrow="Nos expertises" title="Le bon digital. Pour votre prochain pas." description="Huit expertises complémentaires, un même objectif : construire des solutions utiles à votre activité. Choisissez votre besoin et explorez le détail." primaryLabel="Trouver mon expertise" primaryHref="#expertises" secondaryLabel="Comparer les offres" secondaryHref="/offres" />
    <nav className="section-nav" aria-label="Parcourir les expertises"><div className="studio-container flex flex-wrap items-center gap-3"><span className="mr-3 text-xs text-slate-400">Votre objectif</span>{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.number} / {group.category}</a>)}</div></nav>
    <div id="expertises">
      {groups.map(group => <section id={group.id} key={group.id} className="studio-section scroll-mt-28"><div className="studio-container">
        <div className="mb-9 grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-end"><div><p className="studio-kicker">{group.number} / {group.category}</p><h2 className="studio-heading mt-4">{group.title}</h2></div><p className="studio-copy max-w-md md:justify-self-end">{group.text}</p></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{serviceCatalog.filter(service => service.category === group.category).map(service => <VisualServiceCard key={service.id} service={service} index={serviceCatalog.indexOf(service)} />)}</div>
      </div></section>)}
    </div>
    <section className="studio-section"><div className="studio-container"><div className="studio-cta"><div><p className="studio-kicker">Parlons simplement</p><h2 className="studio-heading mt-4">Pas besoin de connaître la solution.</h2><p className="studio-copy mt-4 max-w-xl">Décrivez ce qui vous freine aujourd’hui. Nous vous aidons à choisir un premier projet cohérent.</p></div><ButtonLink href="/contact">Expliquer mon besoin</ButtonLink></div></div></section>
  </>;
}
