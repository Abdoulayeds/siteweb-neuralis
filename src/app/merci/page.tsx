import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Demande envoyée",
  description: "Confirmation d'envoi de demande de devis NEURALIS.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return (
    <section className="studio-section text-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </div>
        <p className="studio-kicker mt-8">Demande reçue</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Merci, votre message a bien été envoyé.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
          L’équipe NEURALIS analysera votre besoin et reviendra vers vous pour préparer la prochaine étape.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            Voir les services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
