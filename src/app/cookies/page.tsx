import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/site/legal-shell";
import { legalInfo } from "@/lib/legal-info";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de Intralogik. Información sobre el uso de cookies y tecnologías similares conforme al artículo 22.2 de la Ley 34/2002 (LSSI-CE) y la guía de cookies de la AEPD.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell
      eyebrow="Cookies"
      title="Política de cookies"
      intro={
        <p>
          Esta política explica qué son las cookies y tecnologías similares,
          cuáles utiliza el sitio{" "}
          <a href={legalInfo.sitioUrl}>{legalInfo.sitioNombre}</a> y cómo
          puedes configurarlas o eliminarlas. Se publica en cumplimiento del
          artículo 22.2 de la <strong>Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio
          Electrónico</strong> (LSSI-CE) y siguiendo las directrices vigentes
          de la <strong>Agencia Española de Protección de Datos</strong>{" "}
          (AEPD).
        </p>
      }
    >
      <Section id="que-son" title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que los sitios web envían
          al navegador del usuario y que se almacenan en su dispositivo. Se
          utilizan para reconocer al usuario, recordar sus preferencias, medir
          el uso del sitio, personalizar contenidos o mostrar publicidad. Bajo
          el término «cookies» incluimos también tecnologías equivalentes como
          el almacenamiento local del navegador (<em>localStorage</em>,{" "}
          <em>sessionStorage</em>) o las identificaciones de dispositivo.
        </p>
      </Section>

      <Section id="enfoque" title="2. Nuestro enfoque: cookieless por defecto">
        <p>
          <strong>{legalInfo.marca} no utiliza cookies de seguimiento, de
          publicidad ni de personalización.</strong> Las herramientas de
          medición que empleamos son <em>cookieless</em>: generan estadísticas
          agregadas a partir de información que el navegador envía en cada
          petición (cabeceras estándar como dirección IP, idioma o agente de
          usuario), sin almacenar identificadores en tu dispositivo.
        </p>
        <p>
          Por este motivo, al entrar al Sitio no se muestra el típico aviso de
          consentimiento de cookies: no se descarga ninguna cookia que lo
          requiera. Si en el futuro incorporamos cookies sujetas al artículo
          22.2 de la LSSI-CE, recabaremos tu consentimiento previo a través
          de un panel de gestión y actualizaremos esta política.
        </p>
      </Section>

      <Section id="tipos" title="3. Tipos de cookies y tecnologías que utilizamos">
        <p>
          A continuación detallamos las tecnologías que pueden estar activas
          en el Sitio:
        </p>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                  Tecnología
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                  Titular
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                  Finalidad
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                  Tipo
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                  Duración
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top">
              <tr>
                <td className="font-mono text-xs">Vercel Analytics</td>
                <td>Vercel Inc.</td>
                <td>
                  Métricas agregadas y anónimas de visitas (páginas vistas,
                  país, dispositivo). No instala cookies en el navegador.
                </td>
                <td>Analítica · cookieless</td>
                <td>Sesión efímera (sin almacenamiento)</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Vercel Speed Insights</td>
                <td>Vercel Inc.</td>
                <td>
                  Medición agregada de rendimiento real (Core Web Vitals: LCP,
                  CLS, INP). No instala cookies en el navegador.
                </td>
                <td>Analítica · cookieless</td>
                <td>Sesión efímera (sin almacenamiento)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Las herramientas anteriores tratan datos personales (la dirección IP
          se considera dato personal con arreglo al RGPD) en calidad de
          encargados del tratamiento. Las garantías y transferencias
          internacionales asociadas se detallan en nuestra{" "}
          <a href="/privacidad">Política de privacidad</a>.
        </p>

        <p>
          Si en una futura versión del Sitio embebemos contenido de terceros
          (por ejemplo, vídeos de YouTube, mapas o un widget de Calendly
          incrustado en lugar de un enlace), dichos terceros podrán instalar
          sus propias cookies. En ese caso publicaremos la información
          correspondiente en esta misma sección y solicitaremos tu
          consentimiento previo cuando proceda.
        </p>
      </Section>

      <Section id="terceros-redirigidos" title="4. Servicios de terceros enlazados">
        <p>
          Determinadas funcionalidades de la web te llevan a servicios de
          terceros que sí utilizan cookies en sus propios dominios. En esos
          casos, las cookies se rigen por las políticas de cada proveedor,
          que el usuario consulta y acepta al acceder a su entorno:
        </p>
        <ul>
          <li>
            <strong>Calendly</strong> — al pulsar «Reservar demo» se abre la
            web de Calendly LLC para programar la reunión. Política de
            cookies:{" "}
            <a
              href="https://calendly.com/legal/cookie-notice"
              target="_blank"
              rel="noopener noreferrer"
            >
              calendly.com/legal/cookie-notice
            </a>
            .
          </li>
          <li>
            <strong>Stripe</strong> (cuando esté activo) — al iniciar la
            suscripción se redirige al entorno de pago de Stripe Payments
            Europe Ltd., que utiliza cookies necesarias para procesar la
            transacción. Política de cookies:{" "}
            <a
              href="https://stripe.com/cookies-policy/legal"
              target="_blank"
              rel="noopener noreferrer"
            >
              stripe.com/cookies-policy/legal
            </a>
            .
          </li>
        </ul>
      </Section>

      <Section id="gestion" title="5. Cómo configurar y eliminar cookies">
        <p>
          Aunque hoy el Sitio no instala cookies sujetas a consentimiento,
          puedes en cualquier momento revisar, bloquear o eliminar las
          cookies almacenadas por cualquier sitio web a través de la
          configuración de tu navegador. Estos son los enlaces a las guías
          oficiales de los principales navegadores:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-firefox-escritorio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Ten en cuenta que la desactivación de determinadas cookies puede
          afectar al funcionamiento de algunos sitios web.
        </p>
      </Section>

      <Section id="cambios" title="6. Cambios en esta política">
        <p>
          Esta política se actualizará cuando incorporemos nuevas cookies o
          tecnologías equivalentes, o cuando la normativa aplicable así lo
          exija. La fecha de última revisión figura en la cabecera de esta
          página.
        </p>
      </Section>

      <Section id="contacto" title="7. Más información">
        <p>
          Para cualquier duda sobre esta política puedes escribirnos a{" "}
          <a href={`mailto:${legalInfo.emailRgpd}`}>{legalInfo.emailRgpd}</a>.
          Encontrarás información complementaria en la{" "}
          <a href="/privacidad">Política de privacidad</a> y en el{" "}
          <a href="/aviso-legal">Aviso legal</a>.
        </p>
      </Section>
    </LegalShell>
  );
}
