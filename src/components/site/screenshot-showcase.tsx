import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ScreenshotShowcaseProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  eyebrow?: string;
  title: string;
  caption: string;
  /** Si se rellena, añade un enlace inline tras el caption. */
  enlace?: { href: string; texto: string; external?: boolean };
  /** Sin border-top — útil cuando la sección anterior ya tiene una. */
  noBorderTop?: boolean;
  /** Fondo distinto para alternar con secciones adyacentes. */
  bg?: "default" | "secondary";
}

/**
 * Bloque visual reusable para mostrar una captura del panel real en service
 * pages. Mantiene un patrón único de marcado para que SEO de imagen y peso
 * visual sean consistentes en todo el site.
 */
export function ScreenshotShowcase({
  src,
  alt,
  width,
  height,
  eyebrow = "El panel real",
  title,
  caption,
  enlace,
  noBorderTop = false,
  bg = "default",
}: ScreenshotShowcaseProps) {
  return (
    <section
      className={[
        noBorderTop ? "" : "border-t border-border",
        bg === "secondary" ? "bg-secondary/30" : "",
        "py-16 md:py-20",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className="inline-block h-px w-8"
              style={{ background: "var(--intralogik-orange)" }}
            />
            {eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {title}
          </h2>
        </div>

        <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-card md:mt-10">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 768px, (min-width: 640px) 90vw, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-border bg-secondary/40 px-5 py-4 md:px-6 md:py-5">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {caption}
            </p>
            {enlace &&
              (enlace.external ? (
                <a
                  href={enlace.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  {enlace.texto}
                  <ArrowUpRight
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <Link
                  href={enlace.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  {enlace.texto}
                  <ArrowUpRight
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                </Link>
              ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
