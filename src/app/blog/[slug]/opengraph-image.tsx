import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Artículo del blog Intralogik";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface RouteProps {
  params: Promise<{ slug: string }>;
}

const ORANGE = "#D8703F";
const ORANGE_SOFT = "#FBE9D9";
const BG = "#FAFAF7";
const FG = "#1F2A44";
const MUTED = "#5A6478";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: 48,
          height: 48,
        }}
      >
        <div style={{ display: "flex", gap: 4, flex: 1 }}>
          <div style={{ background: FG, borderRadius: 5, flex: 1 }} />
          <div style={{ background: FG, borderRadius: 5, flex: 1 }} />
        </div>
        <div style={{ display: "flex", gap: 4, flex: 1 }}>
          <div style={{ background: ORANGE, borderRadius: 5, flex: 1 }} />
          <div style={{ background: FG, borderRadius: 5, flex: 1 }} />
        </div>
      </div>
      <span
        style={{
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: FG,
        }}
      >
        intralogik
      </span>
    </div>
  );
}

/**
 * Tamaño del título adaptativo según longitud para mantener legibilidad y caja.
 * Calibrado contra 1040px de ancho disponible y line-height 1.04.
 */
function titleFontSize(title: string): number {
  const len = title.length;
  if (len <= 50) return 76;
  if (len <= 70) return 64;
  if (len <= 95) return 54;
  return 46;
}

export default async function BlogPostOgImage({ params }: RouteProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // Fallback: si por algún motivo no se encuentra el post (ej. slug no migrado),
  // se devuelve la OG genérica del sitio para no romper redes sociales.
  const title =
    post?.frontmatter.title ?? "El mantenimiento de tu planta, en una pantalla.";
  const categoria = post?.frontmatter.categoria ?? "Blog";
  const author = post?.frontmatter.author ?? "Intralogik";

  const fontSize = titleFontSize(title);

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
          background: `radial-gradient(85% 65% at 100% 0%, ${ORANGE_SOFT} 0%, ${BG} 60%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Header: logo + chip categoría */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              background: "rgba(255, 255, 255, 0.6)",
              border: `1px solid ${ORANGE_SOFT}`,
              borderRadius: 999,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: ORANGE,
              }}
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: MUTED,
                letterSpacing: "0.04em",
              }}
            >
              {categoria}
            </span>
          </div>
        </div>

        {/* Título del artículo */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: MUTED,
              marginBottom: 20,
            }}
          >
            Blog · GMAO y mantenimiento industrial
          </span>
          <div
            style={{
              display: "flex",
              fontSize,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              color: FG,
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer: autor + dominio */}
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
          <span>Por {author}</span>
          <span style={{ fontWeight: 600, color: FG }}>
            www.intralogik.com/blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
