"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Gauge,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: MessageCircle,
    text: "Comunicación directa",
    sub: "Siempre sabes con quién hablas y cómo contactarnos",
  },
  {
    icon: Gauge,
    text: "Implementación rápida",
    sub: "Sistema en operación en 2–3 semanas",
  },
  {
    icon: LayoutDashboard,
    text: "Dashboard de resultados",
    sub: "Visibilidad en tiempo real de prospectos y automatizaciones activas",
  },
  {
    icon: TrendingUp,
    text: "Soporte activo",
    sub: "Disponibles para cualquier ajuste o duda según tu plan",
  },
];

export default function TrustBadge() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Launch honesty banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10 rounded-2xl border border-accent/20 bg-accent/5 px-6 py-4 text-center"
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
          <span className="text-sm text-slate-300">
            <span className="font-semibold text-white">Agencia en fase de lanzamiento.</span>{" "}
            Trabajamos de cerca con cada cliente para garantizar resultados — sin procesos en piloto automático.
          </span>
        </motion.div>

        {/* Differentiator pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.text}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.03] p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 text-accent-400">
                <p.icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{p.text}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/*
          TODO: Testimonials — agregar aquí cuando existan reseñas reales de clientes.
          Estructura sugerida:
          <TestimonialGrid items={[
            { name: "Nombre Cliente", business: "Tipo de negocio", quote: "...", avatar: "/avatars/x.jpg" }
          ]} />
        */}

        {/*
          TODO: Client logos — agregar aquí cuando existan clientes con permiso de mostrar su logo.
          Estructura sugerida:
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-50">
            <img src="/logos/cliente-x.svg" alt="Cliente X" className="h-6" />
          </div>
        */}
      </div>
    </section>
  );
}
