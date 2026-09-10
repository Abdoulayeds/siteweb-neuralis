import type { Metadata } from "next";
import Link from "next/link";
import { Building2, GraduationCap, HeartHandshake, Rocket, Store, BriefcaseBusiness } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { DetailDialog } from "@/components/detail-dialog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Solutions par secteur",
  description: "Écoles, commerces, PME, ONG et startups : les solutions digitales NEURALIS adaptées aux usages de votre organisation au Mali.",
  alternates: { canonical: "/solutions" },
};

const sectors = [
  { title: "Écoles & organismes de formation", icon: GraduationCap, need: "Relier l’administration, les enseignants et les apprenants.", tags: ["Inscriptions", "Cours", "Suivi"], context: "Les informations dispersées entre papier, fichiers et messageries compliquent le suivi des élèves et la préparation des cours.", steps: ["Cartographier les inscriptions, les rôles et les documents utilisés.", "Créer un espace adapté : dossiers, ressources pédagogiques, progression et communications.", "Accompagner les équipes dans la prise en main et définir les règles d’accès aux données."], services: [{ label: "Plateformes métiers & LMS", id: "plateformes" }, { label: "Formation des équipes", id: "formation" }] },
  { title: "PME & équipes opérationnelles", icon: Building2, need: "Centraliser l’activité et rendre les tâches quotidiennes plus simples.", tags: ["Gestion", "Clients", "Reporting"], context: "Quand une entreprise grandit, les doubles saisies et les fichiers isolés limitent la visibilité sur les opérations.", steps: ["Identifier le processus prioritaire : clients, ventes, stocks ou interventions.", "Construire un outil métier avec des accès adaptés aux responsabilités de chacun.", "Organiser les tableaux de bord, les exports et la formation des utilisateurs."], services: [{ label: "Applications web & mobiles", id: "applications" }, { label: "Data & pilotage", id: "data" }] },
  { title: "Commerces & marques", icon: Store, need: "Présenter vos produits et faciliter le passage à la commande.", tags: ["Catalogue", "Visibilité", "Commandes"], context: "Un commerce doit présenter une offre à jour et proposer un chemin de contact ou d’achat compréhensible sur mobile.", steps: ["Structurer le catalogue, les informations produits et l’identité visuelle.", "Concevoir un site ou un parcours de commande adapté à vos moyens opérationnels.", "Relier les canaux de contact et définir un suivi simple des demandes."], services: [{ label: "Sites web professionnels", id: "sites-web" }, { label: "Communication digitale", id: "communication" }] },
  { title: "ONG & associations", icon: HeartHandshake, need: "Rendre vos actions lisibles et mieux suivre vos programmes.", tags: ["Projets", "Collecte", "Transparence"], context: "Le suivi terrain, le partage d’information et les comptes rendus demandent des outils cohérents avec les contraintes de chaque programme.", steps: ["Clarifier les publics, les données utiles et les contraintes de collecte.", "Définir un site institutionnel ou un outil de suivi avec des formulaires structurés.", "Préparer les indicateurs, les exports et les règles de confidentialité."], services: [{ label: "Sites institutionnels", id: "sites-web" }, { label: "Tableaux de bord", id: "data" }] },
  { title: "Startups & porteurs de projet", icon: Rocket, need: "Passer d’une idée à une première version testable.", tags: ["Cadrage", "Prototype", "MVP"], context: "Avant de multiplier les fonctionnalités, il faut identifier le problème à résoudre et le parcours qui permettra de tester l’idée.", steps: ["Définir les utilisateurs, l’hypothèse de départ et les critères de validation.", "Prototyper le parcours essentiel puis prioriser une première version réalisable.", "Préparer les essais, recueillir les retours et organiser les évolutions."], services: [{ label: "Conseil & cadrage", id: "consulting" }, { label: "Développement d’applications", id: "applications" }] },
  { title: "Cabinets & institutions", icon: BriefcaseBusiness, need: "Professionnaliser la présence en ligne et les échanges de documents.", tags: ["Portail", "Documents", "Rendez-vous"], context: "Les organisations de services ont besoin d’une présentation claire de leur expertise et de circuits de traitement des demandes bien définis.", steps: ["Analyser les demandes récurrentes et les informations attendues par vos publics.", "Concevoir un site ou un portail avec des parcours et des habilitations explicites.", "Étudier les automatisations pertinentes, avec validation humaine pour les actions sensibles."], services: [{ label: "Applications & portails", id: "applications" }, { label: "IA & automatisation", id: "ia" }] },
];

export default function SolutionsPage() {
  return <>
    <PageHero eyebrow="Solutions par secteur" title="Votre métier d’abord. La technologie ensuite." description="Une école, un commerce et une ONG n’ont pas les mêmes priorités. Nous partons de votre quotidien pour concevoir un outil réellement utile." secondaryLabel="Explorer les secteurs" secondaryHref="#secteurs" />
    <section id="secteurs" className="studio-section scroll-mt-28">
      <div className="studio-container">
        <div className="max-w-2xl"><p className="studio-kicker">Votre point de départ</p><h2 className="studio-heading mt-3">Un besoin concret. Un parcours adapté.</h2><p className="studio-copy mt-4">Choisissez votre contexte pour découvrir les usages possibles et les premières étapes.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => <article key={sector.title} className="studio-panel flex flex-col p-6 md:p-7">
            <sector.icon className="h-8 w-8 text-cyan-300" strokeWidth={1.5} aria-hidden />
            <h3 className="mt-6 text-xl font-semibold text-white">{sector.title}</h3>
            <p className="studio-copy mt-3 text-sm">{sector.need}</p>
            <div className="studio-tags mt-5">{sector.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="mt-auto pt-7"><DetailDialog title={sector.title} eyebrow="Un parcours possible" triggerLabel="Explorer la solution" triggerClassName="studio-link">
              <p className="text-lg leading-8 text-slate-300">{sector.context}</p>
              <h3 className="mt-8 text-xl font-semibold text-white">Comment avancer</h3>
              <ol className="mt-5 space-y-4">{sector.steps.map((step, index) => <li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5"><span className="font-mono text-cyan-300">0{index + 1}</span><span className="leading-7 text-slate-300">{step}</span></li>)}</ol>
              <h3 className="mt-8 text-xl font-semibold text-white">Les expertises associées</h3>
              <div className="mt-4 flex flex-wrap gap-4">{sector.services.map(service => <Link className="studio-link" href={"/services/" + service.id} key={service.id}>{service.label} →</Link>)}</div>
              <p className="mt-7 text-sm leading-7 text-slate-400">Le périmètre, les intégrations et les conditions d’accompagnement sont précisés après cadrage. Ces parcours sont des possibilités, pas des solutions préconfigurées.</p>
              <div className="mt-8"><ButtonLink href="/contact">Parler de mon organisation</ButtonLink></div>
            </DetailDialog></div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="studio-section border-t border-white/10"><div className="studio-container"><div className="studio-panel flex flex-col gap-7 p-8 md:flex-row md:items-center md:justify-between md:p-12"><div className="max-w-2xl"><p className="studio-kicker">Un autre contexte ?</p><h2 className="mt-3 text-3xl font-semibold text-white">Commençons par ce qui vous freine.</h2><p className="studio-copy mt-4">Décrivez votre activité, votre problème principal et les outils que vous utilisez déjà.</p></div><ButtonLink href="/contact">Cadrer mon besoin</ButtonLink></div></div></section>
  </>;
}
