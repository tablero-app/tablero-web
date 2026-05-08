import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const preguntas = [
  {
    q: "¿En qué se diferencia Intralogik de un CMMS clásico tipo Maximo, Infor EAM o SAP PM?",
    a: "Maximo, Infor EAM y SAP PM son productos enterprise diseñados para corporaciones multi-planta con equipo IT propio. Intralogik es un GMAO ligero específicamente para PYME industrial española de 30-150 trabajadores. La diferencia se nota en cuatro ejes: implantación (2 semanas vs 4-9 meses), coste anual (2.400-7.200 € vs 20.000-150.000 €), curva de aprendizaje (días vs meses) y dependencia de IT propio (ninguna vs equipo IT dedicado). Si tu planta encaja en el perfil Intralogik, un CMMS enterprise está sobreequipado y dispara coste sin retorno proporcional.",
  },
  {
    q: "Si nos funciona el Excel + WhatsApp + llamada al móvil, ¿para qué cambiar?",
    a: "La pregunta no es si funciona — la mayoría de plantas españolas tira adelante así durante años. La pregunta es cuál es el coste oculto: el responsable contestando llamadas dos horas al día en lugar de planificar; las averías que se pierden porque entraron por canal equivocado; los repuestos urgentes con sobrecoste porque nadie sabía el stock; el técnico nuevo reaprendiendo cómo se reparó algo que ya se reparó cuatro veces. Si reconoces dos o más de esos patrones, Excel + WhatsApp ya no funciona — sólo lo parece, y lo pagas en otra cuenta.",
  },
  {
    q: "¿Tenemos que cambiar nuestros procedimientos?",
    a: "No. El sistema se adapta a cómo trabajáis hoy: tus prioridades, tus turnos, tus técnicos, tu organigrama. Lo único que cambia es que la información queda registrada en lugar de perdida.",
  },
  {
    q: "¿Por qué Intralogik cuesta 199 €/mes y no 49 €/mes como otros GMAO baratos del mercado?",
    a: "Porque incluye lo que los freemium cobran aparte. La implantación de 2 semanas, los QRs físicos, las plantillas de import, la formación al jefe de mantenimiento y el soporte por email están en el precio del plan, sin tarifas escondidas. Los GMAO de 49 €/mes suelen requerir un setup fee de 1.500-3.000 €, consultoría aparte para configurar el catálogo y módulos premium para preventivos o auditoría que escalan rápido. La factura anual real de uno y otro suele ser equivalente; la diferencia es que aquí lo ves desde el día uno.",
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
    q: "¿Cuándo NO deberíamos contratar Intralogik?",
    a: "Tres casos donde otra solución encaja mejor. (1) Si tienes 5+ plantas en países distintos con regulación heterogénea, necesitas un EAM enterprise tipo IBM Maximo o SAP PM, no un GMAO ligero. (2) Si tu mantenimiento es 100% software o ITSM (servidores, no máquinas físicas), un GMAO industrial está sobreequipado — mira ServiceNow o Jira Service Management. (3) Si no tienes un responsable de mantenimiento dedicado (taller pequeño donde el dueño hace todo), probablemente no necesitas un sistema todavía: cuando llegues a 30 trabajadores y empieces a perder información, vuelve.",
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
      className="border-t border-border py-14 md:py-20"
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
