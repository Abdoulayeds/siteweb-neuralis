import Link from "next/link";
import { ArrowUpRight, ChartNoAxesCombined, DatabaseZap, ScanSearch } from "lucide-react";
import styles from "./tech-visual.module.css";

const steps = [
  { title: "Données", detail: "Rassembler l’essentiel", Icon: DatabaseZap },
  { title: "Analyse", detail: "Comprendre les signaux", Icon: ScanSearch },
  { title: "Décisions", detail: "Agir avec confiance", Icon: ChartNoAxesCombined },
];

export function TechVisual() {
  return (
    <section className={styles.section} aria-label="La technologie au service de vos décisions">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span className={styles.eyebrowLine} /> L’IA & la data, concrètement</p>
          <h2>Du signal à la <em>bonne décision.</em></h2>
          <p className={styles.intro}>La technologie est utile quand elle éclaire une vraie question. Nous relions vos informations, vos usages et vos équipes pour imaginer des outils plus intelligents.</p>
          <Link href="/services#organiser" className={styles.link}>Découvrir nos solutions data et IA <ArrowUpRight aria-hidden="true" size={18} /></Link>
        </div>

        <div className={styles.scene} data-testid="tech-visual" aria-label="Illustration du parcours de la donnée, de l’analyse à la décision">
          <div className={styles.sceneHeader}><span className={styles.live}><span className={styles.liveDot} /> FLUX D’IDÉES</span><span>NEURALIS / LAB</span></div>
          <div className={styles.orbit} aria-hidden="true"><span /><span /><span /><span /></div>
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
