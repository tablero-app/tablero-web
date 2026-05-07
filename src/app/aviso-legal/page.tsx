import type { Metadata } from "next";
import {
  LegalShell,
  Section,
  DataTable,
  PendingValue,
} from "@/components/site/legal-shell";
import { legalInfo } from "@/lib/legal-info";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Información legal del titular del sitio www.intralogik.com en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalShell
      eyebrow="Información legal"
      title="Aviso legal"
      intro={
        <p>
          La presente página recoge la información que el titular de este sitio
          web pone a disposición de los usuarios en cumplimiento de la{" "}
          <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
          la Información y de Comercio Electrónico</strong> (LSSI-CE), así como
          las condiciones generales de uso.
        </p>
      }
    >
      <Section id="titular" title="1. Identificación del titular">
        <p>
          En cumplimiento del deber de información del artículo 10 de la
          LSSI-CE, se hacen constar los siguientes datos:
        </p>
        <DataTable
          rows={[
            { label: "Titular", value: legalInfo.titular },
            { label: "Marca comercial", value: legalInfo.marca },
            { label: "NIF", value: <PendingValue value={legalInfo.nif} /> },
            {
              label: "Domicilio",
              value: <PendingValue value={legalInfo.domicilioFiscal} />,
            },
            {
              label: "Correo electrónico",
              value: (
                <a href={`mailto:${legalInfo.email}`}>{legalInfo.email}</a>
              ),
            },
            {
              label: "Sitio web",
              value: (
                <a href={legalInfo.sitioUrl}>{legalInfo.sitioNombre}</a>
              ),
            },
          ]}
        />
      </Section>

      <Section id="objeto" title="2. Objeto y ámbito de aplicación">
        <p>
          El presente aviso legal regula el uso del sitio web{" "}
          <a href={legalInfo.sitioUrl}>{legalInfo.sitioNombre}</a> (en adelante,
          el «Sitio»), titularidad de {legalInfo.titular}.
        </p>
        <p>
          A través del Sitio se presta información comercial y se facilita el
          acceso a {legalInfo.servicio} comercializado bajo la marca{" "}
          {legalInfo.marca}. La contratación efectiva del servicio se rige por
          condiciones particulares que se aceptan en el momento de la alta y
          que prevalecen, en caso de conflicto, sobre el presente aviso legal.
        </p>
        <p>
          La navegación por el Sitio atribuye la condición de usuario del mismo
          e implica la aceptación plena y sin reservas de todas las
          disposiciones incluidas en este aviso legal en la versión publicada
          en el momento de acceso.
        </p>
      </Section>

      <Section id="uso" title="3. Condiciones de uso">
        <p>El usuario se compromete a hacer un uso adecuado del Sitio y, en particular, a no emplearlo para:</p>
        <ul>
          <li>
            Realizar actividades ilícitas, ilegales o contrarias a la buena fe
            y al orden público.
          </li>
          <li>
            Difundir contenidos o propaganda de carácter racista, xenófobo,
            pornográfico, ilegal, de apología del terrorismo o que atenten
            contra los derechos humanos.
          </li>
          <li>
            Provocar daños en los sistemas físicos y lógicos del titular, de
            sus proveedores o de terceras personas, introducir o difundir
            virus informáticos o cualesquiera otros sistemas físicos o lógicos
            susceptibles de provocar daños.
          </li>
          <li>
            Intentar acceder y, en su caso, utilizar las cuentas de correo
            electrónico de otros usuarios y modificar o manipular sus
            mensajes.
          </li>
          <li>
            Utilizar el Sitio o la información en él contenida con fines
            comerciales, publicitarios o cualquier uso que reporte un
            beneficio económico, salvo autorización expresa del titular.
          </li>
        </ul>
      </Section>

      <Section id="propiedad" title="4. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del Sitio (textos, fotografías, gráficos,
          imágenes, iconos, tecnología, software, enlaces y demás contenidos
          audiovisuales o sonoros), así como su diseño gráfico y códigos
          fuente, son propiedad intelectual de {legalInfo.titular} o de
          terceros que han autorizado su uso, sin que pueda entenderse cedido
          al usuario ningún derecho de explotación más allá de lo
          estrictamente necesario para el correcto uso del Sitio.
        </p>
        <p>
          Las marcas, nombres comerciales o signos distintivos son
          titularidad de {legalInfo.titular} o de terceros, sin que el acceso
          al Sitio pueda atribuir derecho alguno sobre ellos.
        </p>
        <p>
          Quedan prohibidas la reproducción, distribución, comunicación
          pública, transformación o cualquier otra actividad que se realice
          con los contenidos del Sitio sin autorización expresa del titular.
        </p>
      </Section>

      <Section id="responsabilidad" title="5. Exoneración de responsabilidad">
        <p>
          {legalInfo.titular} no garantiza la inexistencia de interrupciones
          o errores en el acceso al Sitio o a sus contenidos, ni que estos se
          encuentren actualizados en todo momento, si bien adoptará las
          medidas oportunas para evitarlos, subsanarlos o actualizarlos
          dentro de un plazo razonable.
        </p>
        <p>
          {legalInfo.titular} no se responsabiliza de los daños y perjuicios
          de cualquier naturaleza que pudieran derivarse del uso del Sitio o
          de la actuación de terceros vulnerando las medidas de seguridad
          establecidas. Tampoco se hace responsable del contenido de páginas
          web de terceros a las que se pueda acceder a través de enlaces
          desde el Sitio.
        </p>
      </Section>

      <Section id="proteccion-datos" title="6. Protección de datos personales">
        <p>
          El tratamiento de los datos personales recabados a través del Sitio
          se rige por nuestra <a href="/privacidad">Política de privacidad</a>,
          que forma parte indisociable del presente aviso legal.
        </p>
        <p>
          La información sobre el uso de cookies y tecnologías similares se
          recoge en la <a href="/cookies">Política de cookies</a>.
        </p>
      </Section>

      <Section id="modificaciones" title="7. Modificaciones">
        <p>
          {legalInfo.titular} se reserva el derecho a efectuar, sin previo
          aviso, las modificaciones que considere oportunas en el Sitio,
          pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios
          que se presten a través del mismo como la forma en la que estos
          aparezcan presentados o localizados.
        </p>
      </Section>

      <Section id="ley-jurisdiccion" title="8. Legislación aplicable y jurisdicción">
        <p>
          El presente aviso legal se rige por la legislación española.
          Cualquier controversia que se suscite entre las partes en relación
          con el uso del Sitio se someterá a los Juzgados y Tribunales que
          resulten competentes conforme a la normativa procesal aplicable.
        </p>
        <p>
          Cuando el usuario tenga la condición de consumidor o usuario en los
          términos previstos en la legislación de defensa de consumidores y
          usuarios, las partes se someten a los Juzgados y Tribunales del
          domicilio del consumidor.
        </p>
        <p>
          La Comisión Europea facilita una plataforma de resolución de
          litigios en línea disponible en{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </Section>
    </LegalShell>
  );
}
