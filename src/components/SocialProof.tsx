"use client";

import { motion } from "framer-motion";
import { Building2, Clock, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const stats = [
  {
    icon: Building2,
    value: "—",
    label: "Negocios automatizados",
    caption: "Tu empresa podría ser el primero",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Disponibilidad",
    caption: "Tus automatizaciones nunca duermen",
  },
  {
    icon: ShieldCheck,
    value: "$0 MXN",
    label: "Perdidos",
    caption: "En prospectos que no recibieron seguimiento",
  },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-24">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/15 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Resultados"
          title={
            <>
              Resultados que <span className="text-gradient-blue">hablan</span>
            </>
          }
          subtitle="Estos son los números que vamos a construir contigo, sin promesas vacías."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center rounded-3xl border border-secondary/30 bg-primary-900/60 p-8 text-center transition-colors duration-200 hover:border-accent/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 font-mono text-4xl font-bold text-white sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {s.label}
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.caption}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500"
        >
          Somos una agencia nueva. Estos resultados son los que construiremos
          juntos.
        </motion.p>
      </div>
    </section>
  );
}
