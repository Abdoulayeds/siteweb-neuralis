"use client";

import { useEffect, useRef, type ReactNode } from "react";

type PauseWhenOffscreenProps = {
  className?: string;
  children: ReactNode;
};

/** Wraps decorative animations so globals.css can pause them while they are off-screen. */
export function PauseWhenOffscreen({ className, children }: PauseWhenOffscreenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      element.setAttribute("data-paused", entry.isIntersecting ? "false" : "true");
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
