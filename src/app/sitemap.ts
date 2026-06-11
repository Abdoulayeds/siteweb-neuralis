import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/lib/seo-landing-pages";

export const dynamic = "force-static";

const routes = [
  "",
  "/services",
  "/solutions",
  "/offres",
  "/portfolio",
  "/a-propos",
  "/contact",
  ...seoLandingPages.map((page) => `/${page.slug}`),
];
const lastModified = new Date("2026-06-11");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://neuralis-mali.com${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
