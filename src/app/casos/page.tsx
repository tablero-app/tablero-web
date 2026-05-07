import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

const SITE_URL = "https://www.intralogik.com";

const TITLE = "Casos reales · cómo PYMEs industriales usan Intralogik";
const DESCRIPTION =
  "Casos prácticos de plantas industriales españolas que sustituyeron Excel y llamadas telefónicas por Intralogik en 2 semanas. Detalles, plazos y cambios reales en planta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/casos" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/casos`,
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

interface Caso {
  slug: string;
  sector: string;
  region: string;
  trabajadores: string;
  titulo: string;
  resumen: string;
  estado: "publicado" | "en preparación";
}

const casos: Caso[] = [
  {
    slug: "fabrica-metalmecanica-cataluna",
    sector: "Metalmecánica",
    region: "Cataluña",
    trabajadores: "80 trabajadores",
    titulo:
      "De la llamada al móvil del responsable a un sistema completo en 2 semanas",
    resumen:
      "Una fábrica metalmecánica catalana cambió un Excel histórico de cinco años y la llamada al móvil del responsable por panel móvil + form QR + ficha por máquina + stock con alertas. Implantación de 14 días reales.",
    estado: "publicado",
  },
];

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Casos reales de Intralogik",
  description: DESCRIPTION,
  url: `${SITE_URL}/casos`,
  inLanguage: "es",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: casos
      .filter((c) => c.estado === "publicado")
      .map((caso, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/casos/${caso.slug}`,
        name: caso.titulo,
      })),
  },
};

export default function CasosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
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
              Casos reales · plantas industriales españolas
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.5rem]">
              Cómo es Intralogik{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                en planta de verdad.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Casos reales de PYMEs industriales españolas que sustituyeron
              Excel y llamadas por Intralogik en 2 semanas. Datos
              anonimizados a petición de los clientes; el contenido operativo
              es íntegro.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <ul className="space-y-6">
              {casos.map((caso) => (
                <li key={caso.slug}>
                  <Link
                    href={`/casos/${caso.slug}`}
                    className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 md:p-8"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      <span>{caso.sector}</span>
                      <span aria-hidden="true">·</span>
                      <span>{caso.region}</span>
                      <span aria-hidden="true">·</span>
                      <span>{caso.trabajadores}</span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {caso.titulo}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {caso.resumen}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      Leer el caso
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
              Más casos en preparación. Los nuevos clientes que aceptan
              compartir su experiencia obtienen 2 meses gratis a cambio del
              caso publicado (con o sin nombre).
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
