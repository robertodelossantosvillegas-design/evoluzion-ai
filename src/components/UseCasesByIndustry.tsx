"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Stethoscope,
  UtensilsCrossed,
  ShoppingBag,
  Building2,
  Megaphone,
  HardHat,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const industries = [
  {
    icon: Scale,
    name: "Despachos / Abogados",
    pains: ["Agenda citas automáticamente", "Califica casos entrantes", "Da seguimiento a clientes"],
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
    icon: Megaphone,
    name: "Agencias de Marketing",
    pains: ["Automatiza reportes", "Nutre leads de clientes", "Escala la operación"],
  },
  {
    icon: HardHat,
    name: "Constructoras",
    pains: ["Atiende cotizaciones", "Organiza prospectos", "Seguimiento de proyectos"],
  },
  {
    icon: GraduationCap,
    name: "Coaches / Consultores",
    pains: ["Agenda sesiones", "Recordatorios automáticos", "Convierte más clientes"],
  },
];

export default function UseCasesByIndustry() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
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
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-4 lg:overflow-visible"
      >
        {industries.map((ind) => (
          <motion.div
            key={ind.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group flex w-72 shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 lg:w-auto"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
              <ind.icon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-primary-900">{ind.name}</h3>
            <ul className="mt-3 flex-1 space-y-2">
              {ind.pains.map((p) => (
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
              href="#contacto"
              className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-secondary transition-colors duration-200 hover:text-secondary-700"
            >
              Ver cómo funciona para tu negocio
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
