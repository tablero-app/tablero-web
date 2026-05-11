import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";
import { Button } from "@/components/ui/button";
import { founderProfiles } from "@/lib/social-profiles";
import { legalInfo } from "@/lib/legal-info";

const SITE_URL = "https://www.intralogik.com";
const SOBRE_PATH = "/sobre";

const TITLE = "Sobre Intralogik · Eric Castillo, fundador";
const DESCRIPTION =
  "Quién hay detrás de Intralogik: Eric Castillo, fundador. Cómo se construyó este GMAO ligero y qué garantizamos a los primeros clientes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SOBRE_PATH },
  openGraph: {
    type: "profile",
    locale: "es_ES",
    url: `${SITE_URL}${SOBRE_PATH}`,
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

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}${SOBRE_PATH}#eric-castillo`,
  name: "Eric Castillo",
  givenName: "Eric",
  familyName: "Castillo",
  jobTitle: "Fundador de Intralogik",
  url: `${SITE_URL}${SOBRE_PATH}`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  email: legalInfo.email,
  nationality: { "@type": "Country", name: "España" },
  knowsAbout: [
    "GMAO",
    "CMMS",
    "mantenimiento industrial",
    "software para PYME industrial",
    "arquitectura de software",
    "automatización operativa",
    "diseño de procesos industriales",
  ],
  knowsLanguage: ["Spanish", "es", "English", "en"],
  sameAs: [...founderProfiles],
};

const aboutPageLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}${SOBRE_PATH}`,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "es",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}${SOBRE_PATH}#eric-castillo` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Sobre Intralogik", item: `${SITE_URL}${SOBRE_PATH}` },
  ],
};

export default function SobrePage() {
  const linkedinUrl = founderProfiles[0];
  return (
    <>
      <Nav />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <section className="relative pt-16 pb-12 md:pt-24 md:pb-16">
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
              <span className="text-foreground">Sobre Intralogik</span>
            </nav>

            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--intralogik-orange)" }}
              />
              Sobre Intralogik
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-[3.25rem]">
              Una persona. Una decisión. Un{" "}
              <span style={{ color: "var(--intralogik-orange-text)" }}>cliente real.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Intralogik no es una empresa de 40 personas vendiéndote GMAO. Es{" "}
              <strong className="font-semibold text-foreground">una sola persona</strong>{" "}
              construyendo el sistema desde cero contra un cliente piloto real, con la
              disciplina de hacerlo simple para que sobreviva a su autor.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold"
                style={{
                  background: "var(--intralogik-orange-soft)",
                  color: "var(--intralogik-orange-text)",
                }}
                aria-hidden="true"
              >
                EC
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Eric Castillo
                </h2>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  Fundador de Intralogik · arquitecto e implementador único
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Llevo años diseñando software interno para empresas, con un sesgo
                  claro: prefiero un sistema simple que la gente usa todos los días
                  a uno completo que abandonan a los tres meses. Intralogik es
                  exactamente eso, aplicado al mantenimiento industrial.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Perfil en LinkedIn
                    </a>
                  )}
                  <a
                    href={`mailto:${legalInfo.email}`}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {legalInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-20">
          <div className="space-y-12 text-base leading-relaxed text-muted-foreground [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-0 [&_h2]:mb-4 md:[&_h2]:text-3xl [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-0 [&_h3]:mb-2 [&_strong]:font-semibold [&_strong]:text-foreground">
            <section>
              <h2>Por qué existe Intralogik</h2>
              <p>
                He pasado los últimos años observando cómo se gestiona el
                mantenimiento en plantas industriales españolas medianas. El
                patrón se repite con una consistencia que ya no es anecdótica:
                Excel histórico, llamada al móvil del responsable, una persona
                veterana que sabe cada máquina de memoria y un conocimiento
                operativo que no se transmite a nadie.
              </p>
              <p>
                El mercado tiene CMMS enterprise (Maximo, Infor EAM, SAP PM)
                pensados para corporaciones con equipo IT propio. Tiene también
                GMAO &ldquo;cloud baratos&rdquo; que cobran 49 €/mes pero te
                disparan la factura con setup fees, consultoría y módulos
                premium. <strong>No tiene un GMAO honesto para la PYME
                industrial española de 30 a 150 trabajadores.</strong> Eso es
                lo que estoy construyendo.
              </p>
            </section>

            <section>
              <h2>Cómo trabajo</h2>
              <p>
                Soy <strong>el único arquitecto e implementador</strong> de
                Intralogik. Diseño el modelo de datos, escribo el código,
                orquesto los workflows, despliego el panel, hablo con el cliente
                piloto y publico la documentación. Esto tiene tres consecuencias
                directas para quien me contrate:
              </p>
              <ul className="mt-4 space-y-3 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
                <li>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--intralogik-orange)" }}
                  />
                  <span>
                    <strong>Decisiones rápidas y revertibles.</strong> No hay
                    comité que tenga que aprobar cada cambio. Cuando algo no
                    funciona, lo cambiamos en horas, no en sprints.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--intralogik-orange)" }}
                  />
                  <span>
                    <strong>El producto está diseñado para sobrevivirme.</strong>{" "}
                    Toda la lógica vive en n8n y Google Sheets, no en una caja
                    negra propietaria. Si Intralogik desaparece, los datos
                    siguen siendo tuyos y los puedes operar con cualquier
                    proveedor.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--intralogik-orange)" }}
                  />
                  <span>
                    <strong>Cuello de botella consciente.</strong> Cuando llegue
                    al cliente número 8-10, contrataré a otra persona. Hasta
                    entonces, prefiero hacer el trabajo bien para pocos a hacerlo
                    a medias para muchos.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2>El cliente piloto</h2>
              <p>
                Intralogik se construyó contra una fábrica metalmecánica catalana
                real (80 trabajadores, una planta, 15 máquinas críticas). No es
                un caso de marketing &mdash; es{" "}
                <Link
                  href="/casos/fabrica-metalmecanica-cataluna"
                  className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
                >
                  el caso real publicado
                </Link>
                , anonimizado a petición del cliente, con hitos verificables y
                cifras de impacto a 90 días en el segundo trimestre de 2026.
              </p>
              <p>
                El sistema lleva en producción desde marzo de 2026. Cualquier
                decisión de diseño que tomé tuvo que pasar el filtro de
                &ldquo;¿esto resuelve el problema real de Edwin (el responsable
                de mantenimiento) o solo queda bien en la demo?&rdquo;.
              </p>
            </section>

            <section>
              <h2>Qué garantizo a los primeros clientes</h2>
              <ul className="mt-4 space-y-3 [&>li]:flex [&>li]:gap-3 [&>li]:items-start">
                <li>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--intralogik-orange)" }}
                  />
                  <span>
                    <strong>Implantación en 2 semanas reales,</strong> no en
                    sala con PowerPoint. Si pasada la segunda semana el sistema
                    no está en producción en planta, no se factura.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--intralogik-orange)" }}
                  />
                  <span>
                    <strong>14 días gratis con la planta real,</strong> no con
                    datos de demo. Sin tarjeta, sin permanencia.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--intralogik-orange)" }}
                  />
                  <span>
                    <strong>Datos siempre exportables a Excel,</strong> también
                    el día que dejas Intralogik. Te llevas el histórico
                    completo.
                  </span>
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--intralogik-orange)" }}
                  />
                  <span>
                    <strong>Atención directa del fundador</strong> en las
                    primeras semanas, no de un &ldquo;customer success agent&rdquo;
                    leyendo un script.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2>Lo que NO somos</h2>
              <p>
                Para que la decisión sea fácil para todo el mundo, también lo
                que no encajamos:
              </p>
              <ul className="mt-4 space-y-2 [&>li]:flex [&>li]:gap-3">
                <li>
                  <span className="text-muted-foreground">·</span>
                  <span>
                    No somos un CMMS enterprise. Si tienes 5+ plantas en países
                    distintos con regulación heterogénea, necesitas Maximo o SAP
                    PM.
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground">·</span>
                  <span>
                    No somos un GMAO para ITSM. Si tu mantenimiento es 100%
                    software/servidores, mira ServiceNow o Jira Service
                    Management.
                  </span>
                </li>
                <li>
                  <span className="text-muted-foreground">·</span>
                  <span>
                    No somos una consultoría. No facturamos por horas, no
                    cobramos setup fee y no vendemos &ldquo;módulos premium&rdquo;.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                ¿Encaja con tu planta? La demo dura 30 minutos y no la doy un
                comercial &mdash; la doy yo.
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
