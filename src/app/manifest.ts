import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEURALIS — Solutions digitales au Mali",
    short_name: "NEURALIS",
    description: "Sites web, applications, plateformes metiers, data et IA pour les organisations au Mali.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    lang: "fr",
    icons: [
      {
        src: "/logo-neuralis.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
