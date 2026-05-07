const CONTACT_EMAIL = "eric@grupoimar-mantenimiento.com";
const CALENDLY_DEFAULT = "https://calendly.com/castillonavarro-eric/30min";

const mailtoFallback = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const ctaUrls = {
  contactEmail: CONTACT_EMAIL,
  emailSubject: "Tablero — Consulta",
  mailto: mailtoFallback("Tablero — Consulta"),

  reservarDemo: process.env.NEXT_PUBLIC_CALENDLY_URL || CALENDLY_DEFAULT,

  empezarPrueba:
    process.env.NEXT_PUBLIC_TRIAL_URL ||
    mailtoFallback("Tablero — Empezar prueba 14 días"),

  pricing: {
    Esencial:
      process.env.NEXT_PUBLIC_STRIPE_LINK_ESENCIAL ||
      mailtoFallback("Tablero — Suscribirse al plan Esencial (199 €/mes anual)"),
    Estándar:
      process.env.NEXT_PUBLIC_STRIPE_LINK_ESTANDAR ||
      mailtoFallback("Tablero — Suscribirse al plan Estándar (299 €/mes anual)"),
    Avanzado:
      process.env.NEXT_PUBLIC_STRIPE_LINK_AVANZADO ||
      mailtoFallback("Tablero — Hablar de plan Avanzado (multi-planta)"),
  } as const,
};

export type PricingPlan = keyof typeof ctaUrls.pricing;
