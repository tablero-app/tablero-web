const sintomas = [
  {
    veo: "El responsable de mantenimiento contesta el móvil más que un comercial.",
    cuesta:
      "2 horas al día apagando fuegos en vez de planificar.",
  },
  {
    veo: "Las averías entran por WhatsApp, llamada, papel, y a veces de palabra.",
    cuesta:
      "No queda registro. Nadie puede revisar qué pasó la semana pasada.",
  },
  {
    veo: "Cada técnico tiene su Excel. El de la oficina es otro.",
    cuesta:
      "Cuando alguien se va de vacaciones, su información se va con él.",
  },
  {
    veo: "Los partes de trabajo siguen en papel encima de la máquina.",
    cuesta:
      "Datos que no llegan nunca a un análisis ni a una auditoría.",
  },
  {
    veo: 'El stock de repuestos lo lleva el almacenero "de cabeza".',
    cuesta:
      "Una junta de 12 € que no estaba para una parada de 4 horas.",
  },
];

export function Problema() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-heading"
      className="relative border-t border-border bg-secondary/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--intralogik-orange)" }}
            />
            El problema
          </span>

          <h2
            id="problema-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Si te suena a tu día a día, el problema no es tu equipo.{" "}
            <span className="block text-muted-foreground md:inline">
              Es el sistema.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Muchas pymes industriales todavía gestionan el mantenimiento con
            llamadas, WhatsApp, papel y hojas de Excel. El resultado es siempre
            el mismo: poca trazabilidad, información dispersa y decisiones
            tomadas tarde.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hablamos cada semana con responsables de mantenimiento de PYMEs
            industriales. Estos son los 5 síntomas que se repiten en casi
            todas.
          </p>
        </div>

        {/* Tabla — desktop */}
        <div
          role="table"
          aria-label="Síntomas y su coste real"
          className="mt-12 hidden overflow-hidden rounded-xl border border-border bg-card md:block"
        >
          <div
            role="row"
            className="grid grid-cols-[3rem_minmax(0,1.1fr)_minmax(0,0.9fr)] border-b border-border bg-secondary/60"
          >
            <div className="px-4 py-3" aria-hidden="true" />
            <div
              role="columnheader"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Lo que ves cada día
            </div>
            <div
              role="columnheader"
              className="border-l border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Lo que cuesta de verdad
            </div>
          </div>

          {sintomas.map((row, idx) => (
            <div
              key={idx}
              role="row"
              className="grid grid-cols-[3rem_minmax(0,1.1fr)_minmax(0,0.9fr)] border-b border-border last:border-b-0 transition-colors hover:bg-secondary/40"
            >
              <div
                role="cell"
                aria-hidden="true"
                className="flex items-start justify-center px-4 py-6 font-mono text-xs tabular text-muted-foreground"
              >
                0{idx + 1}
              </div>
              <div
                role="cell"
                className="px-6 py-6 text-base leading-relaxed text-foreground"
              >
                {row.veo}
              </div>
              <div
                role="cell"
                className="border-l border-border px-6 py-6 text-base leading-relaxed text-muted-foreground"
              >
                {row.cuesta}
              </div>
            </div>
          ))}
        </div>

        {/* Cards apiladas — móvil */}
        <ul className="mt-10 space-y-4 md:hidden">
          {sintomas.map((row, idx) => (
            <li
              key={idx}
              className="rounded-xl border border-border bg-card p-5"
            >
              <span className="font-mono text-[10px] tabular text-muted-foreground">
                0{idx + 1}
              </span>
              <p className="mt-2 text-base font-medium leading-snug text-foreground">
                {row.veo}
              </p>
              <div className="mt-4 flex gap-3 border-t border-border pt-4">
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1 w-3 shrink-0"
                  style={{ background: "var(--intralogik-orange)" }}
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {row.cuesta}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-xl text-lg font-medium leading-snug tracking-tight text-foreground md:mt-16">
          Y mientras tanto, las paradas se siguen pagando.
        </p>
      </div>
    </section>
  );
}
