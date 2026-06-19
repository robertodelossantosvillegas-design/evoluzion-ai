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
    desc: "Procesos y flujos optimizados",
  },
  {
    icon: MessagesSquare,
    title: "Chatbots IA",
    desc: "WhatsApp, web, Instagram 24/7",
  },
  {
    icon: PhoneCall,
    title: "Agentes de Voz IA",
    desc: "Contestan y agendan citas",
  },
  {
    icon: Workflow,
    title: "CRM Inteligente",
    desc: "Pipeline y seguimiento automático",
  },
  {
    icon: MessageCircle,
    title: "Automatización WhatsApp",
    desc: "Confirmaciones y recuperación",
  },
  {
    icon: Mail,
    title: "Automatización Email",
    desc: "Secuencias y nutrición de leads",
  },
  {
    icon: Smartphone,
    title: "Automatización SMS",
    desc: "Recordatorios y confirmaciones",
  },
  {
    icon: Boxes,
    title: "A Medida",
    desc: "Integraciones sin límites técnicos",
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
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.a
              key={s.title}
              href="#contacto"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
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
              <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-secondary" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
