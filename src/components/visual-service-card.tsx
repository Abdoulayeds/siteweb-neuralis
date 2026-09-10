import Image from "next/image";
import Link from "next/link";
import type { ServiceDefinition } from "@/lib/service-catalog";
import { DetailDialog } from "./detail-dialog";
import { ServiceDetail } from "./service-detail";

export function VisualServiceCard({ service, index = 0 }: { service: ServiceDefinition; index?: number }) {
  return (
    <article id={service.id} className="visual-service-card group scroll-mt-32">
      <Link href={`/services/${service.id}`} className="service-image-link" aria-label={`Découvrir : ${service.title}`}>
        <Image src={service.image} alt={service.imageAlt} width={1200} height={800} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw" className="aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-[1.035] motion-reduce:transform-none" />
        <span className="service-image-number" aria-hidden>0{index + 1}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="studio-kicker">{service.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
        <div className="mt-auto pt-6">
          <DetailDialog title={service.title} eyebrow={service.eyebrow} triggerClassName="studio-link min-h-11" triggerLabel="En savoir plus">
            <ServiceDetail service={service} />
          </DetailDialog>
        </div>
      </div>
    </article>
  );
}
