import Link from "next/link";
import { ArrowRight, ArrowUp, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { businessInfo } from "@/lib/business-info";
import { navItems } from "@/lib/site-data";
import { seoLandingPages } from "@/lib/seo-landing-pages";
import { SocialIcon } from "./social-icon";
import { FooterNetwork } from "./footer-network";
import styles from "./footer.module.css";

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

const navLink = `${styles.link} ${styles.navLink}`;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterNetwork />

      <div className="studio-container pt-16 lg:pt-24">
        <section className={`${styles.cta} grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-12`} aria-labelledby="footer-cta-title">
          <div>
            <p className={styles.eyebrow}>Prochaine étape</p>
            <h2 id="footer-cta-title" className={`${styles.ctaTitle} mt-3 text-3xl font-semibold sm:text-4xl`}>
              Parlons de votre projet
            </h2>
            <p className={`${styles.ctaText} mt-4 max-w-xl text-base leading-7`}>
              Site web, application, plateforme métier, data ou IA : décrivez votre besoin, nous revenons vers vous rapidement avec une proposition claire.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/contact" className={styles.primaryButton}>
              Démarrer un projet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Écrire à NEURALIS sur WhatsApp (nouvel onglet)"
              className={styles.secondaryButton}
            >
              <SocialIcon name="WhatsApp" className="h-4 w-4" />
              WhatsApp
            </Link>
          </div>
        </section>
      </div>

      <div className="studio-container mt-14 lg:mt-20">
        <div className={styles.divider} aria-hidden="true" />
      </div>

      <div className="studio-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.1fr_1.15fr] lg:gap-8 lg:py-16">
        <div>
          <Logo />
          <p className={`${styles.blurb} mt-6 max-w-xs text-sm leading-7`}>
            Des outils numériques utiles, conçus pour les entreprises et les organisations qui font avancer le Mali.
          </p>
          <p className={`${styles.muted} mt-4 text-xs leading-6`}>Bamako, Mali · Afrique de l&apos;Ouest</p>
          <div className="mt-6 flex gap-3">
            {businessInfo.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NEURALIS sur ${social.label} (nouvel onglet)`}
                className={styles.social}
              >
                <SocialIcon name={social.label as "Instagram" | "LinkedIn" | "TikTok"} className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        <nav aria-label="Navigation de pied de page">
          <h2 className={styles.heading}>Explorer</h2>
          <ul className="mt-4 grid">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navLink}>
                  {item.href === "/a-propos" ? "À propos" : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Nos expertises">
          <h2 className={styles.heading}>Nos expertises</h2>
          <ul className="mt-4 grid">
            {expertiseLinks.map((expertise) => (
              <li key={expertise.id}>
                <Link href={`/services/${expertise.id}`} className={navLink}>{expertise.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className={styles.heading}>Contact</h2>
          <address className="mt-4 grid not-italic">
            <p className={`${styles.muted} flex min-h-11 items-center gap-3 text-sm`}>
              <MapPin className={styles.icon} aria-hidden="true" />
              {businessInfo.city}, {businessInfo.country}
            </p>
            <Link className={styles.link} href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className={styles.icon} aria-hidden="true" /> Notre fiche Google ↗
            </Link>
            <Link className={styles.link} href={`mailto:${businessInfo.email}`}>
              <Mail className={styles.icon} aria-hidden="true" />
              <span className="break-all">{businessInfo.email}</span>
            </Link>
            <Link className={styles.link} href={`tel:${businessInfo.phoneInternational}`}>
              <Phone className={styles.icon} aria-hidden="true" />
              {businessInfo.phoneDisplay}
            </Link>
            <Link className={styles.link} href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <SocialIcon name="WhatsApp" className={styles.icon} />
              WhatsApp Business
            </Link>
          </address>
        </div>
      </div>

      <div className="studio-container">
        <details className={`${styles.rule} group py-3`}>
          <summary className={`${styles.summary} list-none [&::-webkit-details-marker]:hidden`}>
            Expertises au Mali
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
          </summary>
          <nav className="mt-3 grid gap-x-6 pb-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Expertises locales">
            {seoLandingPages.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`} className={navLink}>
                {page.title.replace("Creation", "Création").replace("Developpement", "Développement").replace("ecoles", "écoles")}
              </Link>
            ))}
          </nav>
        </details>
        <div className={`${styles.rule} ${styles.bottom} flex flex-col gap-4 py-6 text-xs leading-6 sm:flex-row sm:items-center sm:justify-between`}>
          <p>© 2026 NEURALIS. Tous droits réservés.</p>
          <p>
            Photographies d’illustration · <span className={styles.tagline}>Le numérique, au service de vos ambitions.</span>
          </p>
          <a href="#top" className={`${styles.backToTop} w-fit`}>
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
}
