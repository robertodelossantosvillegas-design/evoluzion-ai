"use client";

import { motion } from "framer-motion";
import {
  Bot,
  MessagesSquare,
  PhoneCall,
  Workflow,
  MessageCircle,
  Mail,
  Smartphone,
  Boxes,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const services = [
  {
    icon: Bot,
    title: "Automatización con IA",
    points: ["Procesos y flujos", "Integraciones", "Optimización continua"],
  },
  {
    icon: MessagesSquare,
    title: "Chatbots IA",
    points: ["WhatsApp y sitio web", "Instagram y Facebook", "Disponibles 24/7"],
  },
  {
    icon: PhoneCall,
    title: "Agentes de Voz IA",
    points: ["Contestan llamadas", "Agendan citas", "Califican prospectos"],
  },
  {
    icon: Workflow,
    title: "CRM Inteligente",
    points: ["Seguimiento y embudos", "Recordatorios", "Pipeline de ventas"],
  },
  {
    icon: MessageCircle,
    title: "Automatización WhatsApp",
    points: ["Seguimiento y confirmaciones", "Recuperación de clientes", "Ventas asistidas"],
  },
  {
    icon: Mail,
    title: "Automatización Email",
    points: ["Secuencias automáticas", "Nutrición de leads", "Email marketing"],
  },
  {
    icon: Smartphone,
    title: "Automatización SMS",
    points: ["Recordatorios", "Confirmaciones", "Seguimiento directo"],
  },
  {
    icon: Boxes,
    title: "Automatizaciones a Medida",
    points: ["Integraciones entre plataformas", "Flujos personalizados", "Sin límites técnicos"],
  },
];

export default function Services() {
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
          subtitle="Soluciones de inteligencia artificial diseñadas para ahorrarte tiempo y multiplicar tus resultados."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary-900">{s.title}</h3>
              <ul className="mt-4 flex-1 space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-secondary transition-colors duration-200 hover:text-secondary-700"
              >
                Saber más
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
