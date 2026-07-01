"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, X, Info } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Plan = {
  name: string;
  price: string;
  prefix?: string;
  suffix?: string;
  setup: string;
  target: string;
  example: string;
  features: string[];
  featureDetails: Record<string, string>;
  highlighted?: boolean;
  enterprise?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$2,500",
    suffix: " MXN/mes",
    setup: "$4,000 MXN de instalación única",
    target: "Negocios que apenas van a automatizar su primer proceso",
    example: "Ej: recordatorio de cita 24h antes por WhatsApp, automático.",
    features: [
      "1 pipeline de ventas (5 etapas)",
      "Chatbot IA en WhatsApp",
      "Calendario de citas",
      "1 formulario de captura",
      "3 automatizaciones clave",
      "Gestión de reseñas",
      "Dashboard básico",
      "Soporte por correo",
    ],
    featureDetails: {
      "1 pipeline de ventas (5 etapas)": "Un tablero visual donde ves a todos tus prospectos organizados: Nuevo → Contactado → Cotizado → Negociación → Cerrado. Nunca pierdes de vista a nadie.",
      "Chatbot IA en WhatsApp": "Un asistente inteligente que responde a tus clientes en WhatsApp al instante, aunque sean las 3am. Califica prospectos y los direcciona contigo.",
      "Calendario de citas": "Tus clientes pueden agendar citas directamente desde WhatsApp o tu web. Recibes una confirmación y ellos un recordatorio automático.",
      "1 formulario de captura": "Un formulario conectado a tu pipeline. Cada persona que lo llena entra automáticamente como prospecto en tu CRM.",
      "3 automatizaciones clave": "Tres flujos automáticos diseñados para tu negocio: por ejemplo, seguimiento al prospecto nuevo, recordatorio de cita y mensaje post-servicio.",
      "Gestión de reseñas": "Después de cada servicio, el sistema envía automáticamente un mensaje pidiendo una reseña en Google o donde prefieras.",
      "Dashboard básico": "Un panel donde ves cuántos prospectos tienes, cuántas citas se agendaron y cómo va tu embudo de ventas.",
      "Soporte por correo": "Resolvemos tus dudas y ajustes en un plazo de 24-48 horas hábiles por correo.",
    },
  },
  {
    name: "Growth",
    price: "$5,500",
    suffix: " MXN/mes",
    setup: "$6,000 MXN de instalación única",
    highlighted: true,
    target: "Negocios que quieren crecer activamente",
    example: "Ej: reactivación automática de clientes inactivos a los 30 días.",
    features: [
      "Todo lo de Starter",
      "WhatsApp + Instagram + Facebook + Web",
      "Email + SMS incluidos",
      "8 automatizaciones específicas para tu industria",
      "1 landing page de captura",
      "Reporte mensual + revisión bimestral",
      "Soporte prioritario (24h)",
    ],
    featureDetails: {
      "Todo lo de Starter": "Incluye el pipeline de ventas, chatbot de WhatsApp, calendario de citas, formulario de captura, 3 automatizaciones base, gestión de reseñas y dashboard.",
      "WhatsApp + Instagram + Facebook + Web": "Tu chatbot de IA está presente en todos tus canales. Un prospecto desde Instagram recibe la misma atención inmediata que uno de WhatsApp.",
      "Email + SMS incluidos": "Secuencias de correo y mensajes de texto automáticos para nutrir prospectos y hacer seguimiento. Se suman a tu estrategia de WhatsApp.",
      "8 automatizaciones específicas para tu industria": "Diseñamos 8 flujos automáticos pensados exactamente para tu tipo de negocio: si eres restaurante, son distintos a si eres clínica o inmobiliaria.",
      "1 landing page de captura": "Una página web optimizada para convertir visitas en prospectos, conectada directamente a tu CRM y chatbot.",
      "Reporte mensual + revisión bimestral": "Cada mes recibes un reporte de tus métricas. Cada dos meses hacemos una revisión contigo para ajustar lo que sea necesario.",
      "Soporte prioritario (24h)": "Respondemos en máximo 24 horas hábiles. Tus ajustes y solicitudes van al frente de la fila.",
    },
  },
  {
    name: "Premium",
    price: "$9,500",
    suffix: " MXN/mes",
    setup: "$9,000 MXN de instalación única",
    enterprise: true,
    target: "Negocios que ya facturan bien y quieren máximo apalancamiento",
    example: "Ej: agente de voz que agenda, confirma y hace seguimiento post-cita.",
    features: [
      "Todo lo de Growth",
      "Voice AI (agente de voz)",
      "Hasta 15 automatizaciones",
      "Funnel de ventas multi-página",
      "Dashboard avanzado",
      "Revisión mensual 1 a 1",
      "Soporte mismo día",
    ],
    featureDetails: {
      "Todo lo de Growth": "Incluye todo el plan Growth: todos los canales, 8 automatizaciones base, landing page, reportes y soporte prioritario.",
      "Voice AI (agente de voz)": "Un agente telefónico con voz natural que contesta llamadas, responde preguntas frecuentes y agenda citas. Funciona 24/7 como si fuera una recepcionista.",
      "Hasta 15 automatizaciones": "Construimos hasta 15 flujos automáticos a medida para tu negocio, cubriendo desde la captación hasta la fidelización y recompra.",
      "Funnel de ventas multi-página": "Un embudo completo de varias páginas: anuncio → landing → página de gracias → secuencia de seguimiento. Todo conectado y automatizado.",
      "Dashboard avanzado": "Panel con métricas detalladas: tasa de conversión por canal, tiempo promedio de cierre, prospectos por fuente, ingresos estimados.",
      "Revisión mensual 1 a 1": "Una llamada mensual directamente con nuestro equipo para revisar resultados, resolver dudas y planear el siguiente mes.",
      "Soporte mismo día": "Cualquier ajuste o incidencia lo atendemos el mismo día hábil. Máxima prioridad.",
    },
  },
];

export default function AutomationPackages() {
  const [detailPlan, setDetailPlan] = useState<Plan | null>(null);

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid items-stretch gap-6 md:grid-cols-3"
      >
        {plans.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className={`relative flex flex-col rounded-3xl p-7 transition-colors duration-200 ${
              p.highlighted
                ? "border-2 border-accent bg-gradient-to-b from-accent/15 to-secondary/5 shadow-2xl shadow-accent/25 xl:scale-[1.03]"
                : p.enterprise
                  ? "border border-white/10 bg-primary-950"
                  : "glass hover:border-secondary/40"
            }`}
          >
            {p.highlighted && (
              <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-secondary to-accent px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                <Sparkles className="h-3.5 w-3.5" />
                Más Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-white">{p.name}</h3>
            <p className="mt-1 min-h-[2.5rem] text-sm text-slate-400">
              {p.target}
            </p>
            <div className="mt-5">
              {p.prefix && (
                <span className="text-xs text-slate-400">{p.prefix}</span>
              )}
              <span className="font-mono text-4xl font-bold text-white">
                {p.price}
              </span>
              <span className="text-sm text-slate-400">{p.suffix}</span>
              <p className="mt-1 text-xs text-slate-500">{p.setup}</p>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-slate-200"
                >
                  <span
                    className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                      p.highlighted ? "bg-accent" : "bg-secondary/30"
                    }`}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className={`mt-5 text-xs italic leading-relaxed ${p.highlighted ? "text-accent-400/80" : "text-slate-500"}`}>
              {p.example}
            </p>
            <a
              href="#contacto"
              className={`group mt-4 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                p.highlighted
                  ? "bg-secondary text-white shadow-lg shadow-secondary/30 hover:bg-secondary-700"
                  : p.enterprise
                    ? "bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90"
                    : "border border-white/15 text-white hover:bg-white/10"
              }`}
            >
              {p.enterprise ? "Contáctanos" : "Comenzar ahora"}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setDetailPlan(p)}
              className="mt-3 flex cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-xs text-slate-400 transition-colors duration-200 hover:text-white"
            >
              <Info className="h-3.5 w-3.5" />
              ¿Qué significa cada punto?
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Plan detail modal */}
      <AnimatePresence>
        {detailPlan && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDetailPlan(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-primary-950 shadow-2xl shadow-black/60"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-7 py-5">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Plan {detailPlan.name} — Detalle completo
                  </h3>
                  <p className="text-sm text-slate-400">{detailPlan.target}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setDetailPlan(null)}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/8 text-slate-400 transition-colors duration-200 hover:bg-white/15 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto px-7 py-5">
                <ul className="space-y-5">
                  {detailPlan.features.map((f) => (
                    <li key={f}>
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-secondary/30">
                          <Check className="h-3 w-3 text-secondary-300" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{f}</p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">
                            {detailPlan.featureDetails[f]}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/8 px-7 py-5">
                <a
                  href="#contacto"
                  onClick={() => setDetailPlan(null)}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700"
                >
                  Quiero el plan {detailPlan.name}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
