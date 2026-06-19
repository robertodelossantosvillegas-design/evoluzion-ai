"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Stethoscope,
  UtensilsCrossed,
  ShoppingBag,
  Building2,
  Scissors,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const industries = [
  {
    icon: Scissors,
    name: "Barberías / Salones / Nail Salons",
    pains: ["Agenda citas por WhatsApp", "Reduce cancelaciones de último minuto", "Recupera clientes inactivos"],
  },
  {
    icon: Stethoscope,
    name: "Clínicas / Médicos",
    pains: ["Confirma y recuerda citas", "Reduce inasistencias", "Atención 24/7 a pacientes"],
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurantes",
    pains: ["Toma reservaciones", "Responde pedidos por WhatsApp", "Fideliza con promociones"],
  },
  {
    icon: ShoppingBag,
    name: "E-commerce",
    pains: ["Recupera carritos abandonados", "Soporte automático", "Seguimiento post-venta"],
  },
  {
    icon: Building2,
    name: "Inmobiliarias",
    pains: ["Califica prospectos", "Agenda visitas", "Da seguimiento a interesados"],
  },
  {
    icon: Scale,
    name: "Despachos / Abogados",
    pains: ["Agenda citas automáticamente", "Califica casos entrantes", "Da seguimiento a clientes"],
  },
  {
    icon: GraduationCap,
    name: "Coaches / Consultores",
    pains: ["Agenda sesiones", "Recordatorios automáticos", "Convierte más clientes"],
  },
];

export default function UseCasesByIndustry() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section id="casos-de-uso" className="relative bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          light
          eyebrow="Casos de uso"
          title={
            <>
              ¿Para qué tipo de{" "}
              <span className="text-gradient-blue">negocio?</span>
            </>
          }
          subtitle="Sin importar tu industria, tenemos una solución de automatización para ti."
        />

        {/* industry pill selector */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 flex flex-wrap justify-center gap-2.5"
        >
          {industries.map((ind, i) => (
            <motion.button
              key={ind.name}
              variants={fadeUp}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                i === active
                  ? "border-transparent bg-gradient-to-r from-secondary to-accent text-white shadow-lg shadow-secondary/25"
                  : "border-slate-200 text-slate-600 hover:border-accent/40 hover:text-primary-900"
              }`}
            >
              <ind.icon className="h-4 w-4" />
              {ind.name}
            </motion.button>
          ))}
        </motion.div>

        {/* detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50/80 p-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                <current.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-primary-900">
                {current.name}
              </h3>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {current.pains.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#proceso"
              className="group mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-secondary transition-colors duration-200 hover:text-secondary-700"
            >
              Ver cómo funciona para tu negocio
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
