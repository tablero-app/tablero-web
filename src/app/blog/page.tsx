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

interface GuiaEnPreparacion {
  titulo: string;
  resumen: string;
  categoria: Post["categoria"];
  cierreEstimado: string;
}

const guiasEnPreparacion: GuiaEnPreparacion[] = [
  {
    titulo: "GMAO vs CMMS: ¿hay diferencia real?",
    resumen:
      "Aclaración del eterno debate terminológico, el matiz entre EAM y GMAO, y por qué para una PYME industrial española importa menos la etiqueta que el ajuste de funcionalidades.",
    categoria: "Guía",
    cierreEstimado: "Mayo 2026",
  },
  {
    titulo: "Excel vs GMAO: cuándo deja de compensar el Excel manual",
    resumen:
      "Las 6 señales objetivas (no solo intuición) de que el Excel histórico de mantenimiento ya está costando más caro que un GMAO ligero. Con cálculo de coste oculto.",
    categoria: "Comparativa",
    cierreEstimado: "Mayo 2026",
  },
  {
    titulo: "QR de mantenimiento en fábrica: cómo se diseña, imprime y pega",
    resumen:
      "Tamaños, materiales, posición física en la máquina, qué evitar, costes orientativos. Guía operativa para responsables que quieren montar el sistema antes de comprar GMAO.",
    categoria: "Guía",
    cierreEstimado: "Junio 2026",
  },
  {
    titulo: "Preventivo, correctivo y predictivo: la mezcla realista para PYME",
    resumen:
      "Por qué el predictivo con sensores IoT no es para tu planta hoy, qué porcentaje preventivo/correctivo apuntar y cómo medirlo con datos reales del primer trimestre.",
    categoria: "Guía",
    cierreEstimado: "Junio 2026",
  },
  {
    titulo: "Cómo elegir software de mantenimiento PYME sin equivocarte",
    resumen:
      "Cinco criterios (mobile-first real, implantación en semanas, precio cerrado, sin permanencia, interfaz que respeta el conocimiento existente) y las 3 banderas rojas que descartan al proveedor en la primera demo.",
    categoria: "Guía",
    cierreEstimado: "Junio 2026",
  },
  {
    titulo: "Auditoría ISO 9001 y software de mantenimiento: qué pide y qué evita",
    resumen:
      "Trazabilidad mínima exigible (OT cerrada, técnico, repuestos, fecha, firma), cómo se exporta y los errores típicos que hacen perder horas en cada renovación.",
    categoria: "Auditoría",
    cierreEstimado: "Q3 2026",
  },
];

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Intralogik",
  description: DESCRIPTION,
  url: `${SITE_URL}/blog`,
  inLanguage: "es",
  publisher: { "@id": `${SITE_URL}/#organization` },
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

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Tres principios editoriales: cero contenido genérico generado
              por IA &mdash; cada guía sale de implantaciones reales en planta
              española; cero hype &mdash; nada de &ldquo;revoluciones&rdquo;
              ni &ldquo;industria 4.0&rdquo;, sí compromisos verificables; cero
              clickbait &mdash; el título dice exactamente lo que vas a
              encontrar dentro. Si una guía no resuelve un problema concreto
              de tu planta esta semana, no se publica.
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

          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Próximas guías
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Seis guías en preparación, calendario realista
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              El orden y la fecha estimada se mantienen mientras no aparezca
              un caso real que pida priorizar otra. Si quieres que avancemos
              una en concreto,{" "}
              <a
                href="mailto:info@intralogik.com"
                className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
              >
                pídelo a info@intralogik.com
              </a>
              .
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {guiasEnPreparacion.map((guia) => (
                <li
                  key={guia.titulo}
                  className="rounded-xl border border-dashed border-border bg-card p-5 md:p-6"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <span>{guia.categoria}</span>
                    <span aria-hidden="true">·</span>
                    <span style={{ color: "var(--intralogik-orange-text)" }}>
                      {guia.cierreEstimado}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-snug text-foreground md:text-base">
                    {guia.titulo}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {guia.resumen}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
