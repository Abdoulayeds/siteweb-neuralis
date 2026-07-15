import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  items?: string[];
  dark?: boolean;
};

export function ServiceCard({ title, description, icon: Icon, href, items = [], dark = false }: ServiceCardProps) {
  const content = (
    <article
      className={
        dark
          ? "group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.08] hover:shadow-[0_22px_70px_rgba(6,182,212,0.16)]"
          : "group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_22px_70px_rgba(15,23,42,0.1)]"
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className={dark ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200" : "flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700"}>
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className={dark ? "mt-6 text-xl font-semibold text-white" : "mt-6 text-xl font-semibold text-slate-950"}>
        {title}
      </h3>
      <p className={dark ? "mt-3 text-sm leading-7 text-slate-300" : "mt-3 text-sm leading-7 text-slate-600"}>
        {description}
      </p>
      {items.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className={dark ? "rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300" : "rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"}>
              {item}
            </span>
          ))}
        </div>
      ) : null}
      {href ? (
        <div className={dark ? "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200" : "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"}>
          En savoir plus <ArrowRight className="h-4 w-4" aria-hidden />
        </div>
      ) : null}
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

type OfferCardProps = {
  title: string;
  audience: string;
  result: string;
  includes: string[];
  icon: LucideIcon;
  featured?: boolean;
};

export function OfferCard({ title, audience, result, includes, icon: Icon, featured = false }: OfferCardProps) {
  return (
    <article className={featured ? "group relative overflow-hidden rounded-3xl border border-cyan-300 bg-slate-950 p-6 text-white shadow-2xl shadow-cyan-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(6,182,212,0.2)]" : "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_22px_70px_rgba(15,23,42,0.1)]"}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      {featured ? (
        <span className="absolute right-5 top-5 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
          Prioritaire
        </span>
      ) : null}
      <div className={featured ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200" : "flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700"}>
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className={featured ? "mt-6 text-2xl font-semibold text-white" : "mt-6 text-2xl font-semibold text-slate-950"}>
        {title}
      </h3>
      <p className={featured ? "mt-3 text-sm leading-7 text-slate-300" : "mt-3 text-sm leading-7 text-slate-600"}>
        {audience}
      </p>
      <p className={featured ? "mt-5 rounded-2xl bg-white/10 p-4 text-sm font-medium leading-7 text-cyan-50" : "mt-5 rounded-2xl bg-cyan-50 p-4 text-sm font-medium leading-7 text-cyan-900"}>
        {result}
      </p>
      <ul className="mt-6 grid gap-3">
        {includes.map((item) => (
          <li key={item} className={featured ? "flex gap-3 text-sm text-slate-200" : "flex gap-3 text-sm text-slate-700"}>
            <CheckCircle2 className={featured ? "mt-0.5 h-4 w-4 shrink-0 text-cyan-200" : "mt-0.5 h-4 w-4 shrink-0 text-cyan-600"} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
