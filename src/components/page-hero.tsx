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
    <section className="page-hero relative overflow-hidden text-white">
      <div className="studio-container">
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5"><p className="studio-kicker">{eyebrow}</p><span className="page-hero-index">NEURALIS / BAMAKO</span></div>
        <div>
          <h1 className="page-hero-title">
            {title}
          </h1>
          <p className="studio-copy mt-6 max-w-2xl">
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
