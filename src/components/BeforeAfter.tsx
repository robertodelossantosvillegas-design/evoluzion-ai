"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock4, UserX, FileWarning, Zap, Users, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";

const before = [
  { icon: Clock4, text: "Horas perdidas en tareas repetitivas y manuales." },
  { icon: UserX, text: "Prospectos que se enfrían por falta de seguimiento." },
  { icon: FileWarning, text: "Procesos desordenados y errores humanos constantes." },
];

const after = [
  { icon: Zap, text: "Procesos automáticos que trabajan por ti las 24 horas." },
  { icon: Users, text: "Cada prospecto recibe seguimiento inmediato y personalizado." },
  { icon: TrendingUp, text: "Operación escalable, ordenada y lista para crecer." },
];

export default function BeforeAfter() {
  const [side, setSide] = useState<"antes" | "despues">("despues");

  return (
    <section className="relative overflow-hidden bg-primary-900 py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="El impacto"
          title="El impacto de la automatización"
          subtitle="Mira cómo cambia tu día a día cuando la IA trabaja de tu lado."
        />

        {/* toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            {(["antes", "despues"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSide(s)}
                className={`cursor-pointer rounded-full px-6 py-2 text-sm font-semibold capitalize transition-all duration-200 ${
                  side === s
                    ? s === "antes"
                      ? "bg-rose-500/90 text-white"
                      : "bg-gradient-to-r from-secondary to-accent text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {s === "antes" ? "Antes" : "Después"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Panel
            active={side === "antes"}
            tone="before"
            title="Antes"
            subtitle="Sin automatización"
            items={before}
          />
          <Panel
            active={side === "despues"}
            tone="after"
            title="Después"
            subtitle="Con Evoluzion"
            items={after}
          />
        </div>
      </div>
    </section>
  );
}

function Panel({
  active,
  tone,
  title,
  subtitle,
  items,
}: {
  active: boolean;
  tone: "before" | "after";
  title: string;
  subtitle: string;
  items: { icon: React.ElementType; text: string }[];
}) {
  const isAfter = tone === "after";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      animate={{
        opacity: active ? 1 : 0.45,
        scale: active ? 1 : 0.98,
      }}
      transition={{ duration: 0.3 }}
      className={`rounded-3xl border p-7 transition-colors duration-300 ${
        isAfter
          ? "border-accent/30 bg-gradient-to-b from-secondary/15 to-accent/5"
          : "border-rose-500/30 bg-rose-950/20"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h3
          className={`text-xl font-bold ${isAfter ? "text-white" : "text-rose-200"}`}
        >
          {title}
        </h3>
        <span
          className={`text-xs font-medium ${isAfter ? "text-accent-400" : "text-rose-300/80"}`}
        >
          {subtitle}
        </span>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((it) => (
          <li key={it.text} className="flex items-start gap-3">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                isAfter
                  ? "bg-gradient-to-br from-secondary to-accent text-white"
                  : "bg-rose-500/20 text-rose-300"
              }`}
            >
              <it.icon className="h-5 w-5" />
            </span>
            <span
              className={`pt-1.5 text-sm ${isAfter ? "text-slate-200" : "text-rose-100/80"}`}
            >
              {it.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
