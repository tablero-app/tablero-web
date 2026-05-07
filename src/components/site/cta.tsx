import { ArrowRight, Video, Sparkles } from "lucide-react";
import { ctaUrls } from "@/lib/cta-config";

export function Cta() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative border-t border-border bg-secondary/30 py-14 md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--intralogik-orange-soft) 70%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--intralogik-orange)" }}
            />
            Empezar
          </span>

          <h2
            id="cta-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            Dos formas de empezar.{" "}
            <span style={{ color: "var(--intralogik-orange)" }}>
              Tú eliges el ritmo.
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Has llegado hasta aquí. Probablemente ya sabes si esto encaja o no.
            Lo que sigue es la primera acción concreta — no más copy.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {/* Demo guiada */}
          <article className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 md:p-10">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: "var(--intralogik-orange-soft)" }}
              >
                <Video
                  className="h-5 w-5"
                  strokeWidth={1.75}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Ver demo guiada
              </h3>
            </div>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              30 minutos por videollamada. Te enseñamos el sistema funcionando
              con un caso real, respondemos tus dudas concretas y vemos si
              encaja con tu planta.
            </p>

            <div className="mt-auto pt-8">
              <a
                href={ctaUrls.reservarDemo}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Reservar demo
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Calendly · 30 min · sin compromiso
              </p>
            </div>
          </article>

          {/* Probar 14 días gratis */}
          <article className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 md:p-10">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: "var(--intralogik-orange-soft)" }}
              >
                <Sparkles
                  className="h-5 w-5"
                  strokeWidth={1.75}
                  style={{ color: "var(--intralogik-orange)" }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Probar 14 días gratis
              </h3>
            </div>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Acceso al sistema configurado para tu planta. Sin tarjeta, sin
              permanencia. Tu equipo lo prueba en su día real.
            </p>

            <div className="mt-auto pt-8">
              <a
                href={ctaUrls.empezarPrueba}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Empezar prueba
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                14 días · sin tarjeta · cancelas cuando quieras
              </p>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border bg-card px-5 py-5 text-center md:mt-14 md:px-8 md:py-6">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            ¿Prefieres email? Escríbenos a{" "}
            <a
              href={ctaUrls.mailto}
              className="font-mono tabular font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
            >
              {ctaUrls.contactEmail}
            </a>
            . Lo leemos nosotros, no un bot. Respondemos en menos de 24 h
            laborales.
          </p>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:mt-14">
          Lo único que no recomendamos:{" "}
          <span className="text-foreground">
            dejar este tab abierto y volver &ldquo;la semana que viene&rdquo;.
          </span>{" "}
          Las plantas que más han ganado con el sistema son las que decidieron
          probar el mismo día que lo descubrieron.
        </p>
      </div>
    </section>
  );
}
