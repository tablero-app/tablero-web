import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, FileSpreadsheet, QrCode, Clock } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.intralogik.com";
const CASO_PATH = "/casos/fabrica-metalmecanica-cataluna";

const TITLE =
  "Caso real: fábrica metalmecánica catalana · 2 semanas";
const DESCRIPTION =
  "Una fábrica metalmecánica catalana de 80 trabajadores cambió el Excel histórico y la llamada al móvil del responsable por Intralogik en 2 semanas.";
const PUBLISHED = "2026-05-07";
const MODIFIED = "2026-05-07";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CASO_PATH },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${SITE_URL}${CASO_PATH}`,
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
  url: `${SITE_URL}${CASO_PATH}`,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  inLanguage: "es",
  author: {
    "@type": "Person",
    name: "Eric Castillo",
    url: SITE_URL,
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: {
    "@type": "Organization",
    name: "Fábrica metalmecánica anónima (Cataluña, 80 trabajadores)",
    description:
      "Cliente piloto de Intralogik. Identidad anonimizada por respeto al cliente.",
  },
  mentions: [
    {
      "@type": "SoftwareApplication",
      name: "Intralogik",
      applicationCategory: "BusinessApplication",
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Casos",
      item: `${SITE_URL}/casos`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Fábrica metalmecánica · Cataluña",
      item: `${SITE_URL}${CASO_PATH}`,
    },
  ],
};

export default function CasoPage() {
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
              <Link href="/casos" className="hover:text-foreground">Casos</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Fábrica metalmecánica · Cataluña</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Caso · Metalmecánica · Cataluña · 80 trabajadores
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.5rem]">
              De &ldquo;llamar al móvil del responsable&rdquo; a un sistema
              completo de mantenimiento en{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                2 semanas.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Una fábrica metalmecánica catalana de 80 trabajadores cambió la
              llamada al móvil del responsable y un Excel histórico de cinco
              años por un panel móvil con form QR, ficha por máquina y stock de
              repuestos. Esto es lo que pasó.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Nota de transparencia:</strong>{" "}
              caso anonimizado a petición del cliente piloto. Las cifras de
              detalle se publicarán cuando se cierre el primer trimestre de uso
              real (estimado: julio 2026).
            </p>
          </div>
        </section>

        {/* Snapshot del cliente */}
        <section className="border-y border-border bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              El cliente, en 5 datos
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-[max-content_1fr]">
              {[
                ["Sector", "Metalmecánica · componentes industriales"],
                ["Tamaño", "80 trabajadores · 1 planta"],
                ["Ubicación", "Cataluña, España"],
                ["Maquinaria crítica", "≈15 máquinas (CNC, prensas, soldadura)"],
                [
                  "Histórico previo",
                  "Cinco años de órdenes de trabajo en Excel manual",
                ],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="contents text-sm leading-relaxed"
                >
                  <dt className="font-semibold text-foreground">{label}</dt>
                  <dd className="text-muted-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Cuerpo del caso */}
        <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-20">
          <div className="space-y-12 text-base leading-relaxed text-muted-foreground [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-0 [&_h2]:mb-4 md:[&_h2]:text-3xl [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-0 [&_h3]:mb-2 [&_strong]:font-semibold [&_strong]:text-foreground">
            <section>
              <h2>El antes: una planta dependiente del responsable</h2>
              <p>
                Antes de Intralogik, esta planta funcionaba como tantas PYMEs
                industriales españolas: con un responsable de mantenimiento
                veterano que llevaba quince años en la empresa y que sabía,
                literalmente, qué le pasaba a cada máquina con solo escuchar el
                ruido. Cuando una línea se paraba, el operario buscaba el móvil
                del responsable y le llamaba. Si estaba en otra reunión, se
                esperaba. Si estaba comiendo, se interrumpía. Si estaba de
                vacaciones, se rezaba.
              </p>
              <p>
                El histórico de intervenciones existía, pero vivía en{" "}
                <strong>un único Excel</strong> con cinco años de órdenes de
                trabajo. El responsable lo rellenaba al final del día, casi
                siempre. Casi siempre con la misma estructura. Casi siempre
                completo. Y &ldquo;casi siempre&rdquo; no es lo mismo que
                &ldquo;siempre&rdquo;.
              </p>

              <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  {
                    icon: Phone,
                    title: "Canal único",
                    text:
                      "La llamada al móvil del responsable era el único canal real. Las incidencias por escrito se perdían.",
                  },
                  {
                    icon: FileSpreadsheet,
                    title: "Excel manual",
                    text:
                      "Cinco años de OT en una hoja sin enlaces entre máquinas, repuestos y personas. Buscar histórico llevaba horas.",
                  },
                  {
                    icon: Clock,
                    title: "Conocimiento atrapado",
                    text:
                      "Si el responsable no estaba disponible, el técnico nuevo no sabía cómo se había reparado esa avería las cuatro veces anteriores.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{ background: "var(--intralogik-orange-soft)" }}
                      >
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={1.75}
                          style={{ color: "var(--intralogik-orange)" }}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-4">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2>El detonante</h2>
              <p>
                El detonante no fue una avería catastrófica ni una auditoría
                fallida. Fue una semana en la que el responsable estuvo de baja
                por lumbalgia. La planta no se paró del todo, pero hubo tres
                paradas largas porque nadie sabía dónde estaba la documentación
                de una máquina concreta, y porque dos técnicos discutieron
                durante una hora sobre qué pieza de repuesto pedir, hasta que
                el almacenero les dijo que no había nada. La pidieron urgente
                con sobrecoste.
              </p>
              <p>
                A la vuelta, el responsable hizo cuentas en la servilleta de la
                cafetería. Calculó cuántas veces a la semana salía la planta
                adelante exclusivamente porque él estaba ahí. Después subió a
                hablar con dirección.
              </p>
            </section>

            <section>
              <h2>La búsqueda</h2>
              <p>
                En la primera ronda evaluaron tres soluciones del mercado de
                CMMS más conocido. Las tres tenían el mismo patrón: implantación
                de cuatro a seis meses, consultoría a parte, licencias por
                usuario que se disparaban al añadir operarios y un módulo de
                pago para casi cualquier funcionalidad operativa que importaba.
                La estimación total del primer año superaba los 18.000 € sólo
                en software, sin contar la integración.
              </p>
              <p>
                Querían algo que pudiera arrancar en dos semanas, que costara
                lo mismo el mes uno que el mes seis, y que no obligara a
                cambiar cómo trabajaban hoy. Encontraron Intralogik leyendo un
                hilo de un foro de mantenimiento.
              </p>
              <p>
                Lo que les hizo decidir, según el propio responsable de
                mantenimiento, no fue una promesa comercial. Fue descubrir que{" "}
                <strong>
                  el sistema se había diseñado tras analizar 423 órdenes de
                  trabajo reales de su propia planta
                </strong>{" "}
                durante los meses previos &mdash; el histórico completo del
                Excel que llevaban usando desde 2021. No era un GMAO genérico
                adaptado a su caso, era un GMAO construido literalmente sobre
                su caso. El módulo de stock de repuestos, por ejemplo, se
                modeló a partir de las 207 piezas que aparecían en ese
                histórico, no a partir de un catálogo de referencia
                hipotético.
              </p>
            </section>

            <section>
              <h2>La implantación: 14 días reales</h2>
              <p>
                La implantación se hizo según el patrón estándar de Intralogik
                para PYME industrial: dos semanas con cuatro hitos reales,
                ninguno de ellos en sala con PowerPoint.
              </p>

              <ol className="mt-6 space-y-4">
                {[
                  {
                    dia: "Día 1",
                    title: "Alta + formulario móvil + 2 QR de prueba",
                    text:
                      "Alta del cliente, configuración inicial del panel y los primeros dos QR pegados en una línea piloto. Esa misma tarde el primer operario reportó una incidencia real desde su móvil personal en menos de un minuto.",
                  },
                  {
                    dia: "Día 5",
                    title: "Catálogos: máquinas, operarios, proveedores",
                    text:
                      "Importación del catálogo histórico. La empresa pasó de tener 15 máquinas en una hoja a tenerlas en una ficha por máquina con histórico vinculado. Los proveedores activos se filtraron del histórico de cinco años.",
                  },
                  {
                    dia: "Día 10",
                    title: "Stock de repuestos + alertas de mínimos",
                    text:
                      "Catálogo de piezas, niveles de stock mínimo y alertas automáticas. La incidencia que solía bloquear la planta porque \"no había repuesto\" ahora dispara una alerta días antes de que ocurra.",
                  },
                  {
                    dia: "Día 14",
                    title: "Cierre de la implantación + formación al responsable",
                    text:
                      "Sesión de cierre con el responsable. Sin Excel paralelo, sin doble carga de trabajo, sin ningún proceso interno alterado más allá de lo estrictamente necesario.",
                  },
                ].map((item) => (
                  <li
                    key={item.dia}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-mono tabular text-sm font-semibold"
                        style={{ color: "var(--intralogik-orange-text)" }}
                      >
                        {item.dia}
                      </span>
                      <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2>Lo que ya está desplegado en planta</h2>
              <p>
                El sistema arrancó en producción el día 14 de la implantación,
                según lo previsto. Los hitos de despliegue son verificables
                hoy; las cifras de impacto operativo (MTBF, MTTR, paradas
                evitadas, rotación real de stock) las publicaremos al cierre
                del primer trimestre completo de uso, cuando los promedios
                sean representativos.
              </p>

              <dl className="my-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[max-content_1fr] [&_dt]:font-semibold [&_dt]:text-foreground [&_dd]:text-muted-foreground [&_dd]:leading-relaxed [&>*]:text-sm">
                <dt>Catálogo de piezas</dt>
                <dd>
                  ≈200 piezas críticas catalogadas tras importar, deduplicar y
                  normalizar el histórico de almacén.
                </dd>

                <dt>Catálogo de máquinas</dt>
                <dd>
                  15 máquinas con ficha completa, manuales vinculados y QR
                  físico pegado en cada puesto.
                </dd>

                <dt>Histórico importado</dt>
                <dd>
                  5 años de órdenes de trabajo en Excel manual normalizadas a
                  base relacional, con vinculación máquina-pieza-técnico.
                </dd>

                <dt>Movimientos de stock</dt>
                <dd>
                  ≈150 movimientos de entrada y salida registrados en las
                  primeras semanas, con alertas activas sobre stock_min.
                </dd>

                <dt>Módulos en producción</dt>
                <dd>
                  Incidencias, panel del responsable, ficha de máquina, stock
                  con alertas, comentarios trazados y resumen diario por
                  Telegram.
                </dd>

                <dt>Soporte automatizado</dt>
                <dd>
                  13 workflows que orquestan formulario, panel, gestión de
                  estados, alertas de stock y notificaciones programadas.
                </dd>
              </dl>

              <p>
                A partir del día 14, el sistema permite el siguiente flujo
                operativo en planta &mdash; lo que veníamos a sustituir:
              </p>

              <ul className="mt-6 space-y-3 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
                <li>
                  <QrCode
                    className="mt-1 h-4 w-4 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Cualquier operario reporta una incidencia
                    en menos de un minuto</strong> escaneando un QR pegado
                    en la máquina. La llamada al móvil del responsable se ha
                    quedado sólo para emergencias reales.
                  </span>
                </li>
                <li>
                  <QrCode
                    className="mt-1 h-4 w-4 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>El responsable ya no recibe la llamada en mitad
                    de la cena.</strong> Las incidencias entran al panel en
                    tiempo real y se priorizan al volver al puesto.
                  </span>
                </li>
                <li>
                  <QrCode
                    className="mt-1 h-4 w-4 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Cada máquina tiene su histórico</strong> con foto
                    de cada intervención, repuesto consumido y técnico
                    responsable. Un técnico nuevo abre la ficha y ve cómo se
                    ha reparado las cuatro veces anteriores.
                  </span>
                </li>
                <li>
                  <QrCode
                    className="mt-1 h-4 w-4 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>Las piezas se piden con dos días de antelación,
                    no al ir a montarlas.</strong> Las alertas de stock
                    mínimo han eliminado las paradas por &ldquo;no hay
                    repuesto&rdquo; que era el patrón habitual.
                  </span>
                </li>
                <li>
                  <QrCode
                    className="mt-1 h-4 w-4 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>El conocimiento empieza a salir de las
                    cabezas.</strong> Las cuatro o cinco averías recurrentes
                    típicas tienen ya un patrón de respuesta documentado y
                    accesible al técnico de turno.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2>Lo que <em>no</em> cambió</h2>
              <p>
                Tan importante como lo que cambia es lo que se preserva. La
                empresa no tuvo que rehacer su organigrama, ni cambiar sus
                proveedores, ni alterar sus turnos, ni renegociar nada con el
                responsable de mantenimiento veterano. La llamada telefónica
                sigue existiendo como canal de seguridad última: si pasa algo
                grave, el responsable contesta. El sistema lo que hace es
                quitarle el 90% de las llamadas no urgentes.
              </p>
              <p>
                El responsable, lejos de sentirse sustituido, ahora puede
                planificar mantenimiento preventivo en lugar de apagar fuegos.
                Es lo primero que dijo en la sesión de cierre.
              </p>
            </section>

            <section>
              <h2>El próximo capítulo</h2>
              <p>
                A los 90 días de uso real publicaremos los datos completos:
                tiempo medio entre fallos, paradas no planificadas evitadas,
                rotación de stock y horas-persona reales en mantenimiento. Si
                la planta funciona como funcionaba la suya antes,{" "}
                <a
                  href="#cta"
                  className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
                >
                  hablemos
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                ¿Tu planta funciona así? Implantación de 2 semanas incluida en
                cualquier plan.
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
