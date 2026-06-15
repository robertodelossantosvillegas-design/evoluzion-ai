"use client";

import { motion } from "framer-motion";
import { ClipboardList, Rocket, TrendingUp, LifeBuoy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    icon: ClipboardList,
    title: "Planeación",
    desc: "Analizamos tu negocio y diseñamos la estrategia de automatización ideal.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    desc: "Construimos e integramos las soluciones de IA en tus procesos actuales.",
  },
  {
    icon: TrendingUp,
    title: "Optimización",
    desc: "Medimos resultados y afinamos cada flujo para maximizar su rendimiento.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte",
    desc: "Acompañamiento continuo para que todo siga funcionando sin problemas.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden bg-primary-900 py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Nuestra Metodología"
          title="Un proceso claro, de principio a fin"
          subtitle="Cuatro etapas pensadas para que la tecnología trabaje para ti sin complicaciones."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent lg:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass group relative rounded-2xl p-6 transition-colors duration-200 hover:border-accent/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="text-4xl font-extrabold text-white/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
