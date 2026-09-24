import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined, DatabaseZap, ScanSearch } from "lucide-react";
import styles from "./tech-visual.module.css";

const steps = [
  { title: "Données", detail: "Rassembler l’essentiel", Icon: DatabaseZap },
  { title: "Analyse", detail: "Comprendre les signaux", Icon: ScanSearch },
  { title: "Décisions", detail: "Agir avec confiance", Icon: ChartNoAxesCombined },
];

const headOutline = "M138 27 C188 21 231 55 247 105 C254 127 251 147 265 166 L280 187 C286 196 282 204 273 208 L252 215 L249 252 C246 277 226 291 199 296 L191 334 L100 334 C108 294 101 271 80 242 C60 215 52 187 57 148 C63 81 89 41 138 27 Z";
const neuralNodes = Array.from({ length: 72 }, (_, index) => ({
  x: 65 + (index % 9) * 24 + Math.sin(index * 2.3) * 7,
  y: 39 + Math.floor(index / 9) * 37 + Math.cos(index * 1.7) * 8,
}));
const neuralEdges = neuralNodes.flatMap((node, index) =>
  neuralNodes.slice(index + 1).flatMap((target, offset) =>
    Math.hypot(node.x - target.x, node.y - target.y) < 44
      ? [{ from: index, to: index + offset + 1, node, target }]
      : [],
  ),
);

function NeuralHead() {
  return (
    <div className={styles.headStage} data-testid="neural-head">
      <span className={styles.headStageLabel}>RÉSEAU VIVANT / 01</span>
      <span className={styles.headRing} aria-hidden="true" />
      <span className={styles.headRingSecondary} aria-hidden="true" />
      <div className={styles.headRotation} data-testid="neural-head-rotation">
        <svg viewBox="0 0 320 360" role="img" aria-label="Tête neuronale animée, reliée par un réseau de données" className={styles.headSvg}>
          <defs>
            <clipPath id="neural-head-clip"><path d={headOutline} /></clipPath>
            <linearGradient id="neural-head-fill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#163d57" /><stop offset=".56" stopColor="#0d263d" /><stop offset="1" stopColor="#071c32" /></linearGradient>
            <linearGradient id="neural-head-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a2f5fb" /><stop offset=".5" stopColor="#39c8df" /><stop offset="1" stopColor="#669ff3" /></linearGradient>
          </defs>
          <path d={headOutline} fill="url(#neural-head-fill)" stroke="#67ddeb" strokeWidth="2.5" />
          <g clipPath="url(#neural-head-clip)" aria-hidden="true">
            <path d="M60 90 C125 40 184 70 253 121 M57 176 C134 115 203 149 264 186 M73 250 C130 210 209 234 246 271" fill="none" stroke="#6cddeb" strokeWidth="16" opacity=".045" />
            {neuralEdges.map(({ from, to, node, target }) => <line key={`${from}-${to}`} x1={node.x} y1={node.y} x2={target.x} y2={target.y} stroke="url(#neural-head-line)" strokeWidth=".9" opacity=".42" />)}
            {neuralNodes.map((node, index) => <circle key={index} cx={node.x} cy={node.y} r={index % 7 === 0 ? 2.9 : 1.6} fill={index % 7 === 0 ? "#b5f7fb" : "#57d9eb"} className={styles.headNode} style={{ animationDelay: `${-(index % 9) * 0.42}s` }} />)}
          </g>
          <path d="M138 27 C188 21 231 55 247 105" fill="none" stroke="#d8fbff" strokeWidth="3" opacity=".42" />
          <path d="M251 221 C241 223 231 221 224 215" fill="none" stroke="#9df2f9" strokeWidth="2" opacity=".65" />
        </svg>
      </div>
      <span className={styles.headStageStatus}><span /> SIGNAL ACTIF</span>
    </div>
  );
}

export function TechVisual() {
  return (
    <section id="tech-lab" className={styles.section} aria-label="La technologie au service de vos décisions">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span className={styles.eyebrowLine} /> L’IA & la data, concrètement</p>
          <h2>Du signal à la <em>bonne décision.</em></h2>
          <p className={styles.intro}>La technologie est utile quand elle éclaire une vraie question. Nous relions vos informations, vos usages et vos équipes pour imaginer des outils plus intelligents.</p>
          <Link href="/services#organiser" className={styles.link}>Découvrir nos solutions data et IA <ArrowUpRight aria-hidden="true" size={18} /></Link>
        </div>

        <div className={styles.scene} data-testid="tech-visual" aria-label="Illustration du parcours de la donnée, de l’analyse à la décision">
          <div className={styles.sceneHeader}><span className={styles.live}><span className={styles.liveDot} /> FLUX D’IDÉES</span><span>NEURALIS / LAB</span></div>
          <NeuralHead />
          <div className={styles.pipeline}>
            {steps.map(({ title, detail, Icon }, index) => (
              <div className={styles.stepGroup} key={title}>
                <div className={styles.step}>
                  <span className={styles.icon}><Icon aria-hidden="true" size={21} strokeWidth={1.8} /></span>
                  <span className={styles.stepIndex}>0{index + 1}</span>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </div>
                {index < steps.length - 1 && <div className={styles.connector} aria-hidden="true"><span className={styles.connectorLine} /><span className={styles.pulse} data-testid="data-flow-pulse" /></div>}
              </div>
            ))}
          </div>
          <div className={styles.bottom} aria-hidden="true">
            <div className={styles.bars}><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <div className={styles.bottomLabel}><span>Observer</span><span>Comprendre</span><span>Avancer</span></div>
          </div>
          <p className={styles.caption}>Une vision du parcours de la donnée, pas un tableau de bord client.</p>
        </div>
      </div>
    </section>
  );
}
