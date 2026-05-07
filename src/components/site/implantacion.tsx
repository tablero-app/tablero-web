import { Check, X } from "lucide-react";

interface Semana {
  num: string;
  titulo: string;
  bullets: { texto: string; emphasis?: boolean }[];
}

const semanas: Semana[] = [
  {
    num: "Semana 1",
    titulo: "Levantar la información que ya tienes",
    bullets: [
      {
        texto:
          "Una llamada de 60 minutos con tu jefe de mantenimiento para entender la planta.",
      },
      {
        texto:
          "Te enviamos una plantilla simple para listar máquinas, líneas, técnicos y proveedores. La rellenáis con lo que ya tenéis a mano.",
      },
      {
        texto:
          "Configuramos el sistema con tus catálogos reales. No con datos de demo.",
      },
      {
        texto:
          "Tu equipo trabaja como siempre. Solo dedican 2-3 horas en total esta semana.",
        emphasis: true,
      },
    ],
  },
  {
    num: "Semana 2",
    titulo: "Desplegar y arrancar",
    bullets: [
      { texto: "Generamos los QRs de las máquinas y te los enviamos imprimibles." },
      {
        texto:
          "1 hora de formación con tu jefe de mantenimiento (es todo lo que necesita).",
      },
      {
        texto:
          "30 minutos en planta con los operarios: les enseñamos cómo escanear el QR. Más no hace falta.",
      },
      {
        texto:
          "Día 14: la primera incidencia entra por el formulario móvil. El sistema está vivo.",
        emphasis: true,
      },
    ],
  },
];

const noHacemos = [
  "Migrar 5 años de Excels viejos. Empezamos limpios; el histórico se construye desde el día 1.",
  "Pedir que cambies tu organigrama, tus turnos o tus procedimientos. El sistema se adapta a cómo trabajáis hoy.",
  "Cobrar consultoría aparte. Las 2 semanas están incluidas en el precio.",
];

const reparto = [
  {
    tu: "Una llamada de 60 minutos con el jefe de mantenimiento.",
    nosotros:
      "Tomamos notas, mapeamos tu planta, identificamos los catálogos a configurar.",
  },
  {
    tu: "Rellenar una plantilla con máquinas, técnicos y proveedores (lo que ya tenéis a mano).",
    nosotros: "Configurar el sistema con tus catálogos. Probarlo internamente.",
  },
  {
    tu: "Pegar los QRs en las máquinas (30 minutos, 1 persona).",
    nosotros: "Generar e imprimir los QRs, prepararlos por línea.",
  },
  {
    tu: "1 hora de formación con el jefe de mantenimiento.",
    nosotros: "Llevarla. Dejarle el manual de uso.",
  },
  {
    tu: "30 minutos en planta con los operarios.",
    nosotros: "Estar contigo el día del arranque. Resolver dudas en directo.",
  },
];

export function Implantacion() {
  return (
    <section
      id="implantacion"
      aria-labelledby="implantacion-heading"
      className="border-t border-border py-14 md:py-20"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        {/* V1 · Calendario semana a semana */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--intralogik-orange)" }}
            />
            Implantación
          </span>

          <h2
            id="implantacion-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            En marcha en{" "}
            <span style={{ color: "var(--intralogik-orange)" }}>2 semanas.</span>{" "}
            Sin sorpresas.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Sin proyecto IT, sin consultoría aparte, sin un PowerPoint de 80
            diapositivas. Esto es exactamente lo que pasa los 14 días desde que
            firmas hasta que el primer operario reporta una avería desde el
            móvil.
          </p>
        </div>

        {/* Semana 1 + Semana 2 */}
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {semanas.map((s, idx) => (
            <article
              key={s.num}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="font-mono text-xs tabular uppercase tracking-wider"
                  style={{ color: "var(--intralogik-orange-text)" }}
                >
                  {s.num}
                </span>
                <span className="font-mono text-xs tabular text-muted-foreground">
                  · días {idx === 0 ? "1-7" : "8-14"}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                {s.titulo}
              </h3>

              <ul className="mt-6 space-y-4">
                {s.bullets.map((b, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 leading-relaxed ${
                      b.emphasis
                        ? "rounded-md bg-secondary/60 px-3 py-2.5 text-sm font-medium text-foreground"
                        : "text-sm text-muted-foreground"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-2 inline-block h-1 w-1.5 shrink-0 rounded-full ${
                        b.emphasis ? "bg-foreground" : "bg-foreground/35"
                      }`}
                    />
                    {b.texto}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Lo que NO hacemos */}
        <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6 md:mt-12 md:p-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Lo que NO hacemos (intencionadamente)
          </h3>
          <ul className="mt-4 space-y-3">
            {noHacemos.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <X
                  className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-14">
          A las 2 semanas tienes el sistema funcionando.{" "}
          <span className="text-foreground">
            Los meses siguientes son afinarlo con datos reales — pero el cambio
            operativo ya está hecho.
          </span>
        </p>

        {/* V2 · Tú haces / Nosotros hacemos */}
        <div className="mt-20 md:mt-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Reparto del trabajo
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-[1.15] tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
              Tu equipo no para de trabajar.{" "}
              <span className="text-muted-foreground">
                Nosotros hacemos el resto.
              </span>
            </h3>
          </div>

          {/* Tabla — desktop */}
          <div
            role="table"
            aria-label="Reparto de tareas durante la implantación"
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
                Lo que hace tu equipo
              </div>
              <div
                role="columnheader"
                className="border-l border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Lo que hacemos nosotros
              </div>
            </div>
            {reparto.map((r, idx) => (
              <div
                key={idx}
                role="row"
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border-b border-border last:border-b-0"
              >
                <div
                  role="cell"
                  className="px-6 py-5 text-base leading-relaxed text-foreground"
                >
                  <Check
                    className="mr-2 inline h-4 w-4 align-text-bottom"
                    strokeWidth={2.5}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  {r.tu}
                </div>
                <div
                  role="cell"
                  className="border-l border-border px-6 py-5 text-base leading-relaxed text-muted-foreground"
                >
                  {r.nosotros}
                </div>
              </div>
            ))}
          </div>

          {/* Cards apiladas — móvil */}
          <ul className="mt-8 space-y-4 md:hidden">
            {reparto.map((r, idx) => (
              <li
                key={idx}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="px-5 py-4">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                    <Check
                      className="h-3.5 w-3.5"
                      strokeWidth={2.5}
                      style={{ color: "var(--intralogik-orange)" }}
                      aria-hidden="true"
                    />
                    Tu equipo
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                    {r.tu}
                  </p>
                </div>
                <div className="border-t border-border bg-secondary/60 px-5 py-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Nosotros
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {r.nosotros}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl rounded-md border border-border bg-secondary/40 px-5 py-4 text-sm leading-relaxed text-foreground md:mt-12">
            <span className="font-semibold">
              Total horas de tu equipo en las 2 semanas:
            </span>{" "}
            ~4 horas el jefe de mantenimiento, ~30 minutos cada operario,
            0 horas el resto.
          </p>

          <p className="mt-10 max-w-2xl text-lg font-medium leading-snug tracking-tight text-foreground md:mt-12">
            Si esta tabla te parece poca cosa,{" "}
            <span style={{ color: "var(--intralogik-orange-text)" }}>
              probablemente has visto demasiadas implantaciones que no tenían
              que haber sido tan caras.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
