"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Clock, Zap, Headphones, MessageCircle } from "lucide-react";
import { useMousePosition } from "@/lib/hooks";
import { staggerContainer, fadeUp, buttonMotion } from "@/lib/motion";
import AIModesWidget from "./AIModesWidget";

const inlineStats = [
  { icon: Clock, label: "IA 24/7" },
  { icon: Zap, label: "Resultados rápidos" },
  { icon: Headphones, label: "Soporte continuo" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const { x, y } = useMousePosition();

  const tx = reduce ? 0 : (x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.02;
  const ty = reduce ? 0 : (y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.02;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary-900 pb-16 pt-32"
    >
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-secondary/25 blur-[120px] animate-blob" />
        <div className="absolute -right-20 top-40 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[120px] animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-secondary-700/20 blur-[120px] animate-blob [animation-delay:-3s]" />
      </div>

      {/* mouse-tracking glow */}
      <motion.div
        aria-hidden
        animate={{ x: tx, y: ty }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-slate-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Agencia de Automatización con IA
          </motion.span>

          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent-400"
          >
            Evolve. Automate. Dominate.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-gradient">Automatiza tu negocio.</span>
            <br />
            Vende más.{" "}
            <span className="text-gradient-blue">Trabaja menos.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Tu negocio responde a cada cliente en segundos, agenda citas y da
            seguimiento solo — las 24 horas, sin contratar más gente.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              {...buttonMotion}
              href="https://wa.me/528127591172?text=Hola%2C%20me%20interesa%20automatizar%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/35 transition-all duration-200 hover:bg-emerald-400 hover:shadow-emerald-500/55"
            >
              <MessageCircle className="h-4.5 w-4.5" />
              Escríbenos por WhatsApp
            </motion.a>
            <motion.a
              {...buttonMotion}
              href="#contacto"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/10"
            >
              Agenda una llamada
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* inline minimal stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300"
          >
            {inlineStats.map((s, i) => (
              <span key={s.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="mr-1 hidden text-slate-600 sm:inline">·</span>
                )}
                <s.icon className="h-4 w-4 text-accent-400" />
                <span className="font-medium">{s.label}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* AI chat smartphone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-[20rem]"
        >
          <div className="absolute -inset-6 rounded-[4rem] bg-secondary/25 blur-[80px]" />
          <motion.div
            animate={reduce ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[3rem] border-[6px] border-[#2A2A40] bg-[#1C1C2E] p-3 shadow-2xl shadow-black/50"
          >
            {/* notch */}
            <div className="absolute left-1/2 top-3 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-[#2A2A40]" />

            <div className="overflow-hidden rounded-[2.3rem] bg-primary-950">
              <AIModesWidget />

              {/* input bar */}
              <div className="flex items-center gap-2 border-t border-white/5 px-3 py-3">
                <div className="flex-1 rounded-full bg-white/5 px-4 py-2.5 text-xs text-slate-500">
                  Escribe un mensaje...
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#metodologia"
        aria-label="Desplázate hacia abajo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-1 text-slate-400 transition-colors hover:text-white sm:flex"
      >
        <span className="text-xs">Descubre más</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
