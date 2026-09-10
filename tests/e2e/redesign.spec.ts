import { test, expect } from "@playwright/test";
import { serviceCatalog } from "../../src/lib/service-catalog";
import { seoLandingPages } from "../../src/lib/seo-landing-pages";
import { businessInfo } from "../../src/lib/business-info";

const pages = ["/", "/services", "/solutions", "/offres", "/portfolio", "/a-propos", "/contact", ...seoLandingPages.map(page => `/${page.slug}`), ...serviceCatalog.map(service => `/services/${service.id}`)];

for (const route of pages) {
  test(`page ${route} is readable and navigable`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("main h1")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    const canonical = new URL((await page.locator('link[rel="canonical"]').getAttribute("href"))!);
    expect(canonical.origin).toBe("https://neuralis-mali.com");
    expect(canonical.pathname).toBe(route);
    const brokenImages = await page.locator("main img:visible").evaluateAll(async images => {
      const broken: string[] = [];
      await Promise.all(images.map(async image => {
        const img = image as HTMLImageElement;
        img.loading = "eager";
        try { await img.decode(); } catch { broken.push(img.src); }
      }));
      return broken;
    });
    expect(brokenImages).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("all service details open, trap focus and close without losing position", async ({ page }) => {
  await page.goto("/services");
  for (const service of serviceCatalog) {
    const card = page.locator(`article#${service.id}`);
    const trigger = card.getByRole("button", { name: "En savoir plus", exact: true });
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: service.title, exact: true });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("Ce que nous construisons avec vous")).toBeVisible();
    expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
    for (let n = 0; n < 8; n++) await page.keyboard.press("Tab");
    expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
    expect(await dialog.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
  }
});

test("detail links reach standalone pages and restore scrolling", async ({ page }) => {
  await page.goto("/services");
  await page.locator("article#sites-web").getByRole("button", { name: "En savoir plus" }).click();
  await page.getByRole("dialog").getByRole("link", { name: "Ouvrir la fiche complète" }).click();
  await expect(page).toHaveURL(/\/services\/sites-web$/);
  await expect(page.locator("main h1")).toHaveText("Sites web professionnels");
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
});

test("close button, backdrop and mobile menu behave correctly", async ({ page }) => {
  await page.goto("/services");
  const trigger = page.locator("article#sites-web").getByRole("button", { name: "En savoir plus" });
  await trigger.click();
  await page.getByRole("button", { name: "Fermer la fenêtre de détail" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await trigger.click();
  await page.mouse.click(2, 2);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  const mobile = page.getByRole("navigation", { name: "Navigation mobile" });
  await expect(mobile).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(mobile).not.toBeVisible();
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await mobile.getByRole("link", { name: "Offres", exact: true }).click();
  await expect(page).toHaveURL(/\/offres$/);
  await expect(mobile).not.toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("hero, service gallery and detail visual snapshots", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.locator("main img:visible").evaluateAll(images => Promise.all(images.map(image => { const img = image as HTMLImageElement; img.loading = "eager"; return img.decode(); })));
  await page.screenshot({ path: testInfo.outputPath("hero.png") });
  await page.screenshot({ path: testInfo.outputPath("home.png"), fullPage: true });
  await page.goto("/services");
  await page.locator("main img:visible").evaluateAll(images => Promise.all(images.map(image => { const img = image as HTMLImageElement; img.loading = "eager"; return img.decode(); })));
  await page.screenshot({ path: testInfo.outputPath("services.png"), fullPage: true });
  await page.locator("article#sites-web").getByRole("button", { name: "En savoir plus" }).click();
  await page.screenshot({ path: testInfo.outputPath("detail.png") });
  await page.keyboard.press("Escape");
  await page.goto("/creation-site-web-bamako");
  await page.screenshot({ path: testInfo.outputPath("landing.png"), fullPage: true });
});

test("other pages disclose details and keep questions collapsed", async ({ page }) => {
  for (const route of ["/solutions", "/offres", "/portfolio", "/a-propos", "/creation-site-web-bamako"]) {
    await page.goto(route);
    const triggers = page.locator('main button[aria-haspopup="dialog"]');
    const count = await triggers.count();
    expect(count).toBeGreaterThan(0);
    for (let index = 0; index < count; index++) {
      await triggers.nth(index).click();
      await expect(page.getByRole("dialog")).toBeVisible();
      expect(await page.getByRole("dialog").evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
      await page.getByRole("button", { name: "Fermer la fenêtre de détail" }).click();
    }
  }
  await page.goto("/");
  const faq = page.locator("#questions .studio-faq").first();
  await expect(faq).not.toHaveAttribute("open");
  await faq.locator("summary").click();
  await expect(faq).toHaveAttribute("open", "");
});

test("service information remains reachable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4180/services");
  await page.locator("article#sites-web > a").click();
  await expect(page.locator("main h1")).toHaveText("Sites web professionnels");
  await expect(page.getByText("Ce que nous construisons avec vous")).toBeVisible();
  await context.close();
});

test("contact always provides a configured form or direct contact alternatives", async ({ page }) => {
  await page.goto("/contact");
  const form = page.locator("main form");
  if (await form.count()) {
    await expect(form).toHaveAttribute("action", "https://api.web3forms.com/submit");
    await expect(form.locator('input[name="access_key"]')).toHaveValue(/\S+/);
  } else {
    await expect(page.getByRole("heading", { name: "Écrivons la suite ensemble." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Écrire par e-mail", exact: true })).toHaveAttribute("href", `mailto:${businessInfo.email}?subject=Mon%20projet%20digital%20NEURALIS`);
    await expect(page.getByRole("link", { name: "Échanger sur WhatsApp", exact: true })).toHaveAttribute("href", businessInfo.whatsappUrl);
  }
});

test("page content remains readable with animations enabled", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator("main h1")).toBeVisible();
  const sections = page.locator("main > .studio-section > .studio-container");
  for (const section of await sections.all()) {
    await section.locator("h2").first().scrollIntoViewIfNeeded();
    await expect.poll(() => section.evaluate(element => Number(getComputedStyle(element).opacity))).toBeGreaterThan(0.9);
  }
});
