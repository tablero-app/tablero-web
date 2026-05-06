import { Check } from "lucide-react";

interface Plan {
  nombre: string;
  precioAnual: number;
  precioMensual: number;
  paraQuien: string;
  bullets: string[];
  destacado?: boolean;
  ctaLabel: string;
}

const planes: Plan[] = [
  {
    nombre: "Esencial",
    precioAnual: 199,
    precioMensual: 259,
    paraQuien: "Plantas de 1 línea o taller pequeño, hasta 50 máquinas.",
    bullets: [
      "Hasta 10 usuarios",
      "1 planta",
      "Form QR + panel + ficha de máquina + stock de repuestos",
      "Implantación de 2 semanas incluida",
      "Soporte por email · respuesta en 24 h laborales",
    ],
    ctaLabel: "Empezar con Esencial",
  },
  {
    nombre: "Estándar",
    precioAnual: 299,
    precioMensual: 389,
    paraQuien: "Plantas medianas, 1-2 líneas, hasta 150 máquinas.",
    bullets: [
      "Hasta 25 usuarios",
      "1 planta",
      "Todo lo del plan Esencial + preventivos en calendario, dashboard operativo, exportes a Excel",
      "Implantación de 2 semanas incluida",
      "Soporte prioritario · respuesta en 8 h laborales",
    ],
    destacado: true,
    ctaLabel: "Empezar con Estándar",
  },
  {
    nombre: "Avanzado",
    precioAnual: 599,
    precioMensual: 599,
    paraQuien:
      "Grupos industriales con 2-5 plantas o industria con auditoría regulatoria fuerte.",
    bullets: [
      "Usuarios ilimitados",
      "Multi-planta con dashboard consolidado",
      "Todo lo del plan Estándar + firma digital de OTs, exportes para auditoría ISO, gestión de turnos",
      "Implantación e import de catálogos incluida",
      "Soporte dedicado · responsable de cuenta asignado",
    ],
    ctaLabel: "Hablar con ventas",
  },
];

const cobramos = [
  { si: "El plan que elijas, mensual o anual.", no: "La implantación de 2 semanas." },
  {
    si: "Add-ons opcionales si los necesitas (ej. integración con tu ERP).",
    no: "El alta y configuración de catálogos.",
  },
  {
    si: "Un Plus de soporte si quieres respuesta en menos de 4 h.",
    no: "El soporte por email.",
  },
  { si: null, no: "Las actualizaciones del sistema." },
  { si: null, no: "La formación inicial al jefe de mantenimiento." },
  { si: null, no: "Los QRs, plantillas de import y materiales de arranque." },
];

export function Pricing() {
  return (
    <section
      id="precios"
      aria-labelledby="pricing-heading"
      className="border-t border-border bg-secondary/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--tablero-orange)" }}
            />
            Precios
          </span>

          <h2
            id="pricing-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Precios claros.{" "}
            <span className="text-muted-foreground">
              Sin &ldquo;pide demo para saber&rdquo;.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            3 planes pensados para los 3 tamaños de planta industrial española
            típica. Sin licencias por usuario que se disparan cuando crece tu
            equipo. Sin sorpresas en la factura del mes 4.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:items-stretch md:gap-6">
          {planes.map((plan) => (
            <li
              key={plan.nombre}
              className={`relative flex flex-col rounded-2xl border bg-card p-6 md:p-8 ${
                plan.destacado
                  ? "border-foreground/20 shadow-[0_24px_48px_-24px_rgba(31,42,68,0.18)] md:scale-[1.02]"
                  : "border-border"
              }`}
            >
              {plan.destacado && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
                  style={{ background: "var(--tablero-orange)" }}
                >
                  Recomendado
                </span>
              )}

              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {plan.nombre}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.paraQuien}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1.5">
                  {plan.nombre === "Avanzado" && (
                    <span className="text-sm font-medium text-muted-foreground">
                      desde
                    </span>
                  )}
                  <span className="text-5xl font-bold tracking-tighter text-foreground tabular md:text-[3.25rem]">
                    {plan.precioAnual}
                    <span className="text-3xl">€</span>
                  </span>
                  <span className="text-sm text-muted-foreground">/mes</span>
                </div>
                {plan.nombre !== "Avanzado" ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Anual ·{" "}
                    <span className="font-mono tabular">
                      {plan.precioMensual} €/mes
                    </span>{" "}
                    si pagas mensual
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Pago anual · personalizado por nº de plantas
                  </p>
                )}
              </div>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {plan.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={2.5}
                      style={{ color: "var(--tablero-orange)" }}
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="#cta"
                  className={`flex h-11 w-full items-center justify-center rounded-md px-4 text-sm font-semibold transition-colors ${
                    plan.destacado
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 md:mt-12 md:px-6">
          {[
            "14 días gratis sin tarjeta",
            "Sin permanencia, das de baja cuando quieras",
            "Tus datos exportables a Excel en cualquier momento",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Check
                className="h-4 w-4 shrink-0"
                strokeWidth={2.5}
                style={{ color: "var(--tablero-orange)" }}
                aria-hidden="true"
              />
              {item}
            </span>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-14">
          ¿Tu planta no encaja en ninguno?{" "}
          <a
            href="#cta"
            className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
          >
            Llámanos.
          </a>{" "}
          <span className="text-foreground">
            Las plantas raras nos gustan.
          </span>
        </p>

        {/* V3 · Lo que SÍ pagas / Lo que NO cobramos aparte */}
        <div className="mt-20 md:mt-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--tablero-orange)" }}
              />
              Sin extras escondidos
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-[1.15] tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
              Lo que SÍ pagas.{" "}
              <span className="text-muted-foreground">
                Y lo que nunca te vamos a cobrar aparte.
              </span>
            </h3>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              En CMMS hay una regla no escrita: el precio de la web es la mitad
              del precio real. La otra mitad llega como &ldquo;consultoría&rdquo;,
              &ldquo;configuración inicial&rdquo;, &ldquo;horas de soporte&rdquo;
              o &ldquo;módulos extra&rdquo;. Aquí no funciona así.
            </p>
          </div>

          {/* Tabla — desktop */}
          <div
            role="table"
            aria-label="Lo que pagas y lo que no se cobra aparte"
            className="mt-10 hidden overflow-hidden rounded-xl border border-border bg-card md:block"
          >
            <div
              role="row"
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-secondary/60"
            >
              <div
                role="columnheader"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground"
              >
                Lo que pagas
              </div>
              <div
                role="columnheader"
                className="border-l border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Lo que NO te cobramos aparte
              </div>
            </div>
            {cobramos.map((row, idx) => (
              <div
                key={idx}
                role="row"
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border-b border-border last:border-b-0"
              >
                <div
                  role="cell"
                  className="px-6 py-5 text-base leading-relaxed text-foreground"
                >
                  {row.si ?? <span className="text-foreground/30">—</span>}
                </div>
                <div
                  role="cell"
                  className="border-l border-border px-6 py-5 text-base leading-relaxed text-muted-foreground"
                >
                  {row.no}
                </div>
              </div>
            ))}
          </div>

          {/* Cards apiladas — móvil */}
          <ul className="mt-8 space-y-4 md:hidden">
            {cobramos.map((row, idx) => (
              <li
                key={idx}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                {row.si && (
                  <div className="px-5 py-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">
                      Lo que pagas
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {row.si}
                    </p>
                  </div>
                )}
                <div
                  className={`bg-secondary/60 px-5 py-4 ${
                    row.si ? "border-t border-border" : ""
                  }`}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    NO te cobramos aparte
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {row.no}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl text-lg font-medium leading-snug tracking-tight text-foreground md:mt-14">
            Si alguien te ha vendido un CMMS y la factura del mes 6 te
            sorprendió,{" "}
            <span style={{ color: "var(--tablero-orange-text)" }}>
              sabes por qué esta tabla está aquí.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
