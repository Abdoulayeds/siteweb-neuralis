import { expect, test } from "@playwright/test";

const collections = [
  { route: "/", selector: ".visual-service-card" },
  { route: "/solutions", selector: "#secteurs article.studio-panel" },
  { route: "/offres", selector: "#packs article.studio-panel" },
  { route: "/a-propos", selector: "#methode article.studio-panel" },
];

for (const { route, selector } of collections) {
  test(`${route} gives cards distinct branded surfaces and a hover response`, async ({ page }, testInfo) => {
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(route);
    const cards = page.locator(selector);
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThan(1);

    const styles = await cards.first().evaluate(element => {
      const style = getComputedStyle(element);
      return { background: style.backgroundImage, border: style.borderTopColor, transition: style.transitionDuration };
    });
    expect(styles.background).toContain("gradient");
    expect(styles.border).not.toBe("rgb(220, 231, 236)");
    expect(styles.transition).not.toBe("0s");
    expect(await cards.first().getAttribute("data-tone")).not.toBe(await cards.nth(1).getAttribute("data-tone"));

    if (testInfo.project.name === "desktop") {
      await cards.first().hover();
      await expect.poll(() => cards.first().evaluate(element => getComputedStyle(element).transform)).not.toBe("none");
    }
  });
}

test("contact panels use distinct readable surfaces", async ({ page }) => {
  await page.goto("/contact");
  const info = page.locator("#formulaire aside");
  const formOrFallback = page.locator("#formulaire form, #formulaire .contact-fallback-card").first();
  await expect(info).toBeVisible();
  await expect(formOrFallback).toBeVisible();
  const infoStyle = await info.evaluate(element => ({ background: getComputedStyle(element).backgroundImage, heading: getComputedStyle(element.querySelector("h2")!).color }));
  expect(infoStyle.background).toContain("gradient");
  expect(infoStyle.heading).toBe("rgb(255, 255, 255)");
  expect(await formOrFallback.evaluate(element => getComputedStyle(element).backgroundImage)).toContain("gradient");
});

test("the homepage displays an endlessly rotating neural head with reduced-motion support", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const head = page.getByTestId("neural-head");
  await expect(head).toBeVisible();
  await expect(head.getByRole("img", { name: /tête neuronale/i })).toBeVisible();
  const animated = await head.locator("[data-testid='neural-head-rotation']").evaluate(element => ({
    duration: getComputedStyle(element).animationDuration,
    iterations: getComputedStyle(element).animationIterationCount,
  }));
  expect(animated.duration).not.toBe("0s");
  expect(animated.iterations).toBe("infinite");
  await head.screenshot({ path: testInfo.outputPath("neural-head.png") });

  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(await head.locator("[data-testid='neural-head-rotation']").evaluate(element => getComputedStyle(element).animationIterationCount)).not.toBe("infinite");
  expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)).toBe(false);
});
