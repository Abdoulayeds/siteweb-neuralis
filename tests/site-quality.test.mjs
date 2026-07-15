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
  const [layout, manifest, sitemap] = await Promise.all([
    read("src/app/layout.tsx"),
    read("src/app/manifest.ts"),
    read("src/app/sitemap.ts"),
  ]);

  assert.match(layout, /robots:\s*\{/);
  assert.match(layout, /formatDetection:\s*\{/);
  assert.match(layout, /\/opengraph-image/);
  assert.match(layout, /applicationName:\s*"NEURALIS"/);
  assert.match(manifest, /theme_color/);
  assert.match(manifest, /display:\s*"standalone"/);
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
