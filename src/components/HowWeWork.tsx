"use client";

import { motion } from "framer-motion";
import {
  Search,
  Cog,
  TrendingUp,
  PenTool,
  FlaskConical,
  Send,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const mainSteps = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Entendemos tu negocio, tus retos y dónde la IA genera más impacto.",
  },
  {
    icon: Cog,
    title: "Implementación",
    desc: "Diseñamos, construimos e integramos las automatizaciones a tu medida.",
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    desc: "Lanzamos, medimos y optimizamos para que crezcas en automático.",
  },
];

const detailSteps = [
  { icon: PenTool, title: "Diseñamos" },
  { icon: FlaskConical, title: "Probamos" },
  { icon: Send, title: "Lanzamos" },
  { icon: RefreshCw, title: "Optimizamos" },
];

export default function HowWeWork() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-primary-900 py-24"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Proceso"
          title="Así trabajamos contigo"
          subtitle="Un camino transparente, paso a paso, desde la primera idea hasta la mejora continua."
        />

        {/* horizontal 3-step flow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch"
        >
          {mainSteps.map((s, i) => (
            <div key={s.title} className="contents">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="glass group relative flex flex-col items-center rounded-3xl p-7 text-center transition-colors duration-200 hover:border-accent/40"
              >
                <span className="absolute right-5 top-5 font-mono text-3xl font-bold text-white/10">
                  0{i + 1}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              </motion.div>
              {i < mainSteps.length - 1 && (
                <motion.div
                  variants={fadeUp}
                  className="flex items-center justify-center text-accent-400"
                >
                  <ArrowRight className="h-7 w-7 rotate-90 lg:rotate-0" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* secondary detail row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-center font-mono text-xs uppercase tracking-widest text-slate-400"
          >
            Dentro de cada fase
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {detailSteps.map((d) => (
              <motion.span
                key={d.title}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                <d.icon className="h-4 w-4 text-accent-400" />
                {d.title}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            ¿Listo para empezar?
          </h3>
          <a
            href="#contacto"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700 hover:shadow-secondary/50"
          >
            Agenda tu diagnóstico gratis
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
