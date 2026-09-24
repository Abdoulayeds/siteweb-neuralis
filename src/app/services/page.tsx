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
  { category: "Créer", id: "creer", number: "01", title: "Une présence et des expériences qui vous ressemblent.", text: "Du premier contact à l’usage quotidien : des interfaces claires pour rendre votre activité visible et facile à comprendre." },
  { category: "Organiser", id: "organiser", number: "02", title: "Des outils qui rendent le travail plus simple.", text: "Rassemblez les bonnes informations, fluidifiez les opérations et donnez à vos équipes une vision partagée." },
  { category: "Développer", id: "developper", number: "03", title: "Les compétences pour avancer avec confiance.", text: "Identifiez les prochaines étapes et accompagnez vos équipes dans l’adoption de nouveaux outils." },
];

export default function ServicesPage() {
  return <>
    <PageHero eyebrow="Nos expertises" title="Votre besoin. Notre expertise." description="Huit expertises complémentaires pour concevoir une présence forte, des outils utiles et des équipes mieux accompagnées. Choisissez le résultat recherché et ouvrez seulement les détails qui vous intéressent." primaryLabel="Explorer les expertises" primaryHref="#expertises" secondaryLabel="Comparer les offres" secondaryHref="/offres" />
    <nav className="section-nav" aria-label="Parcourir les expertises"><div className="studio-container flex flex-wrap items-center gap-3"><span className="mr-3 text-xs font-semibold text-slate-700">Aller directement à</span>{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.number} / {group.category}</a>)}</div></nav>
    <div id="expertises">
      {groups.map((group, index) => <section id={group.id} key={group.id} className={`studio-section scroll-mt-28 ${index % 2 === 1 ? "studio-section-alt" : ""}`}><div className="studio-container">
        <div className="mb-9 grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end"><div><p className="studio-kicker">{group.number} / {group.category} · {serviceCatalog.filter(service => service.category === group.category).length} expertises</p><h2 className="studio-heading mt-4">{group.title}</h2></div><p className="studio-copy max-w-md md:justify-self-end">{group.text}</p></div>
        <div className={`grid gap-6 md:grid-cols-2 ${group.category === "Développer" ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>{serviceCatalog.filter(service => service.category === group.category).map(service => <VisualServiceCard key={service.id} service={service} index={serviceCatalog.indexOf(service)} />)}</div>
      </div></section>)}
    </div>
    <section className="studio-section"><div className="studio-container"><div className="studio-cta"><div><p className="studio-kicker">Parlons simplement</p><h2 className="studio-heading mt-4">Pas besoin de connaître la solution.</h2><p className="studio-copy mt-4 max-w-xl">Décrivez ce qui vous freine aujourd’hui. Nous vous aidons à choisir un premier projet cohérent.</p></div><ButtonLink href="/contact">Expliquer mon besoin</ButtonLink></div></div></section>
  </>;
}
