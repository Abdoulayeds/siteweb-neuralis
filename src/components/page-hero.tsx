import { ButtonLink } from "./button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Demander un devis",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(6,182,212,0.28),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,1))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="section-eyebrow text-cyan-200">{eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-300">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            {secondaryLabel && secondaryHref ? (
              <ButtonLink href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

