import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const preguntas = [
  {
    q: "¿Funciona si tenemos mala cobertura WiFi en planta?",
    a: "Sí. El form móvil de Intralogik funciona con datos del operario o con WiFi. Si la cobertura cae justo al enviar, el sistema reintenta automáticamente cuando vuelve la red. La incidencia no se pierde.",
  },
  {
    q: "¿Qué pasa si un operario no tiene smartphone?",
    a: "Cualquier móvil moderno con cámara basta — el form va por web, no por app. Si en alguna sección de planta no hay móviles personales, dejamos un par de tablets fijas con un QR de \"modo planta\". Lo hemos resuelto en todas las plantas hasta ahora.",
  },
  {
    q: "¿Tenemos que cambiar nuestros procedimientos?",
    a: "No. El sistema se adapta a cómo trabajáis hoy: tus prioridades, tus turnos, tus técnicos, tu organigrama. Lo único que cambia es que la información queda registrada en lugar de perdida.",
  },
  {
    q: "¿Lo podemos integrar con nuestro ERP?",
    a: "Sí. Mediante exportes automáticos en CSV/Excel, API REST en el plan Avanzado, o conector a medida si tu ERP necesita algo específico. La integración sale como add-on en el plan Avanzado o como proyecto puntual. Te decimos coste y plazo en la primera llamada.",
  },
  {
    q: "¿Qué pasa con los datos si dejamos de pagar?",
    a: "Te los exportas a Excel cuando quieras, también el día que te das de baja. No tenemos rehén. Tu histórico es tuyo siempre.",
  },
  {
    q: "¿Lo podemos probar antes de comprar?",
    a: "Sí. 14 días gratis con tu propia planta, no con datos de demo. Sin tarjeta, sin permanencia. Si al final no encaja, no encaja.",
  },
  {
    q: "¿Funciona offline?",
    a: "Intralogik es una aplicación web móvil — funciona desde cualquier navegador del operario. Si la cobertura cae justo al enviar la incidencia, el form la guarda y la reintenta cuando vuelve la red, así que no se pierde. El panel del responsable de mantenimiento sí necesita conexión, pero hoy las oficinas la tienen siempre.",
  },
  {
    q: "¿Es compatible con auditorías ISO 9001 / 14001 / 45001?",
    a: "Sí. Intralogik registra incidencias, órdenes de trabajo, repuestos consumidos, técnico responsable, fecha de cierre e historial por máquina. Esa trazabilidad es exactamente lo que pide una auditoría ISO 9001, 14001 o 45001 — sobre todo si hoy dependes de partes en papel o Excel. En el plan Avanzado, las OTs incluyen firma digital del técnico al cierre.",
  },
  {
    q: "¿Hace falta un informático en plantilla?",
    a: "No. El sistema lo configuramos nosotros la primera vez y luego lo gestiona el jefe de mantenimiento desde el panel. Si surge un problema técnico, va a nuestro soporte directamente.",
  },
  {
    q: "¿Y si tenemos varias plantas?",
    a: "Sí, el plan Avanzado de Intralogik soporta multi-planta. Cada planta entra cuando está lista, no hay que arrancar las cinco a la vez. Dirección ve el dashboard consolidado, cada jefe de planta ve solo la suya.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <div className="md:sticky md:top-24 md:self-start">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span
                aria-hidden="true"
                className="inline-block h-px w-8"
                style={{ background: "var(--intralogik-orange)" }}
              />
              FAQ
            </span>

            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
            >
              Preguntas que{" "}
              <span style={{ color: "var(--intralogik-orange)" }}>
                ya nos han hecho.
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Si tu pregunta no está aquí,{" "}
              <a
                href="#cta"
                className="font-medium text-foreground underline underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
              >
                escríbenos
              </a>
              . Si es buena, la añadimos.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {preguntas.map((p, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold leading-snug text-foreground hover:no-underline md:text-lg">
                  <span className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs tabular text-muted-foreground"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>{" "}
                    <span>{p.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {p.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
