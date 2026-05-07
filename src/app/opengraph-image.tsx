import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Intralogik — Sistema de gestión de mantenimiento industrial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const ORANGE = "#D8703F";
  const ORANGE_SOFT = "#FBE9D9";
  const BG = "#FAFAF7";
  const FG = "#1F2A44";
  const MUTED = "#5A6478";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `radial-gradient(80% 60% at 100% 0%, ${ORANGE_SOFT} 0%, ${BG} 60%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 4,
              width: 56,
              height: 56,
            }}
          >
            <div style={{ background: FG, borderRadius: 6 }} />
            <div style={{ background: FG, borderRadius: 6 }} />
            <div style={{ background: ORANGE, borderRadius: 6 }} />
            <div style={{ background: FG, borderRadius: 6 }} />
          </div>
          <span
            style={{
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: FG,
            }}
          >
            intralogik
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: MUTED,
            }}
          >
            GMAO ligero · PYME industrial española
          </span>
          <h1
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              color: FG,
              marginTop: 24,
              marginBottom: 0,
            }}
          >
            El mantenimiento de tu planta,
          </h1>
          <h1
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              color: ORANGE,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            en una sola pantalla.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: MUTED,
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <span>De WhatsApp a un sistema en 2 semanas.</span>
          <span style={{ fontWeight: 600, color: FG }}>
            www.intralogik.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
