import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const reducedMotion = /@media \(prefers-reduced-motion:\s*reduce\)/;

test("service cards reveal a decorative neural circuit overlay on hover and focus", async () => {
  const [card, styles] = await Promise.all([
    read("src/components/visual-service-card.tsx"),
    read("src/components/visual-service-card.module.css"),
  ]);

  assert.match(card, /import styles from "\.\/visual-service-card\.module\.css"/);
  assert.match(card, /className=\{styles\.circuit\}[^>]*aria-hidden="true"/);
  assert.match(card, /data-testid="card-circuit"/);
  assert.match(card, /styles\.node/, "number badge is styled like a circuit node");
  assert.match(card, /alt=\{service\.imageAlt\}/);

  assert.match(styles, /stroke-dashoffset/);
  assert.match(styles, /:focus-within/);
  assert.match(styles, /\.scan/);
  assert.match(styles, reducedMotion);
  assert.doesNotMatch(styles, /transition:[^;]*\b(width|height|top|left|margin|padding)\b/);
});

test("the neural head carries travelling data signals and stays reduced-motion safe", async () => {
  const [visual, styles] = await Promise.all([
    read("src/components/tech-visual.tsx"),
    read("src/components/tech-visual.module.css"),
  ]);

  assert.match(visual, /styles\.headSignal/);
  assert.match(styles, /\.headSignal[^{]*\{[^}]*stroke-dasharray/s);
  assert.match(styles, /@keyframes signalTravel[^{]*\{[^}]*stroke-dashoffset/s);
  assert.match(styles, reducedMotion);
});

test("inner page heroes show a discreet decorative neural constellation", async () => {
  const [hero, styles] = await Promise.all([
    read("src/components/page-hero.tsx"),
    read("src/components/page-hero.module.css"),
  ]);

  assert.match(hero, /import styles from "\.\/page-hero\.module\.css"/);
  assert.match(hero, /data-testid="hero-constellation"/);
  assert.match(hero, /<svg[^>]*aria-hidden="true"/);
  assert.match(hero, /className=\{`absolute /, "decoration stays out of the document flow");
  assert.match(styles, /@keyframes/);
  assert.match(styles, reducedMotion);
});

test("technical service illustrations include a gentle, motion-safe neural pulse layer", async () => {
  const names = ["sites-web", "applications", "plateformes", "data", "ia", "campus", "mobility"];
  for (const name of names) {
    const svg = await read(`public/images/services/${name}-technical.svg`);
    assert.equal((svg.match(/id="neural-pulse"/g) ?? []).length, 1, name);
    assert.match(svg, /@keyframes/, name);
    assert.match(svg, reducedMotion, name);
    assert.match(svg, /Illustration conceptuelle/, name);
    assert.doesNotMatch(svg, /<script|<foreignObject|href=["']https?:/, name);
  }
});
