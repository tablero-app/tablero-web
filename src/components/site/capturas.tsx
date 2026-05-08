import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Captura {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  enlace?: { href: string; texto: string };
  destacada?: boolean;
}

const capturas: Captura[] = [
  {
    src: "/screenshots/panel-incidencias-desktop.png",
    alt: "Panel del responsable de mantenimiento de Intralogik con 12 incidencias industriales en distintos estados y prioridades, ordenadas por urgencia",
    width: 1440,
    height: 900,
    caption:
      "Panel del responsable: una sola pantalla con todo lo que pasa en planta, ordenado por prioridad real (parada de línea, riesgo, programado).",
    enlace: { href: "/gestion-incidencias-mantenimiento", texto: "Ver módulo de incidencias" },
    destacada: true,
  },
  {
    src: "/screenshots/panel-piezas-stock-desktop.png",
    alt: "Listado de stock de repuestos de mantenimiento industrial con alertas visuales de stock mínimo en filtro hidráulico y juntas tóricas",
    width: 1440,
    height: 900,
    caption:
      "Stock de repuestos con alertas automáticas. Las piezas por debajo del mínimo aparecen resaltadas — la próxima parada por “no había junta” se anticipa, no se sufre.",
    enlace: { href: "/stock-repuestos-mantenimiento", texto: "Ver módulo de stock" },
  },
  {
    src: "/screenshots/panel-pieza-detalle-desktop.png",
    alt: "Ficha de pieza con stock cero y alerta visible de reposición urgente en el panel de Intralogik",
    width: 1440,
    height: 900,
    caption:
      "Ficha de pieza con histórico, máquinas asociadas y alerta de stock cero. Cada pieza vinculada a las OT que la consumieron, sin Excel paralelo.",
  },
  {
    src: "/screenshots/panel-incidencias-mobile.png",
    alt: "Panel de incidencias de Intralogik en vista móvil — el responsable de mantenimiento ve la planta desde su smartphone",
    width: 390,
    height: 844,
    caption:
      "El mismo panel, en el móvil del responsable. Ve y prioriza incidencias desde la línea, sin sentarse en la oficina.",
  },
];

export function Capturas() {
  return (
    <section
      id="capturas"
      aria-labelledby="capturas-heading"
      className="border-t border-border py-14 md:py-20"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--intralogik-orange)" }}
            />
            El panel real
          </span>

          <h2
            id="capturas-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Lo que ve el responsable de mantenimiento{" "}
            <span style={{ color: "var(--intralogik-orange-text)" }}>
              cada mañana.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Capturas reales del panel funcionando. Datos ficticios de una PYME
            metalmecánica para no exponer al cliente piloto.{" "}
            <Link
              href="/demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
            >
              Probar el panel demo
            </Link>{" "}
            (5 min, sin alta).
          </p>
        </div>

        {/* Grid: captura destacada arriba ancho completo, después 3 en grid */}
        <div className="mt-12 space-y-6 md:mt-16">
          {/* Destacada */}
          {capturas
            .filter((c) => c.destacada)
            .map((c) => (
              <figure
                key={c.src}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={c.width}
                    height={c.height}
                    sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 100vw"
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <figcaption className="border-t border-border bg-secondary/40 px-5 py-4 md:px-6 md:py-5">
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {c.caption}
                  </p>
                  {c.enlace && (
                    <Link
                      href={c.enlace.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                    >
                      {c.enlace.texto}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </figcaption>
              </figure>
            ))}

          {/* Resto en grid 3 cols con la mobile más estrecha */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.65fr)]">
            {capturas
              .filter((c) => !c.destacada)
              .map((c) => (
                <figure
                  key={c.src}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="relative">
                    <Image
                      src={c.src}
                      alt={c.alt}
                      width={c.width}
                      height={c.height}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="border-t border-border bg-secondary/40 px-5 py-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {c.caption}
                    </p>
                    {c.enlace && (
                      <Link
                        href={c.enlace.href}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-foreground"
                      >
                        {c.enlace.texto}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
