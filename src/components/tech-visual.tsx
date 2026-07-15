import { ArrowRight, Bot, ChartNoAxesCombined, Code2, LayoutDashboard, MessageSquareText, Sparkles } from "lucide-react";

const projectSteps = [
  {
    label: "Diagnostic",
    detail: "Objectifs et priorites",
    number: "01",
  },
  {
    label: "Livraison",
    detail: "Solution testee par etapes",
    number: "02",
  },
  {
    label: "Accompagnement",
    detail: "Suivi et evolution",
    number: "03",
  },
];

const capabilities = [
  { label: "Web & mobile", icon: Code2 },
  { label: "LMS & ERP", icon: LayoutDashboard },
  { label: "Data & BI", icon: ChartNoAxesCombined },
  { label: "IA utile", icon: Bot },
];

export function TechVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:mr-0">
      <div className="absolute -inset-8 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.075] p-3 shadow-[0_35px_100px_rgba(2,6,23,.55)] backdrop-blur-xl sm:p-4">
        <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-slate-950/95">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                <Sparkles className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">NEURALIS Studio</p>
                <p className="mt-0.5 text-sm font-semibold text-white">Votre projet, clairement pilote</p>
              </div>
            </div>
            <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200 sm:inline">
              Disponible
            </span>
          </div>

          <div className="p-5 sm:p-6">
            <div className="rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 to-transparent p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <MessageSquareText className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Point de depart</p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-white">
                    Expliquez votre besoin avec vos mots. Nous le transformons en plan d&apos;action.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {projectSteps.map((step, index) => (
                <div key={step.label} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-xs font-bold tracking-[0.16em] text-cyan-300">{step.number}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">{step.label}</p>
                    <p className="mt-1 text-xs text-slate-400">{step.detail}</p>
                  </div>
                  {index < projectSteps.length - 1 ? (
                    <ArrowRight className="h-4 w-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300" aria-hidden />
                  ) : (
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,.8)]" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {capabilities.map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3 text-xs font-medium text-slate-300">
                  <item.icon className="h-4 w-4 text-cyan-300" aria-hidden />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/15 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur sm:-left-8">
        <p className="text-xs text-slate-400">Premier echange</p>
        <p className="mt-1 text-sm font-semibold text-white">Simple · Gratuit · Sans jargon</p>
      </div>
    </div>
  );
}
