import Image from "next/image";
import { upcomingProjects } from "@/lib/projects";

export function ProjectTeasers() {
  return <ul className="project-teaser-grid">
    {upcomingProjects.map((project, index) => <li key={project.name} className="project-teaser-card themed-card" data-tone={project.tone}>
      <div className="project-teaser-photo"><Image src={project.image} alt={project.alt} width={1200} height={800} sizes="(max-width: 767px) 90vw, 33vw" className="h-full w-full object-cover" /><span className="project-soon">Bientôt</span></div>
      <div className="project-teaser-caption"><span className="project-index">0{index + 1}</span><div><h3>{project.name}</h3><p>En préparation</p></div></div>
    </li>)}
  </ul>;
}
