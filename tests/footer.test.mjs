import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

const loadFooter = () =>
  Promise.all([
    read("src/components/footer.tsx"),
    read("src/components/footer.module.css"),
    read("src/components/footer-network.tsx"),
  ]);

test("footer uses a dark tech surface from its own CSS module", async () => {
  const [footer, css] = await loadFooter();
  assert.match(footer, /import styles from "\.\/footer\.module\.css"/);
  assert.match(footer, /<footer[^>]*className=\{styles\.footer\}/);
  assert.match(css, /\.footer\s*\{[^}]*background[^;]*#05080f/is);
  assert.match(css, /\.footer\s*\{[^}]*color:\s*#(?:e2e8f0|f8fafc|fff)/is);
  assert.doesNotMatch(footer, /bg-\[#dfecef\]/);
});

test("footer opens with a closing CTA band to /contact and WhatsApp", async () => {
  const [footer] = await loadFooter();
  assert.match(footer, /Parlons de votre projet/);
  assert.match(footer, /href="\/contact"/);
  assert.match(footer, /businessInfo\.whatsappUrl/);
  const ctaIndex = footer.indexOf('href="/contact"');
  const columnsIndex = footer.indexOf('aria-label="Navigation de pied de page"');
  assert.ok(ctaIndex > 0 && ctaIndex < columnsIndex, "CTA band must come before the link columns");
});

test("neural network decoration is decorative, lightweight and motion-safe", async () => {
  const [footer, css, network] = await loadFooter();
  assert.match(footer, /<FooterNetwork\s*\/>/);
  assert.match(network, /aria-hidden="true"/);
  assert.match(network, /<svg/);
  assert.doesNotMatch(network, /<canvas|requestAnimationFrame/);
  assert.match(network, /IntersectionObserver/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*animation:\s*none/);
  assert.match(css, /stroke-dashoffset/);
  assert.match(css, /data-paused|\.paused/);
});

test("footer keeps visible focus rings and 44px touch targets", async () => {
  const [, css] = await loadFooter();
  assert.match(css, /:focus-visible\s*\{[^}]*outline:\s*2px solid/is);
  assert.match(css, /min-height:\s*44px|height:\s*2\.75rem|height:\s*44px/);
});

test("footer keeps all existing content, links and labels", async () => {
  const [footer] = await loadFooter();
  for (const expected of [
    "<Logo />",
    "Bamako, Mali",
    "businessInfo.socials.map",
    "<SocialIcon",
    "(nouvel onglet)",
    'aria-label="Navigation de pied de page"',
    'aria-label="Nos expertises"',
    'aria-label="Expertises locales"',
    '"À propos"',
    "navItems.map",
    "expertiseLinks.map",
    "/services/${expertise.id}",
    "<address",
    "businessInfo.googleMapsUrl",
    "mailto:${businessInfo.email}",
    "tel:${businessInfo.phoneInternational}",
    "WhatsApp Business",
    "<details",
    "Expertises au Mali",
    "seoLandingPages.map",
    '.replace("Creation", "Création")',
    '.replace("Developpement", "Développement")',
    '.replace("ecoles", "écoles")',
    "© 2026 NEURALIS",
    "Le numérique, au service de vos ambitions.",
  ]) {
    assert.ok(footer.includes(expected), `footer should contain ${expected}`);
  }
  assert.doesNotMatch(footer, /Camera|Music2|BriefcaseBusiness/);
});

test("footer offers an accessible back-to-top link", async () => {
  const [footer] = await loadFooter();
  assert.match(footer, /href="#top"|href="#main-content"|href="#"/);
  assert.match(footer, /Retour en haut/);
});
