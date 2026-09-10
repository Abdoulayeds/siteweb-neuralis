import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { serviceCatalog, getService } from "@/lib/service-catalog";
import { businessInfo } from "@/lib/business-info";
import { ServiceDetail } from "@/components/service-detail";

export const dynamicParams = false;
export function generateStaticParams() { return serviceCatalog.map(service => ({ service: service.id })); }

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: id } = await params;
  const service = getService(id);
  if (!service) return {};
  return {
    title: `${service.title} à Bamako`, description: service.summary,
    alternates: { canonical: `${businessInfo.siteUrl}/services/${id}` },
    twitter: { card: "summary_large_image", title: `${service.title} | NEURALIS`, description: service.summary, images: [service.image] },
    openGraph: { title: `${service.title} | NEURALIS`, description: service.summary, url: `${businessInfo.siteUrl}/services/${id}`, images: [{ url: service.image, width: 1200, height: 800, alt: service.imageAlt }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: id } = await params;
  const service = getService(id);
  if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.summary, url: `${businessInfo.siteUrl}/services/${id}`, serviceType: service.title, provider: { "@type": "Organization", name: "NEURALIS", url: businessInfo.siteUrl }, areaServed: { "@type": "Country", name: "Mali" } };
  return <section className="studio-section"><div className="studio-container">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <nav aria-label="Fil d’Ariane" className="mb-9"><Link href="/services" className="studio-link"><ArrowLeft className="h-4 w-4" aria-hidden /> Toutes les expertises</Link></nav>
    <p className="studio-kicker">{service.eyebrow}</p>
    <h1 className="studio-heading mt-4 max-w-4xl">{service.title}</h1>
    <p className="studio-copy mb-10 mt-5 max-w-3xl">{service.summary}</p>
    <div className="studio-panel p-6 md:p-10"><ServiceDetail service={service} standalone /></div>
    <div className="mt-12"><h2 className="text-2xl font-semibold text-white">À découvrir aussi</h2><div className="studio-tags mt-5">{serviceCatalog.filter(item => item.id !== id && item.category === service.category).map(item => <Link key={item.id} href={`/services/${item.id}`}>{item.title}</Link>)}</div></div>
  </div></section>;
}
