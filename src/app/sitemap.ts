import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/lib/seo-landing-pages";
import { businessInfo } from "@/lib/business-info";

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
const lastModified = new Date("2026-07-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${businessInfo.siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
