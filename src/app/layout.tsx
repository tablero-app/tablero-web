import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://tablero.app";
const DESCRIPTION =
  "Sistema de gestión de mantenimiento industrial para PYMEs españolas. De WhatsApp a Tablero en 2 semanas. Form QR, panel de incidencias, ficha de máquina, stock de repuestos, mantenimientos preventivos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tablero — El mantenimiento de tu planta, en una sola pantalla",
    template: "%s · Tablero",
  },
  description: DESCRIPTION,
  applicationName: "Tablero",
  authors: [{ name: "Eric Castillo" }],
  creator: "Eric Castillo",
  keywords: [
    "GMAO",
    "CMMS",
    "mantenimiento industrial",
    "PYME",
    "incidencias",
    "órdenes de trabajo",
    "stock repuestos",
    "preventivos",
    "España",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Tablero",
    title: "Tablero — El mantenimiento de tu planta, en una sola pantalla",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tablero — Sistema de gestión de mantenimiento industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tablero — El mantenimiento de tu planta, en una sola pantalla",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tablero",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: DESCRIPTION,
  url: SITE_URL,
  inLanguage: "es",
  offers: [
    { "@type": "Offer", name: "Esencial", price: "199", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Estándar", price: "299", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Avanzado", price: "599", priceCurrency: "EUR" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#1F2A44" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
