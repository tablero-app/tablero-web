import type { NextConfig } from "next";
import path from "node:path";

// HubSpot Free CRM — tracking JS y (futuro) formularios. Aunque hoy no embebemos
// formularios (D-BLOG-2 Opción B: el blog reutiliza CTAs Calendly/Stripe/mailto),
// dejamos los orígenes permitidos para no tocar CSP si se activan en el futuro.
const HUBSPOT_HOSTS = [
  "https://js-eu1.hs-scripts.com",
  "https://js.hs-scripts.com",
  "https://js.hsforms.net",
  "https://js-eu1.hsforms.net",
  "https://forms.hsforms.com",
  "https://forms-eu1.hsforms.com",
  "https://api.hsforms.com",
  "https://api-eu1.hsforms.com",
  "https://track.hubspot.com",
  "https://track-eu1.hubspot.com",
  "https://*.hubspot.com",
  "https://*.hs-analytics.net",
  "https://*.hs-banner.com",
].join(" ");

const cspReportOnly = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vercel.live ${HUBSPOT_HOSTS}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://vercel.live https://vercel.com ${HUBSPOT_HOSTS}`,
  "font-src 'self' data:",
  `connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://vercel.live ${HUBSPOT_HOSTS}`,
  `frame-src 'self' https://vercel.live ${HUBSPOT_HOSTS}`,
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
  // El panel demo se sirve desde public/demo/ (copia local, sincronizada
  // con scripts/sync-demo-from-panel.sh). Vercel sirve los estáticos con
  // URL canónica intralogik.com/demo/. Cuando se endurezca la CSP, hay que
  // permitir https://fonts.googleapis.com en style-src y https://fonts.gstatic.com
  // en font-src — el panel carga Geist desde Google Fonts.
};

export default nextConfig;
