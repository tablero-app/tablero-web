import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.intralogik.com";
const PATH = "/alternativa-sap-pm-pyme";

const TITLE = "Alternativa a SAP PM para PYME industrial · Comparativa 2026";
const DESCRIPTION =
  "Cuándo SAP PM (Plant Maintenance) tiene sentido y cuándo es excesivo para una PYME industrial española. Comparativa en 6 ejes con Intralogik.";
const PUBLISHED = "2026-05-11T08:00:00Z";
const MODIFIED = "2026-05-11T08:00:00Z";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${SITE_URL}${PATH}`,
    siteName: "Intralogik",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Eric Castillo"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: `${SITE_URL}/opengraph-image`,
  url: `${SITE_URL}${PATH}`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PATH}` },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  inLanguage: "es",
  author: {
    "@type": "Person",
    name: "Eric Castillo",
    url: `${SITE_URL}/sobre`,
    sameAs: ["https://www.linkedin.com/in/eric-castillo-navarro-b4b7a78"],
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: [
    { "@type": "Thing", name: "SAP PM" },
    { "@type": "Thing", name: "Plant Maintenance" },
    { "@type": "Thing", name: "GMAO" },
    { "@type": "Thing", name: "CMMS" },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es SAP PM (Plant Maintenance)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAP PM (Plant Maintenance) es el módulo de gestión de mantenimiento del ERP enterprise SAP. Está integrado con los módulos financiero (FI), logístico (MM) y de producción (PP), y diseñado para corporaciones grandes con múltiples plantas, equipo IT propio y operación continental. Cubre órdenes de trabajo, mantenimiento preventivo, gestión de repuestos y reporting avanzado, pero exige una implementación de meses con consultoría externa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo NO conviene SAP PM a una PYME industrial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAP PM no encaja en una PYME industrial española de 30-150 trabajadores con 1-3 plantas cuando: no tienes equipo IT dedicado para mantener la integración, el coste anual de licencias + consultoría supera el ahorro operativo, la implantación de 4-9 meses retrasa el retorno y la complejidad operativa hace que el responsable de mantenimiento siga usando Excel paralelo. En esos casos, un GMAO ligero como Intralogik resuelve el 80% del problema con el 10% del coste.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo SÍ conviene SAP PM frente a un GMAO ligero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAP PM tiene sentido cuando: ya operas SAP S/4HANA en otros módulos y la integración nativa con FI/MM/PP aporta valor real, tienes 5+ plantas en países distintos con regulaciones heterogéneas, tu equipo de mantenimiento supera las 100 personas con jerarquía formal, requieres reporting consolidado a casa matriz y dispones de equipo IT interno o partner SAP para mantener la implementación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta SAP PM frente a Intralogik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAP PM no publica precios — el coste total depende de licencias S/4HANA, número de usuarios, módulos contratados y consultoría de implantación. Las estimaciones de mercado para una primera implantación en PYME industrial española arrancan en 80.000-150.000 € el primer año y 30.000-80.000 € en años siguientes en licencias y mantenimiento, sin contar consultoría continua. Intralogik cuesta entre 2.388 € (Esencial) y 7.188 € (Avanzado) al año, sin setup fee, sin consultoría aparte y sin módulos premium.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo migrar de SAP PM a un GMAO ligero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Migrar de SAP PM a un GMAO ligero como Intralogik tiene tres pasos prácticos: (1) exportar el catálogo de equipos, repuestos y órdenes históricas desde SAP a Excel (función nativa de SAP); (2) importar a Intralogik con las plantillas estándar incluidas en la implantación de 2 semanas; (3) operar en paralelo durante 2-4 semanas con SAP PM en read-only mientras Intralogik gestiona la operación viva. Si la planta funciona estable en paralelo, se desactiva SAP PM con todo el histórico ya migrado.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Alternativa a SAP PM para PYME", item: `${SITE_URL}${PATH}` },
  ],
};

const ejes = [
  {
    eje: "Tiempo de implantación",
    sap: "4-9 meses",
    sapNote: "Diseño, integración con FI/MM/PP, formación, pruebas.",
    intralogik: "2 semanas",
    intralogikNote: "Sin consultoría externa, sin integración con otros módulos.",
    winner: "intralogik" as const,
  },
  {
    eje: "Coste anual estimado",
    sap: "80.000-150.000 € año 1 · 30.000-80.000 € año 2+",
    sapNote: "Licencias S/4HANA + consultoría + integración. Cifras de mercado, SAP no publica precios.",
    intralogik: "2.388-7.188 €",
    intralogikNote: "Plan Esencial (199 €/mes) a Avanzado (599 €/mes). Sin setup fee, sin consultoría aparte.",
    winner: "intralogik" as const,
  },
  {
    eje: "Curva de aprendizaje",
    sap: "Meses",
    sapNote: "Formación específica por rol, navegación SAP compleja, dependencia de transacciones T-Codes.",
    intralogik: "Días",
    intralogikNote: "Form QR para operario (sin login ni formación), panel responsable visual.",
    winner: "intralogik" as const,
  },
  {
    eje: "Dependencia de IT propio",
    sap: "Alta",
    sapNote: "Requiere equipo SAP interno o partner externo continuo para parches y configuración.",
    intralogik: "Ninguna",
    intralogikNote: "Web hosted, sin instalación. Soporte directo del fundador.",
    winner: "intralogik" as const,
  },
  {
    eje: "Integración con ERP enterprise",
    sap: "Nativa (FI/MM/PP)",
    sapNote: "Si ya operas SAP S/4HANA en otros módulos, la integración es el valor diferencial.",
    intralogik: "Exporte a Excel",
    intralogikNote: "Datos exportables siempre. No reemplaza al ERP, complementa al responsable de mantenimiento.",
    winner: "sap" as const,
  },
  {
    eje: "Reporting consolidado multi-planta multi-país",
    sap: "Sí, con reporting avanzado",
    sapNote: "Diseñado para corporaciones globales con jerarquías formales.",
    intralogik: "Multi-planta sí, multi-país no",
    intralogikNote: "Plan Avanzado soporta varias plantas españolas. No diseñado para operación global heterogénea.",
    winner: "sap" as const,
  },
];

export default function AlternativaSapPmPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <section className="relative pt-16 pb-12 md:pt-24 md:pb-16">
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
              <Link href="/" className="hover:text-foreground">Inicio</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Alternativa a SAP PM para PYME</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Comparativa · SAP PM vs GMAO ligero
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              Alternativa a SAP PM para{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>PYME industrial.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              SAP PM (Plant Maintenance) es un módulo de mantenimiento potente,
              pero está pensado para corporaciones globales. Si tu planta tiene
              30-150 trabajadores y 1-3 sedes en España, es probable que estés
              pagando 10× lo necesario.{" "}
              <strong className="font-semibold text-foreground">
                Aquí tienes la comparativa honesta en 4 ejes.
              </strong>
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Aviso:</strong>{" "}
              soy fundador de Intralogik, así que parto con sesgo. He intentado
              ser justo con SAP PM señalando los casos donde sí tiene sentido.
              Las cifras de coste de SAP PM son estimaciones de mercado &mdash; SAP
              no publica precios oficiales.
            </p>
          </div>
        </section>

        {/* Comparativa por ejes */}
        <section className="border-y border-border bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Los 6 ejes que importan
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              SAP PM gana en 2 ejes &mdash; pero esos 2 ejes solo importan si tu
              empresa ya opera SAP S/4HANA o tiene operación global.
            </p>

            <ul className="mt-8 space-y-4">
              {ejes.map((e) => (
                <li
                  key={e.eje}
                  className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-[max-content_1fr_1fr] md:gap-6 md:p-6"
                >
                  <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg md:max-w-[14rem]">
                    {e.eje}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      {e.winner === "sap" ? (
                        <Check className="h-4 w-4 shrink-0" style={{ color: "var(--intralogik-orange)" }} aria-hidden="true" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      )}
                      <span className="text-foreground">SAP PM</span>
                      <span className="font-normal text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{e.sap}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground md:ml-6">
                      {e.sapNote}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      {e.winner === "intralogik" ? (
                        <Check className="h-4 w-4 shrink-0" style={{ color: "var(--intralogik-orange)" }} aria-hidden="true" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      )}
                      <span className="text-foreground">Intralogik</span>
                      <span className="font-normal text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{e.intralogik}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground md:ml-6">
                      {e.intralogikNote}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Decisión clara */}
        <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-20">
          <div className="space-y-12 text-base leading-relaxed text-muted-foreground [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-0 [&_h2]:mb-4 md:[&_h2]:text-3xl [&_strong]:font-semibold [&_strong]:text-foreground">

            <section>
              <h2>Cuándo SÍ quedarte con SAP PM</h2>
              <p>
                Hay tres perfiles donde SAP PM es la elección correcta y un
                GMAO ligero como Intralogik no encaja:
              </p>
              <ul className="mt-4 space-y-3 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                  <span>
                    <strong>Ya operas SAP S/4HANA</strong> en finanzas, logística
                    o producción. La integración nativa entre PM y FI/MM/PP
                    aporta valor real que no puedes reemplazar con exportes a
                    Excel.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                  <span>
                    <strong>Operas 5+ plantas en países distintos</strong> con
                    regulación heterogénea (UE + LATAM + Asia, por ejemplo).
                    Necesitas reporting consolidado en una sola herramienta con
                    soporte multi-divisa, multi-idioma y compliance auditable.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" />
                  <span>
                    <strong>Tu equipo de mantenimiento supera las 100 personas</strong>{" "}
                    con jerarquía formal (jefe área &gt; supervisor &gt; técnico
                    &gt; ayudante) y requieres workflow de aprobación de OTs en
                    cascada.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2>Cuándo NO conviene SAP PM</h2>
              <p>
                Y los cinco casos donde es excesivo y un GMAO ligero hace mejor
                el trabajo:
              </p>
              <ul className="mt-4 space-y-3 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--intralogik-orange)" }} />
                  <span>
                    <strong>Tu PYME tiene 30-150 trabajadores y 1-3 plantas españolas.</strong>{" "}
                    La complejidad de SAP PM no te aporta nada que no puedas
                    resolver con un GMAO simple. Pagarás el setup pero la
                    operativa real seguirá pasando por Excel paralelo.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--intralogik-orange)" }} />
                  <span>
                    <strong>No tienes equipo IT interno dedicado a SAP.</strong>{" "}
                    Sin esa capacidad, cada cambio requiere consultor externo a
                    150-250 €/hora, y el coste anual se dispara silenciosamente.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--intralogik-orange)" }} />
                  <span>
                    <strong>El responsable de mantenimiento es perfil técnico, no perfil IT.</strong>{" "}
                    Las transacciones T-Code de SAP exigen formación dedicada;
                    un panel visual hace el mismo trabajo en horas en lugar de
                    semanas.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--intralogik-orange)" }} />
                  <span>
                    <strong>Tu prioridad es arrancar este trimestre, no en 6 meses.</strong>{" "}
                    Si necesitas resolver el problema operativo YA &mdash;
                    paradas no documentadas, conocimiento atrapado en una
                    persona, stock de repuestos opaco &mdash; SAP PM no entrega
                    valor antes del mes 6.
                  </span>
                </li>
                <li>
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--intralogik-orange)" }} />
                  <span>
                    <strong>Tu cliente potencial es el dueño/director, no el IT manager.</strong>{" "}
                    En PYMEs industriales el comprador firma el cheque por ROI
                    operativo, no por arquitectura. SAP PM es difícil de
                    justificar en ese contexto.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2>Cómo migrar de SAP PM a Intralogik (si decides hacerlo)</h2>
              <p>
                Si estás operando SAP PM y has decidido que sobre-equipa tu
                planta, la migración a Intralogik tiene tres pasos prácticos
                que se ejecutan típicamente en 4-6 semanas:
              </p>
              <ol className="mt-6 space-y-4 [&>li]:rounded-xl [&>li]:border [&>li]:border-border [&>li]:bg-card [&>li]:p-5">
                <li>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono tabular text-sm font-semibold" style={{ color: "var(--intralogik-orange-text)" }}>
                      Paso 1
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                      Exportar desde SAP PM a Excel
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    Usando las transacciones nativas SAP (IH01 para equipos,
                    MM60 para repuestos, IW39 para OTs históricas), exporta el
                    catálogo de equipos, las clases de mantenimiento, los
                    repuestos asociados y al menos 2 años de órdenes de trabajo
                    históricas. Salida: Excel estándar.
                  </p>
                </li>
                <li>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono tabular text-sm font-semibold" style={{ color: "var(--intralogik-orange-text)" }}>
                      Paso 2
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                      Importar a Intralogik
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    Usando las plantillas estándar de Intralogik (incluidas en
                    la implantación de 2 semanas), cargamos los catálogos de
                    máquinas, piezas y proveedores. El histórico de OTs se
                    normaliza a la estructura relacional de Intralogik
                    (máquina-pieza-técnico-fecha-coste).
                  </p>
                </li>
                <li>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono tabular text-sm font-semibold" style={{ color: "var(--intralogik-orange-text)" }}>
                      Paso 3
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                      Operación en paralelo 2-4 semanas
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    SAP PM queda en modo read-only mientras Intralogik gestiona
                    la operación viva. Pasadas 2-4 semanas, si la planta
                    funciona estable, se desactiva SAP PM con todo el histórico
                    ya migrado. El cliente conserva las exportes originales de
                    SAP como salvaguarda.
                  </p>
                </li>
              </ol>
            </section>

            <section>
              <h2>El veredicto en una frase</h2>
              <p className="rounded-xl border border-border bg-card p-6 text-base leading-relaxed text-foreground md:text-lg md:p-8">
                <strong>SAP PM es el mejor sistema de mantenimiento para
                corporaciones que ya operan SAP S/4HANA.</strong>{" "}
                Para todo lo demás &mdash; PYME industrial española de 30-150
                trabajadores con 1-3 plantas &mdash; un GMAO ligero como
                Intralogik resuelve el 80% del problema operativo con el 10%
                del coste y en 14 días en lugar de 6 meses.
              </p>
            </section>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                ¿Quieres ver cómo encajaría Intralogik en tu planta? Demo de 30
                minutos con el fundador.
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
