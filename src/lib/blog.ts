import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const POSTS_DIR = path.join(process.cwd(), "content/blog/posts");

export type ArticleType =
  | "guia"
  | "comparativa"
  | "checklist"
  | "caso"
  | "explicativo"
  | "opinion";

export type IntencionBusqueda =
  | "informacional"
  | "comparativa"
  | "transaccional"
  | "navegacional";

export interface PostFaq {
  q: string;
  a: string;
}

export interface PostFrontmatter {
  /** ID interno (BLOG-YYYY-NNNN) para el sistema de blog automatizado. Opcional para artículos manuales. */
  id?: string;
  title: string;
  slug: string;
  description: string;
  excerpt?: string;
  /** ISO 8601. Fecha publicación. */
  date: string;
  /** ISO 8601 o YYYY-MM-DD. Última modificación significativa. Opcional. */
  modified?: string;
  author: string;
  authorRole?: string;
  /** Una de las 6 categorías canónicas. */
  tipo_articulo: ArticleType;
  /** Tema del catálogo (TEMA-XX). Opcional. */
  tema_categoria?: string;
  /** Etiqueta visual mostrada en el chip del hero. Si no se provee, se deriva de tipo_articulo. */
  categoria?: string;
  /** Lectura estimada en minutos. */
  minutosLectura?: number;
  keywords?: string[];
  keywordPrincipal?: string;
  intencion_busqueda?: IntencionBusqueda;
  /** Path absoluto desde /public, ej. /blog-images/default-guia.jpg */
  ogImage?: string;
  /** Clave del CTA en config_blog. Opcional — si vacío, no se inserta CTA específico. */
  cta?: string;
  /** URL del CTA (override del cta clave). */
  ctaUrl?: string;
  /** Texto del CTA. */
  ctaTexto?: string;
  /** FAQs estructuradas que generan JSON-LD FAQPage + sección visual al final del artículo. */
  faqs?: PostFaq[];
  /** Si true, el post no aparece en listado, sitemap ni RSS. Útil para drafts. */
  draft?: boolean;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  filename: string;
}

const TIPO_LABEL: Record<ArticleType, string> = {
  guia: "Guía",
  comparativa: "Comparativa",
  checklist: "Checklist",
  caso: "Caso práctico",
  explicativo: "Explicativo",
  opinion: "Opinión",
};

const DEFAULT_OG: Record<ArticleType, string> = {
  guia: "/blog-images/default-guia.jpg",
  comparativa: "/blog-images/default-comparativa.jpg",
  checklist: "/blog-images/default-checklist.jpg",
  caso: "/blog-images/default-caso.jpg",
  explicativo: "/blog-images/default-explicativo.jpg",
  opinion: "/blog-images/default-opinion.jpg",
};

/** Fallback a default-guia.jpg si la específica no existe físicamente en /public. */
function resolveOgImage(fm: PostFrontmatter): string {
  if (fm.ogImage) return fm.ogImage;
  const candidate = DEFAULT_OG[fm.tipo_articulo];
  const candidatePath = path.join(process.cwd(), "public", candidate.replace(/^\//, ""));
  if (fs.existsSync(candidatePath)) return candidate;
  // Fallback final: default-guia.jpg
  return "/blog-images/default-guia.jpg";
}

function normalizeFrontmatter(raw: Record<string, unknown>, filename: string): PostFrontmatter {
  const fm = raw as Partial<PostFrontmatter>;
  if (!fm.title) throw new Error(`Falta title en ${filename}`);
  if (!fm.slug) throw new Error(`Falta slug en ${filename}`);
  if (!fm.description) throw new Error(`Falta description en ${filename}`);
  if (!fm.date) throw new Error(`Falta date en ${filename}`);
  if (!fm.author) throw new Error(`Falta author en ${filename}`);
  if (!fm.tipo_articulo) throw new Error(`Falta tipo_articulo en ${filename}`);

  const out: PostFrontmatter = {
    ...(fm as PostFrontmatter),
    categoria: fm.categoria || TIPO_LABEL[fm.tipo_articulo],
  };
  out.ogImage = resolveOgImage(out);
  return out;
}

export function getAllPosts(includeDrafts = false): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = normalizeFrontmatter(data as Record<string, unknown>, filename);
    return { frontmatter, content, filename };
  });
  return posts
    .filter((p) => includeDrafts || !p.frontmatter.draft)
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
}

export function getPostBySlug(slug: string, includeDrafts = false): Post | null {
  const all = getAllPosts(includeDrafts);
  return all.find((p) => p.frontmatter.slug === slug) || null;
}

export function getAllSlugs(includeDrafts = false): string[] {
  return getAllPosts(includeDrafts).map((p) => p.frontmatter.slug);
}

export function formatDateEs(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}
