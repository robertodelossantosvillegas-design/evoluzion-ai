"use client";

import { motion } from "framer-motion";
import { Check, Globe, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const packages = [
  {
    name: "Landing Page",
    price: "$4,990",
    desc: "Ideal para campañas y captación.",
    features: [
      "Diseño a medida de 1 página",
      "Optimizada para conversión",
      "Responsive y rápida",
      "Formulario de contacto",
      "SEO básico",
    ],
  },
  {
    name: "Sitio Corporativo",
    price: "$8,990",
    desc: "Presencia profesional completa.",
    features: [
      "Hasta 5 páginas",
      "Diseño personalizado",
      "Blog integrado",
      "SEO optimizado",
      "Integración con redes",
    ],
  },
  {
    name: "Sitio Premium",
    price: "$14,990",
    popular: true,
    desc: "Lo mejor en diseño y rendimiento.",
    features: [
      "Páginas ilimitadas",
      "Animaciones avanzadas",
      "Chatbot IA integrado",
      "SEO avanzado",
      "Panel de administración",
      "Soporte prioritario",
    ],
  },
  {
    name: "E-commerce",
    price: "$24,990",
    desc: "Tu tienda en línea, lista para vender.",
    features: [
      "Catálogo de productos",
      "Pasarela de pagos",
      "Carrito y checkout",
      "Gestión de inventario",
      "Automatización de ventas",
    ],
  },
];

export default function WebDevelopment() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {packages.map((p) => (
        <motion.div
          key={p.name}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className={`relative flex flex-col rounded-2xl p-6 transition-colors duration-200 ${
            p.popular
              ? "border-2 border-accent bg-gradient-to-b from-accent/10 to-transparent shadow-2xl shadow-accent/20"
              : "glass hover:border-secondary/40"
          }`}
        >
          {p.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-secondary to-accent px-3 py-1 text-xs font-bold text-white">
              Más popular
            </span>
          )}
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-400">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-white">{p.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
          <div className="mt-4">
            <span className="text-xs text-slate-400">desde </span>
            <span className="font-mono text-3xl font-bold text-white">
              {p.price}
            </span>
            <span className="text-sm text-slate-400"> MXN</span>
          </div>
          <ul className="mt-5 flex-1 space-y-2.5">
            {p.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className={`group mt-6 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
              p.popular
                ? "bg-secondary text-white hover:bg-secondary-700"
                : "border border-white/15 text-white hover:bg-white/10"
            }`}
          >
            Solicitar
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
