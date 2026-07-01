"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Gauge,
  Cpu,
  Puzzle,
  Maximize2,
  Target,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    desc: "Cada negocio es único. Te escuchamos y diseñamos para ti.",
    accent: "from-secondary to-secondary-700",
    glow: "shadow-secondary/20",
  },
  {
    icon: Gauge,
    title: "Implementación rápida",
    desc: "Ponemos tu automatización a trabajar en tiempo récord.",
    accent: "from-secondary to-accent",
    glow: "shadow-accent/20",
  },
  {
    icon: Cpu,
    title: "Tecnología moderna",
    desc: "Usamos las herramientas de IA más avanzadas del mercado.",
    accent: "from-violet-500 to-secondary",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Puzzle,
    title: "Soluciones a medida",
    desc: "Nos adaptamos a tus procesos, no al revés.",
    accent: "from-accent to-emerald-400",
    glow: "shadow-emerald-400/20",
  },
  {
    icon: Maximize2,
    title: "Escalabilidad",
    desc: "Crece sin límites: tu automatización crece contigo.",
    accent: "from-sky-500 to-secondary",
    glow: "shadow-sky-500/20",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    desc: "Soporte continuo orientado a lo que de verdad importa: vender más.",
    accent: "from-secondary to-accent",
    glow: "shadow-secondary/20",
  },
];

export default function WhyEvoluzion() {
  return (
    <section className="relative bg-primary-950 py-24">
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Por qué Evoluzion"
          title={
            <>
              La diferencia está en{" "}
              <span className="text-gradient-blue">cómo trabajamos</span>
            </>
          }
          subtitle="No solo implementamos tecnología: nos convertimos en tu aliado de crecimiento."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:border-white/12"
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${r.accent} text-white shadow-lg ${r.glow}`}>
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {r.desc}
              </p>
              {/* Subtle bottom glow on hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
