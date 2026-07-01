"use client";

import { motion } from "framer-motion";
import { ClipboardList, Rocket, TrendingUp, LifeBuoy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    desc: "Hacemos una llamada donde analizamos tu operación e identificamos dónde se está perdiendo tiempo y dinero. Al final tienes claro qué vamos a automatizar y por qué.",
    output: "Entregable: Plan de automatización documentado",
  },
  {
    icon: Rocket,
    title: "Configuración",
    desc: "Construimos tus flujos, configuramos el chatbot con la voz de tu marca, conectamos WhatsApp, CRM, correo y cualquier plataforma que uses. Tú apruebas cada pieza antes de que salga al aire.",
    output: "Entregable: Sistema probado y listo para lanzar",
  },
  {
    icon: TrendingUp,
    title: "Lanzamiento",
    desc: "Activamos todo y verificamos que cada flujo funcione correctamente. Desde ese momento tu negocio atiende, agenda y da seguimiento sin que tengas que intervenir.",
    output: "Entregable: Automatización activa y funcionando",
  },
  {
    icon: LifeBuoy,
    title: "Soporte activo",
    desc: "Tu sistema queda monitoreado y en operación. Estamos disponibles para cualquier ajuste o duda según tu plan, y siempre tienes visibilidad de tus resultados en tu dashboard.",
    output: "Entregable: Dashboard de resultados activo",
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
          subtitle="Así trabajamos contigo: de la primera llamada hasta que tu negocio opera en automático."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* connecting glow line */}
          <div className="pointer-events-none absolute left-8 right-8 top-6 hidden h-px lg:block">
            <div className="h-full bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
            <div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-[2px]" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "rgba(0,229,192,0.3)" }}
              className="glass-card group relative flex flex-col rounded-2xl p-6 transition-all duration-300"
            >
              {/* step number — large muted watermark */}
              <span className="pointer-events-none absolute right-4 top-3 select-none font-mono text-[3.5rem] font-black leading-none text-white/[0.04]">
                {i + 1}
              </span>

              <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/25">
                <s.icon className="h-6 w-6" />
                <div className="absolute inset-0 rounded-xl opacity-0 ring-2 ring-accent/40 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {s.desc}
              </p>
              <div className="mt-4 rounded-lg border border-secondary/15 bg-secondary/5 px-3 py-2">
                <p className="text-[11px] font-medium text-secondary-300">
                  {s.output}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
