"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "./logo";
import styles from "./header.module.css";
import { navItems } from "@/lib/site-data";

/** Horizontal inset (px) of the active underline inside its nav link. */
const INDICATOR_INSET = 12;
/** Base width (px) of the indicator element, scaled with scaleX. Keep in sync with header.module.css. */
const INDICATOR_BASE = 100;

export function Header() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const mobileTabsRef = useRef<HTMLElement>(null);
  const currentPath = pathname.replace(/\/$/, "") || "/";

  // Denser glass once the page scrolls. Written to a data attribute: no re-render, no layout change.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Slide the glowing node/underline under the active desktop link (transform only).
  useEffect(() => {
    const nav = desktopNavRef.current;
    if (!nav) return;
    let cancelled = false;
    const place = () => {
      if (cancelled) return;
      const active = nav.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
      if (!active || active.offsetWidth === 0) {
        nav.dataset.indicator = "off";
        return;
      }
      const width = Math.max(active.offsetWidth - INDICATOR_INSET * 2, 0);
      nav.style.setProperty("--ind-x", `${active.offsetLeft + INDICATOR_INSET}px`);
      nav.style.setProperty("--ind-scale", String(width / INDICATOR_BASE));
      nav.style.setProperty("--ind-center", `${active.offsetLeft + active.offsetWidth / 2}px`);
      nav.dataset.indicator = "on";
    };
    place();
    // Enable transitions only after the first placement so the indicator never slides in from 0.
    const frame = requestAnimationFrame(() => {
      if (!cancelled) nav.dataset.ready = "true";
    });
    const observer = new ResizeObserver(place);
    observer.observe(nav);
    document.fonts?.ready.then(place).catch(() => undefined);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [currentPath]);

  useEffect(() => {
    const tabs = mobileTabsRef.current;
    const active = tabs?.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
    if (!tabs || !active) return;
    tabs.scrollTo({ left: active.offsetLeft - tabs.clientWidth / 2 + active.offsetWidth / 2, behavior: "instant" });
  }, [pathname]);

  function closeMenu() {
    setOpenForPath(null);
    toggleRef.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!open) return;
    mobileNavRef.current?.querySelector<HTMLAnchorElement>('a[aria-current="page"], a')?.focus({ preventScroll: true });
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

  const isActive = (href: string) => currentPath === href || (href !== "/" && currentPath.startsWith(`${href}/`));

  return (
    <header
      ref={headerRef}
      className={styles.header}
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget)) setOpenForPath(null);
      }}
    >
      <div className={`studio-container ${styles.bar}`}>
        <div className={styles.brand}><Logo /></div>
        <nav ref={desktopNavRef} className={`hidden xl:flex ${styles.nav}`} aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={styles.link}
            >
              {item.label}
            </Link>
          ))}
          <span className={styles.indicator} aria-hidden="true" />
          <span className={styles.node} aria-hidden="true" />
        </nav>
        <div className={styles.actions}>
          <Link
            href="/contact"
            onClick={() => setOpenForPath(null)}
            className={`hidden sm:inline-flex ${styles.cta}`}
          >
            Discutons
            <ArrowUpRight className={styles.ctaIcon} aria-hidden="true" />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className={`inline-flex xl:hidden ${styles.toggle}`}
            onClick={() => open ? closeMenu() : setOpenForPath(pathname)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls={menuId}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav ref={mobileTabsRef} aria-label="Accès rapides mobile" className={`mobile-page-tabs xl:hidden ${styles.tabs}`}>
        {navItems.map(item => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setOpenForPath(null)}>{item.label}</Link>)}
      </nav>
      <span className={styles.signal} aria-hidden="true" />
      <div id={menuId} hidden={!open} className={`xl:hidden ${styles.panel}`}>
        <nav ref={mobileNavRef} className="studio-container grid gap-1 py-5" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpenForPath(null)}
              className={styles.panelLink}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpenForPath(null)}
            className={styles.panelCta}
          >
            Parlons de votre projet
            <ArrowUpRight className="h-5 w-5 text-[#22d3ee]" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
