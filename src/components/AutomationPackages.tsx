"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Plan = {
  name: string;
  price: string;
  prefix?: string;
  suffix?: string;
  setup: string;
  target: string;
  features: string[];
  highlighted?: boolean;
  enterprise?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$2,500",
    suffix: " MXN/mes",
    setup: "$4,000 MXN de instalación única",
    target: "Negocios que apenas van a automatizar su primer proceso",
    features: [
      "1 pipeline de ventas (5 etapas)",
      "Chatbot IA en WhatsApp",
      "Calendario de citas",
      "1 formulario de captura",
      "3 automatizaciones clave",
      "Gestión de reseñas",
      "Dashboard básico",
      "Soporte por correo",
    ],
  },
  {
    name: "Growth",
    price: "$5,500",
    suffix: " MXN/mes",
    setup: "$6,000 MXN de instalación única",
    highlighted: true,
    target: "Negocios que quieren crecer activamente",
    features: [
      "Todo lo de Starter",
      "WhatsApp + Instagram + Facebook + Web",
      "Email + SMS incluidos",
      "8 automatizaciones específicas para tu industria",
      "1 landing page de captura",
      "Reporte mensual + revisión bimestral",
      "Soporte prioritario (24h)",
    ],
  },
  {
    name: "Premium",
    price: "$9,500",
    suffix: " MXN/mes",
    setup: "$9,000 MXN de instalación única",
    enterprise: true,
    target: "Negocios que ya facturan bien y quieren máximo apalancamiento",
    features: [
      "Todo lo de Growth",
      "Voice AI (agente de voz)",
      "Hasta 15 automatizaciones",
      "Funnel de ventas multi-página",
      "Dashboard avanzado",
      "Revisión mensual 1 a 1",
      "Soporte mismo día",
    ],
  },
];

export default function AutomationPackages() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid items-stretch gap-6 md:grid-cols-3"
    >
      {plans.map((p) => (
        <motion.div
          key={p.name}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className={`relative flex flex-col rounded-3xl p-7 transition-colors duration-200 ${
            p.highlighted
              ? "border-2 border-accent bg-gradient-to-b from-accent/15 to-secondary/5 shadow-2xl shadow-accent/25 xl:scale-[1.03]"
              : p.enterprise
                ? "border border-white/10 bg-primary-950"
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
          <p className="mt-1 min-h-[2.5rem] text-sm text-slate-400">
            {p.target}
          </p>
          <div className="mt-5">
            {p.prefix && (
              <span className="text-xs text-slate-400">{p.prefix}</span>
            )}
            <span className="font-mono text-4xl font-bold text-white">
              {p.price}
            </span>
            <span className="text-sm text-slate-400">{p.suffix}</span>
            <p className="mt-1 text-xs text-slate-500">{p.setup}</p>
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
                : p.enterprise
                  ? "bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90"
                  : "border border-white/15 text-white hover:bg-white/10"
            }`}
          >
            {p.enterprise ? "Contáctanos" : "Comenzar ahora"}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
