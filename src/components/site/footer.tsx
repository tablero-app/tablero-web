import Link from "next/link";
import { Logo } from "./logo";
import { ctaUrls } from "@/lib/cta-config";
import { legalInfo, isPending } from "@/lib/legal-info";

const productLinks = [
  { href: "/precios", label: "Precios" },
  { href: "/gestion-incidencias-mantenimiento", label: "Gestión de incidencias" },
  { href: "/stock-repuestos-mantenimiento", label: "Stock de repuestos" },
  { href: "/mantenimiento-preventivo-correctivo", label: "Preventivo y correctivo" },
  { href: "/form-qr-mantenimiento-fabrica", label: "Form QR de mantenimiento" },
  { href: "/#flujo", label: "Cómo funciona" },
  { href: "/#faq", label: "FAQ" },
];

const recursosLinks = [
  { href: "/casos", label: "Casos reales" },
  { href: "/casos/fabrica-metalmecanica-cataluna", label: "Caso · fábrica metalmecánica" },
  { href: "/blog", label: "Blog" },
  { href: "/blog/que-es-gmao", label: "¿Qué es un GMAO?" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
];

export function Footer() {
  const year = new Date().getFullYear();

  // Solo renderizamos los datos legales en el footer cuando NO son placeholders
  // (alta de autónomo pendiente). El aviso legal sí refleja todo, incluso "pendiente".
  const showNif = !isPending(legalInfo.nif);
  const showDomicilio = !isPending(legalInfo.domicilioFiscal);
  const showTelefono = !isPending(legalInfo.telefono);

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[var(--container-content)] px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
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
            {showTelefono && (
              <a
                href={`tel:${legalInfo.telefono.replace(/\s+/g, "")}`}
                className="mt-3 inline-flex items-center gap-2 rounded-md text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="font-mono tabular">{legalInfo.telefono}</span>
              </a>
            )}
            <address className="mt-6 space-y-1 not-italic text-xs leading-relaxed text-muted-foreground">
              <p className="text-foreground">{legalInfo.titular}</p>
              {showNif && <p>NIF · {legalInfo.nif}</p>}
              {showDomicilio && <p>{legalInfo.domicilioFiscal}</p>}
              <p className="pt-1">
                <Link
                  href="/aviso-legal#titular"
                  className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
                >
                  Información legal completa
                </Link>
              </p>
            </address>
          </div>

          <nav aria-label="Producto" className="md:col-span-3">
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

          <nav aria-label="Recursos" className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Recursos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {recursosLinks.map((link) => (
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

          <nav aria-label="Legal" className="md:col-span-2">
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
