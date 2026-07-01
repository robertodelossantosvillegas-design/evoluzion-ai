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
                className="glass-card group relative flex flex-col items-center rounded-3xl p-7 text-center transition-all duration-300"
              >
                <span className="pointer-events-none absolute right-5 top-5 select-none font-mono text-[3rem] font-black leading-none text-white/[0.04]">
                  {i + 1}
                </span>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-xl shadow-secondary/30 transition-shadow duration-300 group-hover:shadow-accent/30">
                  <s.icon className="h-7 w-7" />
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </motion.div>
              {i < mainSteps.length - 1 && (
                <motion.div
                  variants={fadeUp}
                  className="flex items-center justify-center"
                >
                  <div className="flex h-8 w-8 rotate-90 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent-400 lg:rotate-0">
                    <ArrowRight className="h-4 w-4" />
                  </div>
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
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {detailSteps.map((d, i) => (
              <motion.span
                key={d.title}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur"
              >
                <d.icon className={`h-4 w-4 ${i % 2 === 0 ? "text-secondary-400" : "text-accent-400"}`} />
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
            className="group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-secondary to-secondary-700 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-secondary/35 transition-all duration-300 hover:shadow-secondary/55 animate-glow-pulse"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agenda tu diagnóstico gratis
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
