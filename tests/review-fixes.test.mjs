import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("decorative animations pause while their section is off-screen", async () => {
  const [pauser, pageHero, techVisual, styles] = await Promise.all([
    read("src/components/pause-when-offscreen.tsx"),
    read("src/components/page-hero.tsx"),
    read("src/components/tech-visual.tsx"),
    read("src/app/globals.css"),
  ]);

  assert.match(pauser, /IntersectionObserver/);
  assert.match(pauser, /data-paused/);
  assert.match(pauser, /disconnect\(\)/);
  assert.match(pageHero, /<PauseWhenOffscreen/);
  assert.match(techVisual, /<PauseWhenOffscreen/);
  assert.match(styles, /\[data-paused="true"\][^{]*\{[^}]*animation-play-state:\s*paused/);
});

test("the logo announces a correctly accented label and hides the styled wordmark letters", async () => {
  const logo = await read("src/components/logo.tsx");

  assert.match(logo, /aria-label="Retour à l'accueil NEURALIS"/);
  assert.match(logo, /className=\{styles\.wordmark\} aria-hidden="true"/);
});

test("hero service links keep a 24px minimum target and readable text on phones", async () => {
  const styles = await read("src/components/neural-network-hero.module.css");
  const mobile = styles.slice(styles.indexOf("@media (max-width: 640px)"));

  assert.match(mobile, /\.outputs > li \{ font-size: 0\.7rem; \}/);
  assert.match(mobile, /\.output \{[^}]*min-width: 1\.5rem/);
});
