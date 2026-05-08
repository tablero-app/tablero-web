import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  AlertCircle,
  Wrench,
  TrendingDown,
  CheckCircle2,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { ScreenshotShowcase } from "@/components/site/screenshot-showcase";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.intralogik.com";
const PATH = "/mantenimiento-preventivo-correctivo";

const TITLE = "Software de mantenimiento preventivo y correctivo industrial";
const DESCRIPTION =
  "Mantenimiento preventivo programado por calendario o por horas reales de máquina + correctivo cuando falla, en un único sistema. Plan Estándar de Intralogik desde 299 €/mes.";

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
    name: "Software de mantenimiento preventivo y correctivo industrial",
    serviceType: "GMAO · módulo de preventivos y correctivos",
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
      name: "¿Cuál es la diferencia entre mantenimiento preventivo y correctivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El correctivo se hace cuando una máquina ya ha fallado: hay que repararla para que vuelva a funcionar. El preventivo es planificado: se interviene en la máquina antes de que falle, siguiendo un calendario o un contador de horas de funcionamiento, para evitar la avería. Una planta industrial bien gestionada combina ambos: correctivo para los imprevistos y preventivo para todo lo previsible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué no basta con hacer solo mantenimiento correctivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque el correctivo es siempre más caro y más disruptivo. Una rotura inesperada para la línea, obliga a pedir repuestos urgentes con sobrecoste, alarga el tiempo de reparación y, en sectores con auditoría (alimentaria, química), puede generar problemas regulatorios. El preventivo planifica la parada, asegura el repuesto, y reduce el tiempo total de máquina parada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se programa el mantenimiento preventivo en Intralogik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Por dos criterios complementarios: (1) por calendario fijo (ej. cada 30 días, cada 6 meses) cuando la pauta de mantenimiento es periódica; (2) por horas reales de funcionamiento de máquina, cuando la pauta depende del uso (motores, herramientas de corte, líneas variables). El sistema dispara la orden preventiva automáticamente cuando se cumple el criterio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa con el preventivo si la máquina está parada por avería?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El sistema permite reprogramar el preventivo o convertirlo en parte del correctivo en curso (típico cuando la avería ya implica desmontar la pieza que tocaría revisar de todas formas). La trazabilidad queda intacta: el sistema registra qué se hizo en la intervención y reinicia el contador del próximo preventivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué plan de Intralogik se incluyen los preventivos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El módulo de preventivos está incluido en el plan Estándar (299 €/mes anual) y en el plan Avanzado (599 €/mes anual). El plan Esencial (199 €/mes) cubre incidencias, órdenes de trabajo, ficha de máquina y stock — pero no preventivos en calendario. Si arrancas con Esencial y necesitas preventivos, el cambio de plan se prorratea.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede importar un calendario de preventivos existente desde un Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La implantación de 2 semanas incluye la importación del calendario de preventivos histórico desde Excel u otro formato. Trabajamos contigo para identificar qué preventivos siguen vigentes, cuáles han quedado obsoletos por cambio de máquina y cuáles se pueden simplificar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se vincula el preventivo con el stock de repuestos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada preventivo lleva asociadas las piezas típicas de consumo (filtros, juntas, lubricantes…). Cuando se acerca la fecha del preventivo, el sistema verifica el stock; si falta alguna pieza, alerta para que se pida con tiempo. Esto evita el patrón típico de \"el preventivo toca esta semana pero no hay material, lo dejo para el mes que viene\".",
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
      name: "Mantenimiento preventivo y correctivo",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

export default function PreventivoCorrectivoPage() {
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
              <span className="text-foreground">Mantenimiento preventivo y correctivo</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Módulo Intralogik · Plan Estándar
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              Software de mantenimiento preventivo y correctivo,{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                en el mismo sistema.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Preventivos programados por calendario fijo o por horas reales
              de máquina + correctivos cuando algo falla, conectados al mismo
              histórico, ficha de máquina y stock de repuestos. Sin
              calendarios paralelos, sin Excel del responsable, sin sorpresas
              de &ldquo;esto tocaba el mes pasado&rdquo;.
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

        {/* Definición */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Preventivo, correctivo y predictivo: las tres pautas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              En mantenimiento industrial conviven tres enfoques que no se
              excluyen, se complementan:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  icon: Wrench,
                  title: "Correctivo",
                  text:
                    "Se actúa cuando la máquina ya ha fallado. Es el modo &ldquo;apagar fuegos&rdquo;. Caro, disruptivo y necesario — pero NO es el único modo.",
                },
                {
                  icon: CalendarClock,
                  title: "Preventivo",
                  text:
                    "Se actúa antes del fallo según un patrón: por calendario o por horas de funcionamiento. Es la base de cualquier planta que quiera dejar de pagar el coste real del correctivo.",
                },
                {
                  icon: TrendingDown,
                  title: "Predictivo",
                  text:
                    "Se actúa cuando los datos de la máquina (vibración, temperatura, consumo) anticipan el fallo. Requiere sensores IoT, fuera del alcance de una PYME industrial estándar hoy.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-lg"
                      style={{ background: "var(--intralogik-orange-soft)" }}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        style={{ color: "var(--intralogik-orange)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground md:text-lg">
                      {item.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              <strong className="font-semibold text-foreground">
                Intralogik cubre los dos primeros
              </strong>{" "}
              en el plan Estándar y Avanzado: correctivo (siempre, en todos los
              planes) + preventivo programado. El predictivo queda fuera —
              cuando llegue el momento, hay opciones específicas para sensores
              IoT que se pueden integrar al histórico.
            </p>
          </div>
        </section>

        {/* Por qué solo correctivo no escala */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Por qué solo correctivo no escala en una PYME industrial
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Tres patrones que se ven en plantas que confían 100% en
              correctivo:
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: AlertCircle,
                  title: "Coste real triplicado",
                  text:
                    "Cuando una máquina rompe sin aviso, el coste de la reparación incluye: (1) el repuesto urgente con sobrecoste; (2) las horas-persona en parada de línea; (3) el coste de oportunidad de la producción que no sale. Una intervención preventiva planificada cuesta entre 1/3 y 1/4 de la equivalente correctiva.",
                },
                {
                  icon: AlertCircle,
                  title: "Disrupción no acotada",
                  text:
                    "Una rotura inesperada puede llevar dos horas — o dos días si el técnico clave está de vacaciones, si el repuesto no llega, si hay que llamar al servicio técnico oficial. El preventivo planificado tiene una ventana acotada y conocida.",
                },
                {
                  icon: AlertCircle,
                  title: "Imposible de auditar",
                  text:
                    "En sectores con ISO 9001 / 14001 / 45001 o con regulación sanitaria, las auditorías exigen demostrar que el mantenimiento está bajo control. Una planta solo correctiva no puede demostrar control: el control es la ausencia de plan.",
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
              Calendario fijo o por horas reales, conectado a stock y a OT.
            </h2>

            <ol className="mt-10 space-y-6">
              {[
                {
                  step: "1",
                  title: "Definición de pautas preventivas por máquina",
                  text:
                    "Cada máquina lleva sus pautas preventivas en su ficha: qué se revisa, con qué frecuencia (días o horas), qué piezas típicas se cambian. Las pautas se importan del Excel histórico en la implantación o se construyen partiendo de las recomendaciones del fabricante.",
                },
                {
                  step: "2",
                  title: "Programación automática por calendario u horas",
                  text:
                    "El sistema dispara la orden preventiva automáticamente cuando se cumple el criterio: una fecha calendario (ej. el 15 de cada mes) o un umbral de horas (ej. cada 500 h de funcionamiento). El responsable la ve en su panel con anticipación suficiente.",
                },
                {
                  step: "3",
                  title: "Verificación de stock antes de ejecutar",
                  text:
                    "Al disparar el preventivo, el sistema verifica el stock de las piezas asociadas. Si falta alguna, alerta antes de la fecha; si todo está en orden, agenda la OT y notifica al técnico.",
                },
                {
                  step: "4",
                  title: "Ejecución, cierre con foto y reinicio del contador",
                  text:
                    "El técnico ejecuta el preventivo, cierra la OT con foto del montaje y marca repuestos consumidos. El contador se reinicia automáticamente para el próximo ciclo. Todo el histórico queda en la ficha de máquina.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-5 rounded-xl border border-border bg-card p-6 md:gap-6">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold"
                    style={{
                      background: "var(--intralogik-orange)",
                      color: "white",
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ScreenshotShowcase
          src="/screenshots/panel-incidencias-desktop.png"
          alt="Panel del responsable de mantenimiento con incidencias mezcladas — preventivos programados (engrase semestral del torno, cambio de correa por horas) junto con correctivos urgentes (parada de prensa por fuga, vibración del CNC) — todo en la misma cola con prioridad real"
          width={1440}
          height={900}
          title="Preventivos y correctivos en la misma cola"
          caption="En el panel real, los preventivos vencidos aparecen como una OT más con prioridad “Programado”. Si tu equipo los cierra, queda registrado. Si no, salen en rojo. No hay calendario paralelo."
          enlace={{
            href: "/demo/",
            texto: "Probar el panel demo (5 min, sin alta)",
            external: true,
          }}
        />

        {/* Beneficios */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Lo que cambia al pasar de solo correctivo a un mix preventivo + correctivo
            </h2>

            <ul className="mt-8 space-y-4 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
              {[
                {
                  strong: "Coste de mantenimiento total más bajo",
                  text:
                    "El coste agregado del mix preventivo + correctivo bien hecho es menor que el coste de solo correctivo, aunque parezca contraintuitivo. La diferencia está en el coste oculto (sobrecostes, paradas, urgencias) que el correctivo incurre y el preventivo evita.",
                },
                {
                  strong: "Paradas planificadas en lugar de inesperadas",
                  text:
                    "Las intervenciones programadas se hacen en cambio de turno, fin de semana o ventana acordada. Las paradas inesperadas, no.",
                },
                {
                  strong: "Vida útil de máquina más larga",
                  text:
                    "Cambiar un filtro a tiempo añade meses de vida al motor. Esperar a que el motor falle por el filtro saturado puede acabar con el motor.",
                },
                {
                  strong: "Trazabilidad para auditoría sin esfuerzo extra",
                  text:
                    "El histórico de preventivos ejecutados con foto, fecha y técnico es exactamente lo que pide cualquier auditoría ISO 9001/14001/45001 en el ámbito de mantenimiento.",
                },
                {
                  strong: "Conocimiento sale de las cabezas",
                  text:
                    "Las pautas preventivas que vivían solo en la cabeza del responsable veterano quedan documentadas. Si el responsable sale de vacaciones, el sustituto sabe qué tocaba esta semana.",
                },
                {
                  strong: "Stock optimizado por uso real",
                  text:
                    "Los preventivos consumen patrón conocido de piezas. El stock_min se ajusta solo con los datos reales de consumo en preventivo + correctivo.",
                },
              ].map((item) => (
                <li key={item.strong}>
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    <strong className="text-foreground">{item.strong}.</strong>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              Más contexto: ver{" "}
              <Link href="/blog/que-es-gmao">
                qué es un GMAO y los tres enfoques de mantenimiento
              </Link>{" "}
              o el caso real de{" "}
              <Link href="/casos/fabrica-metalmecanica-cataluna">
                una fábrica metalmecánica catalana
              </Link>{" "}
              que combinó preventivo y correctivo en el mismo sistema desde el día 1.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border py-16 md:py-20">
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
              Sobre mantenimiento preventivo y correctivo
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
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
