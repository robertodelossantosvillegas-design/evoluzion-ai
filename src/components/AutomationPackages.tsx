"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const plans = [
  {
    name: "Starter",
    price: "$2,990",
    prefix: "",
    desc: "Para dar tus primeros pasos en automatización.",
    features: [
      "1 chatbot IA (WhatsApp o web)",
      "Respuestas automáticas 24/7",
      "Hasta 3 flujos de automatización",
      "Configuración inicial incluida",
      "Soporte por correo",
    ],
  },
  {
    name: "Growth",
    price: "$6,990",
    prefix: "",
    highlighted: true,
    desc: "El favorito de las PYMEs en crecimiento.",
    features: [
      "Chatbots en múltiples canales",
      "CRM inteligente integrado",
      "Automatización WhatsApp + Email",
      "Hasta 10 flujos personalizados",
      "Agente de voz IA básico",
      "Soporte prioritario",
    ],
  },
  {
    name: "Scale",
    price: "$12,990",
    prefix: "desde ",
    desc: "Automatización avanzada y a tu medida.",
    features: [
      "Todo lo de Growth",
      "Flujos ilimitados",
      "Agentes de voz IA avanzados",
      "Integraciones a medida",
      "Optimización mensual dedicada",
      "Gerente de cuenta asignado",
    ],
  },
];

export default function AutomationPackages() {
  return (
    <section
      id="precios"
      className="relative overflow-hidden bg-gradient-to-b from-primary-900 via-primary-950 to-primary-900 py-24"
    >
      <div className="absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-secondary/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Automatización IA · Precios"
          title={
            <>
              Planes que crecen{" "}
              <span className="text-gradient-blue">contigo</span>
            </>
          }
          subtitle="Elige el punto de partida ideal. Puedes escalar en cualquier momento."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-3xl p-7 transition-colors duration-200 ${
                p.highlighted
                  ? "border-2 border-accent bg-gradient-to-b from-accent/15 to-secondary/5 shadow-2xl shadow-accent/20 lg:-my-4 lg:scale-[1.03]"
                  : "glass hover:border-secondary/40"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-secondary to-accent px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Más Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              <div className="mt-5">
                <span className="text-xs text-slate-400">{p.prefix}</span>
                <span className="font-mono text-4xl font-bold text-white">
                  {p.price}
                </span>
                <span className="text-sm text-slate-400"> MXN /mes</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-slate-200"
                  >
                    <span
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                        p.highlighted ? "bg-accent" : "bg-secondary/30"
                      }`}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`group mt-7 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                  p.highlighted
                    ? "bg-secondary text-white shadow-lg shadow-secondary/30 hover:bg-secondary-700"
                    : "border border-white/15 text-white hover:bg-white/10"
                }`}
              >
                Comenzar ahora
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
