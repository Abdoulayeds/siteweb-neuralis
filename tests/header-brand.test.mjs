import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("logo renders the real NEURALIS mark image with an accessible wordmark", async () => {
  const [logo, logoStyles] = await Promise.all([
    read("src/components/logo.tsx"),
    read("src/components/logo.module.css"),
  ]);

  assert.match(logo, /from "next\/image"/);
  assert.match(logo, /src="\/brand\/neuralis-mark\.(png|webp)"/);
  assert.match(logo, /alt=""/, "the mark is decorative, the link carries the name");
  assert.match(logo, /aria-label="Retour à l'accueil NEURALIS"/);
  assert.doesNotMatch(logo, /<svg[\s>]/, "the old hand-drawn SVG mark is gone");
  assert.match(
    logo,
    /Neural<span className=\{styles\.i\}>i<\/span>s/,
    "wordmark stays real text so screen readers and search read Neuralis",
  );
  assert.match(logo, /aria-hidden="true"/, "the image mark is hidden from assistive tech");
  assert.match(logoStyles, /\.i\s*\{[^}]*#22d3ee/s, "cyan dot on the i");
  assert.match(logoStyles, /background-clip:\s*text/);
  assert.match(logoStyles, /@media \(prefers-reduced-motion:\s*reduce\)/);
});

test("header is a dark glass bar that keeps its accessible mobile menu", async () => {
  const [header, styles] = await Promise.all([
    read("src/components/header.tsx"),
    read("src/components/header.module.css"),
  ]);

  assert.match(header, /from "\.\/header\.module\.css"/);
  assert.match(styles, /backdrop-filter:\s*blur/);
  assert.match(styles, /#05080f|#0f172a|rgba\(\s*5,\s*8,\s*15/i);
  assert.match(header, /aria-expanded=\{open\}/);
  assert.match(header, /aria-controls=\{menuId\}/);
  assert.match(header, /event\.key === "Escape"/);
  assert.match(header, /aria-current=\{isActive\(item\.href\) \? "page" : undefined\}/);
  assert.match(header, /mobile-page-tabs/);
  assert.match(header, /navItems/);
  assert.match(header, /Navigation principale/);
  assert.match(header, /Navigation mobile/);
});

test("header motion is CSS-only and fully disabled for reduced motion", async () => {
  const styles = await read("src/components/header.module.css");

  assert.match(styles, /@keyframes/);
  assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /min-height:\s*(2\.75rem|44px)/, "touch targets are at least 44px");
});
