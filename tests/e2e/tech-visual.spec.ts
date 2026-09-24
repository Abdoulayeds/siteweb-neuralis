import { expect, test } from "@playwright/test";

test("l'accueil montre un parcours de données lisible et un appel à l'action", async ({ page }) => {
  await page.goto("/");

  const section = page.getByRole("region", { name: "La technologie au service de vos décisions" });
  await expect(section).toBeVisible();
  await expect(section.getByText("Données", { exact: true })).toBeVisible();
  await expect(section.getByText("Analyse", { exact: true })).toBeVisible();
  await expect(section.getByText("Décisions", { exact: true })).toBeVisible();
  await expect(section.getByRole("link", { name: /Découvrir nos solutions data et IA/i })).toHaveAttribute("href", "/services#organiser");
  await expect(section.locator("[data-testid='tech-visual']")).toBeVisible();
});

test("la scène data respecte la réduction des mouvements et ne déborde pas", async ({ page }) => {
  await page.goto("/");
  const scene = page.locator("[data-testid='tech-visual']");
  await expect(scene).toBeVisible();

  const motion = await scene.locator("[data-testid='data-flow-pulse']").first().evaluate(element => getComputedStyle(element).animationDuration);
  expect(motion).toBe("0s");

  await page.emulateMedia({ reducedMotion: "no-preference" });
  const activeMotion = await scene.locator("[data-testid='data-flow-pulse']").first().evaluate(element => getComputedStyle(element).animationDuration);
  expect(activeMotion).not.toBe("0s");

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(overflow).toBe(false);
});
