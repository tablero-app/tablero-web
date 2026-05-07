import { Logo } from "./logo";
import { ctaUrls } from "@/lib/cta-config";

const productLinks = [
  { href: "#producto", label: "Módulos" },
  { href: "#flujo", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[var(--container-content)] px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size={28} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              El mantenimiento de tu planta, en una sola pantalla. GMAO ligero
              para PYME industrial española.
            </p>
            <a
              href={ctaUrls.mailto}
              className="mt-6 inline-flex items-center gap-2 rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <span className="font-mono tabular">{ctaUrls.contactEmail}</span>
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Lo leemos nosotros, no un bot. Respuesta en &lt; 24 h laborales.
            </p>
          </div>

          <nav
            aria-label="Producto"
            className="md:col-span-3 md:col-start-7"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Producto
            </h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal" className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted-foreground">
            © {year} Intralogik. Sistema de gestión de mantenimiento
            desarrollado por Eric Castillo.
          </p>
        </div>
      </div>
    </footer>
  );
}
