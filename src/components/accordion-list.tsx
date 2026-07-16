"use client";

import { ChevronDown, MonitorSmartphone, MousePointerClick, School, Workflow } from "lucide-react";
import { useState } from "react";

const iconMap = {
  web: MonitorSmartphone,
  school: School,
  workflow: Workflow,
  click: MousePointerClick,
};

type AccordionItem = {
  title: string;
  description: string;
  action?: string;
  iconKey?: string;
};

type AccordionListProps = {
  items: AccordionItem[];
  variant?: "light" | "dark";
};

export function AccordionList({ items, variant = "dark" }: AccordionListProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const light = variant === "light";

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const Icon =
          item.iconKey && item.iconKey in iconMap ? iconMap[item.iconKey as keyof typeof iconMap] : null;
        return (
          <article
            key={item.title}
            className={
              light
                ? "overflow-hidden rounded-3xl border border-cyan-300/15 bg-slate-950/40 shadow-sm transition hover:border-cyan-300/60 hover:bg-slate-950/60"
                : "overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-sm transition hover:border-cyan-300/50"
            }
          >
            <button
              type="button"
              className="flex w-full items-center gap-4 p-5 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
            >
              {Icon ? (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              ) : null}
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-white">
                  {item.title}
                </span>
                {item.action ? (
                  <span className="mt-1 block text-xs font-semibold text-cyan-200">
                    {item.action}
                  </span>
                ) : null}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-cyan-200 transition duration-300 ${open ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-20 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
