"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";
import { SocialIcon } from "./social-icon";
import { businessInfo } from "@/lib/business-info";
import { navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-slate-950/82 text-white shadow-[0_12px_50px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:flex"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  active
                    ? "bg-white text-slate-950 shadow-[0_10px_28px_rgba(6,182,212,0.18)]"
                    : "text-slate-300 hover:bg-cyan-300/10 hover:text-white"
                }`}
              >
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-300 transition duration-300 group-hover:scale-x-100" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/12 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          {businessInfo.socials.map((social) => {
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NEURALIS sur ${social.label}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
              >
                <SocialIcon name={social.label as "Instagram" | "LinkedIn" | "TikTok"} className="h-4 w-4" />
              </Link>
            );
          })}
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
            <div className="flex gap-3 pt-2">
              {businessInfo.socials.map((social) => {
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`NEURALIS sur ${social.label}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                  >
                    <SocialIcon name={social.label as "Instagram" | "LinkedIn" | "TikTok"} className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
