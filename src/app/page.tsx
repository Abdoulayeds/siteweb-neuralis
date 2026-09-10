import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Compass, Layers3, MoveUpRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { DetailDialog } from "@/components/detail-dialog";
import { VisualServiceCard } from "@/components/visual-service-card";
import { serviceCatalog } from "@/lib/service-catalog";

const questions = [
  { question: "Je ne sais pas quel outil choisir. Par où commencer ?", answer: "Commencez par votre objectif : être plus visible, mieux gérer une activité ou gagner du temps. Un premier échange permet de comprendre votre situation et d’identifier une prochaine étape utile, avant de choisir une technologie." },
  { question: "Travaillez-vous avec les petites entreprises ?", answer: "Oui. Nous adaptons la première version aux priorités de votre activité. Un site bien structuré, un outil de suivi simple ou une formation ciblée peuvent constituer un bon point de départ." },
  { question: "Comment sont définis le budget et le délai ?", answer: "Après le cadrage, la proposition précise les livrables, les étapes, le calendrier et le budget. Les contenus à produire, les intégrations et les validations nécessaires influencent le périmètre du projet." },
  { question: "Que se passe-t-il après la livraison ?", answer: "La prise en main, la documentation et les accès sont préparés selon le projet. La maintenance, le support et les évolutions sont organisés selon les modalités de la proposition." },
];
const journeys = [
  { number: "01", title: "Faire connaître mon activité", text: "Un site clair et une identité cohérente pour être découvert et contacté.", href: "/services#creer", tag: "Web · Branding · Communication" },
  { number: "02", title: "Mieux organiser mes opérations", text: "Des plateformes, des tableaux de bord et des automatismes pour vos équipes.", href: "/services#organiser", tag: "Plateformes · Data · IA" },
  { number: "03", title: "Préparer ma prochaine étape", text: "Un diagnostic et des compétences pour faire les bons choix et avancer.", href: "/services#developper", tag: "Conseil · Formation" },
];

export default function Home() {
  const featured = ["sites-web", "plateformes", "data", "ia"].map(id => serviceCatalog.find(service => service.id === id)!);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }).replace(/</g, "\\u003c") }} />
    <section className="studio-hero">
      <div className="studio-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <p className="hero-location"><span /> Votre partenaire digital · Bamako, Mali</p>
            <h1 className="hero-title">Vos ambitions.<br />Notre expertise.<br /><span>Le digital, utile.</span></h1>
            <p className="studio-copy mt-6 max-w-xl">Nous concevons des sites, des applications et des outils intelligents pour donner de la visibilité à votre activité et simplifier votre quotidien.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/contact">Démarrer mon projet</ButtonLink><ButtonLink href="#expertises" variant="ghost">Explorer nos expertises</ButtonLink></div>
            <div className="hero-promises"><span><Check aria-hidden /> Une proposition claire</span><span><Check aria-hidden /> Un accompagnement concret</span></div>
          </div>
          <div className="hero-showcase">
            <div className="showcase-topline"><span>NEURALIS / DIGITAL STUDIO</span><span className="text-cyan-300">01 — 08</span></div>
            <Image src="/images/services/sites-web.webp" alt="Création de sites web : des interfaces cohérentes sur ordinateur et téléphone" width={1200} height={800} preload className="hero-main-image" />
            <div className="showcase-caption"><span>De l’idée à un outil qui compte.</span><MoveUpRight className="h-5 w-5 text-cyan-300" aria-hidden /></div>
            <div className="showcase-mini"><Image src="/images/services/ia.webp" alt="Un réseau de connexions illustrant l’intelligence artificielle" width={1200} height={800} className="h-20 w-24 rounded-xl object-cover" /><div><span className="studio-kicker">La suite se construit</span><p className="mt-2 text-sm font-medium text-white">Web. Data. IA.</p></div></div>
          </div>
        </div>
        <a href="#parcours" className="hero-scroll">Trouvez votre point de départ <ArrowDown className="h-4 w-4" aria-hidden /></a>
      </div>
    </section>

    <section id="parcours" className="studio-section scroll-mt-24">
      <div className="studio-container">
        <div className="section-intro"><div><p className="studio-kicker">01 / Votre point de départ</p><h2 className="studio-heading mt-4">Qu’aimeriez-vous<br className="hidden md:block" /> faire avancer ?</h2></div><p className="studio-copy max-w-md">Chaque projet commence par une situation concrète. Choisissez la vôtre, nous vous aidons à trouver le bon chemin.</p></div>
        <div className="grid gap-4 md:grid-cols-3">{journeys.map(journey => <Link key={journey.number} href={journey.href} className="journey-card group"><div className="flex items-center justify-between"><span className="text-xs text-slate-400">/ {journey.number}</span><ArrowUpRight className="h-5 w-5 text-cyan-300 transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden /></div><h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">{journey.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{journey.text}</p><p className="mt-auto border-t border-white/10 pt-5 text-xs text-cyan-200">{journey.tag}</p></Link>)}</div>
      </div>
    </section>

    <section id="expertises" className="studio-section studio-section-alt scroll-mt-24">
      <div className="studio-container">
        <div className="section-intro"><div><p className="studio-kicker">02 / Ce que nous faisons</p><h2 className="studio-heading mt-4">Du premier site<br />aux outils de demain.</h2></div><div className="max-w-md"><p className="studio-copy">Des expertises qui se complètent, pour un projet ciblé ou une transformation progressive.</p><Link href="/services" className="studio-link mt-5">Voir les 8 expertises <ArrowUpRight className="h-4 w-4" aria-hidden /></Link></div></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{featured.map((service,index) => <VisualServiceCard key={service.id} service={service} index={index} />)}</div>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-7"><span className="text-sm text-slate-400">Et aussi</span>{serviceCatalog.filter(service => !featured.includes(service)).map(service => <Link href={`/services/${service.id}`} key={service.id} className="studio-link text-sm">{service.title}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden /></Link>)}</div>
      </div>
    </section>

    <section id="methode" className="studio-section scroll-mt-24"><div className="studio-container grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="method-art"><Image src="/images/services/consulting.webp" alt="Illustration d’un atelier de cadrage : feuille de route, priorités et outils de travail" width={1200} height={800} className="aspect-[4/3] w-full rounded-3xl object-cover" /><div className="method-label"><Compass className="h-5 w-5 text-cyan-300" aria-hidden /><span>Une direction claire, à chaque étape.</span></div></div>
      <div><p className="studio-kicker">03 / Notre manière de travailler</p><h2 className="studio-heading mt-4">Vous avez la vision.<br />Avançons avec méthode.</h2><p className="studio-copy mt-5">Un interlocuteur qui comprend votre besoin, des étapes lisibles et des décisions prises avec vous.</p><ol className="mt-7 grid gap-5">{[{ title: "Comprendre & cadrer", text: "Vos objectifs, les usages et les priorités du projet." }, { title: "Concevoir & construire", text: "Une direction validée, puis des avancées concrètes." }, { title: "Livrer & accompagner", text: "Une solution prise en main, prête à évoluer." }].map((step,index) => <li key={step.title} className="flex gap-4"><span className="method-step">0{index+1}</span><div><h3 className="font-semibold text-white">{step.title}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{step.text}</p></div></li>)}</ol><div className="mt-7"><DetailDialog title="De l’idée au lancement : un parcours partagé" eyebrow="Notre méthode" triggerLabel="Découvrir notre accompagnement" triggerClassName="studio-link"><div className="grid gap-7 sm:grid-cols-2">{[{ title: "1. Échanger sur votre situation", text: "Nous identifions votre public, vos objectifs et les contraintes du terrain. Les outils existants et les contenus disponibles permettent de définir un point de départ réaliste." }, { title: "2. Définir un périmètre lisible", text: "La proposition précise les livrables, le calendrier, le budget et les responsabilités de chacun. Les options et les frais récurrents sont discutés avant le lancement." }, { title: "3. Valider au fil du projet", text: "Structure, maquettes et fonctionnalités sont présentées à des étapes définies. Vos retours permettent de vérifier que la solution répond aux usages prioritaires." }, { title: "4. Préparer l’autonomie", text: "Nous prévoyons la prise en main, les accès et la documentation nécessaires. Les modalités de suivi et de maintenance sont fixées avec vous." }].map(step => <div key={step.title}><h3 className="text-xl font-semibold text-white">{step.title}</h3><p className="studio-copy mt-3">{step.text}</p></div>)}</div><div className="mt-8"><ButtonLink href="/contact">Parlons de votre idée</ButtonLink></div></DetailDialog></div></div>
    </div></section>

    <section className="studio-section studio-section-alt"><div className="studio-container"><div className="section-intro"><div><p className="studio-kicker">04 / Des usages, pas du jargon</p><h2 className="studio-heading mt-4">Le digital prend tout son sens<br />dans votre quotidien.</h2></div><Link href="/solutions" className="studio-link">Les solutions par secteur <ArrowUpRight className="h-4 w-4" aria-hidden /></Link></div><div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
      <Link href="/portfolio" className="concept-feature group"><Image src="/images/services/plateformes.webp" alt="Illustration d’une plateforme regroupant formation et gestion" width={1200} height={800} className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-[1.02]" /><div className="p-6"><p className="studio-kicker">Concepts & cas d’usage</p><h3 className="mt-3 text-2xl font-semibold text-white">À quoi pourrait ressembler votre solution ?</h3><p className="mt-3 text-sm leading-7 text-slate-300">Explorez des scénarios de sites, de plateformes et d’assistants. Des illustrations pour vous projeter.</p><span className="studio-link mt-5">Explorer les concepts <ArrowUpRight className="h-4 w-4" aria-hidden /></span></div></Link>
      <div className="studio-panel flex flex-col justify-between p-7 md:p-9"><div><Layers3 className="h-8 w-8 text-cyan-300" aria-hidden /><h3 className="mt-7 text-3xl font-semibold tracking-tight text-white">Des offres claires.<br />Un projet à votre mesure.</h3><p className="studio-copy mt-4">Site web, présence digitale, plateforme, data ou formation : choisissez une base, puis adaptons-la à vos priorités.</p><div className="studio-tags mt-6"><span>Objectifs définis</span><span>Périmètre détaillé</span><span>Sur devis</span></div></div><div className="mt-8"><ButtonLink href="/offres" variant="ghost">Découvrir les offres</ButtonLink></div></div>
    </div></div></section>

    <section id="questions" className="studio-section"><div className="studio-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="studio-kicker">05 / Avant de commencer</p><h2 className="studio-heading mt-4">Quelques réponses.<br />Pour avancer sereinement.</h2><p className="studio-copy mt-5">Votre situation est particulière ? Nous sommes là pour en parler.</p><Link href="/contact" className="studio-link mt-6">Poser ma question <ArrowUpRight className="h-4 w-4" aria-hidden /></Link></div><div className="grid content-start gap-3">{questions.map(item => <details key={item.question} className="studio-faq"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
    <section className="studio-section pt-0"><div className="studio-container"><div className="studio-cta"><div><p className="studio-kicker">La prochaine étape commence ici</p><h2 className="studio-heading mt-4">Et si on donnait vie<br />à votre projet ?</h2><p className="studio-copy mt-4">Une idée, un besoin, une question. Parlons-en.</p></div><ButtonLink href="/contact">Démarrer la conversation</ButtonLink></div></div></section>
  </>;
}
