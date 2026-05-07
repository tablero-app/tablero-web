import {
  QrCode,
  LayoutDashboard,
  Wrench,
  Boxes,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";

interface Modulo {
  num: string;
  icon: LucideIcon;
  titulo: string;
  lead: string;
  bullets: string[];
  detalle: string;
}

const modulos: Modulo[] = [
  {
    num: "01",
    icon: QrCode,
    titulo: "Gestión de incidencias de mantenimiento desde el móvil",
    lead: "El operario reporta una avería en 30 segundos. Sin login, sin app, sin formación.",
    bullets: [
      "Escanea el QR pegado en la máquina con la cámara del móvil.",
      "Se abre un formulario corto: qué pasa, foto, urgencia.",
      "Lo envía y vuelve a su trabajo. La incidencia ya está en el panel del responsable.",
    ],
    detalle:
      "Funciona como web, no como app. No hay que instalar nada, no hay que dar de alta a cada operario, no hay nadie que se quede fuera porque \"no tiene cuenta de email\".",
  },
  {
    num: "02",
    icon: LayoutDashboard,
    titulo: "Panel de incidencias y órdenes de trabajo de mantenimiento",
    lead: "El responsable de mantenimiento ve todo lo que pasa en la planta, en una sola pantalla.",
    bullets: [
      "Cada incidencia entra al panel con su prioridad, su máquina y su hora.",
      "Conviértela en orden de trabajo, asigna técnico, fija plazo.",
      "Filtra por estado, por máquina, por línea, por técnico.",
    ],
    detalle:
      "Las prioridades no son \"alta/media/baja\" abstractas. Son las que tu planta usa de verdad: parada de línea, riesgo de parada, mantenimiento programado, mejora.",
  },
  {
    num: "03",
    icon: Wrench,
    titulo: "Ficha de máquina con historial de mantenimiento",
    lead: "Toda la vida de cada máquina, en un solo sitio.",
    bullets: [
      "Historial completo de averías, reparaciones y cambios de repuesto.",
      "Documentación técnica adjunta (manuales, planos, fichas).",
      "Horas de funcionamiento, próximo mantenimiento, frecuencia de fallo.",
    ],
    detalle:
      "Cuando el técnico nuevo llega a la línea 3, ya no pregunta a sus compañeros qué le pasó la última vez. Lo lee él mismo en la ficha.",
  },
  {
    num: "04",
    icon: Boxes,
    titulo: "Control de stock de repuestos para mantenimiento",
    lead: "Saber lo que hay, lo que falta y lo que está a punto de faltar.",
    bullets: [
      "Entradas y salidas con la OT que las generó.",
      "Mínimos por repuesto y alertas automáticas cuando se acercan.",
      "Asociación con la máquina: qué se cambia normalmente en esta línea.",
    ],
    detalle:
      "No es un almacén ERP. Es un control operativo de los repuestos que mueves de verdad cada semana, sin SAPs ni códigos imposibles.",
  },
  {
    num: "05",
    icon: CalendarCheck,
    titulo: "Mantenimiento preventivo y correctivo registrado",
    lead: "Lo que tienes que hacer cada mes, cada 500 horas o cada 10.000 ciclos. Antes de que se rompa.",
    bullets: [
      "Calendario de preventivos por máquina, por frecuencia o por contador.",
      "Check-list al ejecutar, con foto y firma del técnico.",
      "Aviso al responsable cuando un preventivo vence o se salta.",
    ],
    detalle:
      "Los preventivos no son una lista que mueres por mantener. Cuando vence uno, aparece como una OT más en el panel del responsable. Si tu equipo lo cierra, queda registrado. Si no, sale en rojo.",
  },
];

const ademas = [
  "Notificaciones automáticas a operarios y responsables vía Telegram.",
  "Dashboard operativo: OTs abiertas, tiempo medio de reparación, máquinas con más fallos.",
  "Multi-planta, multi-usuario, exportaciones a Excel.",
  "Acceso desde cualquier dispositivo, sin instalar nada.",
];

export function Solucion() {
  return (
    <section
      id="producto"
      aria-labelledby="solucion-heading"
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
            La solución
          </span>

          <h2
            id="solucion-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Cinco piezas. Las que tu equipo va a usar{" "}
            <span style={{ color: "var(--tablero-orange)" }}>de verdad.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hemos visto demasiados sistemas de mantenimiento abandonados a los
            3 meses por estar llenos de funciones que nadie pedía. Por eso,
            esto es lo que hace nuestro sistema. Ni una cosa más, ni una
            menos.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {modulos.map((mod) => {
            const Icon = mod.icon;
            return (
              <li
                key={mod.num}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "var(--tablero-orange-soft)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      style={{ color: "var(--tablero-orange)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="font-mono text-xs tabular text-muted-foreground">
                    Módulo {mod.num}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                  {mod.titulo}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {mod.lead}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {mod.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-1 w-1.5 shrink-0 rounded-full bg-foreground/35"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <p className="rounded-md border-l-2 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
                     style={{ borderLeftColor: "var(--tablero-orange)", background: "var(--secondary)" }}>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-foreground">
                      El detalle que importa
                    </span>
                    <span className="mt-1.5 block">{mod.detalle}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 rounded-xl border border-dashed border-border bg-secondary/30 p-6 md:mt-12 md:p-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Y además
          </h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2 md:gap-x-10">
            {ademas.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1 w-3 shrink-0"
                  style={{ background: "var(--tablero-orange)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
