import type { NextConfig } from "next";
import path from "node:path";

const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://vercel.live https://vercel.com",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://vercel.live",
  "frame-src 'self' https://vercel.live",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Report-Only: la directiva NO bloquea en navegador, solo registra violaciones
  // en consola. Conviene endurecer (eliminar 'unsafe-inline', añadir nonces) y
  // pasar a Content-Security-Policy real cuando llevemos 1-2 semanas con
  // métricas estables sobre qué fuentes legítimas se están cargando.
  { key: "Content-Security-Policy-Report-Only", value: cspReportOnly },
];

const PANEL_DEMO_ORIGIN =
  "https://eric-crypto-ai.github.io/grupo-imar-frontend/panel";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  /**
   * Sirve el panel demo (modo demo) bajo intralogik.com/demo/ sin duplicar
   * código. El panel real vive en eric-crypto-ai/grupo-imar-frontend y se
   * mantiene allí — cuando cambia, el rewrite lo refleja en /demo de oficio.
   *
   * Importante: el panel usa rutas relativas para sus assets (styles.css,
   * app.js, etc.). Sin trailing slash, el navegador resuelve "styles.css"
   * desde la raíz (/styles.css) y no encuentra nada. Por eso /demo se
   * redirige a /demo/ — y los enlaces internos del frontend ya apuntan a
   * /demo/ directamente para evitar el round trip.
   */
  async redirects() {
    return [
      { source: "/demo", destination: "/demo/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/demo/",       destination: `${PANEL_DEMO_ORIGIN}/index.html` },
      { source: "/demo/:path*", destination: `${PANEL_DEMO_ORIGIN}/:path*` },
    ];
  },
};

export default nextConfig;
