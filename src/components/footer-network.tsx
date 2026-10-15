"use client";

import { useEffect, useRef } from "react";
import styles from "./footer.module.css";

type Point = readonly [number, number];

const nodes: readonly Point[] = [
  [40, 60], [150, 130], [260, 50], [330, 170], [440, 90], [540, 190], [600, 40], [700, 120],
  [800, 200], [860, 60], [960, 140], [1060, 50], [1150, 160], [90, 210], [1010, 220], [380, 20],
];

const edges: readonly Point[] = [
  [0, 1], [0, 2], [1, 2], [1, 3], [1, 13], [2, 4], [2, 15], [3, 4], [3, 5], [4, 6], [4, 7], [15, 6],
  [5, 7], [6, 7], [6, 9], [7, 8], [7, 9], [8, 10], [9, 10], [9, 11], [10, 11], [10, 12], [11, 12],
  [10, 14], [12, 14], [13, 3], [8, 14], [5, 8],
];

/** Signal routes travel along existing edges so pulses look like data moving through the network. */
const routes: readonly (readonly number[])[] = [
  [0, 1, 3, 5, 8, 14],
  [2, 4, 7, 9, 11],
  [13, 3, 4, 6, 9, 10, 12],
  [15, 6, 7, 8, 10],
];

const toPath = (route: readonly number[]) =>
  route.map((index, step) => `${step === 0 ? "M" : "L"}${nodes[index][0]} ${nodes[index][1]}`).join(" ");

/** Decorative neural network drawn in SVG; animation pauses while the footer is off-screen. */
export function FooterNetwork() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      svg.setAttribute("data-paused", entry.isIntersecting ? "false" : "true");
    });
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={styles.network}
      viewBox="0 0 1200 240"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      data-paused="true"
    >
      <defs>
        <linearGradient id="footer-network-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.1" />
          <stop offset="0.5" stopColor="#22d3ee" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0284c7" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g className={styles.edges} stroke="url(#footer-network-line)">
        {edges.map(([from, to]) => (
          <line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} />
        ))}
      </g>
      <g className={styles.signals}>
        {routes.map((route, index) => (
          <path key={route.join("-")} d={toPath(route)} pathLength={100} style={{ animationDelay: `${index * -2.2}s` }} />
        ))}
      </g>
      <g className={styles.nodes}>
        {nodes.map(([x, y], index) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={index % 3 === 0 ? 4 : 3} style={{ animationDelay: `${(index % 5) * -0.9}s` }} />
        ))}
      </g>
    </svg>
  );
}
