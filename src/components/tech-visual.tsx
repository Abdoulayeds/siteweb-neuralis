import { Activity, Database, Gauge, Network, ServerCog, ShieldCheck } from "lucide-react";

export function TechVisual() {
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
                <p className="mt-2 text-3xl font-semibold text-white">87%</p>
              </div>
              <Gauge className="h-9 w-9 text-cyan-300" aria-hidden />
            </div>
            <div className="mt-6 grid gap-3">
              {["Site web pro", "Plateforme LMS", "Dashboard data", "Assistant IA"].map((item, index) => (
                <div key={item} className="rounded-xl bg-white/[0.04] p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-200">{item}</span>
                    <span className="text-cyan-200">{82 + index * 4}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-cyan-400"
                      style={{ width: `${72 + index * 6}%` }}
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
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-medium text-white">{item.label}</span>
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

