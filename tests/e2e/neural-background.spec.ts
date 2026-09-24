import { expect, test } from "@playwright/test";

test.use({ reducedMotion: "no-preference" });

test("the neural backdrop stays static on touch devices", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "This behavior is specific to touch devices.");

  await page.addInitScript(() => {
    const originalClear = CanvasRenderingContext2D.prototype.clearRect;
    const metrics = window as typeof window & { __neuralDrawCount?: number };
    metrics.__neuralDrawCount = 0;

    CanvasRenderingContext2D.prototype.clearRect = function (x, y, width, height) {
      if (this.canvas.classList.contains("neural-background")) {
        metrics.__neuralDrawCount = (metrics.__neuralDrawCount ?? 0) + 1;
      }
      originalClear.call(this, x, y, width, height);
    };
  });

  await page.goto("/");
  await expect(page.locator("canvas.neural-background")).toBeVisible();
  await expect.poll(() => page.evaluate(() => (window as typeof window & { __neuralDrawCount?: number }).__neuralDrawCount ?? 0)).toBeGreaterThan(0);

  const initialDraws = await page.evaluate(() => (window as typeof window & { __neuralDrawCount?: number }).__neuralDrawCount ?? 0);
  await page.waitForTimeout(350);
  const laterDraws = await page.evaluate(() => (window as typeof window & { __neuralDrawCount?: number }).__neuralDrawCount ?? 0);
  expect(laterDraws).toBe(initialDraws);
});
