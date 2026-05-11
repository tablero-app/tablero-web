import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { Button } from "@/components/ui/button";
import { getAllSlugs, getPostBySlug, formatDateEs, type Post } from "@/lib/blog";
import { founderProfiles } from "@/lib/social-profiles";

const SITE_URL = "https://www.intralogik.com";

// Garantiza ISO 8601 datetime completo (con T00:00:00Z) cuando el frontmatter
// trae solo fecha (YYYY-MM-DD). Google prefiere datetime completo en
// `datePublished`/`dateModified` para señales de frescura.
function toIso8601(value: string): string {
  if (!value) return value;
  return /T/.test(value) ? value : `${value}T00:00:00Z`;
}

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const { title, description, keywords, date, modified, author } = post.frontmatter;
  const url = `${SITE_URL}/blog/${slug}`;
  // OG image: Next.js detecta automáticamente `opengraph-image.tsx` en el segmento
  // y la añade al metadata. No declaramos `openGraph.images` aquí para no duplicar.
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    keywords,
    openGraph: {
      type: "article",
      locale: "es_ES",
      url,
      siteName: "Intralogik",
      title,
      description,
      publishedTime: date,
      modifiedTime: modified || date,
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

function buildArticleLd(post: Post): Record<string, unknown> {
  const { frontmatter } = post;
  const url = `${SITE_URL}/blog/${frontmatter.slug}`;
  // image: usa la OG dinámica generada por opengraph-image.tsx del segmento.
  // Next.js sirve esa imagen en `/blog/[slug]/opengraph-image` con extensión auto-añadida
  // por el runtime al generar metadata; en JSON-LD usamos la URL canónica sin extensión.
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: `${SITE_URL}/blog/${frontmatter.slug}/opengraph-image`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: toIso8601(frontmatter.date),
    dateModified: toIso8601(frontmatter.modified || frontmatter.date),
    inLanguage: "es",
    author: {
      "@type": "Person",
      name: frontmatter.author,
      url: SITE_URL,
      ...(founderProfiles.length > 0 ? { sameAs: [...founderProfiles] } : {}),
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

function buildFaqLd(post: Post): Record<string, unknown> | null {
  if (!post.frontmatter.faqs || post.frontmatter.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.frontmatter.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildBreadcrumbLd(post: Post): Record<string, unknown> {
  const url = `${SITE_URL}/blog/${post.frontmatter.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.frontmatter.title, item: url },
    ],
  };
}

const proseClass = [
  "space-y-12 text-base leading-relaxed text-muted-foreground",
  "[&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 md:[&_h2]:text-3xl",
  "[&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-2",
  "[&_p]:mt-4 [&_p:first-child]:mt-0",
  "[&_strong]:font-semibold [&_strong]:text-foreground",
  "[&_em]:not-italic [&_em]:text-foreground [&_em]:font-semibold",
  "[&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-foreground/30 hover:[&_a]:decoration-foreground",
  "[&_ul]:mt-4 [&_ul]:space-y-3 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:mt-4 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:pl-1",
  "[&_table]:w-full [&_table]:min-w-[560px] [&_table]:text-left [&_table]:text-sm [&_table]:border [&_table]:border-border [&_table]:rounded-lg [&_table]:overflow-hidden",
  "[&_thead]:bg-secondary/60",
  "[&_th]:px-4 [&_th]:py-3 [&_th]:font-semibold [&_th]:text-foreground",
  "[&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:border-t [&_td]:border-border",
].join(" ");

export default async function BlogPostPage({ params }: RouteProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter } = post;
  const articleLd = buildArticleLd(post);
  const faqLd = buildFaqLd(post);
  const breadcrumbLd = buildBreadcrumbLd(post);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        {faqLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
          />
        )}
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
                "radial-gradient(80% 60% at 100% 0%, color-mix(in oklab, var(--intralogik-orange-soft) 60%, transparent) 0%, transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <nav aria-label="Migas de pan" className="mb-6 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Inicio
              </Link>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span className="text-foreground">{frontmatter.title}</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              {frontmatter.categoria}
              {frontmatter.minutosLectura ? ` · ${frontmatter.minutosLectura} min de lectura` : ""}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              {frontmatter.title}
            </h1>

            {frontmatter.excerpt && (
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {frontmatter.excerpt}
              </p>
            )}

            <p className="mt-4 text-sm text-muted-foreground">
              Por <strong className="font-semibold text-foreground">{frontmatter.author}</strong>
              {frontmatter.authorRole ? `, ${frontmatter.authorRole}` : ""} · Actualizado el{" "}
              {formatDateEs(frontmatter.modified || frontmatter.date)}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
          <div className={proseClass}>
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          {faqLd && frontmatter.faqs && frontmatter.faqs.length > 0 && (
            <section className="mt-16 border-t border-border pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Preguntas frecuentes
              </h2>
              <div className="mt-6 space-y-5">
                {frontmatter.faqs.map((f, i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-border bg-card p-5 md:p-6"
                  >
                    <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                      {f.q}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 border-t border-border pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                ¿Quieres ver el GMAO ligero de Intralogik en tu planta? Implantación de 2 semanas
                incluida.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/precios">
                  Ver planes y precios
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </article>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
