import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  whatsapp?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", whatsapp = false }: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-cyan-400 text-slate-950 shadow-[0_18px_45px_rgba(6,182,212,0.28)] hover:bg-cyan-200 hover:shadow-[0_20px_60px_rgba(6,182,212,0.42)]",
    secondary:
      "border border-cyan-300/30 bg-slate-950 text-white hover:border-cyan-300/70 hover:bg-slate-900 hover:shadow-[0_18px_45px_rgba(15,23,42,0.24)]",
    ghost:
      "border border-white/15 bg-white/5 text-white hover:border-cyan-300/70 hover:bg-white/10",
    light:
      "border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 hover:border-cyan-300/70 hover:bg-cyan-300/15",
  };

  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${styles[variant]}`}
    >
      <span className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/30 blur-xl transition duration-700 group-hover:left-[120%]" />
      {whatsapp ? <MessageCircle className="relative h-4 w-4 transition group-hover:scale-110" aria-hidden /> : null}
      <span className="relative">{children}</span>
      {!whatsapp ? (
        <ArrowRight className="relative h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden />
      ) : null}
    </Link>
  );
}
