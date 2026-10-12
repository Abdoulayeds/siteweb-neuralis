"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function NavigationEffects() {
  const pathname = usePathname();
  const destination = useRef<URL | null>(null);

  useEffect(() => {
    const rememberDestination = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.target || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname !== window.location.pathname) destination.current = url;
    };
    const restoreHistory = () => { destination.current = null; };
    document.addEventListener("click", rememberDestination, true);
    window.addEventListener("popstate", restoreHistory);
    return () => {
      document.removeEventListener("click", rememberDestination, true);
      window.removeEventListener("popstate", restoreHistory);
    };
  }, []);

  useEffect(() => {
    const url = destination.current;
    if (!url || (url.pathname.replace(/\/$/, "") || "/") !== (pathname.replace(/\/$/, "") || "/")) return;
    destination.current = null;
    const frame = requestAnimationFrame(() => {
      if (url.hash) {
        const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        target?.scrollIntoView({ block: "start", behavior: "instant" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
