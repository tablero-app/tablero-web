"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const productPillars = [
  {
    href: "/gestion-incidencias-mantenimiento",
    label: "Gestión de incidencias",
    description: "Form QR + panel · 38 segundos por reporte",
  },
  {
    href: "/stock-repuestos-mantenimiento",
    label: "Stock de repuestos",
    description: "Catálogo, movimientos y alertas de mínimos",
  },
  {
    href: "/mantenimiento-preventivo-correctivo",
    label: "Preventivo y correctivo",
    description: "Calendario u horas reales · plan Estándar",
  },
  {
    href: "/form-qr-mantenimiento-fabrica",
    label: "Form QR en fábrica",
    description: "Sin app, sin login, sin formación previa",
  },
];

const links = [
  { href: "/precios", label: "Precios" },
  { href: "/casos", label: "Casos" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const productRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar dropdown al click fuera o Esc
  useEffect(() => {
    if (!productOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(e.target as Node)) {
        setProductOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [productOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-[backdrop-filter,background-color,border-color] duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[var(--container-content)] items-center justify-between px-4 md:h-18 md:px-8">
        <Link
          href="/"
          className="rounded-md text-primary"
          aria-label="Intralogik — inicio"
        >
          <Logo size={28} alt="" />
        </Link>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-1">
            {/* Producto · dropdown */}
            <li ref={productRef} className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={productOpen}
                onClick={() => setProductOpen((v) => !v)}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                Producto
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    productOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </button>

              {productOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full z-50 mt-2 w-[22rem] overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_48px_-20px_rgba(31,42,68,0.18)]"
                >
                  <ul className="p-2">
                    {productPillars.map((pillar) => (
                      <li key={pillar.href} role="none">
                        <Link
                          href={pillar.href}
                          role="menuitem"
                          onClick={() => setProductOpen(false)}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
                        >
                          <div className="text-sm font-semibold text-foreground">
                            {pillar.label}
                          </div>
                          <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {pillar.description}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border bg-secondary/50 px-3 py-2.5">
                    <Link
                      href="/#producto"
                      role="menuitem"
                      onClick={() => setProductOpen(false)}
                      className="text-xs font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Ver el producto en home →
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/#cta">Reservar demo</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menú"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm p-0">
            <SheetHeader className="border-b border-border px-6 py-4">
              <SheetTitle className="flex items-center justify-between">
                <Logo size={24} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary"
                >
                  <X className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                </button>
              </SheetTitle>
            </SheetHeader>
            <nav className="px-6 py-4" aria-label="Navegación móvil">
              {/* Producto · sección expandida en móvil */}
              <div className="mb-4">
                <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Producto
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {productPillars.map((pillar) => (
                    <li key={pillar.href}>
                      <Link
                        href={pillar.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-2.5 hover:bg-secondary"
                      >
                        <div className="text-sm font-semibold text-foreground">
                          {pillar.label}
                        </div>
                        <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {pillar.description}
                        </div>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/#producto"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      Ver el producto en home →
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="my-4 h-px bg-border" />

              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild className="w-full" size="lg">
                  <Link href="/#cta" onClick={() => setOpen(false)}>
                    Reservar demo
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
