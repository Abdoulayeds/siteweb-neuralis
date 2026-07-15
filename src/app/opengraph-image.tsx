import { ImageResponse } from "next/og";

export const alt = "NEURALIS — Le partenaire digital des entreprises ambitieuses au Mali";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #020617 0%, #0f172a 55%, #083344 100%)",
        color: "white",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(103,232,249,.28)",
          borderRadius: "44px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: "0.12em" }}>
          <span style={{ color: "#22d3ee", marginRight: 18 }}>N</span> NEURALIS
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#67e8f9", fontSize: 24, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {"Bamako · Mali · Afrique de l'Ouest"}
          </div>
          <div style={{ fontSize: 62, fontWeight: 760, lineHeight: 1.05, marginTop: 22, maxWidth: 940 }}>
            Des solutions digitales claires, utiles et ambitieuses.
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 26, marginTop: 28 }}>
            Web · Applications · Plateformes · Data · IA
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
