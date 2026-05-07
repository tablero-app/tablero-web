const CONTACT_EMAIL = "info@intralogik.com";
const CALENDLY_DEFAULT = "https://calendly.com/castillonavarro-eric/30min";

const mailtoFallback = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const ctaUrls = {
  contactEmail: CONTACT_EMAIL,
  emailSubject: "Intralogik — Consulta",
  mailto: mailtoFallback("Intralogik — Consulta"),

  reservarDemo: process.env.NEXT_PUBLIC_CALENDLY_URL || CALENDLY_DEFAULT,

  empezarPrueba:
    process.env.NEXT_PUBLIC_TRIAL_URL ||
    mailtoFallback("Intralogik — Empezar prueba 14 días"),

  pricing: {
    Esencial:
      process.env.NEXT_PUBLIC_STRIPE_LINK_ESENCIAL ||
      mailtoFallback("Intralogik — Suscribirse al plan Esencial (199 €/mes anual)"),
    Estándar:
      process.env.NEXT_PUBLIC_STRIPE_LINK_ESTANDAR ||
      mailtoFallback("Intralogik — Suscribirse al plan Estándar (299 €/mes anual)"),
    Avanzado:
      process.env.NEXT_PUBLIC_STRIPE_LINK_AVANZADO ||
      mailtoFallback("Intralogik — Hablar de plan Avanzado (multi-planta)"),
  } as const,
};

export type PricingPlan = keyof typeof ctaUrls.pricing;
