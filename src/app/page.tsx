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
      name: "¿En qué se diferencia Intralogik de un CMMS clásico tipo Maximo, Infor EAM o SAP PM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maximo, Infor EAM y SAP PM son productos enterprise diseñados para corporaciones multi-planta con equipo IT propio. Intralogik es un GMAO ligero específicamente para PYME industrial española de 30-150 trabajadores. La diferencia se nota en cuatro ejes: implantación (2 semanas vs 4-9 meses), coste anual (2.400-7.200 € vs 20.000-150.000 €), curva de aprendizaje (días vs meses) y dependencia de IT propio (ninguna vs equipo IT dedicado). Si tu planta encaja en el perfil Intralogik, un CMMS enterprise está sobreequipado y dispara coste sin retorno proporcional.",
      },
    },
    {
      "@type": "Question",
      name: "Si nos funciona el Excel + WhatsApp + llamada al móvil, ¿para qué cambiar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La pregunta no es si funciona — la mayoría de plantas españolas tira adelante así durante años. La pregunta es cuál es el coste oculto: el responsable contestando llamadas dos horas al día en lugar de planificar; las averías que se pierden porque entraron por canal equivocado; los repuestos urgentes con sobrecoste porque nadie sabía el stock; el técnico nuevo reaprendiendo cómo se reparó algo que ya se reparó cuatro veces. Si reconoces dos o más de esos patrones, Excel + WhatsApp ya no funciona — sólo lo parece, y lo pagas en otra cuenta.",
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
      name: "¿Por qué Intralogik cuesta 199 €/mes y no 49 €/mes como otros GMAO baratos del mercado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque incluye lo que los freemium cobran aparte. La implantación de 2 semanas, los QRs físicos, las plantillas de import, la formación al jefe de mantenimiento y el soporte por email están en el precio del plan, sin tarifas escondidas. Los GMAO de 49 €/mes suelen requerir un setup fee de 1.500-3.000 €, consultoría aparte para configurar el catálogo y módulos premium para preventivos o auditoría que escalan rápido. La factura anual real de uno y otro suele ser equivalente; la diferencia es que aquí lo ves desde el día uno.",
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
      name: "¿Cuándo NO deberíamos contratar Intralogik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tres casos donde otra solución encaja mejor. (1) Si tienes 5+ plantas en países distintos con regulación heterogénea, necesitas un EAM enterprise tipo IBM Maximo o SAP PM, no un GMAO ligero. (2) Si tu mantenimiento es 100% software o ITSM (servidores, no máquinas físicas), un GMAO industrial está sobreequipado — mira ServiceNow o Jira Service Management. (3) Si no tienes un responsable de mantenimiento dedicado (taller pequeño donde el dueño hace todo), probablemente no necesitas un sistema todavía: cuando llegues a 30 trabajadores y empieces a perder información, vuelve.",
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
