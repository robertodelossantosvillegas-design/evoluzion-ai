"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  MessagesSquare,
  PhoneCall,
  Workflow,
  MessageCircle,
  Mail,
  Smartphone,
  Boxes,
  X,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Service = {
  icon: React.ElementType;
  title: string;
  desc: string;
  whatIs: string;
  includes: string[];
  forWho: string;
};

const services: Service[] = [
  {
    icon: Bot,
    title: "Automatización con IA",
    desc: "Procesos y flujos optimizados",
    whatIs:
      "Diseñamos flujos de trabajo inteligentes que ejecutan tareas repetitivas por ti, sin intervención manual. Tu negocio opera solo, incluso cuando no estás.",
    includes: [
      "Seguimiento automático a prospectos",
      "Notificaciones y recordatorios programados",
      "Sincronización entre plataformas (CRM, WhatsApp, correo)",
      "Flujos de bienvenida para nuevos clientes",
      "Reportes y alertas automáticas",
      "Recuperación de clientes inactivos",
    ],
    forWho: "Ideal para negocios que pierden tiempo en tareas manuales y quieren operar más eficientemente.",
  },
  {
    icon: MessagesSquare,
    title: "Chatbots IA",
    desc: "WhatsApp, web, Instagram 24/7",
    whatIs:
      "Un asistente virtual con inteligencia artificial que responde a tus clientes al instante, califica prospectos y agenda citas, las 24 horas del día.",
    includes: [
      "Respuestas automáticas en WhatsApp, Instagram y sitio web",
      "Calificación de prospectos (preguntas clave)",
      "Agendamiento de citas automatizado",
      "Personalidad y tono adaptado a tu marca",
      "Transferencia a humano cuando se necesita",
      "Historial y análisis de conversaciones",
    ],
    forWho: "Para negocios que reciben muchos mensajes y no pueden responder a todos a tiempo.",
  },
  {
    icon: PhoneCall,
    title: "Agentes de Voz IA",
    desc: "Contestan y agendan citas",
    whatIs:
      "Un agente telefónico con voz natural que atiende llamadas entrantes, responde preguntas frecuentes y agenda citas como si fuera una recepcionista real.",
    includes: [
      "Atención de llamadas entrantes 24/7",
      "Respuestas a preguntas frecuentes por voz",
      "Agendamiento de citas en tiempo real",
      "Transferencia a persona cuando se requiere",
      "Voz personalizada con el nombre de tu negocio",
      "Reporte de llamadas y métricas",
    ],
    forWho: "Para clínicas, consultorios, restaurantes y negocios de servicios con alto volumen de llamadas.",
  },
  {
    icon: Workflow,
    title: "CRM Inteligente",
    desc: "Pipeline y seguimiento automático",
    whatIs:
      "Un sistema centralizado que organiza a todos tus prospectos y clientes, automatiza el seguimiento y te muestra exactamente en qué etapa está cada oportunidad.",
    includes: [
      "Pipeline visual de ventas por etapas",
      "Seguimiento automático sin acción manual",
      "Historial completo de cada prospecto",
      "Alertas cuando un prospecto se enfría",
      "Integración con WhatsApp, correo y llamadas",
      "Dashboard de ventas en tiempo real",
    ],
    forWho: "Para equipos de ventas y negocios que quieren cerrar más tratos sin que ningún prospecto se pierda.",
  },
  {
    icon: MessageCircle,
    title: "Automatización WhatsApp",
    desc: "Confirmaciones y recuperación",
    whatIs:
      "Flujos automáticos por WhatsApp que confirman citas, hacen seguimiento post-venta, recuperan clientes que no regresaron y nutren prospectos.",
    includes: [
      "Confirmación automática de citas",
      "Recordatorios 24h y 1h antes",
      "Seguimiento post-venta",
      "Recuperación de clientes inactivos",
      "Mensajes personalizados con nombre del cliente",
      "Secuencias de nutrición de prospectos",
    ],
    forWho: "Cualquier negocio que use WhatsApp como canal principal de comunicación con sus clientes.",
  },
  {
    icon: Mail,
    title: "Automatización Email",
    desc: "Secuencias y nutrición de leads",
    whatIs:
      "Campañas y secuencias de correo automatizadas que llegan en el momento justo para convertir prospectos en clientes y fidelizar a los que ya compraron.",
    includes: [
      "Secuencias de bienvenida para nuevos leads",
      "Correos de seguimiento post-cotización",
      "Campañas de reactivación de clientes",
      "Newsletter mensual automatizado",
      "Seguimiento post-compra y solicitud de reseña",
      "Segmentación por tipo de cliente",
    ],
    forWho: "Para negocios con base de datos de contactos que quieren sacarle más valor a su lista.",
  },
  {
    icon: Smartphone,
    title: "Automatización SMS",
    desc: "Recordatorios y confirmaciones",
    whatIs:
      "Mensajes de texto automáticos de alta apertura (98%) que llegan directo al teléfono de tus clientes para recordarles, confirmarles o reactivarlos.",
    includes: [
      "Confirmación de citas por SMS",
      "Recordatorios 24h y 2h antes",
      "Alertas de promociones o novedades",
      "Recuperación de carritos abandonados (e-commerce)",
      "Mensajes de seguimiento post-servicio",
      "Opt-out automático para cumplimiento legal",
    ],
    forWho: "Clínicas, restaurantes, spas, salones y cualquier negocio con citas o reservas.",
  },
  {
    icon: Boxes,
    title: "Soluciones a Medida",
    desc: "Integraciones sin límites técnicos",
    whatIs:
      "Si tienes un proceso específico que no encaja en las soluciones estándar, lo construimos desde cero. Conectamos cualquier plataforma y automatizamos cualquier flujo.",
    includes: [
      "Análisis y diseño del flujo personalizado",
      "Integración con cualquier plataforma o API",
      "Automatizaciones multi-canal complejas",
      "Conexión con sistemas propios o software especializado",
      "Dashboard y reportería a la medida",
      "Documentación del proceso entregada",
    ],
    forWho: "Para negocios con procesos únicos o que ya usan plataformas específicas que necesitan conectar.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="servicios" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          light
          eyebrow="Servicios"
          title={
            <>
              Todo lo que necesitas para{" "}
              <span className="text-gradient-blue">automatizar tu negocio</span>
            </>
          }
          subtitle="Cada servicio está diseñado para resolver un problema específico. Haz clic en cualquiera para conocer los detalles."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.button
              key={s.title}
              type="button"
              onClick={() => setSelected(s)}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex cursor-pointer items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-left transition-all duration-200 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-md shadow-secondary/20">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold leading-tight text-primary-900">
                  {s.title}
                </h3>
                <p className="mt-0.5 truncate text-xs text-slate-500">
                  {s.desc}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-secondary" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Service detail modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-primary-950 p-7 shadow-2xl shadow-black/60"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/8 text-slate-400 transition-colors duration-200 hover:bg-white/15 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/25">
                  <selected.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                  <p className="text-sm text-slate-400">{selected.desc}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                {selected.whatIs}
              </p>

              <div className="mt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-400">
                  Qué incluye
                </p>
                <ul className="space-y-2.5">
                  {selected.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-secondary/25">
                        <Check className="h-3 w-3 text-secondary-300" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
                <p className="text-xs text-slate-400">
                  <span className="font-semibold text-accent-400">¿Para quién es? </span>
                  {selected.forWho}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#contacto"
                  onClick={() => setSelected(null)}
                  className="group flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700"
                >
                  Quiero este servicio
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="cursor-pointer rounded-xl border border-white/12 px-4 py-3 text-sm text-slate-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
