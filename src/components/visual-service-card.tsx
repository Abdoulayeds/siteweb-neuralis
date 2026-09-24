import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceDefinition } from "@/lib/service-catalog";
import { DetailDialog } from "./detail-dialog";
import { ServiceDetail } from "./service-detail";

export function VisualServiceCard({ service, index = 0 }: { service: ServiceDefinition; index?: number }) {
  const tone = ["cyan", "indigo", "mint", "amber", "orchid", "coral"][index % 6];
  return (
    <article id={service.id} data-tone={tone} className="visual-service-card themed-card group scroll-mt-32 overflow-hidden">
      <Link href={`/services/${service.id}`} className="service-image-link focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-700" aria-label={`Découvrir : ${service.title}`}>
        <Image src={service.image} alt={service.imageAlt} width={1200} height={800} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw" className="aspect-[3/2] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none" />
        <span className="service-image-number" aria-hidden>0{index + 1}</span>
        <span className="absolute bottom-4 left-4 rounded-full border border-white/75 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#0F172A] shadow-sm">{service.category}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="studio-kicker">{service.eyebrow}</p>
        <h3 className="mt-3 text-[1.45rem] font-semibold leading-tight tracking-[-0.025em] text-[#0F172A]">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
        <ul className="mt-5 space-y-2 border-t border-slate-200 pt-4" aria-label="Bénéfices clés">
          {service.benefits.slice(0, 2).map((benefit) => (
            <li key={benefit.title} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
              <Check className="h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
              {benefit.title}
            </li>
          ))}
        </ul>
        <div className="mt-auto grid gap-2.5 pt-6">
          <DetailDialog title={service.title} eyebrow={service.eyebrow} triggerClassName="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#075d72] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 motion-reduce:transition-none" triggerLabel="En savoir plus">
            <ServiceDetail service={service} />
          </DetailDialog>
          <Link href={`/services/${service.id}`} className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold text-cyan-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700">
            Voir la fiche complète <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
