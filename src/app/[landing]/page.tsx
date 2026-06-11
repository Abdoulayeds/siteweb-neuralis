import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Search, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { seoLandingPages, getSeoLandingPage } from "@/lib/seo-landing-pages";

type PageProps = {
  params: Promise<{
    landing: string;
  }>;
};

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ landing: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { landing } = await params;
  const page = getSeoLandingPage(landing);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://neuralis-mali.com/${page.slug}`,
      siteName: "NEURALIS",
      locale: "fr_ML",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { landing } = await params;
  const page = getSeoLandingPage(landing);

  if (!page) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.metaTitle,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "NEURALIS",
      url: "https://neuralis-mali.com",
      email: "contact@neuralis-mali.com",
    },
    areaServed: [
      { "@type": "Country", name: "Mali" },
      { "@type": "City", name: "Bamako" },
    ],
    serviceType: page.title,
    url: `https://neuralis-mali.com/${page.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://neuralis-mali.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: `https://neuralis-mali.com/${page.slug}`,
      },
    ],
  };

  const structuredData = [serviceJsonLd, faqJsonLd, breadcrumbJsonLd];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(6,182,212,0.26),transparent_28%),linear-gradient(135deg,#0F172A,#020617_74%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="section-eyebrow">{page.eyebrow}</p>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">{page.h1}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Demander un devis</ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Voir tous les services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <article className="rounded-[2rem] border border-cyan-300/20 bg-white p-7">
            <Search className="h-8 w-8 text-cyan-300" aria-hidden />
            <p className="section-eyebrow mt-6 text-cyan-200">Intention de recherche</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Ce que le client cherche vraiment.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{page.searchIntent}</p>
          </article>
          <article className="rounded-[2rem] border border-cyan-300/20 bg-white p-7">
            <Sparkles className="h-8 w-8 text-cyan-300" aria-hidden />
            <p className="section-eyebrow mt-6 text-cyan-200">Pour qui</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Organisations concernees.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.audience.map((item) => (
                <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="section-eyebrow">Resultats</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Ce que NEURALIS vise pour votre projet.</h2>
          </div>
          <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
            {page.outcomes.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-cyan-300/20 bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" aria-hidden />
                <span className="text-sm leading-6 text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-[2rem] border border-cyan-300/20 bg-white p-7">
            <p className="section-eyebrow text-cyan-200">Livrables</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Une prestation concrete.</h2>
            <div className="mt-6 grid gap-3">
              {page.deliverables.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-cyan-300/10 bg-slate-950/30 p-4">
                  <span className="text-sm text-slate-200">{item}</span>
                  <ArrowRight className="h-4 w-4 text-cyan-300" aria-hidden />
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-[2rem] border border-cyan-300/20 bg-white p-7">
            <p className="section-eyebrow text-cyan-200">Methode</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Un demarrage clair.</h2>
            <div className="mt-6 grid gap-4">
              {page.process.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-cyan-300/10 bg-slate-950/30 p-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <span className="pt-2 text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Questions frequentes.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Des reponses simples pour comprendre le service avant de demander un devis.
            </p>
          </div>
          <div className="grid gap-4">
            {page.faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-cyan-300/20 bg-white p-5">
                <h3 className="font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-eyebrow">NEURALIS Mali</p>
          <h2 className="mt-3 text-4xl font-semibold text-white">Construisons une solution utile, visible et evolutive.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Expliquez votre besoin. NEURALIS vous aide a choisir la bonne premiere etape, avec une approche claire
            pour les equipes non techniques.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Parler de mon projet</ButtonLink>
            <ButtonLink href="/offres" variant="secondary">
              Voir les offres
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
