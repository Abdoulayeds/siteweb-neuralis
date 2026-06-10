"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";
import { navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-slate-950/88 text-white shadow-[0_12px_50px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  active
                    ? "bg-cyan-400 text-slate-950 shadow-[0_10px_28px_rgba(6,182,212,0.25)]"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-300 transition duration-300 group-hover:scale-x-100" />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact" variant="primary">
            Demander un devis
          </ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-cyan-300/10 bg-slate-950 px-4 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/5 px-4 py-3 text-base font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <ButtonLink href="/contact" variant="primary">
                Demander un devis
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
