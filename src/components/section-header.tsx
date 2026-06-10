type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={inverted ? "section-eyebrow text-cyan-200" : "section-eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2 className={inverted ? "mt-3 text-balance text-3xl font-semibold text-white md:text-5xl" : "mt-3 text-balance text-3xl font-semibold text-slate-950 md:text-5xl"}>
        {title}
      </h2>
      {description ? (
        <p className={inverted ? "mt-5 text-pretty text-base leading-8 text-slate-300 md:text-lg" : "mt-5 text-pretty text-base leading-8 text-slate-600 md:text-lg"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

