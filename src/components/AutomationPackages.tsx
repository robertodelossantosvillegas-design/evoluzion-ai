"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Plan = {
  name: string;
  price: string;
  prefix?: string;
  suffix?: string;
  target: string;
  features: string[];
  highlighted?: boolean;
  enterprise?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$2,990",
    suffix: " MXN/mes",
    target: "E-commerce en Instagram, TikTok Shop, Marketplace",
    features: [
      "CRM hasta 500 contactos",
      "1 pipeline de ventas",
      "Chatbot IA (WhatsApp o Web)",
      "3 automatizaciones de seguimiento",
      "Landing page básica incluida",
      "Calendario de citas",
      "Soporte por correo",
    ],
  },
  {
    name: "Growth",
    price: "$6,990",
    suffix: " MXN/mes",
    highlighted: true,
    target: "Negocios locales: clínicas, despachos, gimnasios",
    features: [
      "Todo lo de Starter",
      "CRM contactos ilimitados",
      "Chatbot IA multicanal (WhatsApp + Instagram + Web)",
      "Email + SMS marketing",
      "8 automatizaciones personalizadas",
      "Funnel de ventas",
      "Gestión de reseñas Google",
      "Reportes mensuales",
      "Soporte prioritario",
    ],
  },
  {
    name: "Scale",
    price: "$13,990",
    suffix: " MXN/mes",
    target: "Empresas en crecimiento",
    features: [
      "Todo lo de Growth",
      "Voice AI (agente de voz)",
      "Automatizaciones Meta Ads (Facebook + Instagram)",
      "Integraciones a medida (APIs)",
      "Dashboard personalizado",
      "Account manager asignado",
      "Soporte 24/7",
    ],
  },
  {
    name: "Enterprise",
    price: "$25,000",
    prefix: "Desde ",
    suffix: " MXN/mes",
    enterprise: true,
    target: "Empresas con necesidades avanzadas",
    features: [
      "Solución 100% a medida",
      "Multi-ubicación y multi-marca",
      "Integración con sistemas existentes",
      "SLA garantizado",
      "Onboarding dedicado",
      "Soporte enterprise",
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
      className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4"
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
