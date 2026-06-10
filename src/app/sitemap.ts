import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/services", "/solutions", "/offres", "/portfolio", "/a-propos", "/contact"];
const lastModified = new Date("2026-06-10");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://neuralis.ml${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
