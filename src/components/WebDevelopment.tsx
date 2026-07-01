"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Globe, ArrowRight, X, Info } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Package = {
  name: string;
  price: string;
  desc: string;
  popular?: boolean;
  features: string[];
  featureDetails: Record<string, string>;
};

const packages: Package[] = [
  {
    name: "Landing Page",
    price: "$4,500",
    desc: "Ideal para campañas y captación.",
    features: [
      "Diseño a medida de 1 página",
      "Optimizada para conversión",
      "Responsive y rápida",
      "SEO básico incluido",
      "1 visita de entrega incluida",
      "Mantenimiento: $800 MXN/mes",
    ],
    featureDetails: {
      "Diseño a medida de 1 página": "No usamos plantillas genéricas. Diseñamos la página con tus colores, tipografías y comunicación visual para que refleje exactamente tu marca.",
      "Optimizada para conversión": "Cada sección, texto y botón está diseñado para que el visitante tome acción: llenar un formulario, llamarte o escribirte por WhatsApp.",
      "Responsive y rápida": "Se ve perfecta en celular, tablet y computadora. Cargamos bajo las mejores prácticas de velocidad para no perder visitas.",
      "SEO básico incluido": "Configuramos títulos, descripciones, etiquetas y velocidad de carga para que Google pueda encontrarte desde el inicio.",
      "1 visita de entrega incluida": "Una sesión de revisión contigo donde repasamos la página terminada, hacemos ajustes finales y te explicamos cómo funciona todo.",
      "Mantenimiento: $800 MXN/mes": "Incluye actualización de textos e imágenes, monitoreo de funcionamiento y soporte técnico mensual.",
    },
  },
  {
    name: "Sitio Corporativo",
    price: "$8,000",
    desc: "Presencia profesional completa.",
    popular: true,
    features: [
      "Hasta 5 páginas",
      "Diseño personalizado",
      "SEO básico incluido",
      "Hasta 2 rondas de revisión",
      "1 visita de entrega incluida",
      "Mantenimiento: $1,300 MXN/mes",
    ],
    featureDetails: {
      "Hasta 5 páginas": "Inicio, Servicios, Nosotros, Blog (opcional) y Contacto. Todas conectadas con el mismo diseño y experiencia coherente.",
      "Diseño personalizado": "Diseño completo a la identidad de tu empresa: colores, tipografías, fotografías y secciones pensadas para tu industria y audiencia.",
      "SEO básico incluido": "Configuración de metadatos, etiquetas de encabezado, velocidad de carga y estructura para facilitar el posicionamiento en Google.",
      "Hasta 2 rondas de revisión": "Después de la primera entrega, tienes dos rondas de cambios incluidas para ajustar cualquier detalle hasta que quede exactamente como lo imaginas.",
      "1 visita de entrega incluida": "Sesión de revisión final donde aprobamos juntos el sitio, ajustamos últimos detalles y te capacitamos en el uso básico.",
      "Mantenimiento: $1,300 MXN/mes": "Actualizaciones de contenido, monitoreo de seguridad, soporte técnico y hasta 2 horas de cambios mensuales.",
    },
  },
  {
    name: "Tienda / Reservas",
    price: "$13,000",
    desc: "Catálogo, pagos o reservas integradas.",
    features: [
      "Catálogo de productos o servicios",
      "Pasarela de pagos o calendario integrado",
      "SEO básico incluido",
      "1 visita de entrega incluida",
      "Mantenimiento: $2,000 MXN/mes",
    ],
    featureDetails: {
      "Catálogo de productos o servicios": "Galería o listado de todo lo que vendes u ofreces, con fotos, descripciones, precios y botones de acción. Fácil de actualizar.",
      "Pasarela de pagos o calendario integrado": "Integración con Mercado Pago, Stripe u otro procesador para recibir pagos en línea, o bien un calendario para que los clientes reserven directamente.",
      "SEO básico incluido": "Estructura y metadatos configurados para que tus productos y servicios aparezcan en las búsquedas de Google.",
      "1 visita de entrega incluida": "Sesión de revisión y aprobación final, donde revisamos el flujo de compra o reserva de principio a fin antes de publicar.",
      "Mantenimiento: $2,000 MXN/mes": "Actualizaciones de productos, monitoreo del sistema de pagos, soporte técnico y hasta 3 horas de cambios mensuales.",
    },
  },
];

export default function WebDevelopment() {
  const [detailPkg, setDetailPkg] = useState<Package | null>(null);

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid items-stretch gap-6 md:grid-cols-3"
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
            <button
              type="button"
              onClick={() => setDetailPkg(p)}
              className="mt-3 flex cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-xs text-slate-400 transition-colors duration-200 hover:text-white"
            >
              <Info className="h-3.5 w-3.5" />
              ¿Qué significa cada punto?
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {detailPkg && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDetailPkg(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-primary-950 shadow-2xl shadow-black/60"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-7 py-5">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {detailPkg.name} — Detalle completo
                  </h3>
                  <p className="text-sm text-slate-400">{detailPkg.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setDetailPkg(null)}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/8 text-slate-400 transition-colors duration-200 hover:bg-white/15 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[60vh] overflow-y-auto px-7 py-5">
                <ul className="space-y-5">
                  {detailPkg.features.map((f) => (
                    <li key={f}>
                      <div className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <div>
                          <p className="text-sm font-semibold text-white">{f}</p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">
                            {detailPkg.featureDetails[f]}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/8 px-7 py-5">
                <a
                  href="#contacto"
                  onClick={() => setDetailPkg(null)}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700"
                >
                  Solicitar {detailPkg.name}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
