/**
 * Datos legales centralizados para las páginas /aviso-legal, /privacidad y /cookies.
 *
 * IMPORTANTE — antes de publicar a producción, completar los campos marcados
 * como `PENDIENTE`. Mientras estén con ese marcador, las páginas legales
 * renderizarán un highlight visual amarillo imposible de ignorar.
 */

export const PENDING = {
  /** DNI/NIF del titular del sitio. Pendiente de alta de autónomo. */
  nif: "PENDIENTE: NIF tras alta de autónomo",
  /** Domicilio fiscal completo (calle, nº, CP, municipio, provincia). */
  domicilioFiscal: "PENDIENTE: domicilio fiscal",
  /** Provincia para fijar fuero contractual con clientes no consumidores. */
  provincia: "PENDIENTE: provincia",
  /** Teléfono comercial publicable. Móvil España OK. */
  telefono: "PENDIENTE: teléfono comercial",
} as const;

export const legalInfo = {
  // Identidad del titular y responsable de tratamiento
  titular: "Eric Castillo Navarro",
  marca: "Intralogik",
  nif: PENDING.nif,
  domicilioFiscal: PENDING.domicilioFiscal,
  provincia: PENDING.provincia,

  // Contacto
  email: "info@intralogik.com",
  emailRgpd: "info@intralogik.com",
  telefono: PENDING.telefono,

  // Sitio
  sitioUrl: "https://www.intralogik.com",
  sitioNombre: "www.intralogik.com",

  // Servicio
  servicio:
    "GMAO ligero (gestión de mantenimiento asistida por ordenador) en modalidad SaaS para PYMEs industriales españolas",

  // Encargados de tratamiento (third parties que tocan datos personales)
  encargados: [
    {
      nombre: "Vercel Inc.",
      finalidad: "Hosting de la web y métricas agregadas (Analytics, Speed Insights)",
      pais: "Estados Unidos",
      garantia:
        "EU-US Data Privacy Framework (DPF) y cláusulas contractuales tipo de la Comisión Europea",
      web: "https://vercel.com/legal/privacy-policy",
    },
    {
      nombre: "Calendly LLC",
      finalidad: "Programación de reuniones de demostración",
      pais: "Estados Unidos",
      garantia: "EU-US Data Privacy Framework (DPF)",
      web: "https://calendly.com/privacy",
    },
    {
      nombre: "Google LLC",
      finalidad: "Correo electrónico corporativo (Google Workspace) para gestión de comunicaciones",
      pais: "Estados Unidos",
      garantia: "EU-US Data Privacy Framework (DPF)",
      web: "https://policies.google.com/privacy",
    },
  ],

  // Plazos
  plazoConsultas: "12 meses desde la última comunicación",
  plazoClientes: "durante la relación contractual y 6 años adicionales (art. 30 Código de Comercio)",

  // Fecha de última revisión (formato humano ES)
  fechaActualizacion: "7 de mayo de 2026",
  fechaActualizacionISO: "2026-05-07",
} as const;

/** Helper: detecta si un valor del frontmatter aún es placeholder. */
export function isPending(value: string): boolean {
  return value.startsWith("PENDIENTE:");
}
