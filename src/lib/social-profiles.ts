/**
 * Perfiles sociales y referencias externas de Intralogik / Eric Castillo.
 *
 * Se inyectan en el `Organization.sameAs` JSON-LD del layout para que Google KG,
 * Bing y los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot) puedan vincular
 * la entidad "Intralogik" con sus perfiles verificables.
 *
 * Cuando crees la página de empresa en LinkedIn, descomenta o edita las URLs
 * abajo. No hace falta tocar `layout.tsx` ni el schema — se actualiza solo.
 *
 * Reglas:
 * - URLs HTTPS canónicas (sin querystring de tracking).
 * - LinkedIn empresa: `https://www.linkedin.com/company/<slug>`.
 * - LinkedIn personal del fundador: `https://www.linkedin.com/in/<slug>`.
 * - X / Twitter: `https://x.com/<handle>` (preferido sobre twitter.com).
 * - GitHub: `https://github.com/<org>` o `<user>` si aún no hay org.
 * - YouTube canal: `https://www.youtube.com/@<handle>`.
 */
export const socialProfiles: ReadonlyArray<string> = [
  // "https://www.linkedin.com/company/intralogik",
  // "https://www.linkedin.com/in/eric-castillo-navarro",
  // "https://x.com/intralogik",
  // "https://github.com/intralogik",
];

/** Perfiles del fundador (Eric) que pesan en E-E-A-T para el `founder.sameAs`. */
export const founderProfiles: ReadonlyArray<string> = [
  // "https://www.linkedin.com/in/eric-castillo-navarro",
];
