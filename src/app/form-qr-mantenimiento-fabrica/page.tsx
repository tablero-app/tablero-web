import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  QrCode,
  Smartphone,
  Printer,
  ShieldOff,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { ScreenshotShowcase } from "@/components/site/screenshot-showcase";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.intralogik.com";
const PATH = "/form-qr-mantenimiento-fabrica";

const TITLE = "Form QR de mantenimiento industrial · sin app, sin login";
const DESCRIPTION =
  "El operario reporta una incidencia escaneando un QR pegado en la máquina. Sin app, sin login, sin formación previa. 38 segundos por reporte.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}${PATH}`,
    siteName: "Intralogik",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const webpageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: "es",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@id": `${SITE_URL}/#software` },
  about: {
    "@type": "Service",
    name: "Form QR para mantenimiento industrial",
    serviceType: "GMAO · captura de incidencias mediante código QR físico",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "España" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "PYMEs industriales 30-150 trabajadores",
    },
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un form QR para mantenimiento industrial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un código QR físico pegado en cada máquina de la planta. Cuando el operario escanea el QR con su móvil, se abre directamente un formulario web pre-rellenado con la máquina identificada, listo para reportar la incidencia. No hay aplicación que instalar, no hay login, no hay alta. El sistema funciona desde el primer día con cualquier operario y cualquier móvil moderno.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué un QR es mejor que una app móvil para reportar incidencias en planta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una app obliga a que cada operario instale software, se de de alta, recuerde una contraseña y mantenga la app actualizada. En una planta industrial con 30-150 operarios, distintos turnos, rotación y operarios externos puntuales (mantenedores, contratas), eso fracasa el día uno. El QR funciona con cualquier móvil moderno escaneando una vez. Cero curva de aprendizaje, cero soporte técnico al alta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesita el operario tener un smartphone propio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, basta cualquier móvil moderno con cámara. Si en alguna sección de planta no hay móviles personales (operarios sin smartphone, áreas con prohibición de móvil personal), se instalan tablets fijas con QR de \"modo planta\" que cualquier operario usa sin login. La inversión por tableta es mínima frente al ROI del sistema.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se generan e imprimen los QRs físicos para cada máquina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intralogik genera los QRs automáticamente al dar de alta cada máquina en el catálogo. Se exportan en PDF listo para imprimir en cualquier impresora de etiquetas. Los QRs físicos definitivos se imprimen en vinilo o PVC resistente a aceite y temperatura, en tamaño 7-10 cm para garantizar lectura cómoda con cualquier móvil. La implantación de 2 semanas incluye los QRs físicos imprimidos para las primeras máquinas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde se pega el QR en la máquina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En lugar visible y cercano al puesto del operario, evitando zonas con grasa, polvo abrasivo o salpicaduras de fluidos. La práctica recomendada es: panel de control, lateral del marco fijo, o columna del puesto de trabajo. La posición la define el responsable de mantenimiento durante la implantación, en función del recorrido natural del operario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si el QR se ensucia, se despega o se daña?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los QRs en vinilo industrial soportan años de uso en ambiente fabril. Si uno se daña, se reimprime desde el panel en segundos y se sustituye. La URL del QR es estable — al sustituir el adhesivo el código apunta a la misma máquina, sin recodificación. Es práctica recomendada llevar 2-3 QRs de repuesto por máquina como stock.",
      },
    },
    {
      "@type": "Question",
      name: "¿El form QR funciona offline si la planta tiene mala cobertura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parcialmente. Al escanear el QR el navegador necesita conexión para cargar el formulario inicial (datos del operario o WiFi). Si la cobertura cae justo al enviar la incidencia, el formulario guarda el reporte localmente y reintenta el envío automáticamente cuando vuelve la red. La incidencia no se pierde aunque el operario pierda conexión durante el reporte.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Form QR de mantenimiento",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

export default function FormQrPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <section className="relative pt-16 pb-12 md:pt-24 md:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(80% 60% at 100% 0%, color-mix(in oklab, var(--intralogik-orange-soft) 60%, transparent) 0%, transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <nav aria-label="Migas de pan" className="mb-6 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Inicio</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Form QR de mantenimiento</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Módulo Intralogik · Sin app, sin login
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              Form QR de mantenimiento en fábrica,{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                sin app que instalar.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Cada máquina lleva un QR físico pegado. El operario lo escanea
              con su móvil, hace una foto, escribe lo que pasa y envía. 38
              segundos. Sin descargar nada, sin alta, sin contraseña, sin
              formación previa. Los CMMS clásicos te venden una app; Intralogik
              te da un QR.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Por <strong className="font-semibold text-foreground">Eric Castillo</strong>,
              fundador de Intralogik · Actualizado el 7 de mayo de 2026
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/precios">
                  Ver planes y precios
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#cta">Reservar demo guiada (30 min)</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Por qué QR > app */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Por qué un QR vence a una app móvil en planta industrial
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              La app móvil parece la respuesta moderna, pero falla en una
              planta industrial PYME por razones operativas concretas:
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: ShieldOff,
                  title: "Cero alta del operario",
                  text:
                    "Una app obliga a cada operario a instalar, registrarse, recordar contraseña, recibir email de verificación. En una planta con turnos rotativos, contratas externas y operarios temporales, eso es inasumible. El QR funciona con cualquier operario en su primer día sin alta previa.",
                },
                {
                  icon: Zap,
                  title: "38 segundos vs 2 minutos",
                  text:
                    "Una app abierta tarda 5-10 segundos en cargar, requiere navegar a la sección correcta, seleccionar máquina, etc. El QR escanea + abre form pre-rellenado en 1-2 segundos. Para un operario en mitad de turno con producción en marcha, esa diferencia es la línea entre reportar la incidencia o no reportarla.",
                },
                {
                  icon: Smartphone,
                  title: "Funciona con cualquier móvil",
                  text:
                    "Una app necesita versiones específicas de Android/iOS, mantenimiento de la app, soporte técnico cuando algo falla en el dispositivo del operario. Un QR funciona con cualquier móvil moderno. Cero soporte técnico, cero versiones, cero deuda de mantenimiento.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--intralogik-orange-soft)" }}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        style={{ color: "var(--intralogik-orange)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Cómo se diseña e imprime el QR */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Setup
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Del catálogo de máquinas al QR pegado en producción
            </h2>

            <ol className="mt-10 space-y-6">
              {[
                {
                  step: "1",
                  icon: QrCode,
                  title: "Generación automática del QR al dar de alta la máquina",
                  text:
                    "Cuando una máquina entra al catálogo, el sistema le asigna un QR único con URL estable. El QR no caduca, no se reasigna ni se invalida — vale para toda la vida útil de la máquina.",
                },
                {
                  step: "2",
                  icon: Printer,
                  title: "Exportación en PDF listo para impresión",
                  text:
                    "Los QRs se exportan en PDF con tamaño físico recomendado (7-10 cm de lado) y márgenes correctos. Se pueden imprimir en cualquier impresora de etiquetas o por servicio externo en vinilo industrial. La implantación de 2 semanas incluye los QRs físicos para las primeras máquinas.",
                },
                {
                  step: "3",
                  icon: Smartphone,
                  title: "Pegado en lugar visible cercano al puesto",
                  text:
                    "Posición recomendada: panel de control, lateral del marco fijo, o columna del puesto. Evitar zonas con grasa, polvo abrasivo o salpicaduras. La posición la define el responsable durante la implantación según el recorrido natural del operario en cada puesto.",
                },
                {
                  step: "4",
                  icon: Zap,
                  title: "Operario escanea con su móvil — sin más",
                  text:
                    "El operario abre la cámara de su móvil, apunta al QR, toca la notificación que aparece y se abre el form pre-rellenado con la máquina ya identificada. No hay pantalla intermedia, no hay alta, no hay login. Solo el form.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.step} className="flex gap-5 rounded-xl border border-border bg-card p-6 md:gap-6">
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full font-mono text-sm font-semibold"
                        style={{
                          background: "var(--intralogik-orange)",
                          color: "white",
                        }}
                      >
                        {item.step}
                      </span>
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        style={{ color: "var(--intralogik-orange-text)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <ScreenshotShowcase
          src="/screenshots/panel-incidencias-mobile.png"
          alt="Panel de incidencias de Intralogik en vista móvil mostrando las incidencias activas con sus máquinas, operarios, prioridades e indicadores de parada — el mismo flujo que activa el QR escaneado por el operario en planta"
          width={390}
          height={844}
          title="Lo que el responsable ve cuando entra una incidencia"
          caption="El operario escanea el QR y rellena el form. Segundos después, la incidencia aparece en el panel del responsable de mantenimiento — con foto, máquina, operario y prioridad — desde su propio móvil."
          enlace={{
            href: "/demo/",
            texto: "Ver el panel completo en el demo",
            external: true,
          }}
        />

        {/* Beneficios */}
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Lo que cambia al sustituir &ldquo;llamada al móvil&rdquo; por QR
            </h2>

            <ul className="mt-8 space-y-4 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
              {[
                {
                  strong: "Cero formación al operario",
                  text:
                    "Cualquier operario que sepa usar WhatsApp puede usar el form QR el primer día. No hay onboarding, no hay alta, no hay tutorial.",
                },
                {
                  strong: "Cero soporte técnico al alta",
                  text:
                    "El responsable de mantenimiento no tiene que perseguir a nadie para que se instale la app. El QR está pegado, basta con escanearlo.",
                },
                {
                  strong: "Funciona con operarios temporales y contratas",
                  text:
                    "Un técnico de mantenimiento externo que viene una mañana puede reportar incidencias en planta sin alta previa. Eso es imposible con app.",
                },
                {
                  strong: "Sin coste de mantenimiento de app",
                  text:
                    "Las apps requieren versiones nuevas, mantenimiento de stores, soporte de dispositivos antiguos, push notifications fiables. El form web no.",
                },
                {
                  strong: "Captura cualquier incidencia, no solo las graves",
                  text:
                    "Si reportar es de 38 segundos, los operarios reportan también las menores. Si reportar es de 2 minutos navegando una app, las menores se quedan sin reportar.",
                },
                {
                  strong: "Compatible con cualquier nivel digital del operario",
                  text:
                    "Operarios veteranos que evitan las apps no tienen problema con un QR. Eliminamos la principal barrera de adopción de tecnología en planta industrial.",
                },
              ].map((item) => (
                <li key={item.strong}>
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--intralogik-orange)" }}
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    <strong className="text-foreground">{item.strong}.</strong>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              El form QR es el primer paso del flujo completo de gestión de
              incidencias en planta. Para entender qué pasa después del envío
              (panel del responsable, asignación, cierre con histórico), ver{" "}
              <Link href="/gestion-incidencias-mantenimiento">
                gestión de incidencias en mantenimiento industrial
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Preguntas frecuentes
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Sobre form QR para mantenimiento en planta
            </h2>

            <div className="mt-8 space-y-5">
              {faqLd.mainEntity.map((q, i) => (
                <article
                  key={i}
                  className="rounded-xl border border-border bg-card p-5 md:p-6"
                >
                  <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                    {q.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {q.acceptedAnswer.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
