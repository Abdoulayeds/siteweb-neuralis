import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceDefinition } from "@/lib/service-catalog";
import { ButtonLink } from "./button-link";

export function ServiceDetail({ service, standalone = false }: { service: ServiceDefinition; standalone?: boolean }) {
  return (
    <div className="service-detail">
      <div className="grid gap-7 md:grid-cols-2 md:items-center">
        <Image src={service.image} alt={service.imageAlt} width={1200} height={800} className="aspect-[3/2] w-full rounded-2xl object-cover" />
        <div>
          <p className="studio-copy">{service.description}</p>
          <div className="studio-tags mt-5">{service.forWho.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
      <div className="my-9 grid gap-5 md:grid-cols-3">
        {service.benefits.map((benefit, index) => (
          <div key={benefit.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <span className="text-xs font-semibold text-cyan-300">0{index + 1}</span>
            <h3 className="mt-3 text-lg font-semibold text-white">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">{benefit.description}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-white">Ce que nous construisons avec vous</h3>
          <ul className="mt-5 grid gap-3">{service.deliverables.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden /><span>{item}</span></li>)}</ul>
        </div>
        <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-6">
          <p className="studio-kicker">Un exemple concret</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{service.example.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{service.example.description}</p>
        </div>
      </div>
      <div className="my-9 border-y border-white/10 py-7">
        <h3 className="text-xl font-semibold text-white">Comment se déroule le projet ?</h3>
        <ol className="mt-5 grid gap-5 sm:grid-cols-2">{service.process.map((step,index) => <li key={step} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="text-cyan-300">0{index+1}</span>{step}</li>)}</ol>
      </div>
      <h3 className="text-xl font-semibold text-white">Vos questions, nos réponses</h3>
      <div className="mt-4 grid gap-3">{service.faq.map(item => <details key={item.question} className="studio-faq"><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <ButtonLink href="/contact#formulaire">Parlons de votre projet</ButtonLink>
        {!standalone && <Link href={`/services/${service.id}`} className="studio-link">Ouvrir la fiche complète <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>}
      </div>
      <p className="mt-4 text-xs leading-6 text-slate-400">Le périmètre, le calendrier et les modalités d’accompagnement sont définis dans votre proposition.</p>
    </div>
  );
}
