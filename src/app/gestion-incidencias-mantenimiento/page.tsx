import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  FileSpreadsheet,
  QrCode,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.intralogik.com";
const PATH = "/gestion-incidencias-mantenimiento";

const TITLE = "Gestión de incidencias de mantenimiento industrial";
const DESCRIPTION =
  "Reporta y resuelve incidencias de mantenimiento industrial con form QR + panel móvil. Sin Excel, sin WhatsApp, sin llamada al móvil del responsable. 38 segundos por reporte.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}${PATH}`,
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

const webpageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: "es",
  isPartOf: {
    "@type": "WebSite",
    name: "Intralogik",
    url: SITE_URL,
  },
  about: {
    "@type": "Service",
    name: "Gestión de incidencias de mantenimiento industrial",
    serviceType: "GMAO · módulo de gestión de incidencias",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "España" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "PYMEs industriales 30-150 trabajadores",
    },
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la gestión de incidencias en mantenimiento industrial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es el proceso por el cual una empresa industrial captura, prioriza, asigna y resuelve los fallos y problemas que aparecen en sus máquinas o instalaciones. Una buena gestión de incidencias garantiza que ningún problema se pierde, que se asignan a la persona adecuada con la prioridad correcta, y que queda histórico completo por máquina.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué falla el método de Excel + WhatsApp + llamada al responsable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Por tres razones: (1) las incidencias se pierden por el camino al usar canales múltiples no integrados; (2) el responsable se convierte en cuello de botella personal y la planta depende de su disponibilidad; (3) no queda histórico estructurado, con lo que las averías recurrentes se reaprenden cada vez que cambia el técnico de turno.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda un operario en reportar una incidencia con un sistema GMAO bien diseñado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 30 y 60 segundos. Escanea un QR pegado en la máquina con su móvil, hace una foto, escribe una frase corta describiendo el problema y elige prioridad. No abre ninguna aplicación, no llama a nadie. La incidencia entra al panel del responsable en tiempo real.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesita el operario tener una app instalada en su móvil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El form se abre desde el navegador móvil al escanear el QR, igual que cualquier página web. No hay descarga, no hay alta, no hay contraseña. Funciona con datos del operario o con WiFi de la planta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si un operario reporta una incidencia con WiFi malo y se va la conexión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El form local guarda la incidencia y reintenta automáticamente cuando vuelve la red. La incidencia no se pierde. El operario ve confirmación cuando se ha enviado correctamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se prioriza una incidencia en planta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El operario elige al reportar entre tres niveles típicos: Parada de línea (urgencia máxima), Riesgo (avería que aún no para producción pero puede agravarse) y Programado (tarea que puede esperar al próximo turno). El responsable puede reasignar la prioridad desde el panel si considera que es distinta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede integrar la gestión de incidencias con un ERP o un sistema existente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Las incidencias se exportan a Excel cuando se necesita, y para integraciones bidireccionales con ERPs comunes (SAP Business One, Sage, etc.) hay conector a medida disponible en el plan Avanzado. La conexión típica es exportes diarios o sincronización por API.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gestión de incidencias",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

export default function GestionIncidenciasPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        {/* Hero */}
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
            <nav aria-label="Migas de pan" className="mb-6 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Inicio</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Gestión de incidencias</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Módulo Intralogik · Form QR + Panel
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              Gestión de incidencias en mantenimiento industrial,{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                en 38 segundos por reporte.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              El operario escanea un QR pegado en la máquina, hace una foto y
              elige prioridad. La incidencia entra al panel del responsable en
              tiempo real, con histórico vinculado a la máquina y trazabilidad
              completa. Sin Excel paralelo, sin WhatsApp, sin llamada al móvil
              del responsable.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Por <strong className="font-semibold text-foreground">Eric Castillo</strong>,
              fundador de Intralogik · Actualizado el 7 de mayo de 2026
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/precios">
                  Ver planes y precios
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#cta">Reservar demo guiada (30 min)</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Qué es */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Qué es la gestión de incidencias en mantenimiento industrial
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Es el proceso por el cual una planta captura, prioriza, asigna y
              resuelve los fallos y problemas de sus máquinas. Una buena
              gestión garantiza que ninguna incidencia se pierde, que se
              asigna a la persona adecuada con la prioridad correcta, y que
              queda histórico completo por máquina para que las averías
              recurrentes se resuelvan más rápido cada vez.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              En la mayoría de PYMEs industriales españolas que aún no han
              digitalizado este proceso, la gestión real de incidencias vive en
              tres canales fragmentados: Excel, WhatsApp y la llamada al móvil
              del responsable. Funciona — hasta que deja de funcionar.
            </p>
          </div>
        </section>

        {/* Por qué falla el método tradicional */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Por qué falla el método tradicional
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Tres patrones que se repiten en casi todas las plantas que
              vienen a buscar GMAO por primera vez:
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: Phone,
                  title: "Cuello de botella personal",
                  text:
                    "Si el responsable de mantenimiento está de baja, en una reunión o de vacaciones, las incidencias se acumulan o se pierden. La planta opera al 70% de eficiencia ese día. La continuidad operativa depende de una sola persona.",
                },
                {
                  icon: MessageSquare,
                  title: "Canales fragmentados",
                  text:
                    "WhatsApp para los operarios cercanos. Llamada para los urgentes. Email para los que pasan por oficina. Verbal cuando se cruzan en la cantina. Cada canal tiene su propio formato y nada se cruza, así que las incidencias menores se quedan sin registrar.",
                },
                {
                  icon: FileSpreadsheet,
                  title: "Histórico imposible de explotar",
                  text:
                    "El Excel histórico crece año a año pero buscar una avería concreta lleva 20 minutos. Si la avería es recurrente, el técnico de turno la resuelve por cuarta vez sin saber que ya se resolvió tres veces antes. Conocimiento atrapado en cabezas.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--intralogik-orange-soft)" }}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        style={{ color: "var(--intralogik-orange)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Cómo funciona en Intralogik */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Cómo funciona en Intralogik
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              De QR pegado en la máquina a OT cerrada con foto y firma.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Un único flujo, en cuatro pasos, que conecta al operario con el
              responsable y con el técnico sin canales paralelos.
            </p>

            <ol className="mt-10 space-y-6">
              {[
                {
                  step: "1",
                  icon: QrCode,
                  title: "El operario escanea el QR de la máquina",
                  text:
                    "Cada máquina lleva un QR físico pegado en lugar visible. El operario lo escanea con su móvil personal — sin app, sin login. Se abre directamente el formulario móvil pre-rellenado con la máquina identificada.",
                },
                {
                  step: "2",
                  icon: MessageSquare,
                  title: "Reporta en menos de un minuto",
                  text:
                    "Foto opcional, descripción corta (\"se ha parado, hace ruido raro al arrancar\"), prioridad de tres niveles (Parada de línea / Riesgo / Programado). 38 segundos según medición real en planta. Vuelve a su puesto.",
                },
                {
                  step: "3",
                  icon: LayoutDashboard,
                  title: "El responsable la ve en su panel en tiempo real",
                  text:
                    "Notificación instantánea (Telegram opcional). Ve la incidencia con foto, máquina, operario, hora y prioridad. Decide en segundos si la asigna al técnico libre, la prioriza o la reprograma. Sin abrir Excel, sin colgar el teléfono.",
                },
                {
                  step: "4",
                  icon: CheckCircle2,
                  title: "El técnico cierra la OT con histórico actualizado",
                  text:
                    "El técnico abre la OT desde su móvil o desde el panel, consulta la ficha de la máquina (averías anteriores, repuestos típicos), resuelve, marca repuestos consumidos y cierra con foto del montaje. Todo queda en el histórico de la máquina automáticamente.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.step} className="flex gap-5 rounded-xl border border-border bg-card p-6 md:gap-6">
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full font-mono text-sm font-semibold"
                        style={{
                          background: "var(--intralogik-orange)",
                          color: "white",
                        }}
                      >
                        {item.step}
                      </span>
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        style={{ color: "var(--intralogik-orange-text)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Beneficios */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Lo que cambia en planta a las pocas semanas
            </h2>

            <ul className="mt-8 space-y-4 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
              <li>
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0"
                  strokeWidth={2}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  <strong className="text-foreground">Cero incidencias perdidas.</strong>{" "}
                  Toda incidencia entra por el mismo canal, queda registrada
                  con foto, hora y máquina. Las menores ya no se olvidan en
                  una libreta.
                </span>
              </li>
              <li>
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0"
                  strokeWidth={2}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  <strong className="text-foreground">El responsable deja de ser cuello de botella.</strong>{" "}
                  Si está de vacaciones, el sustituto abre el panel y ve qué
                  pasa con cada máquina sin reconstruir el contexto.
                </span>
              </li>
              <li>
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0"
                  strokeWidth={2}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  <strong className="text-foreground">Histórico vivo por máquina.</strong>{" "}
                  El técnico nuevo abre la ficha y ve cómo se ha reparado las
                  últimas seis veces. El conocimiento sale de las cabezas.
                </span>
              </li>
              <li>
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0"
                  strokeWidth={2}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  <strong className="text-foreground">Trazabilidad de oficio para auditorías.</strong>{" "}
                  Las OT cerradas con foto, hora, técnico y repuestos
                  consumidos cumplen los requisitos típicos de auditoría ISO
                  9001 / 14001 / 45001.
                </span>
              </li>
              <li>
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0"
                  strokeWidth={2}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  <strong className="text-foreground">Sin formación previa al operario.</strong>{" "}
                  Escanear un QR y rellenar tres campos es algo que cualquier
                  operario hace con un móvil prestado en la primera semana.
                  No hay curva de aprendizaje real.
                </span>
              </li>
              <li>
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0"
                  strokeWidth={2}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  <strong className="text-foreground">Conexión directa con repuestos y preventivos.</strong>{" "}
                  Cuando una incidencia consume repuestos, el sistema actualiza
                  stock automáticamente. Cuando es recurrente, el responsable
                  puede convertirla en preventivo sin trasladar datos.
                </span>
              </li>
            </ul>

            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              Caso completo:{" "}
              <Link href="/casos/fabrica-metalmecanica-cataluna">
                cómo una fábrica metalmecánica catalana sustituyó la llamada
                al móvil del responsable por este flujo en 14 días
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Por sector */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cómo encaja en distintos sectores industriales
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              El flujo de gestión de incidencias es el mismo en todos los
              sectores, pero los detalles cambian:
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  sector: "Industria alimentaria y bebidas",
                  detalle:
                    "Líneas de envasado y llenado donde la trazabilidad sanitaria obliga a documentar cada intervención. Las OT cerradas con foto del montaje y técnico responsable simplifican la auditoría sanitaria.",
                },
                {
                  sector: "Plástico (inyección y extrusión)",
                  detalle:
                    "Máquinas con preventivos por horas reales y repuestos específicos por molde. La gestión de incidencias se conecta directamente con el catálogo de moldes y los preventivos asociados.",
                },
                {
                  sector: "Metalmecánica y maquinaria",
                  detalle:
                    "Taller con CNC, prensas y soldadura mezcladas. Cada máquina tiene su propia historia de averías; la ficha vinculada al QR convierte el conocimiento del técnico veterano en patrimonio de la planta.",
                },
                {
                  sector: "Industria química y cosmética",
                  detalle:
                    "Reactores y mezcladores con trazabilidad de proceso obligatoria. La firma digital del técnico al cierre (plan Avanzado) se incorpora al expediente regulatorio sin esfuerzo extra.",
                },
              ].map((item) => (
                <div
                  key={item.sector}
                  className="rounded-xl border border-border bg-card p-5 md:p-6"
                >
                  <h3 className="text-base font-semibold text-foreground md:text-lg">
                    {item.sector}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.detalle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Sobre la gestión de incidencias en planta
            </h2>

            <div className="mt-8 space-y-5">
              {faqLd.mainEntity.map((q, i) => (
                <article
                  key={i}
                  className="rounded-xl border border-border bg-card p-5 md:p-6"
                >
                  <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                    {q.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {q.acceptedAnswer.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              Más contexto:{" "}
              <Link href="/blog/que-es-gmao">
                guía sobre qué es un GMAO, cómo elegirlo y errores típicos al
                implantar
              </Link>
              .
            </p>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
