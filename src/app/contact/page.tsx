import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { businessInfo } from "@/lib/business-info";
import { contactProjectTypes } from "@/lib/site-data";
import { SocialIcon } from "@/components/social-icon";

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Contactez NEURALIS pour un projet de site web, application, LMS, ERP, data, IA, automatisation, formation ou communication digitale.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet digital."
        description="Parlez-nous de votre activité, de vos objectifs et de ce que vous aimeriez améliorer. Nous définirons ensemble la prochaine étape."
        primaryLabel="Envoyer une demande"
        primaryHref="#formulaire"
        secondaryLabel="Voir les offres"
        secondaryHref="/offres"
      />
      <section className="studio-section scroll-mt-28" id="formulaire">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="studio-kicker">Restons en contact</p>
            <h2 className="mt-4 text-3xl font-semibold">Un échange simple.<br />Un projet bien cadré.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Une idée en tête ou un besoin déjà précis ? Choisissez le canal qui vous convient.
            </p>
            <div className="mt-8 grid gap-5 text-sm text-slate-300">
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-300" aria-hidden />
                Bamako, Mali
              </span>
              <a href={`tel:${businessInfo.phoneInternational}`} className="flex items-center gap-3 hover:text-cyan-200">
                <Phone className="h-5 w-5 text-cyan-300" aria-hidden />
                {businessInfo.phoneDisplay}
              </a>
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-3 hover:text-cyan-200">
                <Mail className="h-5 w-5 text-cyan-300" aria-hidden />
                {businessInfo.email}
              </a>
              <a href={businessInfo.whatsappUrl} className="flex items-center gap-3 hover:text-cyan-200">
                <SocialIcon name="WhatsApp" className="h-5 w-5 text-cyan-300" />
                WhatsApp Business
              </a>
            </div>
            <div className="mt-8">
              <ButtonLink href={businessInfo.whatsappUrl} variant="ghost" whatsapp>
                Contacter sur WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Réseaux sociaux</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {businessInfo.socials.map((social) => {
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white"
                    >
                      <SocialIcon name={social.label as "Instagram" | "LinkedIn" | "TikTok"} className="h-4 w-4" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
          {web3FormsAccessKey ? <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <input type="hidden" name="access_key" value={web3FormsAccessKey} />
            <input type="hidden" name="subject" value="Nouvelle demande de devis NEURALIS" />
            <input type="hidden" name="from_name" value="Site web NEURALIS" />
            <input type="hidden" name="redirect" value="https://neuralis-mali.com/merci" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Nom et prénom
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="name" placeholder="Votre nom" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Organisation
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="organization" placeholder="Entreprise, ecole..." />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Téléphone
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="phone" type="tel" autoComplete="tel" placeholder="+223 ..." required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="email" placeholder="vous@email.com" type="email" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Type de projet
                <select className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="projectType" defaultValue="" required>
                  <option value="" disabled>
                    Sélectionner
                  </option>
                  {contactProjectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Budget approximatif
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="budget" placeholder="Sur devis / estimation" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
                Message
                <textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="message" placeholder="Décrivez votre besoin, vos objectifs et votre délai." required />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Envoyer ma demande
              </button>
              <p className="text-sm text-slate-500">
                Vos coordonnées servent à vous recontacter au sujet de cette demande.
              </p>
            </div>
          </form> : <div className="studio-panel p-7 md:p-10">
            <p className="studio-kicker">Votre projet, en quelques mots</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Écrivons la suite ensemble.</h2>
            <p className="studio-copy mt-5">Envoyez-nous votre demande par e-mail ou WhatsApp. Pour préparer notre échange, indiquez simplement :</p>
            <ul className="mt-6 grid gap-4 text-slate-300"><li>01 / Votre activité et votre organisation</li><li>02 / Le besoin ou le problème à résoudre</li><li>03 / Le résultat attendu et votre calendrier</li></ul>
            <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href={`mailto:${businessInfo.email}?subject=Mon%20projet%20digital%20NEURALIS`}>Écrire par e-mail</ButtonLink><ButtonLink href={businessInfo.whatsappUrl} variant="ghost" whatsapp>Échanger sur WhatsApp</ButtonLink></div>
          </div>}
        </div>
      </section>
    </>
  );
}
