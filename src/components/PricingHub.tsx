"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Globe, CreditCard } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AutomationPackages from "./AutomationPackages";
import WebDevelopment from "./WebDevelopment";
import DigitalCards from "./DigitalCards";

const tabs = [
  { id: "automatizacion", label: "Automatización IA", icon: Bot },
  { id: "paginas-web", label: "Páginas Web", icon: Globe },
  { id: "tarjetas", label: "Tarjetas Digitales", icon: CreditCard },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function PricingHub() {
  const [active, setActive] = useState<TabId>("automatizacion");
  const reduce = useReducedMotion();

  return (
    <section
      id="precios"
      className="relative overflow-hidden bg-gradient-to-b from-primary-900 via-primary-950 to-primary-900 py-24"
    >
      <div className="absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-secondary/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Nuestros Planes"
          title={
            <>
              Nuestros <span className="text-gradient-blue">Planes</span>
            </>
          }
          subtitle="Todo lo que necesitas en un solo lugar."
        />

        {/* tab switcher */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur">
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={`relative flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 sm:px-6 ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pricing-tab-pill"
                      className="absolute inset-0 rounded-xl bg-secondary shadow-lg shadow-secondary/30"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <t.icon className="h-4 w-4" />
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              {active === "automatizacion" && <AutomationPackages />}
              {active === "paginas-web" && <WebDevelopment />}
              {active === "tarjetas" && <DigitalCards />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
