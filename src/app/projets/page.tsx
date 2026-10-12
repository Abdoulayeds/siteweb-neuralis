import { createPageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProjectTeasers } from "@/components/project-teasers";
import { businessInfo } from "@/lib/business-info";

export const metadata = createPageMetadata("Nos projets : Campus, ERP et Mobility", "Neuralis Campus, Neuralis ERP et Neuralis Mobility : découvrez les trois projets NEURALIS en préparation à Bamako, Mali. Annonces à venir.", "/projets");

export default function ProjectsPage() {
  return <>
    <PageHero eyebrow="Les projets NEURALIS" title="Trois projets. Une nouvelle étape." description="La suite se prépare chez NEURALIS. Découvrez leurs noms et suivez les prochaines annonces." primaryLabel="Voir les projets" primaryHref="#projets" secondaryLabel="Contacter NEURALIS" secondaryHref="/contact" />
    <section id="projets" className="studio-section scroll-mt-36"><div className="studio-container">
      <div className="section-intro"><div><p className="studio-kicker">À venir</p><h2 className="studio-heading mt-3">La suite commence ici.</h2></div><p className="studio-copy max-w-md">Ces projets sont en préparation. Nous partagerons leurs nouveautés et leur disponibilité au fil des annonces.</p></div>
      <ProjectTeasers />
      <div className="project-announcements"><p>Pour découvrir les prochaines annonces</p><Link href={businessInfo.socials[0].href} target="_blank" rel="noopener noreferrer">Suivre NEURALIS sur Instagram <ArrowUpRight className="h-4 w-4" aria-hidden /></Link></div>
    </div></section>
  </>;
}
