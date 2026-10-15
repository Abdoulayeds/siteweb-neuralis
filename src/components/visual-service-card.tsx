import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceDefinition } from "@/lib/service-catalog";
import { DetailDialog } from "./detail-dialog";
import { ServiceDetail } from "./service-detail";
import styles from "./visual-service-card.module.css";

function CircuitOverlay() {
  return (
    <span className={styles.circuit} aria-hidden="true" data-testid="card-circuit">
      <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" focusable="false">
        <path className={styles.trace} pathLength={1} d="M0 152 H58 L78 132 H140" />
        <path className={styles.trace} pathLength={1} d="M300 38 H236 L214 60 H172" />
        <path className={styles.trace} pathLength={1} d="M140 132 L172 60 L226 118 Z" />
        <path className={styles.trace} pathLength={1} d="M226 118 L262 164 H300" />
        <path className={styles.trace} pathLength={1} d="M172 60 L150 18 H96" />
        <circle className={styles.dot} cx="140" cy="132" r="4" />
        <circle className={styles.dot} cx="172" cy="60" r="5" />
        <circle className={styles.dot} cx="226" cy="118" r="4" />
        <circle className={styles.dot} cx="262" cy="164" r="3" />
        <circle className={styles.dot} cx="96" cy="18" r="3" />
      </svg>
      <span className={styles.scan} />
    </span>
  );
}

export function VisualServiceCard({ service, index = 0 }: { service: ServiceDefinition; index?: number }) {
  const tone = ["cyan", "indigo", "mint", "amber", "orchid", "coral"][index % 6];
  return (
    <article id={service.id} data-tone={tone} className={`visual-service-card themed-card group scroll-mt-32 overflow-hidden ${styles.card}`}>
      <Link href={`/services/${service.id}`} className={`service-image-link ${styles.media} focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-700`} aria-label={`Découvrir : ${service.title}`}>
        <Image src={service.image} alt={service.imageAlt} width={1200} height={800} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 40vw" className="aspect-[3/2] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04] motion-safe:group-focus-within:scale-[1.04] motion-reduce:transition-none" />
        <CircuitOverlay />
        <span className={`service-image-number ${styles.node}`} aria-hidden="true">0{index + 1}</span>
        <span className="absolute bottom-4 left-4 z-[2] rounded-full border border-white/75 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#0F172A] shadow-sm">{service.category}</span>
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
      <span className={styles.glow} aria-hidden="true" />
    </article>
  );
}
