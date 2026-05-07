import { Fragment } from "react";
import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Pricing } from "@/components/site/pricing";
import { Cta } from "@/components/site/cta";

const SITE_URL = "https://www.intralogik.com";

// El template del root layout añade " · Intralogik" automáticamente.
const TITLE = "Precios GMAO desde 199 €/mes — sin permanencia";
const DESCRIPTION =
  "Tarifas claras para GMAO industrial PYME: planes Esencial 199 €, Estándar 299 € y Avanzado 599 € al mes (anual). Sin permanencia. Implantación 2 semanas incluida.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/precios" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/precios`,
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

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Intralogik — GMAO ligero para PYME industrial",
  description: DESCRIPTION,
  brand: { "@type": "Brand", name: "Intralogik" },
  url: `${SITE_URL}/precios`,
  image: `${SITE_URL}/opengraph-image`,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "199",
    highPrice: "599",
    offerCount: 3,
    availability: "https://schema.org/InStock",
    offers: [
      {
        "@type": "Offer",
        name: "Esencial",
        price: "199",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        url: `${SITE_URL}/precios#esencial`,
        description:
          "Plan Esencial: hasta 10 usuarios, 1 planta, hasta 50 máquinas. Form QR, panel, ficha de máquina, stock de repuestos.",
      },
      {
        "@type": "Offer",
        name: "Estándar",
        price: "299",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        url: `${SITE_URL}/precios#estandar`,
        description:
          "Plan Estándar: hasta 25 usuarios, 1 planta, hasta 150 máquinas. Incluye preventivos, dashboard operativo y exportes Excel.",
      },
      {
        "@type": "Offer",
        name: "Avanzado",
        price: "599",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        url: `${SITE_URL}/precios#avanzado`,
        description:
          "Plan Avanzado: usuarios ilimitados, multi-planta, firma digital de OT, exportes auditoría ISO, gestión de turnos.",
      },
    ],
  },
};

const faqPricingLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Intralogik al mes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan Esencial cuesta 199 € al mes (anual), el Estándar 299 € al mes (anual) y el Avanzado desde 599 € al mes (anual). Si pagas mes a mes en lugar de anual, el precio es 259 €, 389 € y 599 € respectivamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿La implantación de 2 semanas se cobra aparte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los 2 primeros plan Esencial y Estándar incluyen la implantación de 2 semanas en el precio mensual. El Avanzado incluye además la importación de catálogos (máquinas, repuestos, operarios).",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay permanencia o cláusulas de salida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay permanencia. Puedes dar de baja en cualquier momento desde el panel y el mes en curso se factura completo. Tus datos quedan exportables a Excel para que te los lleves contigo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo facturáis: mensual o anual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las dos opciones existen. El precio anual es claramente más bajo (un 23-25% de descuento aproximado frente al mensual). Si pagas anual, factura única al inicio. Si pagas mensual, factura cada mes el día equivalente al alta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay coste de configuración o setup fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Las plantillas de import, los QRs físicos para las máquinas, los materiales de arranque y la formación inicial al jefe de mantenimiento se incluyen en el precio del plan, sin coste adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa cuando supero el límite de usuarios o máquinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando te acerques al límite del plan, lo aviso por email y propongo cambio al plan superior. No hay corte ni bloqueo automático. El cambio de plan se prorratea por los días restantes del mes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Aceptáis transferencia bancaria además de tarjeta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La opción por defecto es tarjeta o domiciliación SEPA, pero el plan Avanzado y los pagos anuales pueden hacerse por transferencia bancaria contra factura. Hablamos en la primera llamada.",
      },
    },
    {
      "@type": "Question",
      name: "¿La prueba gratuita de 14 días pide tarjeta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Activamos la prueba sin tarjeta y sin compromiso. Si pasados los 14 días decides seguir, eliges plan y forma de pago. Si no, no hay cargo y los datos exportables se mantienen 30 días por si cambias de opinión.",
      },
    },
  ],
};

interface CompareRow {
  feature: string;
  esencial: string | true;
  estandar: string | true;
  avanzado: string | true;
}

const compareTable: { group: string; rows: CompareRow[] }[] = [
  {
    group: "Capacidad y alcance",
    rows: [
      { feature: "Usuarios incluidos", esencial: "10", estandar: "25", avanzado: "Ilimitados" },
      { feature: "Plantas / centros", esencial: "1", estandar: "1", avanzado: "Multi-planta consolidada" },
      { feature: "Máquinas recomendadas", esencial: "Hasta 50", estandar: "Hasta 150", avanzado: "Sin límite" },
    ],
  },
  {
    group: "Funcionalidad operativa",
    rows: [
      { feature: "Form QR para reportar incidencias", esencial: true, estandar: true, avanzado: true },
      { feature: "Panel del responsable", esencial: true, estandar: true, avanzado: true },
      { feature: "Ficha de máquina con histórico", esencial: true, estandar: true, avanzado: true },
      { feature: "Stock de repuestos con alertas", esencial: true, estandar: true, avanzado: true },
      { feature: "Mantenimientos preventivos en calendario", esencial: "—", estandar: true, avanzado: true },
      { feature: "Dashboard operativo en tiempo real", esencial: "—", estandar: true, avanzado: true },
      { feature: "Exportes a Excel", esencial: "—", estandar: true, avanzado: true },
      { feature: "Firma digital del técnico al cierre de OT", esencial: "—", estandar: "—", avanzado: true },
      { feature: "Exportes auditoría ISO 9001/14001/45001", esencial: "—", estandar: "—", avanzado: true },
      { feature: "Gestión de turnos", esencial: "—", estandar: "—", avanzado: true },
    ],
  },
  {
    group: "Implantación y soporte",
    rows: [
      { feature: "Implantación de 2 semanas", esencial: "Incluida", estandar: "Incluida", avanzado: "Incluida + import de catálogos" },
      { feature: "Plantillas, QRs y materiales de arranque", esencial: true, estandar: true, avanzado: true },
      { feature: "Formación inicial al jefe de mantenimiento", esencial: true, estandar: true, avanzado: true },
      { feature: "Tiempo de respuesta del soporte", esencial: "24 h laborales (email)", estandar: "8 h laborales (prioritario)", avanzado: "Responsable de cuenta dedicado" },
    ],
  },
  {
    group: "Comercial",
    rows: [
      { feature: "Prueba gratuita de 14 días sin tarjeta", esencial: true, estandar: true, avanzado: true },
      { feature: "Sin permanencia · baja cuando quieras", esencial: true, estandar: true, avanzado: true },
      { feature: "Datos exportables a Excel siempre", esencial: true, estandar: true, avanzado: true },
    ],
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "¿Cuánto cuesta Intralogik al mes?",
    a: "El plan Esencial cuesta 199 € al mes (anual), el Estándar 299 € al mes (anual) y el Avanzado desde 599 € al mes (anual). Si pagas mes a mes en lugar de anual, el precio es 259 €, 389 € y 599 € respectivamente.",
  },
  {
    q: "¿La implantación de 2 semanas se cobra aparte?",
    a: "No. Los planes Esencial y Estándar incluyen la implantación de 2 semanas en el precio mensual. El Avanzado incluye además la importación de catálogos (máquinas, repuestos, operarios).",
  },
  {
    q: "¿Hay permanencia o cláusulas de salida?",
    a: "No hay permanencia. Puedes dar de baja en cualquier momento desde el panel y el mes en curso se factura completo. Tus datos quedan exportables a Excel para que te los lleves contigo.",
  },
  {
    q: "¿Cómo facturamos: mensual o anual?",
    a: "Las dos opciones existen. El precio anual es claramente más bajo (un 23-25% de descuento aproximado frente al mensual). Si pagas anual, factura única al inicio. Si pagas mensual, factura cada mes el día equivalente al alta.",
  },
  {
    q: "¿Hay coste de configuración o setup fee?",
    a: "No. Las plantillas de import, los QRs físicos para las máquinas, los materiales de arranque y la formación inicial al jefe de mantenimiento se incluyen en el precio del plan, sin coste adicional.",
  },
  {
    q: "¿Qué pasa cuando supero el límite de usuarios o máquinas?",
    a: "Cuando te acerques al límite del plan, lo aviso por email y propongo cambio al plan superior. No hay corte ni bloqueo automático. El cambio de plan se prorratea por los días restantes del mes.",
  },
  {
    q: "¿Aceptamos transferencia bancaria además de tarjeta?",
    a: "Sí. La opción por defecto es tarjeta o domiciliación SEPA, pero el plan Avanzado y los pagos anuales pueden hacerse por transferencia bancaria contra factura. Hablamos en la primera llamada.",
  },
  {
    q: "¿La prueba gratuita de 14 días pide tarjeta?",
    a: "No. Activamos la prueba sin tarjeta y sin compromiso. Si pasados los 14 días decides seguir, eliges plan y forma de pago. Si no, no hay cargo y los datos exportables se mantienen 30 días por si cambias de opinión.",
  },
];

export default function PreciosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPricingLd) }}
        />

        {/* Hero */}
        <section
          aria-labelledby="precios-heading"
          className="relative pt-16 pb-12 md:pt-24 md:pb-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(80% 60% at 100% 0%, color-mix(in oklab, var(--tablero-orange-soft) 60%, transparent) 0%, transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--tablero-orange)" }}
                />
                Precios desde 199 €/mes · sin permanencia · 14 días gratis
              </span>

              <h1
                id="precios-heading"
                className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-6xl"
              >
                Precios de Intralogik GMAO,{" "}
                <span style={{ color: "var(--tablero-orange-text)" }}>
                  sin sorpresas en la factura del mes 6.
                </span>
              </h1>

              <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground md:text-lg">
                Tres planes pensados para los tres tamaños de planta industrial
                española típica. Implantación de 2 semanas incluida, sin
                permanencia, datos exportables a Excel siempre. Lo que ves aquí
                es lo que pagas — el resto, cero.
              </p>
            </div>
          </div>
        </section>

        {/* Reutiliza el componente Pricing del home (3 tarjetas + tabla SI/NO cobramos) */}
        <Pricing />

        {/* Comparativa detallada */}
        <section
          aria-labelledby="comparar-heading"
          className="border-t border-border py-20 md:py-28"
        >
          <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="inline-block h-px w-8"
                  style={{ background: "var(--tablero-orange)" }}
                />
                Comparativa
              </span>
              <h2
                id="comparar-heading"
                className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
              >
                Qué incluye cada plan, fila a fila.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Una vista lado a lado para que decidas sin tener que cruzar
                tablas en hojas distintas. Si una fila no aparece, es porque no
                te la cobramos en ningún plan.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-xl border border-border md:mt-16">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Característica
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Esencial
                      <span className="ml-2 font-mono tabular text-[10px] font-medium text-muted-foreground">
                        199 €/mes
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Estándar
                      <span
                        className="ml-2 font-mono tabular text-[10px] font-medium"
                        style={{ color: "var(--tablero-orange-text)" }}
                      >
                        299 €/mes · recomendado
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Avanzado
                      <span className="ml-2 font-mono tabular text-[10px] font-medium text-muted-foreground">
                        desde 599 €/mes
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {compareTable.map((group) => (
                    <Fragment key={group.group}>
                      <tr className="bg-card">
                        <th
                          scope="rowgroup"
                          colSpan={4}
                          className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          {group.group}
                        </th>
                      </tr>
                      {group.rows.map((row, i) => (
                        <tr key={`${group.group}-${i}`}>
                          <td className="px-5 py-4 text-sm leading-relaxed text-foreground">
                            {row.feature}
                          </td>
                          <CompareCell value={row.esencial} />
                          <CompareCell value={row.estandar} />
                          <CompareCell value={row.avanzado} />
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ específica de pricing */}
        <section
          aria-labelledby="faq-precios-heading"
          className="border-t border-border bg-secondary/30 py-20 md:py-28"
        >
          <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
            <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
              <div className="md:sticky md:top-24 md:self-start">
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="inline-block h-px w-8"
                    style={{ background: "var(--tablero-orange)" }}
                  />
                  Preguntas sobre precios
                </span>
                <h2
                  id="faq-precios-heading"
                  className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
                >
                  Lo que se pregunta antes de firmar.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Si tu pregunta no está aquí,{" "}
                  <a
                    href="#cta"
                    className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
                  >
                    escríbenos
                  </a>
                  . Si es buena, la añadimos.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((item, i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-border bg-card p-5 md:p-6"
                  >
                    <h3 className="flex gap-3 text-base font-semibold leading-snug text-foreground md:text-lg">
                      <span className="font-mono tabular text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.q}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA reutilizado */}
        <Cta />
      </main>
      <Footer />
    </>
  );
}

function CompareCell({ value }: { value: string | true }) {
  if (value === true) {
    return (
      <td className="px-5 py-4">
        <Check
          className="h-4 w-4"
          strokeWidth={2.5}
          style={{ color: "var(--tablero-orange)" }}
          aria-hidden="true"
        />
        <span className="sr-only">Sí incluido</span>
      </td>
    );
  }
  if (value === "—") {
    return (
      <td className="px-5 py-4 text-muted-foreground">
        <Minus className="h-4 w-4 text-muted-foreground/40" aria-hidden="true" />
        <span className="sr-only">No incluido</span>
      </td>
    );
  }
  return (
    <td className="px-5 py-4 text-sm leading-relaxed text-foreground">{value}</td>
  );
}
