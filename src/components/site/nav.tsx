"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/#producto", label: "Producto" },
  { href: "/#flujo", label: "Cómo funciona" },
  { href: "/#precios", label: "Precios" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <Logo size={28} />
        </Link>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-1">
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
