import type { Metadata } from "next";
import { businessInfo } from "./business-info";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | NEURALIS`, description, url: path, siteName: businessInfo.name, locale: "fr_ML", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NEURALIS, solutions digitales à Bamako, Mali" }] },
    twitter: { card: "summary_large_image", title: `${title} | NEURALIS`, description, images: ["/opengraph-image"] },
  };
}
