import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const SITE_URL = "https://www.intralogik.com";
const DESCRIPTION =
  "GMAO ligero para PYMEs industriales. Pasa de WhatsApp y Excel a un sistema completo en 2 semanas: incidencias, máquinas, stock, preventivos. Desde 199€/mes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Software de mantenimiento industrial sencillo | Intralogik",
    template: "%s · Intralogik",
  },
  description: DESCRIPTION,
  applicationName: "Intralogik",
  authors: [{ name: "Eric Castillo" }],
  creator: "Eric Castillo",
  alternates: {
    canonical: "/",
  },
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
    siteName: "Intralogik",
    title: "Software de mantenimiento industrial sencillo | Intralogik",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Software de mantenimiento industrial sencillo | Intralogik",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </head>
      <body className="min-h-[100dvh] flex flex-col antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
