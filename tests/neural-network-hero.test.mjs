import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const COMPONENT = "src/components/neural-network-hero.tsx";
const STYLES = "src/components/neural-network-hero.module.css";

test("the home hero renders the signature neural network instead of a static image", async () => {
  const page = await read("src/app/page.tsx");

  assert.match(page, /import \{ NeuralNetworkHero \} from "@\/components\/neural-network-hero"/);
  assert.match(page, /<NeuralNetworkHero\s*\/>/);
  assert.doesNotMatch(page, /hero-main-image/);
});

test("the network has an input layer of needs, two hidden layers and an output layer of services", async () => {
  const [source, catalog] = await Promise.all([read(COMPONENT), read("src/lib/service-catalog.ts")]);

  assert.match(source, /"use client"/);
  for (const need of ["Idée", "Données", "Processus"]) assert.match(source, new RegExp(`"${need}"`));
  assert.match(source, /hiddenLayers|HIDDEN_LAYERS/);
  assert.match(source, /\["input", "hidden", "hidden", "output"\]/);
  assert.match(source, /data-layer=\{LAYER_NAMES\[layer\]\}/);
  assert.match(source, /data-layer="output"/);
  for (const id of ["sites-web", "applications", "plateformes", "data", "ia", "formation"]) {
    assert.match(source, new RegExp(`id: "${id}"`));
    assert.match(catalog, new RegExp(`id: "${id}"`), `output ${id} must link to an existing service page`);
  }
  assert.match(source, /href=\{`\/services\/\$\{/);
});

test("decoration is hidden from assistive tech while the figure keeps an accessible summary", async () => {
  const source = await read(COMPONENT);

  assert.match(source, /<figure/);
  assert.match(source, /aria-labelledby=/);
  assert.match(source, /aria-describedby=/);
  assert.match(source, /Vos besoins → NEURALIS → nos services/);
  assert.match(source, /<svg[^>]*aria-hidden="true"/s);
  assert.match(source, /onFocus=/);
  assert.match(source, /onMouseEnter=/);
});

test("animation pauses off-screen, on hidden tabs and respects reduced motion", async () => {
  const [source, styles] = await Promise.all([read(COMPONENT), read(STYLES)]);

  assert.match(source, /IntersectionObserver/);
  assert.match(source, /visibilitychange/);
  assert.match(source, /prefers-reduced-motion/);
  assert.match(source, /data-paused/);
  assert.match(styles, /animation-play-state:\s*paused/);
  assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.match(styles, /stroke-dashoffset/);
  assert.match(styles, /aspect-ratio/);
});

test("mobile layout simplifies the network and uses the real NEURALIS mark", async () => {
  const [source, styles] = await Promise.all([read(COMPONENT), read(STYLES)]);

  assert.match(styles, /@media \(max-width:\s*\d+px\)/);
  assert.match(source, /desktopOnly/);
  assert.match(source, /\/brand\/neuralis-mark\.webp/);
});
