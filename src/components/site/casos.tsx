import { Wheat, Boxes, Cog, FlaskConical, type LucideIcon } from "lucide-react";

interface Caso {
  icon: LucideIcon;
  sector: string;
  descripcion: string;
  cambio: string;
}

const casos: Caso[] = [
  {
    icon: Wheat,
    sector: "Industria alimentaria y bebidas",
    descripcion:
      "Líneas de envasado, llenado y etiquetado. Paradas que cuestan miles de euros la hora y requisitos sanitarios que obligan a registrar cada intervención.",
    cambio:
      "La trazabilidad de cada repuesto y cada limpieza queda registrada de oficio. Las auditorías sanitarias dejan de ser una semana de buscar papeles.",
  },
  {
    icon: Boxes,
    sector: "Plástico — inyección y extrusión",
    descripcion:
      "Máquinas grandes con preventivos por horas de funcionamiento, repuestos específicos por molde y un técnico de mantenimiento por turno.",
    cambio:
      "Cada molde tiene su historial. Los preventivos se cuentan por horas reales (no por calendario) y los repuestos se asocian a la máquina que se los come.",
  },
  {
    icon: Cog,
    sector: "Metalmecánica y maquinaria",
    descripcion:
      "Taller con CNC, prensas, soldadura y máquinas mixtas heredadas de hace 20 años. Conocimiento atrapado en dos o tres técnicos veteranos.",
    cambio:
      "El técnico nuevo abre la ficha de la máquina y ve cómo se ha reparado las últimas 8 veces. El conocimiento sale de las personas y entra en la planta.",
  },
  {
    icon: FlaskConical,
    sector: "Industria química y cosmética",
    descripcion:
      "Reactores, mezcladores y líneas de envasado pequeñas. Trazabilidad de proceso obligatoria, intervenciones con firma del técnico.",
    cambio:
      "Firma digital en cada OT, foto del montaje, registro de repuestos consumidos y técnico responsable. Listo para auditoría sin esfuerzo extra.",
  },
];

export function Casos() {
  return (
    <section
      id="casos"
      aria-labelledby="casos-heading"
      className="border-t border-border bg-secondary/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--intralogik-orange)" }}
            />
            Dónde encaja
          </span>

          <h2
            id="casos-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Plantas que ya ven el mantenimiento{" "}
            <span style={{ color: "var(--intralogik-orange)" }}>
              de otra forma.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Empezamos con PYMEs industriales españolas de 30 a 150
            trabajadores. Estos son los 4 perfiles donde el sistema encaja
            prácticamente sin tunear.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {casos.map((caso) => {
            const Icon = caso.icon;
            return (
              <li
                key={caso.sector}
                className="flex flex-col rounded-xl border border-border bg-card p-6 md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "var(--intralogik-orange-soft)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      style={{ color: "var(--intralogik-orange)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                    {caso.sector}
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {caso.descripcion}
                </p>

                <div className="mt-auto pt-6">
                  <div className="rounded-md border-l-2 px-4 py-3"
                       style={{ borderLeftColor: "var(--intralogik-orange)", background: "var(--secondary)" }}>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">
                      Lo que cambia
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {caso.cambio}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-14">
          ¿Tu sector no está en la lista? Si tienes una planta industrial con
          30-150 trabajadores y un mantenimiento que ya no cabe en Excel,{" "}
          <a
            href="#cta"
            className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
          >
            hablemos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
