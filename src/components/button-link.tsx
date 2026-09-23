import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SocialIcon } from "./social-icon";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  whatsapp?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", whatsapp = false }: ButtonLinkProps) {
  const styles = {
    primary:
      "site-button-primary bg-cyan-700 text-white shadow-[0_14px_36px_rgba(8,123,145,0.18)] hover:bg-cyan-800 hover:shadow-[0_18px_44px_rgba(8,123,145,0.24)]",
    secondary:
      "border border-cyan-700 bg-white text-cyan-800 hover:bg-cyan-50",
    ghost:
      "border border-slate-300 bg-white text-slate-800 hover:border-cyan-700 hover:bg-cyan-50",
    light:
      "border border-cyan-200 bg-cyan-50 text-cyan-800 hover:border-cyan-700 hover:bg-cyan-100",
  };

  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${styles[variant]}`}
    >
      <span className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/30 blur-xl transition duration-700 group-hover:left-[120%]" />
      {whatsapp ? <SocialIcon name="WhatsApp" className="relative h-4 w-4 transition group-hover:scale-110" /> : null}
      <span className="relative">{children}</span>
      {!whatsapp ? (
        <ArrowRight className="relative h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden />
      ) : null}
    </Link>
  );
}
