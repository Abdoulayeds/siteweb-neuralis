"use client";

import { Activity, Database, Gauge, Network, ServerCog, ShieldCheck, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const progressItems = [
  { label: "Site web pro", value: 82, width: 76 },
  { label: "Plateforme LMS", value: 86, width: 82 },
  { label: "Dashboard data", value: 90, width: 88 },
  { label: "Assistant IA", value: 94, width: 94 },
];

const metrics = [
  { label: "Services", value: 12, suffix: "+" },
  { label: "Priorites", value: 3, suffix: "" },
  { label: "Cadrage", value: 48, suffix: "h" },
];

export function TechVisual() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const maxFrames = 72;
    const interval = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / maxFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * 100));

      if (progress === 1) {
        window.clearInterval(interval);
      }
    }, 28);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[430px] rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-300/30 via-transparent to-white/10 opacity-70" />
      <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-slate-950">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-cyan-400" />
            <span className="h-3 w-3 rounded-full bg-slate-600" />
            <span className="h-3 w-3 rounded-full bg-white" />
          </div>
          <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-medium text-cyan-100">
            NEURALIS OS
          </span>
        </div>
        <div className="grid gap-4 p-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Transformation digitale</p>
                <p className="mt-2 text-3xl font-semibold text-white">{Math.min(count, 87)}%</p>
              </div>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10">
                <span className="absolute inset-1 rounded-[1rem] border border-cyan-300/20 neuralis-pulse-ring" />
                <Gauge className="h-8 w-8 text-cyan-300" aria-hidden />
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                  <p className="text-lg font-semibold text-cyan-100">
                    {Math.min(count, metric.value)}
                    {metric.suffix}
                  </p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              {progressItems.map((item) => (
                <div key={item.label} className="rounded-xl bg-white/[0.04] p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-200">{item.label}</span>
                    <span className="text-cyan-200">{Math.min(count, item.value)}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-cyan-400 transition-[width] duration-700 ease-out"
                      style={{ width: `${Math.min(count, item.width)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { label: "Web & Mobile", icon: ServerCog },
              { label: "Data & BI", icon: Database },
              { label: "IA", icon: Activity },
              { label: "Securite", icon: ShieldCheck },
            ].map((item, index) => (
              <div
                key={item.label}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/10"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-medium text-white">{item.label}</span>
                <TrendingUp className="ml-auto h-4 w-4 text-cyan-300 opacity-0 transition group-hover:opacity-100" aria-hidden />
              </div>
            ))}
          </div>
        </div>
        <div className="grid border-t border-white/10 md:grid-cols-3">
          {["Bamako", "PME & ecoles", "Solutions evolutives"].map((item) => (
            <div key={item} className="flex items-center gap-3 border-white/10 p-5 md:border-r md:last:border-r-0">
              <Network className="h-5 w-5 text-cyan-300" aria-hidden />
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
