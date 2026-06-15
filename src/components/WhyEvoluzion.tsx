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
  },
  {
    icon: Gauge,
    title: "Implementación rápida",
    desc: "Ponemos tu automatización a trabajar en tiempo récord.",
  },
  {
    icon: Cpu,
    title: "Tecnología moderna",
    desc: "Usamos las herramientas de IA más avanzadas del mercado.",
  },
  {
    icon: Puzzle,
    title: "Soluciones a medida",
    desc: "Nos adaptamos a tus procesos, no al revés.",
  },
  {
    icon: Maximize2,
    title: "Escalabilidad",
    desc: "Crece sin límites: tu automatización crece contigo.",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    desc: "Soporte continuo orientado a lo que de verdad importa: vender más.",
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
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-6 transition-colors duration-200 hover:border-accent/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-400 transition-colors duration-200 group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-accent group-hover:text-white">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
