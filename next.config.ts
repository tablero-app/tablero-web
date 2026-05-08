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
  // Notas: la integración del panel demo bajo intralogik.com/demo se intentó
  // con rewrites (ver historial git) pero el preload scanner del navegador
  // pre-fetch los <link> y <script> antes de poder reescribir <base>, así
  // que los assets relativos no resolvían. La integración limpia requiere
  // copiar los assets del panel a public/demo/ o usar un Edge Function que
  // reescriba el HTML — pendiente de retomar.
  // Por ahora los enlaces "Probar demo" apuntan directos al panel en su
  // hosting GitHub Pages (eric-crypto-ai.github.io/grupo-imar-frontend),
  // que sirve el modo demo con el query string ?demo=1.
};

export default nextConfig;
