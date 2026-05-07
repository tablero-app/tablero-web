import {
  Smartphone,
  Inbox,
  ClipboardList,
  Wrench,
  CheckCircle2,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface Paso {
  num: string;
  icon: LucideIcon;
  titulo: string;
  texto: string;
}

const pasos: Paso[] = [
  {
    num: "01",
    icon: Smartphone,
    titulo: "El operario reporta",
    texto:
      "Escanea el QR de la máquina. Describe la avería, hace foto, envía. 30 segundos.",
  },
  {
    num: "02",
    icon: Inbox,
    titulo: "El responsable recibe",
    texto:
      "Ve la incidencia en su panel con foto, máquina, línea y hora. Le asigna prioridad y técnico.",
  },
  {
    num: "03",
    icon: ClipboardList,
    titulo: "La OT entra al técnico",
    texto:
      "El técnico ve la orden de trabajo en su móvil con el historial de la máquina y el stock disponible.",
  },
  {
    num: "04",
    icon: Wrench,
    titulo: "Reparación",
    texto:
      "El técnico ejecuta. Desde el móvil registra tiempo, repuestos consumidos y resultado.",
  },
  {
    num: "05",
    icon: CheckCircle2,
    titulo: "Cierre y registro automático",
    texto:
      "Al cerrar la OT se actualizan ficha de máquina, stock e indicadores del dashboard.",
  },
  {
    num: "06",
    icon: BarChart3,
    titulo: "Datos para decidir",
    texto:
      "A final de semana, el responsable ve patrones: máquinas con más fallos, tiempos medios, repuestos más usados.",
  },
];

export function Flujo() {
  return (
    <section
      id="flujo"
      aria-labelledby="flujo-heading"
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
            Cómo funciona
          </span>

          <h2
            id="flujo-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Así se resuelve una incidencia, paso a paso.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Desde que un operario detecta una avería hasta que queda
            registrada en el historial. Sin Excel, sin llamadas, sin papel.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {pasos.map((paso, idx) => {
            const Icon = paso.icon;
            const isLast = idx === pasos.length - 1;
            return (
              <li
                key={paso.num}
                className="relative flex flex-col rounded-xl border border-border bg-card p-6 md:p-7"
              >
                {/* Connector line — desktop only, except last */}
                {!isLast && (idx + 1) % 3 !== 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 hidden h-px w-5 translate-x-full bg-border lg:block"
                  />
                )}

                <div className="flex items-center justify-between">
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
                  <span className="font-mono text-xs tabular text-muted-foreground">
                    Paso {paso.num}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {paso.titulo}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {paso.texto}
                </p>
              </li>
            );
          })}
        </ol>

        <p className="mt-12 max-w-xl text-lg font-medium leading-snug tracking-tight text-foreground md:mt-16">
          Todo lo anterior lo hacían tus equipos antes.{" "}
          <span style={{ color: "var(--intralogik-orange-text)" }}>
            Ahora queda registrado.
          </span>
        </p>
      </div>
    </section>
  );
}
