import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/lib/seo-landing-pages";
import { businessInfo } from "@/lib/business-info";
import { serviceCatalog } from "@/lib/service-catalog";

export const dynamic = "force-static";

const routes = [
  "",
  "/services",
  "/solutions",
  "/offres",
  "/portfolio",
  "/a-propos",
  "/contact",
  ...serviceCatalog.map((service) => `/services/${service.id}`),
  ...seoLandingPages.map((page) => `/${page.slug}`),
];
const lastModified = new Date("2026-09-09");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${businessInfo.siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
