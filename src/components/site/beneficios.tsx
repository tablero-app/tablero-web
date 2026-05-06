import { HardHat, ClipboardCheck, Building2, type LucideIcon } from "lucide-react";

const cambios = [
  {
    hoy: "El responsable de mantenimiento recibe llamadas todo el día.",
    sistema:
      "Las averías entran a un panel, con prioridad y máquina. Decide qué se hace primero.",
  },
  {
    hoy: "Cuando un técnico se va de vacaciones, su información se va con él.",
    sistema:
      "Toda la información vive en la ficha de la máquina. Cualquier técnico la consulta.",
  },
  {
    hoy: 'Las paradas se "gestionan" cuando ocurren.',
    sistema:
      "Las paradas empiezan a aparecer en datos. Se anticipan las que se repiten.",
  },
  {
    hoy: "El stock se conoce de cabeza. Faltan repuestos cada mes.",
    sistema:
      "Alertas automáticas cuando un repuesto baja del mínimo.",
  },
  {
    hoy: 'Los preventivos se hacen "cuando da tiempo".',
    sistema:
      "Los preventivos vencidos salen en rojo. No se olvidan.",
  },
  {
    hoy: "Las auditorías son una semana de buscar papeles.",
    sistema:
      "Cada OT, cada repuesto, cada preventivo está registrado y exportable.",
  },
];

interface Rol {
  icon: LucideIcon;
  titulo: string;
  bullets: string[];
}

const roles: Rol[] = [
  {
    icon: HardHat,
    titulo: "Para el operario en planta",
    bullets: [
      "Reporta una avería en 30 segundos sin llamar a nadie.",
      "No tiene que justificar varias veces lo que ha pasado.",
      "No instala apps en su móvil personal.",
      "Ve sus partes de trabajo organizados, no perdidos en papel.",
    ],
  },
  {
    icon: ClipboardCheck,
    titulo: "Para el responsable de mantenimiento",
    bullets: [
      "Deja de contestar llamadas para apagar fuegos.",
      "Tiene un panel único con todo lo que pasa en planta.",
      "Sabe en cualquier momento el estado de cada máquina.",
      "Puede demostrar a dirección lo que su equipo está haciendo.",
    ],
  },
  {
    icon: Building2,
    titulo: "Para la dirección",
    bullets: [
      "Ve los datos reales de mantenimiento por primera vez.",
      "Identifica qué máquinas están haciendo daño al negocio.",
      'Reduce el conocimiento "atrapado en personas".',
      "Tiene un sistema preparado para auditorías ISO sin esfuerzo extra.",
    ],
  },
];

export function Beneficios() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        {/* V1 · Tabla Hoy → Con el sistema */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--tablero-orange)" }}
            />
            Lo que cambia
          </span>

          <h2
            id="beneficios-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Lo que cambia,{" "}
            <span style={{ color: "var(--tablero-orange)" }}>en concreto.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            No te vamos a prometer un porcentaje de mejora. Te vamos a contar
            qué cambia en tu día a día desde la primera semana.
          </p>
        </div>

        {/* Tabla — desktop */}
        <div
          role="table"
          aria-label="Antes y después de implantar el sistema"
          className="mt-12 hidden overflow-hidden rounded-xl border border-border bg-card md:block"
        >
          <div
            role="row"
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-secondary/60"
          >
            <div
              role="columnheader"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Hoy
            </div>
            <div
              role="columnheader"
              className="border-l border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Con Tablero
            </div>
          </div>

          {cambios.map((row, idx) => (
            <div
              key={idx}
              role="row"
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] border-b border-border last:border-b-0"
            >
              <div
                role="cell"
                className="px-6 py-6 text-base leading-relaxed text-muted-foreground"
              >
                {row.hoy}
              </div>
              <div
                role="cell"
                className="border-l border-border px-6 py-6 text-base leading-relaxed text-foreground"
              >
                {row.sistema}
              </div>
            </div>
          ))}
        </div>

        {/* Cards apiladas — móvil */}
        <ul className="mt-10 space-y-4 md:hidden">
          {cambios.map((row, idx) => (
            <li
              key={idx}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="bg-secondary/60 px-5 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Hoy
                </span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {row.hoy}
                </p>
              </div>
              <div className="px-5 py-4">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--tablero-orange-text)" }}
                >
                  Con Tablero
                </span>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  {row.sistema}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-14">
          Ninguno de estos cambios depende de que tu equipo cambie.{" "}
          <span className="text-foreground">
            Solo de que tenga una herramienta donde meter lo que ya hace.
          </span>
        </p>

        {/* V3 · Lo que gana cada uno */}
        <div className="mt-20 md:mt-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--tablero-orange)" }}
              />
              Lo que gana cada uno
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-[1.15] tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
              Implantar un sistema de mantenimiento solo funciona si gana todo
              el mundo.
            </h3>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Operarios, responsables y dirección.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {roles.map((rol) => {
              const Icon = rol.icon;
              return (
                <li
                  key={rol.titulo}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 md:p-7"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ background: "var(--tablero-orange-soft)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      style={{ color: "var(--tablero-orange)" }}
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {rol.titulo}
                  </h4>

                  <ul className="mt-4 space-y-2.5">
                    {rol.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-1 w-1.5 shrink-0 rounded-full bg-foreground/35"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <p className="mt-12 max-w-2xl text-lg font-medium leading-snug tracking-tight text-foreground md:mt-16">
            Si alguno de los tres no gana, el sistema acaba abandonado.{" "}
            <span style={{ color: "var(--tablero-orange-text)" }}>
              Por eso este es el único punto que no negociamos.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
