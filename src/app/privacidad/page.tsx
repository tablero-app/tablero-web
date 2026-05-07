import type { Metadata } from "next";
import {
  LegalShell,
  Section,
  Subsection,
  DataTable,
  PendingValue,
} from "@/components/site/legal-shell";
import { legalInfo } from "@/lib/legal-info";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Intralogik. Información sobre el tratamiento de datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalShell
      eyebrow="Privacidad"
      title="Política de privacidad"
      intro={
        <p>
          En {legalInfo.marca} respetamos tu privacidad y nos tomamos la
          protección de tus datos personales muy en serio. Esta política
          explica qué datos recogemos, con qué finalidad los tratamos, durante
          cuánto tiempo los conservamos y cómo puedes ejercer tus derechos,
          de acuerdo con el <strong>Reglamento (UE) 2016/679</strong> (RGPD)
          y la <strong>Ley Orgánica 3/2018, de 5 de diciembre, de Protección
          de Datos Personales y garantía de los derechos digitales</strong>{" "}
          (LOPDGDD).
        </p>
      }
    >
      <Section id="responsable" title="1. Responsable del tratamiento">
        <DataTable
          rows={[
            { label: "Responsable", value: legalInfo.titular },
            { label: "Marca comercial", value: legalInfo.marca },
            { label: "NIF", value: <PendingValue value={legalInfo.nif} /> },
            {
              label: "Domicilio",
              value: <PendingValue value={legalInfo.domicilioFiscal} />,
            },
            {
              label: "Correo electrónico",
              value: (
                <a href={`mailto:${legalInfo.emailRgpd}`}>{legalInfo.emailRgpd}</a>
              ),
            },
          ]}
        />
        <p>
          No se ha designado Delegado de Protección de Datos por no concurrir
          ninguno de los supuestos del artículo 37 del RGPD ni del artículo
          34 de la LOPDGDD. Para cualquier cuestión relacionada con el
          tratamiento de datos personales puedes escribirnos a{" "}
          <a href={`mailto:${legalInfo.emailRgpd}`}>{legalInfo.emailRgpd}</a>.
        </p>
      </Section>

      <Section id="finalidades" title="2. Finalidades del tratamiento y base jurídica">
        <p>
          Tratamos tus datos personales con las siguientes finalidades y bases
          legales:
        </p>

        <Subsection title="a) Atender tus consultas y solicitudes de información">
          <p>
            Cuando contactas con nosotros por correo electrónico o a través de
            los canales habilitados en la web, tratamos los datos que nos
            facilitas para gestionar tu solicitud y mantener la
            correspondencia.
          </p>
          <p>
            <strong>Base legítima:</strong> consentimiento del interesado
            (art. 6.1.a RGPD) y, en su caso, aplicación de medidas
            precontractuales a petición del interesado (art. 6.1.b RGPD).
          </p>
        </Subsection>

        <Subsection title="b) Programación de demostraciones del producto">
          <p>
            Si reservas una demo a través de Calendly, tratamos tu nombre,
            correo electrónico y disponibilidad horaria para concertar y
            celebrar la reunión.
          </p>
          <p>
            <strong>Base legítima:</strong> aplicación de medidas
            precontractuales a petición del interesado (art. 6.1.b RGPD).
          </p>
        </Subsection>

        <Subsection title="c) Gestión de la relación con clientes">
          <p>
            Cuando contratas el servicio, tratamos los datos de identificación,
            facturación y los datos técnicos necesarios para prestar el
            servicio (usuarios autorizados, configuración de planta,
            incidencias, etc.).
          </p>
          <p>
            <strong>Base legítima:</strong> ejecución del contrato del que el
            interesado o su empresa es parte (art. 6.1.b RGPD) y cumplimiento
            de obligaciones legales aplicables al responsable, en particular
            de carácter mercantil, contable y fiscal (art. 6.1.c RGPD).
          </p>
        </Subsection>

        <Subsection title="d) Cumplimiento de obligaciones legales">
          <p>
            Tratamos tus datos para cumplir con las obligaciones legales que
            nos resulten aplicables, en especial las derivadas de la
            normativa fiscal, contable y mercantil.
          </p>
          <p>
            <strong>Base legítima:</strong> cumplimiento de obligaciones
            legales (art. 6.1.c RGPD).
          </p>
        </Subsection>

        <Subsection title="e) Mejora del servicio y métricas agregadas">
          <p>
            Recogemos métricas agregadas y anónimas de uso del Sitio (visitas,
            páginas más consultadas, rendimiento) sin emplear cookies de
            seguimiento. Más detalle en la{" "}
            <a href="/cookies">Política de cookies</a>.
          </p>
          <p>
            <strong>Base legítima:</strong> interés legítimo del responsable
            en analizar el uso del Sitio para mejorarlo (art. 6.1.f RGPD),
            tras la correspondiente ponderación. Tu derecho a oponerte se
            recoge en la sección 7.
          </p>
        </Subsection>
      </Section>

      <Section id="datos" title="3. Categorías de datos tratados">
        <p>Tratamos, según la finalidad, las siguientes categorías de datos:</p>
        <ul>
          <li>
            <strong>Datos identificativos:</strong> nombre y apellidos,
            empresa, cargo, correo electrónico, teléfono.
          </li>
          <li>
            <strong>Datos de contenido:</strong> mensajes y comunicaciones que
            nos remites.
          </li>
          <li>
            <strong>Datos de facturación</strong> (clientes): denominación
            social, NIF, domicilio fiscal, datos de pago. Los datos de pago se
            recogen y procesan directamente por el proveedor de pagos sin que
            queden almacenados en nuestros sistemas.
          </li>
          <li>
            <strong>Datos técnicos y de uso:</strong> dirección IP, tipo de
            navegador, sistema operativo, país, fecha y hora de acceso,
            páginas visitadas. Estos datos se tratan de forma agregada y, en
            su mayoría, anónima.
          </li>
          <li>
            <strong>Datos del servicio</strong> (clientes): datos asociados al
            uso de la plataforma, tales como incidencias, máquinas, técnicos,
            partes de trabajo y mediciones operativas. Salvo el alta de
            usuarios, estos datos suelen ser de carácter operativo y no
            personal.
          </li>
        </ul>
        <p>
          No tratamos categorías especiales de datos personales (art. 9 RGPD).
          Tampoco tratamos datos de menores: el servicio se dirige
          exclusivamente a profesionales y empresas.
        </p>
      </Section>

      <Section id="conservacion" title="4. Plazos de conservación">
        <ul>
          <li>
            <strong>Consultas comerciales sin contratación posterior:</strong>{" "}
            {legalInfo.plazoConsultas}, transcurridos los cuales se eliminan
            o se anonimizan.
          </li>
          <li>
            <strong>Datos de clientes:</strong> {legalInfo.plazoClientes}, a
            efectos del cumplimiento de las obligaciones legales aplicables y
            de la atención de eventuales responsabilidades.
          </li>
          <li>
            <strong>Datos contables y fiscales:</strong> seis años desde el
            último apunte contable, conforme al artículo 30 del Código de
            Comercio.
          </li>
          <li>
            <strong>Métricas agregadas de uso del Sitio:</strong> hasta 25
            meses, plazo habitual de los servicios cookieless de medición.
          </li>
        </ul>
      </Section>

      <Section id="destinatarios" title="5. Destinatarios y encargados de tratamiento">
        <p>
          Para prestar el servicio nos apoyamos en proveedores tecnológicos de
          confianza que actúan como <strong>encargados del tratamiento</strong>
          {" "}
          conforme al artículo 28 del RGPD, con quienes mantenemos los
          contratos y garantías exigidas por la normativa:
        </p>
        <ul>
          {legalInfo.encargados.map((e) => (
            <li key={e.nombre}>
              <strong>{e.nombre}</strong> — {e.finalidad}. País: {e.pais}.
              Garantía: {e.garantia}. Más información:{" "}
              <a href={e.web} target="_blank" rel="noopener noreferrer">
                {e.web}
              </a>
              .
            </li>
          ))}
        </ul>
        <p>
          Adicionalmente, podemos comunicar tus datos a las autoridades
          públicas competentes cuando exista una obligación legal de hacerlo.
        </p>
        <p>
          No realizamos cesiones de datos a terceros con fines comerciales ni
          publicitarios.
        </p>
      </Section>

      <Section id="transferencias" title="6. Transferencias internacionales">
        <p>
          Algunos de los proveedores indicados en la sección anterior están
          ubicados fuera del Espacio Económico Europeo, principalmente en
          Estados Unidos. Estas transferencias internacionales se amparan en
          alguno de los siguientes mecanismos previstos por el RGPD:
        </p>
        <ul>
          <li>
            <strong>EU-US Data Privacy Framework</strong> aprobado por
            decisión de adecuación de la Comisión Europea de 10 de julio de
            2023, cuando el proveedor está adherido al marco.
          </li>
          <li>
            <strong>Cláusulas contractuales tipo</strong> aprobadas por la
            Comisión Europea, complementadas con las medidas técnicas y
            organizativas adicionales que resulten necesarias.
          </li>
        </ul>
        <p>
          Puedes solicitar copia de las garantías aplicadas escribiéndonos a{" "}
          <a href={`mailto:${legalInfo.emailRgpd}`}>{legalInfo.emailRgpd}</a>.
        </p>
      </Section>

      <Section id="derechos" title="7. Tus derechos">
        <p>
          La normativa de protección de datos te reconoce los siguientes
          derechos sobre tu información personal:
        </p>
        <ul>
          <li>
            <strong>Acceso:</strong> conocer si estamos tratando datos
            personales tuyos y, en tal caso, obtener una copia.
          </li>
          <li>
            <strong>Rectificación:</strong> corregir los datos inexactos o
            completarlos cuando estén incompletos.
          </li>
          <li>
            <strong>Supresión («derecho al olvido»):</strong> solicitar la
            eliminación de los datos cuando ya no sean necesarios para los
            fines del tratamiento.
          </li>
          <li>
            <strong>Oposición:</strong> oponerte al tratamiento por motivos
            relacionados con tu situación particular cuando se base en
            interés legítimo.
          </li>
          <li>
            <strong>Limitación:</strong> solicitar que solo conservemos los
            datos en determinados supuestos.
          </li>
          <li>
            <strong>Portabilidad:</strong> recibir los datos en un formato
            estructurado, de uso común y lectura mecánica, o transmitirlos
            a otro responsable.
          </li>
          <li>
            <strong>Retirar el consentimiento</strong> en cualquier momento,
            sin que ello afecte a la licitud del tratamiento previo.
          </li>
          <li>
            <strong>No ser objeto de decisiones automatizadas</strong> con
            efectos jurídicos. No realizamos elaboración de perfiles ni
            decisiones automatizadas sobre los interesados.
          </li>
        </ul>
        <p>
          Puedes ejercer estos derechos enviando una solicitud a{" "}
          <a href={`mailto:${legalInfo.emailRgpd}`}>{legalInfo.emailRgpd}</a>{" "}
          indicando el derecho que deseas ejercer y acompañando, cuando sea
          necesario, copia de un documento que acredite tu identidad.
        </p>
        <p>
          Si consideras que el tratamiento de tus datos personales no se ha
          ajustado a la normativa, puedes presentar una reclamación ante la{" "}
          <strong>Agencia Española de Protección de Datos</strong> (AEPD), C/
          Jorge Juan 6, 28001 Madrid, o a través de su sede electrónica:{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          .
        </p>
      </Section>

      <Section id="seguridad" title="8. Medidas de seguridad">
        <p>
          Aplicamos las medidas técnicas y organizativas apropiadas para
          garantizar un nivel de seguridad adecuado al riesgo del
          tratamiento, en los términos previstos por el artículo 32 del RGPD.
          Entre otras: cifrado de las comunicaciones (TLS), control de
          accesos por roles, copias de seguridad periódicas y segregación de
          entornos.
        </p>
      </Section>

      <Section id="cambios" title="9. Cambios en esta política">
        <p>
          Podemos actualizar esta política para adaptarla a cambios
          normativos, jurisprudenciales o de práctica del sector.
          Publicaremos la versión actualizada en esta misma URL e indicaremos
          la fecha de última revisión en la cabecera. Te recomendamos
          consultarla periódicamente.
        </p>
      </Section>
    </LegalShell>
  );
}
