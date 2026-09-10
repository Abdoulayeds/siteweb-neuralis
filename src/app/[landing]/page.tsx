import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { DetailDialog } from "@/components/detail-dialog";
import { PageHero } from "@/components/page-hero";
import { businessInfo } from "@/lib/business-info";
import { getService } from "@/lib/service-catalog";
import { seoLandingPages, getSeoLandingPage } from "@/lib/seo-landing-pages";

type PageProps = { params: Promise<{ landing: string }> };
const expertiseBySlug: Record<string, string> = {
  "creation-site-web-bamako": "sites-web", "developpement-application-mali": "applications",
  "lms-erp-ecoles-mali": "plateformes", "erp-pme-mali": "plateformes",
  "dashboard-data-mali": "data", "chatbot-ia-mali": "ia", "agence-digitale-mali": "communication",
};
export const dynamicParams = false;
export function generateStaticParams() { return seoLandingPages.map(page => ({ landing: page.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { landing } = await params;
  const page = getSeoLandingPage(landing);
  if (!page) return {};
  const service = getService(expertiseBySlug[landing]);
  return {
    title: page.metaTitle, description: page.metaDescription, keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `${businessInfo.siteUrl}/${page.slug}`, siteName: "NEURALIS", locale: "fr_ML", type: "website", images: service ? [{ url: service.image, width: 1200, height: 800, alt: service.imageAlt }] : undefined },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription, images: service ? [service.image] : undefined },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { landing } = await params;
  const page = getSeoLandingPage(landing);
  if (!page) notFound();
  const service = getService(expertiseBySlug[landing])!;
  const url = `${businessInfo.siteUrl}/${page.slug}`;
  const structuredData = [
    { "@context": "https://schema.org", "@type": "Service", name: page.metaTitle, description: page.metaDescription, url, serviceType: page.title, provider: { "@type": "Organization", name: businessInfo.name, url: businessInfo.siteUrl }, areaServed: [{ "@type": "Country", name: "Mali" }, { "@type": "City", name: "Bamako" }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: businessInfo.siteUrl }, { "@type": "ListItem", position: 2, name: page.title, item: url }] },
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <PageHero eyebrow={page.eyebrow} title={page.h1} description={page.intro} secondaryLabel="Découvrir les possibilités" secondaryHref="#possibilites" />
    <section id="possibilites" className="studio-section scroll-mt-28"><div className="studio-container grid gap-9 lg:grid-cols-2 lg:items-center">
      <Image src={service.image} alt={service.imageAlt} width={1200} height={800} className="aspect-[3/2] w-full rounded-3xl object-cover" />
      <div><p className="studio-kicker">Votre objectif</p><h2 className="studio-heading mt-4">Une solution au service de votre activité.</h2><p className="studio-copy mt-5">{page.searchIntent}</p><div className="studio-tags mt-5">{page.audience.map(item => <span key={item}>{item}</span>)}</div>
        <ul className="mt-7 grid gap-3">{page.outcomes.map(item => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden /><span>{item}</span></li>)}</ul>
        <div className="mt-7"><DetailDialog title={page.h1} eyebrow="Votre projet en détail" triggerLabel="Voir la prestation en détail" triggerClassName="studio-link">
          <p className="studio-copy">{page.intro}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2"><div><h3 className="text-xl font-semibold text-white">Ce que nous pouvons prévoir</h3><ul className="mt-5 grid gap-3">{page.deliverables.map(item => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden />{item}</li>)}</ul></div><div><h3 className="text-xl font-semibold text-white">Un démarrage bien cadré</h3><ol className="mt-5 grid gap-4">{page.process.map((item,index) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300"><span className="text-cyan-300">0{index+1}</span>{item}</li>)}</ol></div></div>
          <p className="mt-8 text-sm leading-7 text-slate-400">Les fonctionnalités, les intégrations, le calendrier et les conditions de suivi sont précisés dans votre proposition.</p><div className="mt-7"><ButtonLink href="/contact">Échanger sur mon projet</ButtonLink></div>
        </DetailDialog></div>
      </div>
    </div></section>
    <section className="studio-section studio-section-alt"><div className="studio-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="studio-kicker">Avant de commencer</p><h2 className="studio-heading mt-4">Les réponses à vos questions.</h2><Link href={`/services/${service.id}`} className="studio-link mt-6">La fiche expertise complète <ArrowUpRight className="h-4 w-4" aria-hidden /></Link></div><div className="grid content-start gap-3">{page.faq.map(item => <details key={item.question} className="studio-faq"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
    <section className="studio-section"><div className="studio-container"><div className="studio-cta"><div><p className="studio-kicker">NEURALIS · Bamako, Mali</p><h2 className="studio-heading mt-4">Votre prochain projet<br />commence par un échange.</h2><p className="studio-copy mt-4">Expliquez votre besoin. Nous vous aidons à choisir la prochaine étape.</p></div><ButtonLink href="/contact">Parler de mon projet</ButtonLink></div></div></section>
  </>;
}
