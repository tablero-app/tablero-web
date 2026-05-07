import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://www.intralogik.com";
const POST_PATH = "/blog/que-es-gmao";

const TITLE = "¿Qué es un GMAO? Guía práctica para PYMEs industriales";
const DESCRIPTION =
  "Qué significa GMAO, para qué sirve, qué módulos tiene, cuándo lo necesitas y cómo elegir uno sencillo y asequible para PYMEs industriales españolas. Guía completa 2026.";
const PUBLISHED = "2026-05-07";
const MODIFIED = "2026-05-07";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: POST_PATH },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${SITE_URL}${POST_PATH}`,
    siteName: "Intralogik",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Eric Castillo"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: `${SITE_URL}/opengraph-image`,
  url: `${SITE_URL}${POST_PATH}`,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  inLanguage: "es",
  author: {
    "@type": "Person",
    name: "Eric Castillo",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Intralogik",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/opengraph-image`,
    },
  },
  about: [
    { "@type": "Thing", name: "GMAO" },
    { "@type": "Thing", name: "Mantenimiento industrial" },
    { "@type": "Thing", name: "CMMS" },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué significa GMAO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GMAO son las siglas de Gestión del Mantenimiento Asistida por Ordenador. Es el equivalente español/francés del término inglés CMMS (Computerized Maintenance Management System). Se refiere al software que digitaliza y centraliza la gestión del mantenimiento industrial: incidencias, órdenes de trabajo, ficha de máquina, repuestos y preventivos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre GMAO y CMMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ninguna conceptual. GMAO es el término más usado en España, Francia y países hispanohablantes. CMMS es el término anglosajón. La inmensa mayoría de los proveedores que en España se llaman GMAO son los mismos productos que en EE. UU. se llaman CMMS. Algunas plataformas usan ambos términos en su comunicación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesita una PYME industrial un GMAO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generalmente, sí cuando concurre alguna de estas señales: el responsable de mantenimiento es un cuello de botella personal, el histórico de averías vive en un Excel, las órdenes de trabajo se gestionan por WhatsApp o llamada, no se sabe el stock de repuestos hasta que se va a buscar uno, las averías se repiten porque nadie consulta el histórico. Si reconoces dos o más, un GMAO ligero compensa el coste mensual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un GMAO para PYME?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los GMAO modernos para PYME industrial española arrancan en 150-250 €/mes para planes básicos con implantación incluida. Los CMMS clásicos del mercado enterprise (Maximo, Infor) parten desde 500-1.500 €/usuario/año más implantación, configuración, formación y módulos premium. La diferencia real anual fácilmente supera los 10.000 €.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto se tarda en implantar un GMAO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del enfoque. Un GMAO ligero pensado para PYME se implanta en 2-4 semanas, con catálogos importados y operarios reportando incidencias desde la segunda semana. Los CMMS enterprise tienen ciclos de 4-9 meses con consultoría externa, talleres de procesos y migración de datos asistida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hace falta un informático en plantilla para usar un GMAO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los GMAO modernos en modalidad SaaS se gestionan desde un panel web por el jefe de mantenimiento. La instalación, copias de seguridad y actualizaciones las gestiona el proveedor. El operario solo necesita escanear un QR con su móvil y rellenar el formulario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona un GMAO si los operarios no son técnicos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ese es precisamente el caso de uso principal. Un GMAO bien diseñado convierte el reporte de incidencias en algo que cualquier operario hace en menos de un minuto: escanear un QR pegado en la máquina, foto, descripción corta, prioridad. La complejidad operativa la absorbe el panel del responsable, no el operario en planta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sirve un GMAO para auditorías ISO 9001 / 14001 / 45001?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Las órdenes de trabajo cerradas con foto, hora, técnico responsable y repuestos consumidos son auditables. La trazabilidad por máquina y la firma digital del técnico al cierre (en planes avanzados) cubren los requisitos típicos de auditoría ISO en el ámbito de mantenimiento.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Qué es un GMAO",
      item: `${SITE_URL}${POST_PATH}`,
    },
  ],
};

export default function QueEsGmaoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <section className="relative pt-16 pb-8 md:pt-24 md:pb-12">
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
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-foreground">Qué es un GMAO</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Guía · 8 min de lectura
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              ¿Qué es un GMAO? Guía práctica para{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>
                PYMEs industriales.
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Si has llegado aquí escribiendo &ldquo;qué es GMAO&rdquo; en
              Google probablemente tengas un Excel de incidencias creciendo,
              un responsable de mantenimiento que no descansa o una próxima
              auditoría ISO en el horizonte. Esta guía explica el concepto en
              términos prácticos: qué hace un GMAO, cuándo conviene y qué
              evitar al elegir uno.
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Por <strong className="font-semibold text-foreground">Eric Castillo</strong>,
              creador de Intralogik · Actualizado el 7 de mayo de 2026
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
          <div className="space-y-12 text-base leading-relaxed text-muted-foreground [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-0 [&_h2]:mb-4 md:[&_h2]:text-3xl [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-0 [&_h3]:mb-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:not-italic [&_em]:text-foreground [&_em]:font-semibold [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-foreground/30 hover:[&_a]:decoration-foreground">
            <section>
              <h2>GMAO: definición rápida</h2>
              <p>
                Un <strong>GMAO</strong> (Gestión del Mantenimiento Asistida
                por Ordenador) es el software que digitaliza y centraliza la
                gestión del mantenimiento industrial: incidencias, órdenes de
                trabajo, ficha de máquina, stock de repuestos y mantenimientos
                preventivos. Es el equivalente español del término anglosajón
                <em> CMMS</em> (Computerized Maintenance Management System).
              </p>
              <p>
                En la práctica, sustituye al Excel manual + WhatsApp + llamada
                al móvil del responsable que sigue siendo el sistema real en la
                mayoría de las PYMEs industriales españolas que aún no han dado
                el paso.
              </p>
            </section>

            <section>
              <h2>¿GMAO o CMMS? Misma cosa, idiomas distintos</h2>
              <p>
                <strong>GMAO</strong> es el término dominante en España,
                Francia y países francófonos. <strong>CMMS</strong> es el
                término anglosajón. Conceptualmente son idénticos. Algunos
                proveedores usan ambos en su comunicación; otros eligen uno
                según el mercado al que se dirigen. No te preocupes por la
                etiqueta: lo que importa es lo que hace el sistema.
              </p>
              <p>
                Hay una variante moderna que conviene conocer: <em>EAM</em>{" "}
                (Enterprise Asset Management) es la versión enterprise del
                concepto, dirigida a grandes corporaciones con gestión de
                activos crítica. Para una PYME industrial de 30-150
                trabajadores, lo que necesitas es un GMAO/CMMS, no un EAM.
              </p>
            </section>

            <section>
              <h2>Para qué sirve un GMAO en planta</h2>
              <p>
                Un GMAO bien implantado cubre cinco objetivos operativos
                concretos:
              </p>
              <ul className="mt-4 space-y-3 [&>li]:pl-6 [&>li]:relative [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-2.5 [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-foreground/40">
                <li>
                  <strong>Capturar incidencias rápido</strong> para que ninguna
                  se pierda. El operario reporta desde su móvil escaneando un
                  QR pegado en la máquina, o desde un puesto fijo si no lleva
                  smartphone.
                </li>
                <li>
                  <strong>Asignar y seguir órdenes de trabajo</strong> con un
                  responsable, una prioridad, un plazo y una documentación
                  asociada. Sin papel, sin Excel paralelo.
                </li>
                <li>
                  <strong>Construir el histórico por máquina</strong> con foto
                  de cada intervención, repuesto consumido y técnico
                  responsable. Cuando una avería se repite, el técnico nuevo
                  abre la ficha y ve cómo se resolvió.
                </li>
                <li>
                  <strong>Gestionar el stock de repuestos</strong> con alertas
                  automáticas de mínimos. Las paradas por &ldquo;no había
                  pieza&rdquo; se anticipan, no se sufren.
                </li>
                <li>
                  <strong>Programar mantenimientos preventivos</strong> por
                  calendario o por horas reales de funcionamiento, para que la
                  reparación no llegue tarde.
                </li>
              </ul>
            </section>

            <section>
              <h2>Módulos típicos de un GMAO industrial</h2>
              <p>
                Aunque cada GMAO se vende con nombres distintos, los módulos
                centrales son los mismos en casi todas las herramientas serias
                del mercado:
              </p>

              <div className="mt-6 overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="bg-secondary/60">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                        Módulo
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                        Qué hace
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top">
                    <tr>
                      <td className="font-semibold text-foreground">Incidencias</td>
                      <td>Captura rápida desde planta. Foto, descripción, prioridad. Idealmente vía form QR.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Órdenes de trabajo</td>
                      <td>Asignación a técnico, plazo, materiales necesarios, cierre con resultado.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Ficha de máquina</td>
                      <td>Datos del activo, manuales, histórico de intervenciones, repuestos asociados.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Stock de repuestos</td>
                      <td>Catálogo de piezas, niveles mínimos, movimientos de entrada/salida, alertas.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Preventivos</td>
                      <td>Mantenimiento programado por calendario o por horas reales de máquina.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Dashboards y exportes</td>
                      <td>KPIs operativos (MTBF, MTTR, paradas) y exportes para auditoría o informes a dirección.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Cómo se usa un GMAO en el día a día</h2>
              <p>
                El uso real del sistema involucra a tres perfiles distintos en
                planta:
              </p>

              <h3 className="mt-6">El operario</h3>
              <p>
                Escanea el QR pegado en la máquina cuando algo falla, hace una
                foto, escribe una frase corta y elige prioridad. En 30-60
                segundos vuelve a su puesto. No abre ningún programa, no llama
                a nadie, no espera respuesta.
              </p>

              <h3 className="mt-6">El responsable de mantenimiento</h3>
              <p>
                Recibe la incidencia en su panel en tiempo real. Decide
                prioridad, asigna técnico, cierra cuando se resuelve. Consulta
                la ficha de la máquina cuando hay duda. Programa los
                preventivos del mes. Exporta para auditoría cuando viene la
                ISO.
              </p>

              <h3 className="mt-6">El técnico de mantenimiento</h3>
              <p>
                Abre las OT que tiene asignadas, consulta el histórico de la
                máquina, marca repuestos consumidos al cerrar, firma
                digitalmente si la planta lo requiere. Su trabajo no cambia;
                lo que cambia es que queda documentado de oficio.
              </p>
            </section>

            <section>
              <h2>Cuándo necesitas un GMAO: las 6 señales</h2>
              <p>
                Si reconoces dos o más de estas señales, un GMAO ligero
                compensa el coste mensual desde el primer trimestre:
              </p>
              <ol className="mt-4 list-decimal space-y-3 pl-6">
                <li>
                  <strong>El responsable de mantenimiento es un cuello de
                  botella personal.</strong> Si está de baja, la planta
                  funciona a un 70%.
                </li>
                <li>
                  <strong>El histórico de averías vive en un único Excel</strong>{" "}
                  que llena el responsable al final del día (los días en que
                  se acuerda).
                </li>
                <li>
                  <strong>Las incidencias entran por WhatsApp, llamada y
                  papel.</strong> Cada operario usa el canal que le pilla más
                  cerca; algunas se pierden por el camino.
                </li>
                <li>
                  <strong>No sabes el stock real de repuestos</strong> hasta
                  que vas a buscar uno. Las paradas por &ldquo;no había
                  pieza&rdquo; son recurrentes.
                </li>
                <li>
                  <strong>Las averías típicas se repiten</strong> porque el
                  técnico nuevo no sabe cómo se resolvió la última vez. El
                  conocimiento vive en dos o tres cabezas.
                </li>
                <li>
                  <strong>Tienes una auditoría ISO en el horizonte</strong>{" "}
                  (9001, 14001, 45001) y la documentación de mantenimiento es
                  un dolor cada vez que toca renovar.
                </li>
              </ol>
            </section>

            <section>
              <h2>GMAO ligero vs GMAO enterprise</h2>
              <p>
                No todos los GMAO son iguales. La principal divisoria del
                mercado es entre las herramientas pensadas para PYME industrial
                (30-150 trabajadores) y las pensadas para corporación
                multi-planta o entidades complejas (Maximo, Infor EAM, SAP
                PM):
              </p>

              <div className="mt-6 overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="bg-secondary/60">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                        Aspecto
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                        GMAO ligero (PYME)
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                        GMAO enterprise (corporación)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top">
                    <tr>
                      <td className="font-semibold text-foreground">Implantación</td>
                      <td>2-4 semanas</td>
                      <td>4-9 meses</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Coste anual típico</td>
                      <td>2.500-7.500 €</td>
                      <td>20.000-150.000 € + consultoría</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Personal IT necesario</td>
                      <td>Ninguno</td>
                      <td>Equipo IT propio + integrador</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Curva de aprendizaje</td>
                      <td>Días</td>
                      <td>Meses</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Configuración</td>
                      <td>Plantilla por sector, ajuste por planta</td>
                      <td>Talleres de procesos, customización a medida</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Integraciones nativas</td>
                      <td>Pocas, suficientes (Excel, ERP por API)</td>
                      <td>Conector nativo a SAP, Oracle, etc.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6">
                Para una PYME industrial de 30-150 trabajadores, intentar
                implantar un GMAO enterprise suele acabar mal: o no se termina
                de implantar, o se implanta y nadie lo usa, o el coste devora
                el ROI. El producto correcto es un GMAO ligero diseñado
                específicamente para este perfil de cliente.
              </p>
            </section>

            <section>
              <h2>Cómo elegir un GMAO sin equivocarte</h2>
              <p>
                Cinco criterios que separan un GMAO útil de uno que acabará
                arrumbado en el cajón:
              </p>
              <ul className="mt-4 space-y-3 [&>li]:pl-6 [&>li]:relative [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-2.5 [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-foreground/40">
                <li>
                  <strong>Mobile-first real, no &ldquo;también
                  mobile&rdquo;.</strong> Si el operario tiene que abrir un
                  laptop para reportar una incidencia, el sistema fracasa el
                  día uno. El reporte tiene que ser en menos de un minuto
                  desde un móvil personal con datos del operario.
                </li>
                <li>
                  <strong>Implantación en semanas, no meses.</strong> Si la
                  oferta incluye consultoría obligatoria de 6 meses antes de
                  arrancar, ese GMAO no es para una PYME.
                </li>
                <li>
                  <strong>Precio cerrado y transparente.</strong> Desconfía
                  de los GMAO que esconden precios y solo los desvelan tras
                  una llamada. La factura del mes 6 suele ser muy distinta a
                  la del mes 1.
                </li>
                <li>
                  <strong>Sin permanencia ni rehén de datos.</strong>{" "}
                  Asegúrate de que puedes exportar tus datos a Excel cuando
                  quieras, también el día que te das de baja.
                </li>
                <li>
                  <strong>Interfaz que respete el conocimiento existente.</strong>{" "}
                  El responsable de mantenimiento veterano que lleva 15 años
                  no quiere reaprender cómo trabajar. El GMAO debe acomodar
                  cómo trabaja la planta, no al revés.
                </li>
              </ul>
            </section>

            <section>
              <h2>Errores típicos al implantar un GMAO</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-6">
                <li>
                  <strong>Empezar por configurar todo a la perfección antes
                  de usarlo.</strong> Mejor arrancar con incidencias y
                  máquinas básicas, e ir añadiendo módulos según los
                  necesites.
                </li>
                <li>
                  <strong>Comprar más planes y módulos de los que se
                  van a usar.</strong> Pagar por preventivos cuando aún no
                  tienes el catálogo de máquinas hecho es tirar dinero.
                </li>
                <li>
                  <strong>No formar al responsable.</strong> Si el jefe de
                  mantenimiento no domina el panel, nadie lo va a salvar
                  desde abajo.
                </li>
                <li>
                  <strong>Mantener Excel paralelo &ldquo;por seguridad&rdquo;.</strong>{" "}
                  Si tienes Excel y GMAO al mismo tiempo, en tres meses solo
                  estará actualizado uno (suele ser el Excel). Cierra el
                  Excel desde el día uno.
                </li>
                <li>
                  <strong>Querer la app perfecta antes de arrancar.</strong>{" "}
                  El sistema mejora con uso real, no con planificación
                  teórica.
                </li>
              </ol>
            </section>

            <section>
              <h2>Preguntas frecuentes sobre GMAO</h2>
              <div className="mt-6 space-y-5">
                {faqLd.mainEntity.map((q, i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-border bg-card p-5 md:p-6"
                  >
                    <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
                      {q.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed md:text-base">
                      {q.acceptedAnswer.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2>En resumen</h2>
              <p>
                Un GMAO es el software que sustituye al Excel + WhatsApp +
                llamada al móvil del responsable como sistema real de gestión
                del mantenimiento industrial. Para una PYME de 30-150
                trabajadores, lo que necesitas es un GMAO ligero (no
                enterprise), implantado en 2-4 semanas, mobile-first, con
                precio cerrado y sin permanencia.
              </p>
              <p>
                Si quieres ver cómo se aplican estos criterios a un producto
                concreto pensado exactamente para este perfil de cliente,
                puedes <Link href="/precios">ver los planes y precios de
                Intralogik</Link> o leer el{" "}
                <Link href="/casos/fabrica-metalmecanica-cataluna">caso de
                una fábrica metalmecánica catalana</Link> que pasó de la
                llamada al responsable a un sistema completo en 14 días.
              </p>
            </section>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                ¿Quieres ver el GMAO ligero de Intralogik en tu planta?
                Implantación de 2 semanas incluida.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/precios">
                  Ver planes y precios
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </article>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
