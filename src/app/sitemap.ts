import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://www.intralogik.com";

// `lastModified` debe reflejar cambios reales de contenido — no el timestamp
// de cada deploy. Se incrementa MANUALMENTE por página cuando se reescribe
// algo significativo (copy, schema, sección nueva). Las legales (aviso legal,
// privacidad, cookies) están indexables pero NO en sitemap: no aportan valor
// SEO B2B y diluyen el crawl signal de las páginas comerciales.
const LAST_MOD: Record<string, string> = {
  "/": "2026-05-11",
  "/sobre": "2026-05-11",
  "/precios": "2026-05-10",
  "/casos": "2026-05-10",
  "/casos/fabrica-metalmecanica-cataluna": "2026-05-10",
  "/blog": "2026-05-11",
  "/gestion-incidencias-mantenimiento": "2026-05-10",
  "/stock-repuestos-mantenimiento": "2026-05-10",
  "/mantenimiento-preventivo-correctivo": "2026-05-10",
  "/form-qr-mantenimiento-fabrica": "2026-05-10",
  "/alternativa-sap-pm-pyme": "2026-05-11",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = Object.entries(LAST_MOD).map(
    ([path, date]) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(date),
    })
  );

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.modified || post.frontmatter.date),
  }));

  return [...staticEntries, ...blogEntries];
}
