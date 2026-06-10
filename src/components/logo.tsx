import Link from "next/link";

type LogoProps = {
  dark?: boolean;
};

export function Logo({ dark = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Retour a l'accueil NEURALIS">
      <span className="neuralis-mark relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/40 bg-slate-950 shadow-[0_0_34px_rgba(6,182,212,0.28)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-200 group-hover:shadow-[0_0_44px_rgba(6,182,212,0.46)]">
        <span className="relative z-10 text-2xl font-black leading-none text-cyan-200">N</span>
        <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
        <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
        <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
        <span className="absolute inset-x-3 top-1/2 h-px -rotate-45 bg-cyan-300/70" />
        <span className="absolute inset-y-3 left-1/2 w-px bg-cyan-300/40" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={dark ? "text-xl font-semibold text-white" : "text-xl font-semibold text-white"}>
          Neuralis
        </span>
        <span
          className={
            dark
              ? "mt-1 text-[10px] uppercase tracking-[0.24em] text-cyan-200"
              : "mt-1 text-[10px] uppercase tracking-[0.24em] text-cyan-200"
          }
        >
          Digital Partner
        </span>
      </span>
    </Link>
  );
}
