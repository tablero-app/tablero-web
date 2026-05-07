import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Problema } from "@/components/site/problema";
import { Solucion } from "@/components/site/solucion";
import { Flujo } from "@/components/site/flujo";
import { Beneficios } from "@/components/site/beneficios";
import { Casos } from "@/components/site/casos";
import { Implantacion } from "@/components/site/implantacion";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

const SITE_URL = "https://www.intralogik.com";
const DESCRIPTION =
  "GMAO ligero para PYMEs industriales. Pasa de WhatsApp y Excel a un sistema completo en 2 semanas: incidencias, máquinas, stock, preventivos. Desde 199€/mes.";

const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Intralogik",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  inLanguage: "es",
  provider: { "@id": `${SITE_URL}/#organization` },
  offers: [
    {
      "@type": "Offer",
      name: "Esencial",
      price: "199",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Estándar",
      price: "299",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "Avanzado",
      price: "599",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
  ],
};

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Funciona si tenemos mala cobertura WiFi en planta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El form móvil de Intralogik funciona con datos del operario o con WiFi. Si la cobertura cae justo al enviar, el sistema reintenta automáticamente cuando vuelve la red. La incidencia no se pierde.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si un operario no tiene smartphone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cualquier móvil moderno con cámara basta — el form va por web, no por app. Si en alguna sección de planta no hay móviles personales, dejamos un par de tablets fijas con un QR de \"modo planta\".",
      },
    },
    {
      "@type": "Question",
      name: "¿Tenemos que cambiar nuestros procedimientos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El sistema se adapta a cómo trabajáis hoy: tus prioridades, tus turnos, tus técnicos, tu organigrama. Lo único que cambia es que la información queda registrada en lugar de perdida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Lo podemos integrar con nuestro ERP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Mediante exportes automáticos en CSV/Excel, API REST en el plan Avanzado, o conector a medida si tu ERP necesita algo específico. La integración sale como add-on en el plan Avanzado o como proyecto puntual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa con los datos si dejamos de pagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Te los exportas a Excel cuando quieras, también el día que te das de baja. No tenemos rehén. Tu histórico es tuyo siempre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Lo podemos probar antes de comprar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. 14 días gratis con tu propia planta, no con datos de demo. Sin tarjeta, sin permanencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intralogik es una aplicación web móvil — funciona desde cualquier navegador del operario. Si la cobertura cae justo al enviar la incidencia, el form la guarda y la reintenta cuando vuelve la red, así que no se pierde. El panel del responsable de mantenimiento sí necesita conexión, pero hoy las oficinas la tienen siempre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es compatible con auditorías ISO 9001 / 14001 / 45001?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Intralogik registra incidencias, órdenes de trabajo, repuestos consumidos, técnico responsable, fecha de cierre e historial por máquina. Esa trazabilidad es exactamente lo que pide una auditoría ISO 9001, 14001 o 45001 — sobre todo si hoy dependes de partes en papel o Excel. En el plan Avanzado, las OTs incluyen firma digital del técnico al cierre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hace falta un informático en plantilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El sistema lo configuramos nosotros la primera vez y luego lo gestiona el jefe de mantenimiento desde el panel.",
      },
    },
    {
      "@type": "Question",
      name: "¿Y si tenemos varias plantas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el plan Avanzado de Intralogik soporta multi-planta. Cada planta entra cuando está lista, no hay que arrancar las cinco a la vez. Dirección ve el dashboard consolidado, cada jefe de planta ve solo la suya.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problema />
        <Solucion />
        <Flujo />
        <Beneficios />
        <Casos />
        <Implantacion />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
