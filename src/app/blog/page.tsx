import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

const SITE_URL = "https://www.intralogik.com";

const TITLE = "Blog · GMAO, mantenimiento industrial y digitalización PYME";
const DESCRIPTION =
  "Guías prácticas sobre GMAO, mantenimiento industrial, digitalización de PYMEs industriales y gestión de planta. Sin marketing vacío, escrito para responsables de mantenimiento.";

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

interface Post {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  fechaIso: string;
  minutosLectura: number;
  categoria: "Guía" | "Comparativa" | "Caso práctico" | "Auditoría";
  estado: "publicado" | "en preparación";
}

const posts: Post[] = [
  {
    slug: "que-es-gmao",
    titulo: "¿Qué es un GMAO? Guía práctica para PYMEs industriales",
    resumen:
      "Definición de GMAO, módulos típicos, diferencia con CMMS, cuándo necesitas uno, cómo elegirlo y errores típicos al implantar. Pensado para responsables de mantenimiento de PYMEs industriales españolas.",
    fecha: "7 de mayo de 2026",
    fechaIso: "2026-05-07",
    minutosLectura: 8,
    categoria: "Guía",
    estado: "publicado",
  },
];

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Intralogik",
  description: DESCRIPTION,
  url: `${SITE_URL}/blog`,
  inLanguage: "es",
  publisher: {
    "@type": "Organization",
    name: "Intralogik",
    url: SITE_URL,
  },
  blogPost: posts
    .filter((p) => p.estado === "publicado")
    .map((post) => ({
      "@type": "BlogPosting",
      headline: post.titulo,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.fechaIso,
      author: { "@type": "Person", name: "Eric Castillo" },
    })),
};

export default function BlogPage() {
  const publicados = posts.filter((p) => p.estado === "publicado");

  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
        />

        <section className="relative pt-16 pb-12 md:pt-24 md:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(80% 60% at 100% 0%, color-mix(in oklab, var(--intralogik-orange-soft) 60%, transparent) 0%, transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Blog · escrito por gente que vive en planta
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.5rem]">
              GMAO, mantenimiento industrial y{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                cómo digitalizar tu planta sin proyecto IT.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Guías prácticas para responsables de mantenimiento de PYMEs
              industriales. Sin marketing vacío. Sin &ldquo;la
              transformación digital&rdquo;. Escrito en el idioma del que pasa
              por planta cada día.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <ul className="space-y-6">
              {publicados.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 md:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      <span>{post.categoria}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={post.fechaIso}>{post.fecha}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.minutosLectura} min</span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {post.titulo}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {post.resumen}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      Leer la guía
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              Más guías en preparación: GMAO vs CMMS · cómo elegir software de
              mantenimiento PYME · Excel vs GMAO industrial · QR de
              mantenimiento en fábrica · ISO 9001 y software de mantenimiento.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
