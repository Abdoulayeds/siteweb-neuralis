import { ButtonLink } from "./button-link";
import styles from "./page-hero.module.css";
import { PauseWhenOffscreen } from "./pause-when-offscreen";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const nodes = [
  [70, 210], [138, 120], [176, 252], [236, 70], [262, 182], [318, 290],
  [342, 118], [398, 214], [420, 46], [452, 312], [120, 312], [300, 22],
] as const;
const hubs = new Set([4, 6]);
const edges = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [2, 10], [3, 6], [3, 11],
  [4, 6], [4, 7], [5, 7], [5, 9], [6, 7], [6, 8], [7, 9], [8, 11], [10, 5],
] as const;
const signals = [[0, 1, 4, 7, 9], [10, 2, 4, 6, 8], [11, 3, 6, 7]] as const;

const pointsOf = (path: readonly number[]) => path.map((index) => nodes[index].join(" ")).join(" L");

function NeuralConstellation() {
  return (
    <PauseWhenOffscreen className={`absolute ${styles.constellation}`}>
      <div data-testid="hero-constellation">
      <svg viewBox="0 0 480 360" aria-hidden="true" focusable="false">
        <g>
          {edges.map(([from, to]) => (
            <line key={`${from}-${to}`} className={styles.edge} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} />
          ))}
        </g>
        <g>
          {signals.map((path) => (
            <path key={path.join("-")} className={styles.signal} pathLength={1} d={`M${pointsOf(path)}`} />
          ))}
        </g>
        <g>
          {nodes.map(([x, y], index) => (
            <g key={`${x}-${y}`}>
              {hubs.has(index) ? <circle className={styles.halo} cx={x} cy={y} r={14} style={{ animationDelay: `${-index * 0.6}s` }} /> : null}
              <circle className={`${styles.node} ${hubs.has(index) ? styles.hub : ""}`} cx={x} cy={y} r={hubs.has(index) ? 6 : 3.2} style={{ animationDelay: `${-index * 0.45}s` }} />
            </g>
          ))}
        </g>
      </svg>
      </div>
    </PauseWhenOffscreen>
  );
}

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
    <section className="page-hero relative isolate overflow-hidden text-white">
      <NeuralConstellation />
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
