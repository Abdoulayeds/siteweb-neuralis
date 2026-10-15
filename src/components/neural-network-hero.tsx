"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import styles from "./neural-network-hero.module.css";

/* Geometry lives in a 600 × 400 viewBox. HTML labels are positioned with the
   same coordinates expressed as percentages, so SVG and text stay aligned at
   every width without measuring the DOM (no layout shift, SSR-safe). */
const VIEW_W = 600;
const VIEW_H = 400;
const CYCLE_MS = 3200;
const LAYER_X = [135, 237, 338, 440] as const;

type NodePoint = { layer: number; index: number; x: number; y: number; desktopOnly: boolean };
type Edge = { id: string; from: NodePoint; to: NodePoint; weight: number; desktopOnly: boolean };

const INPUTS = ["Idée", "Données", "Processus"] as const;

const OUTPUTS = [
  { id: "sites-web", label: "Sites web" },
  { id: "applications", label: "Applications" },
  { id: "plateformes", label: "Plateformes" },
  { id: "data", label: "Data" },
  { id: "ia", label: "IA" },
  { id: "formation", label: "Formation" },
] as const;

/* Two hidden layers; nodes flagged desktopOnly are dropped on small screens. */
const HIDDEN_LAYERS = [
  { ys: [70, 135, 200, 265, 330], desktopOnly: [0, 4] },
  { ys: [100, 167, 233, 300], desktopOnly: [] as number[] },
];

const round = (value: number) => Math.round(value * 100) / 100;
/* Deterministic pseudo-random weight in [0.2, 1]; identical on server and client. */
const weightFor = (a: number, b: number, c: number) => {
  const raw = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453;
  return round(0.2 + 0.8 * (raw - Math.floor(raw)));
};

const layers: NodePoint[][] = [
  INPUTS.map((_, index) => ({ layer: 0, index, x: LAYER_X[0], y: 110 + index * 90, desktopOnly: false })),
  ...HIDDEN_LAYERS.map((layer, offset) => layer.ys.map((y, index) => ({ layer: offset + 1, index, x: LAYER_X[offset + 1], y, desktopOnly: layer.desktopOnly.includes(index) }))),
  OUTPUTS.map((_, index) => ({ layer: 3, index, x: LAYER_X[3], y: 50 + index * 60, desktopOnly: false })),
];

const edges: Edge[] = layers.slice(0, -1).flatMap((sources, layer) =>
  sources.flatMap(from => layers[layer + 1].map(to => ({
    id: `${layer}-${from.index}-${to.index}`,
    from,
    to,
    weight: weightFor(layer + 1, from.index + 1, to.index + 1),
    desktopOnly: from.desktopOnly || to.desktopOnly,
  }))),
);

const strongest = (candidates: Edge[], count: number) => [...candidates].filter(edge => !edge.desktopOnly).sort((a, b) => b.weight - a.weight).slice(0, count);

/* The highlighted "path" to an output: its two strongest hidden-2 feeders,
   their two strongest hidden-1 feeders, and the strongest input of each. */
function pathTo(output: number) {
  const last = strongest(edges.filter(edge => edge.to.layer === 3 && edge.to.index === output), 2);
  const middle = last.flatMap(edge => strongest(edges.filter(candidate => candidate.to.layer === 2 && candidate.to.index === edge.from.index), 2));
  const first = middle.flatMap(edge => strongest(edges.filter(candidate => candidate.to.layer === 1 && candidate.to.index === edge.from.index), 1));
  const lit = [...last, ...middle, ...first];
  return {
    edges: new Set(lit.map(edge => edge.id)),
    nodes: new Set(lit.flatMap(edge => [`${edge.from.layer}-${edge.from.index}`, `${edge.to.layer}-${edge.to.index}`])),
  };
}

const paths = OUTPUTS.map((_, index) => pathTo(index));
const pct = (value: number, total: number) => `${round((value / total) * 100)}%`;
const LAYER_NAMES = ["input", "hidden", "hidden", "output"] as const;

export function NeuralNetworkHero() {
  const figureRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState<number | null>(null);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const titleId = useId();
  const descId = useId();
  const paused = !inView || !tabVisible;
  const highlighted = focused ?? active;
  const path = paths[highlighted];

  useEffect(() => {
    const figure = figureRef.current;
    if (!figure || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused || focused !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % OUTPUTS.length), CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [paused, focused]);

  const release = () => setFocused(null);

  return (
    <figure ref={figureRef} className={styles.panel} aria-labelledby={titleId} aria-describedby={descId} data-paused={paused ? "true" : "false"} style={{ "--cycle": `${CYCLE_MS}ms` } as CSSProperties}>
      <div className={styles.topline} aria-hidden="true">
        <span>NEURALIS / RÉSEAU NEURONAL</span>
        <span className={styles.live}><span /> Signal actif</span>
      </div>
      <p id={descId} className="sr-only">
        Schéma animé d’un réseau de neurones. Vos besoins (une idée, des données, des processus) entrent dans le réseau NEURALIS,
        traversent deux couches de traitement et ressortent sous forme de services : sites web, applications, plateformes, data, IA et formation.
        Chaque service est un lien vers sa page.
      </p>
      <div className={styles.stage}>
        <span className={styles.core} aria-hidden="true">
          <Image src="/brand/neuralis-mark.webp" alt="" width={288} height={288} sizes="96px" loading="eager" className={styles.coreMark} />
        </span>
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className={styles.svg} aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="nnh-node" cx=".35" cy=".35" r=".7">
              <stop offset="0" stopColor="#e0faff" />
              <stop offset=".45" stopColor="#22d3ee" />
              <stop offset="1" stopColor="#0284c7" />
            </radialGradient>
          </defs>
          {LAYER_X.map((x, index) => <line key={x} x1={x} y1={22} x2={x} y2={VIEW_H - 22} className={styles.layerGuide} data-layer={LAYER_NAMES[index]} />)}
          <g>
            {edges.map(edge => (
              <line
                key={edge.id}
                x1={edge.from.x} y1={edge.from.y} x2={edge.to.x} y2={edge.to.y}
                className={`${styles.edge} ${edge.desktopOnly ? styles.desktopOnly : ""}`}
                data-lit={path.edges.has(edge.id) ? "true" : undefined}
                style={{ "--w": edge.weight } as CSSProperties}
              />
            ))}
          </g>
          <g>
            {edges.filter(edge => edge.weight > 0.55 || path.edges.has(edge.id)).map(edge => (
              <line
                key={`s-${edge.id}`}
                x1={edge.from.x} y1={edge.from.y} x2={edge.to.x} y2={edge.to.y}
                pathLength={100}
                className={`${styles.signal} ${edge.desktopOnly ? styles.desktopOnly : ""}`}
                data-lit={path.edges.has(edge.id) ? "true" : undefined}
                style={{ "--layer": edge.from.layer, "--w": edge.weight, "--jitter": `${Math.round((1 - edge.weight) * 140)}ms` } as CSSProperties}
              />
            ))}
          </g>
          {layers.map((nodes, layer) => (
            <g key={layer} data-layer={LAYER_NAMES[layer]}>
              {nodes.map(node => {
                const key = `${node.layer}-${node.index}`;
                const lit = path.nodes.has(key) || (layer === 3 && node.index === highlighted);
                return (
                  <g key={key} className={`${styles.node} ${node.desktopOnly ? styles.desktopOnly : ""}`} data-lit={lit ? "true" : undefined} style={{ "--layer": layer } as CSSProperties}>
                    <circle cx={node.x} cy={node.y} r={layer === 0 || layer === 3 ? 13 : 11} className={styles.halo} />
                    <circle cx={node.x} cy={node.y} r={layer === 0 || layer === 3 ? 6.5 : 5.5} className={styles.dot} fill="url(#nnh-node)" />
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
        <ul className={styles.inputs} aria-hidden="true" data-layer="input">
          {INPUTS.map((label, index) => (
            <li key={label} style={{ top: pct(layers[0][index].y, VIEW_H), "--x": pct(VIEW_W - LAYER_X[0], VIEW_W) } as CSSProperties}>{label}</li>
          ))}
        </ul>
        <ul className={styles.outputs} data-layer="output" aria-label="Nos services">
          {OUTPUTS.map((output, index) => (
            <li key={output.id} style={{ top: pct(layers[3][index].y, VIEW_H), "--x": pct(LAYER_X[3], VIEW_W) } as CSSProperties}>
              <Link
                href={`/services/${output.id}`}
                className={styles.output}
                data-active={index === highlighted ? "true" : undefined}
                onMouseEnter={() => setFocused(index)}
                onMouseLeave={release}
                onFocus={() => setFocused(index)}
                onBlur={release}
              >
                {output.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <figcaption id={titleId} className={styles.caption}>
        <span className={styles.flow}>Vos besoins → NEURALIS → nos services</span>
        <span className={styles.legend} aria-hidden="true"><span>Entrée</span><span>Couches cachées</span><span>Sortie</span></span>
      </figcaption>
    </figure>
  );
}
