import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("uses reusable official social brand marks in every navigation surface", async () => {
  const [icons, header, footer] = await Promise.all([
    read("src/components/social-icon.tsx"),
    read("src/components/header.tsx"),
    read("src/components/footer.tsx"),
  ]);

  for (const brand of ["Instagram", "LinkedIn", "TikTok", "WhatsApp"]) {
    assert.match(icons, new RegExp(`${brand}:`));
  }
  assert.match(icons, /<svg/);
  assert.doesNotMatch(header, /Camera|Music2|BriefcaseBusiness/);
  assert.doesNotMatch(footer, /Camera|Music2|BriefcaseBusiness/);
  assert.match(header, /SocialIcon/);
  assert.match(footer, /SocialIcon/);
});

test("publishes complete share, indexing, and web-app metadata", async () => {
  const [layout, manifest, openGraphImage, sitemap] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/app/manifest.ts"),
    read("src/app/opengraph-image.tsx"),
    read("src/app/sitemap.ts"),
  ]);

  assert.match(layout, /robots:\s*\{/);
  assert.match(layout, /formatDetection:\s*\{/);
  assert.match(layout, /\/opengraph-image/);
  assert.doesNotMatch(layout, /opengraph-image\.png/);
  assert.match(layout, /applicationName:\s*"NEURALIS"/);
  assert.match(manifest, /theme_color/);
  assert.match(manifest, /display:\s*"standalone"/);
  assert.match(manifest, /export const dynamic = "force-static"/);
  assert.match(openGraphImage, /export const dynamic = "force-static"/);
  assert.match(sitemap, /businessInfo\.siteUrl/);
});

test("provides accessible shortcuts and persistent mobile contact", async () => {
  const [layout, contactRail, styles] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/components/contact-rail.tsx"),
    read("src/app/globals.css"),
  ]);

  assert.match(layout, /href="#contenu"/);
  assert.match(layout, /id="contenu"/);
  assert.match(layout, /<ContactRail/);
  assert.match(contactRail, /SocialIcon[^>]+name="WhatsApp"/s);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /\.skip-link/);
});

test("homepage hero states a concrete outcome and avoids fabricated progress metrics", async () => {
  const [homepage, visual] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/components/tech-visual.tsx"),
  ]);

  assert.match(homepage, /De l.idee au lancement/);
  assert.match(homepage, /Bamako/);
  assert.doesNotMatch(visual, /Transformation digitale[\s\S]*%/);
  assert.match(visual, /Diagnostic/);
  assert.match(visual, /Livraison/);
  assert.match(visual, /Accompagnement/);
});

test("keeps every legacy light surface readable inside the dark premium theme", async () => {
  const [layout, styles, landing] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/app/globals.css"),
    read("src/app/[landing]/page.tsx"),
  ]);

  assert.match(layout, /className="theme-dark/);
  assert.match(styles, /--surface-base:/);
  assert.match(styles, /--surface-raised:/);
  assert.match(styles, /\.theme-dark main \.bg-white/);
  assert.match(styles, /\.theme-dark main \.text-slate-950/);
  assert.match(styles, /\.theme-dark main \.text-white/);
  assert.match(styles, /\.theme-dark main input/);
  assert.match(landing, /bg-white[\s\S]*text-white/);
});

test("renders a performant and accessible neural network background", async () => {
  const [layout, neuralBackground, styles] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/components/neural-background.tsx"),
    read("src/app/globals.css"),
  ]);

  assert.match(layout, /<NeuralBackground\s*\/>/);
  assert.match(neuralBackground, /<canvas/);
  assert.match(neuralBackground, /aria-hidden="true"/);
  assert.match(neuralBackground, /prefers-reduced-motion/);
  assert.match(neuralBackground, /visibilitychange/);
  assert.match(neuralBackground, /pointermove/);
  assert.match(neuralBackground, /Math\.min\(window\.devicePixelRatio[^,]*,\s*1\.5\)/);
  assert.match(neuralBackground, /FRAME_INTERVAL\s*=\s*1000\s*\/\s*30/);
  assert.match(styles, /\.neural-background/);
});

test("adds progressive page motion while preserving reduced-motion safety", async () => {
  const styles = await read("src/app/globals.css");

  assert.match(styles, /@supports \(animation-timeline:\s*view\(\)\)/);
  assert.match(styles, /animation-timeline:\s*view\(\)/);
  assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)/);
});

test("keeps the guided homepage journey dark without white-on-white fallbacks", async () => {
  const [homepage, accordion] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/components/accordion-list.tsx"),
  ]);

  assert.doesNotMatch(homepage, /border-cyan-300\/20 bg-white p-6 text-slate-950/);
  assert.doesNotMatch(accordion, /border-slate-200 bg-white/);
  assert.doesNotMatch(accordion, /font-semibold text-slate-950/);
  assert.match(homepage, /bg-slate-900\/90/);
  assert.match(accordion, /bg-slate-950\/40/);
});
