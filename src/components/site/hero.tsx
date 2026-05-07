import { ArrowRight, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero V3 · "De WhatsApp a un sistema de mantenimiento en 2 semanas"
 * Asymmetric split (anti-center bias, DESIGN_VARIANCE=8).
 * Left: text + CTAs. Right: composed mockup with timeline.
 */
export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Subtle off-white background gradient toward bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 100% 0%, color-mix(in oklab, var(--tablero-orange-soft) 60%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-[var(--container-content)] grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        {/* Left column — text */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--tablero-orange)" }}
            />
            GMAO ligero · PYME industrial española
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-6xl">
            De WhatsApp a un sistema de mantenimiento en{" "}
            <span className="whitespace-nowrap">2 semanas.</span>
          </h1>

          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Incidencias, órdenes de trabajo, repuestos e historial por máquina.
            Sin consultoría, sin proyecto IT, sin un PowerPoint de 80 diapositivas.
            Para empresas industriales que necesitan organizarse ya.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <a href="#cta">
                Ver demo guiada (30 min)
                <ArrowRight
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#precios">Ver planes y precios</a>
            </Button>
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Sistema en producción con cliente piloto del sector industrial.
            <br className="hidden sm:block" />
            Caso completo en breve.
          </p>
        </div>

        {/* Right column — composed mockup, asymmetric */}
        <div className="relative">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Floating timeline pill — top-left, slightly outside */}
      <div className="absolute -left-2 -top-3 z-10 hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm sm:inline-flex">
        <span className="font-mono tabular text-foreground">Día 1</span>
        <span className="h-px w-3 bg-border" aria-hidden="true" />
        <span className="font-mono tabular">Día 7</span>
        <span className="h-px w-3 bg-border" aria-hidden="true" />
        <span
          className="font-mono tabular font-semibold"
          style={{ color: "var(--tablero-orange-text)" }}
        >
          Día 14
        </span>
      </div>

      {/* Phone frame */}
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[0_24px_48px_-20px_rgba(31,42,68,0.18)]">
        {/* Phone status bar */}
        <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-foreground">
          <span className="font-mono tabular">07:42</span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="ml-1 h-2 w-3 rounded-sm border border-foreground" />
          </div>
        </div>

        {/* Form preview */}
        <div className="px-5 pt-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <QrCode
              className="h-3.5 w-3.5"
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="font-mono tabular">intralogik.com/r/L4-ENV01</span>
          </div>

          <p className="mt-4 text-lg font-semibold leading-tight tracking-tight text-foreground">
            Línea 4 · Envasadora
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Reportar incidencia
          </p>

          <div className="mt-5 space-y-3">
            <Field label="Qué pasa" required>
              <span className="text-sm text-foreground">
                Se ha parado, hace ruido raro al arrancar
              </span>
            </Field>

            <Field label="Foto">
              <div className="flex h-16 items-center justify-center rounded-md border border-dashed border-border bg-secondary/40">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  IMG_0742.jpg
                </span>
              </div>
            </Field>

            <Field label="Prioridad">
              <div className="flex gap-1.5">
                <PriorityChip active>Parada de línea</PriorityChip>
                <PriorityChip>Riesgo</PriorityChip>
                <PriorityChip>Programado</PriorityChip>
              </div>
            </Field>
          </div>
        </div>

        {/* Sticky bottom CTA */}
        <div className="absolute inset-x-0 bottom-0 border-t border-border bg-card px-5 py-4">
          <div className="flex h-11 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
            Enviar incidencia
          </div>
          <p className="mt-2 text-center text-[10px] text-muted-foreground">
            38 segundos. Vuelves a tu puesto.
          </p>
        </div>
      </div>

      {/* Floating notification chip — bottom-right outside */}
      <div className="absolute -bottom-4 -right-2 z-10 hidden max-w-[14rem] items-start gap-2 rounded-xl border border-border bg-card p-3 shadow-[0_18px_32px_-16px_rgba(31,42,68,0.22)] sm:flex">
        <span
          aria-hidden="true"
          className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full"
          style={{ background: "var(--state-critical)" }}
        />
        <div className="text-left">
          <p className="text-[11px] font-semibold leading-tight text-foreground">
            Línea 4 · parada
          </p>
          <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
            Asignada a David · 07:43
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-border bg-card p-3">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-foreground/60">
            *
          </span>
        )}
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function PriorityChip({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-muted-foreground"
      }`}
    >
      {children}
    </span>
  );
}
