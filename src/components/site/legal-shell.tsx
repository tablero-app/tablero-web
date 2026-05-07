import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { legalInfo, isPending } from "@/lib/legal-info";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

export function LegalShell({ eyebrow, title, intro, children }: LegalShellProps) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Última actualización: {legalInfo.fechaActualizacion}
            </p>
            {intro ? (
              <div className="mt-8 text-base leading-relaxed text-muted-foreground">{intro}</div>
            ) : null}
          </header>

          <div className="mt-12 space-y-12">{children}</div>

          <nav
            aria-label="Otras páginas legales"
            className="mt-16 border-t border-border pt-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Documentos legales
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Política de cookies
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-muted-foreground/40 hover:[&_a]:decoration-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:list-disc [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:list-decimal">
        {children}
      </div>
    </section>
  );
}

export function Subsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

/**
 * Marca visual para datos legales pendientes de completar antes de publicar
 * a producción. Renderiza un fondo amarillo + texto monoespacio para que sea
 * imposible no verlo durante una review.
 */
export function PendingValue({ value }: { value: string }) {
  if (!isPending(value)) {
    return <span>{value}</span>;
  }
  const label = value.replace(/^PENDIENTE:\s*/, "");
  return (
    <mark className="rounded-sm bg-yellow-200/80 px-1.5 py-0.5 font-mono text-[0.875em] font-medium text-yellow-950 dark:bg-yellow-300/30 dark:text-yellow-100">
      [PENDIENTE: {label}]
    </mark>
  );
}

/** Tabla 2 columnas etiqueta/valor, usada para fichas de identificación. */
export function DataTable({
  rows,
}: {
  rows: ReadonlyArray<{ label: string; value: ReactNode }>;
}) {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-3 rounded-lg border border-border bg-secondary/40 p-5 text-sm sm:grid-cols-[max-content_1fr]">
      {rows.map((row) => (
        <div key={row.label} className="contents">
          <dt className="font-semibold text-foreground">{row.label}</dt>
          <dd className="text-muted-foreground">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
