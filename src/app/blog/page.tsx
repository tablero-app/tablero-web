import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { getAllPosts, formatDateEs, type Post } from "@/lib/blog";

const SITE_URL = "https://www.intralogik.com";

const TITLE = "Blog · GMAO, mantenimiento industrial y digitalización PYME";
const DESCRIPTION =
  "Guías prácticas sobre GMAO, mantenimiento industrial y digitalización de PYMEs. Sin marketing vacío, escrito para responsables de mantenimiento.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/blog`,
    siteName: "Intralogik",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

interface GuiaEnPreparacion {
  titulo: string;
  resumen: string;
  categoria: "Guía" | "Comparativa" | "Caso práctico" | "Auditoría";
}

const proximas: GuiaEnPreparacion[] = [
  {
    titulo: "Mantenimiento preventivo vs correctivo: cuándo aplicar cada uno en una PYME",
    resumen:
      "Diferencias prácticas, cuándo merece la pena planificar preventivos y cuándo conviene seguir reactivo. Con criterios de coste, parada y criticidad de máquina.",
    categoria: "Guía",
  },
  {
    titulo: "Excel vs GMAO: comparativa real para PYMEs industriales españolas",
    resumen:
      "Análisis honesto de cuándo Excel sigue siendo la respuesta correcta y cuándo cambiarlo. Sin sesgo de proveedor.",
    categoria: "Comparativa",
  },
  {
    titulo: "Stock de repuestos: cómo evitar paradas por una junta tórica",
    resumen:
      "Niveles mínimos, alertas, proveedores alternativos y la diferencia entre stock muerto y stock real.",
    categoria: "Guía",
  },
];

function PostCard({ post }: { post: Post }) {
  const { frontmatter } = post;
  const href = `/blog/${frontmatter.slug}`;
  // Usamos la URL dinámica de OG (next/og) que genera una imagen única por artículo.
  // Mantiene el listado visualmente diferenciado y consistente con lo que se ve en
  // shares de LinkedIn/Twitter. El OG dinámico devuelve PNG 1200x630.
  const cardImage = `/blog/${frontmatter.slug}/opengraph-image`;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20">
      <Link
        href={href}
        className="relative block aspect-[1200/630] w-full overflow-hidden bg-secondary/40"
      >
        <Image
          src={cardImage}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          unoptimized
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{frontmatter.categoria}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={frontmatter.date}>{formatDateEs(frontmatter.date)}</time>
          {frontmatter.minutosLectura ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{frontmatter.minutosLectura} min</span>
            </>
          ) : null}
        </div>
        <h2 className="mt-3 text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
          <Link
            href={href}
            className="hover:underline underline-offset-4 decoration-foreground/30"
          >
            {frontmatter.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {frontmatter.excerpt || frontmatter.description}
        </p>
        <div className="mt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Leer guía
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "es",
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.frontmatter.title,
      url: `${SITE_URL}/blog/${p.frontmatter.slug}`,
      datePublished: /T/.test(p.frontmatter.date)
        ? p.frontmatter.date
        : `${p.frontmatter.date}T00:00:00Z`,
      author: { "@type": "Person", name: p.frontmatter.author },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <section className="relative pt-16 pb-8 md:pt-24 md:pb-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(80% 60% at 0% 0%, color-mix(in oklab, var(--intralogik-orange-soft) 60%, transparent) 0%, transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Blog Intralogik
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              GMAO y mantenimiento industrial,{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                sin marketing vacío.
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Guías prácticas pensadas para responsables de mantenimiento de PYMEs industriales.
              Conceptos, comparativas honestas y criterios para decidir sin que te vendan humo.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16 md:px-8 md:pb-24">
          {posts.length === 0 ? (
            <p className="text-sm text-muted-foreground">Próximamente.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.frontmatter.slug} post={post} />
              ))}
            </div>
          )}

          {proximas.length > 0 && (
            <div className="mt-20 border-t border-border pt-12">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                En preparación
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Próximas guías. Si quieres que prioricemos alguna,{" "}
                <Link href="/precios" className="underline underline-offset-4">
                  cuéntanoslo
                </Link>
                .
              </p>
              <ul className="mt-6 grid gap-4 md:grid-cols-3">
                {proximas.map((g) => (
                  <li
                    key={g.titulo}
                    className="rounded-xl border border-dashed border-border bg-card/40 p-5"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {g.categoria}
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                      {g.titulo}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {g.resumen}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
