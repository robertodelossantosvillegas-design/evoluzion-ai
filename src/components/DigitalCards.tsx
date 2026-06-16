"use client";

import { motion } from "framer-motion";
import { Nfc, QrCode, Check, X, Smartphone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const tiers = [
  {
    name: "Starter",
    price: "$990",
    features: ["Tarjeta NFC + QR", "Perfil digital", "1 actualización gratis"],
  },
  {
    name: "Premium",
    price: "$1,990",
    popular: true,
    features: [
      "Tarjeta NFC + QR premium",
      "Perfil digital avanzado",
      "Botones de acción (WhatsApp, llamada)",
      "Actualizaciones ilimitadas",
    ],
  },
  {
    name: "Business",
    price: "$2,990",
    features: [
      "Todo lo de Premium",
      "Diseño 100% personalizado",
      "Captura de leads integrada",
      "Soporte prioritario",
    ],
  },
];

const comparison = [
  { label: "Tarjeta NFC + QR", s: true, p: true, b: true },
  { label: "Perfil digital", s: true, p: true, b: true },
  { label: "Botones de acción", s: false, p: true, b: true },
  { label: "Actualizaciones ilimitadas", s: false, p: true, b: true },
  { label: "Diseño personalizado", s: false, p: false, b: true },
  { label: "Captura de leads", s: false, p: false, b: true },
];

export default function DigitalCards() {
  return (
    <section id="tarjetas" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          light
          eyebrow="Tarjetas Digitales"
          title={
            <>
              Tu tarjeta de presentación{" "}
              <span className="text-gradient-blue">del futuro</span>
            </>
          }
          subtitle="Comparte tus datos con un toque NFC o un escaneo QR. Sin papel, siempre actualizada."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* card mockup */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl" />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 to-primary-800 p-7 shadow-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg font-extrabold text-white">
                      EVOLUZION
                      <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Tarjeta Digital
                    </p>
                  </div>
                  <Nfc className="h-7 w-7 text-accent-400" />
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Tu Nombre
                    </p>
                    <p className="text-xs text-slate-400">Director General</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white">
                    <QrCode className="h-10 w-10 text-primary-900" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <Nfc className="h-4 w-4 text-secondary" /> Toca con NFC
                </span>
                <span className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-accent" /> O escanea el QR
                </span>
              </div>
            </div>
          </motion.div>

          {/* tier cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {tiers.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border p-5 transition-colors duration-200 ${
                  t.popular
                    ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                    : "border-slate-200 bg-white hover:border-secondary/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-primary-900">{t.name}</h3>
                  <div>
                    <span className="font-mono text-2xl font-bold text-primary-900">
                      {t.price}
                    </span>
                    <span className="text-xs text-slate-500"> MXN</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* comparison table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 overflow-x-auto rounded-2xl border border-slate-200"
        >
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-primary-900">
                <th className="px-5 py-4 font-semibold">Característica</th>
                <th className="px-5 py-4 text-center font-semibold">Starter</th>
                <th className="px-5 py-4 text-center font-semibold text-accent-600">
                  Premium
                </th>
                <th className="px-5 py-4 text-center font-semibold">Business</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 ? "bg-white" : "bg-slate-50/50"}
                >
                  <td className="px-5 py-3.5 font-medium text-slate-700">
                    {row.label}
                  </td>
                  {[row.s, row.p, row.b].map((v, j) => (
                    <td key={j} className="px-5 py-3.5 text-center">
                      {v ? (
                        <Check className="mx-auto h-5 w-5 text-accent" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-slate-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
