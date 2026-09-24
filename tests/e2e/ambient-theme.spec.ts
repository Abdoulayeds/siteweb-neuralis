import { expect, test } from "@playwright/test";

test("the neural canvas remains visible behind a dark, translucent homepage hero", async ({ page }) => {
  await page.goto("/");

  const appearance = await page.locator(".studio-hero").evaluate(hero => {
    const canvas = document.querySelector<HTMLCanvasElement>(".neural-background")!;
    const heading = hero.querySelector("h1")!;
    const heroStyle = getComputedStyle(hero);

    return {
      pageBackground: getComputedStyle(document.documentElement).backgroundColor,
      heroBackground: heroStyle.backgroundImage,
      headingColor: getComputedStyle(heading).color,
      canvasOpacity: Number(getComputedStyle(canvas).opacity),
      canvasBehindContent: Number(getComputedStyle(canvas).zIndex) < Number(getComputedStyle(document.querySelector("main")!).zIndex),
      canvasDrawn: [...canvas.getContext("2d")!.getImageData(0, 0, canvas.width, canvas.height).data]
        .some((channel, index) => index % 4 === 3 && channel > 0),
    };
  });

  expect(appearance.pageBackground).toBe("rgb(15, 23, 42)");
  expect(appearance.heroBackground).toMatch(/rgba\(15, 23, 42, 0\.[0-9]+\)/);
  expect(appearance.headingColor).toBe("rgb(255, 255, 255)");
  expect(appearance.canvasOpacity).toBeGreaterThanOrEqual(0.75);
  expect(appearance.canvasBehindContent).toBe(true);
  expect(appearance.canvasDrawn).toBe(true);

  const showcase = page.locator(".hero-showcase");
  await expect(showcase).toBeVisible();
  expect(await showcase.evaluate(element => getComputedStyle(element).backgroundColor)).toBe("rgb(255, 255, 255)");
});

test("dark data sections keep their titles readable and service cards light", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#expertises");

  const appearance = await section.evaluate(element => ({
    background: getComputedStyle(element).backgroundImage,
    title: getComputedStyle(element.querySelector("h2")!).color,
    copy: getComputedStyle(element.querySelector(".studio-copy")!).color,
    card: getComputedStyle(element.querySelector("article.visual-service-card")!).backgroundColor,
  }));

  expect(appearance.background).toMatch(/rgba\(15, 23, 42, 0\.[0-9]+\)/);
  expect(appearance.title).toBe("rgb(255, 255, 255)");
  expect(appearance.copy).toBe("rgb(214, 232, 239)");
  expect(appearance.card).toBe("rgb(255, 255, 255)");
});

test("secondary page heroes preserve the same readable network treatment", async ({ page }) => {
  await page.goto("/services");
  const hero = page.locator(".page-hero");

  const appearance = await hero.evaluate(element => ({
    background: getComputedStyle(element).backgroundImage,
    title: getComputedStyle(element.querySelector("h1")!).color,
    copy: getComputedStyle(element.querySelector(".studio-copy")!).color,
  }));

  expect(appearance.background).toMatch(/rgba\(15, 23, 42, 0\.[0-9]+\)/);
  expect(appearance.title).toBe("rgb(255, 255, 255)");
  expect(appearance.copy).toBe("rgb(214, 232, 239)");
});
