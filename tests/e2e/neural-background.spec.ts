import { expect, test } from "@playwright/test";

test.use({ reducedMotion: "no-preference" });

test("moving the mouse lights up a distinct neural cursor halo", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The cursor halo requires a fine pointer.");

  await page.addInitScript(() => {
    const originalArc = CanvasRenderingContext2D.prototype.arc;
    const metrics = window as typeof window & { __neuralCursorHaloCount?: number };
    metrics.__neuralCursorHaloCount = 0;

    CanvasRenderingContext2D.prototype.arc = function (x, y, radius, startAngle, endAngle, counterclockwise) {
      if (this.canvas.classList.contains("neural-background") && radius >= 12 && radius <= 36) {
        metrics.__neuralCursorHaloCount = (metrics.__neuralCursorHaloCount ?? 0) + 1;
      }
      return originalArc.call(this, x, y, radius, startAngle, endAngle, counterclockwise);
    };
  });

  await page.goto("/");
  await expect.poll(async () => {
    // Hydration can finish after navigation under parallel browser load; keep
    // sending the pointer event until the canvas listener is ready.
    await page.mouse.move(300 + Math.random() * 4, 500);
    return page.evaluate(() => (window as typeof window & { __neuralCursorHaloCount?: number }).__neuralCursorHaloCount ?? 0);
  }, { timeout: 15000 }).toBeGreaterThan(0);
});

test("reduced motion keeps the neural backdrop still on desktop", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The desktop behavior is covered here.");
  await page.emulateMedia({ reducedMotion: "reduce" });

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
  await expect.poll(() => page.evaluate(() => (window as typeof window & { __neuralDrawCount?: number }).__neuralDrawCount ?? 0)).toBeGreaterThan(0);
  const initialDraws = await page.evaluate(() => (window as typeof window & { __neuralDrawCount?: number }).__neuralDrawCount ?? 0);
  await page.mouse.move(300, 500);
  await page.waitForTimeout(350);
  const laterDraws = await page.evaluate(() => (window as typeof window & { __neuralDrawCount?: number }).__neuralDrawCount ?? 0);
  expect(laterDraws).toBe(initialDraws);
});

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
