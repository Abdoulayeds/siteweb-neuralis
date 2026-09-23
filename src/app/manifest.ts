import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEURALIS — Solutions digitales au Mali",
    short_name: "NEURALIS",
    description: "Sites web, applications, plateformes metiers, data et IA pour les organisations au Mali.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    lang: "fr",
    icons: [
      {
        src: "/neuralis-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
