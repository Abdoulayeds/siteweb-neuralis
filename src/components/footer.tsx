import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { businessInfo } from "@/lib/business-info";
import { navItems } from "@/lib/site-data";
import { seoLandingPages } from "@/lib/seo-landing-pages";
import { SocialIcon } from "./social-icon";

const expertiseLinks = [
  { id: "sites-web", label: "Sites web" },
  { id: "applications", label: "Applications web et mobiles" },
  { id: "plateformes", label: "Plateformes métiers" },
  { id: "communication", label: "Communication digitale" },
  { id: "data", label: "Data et tableaux de bord" },
  { id: "ia", label: "IA et automatisation" },
  { id: "formation", label: "Formation" },
  { id: "consulting", label: "Conseil et audit" },
];

const footerLink = "w-fit rounded-sm text-sm leading-6 text-slate-400 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111f] text-white">
      <div className="studio-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.1fr_1.15fr] lg:gap-8 lg:py-20">
        <div>
          <Logo dark />
          <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
            Des outils numériques utiles, conçus pour les entreprises et les organisations qui font avancer le Mali.
          </p>
          <p className="mt-4 text-xs leading-6 text-slate-400">Bamako, Mali · Afrique de l&apos;Ouest</p>
          <div className="mt-6 flex gap-3">
            {businessInfo.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NEURALIS sur ${social.label} (nouvel onglet)`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none"
              >
                <SocialIcon name={social.label as "Instagram" | "LinkedIn" | "TikTok"} className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        <nav aria-label="Navigation de pied de page">
          <h2 className="text-sm font-semibold text-white">Explorer</h2>
          <ul className="mt-5 grid gap-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={footerLink}>
                  {item.href === "/a-propos" ? "À propos" : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Nos expertises">
          <h2 className="text-sm font-semibold text-white">Nos expertises</h2>
          <ul className="mt-5 grid gap-2.5">
            {expertiseLinks.map((expertise) => (
              <li key={expertise.id}>
                <Link href={`/services/${expertise.id}`} className={footerLink}>{expertise.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-white">Parlons de votre projet</h2>
          <address className="mt-5 grid gap-4 not-italic">
            <p className="flex items-center gap-3 text-sm text-slate-400">
              <MapPin className="h-4 w-4 shrink-0 text-cyan-200/70" aria-hidden="true" />
              {businessInfo.city}, {businessInfo.country}
            </p>
            <Link className={`${footerLink} flex items-start gap-3`} href={`mailto:${businessInfo.email}`}>
              <Mail className="mt-1 h-4 w-4 shrink-0 text-cyan-200/70" aria-hidden="true" />
              <span className="break-all">{businessInfo.email}</span>
            </Link>
            <Link className={`${footerLink} flex items-center gap-3`} href={`tel:${businessInfo.phoneInternational}`}>
              <Phone className="h-4 w-4 shrink-0 text-cyan-200/70" aria-hidden="true" />
              {businessInfo.phoneDisplay}
            </Link>
            <Link className={`${footerLink} flex items-center gap-3`} href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <SocialIcon name="WhatsApp" className="h-4 w-4 shrink-0 text-cyan-200/70" />
              WhatsApp Business
            </Link>
          </address>
        </div>
      </div>
      <div className="studio-container">
        <details className="border-t border-white/10 py-5">
          <summary className="w-fit cursor-pointer rounded-sm text-xs font-medium text-slate-400 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            Expertises au Mali
          </summary>
          <nav className="mt-5 grid gap-3 pb-2 sm:grid-cols-2 lg:grid-cols-3" aria-label="Expertises locales">
            {seoLandingPages.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`} className={footerLink}>
                {page.title.replace("Creation", "Création").replace("Developpement", "Développement").replace("ecoles", "écoles")}
              </Link>
            ))}
          </nav>
        </details>
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs leading-6 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NEURALIS. Tous droits réservés.</p>
          <p>Le numérique, au service de vos ambitions.</p>
        </div>
      </div>
    </footer>
  );
}
