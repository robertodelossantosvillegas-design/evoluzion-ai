"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "Depende del alcance, pero la mayoría de los proyectos quedan listos entre 1 y 3 semanas. Las automatizaciones básicas pueden estar funcionando en pocos días.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Para nada. Nosotros nos encargamos de toda la parte técnica. Tú solo nos cuentas tu negocio y te entregamos todo funcionando.",
  },
  {
    q: "¿Qué pasa si mi negocio es pequeño?",
    a: "Justamente ahí es donde la automatización más se nota: haces el trabajo de un equipo sin contratar más gente. El plan Starter está diseñado para negocios que apenas empiezan a automatizar.",
  },
  {
    q: "¿Puedo integrar WhatsApp con mis procesos?",
    a: "Sí. WhatsApp es uno de nuestros canales principales: chatbots, seguimientos, confirmaciones, recuperación de clientes y ventas asistidas.",
  },
  {
    q: "¿Pueden crear mi página web?",
    a: "Claro. Ofrecemos desde landing pages hasta sitios premium y e-commerce, todos optimizados para conversión y con opción de IA integrada.",
  },
  {
    q: "¿Qué incluye el soporte?",
    a: "Acompañamiento continuo, monitoreo de tus automatizaciones, ajustes y resolución de incidencias según el plan que elijas.",
  },
  {
    q: "¿Trabajan con cualquier tipo de negocio?",
    a: "Sí. Hemos diseñado soluciones para despachos, clínicas, restaurantes, e-commerce, inmobiliarias, agencias, constructoras y consultores, entre otros.",
  },
  {
    q: "¿Cómo funciona el chatbot de IA?",
    a: "Entiende lenguaje natural, responde preguntas, califica prospectos y ejecuta acciones como agendar citas, las 24 horas del día.",
  },
  {
    q: "¿Qué plataformas pueden automatizar?",
    a: "WhatsApp, sitio web, Instagram, Facebook, correo, SMS, CRMs y prácticamente cualquier herramienta con la que ya trabajes.",
  },
  {
    q: "¿Tienen contratos a largo plazo?",
    a: "Trabajamos con flexibilidad. No te amarramos a contratos forzosos: nuestra meta es que te quedes por resultados.",
  },
  {
    q: "¿Puedo escalar mi plan en el futuro?",
    a: "Por supuesto. Puedes empezar con un plan básico y crecer agregando canales, flujos y agentes cuando lo necesites.",
  },
  {
    q: "¿Cómo se mide el éxito de la automatización?",
    a: "Definimos contigo indicadores claros: tiempo ahorrado, prospectos atendidos, conversiones y respuesta. Medimos y optimizamos constantemente.",
  },
  {
    q: "¿Qué pasa si algo falla?",
    a: "Monitoreamos tus flujos y contamos con soporte para resolver cualquier incidencia rápidamente, según tu plan.",
  },
  {
    q: "¿Los chatbots pueden hablar como si fueran humanos?",
    a: "Sí. Configuramos el tono y la personalidad de tu marca para que la conversación sea natural y cercana.",
  },
  {
    q: "¿Puedo ver el progreso en tiempo real?",
    a: "Te damos visibilidad de tus automatizaciones y, en planes avanzados, paneles para seguir tus métricas en tiempo real.",
  },
  {
    q: "¿Cómo inicio el proceso?",
    a: "Muy fácil: agenda una llamada con nosotros. Conocemos tu negocio, te proponemos una solución y comenzamos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-primary-900 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitas saber antes de empezar."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 space-y-3"
        >
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-accent/25 bg-gradient-to-b from-white/[0.05] to-white/[0.02]"
                    : "glass"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-white/5"
                >
                  <span className={`text-sm font-semibold sm:text-base transition-colors duration-200 ${isOpen ? "text-white" : "text-slate-200"}`}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      isOpen ? "bg-accent/15 text-accent-400" : "bg-white/10 text-slate-400"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
