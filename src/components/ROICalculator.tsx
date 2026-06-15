"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Wallet, UserPlus, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

function formatMXN(n: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(500);
  const [lostLeads, setLostLeads] = useState(15);

  const result = useMemo(() => {
    const hoursSaved = Math.round(hours * 0.7 * 4.33); // ~70% automatizable, por mes
    const moneyRecovered = Math.round(hoursSaved * rate);
    const leadsRecovered = Math.round(lostLeads * 0.6); // ~60% recuperables
    return { hoursSaved, moneyRecovered, leadsRecovered };
  }, [hours, rate, lostLeads]);

  return (
    <section className="relative overflow-hidden bg-primary-950 py-24">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-secondary/15 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Calculadora de ROI"
          title="¿Cuánto puedes ahorrar?"
          subtitle="Ajusta los valores y descubre el impacto de automatizar tu negocio."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          {/* inputs */}
          <div className="glass space-y-8 rounded-3xl p-8">
            <Slider
              label="¿Cuántas horas semanales gastas en tareas repetitivas?"
              value={hours}
              min={1}
              max={40}
              step={1}
              suffix="h / semana"
              onChange={setHours}
            />
            <Slider
              label="¿Cuánto vale tu hora?"
              value={rate}
              min={100}
              max={5000}
              step={50}
              prefix="$"
              suffix=" MXN"
              onChange={setRate}
            />
            <div>
              <label
                htmlFor="leads"
                className="mb-3 block text-sm font-medium text-slate-200"
              >
                ¿Cuántos prospectos pierdes al mes por falta de seguimiento?
              </label>
              <input
                id="leads"
                type="number"
                min={0}
                max={100}
                value={lostLeads}
                onChange={(e) =>
                  setLostLeads(
                    Math.max(0, Math.min(100, Number(e.target.value) || 0)),
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors duration-200 focus:border-accent/60"
              />
            </div>
          </div>

          {/* outputs */}
          <div className="flex flex-col justify-between gap-4">
            <ResultCard
              icon={Clock}
              label="Tiempo ahorrado al mes"
              value={`${result.hoursSaved} horas`}
            />
            <ResultCard
              icon={Wallet}
              label="Dinero recuperado al mes"
              value={formatMXN(result.moneyRecovered)}
              highlight
            />
            <ResultCard
              icon={UserPlus}
              label="Prospectos recuperados"
              value={`${result.leadsRecovered}`}
            />
            <a
              href="#contacto"
              className="group mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700"
            >
              Quiero estos resultados
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <p className="text-center text-xs text-slate-500">
              * Estimación aproximada con fines ilustrativos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="mb-3 flex items-center justify-between gap-3 text-sm font-medium text-slate-200">
        {label}
        <span className="shrink-0 rounded-lg bg-accent/15 px-3 py-1 text-sm font-bold text-accent-400">
          {prefix}
          {value.toLocaleString("es-MX")}
          {suffix}
        </span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full"
      />
    </div>
  );
}

function ResultCard({
  icon: Icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl p-5 transition-colors duration-200 ${
        highlight
          ? "border border-accent/40 bg-gradient-to-r from-secondary/20 to-accent/10"
          : "glass"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm text-slate-300">{label}</p>
        <motion.p
          key={value}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-extrabold text-white"
        >
          {value}
        </motion.p>
      </div>
    </div>
  );
}
