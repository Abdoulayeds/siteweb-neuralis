import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("uses reusable official social brand marks in every navigation surface", async () => {
  const [icons, contact, footer] = await Promise.all([
    read("src/components/social-icon.tsx"),
    read("src/app/contact/page.tsx"),
    read("src/components/footer.tsx"),
  ]);

  for (const brand of ["Instagram", "LinkedIn", "TikTok", "WhatsApp"]) {
    assert.match(icons, new RegExp(`${brand}:`));
  }
  assert.match(icons, /<svg/);
  assert.doesNotMatch(contact, /Camera|Music2|BriefcaseBusiness/);
  assert.doesNotMatch(footer, /Camera|Music2|BriefcaseBusiness/);
  assert.match(contact, /SocialIcon/);
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

test("keeps absolute hero decorations out of the document flow", async () => {
  const styles = await read("src/app/globals.css");

  assert.doesNotMatch(styles, /main > section > \*\s*\{[^}]*position:\s*relative/s);
  assert.match(styles, /main > section > :not\(\.absolute\)/);
});

test("applies the official NEURALIS palette and a vector brand mark", async () => {
  const [styles, logo] = await Promise.all([
    read("src/app/globals.css"),
    read("src/components/logo.tsx"),
  ]);

  assert.match(styles, /--neuralis-navy:\s*#0f172a/i);
  assert.match(styles, /--neuralis-cyan:\s*#06b6d4/i);
  assert.match(logo, /<svg[\s>]/);
  assert.match(logo, /aria-label="Retour a l'accueil NEURALIS"/);
});

test("uses the same official mark in install and search metadata", async () => {
  const [manifest, layout] = await Promise.all([
    read("src/app/manifest.ts"),
    read("src/app/layout.tsx"),
  ]);

  assert.match(manifest, /background_color:\s*"#ffffff"/i);
  assert.match(manifest, /theme_color:\s*"#0f172a"/i);
  assert.match(manifest, /src:\s*"\/neuralis-mark\.svg"/);
  assert.match(layout, /logo:\s*`\$\{businessInfo\.siteUrl\}\/neuralis-mark\.svg`/);
});
