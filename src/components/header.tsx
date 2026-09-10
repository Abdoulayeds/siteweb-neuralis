"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "./logo";
import { navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  function closeMenu() {
    setOpenForPath(null);
    toggleRef.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!open) return;
    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus({ preventScroll: true });
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpenForPath(null);
        toggleRef.current?.focus({ preventScroll: true });
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      const focusInMenu = mobileNavRef.current?.contains(document.activeElement);
      setOpenForPath(null);
      if (focusInMenu) {
        desktopNavRef.current?.querySelector<HTMLAnchorElement>('a[aria-current="page"], a')?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const labelFor = (item: (typeof navItems)[number]) => item.href === "/a-propos" ? "À propos" : item.label;

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/95 text-white backdrop-blur-xl"
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget)) setOpenForPath(null);
      }}
    >
      <div className="studio-container flex h-20 items-center justify-between gap-5">
        <div className="shrink-0"><Logo /></div>
        <nav ref={desktopNavRef} className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative whitespace-nowrap rounded-md px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 motion-reduce:transition-none ${isActive(item.href) ? "text-cyan-200 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-cyan-300" : "text-slate-300 hover:text-white"}`}
            >
              {labelFor(item)}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            onClick={() => { if (open) closeMenu(); }}
            className="hidden items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200/60 hover:bg-cyan-300/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none sm:inline-flex"
          >
            Discutons
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white hover:border-cyan-300/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 xl:hidden"
            onClick={() => open ? closeMenu() : setOpenForPath(pathname)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls={menuId}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-20 max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain border-b border-white/10 bg-[#07111f] shadow-2xl xl:hidden"
      >
        <nav ref={mobileNavRef} className="studio-container grid gap-1 py-5" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-cyan-300 motion-reduce:transition-none ${isActive(item.href) ? "bg-cyan-300/10 text-cyan-200" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
            >
              {labelFor(item)}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-between gap-3 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-4 font-semibold text-cyan-100 hover:bg-cyan-300/15 focus-visible:outline-2 focus-visible:outline-cyan-300"
          >
            Parlons de votre projet
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
