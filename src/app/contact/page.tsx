import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { contactProjectTypes } from "@/lib/site-data";

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez NEURALIS pour un projet de site web, application, LMS, ERP, data, IA, automatisation, formation ou communication digitale.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet digital."
        description="Vous souhaitez creer un site web, developper une application, digitaliser votre gestion, ameliorer votre communication ou explorer l'IA pour votre organisation ? Contactez NEURALIS."
        primaryLabel="Envoyer une demande"
        primaryHref="#formulaire"
        secondaryLabel="Voir les offres"
        secondaryHref="/offres"
      />
      <section className="section-padding bg-white" id="formulaire">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <aside className="rounded-[2rem] bg-slate-950 p-8 text-white">
            <p className="section-eyebrow text-cyan-200">Coordonnees</p>
            <h2 className="mt-4 text-3xl font-semibold">Un premier echange simple pour cadrer le besoin.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Expliquez votre projet, votre organisation et votre priorite. NEURALIS vous proposera une premiere
              direction claire.
            </p>
            <div className="mt-8 grid gap-5 text-sm text-slate-300">
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-300" aria-hidden />
                Bamako, Mali
              </span>
              <span className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-300" aria-hidden />
                Rendez-vous sur demande
              </span>
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-300" aria-hidden />
                contact@neuralis-mali.com
              </span>
              <span className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-cyan-300" aria-hidden />
                WhatsApp Business
              </span>
            </div>
            <div className="mt-8">
              <ButtonLink href="https://wa.me/22300000000" variant="ghost" whatsapp>
                Contacter sur WhatsApp
              </ButtonLink>
            </div>
          </aside>
          <form
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
                Nom et prenom
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="name" placeholder="Votre nom" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Organisation
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="organization" placeholder="Entreprise, ecole..." />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Telephone
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="phone" placeholder="+223 ..." required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="email" placeholder="vous@email.com" type="email" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Type de projet
                <select className="min-h-12 rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="projectType" defaultValue="" required>
                  <option value="" disabled>
                    Selectionner
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
                <textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100" name="message" placeholder="Decrivez votre besoin, vos objectifs et votre delai." required />
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
                Votre demande sera envoyee directement a l&apos;equipe NEURALIS.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
