"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Clock, Zap, Headphones } from "lucide-react";
import { useMousePosition } from "@/lib/hooks";
import { staggerContainer, fadeUp } from "@/lib/motion";

const stats = [
  { icon: Clock, title: "IA 24/7", desc: "Trabaja sin descanso por ti" },
  { icon: Zap, title: "Resultados rápidos", desc: "Implementación ágil" },
  { icon: Headphones, title: "Soporte continuo", desc: "Estamos contigo siempre" },
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Agencia de Automatización con IA · México
          </motion.span>

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
            Implementamos inteligencia artificial, automatizaciones y soluciones
            digitales que trabajan por ti las 24 horas del día.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700 hover:shadow-secondary/50"
            >
              Agenda una llamada
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/10"
            >
              Ver servicios
            </a>
          </motion.div>
        </motion.div>

        {/* floating stat cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative mx-auto grid w-full max-w-sm gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className={`glass flex items-center gap-4 rounded-2xl p-5 ${
                i === 1 ? "lg:translate-x-8" : ""
              } ${!reduce ? "animate-float" : ""}`}
              style={{ animationDelay: `${i * 1.2}s` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">{s.title}</p>
                <p className="text-sm text-slate-300">{s.desc}</p>
              </div>
            </motion.div>
          ))}
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
