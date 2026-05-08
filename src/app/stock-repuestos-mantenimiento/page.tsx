import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  AlertTriangle,
  ListChecks,
  History,
  Link2,
  CheckCircle2,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { ScreenshotShowcase } from "@/components/site/screenshot-showcase";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.intralogik.com";
const PATH = "/stock-repuestos-mantenimiento";

const TITLE = "Gestión de stock de repuestos para mantenimiento industrial";
const DESCRIPTION =
  "Catálogo de piezas, movimientos de entrada/salida, alertas de stock mínimo y bloqueo de incidencias por falta de repuesto. Las paradas por 'no había pieza' se anticipan, no se sufren.";

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
    name: "Gestión de stock de repuestos para mantenimiento industrial",
    serviceType: "GMAO · módulo de stock e inventario de repuestos",
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
      name: "¿Qué es la gestión de stock de repuestos en mantenimiento industrial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es el proceso por el cual una planta industrial controla las piezas de recambio que necesita para mantener sus máquinas operativas: catálogo de piezas, niveles de stock por pieza, entradas (compras), salidas (consumo en órdenes de trabajo), proveedores asociados y alertas cuando una pieza baja del mínimo definido. Un buen sistema evita las paradas de planta por falta de repuesto justo cuando se va a montar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el problema típico del Excel de almacén?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tres problemas: (1) el Excel se actualiza manualmente al final del día y casi nunca refleja la realidad en tiempo real; (2) no se conecta con las órdenes de trabajo, así que la pieza consumida en una reparación no se descuenta automáticamente; (3) no avisa cuando algo está bajando, así que el descubrimiento siempre es a las malas, en mitad de una avería.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funcionan las alertas de stock mínimo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada pieza del catálogo lleva un nivel de stock mínimo definido. Cuando una salida (consumo en OT, reserva, baja por rotura) deja la pieza por debajo de ese mínimo, el sistema alerta al responsable del almacén o al jefe de mantenimiento por panel y opcionalmente por Telegram. La alerta llega días antes del próximo fallo, no el día que se necesita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa cuando una incidencia necesita una pieza que no hay en stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La incidencia queda marcada como 'bloqueada por pieza' y se asocia a la pieza concreta que falta. Cuando llega el repuesto, el sistema desbloquea automáticamente y notifica al responsable. Esto evita que la incidencia se 'olvide' en el limbo del 'falta material' y reduce el tiempo total entre fallo y resolución.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es obligatorio inventariar todas las piezas para empezar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La práctica recomendada en PYME industrial es arrancar con las 50-100 piezas más críticas (las que paran línea si no están). El catálogo crece con el uso real: cada vez que un técnico marca una pieza nueva en una OT, se incorpora al catálogo. En tres meses tienes el inventario real, no el inventario teórico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede importar el catálogo de piezas desde un Excel existente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Aceptamos cualquier Excel histórico de almacén, lo limpiamos en la implantación de 2 semanas (con tu colaboración para identificar piezas duplicadas, marcas obsoletas, etc.) y queda como base del catálogo nuevo. Las piezas históricas que ya no se usan se marcan como 'descatalogadas' pero quedan en el sistema para consulta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se conecta con los proveedores para pedir repuestos automáticamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El catálogo asocia cada pieza a uno o varios proveedores con sus precios y plazos de entrega. Las alertas de stock mínimo permiten generar la solicitud de pedido al proveedor habitual con un click. La integración con ERPs comunes (SAP Business One, Sage) para envío automático de órdenes de compra está disponible en el plan Avanzado.",
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
      name: "Stock de repuestos",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

export default function StockRepuestosPage() {
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
              <span className="text-foreground">Stock de repuestos</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Módulo Intralogik · Catálogo + alertas
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              Stock de repuestos en mantenimiento industrial,{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                con alerta antes de la avería.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Catálogo vivo de piezas, movimientos de entrada y salida, niveles
              de stock mínimo y bloqueo automático de incidencias por falta de
              repuesto. Las paradas por &ldquo;no había pieza&rdquo; se
              anticipan, no se sufren.
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
              Qué es la gestión de stock de repuestos en mantenimiento
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Es el proceso por el cual una planta industrial controla las
              piezas de recambio que necesita para mantener sus máquinas
              operativas: catálogo de piezas, niveles por pieza, entradas
              (compras), salidas (consumo en órdenes de trabajo), proveedores
              asociados y alertas cuando algo baja del mínimo. Un buen sistema
              evita la parada de línea por falta de repuesto justo cuando se va
              a montar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              En la mayoría de PYMEs industriales españolas el control real
              vive en un Excel paralelo del almacén — actualizado al final del
              día, casi nunca, casi siempre por la misma persona. El descubrimiento
              de que falta una pieza ocurre justo cuando se va a usar.
            </p>
          </div>
        </section>

        {/* Por qué falla el Excel de almacén */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Por qué falla el Excel de almacén
            </h2>

            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: History,
                  title: "Desincronización con la realidad",
                  text:
                    "El Excel se actualiza al final del día, los días que se acuerdan. La salida de pieza ocurrida a las 10:00 puede tardar 8 horas en quedar reflejada — o no quedar nunca si el técnico olvida apuntarla. Lo que ves en pantalla rara vez es lo que hay en estantería.",
                },
                {
                  icon: Link2,
                  title: "Sin conexión con las órdenes de trabajo",
                  text:
                    "Cuando una OT se cierra con consumo de repuestos, el Excel del almacén no lo sabe. Hay que cruzar manualmente lista de OTs cerradas con apuntes del almacén. En la práctica, no se hace.",
                },
                {
                  icon: AlertTriangle,
                  title: "Descubrimiento siempre a destiempo",
                  text:
                    "El Excel no avisa de nada. La falta de pieza se descubre cuando el técnico sube al almacén con la OT en la mano. Resultado: la avería pasa de 2 horas a 2 días con sobrecoste de pedido urgente.",
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
              Catálogo vivo, alertas anticipadas, vinculación con OT.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              El stock se conecta con el resto del sistema. Lo que pasa en
              planta queda reflejado al instante en almacén; lo que falta en
              almacén bloquea la OT y avisa.
            </p>

            <ol className="mt-10 space-y-6">
              {[
                {
                  step: "1",
                  icon: ListChecks,
                  title: "Catálogo de piezas con stock_min por pieza",
                  text:
                    "Cada pieza tiene ficha con código, descripción, ubicación física, proveedor habitual, precio, plazo de entrega y nivel mínimo. El nivel se ajusta con el uso real — al principio se estima, después se afina con datos.",
                },
                {
                  step: "2",
                  icon: History,
                  title: "Movimientos de entrada y salida automáticos",
                  text:
                    "Cada compra es una entrada. Cada OT cerrada que consume piezas genera salida automática. La estantería y el sistema dicen lo mismo a las dos horas, no a los dos días.",
                },
                {
                  step: "3",
                  icon: AlertTriangle,
                  title: "Alertas cuando una pieza baja del mínimo",
                  text:
                    "El sistema avisa al responsable de almacén (y opcionalmente al jefe de mantenimiento) por panel y por Telegram cuando una pieza cruza su umbral mínimo. La alerta llega días antes del próximo uso, no el día.",
                },
                {
                  step: "4",
                  icon: Link2,
                  title: "Bloqueo de incidencias por pieza faltante",
                  text:
                    "Cuando una OT necesita una pieza que no está en stock, queda 'bloqueada por pieza'. Al recibir el repuesto, la OT se desbloquea automáticamente y el responsable recibe notificación. Las incidencias dejan de perderse en el limbo del 'falta material'.",
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

        <ScreenshotShowcase
          src="/screenshots/panel-pieza-detalle-desktop.png"
          alt="Ficha de pieza Junta tórica 25x3 Viton con stock cero y alerta visible 'Stock por debajo del mínimo. Considerar reposición' en el panel de Intralogik"
          width={1440}
          height={900}
          title="Stock crítico, visible al instante"
          caption="Cuando una pieza baja del mínimo (o llega a cero, como aquí), aparece resaltada en la lista y la ficha individual muestra alerta directa. Adiós al patrón “no había junta”."
          enlace={{
            href: "/demo#/piezas",
            texto: "Probar el módulo de stock en el demo",
            external: true,
          }}
        />

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
                  <strong className="text-foreground">Las paradas por &ldquo;no había pieza&rdquo; se anticipan.</strong>{" "}
                  Las alertas de stock mínimo llegan días antes del próximo
                  fallo, no en mitad de una reparación.
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
                  <strong className="text-foreground">Pedidos planificados, no urgentes.</strong>{" "}
                  Pasar de pedir &ldquo;urgente con sobrecoste&rdquo; a pedir
                  con dos días de plazo reduce coste de transporte y reaprovisionamiento.
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
                  <strong className="text-foreground">Trazabilidad real de consumos por máquina.</strong>{" "}
                  Cada pieza se asocia a la OT que la consumió y a la máquina
                  donde se montó. Las máquinas que más consumen se identifican
                  solas y permiten replantear preventivos.
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
                  <strong className="text-foreground">Optimización del capital inmovilizado.</strong>{" "}
                  Pasados tres meses, los datos reales permiten ajustar stock_min
                  por pieza: bajar el de las que rotan poco, subir el de las
                  que se gastan más rápido. El capital invertido en almacén
                  baja sin perder cobertura.
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
                  <strong className="text-foreground">Sin Excel paralelo del almacenero.</strong>{" "}
                  El sistema que usan operarios, técnicos y responsable es el
                  mismo que ve el almacenero. La doble carga desaparece.
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
                  <strong className="text-foreground">Trazabilidad para auditoría.</strong>{" "}
                  La cadena pieza → proveedor → fecha → técnico → máquina queda
                  documentada de oficio. Aplicable directamente a auditorías
                  ISO 9001 y a justificación de gasto contable.
                </span>
              </li>
            </ul>

            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              Para entender el flujo completo (incidencia → OT → consumo de
              pieza → cierre con histórico), ver{" "}
              <Link href="/gestion-incidencias-mantenimiento">
                gestión de incidencias en mantenimiento industrial
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
              El módulo de stock funciona igual en todos, pero el peso de cada
              tipo de pieza cambia:
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  sector: "Industria alimentaria y bebidas",
                  detalle:
                    "Líneas de envasado con piezas de desgaste rápido (cuchillas, juntas, sensores). El stock_min ajustado por pieza evita las paradas más comunes y reduce el número de pedidos urgentes.",
                },
                {
                  sector: "Plástico (inyección y extrusión)",
                  detalle:
                    "Repuestos específicos por molde y por máquina. La asociación pieza-máquina-molde permite ver de un vistazo qué consumibles tocan al pedir el siguiente lote y planificar paradas programadas.",
                },
                {
                  sector: "Metalmecánica y maquinaria",
                  detalle:
                    "Catálogo amplio (200+ piezas típicas) con consumos irregulares. El histórico real de los primeros tres meses convierte el stock_min teórico en stock_min realista por pieza.",
                },
                {
                  sector: "Industria química y cosmética",
                  detalle:
                    "Trazabilidad completa de cada repuesto consumido en cada equipo. La cadena pieza → proveedor → lote es directamente exportable para auditoría de proceso.",
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
              Sobre la gestión de stock de repuestos
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

            <div className="mt-10 flex items-center gap-3 rounded-xl border border-border bg-card p-5 md:p-6">
              <Package
                className="h-6 w-6 shrink-0"
                strokeWidth={1.75}
                style={{ color: "var(--intralogik-orange)" }}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Caso real:{" "}
                <Link href="/casos/fabrica-metalmecanica-cataluna">
                  cómo una fábrica metalmecánica catalana eliminó las paradas
                  por &ldquo;no había pieza&rdquo;
                </Link>{" "}
                con catálogo + alertas + bloqueo automático de incidencias.
              </p>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
