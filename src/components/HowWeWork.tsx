"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Cog,
  FlaskConical,
  Send,
  RefreshCw,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    icon: Search,
    title: "Conocemos",
    desc: "Entendemos tu negocio, tus retos y tus objetivos.",
  },
  {
    icon: PenTool,
    title: "Diseñamos",
    desc: "Creamos la estrategia y los flujos de automatización a medida.",
  },
  {
    icon: Cog,
    title: "Implementamos",
    desc: "Construimos e integramos las soluciones en tus procesos.",
  },
  {
    icon: FlaskConical,
    title: "Probamos",
    desc: "Validamos cada flujo para garantizar que todo funcione perfecto.",
  },
  {
    icon: Send,
    title: "Lanzamos",
    desc: "Ponemos tu automatización a trabajar en el mundo real.",
  },
  {
    icon: RefreshCw,
    title: "Optimizamos",
    desc: "Medimos, ajustamos y mejoramos continuamente los resultados.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-primary-900 py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Proceso"
          title="Así trabajamos contigo"
          subtitle="Un camino transparente, paso a paso, desde la primera idea hasta la mejora continua."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 space-y-3"
        >
          <div className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-secondary/50 via-accent/40 to-transparent sm:left-[31px]" />
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              variants={fadeUp}
              className="glass group relative flex items-start gap-5 rounded-2xl p-5 transition-colors duration-200 hover:border-accent/40"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-accent-400">
                    Paso 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
