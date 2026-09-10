import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Handshake, ScanEye, ShieldCheck, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { DetailDialog } from "@/components/detail-dialog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "À propos de NEURALIS",
  description: "Basée à Bamako, NEURALIS accompagne les entreprises et organisations dans leurs projets web, métiers, data et IA avec une approche concrète et progressive.",
  alternates: { canonical: "/a-propos" },
};

const principles = [
  { title: "L’utilité avant tout", icon: Compass, text: "Partir d’un problème réel, prioriser l’essentiel et éviter les fonctions qui ne servent pas l’usage." },
  { title: "La clarté dans les échanges", icon: ScanEye, text: "Nommer les livrables, les limites et les décisions à prendre. Expliquer les choix sans jargon inutile." },
  { title: "L’autonomie des équipes", icon: Handshake, text: "Prévoir la prise en main, les supports et le transfert des accès convenus dès le début du projet." },
  { title: "La responsabilité numérique", icon: ShieldCheck, text: "Définir les accès, limiter les données collectées et garder un contrôle humain sur les usages sensibles de l’IA." },
];

const steps = [
  { title: "Comprendre", summary: "Écouter le terrain avant de proposer un outil.", detail: "Nous échangeons sur votre activité, vos utilisateurs et vos difficultés. Les outils existants, les contraintes de connexion, les données disponibles et le niveau d’autonomie attendu alimentent le cadrage.", output: "Une compréhension partagée du besoin et des priorités." },
  { title: "Concevoir", summary: "Rendre le périmètre et le parcours visibles.", detail: "Nous précisons les fonctions essentielles, les livrables et les responsabilités. Selon le projet, une arborescence, des maquettes ou un prototype permettent de discuter de l’expérience avant sa réalisation.", output: "Un périmètre, une proposition et des points de validation convenus." },
  { title: "Construire & vérifier", summary: "Avancer par étapes, avec des retours concrets.", detail: "La réalisation suit les priorités validées. Les parcours sont testés et les retours examinés à des étapes définies. Les changements de périmètre font l’objet d’un échange sur leur impact.", output: "Une version à tester selon des critères de recette identifiés." },
  { title: "Transmettre & accompagner", summary: "Préparer l’usage réel et la suite du projet.", detail: "Nous préparons la mise en service et la prise en main. Les accès, la documentation et les conditions de support sont précisés dans la mission. La maintenance et les évolutions sont cadrées séparément lorsqu’elles sont nécessaires.", output: "Des utilisateurs informés et des prochaines étapes explicites." },
];

export default function AProposPage() {
  return <>
    <PageHero eyebrow="À propos de NEURALIS" title="Une technologie utile. Une relation de proximité." description="Basée à Bamako, NEURALIS accompagne les entreprises, les écoles et les organisations qui veulent transformer une idée ou une difficulté quotidienne en solution digitale concrète." secondaryLabel="Notre manière de travailler" secondaryHref="#methode" />
    <section className="studio-section"><div className="studio-container grid items-center gap-10 lg:grid-cols-2">
      <div><p className="studio-kicker">Notre mission</p><h2 className="studio-heading mt-3">Rapprocher vos ambitions des bons outils.</h2><p className="studio-copy mt-5">Être plus visible, mieux organiser son activité, exploiter ses données ou former ses équipes : le numérique est un moyen, pas une fin.</p><p className="studio-copy mt-4">Notre rôle est de vous aider à choisir, concevoir et prendre en main une solution adaptée. Nous privilégions une première étape utile, puis des évolutions guidées par l’usage.</p><div className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-950/20 px-4 py-2 text-sm text-cyan-200"><MapPin className="h-4 w-4" aria-hidden />Bamako, Mali · Ancrage local, ambition ouverte</div></div>
      <figure className="studio-panel overflow-hidden"><Image src="/images/services/consulting.webp" alt="Illustration de réflexion et de conception d’une solution digitale" width={1536} height={1024} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-video w-full object-cover" /><figcaption className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400">Comprendre votre réalité avant de choisir la technologie. Illustration de notre approche.</figcaption></figure>
    </div></section>
    <section id="methode" className="studio-section scroll-mt-28 border-y border-white/10"><div className="studio-container">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div className="max-w-2xl"><p className="studio-kicker">Notre méthode</p><h2 className="studio-heading mt-3">Du premier échange à la prise en main.</h2></div><DetailDialog title="Comment nous construisons votre projet" eyebrow="La méthode NEURALIS" triggerLabel="Découvrir le processus complet" triggerClassName="studio-link">
        <p className="text-lg leading-8 text-slate-300">Un projet avance mieux lorsque chacun sait ce qui est attendu, ce qui reste à décider et comment le résultat sera validé.</p>
        <div className="mt-7 space-y-5">{steps.map((step,index) => <section key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"><p className="text-sm font-medium text-cyan-300">ÉTAPE 0{index + 1}</p><h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3><p className="mt-3 leading-8 text-slate-300">{step.detail}</p><p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-cyan-100"><span className="font-semibold">À l’issue de cette étape : </span>{step.output}</p></section>)}</div>
        <p className="mt-6 text-sm leading-7 text-slate-400">Le rythme, les outils de collaboration et les modalités de validation sont adaptés à la taille du projet et précisés au démarrage.</p><div className="mt-7"><ButtonLink href="/contact">Préparer un premier échange</ButtonLink></div>
      </DetailDialog></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step,index) => <article key={step.title} className="studio-panel p-6"><span className="font-mono text-sm text-cyan-300">0{index + 1}</span><h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3><p className="studio-copy mt-3 text-sm">{step.summary}</p></article>)}</div>
    </div></section>
    <section className="studio-section"><div className="studio-container"><div className="max-w-2xl"><p className="studio-kicker">Nos principes</p><h2 className="studio-heading mt-3">Des engagements dans la façon de travailler.</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{principles.map(principle => <article key={principle.title} className="studio-panel flex gap-5 p-6 md:p-8"><principle.icon className="mt-1 h-7 w-7 shrink-0 text-cyan-300" strokeWidth={1.5} aria-hidden /><div><h3 className="text-xl font-semibold text-white">{principle.title}</h3><p className="studio-copy mt-3 text-sm">{principle.text}</p></div></article>)}</div></div></section>
    <section className="studio-section border-t border-white/10"><div className="studio-container"><div className="studio-panel flex flex-col gap-7 p-8 md:flex-row md:items-center md:justify-between md:p-12"><div className="max-w-2xl"><p className="studio-kicker">Construisons la suite</p><h2 className="mt-3 text-3xl font-semibold text-white">Parlons de ce que vous voulez rendre possible.</h2><p className="studio-copy mt-4">Une idée précise ou un problème encore flou : les deux sont de bons points de départ.</p></div><ButtonLink href="/contact">Rencontrer NEURALIS</ButtonLink></div></div></section>
  </>;
}
