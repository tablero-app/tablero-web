import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { socialProfiles, founderProfiles } from "@/lib/social-profiles";
import { legalInfo, isPending } from "@/lib/legal-info";
import "./globals.css";

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

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
    canonical: `${SITE_URL}/`,
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
    url: `${SITE_URL}/`,
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

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Intralogik",
  legalName: legalInfo.titular,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph-image`,
    inLanguage: "es",
  },
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  email: legalInfo.email,
  ...(isPending(legalInfo.telefono) ? {} : { telephone: legalInfo.telefono }),
  founder: {
    "@type": "Person",
    name: "Eric Castillo",
    jobTitle: "Fundador de Intralogik",
    ...(founderProfiles.length > 0 ? { sameAs: [...founderProfiles] } : {}),
  },
  foundingDate: "2026",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: [
    "GMAO",
    "CMMS",
    "mantenimiento industrial",
    "gestión de incidencias",
    "órdenes de trabajo",
    "stock de repuestos",
    "mantenimiento preventivo",
    "PYME industrial",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: legalInfo.email,
      ...(isPending(legalInfo.telefono) ? {} : { telephone: legalInfo.telefono }),
      areaServed: "ES",
      availableLanguage: ["Spanish", "es"],
    },
  ],
  ...(socialProfiles.length > 0 ? { sameAs: [...socialProfiles] } : {}),
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        {HUBSPOT_PORTAL_ID ? (
          <Script
            id="hs-script-loader"
            src={`https://js-eu1.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
