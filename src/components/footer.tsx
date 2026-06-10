import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./logo";
import { navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo dark />
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
            NEURALIS accompagne les entreprises, ecoles et organisations dans leur transformation digitale :
            sites web, applications, plateformes metiers, communication, data, IA et formation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 px-3 py-1">Bamako, Mali</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Afrique de l&apos;Ouest</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Navigation</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-cyan-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Expertises</h2>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <span>Sites web</span>
            <span>Applications web/mobile</span>
            <span>Plateformes metiers</span>
            <span>Data et dashboards</span>
            <span>IA et automatisation</span>
            <span>Formation</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Contact</h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cyan-300" aria-hidden />
              Bamako, Mali
            </span>
            <Link className="flex items-center gap-3 hover:text-cyan-200" href="mailto:contact@neuralis.ml">
              <Mail className="h-4 w-4 text-cyan-300" aria-hidden />
              contact@neuralis.ml
            </Link>
            <Link className="flex items-center gap-3 hover:text-cyan-200" href="/contact">
              <Phone className="h-4 w-4 text-cyan-300" aria-hidden />
              Rendez-vous sur demande
            </Link>
            <Link className="flex items-center gap-3 hover:text-cyan-200" href="/contact">
              <MessageCircle className="h-4 w-4 text-cyan-300" aria-hidden />
              WhatsApp Business
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>2026 NEURALIS. Tous droits reserves.</p>
          <p>Le partenaire digital des entreprises ambitieuses.</p>
        </div>
      </div>
    </footer>
  );
}

