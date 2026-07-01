"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Dumbbell,
  HeartPulse,
  Home,
  Printer,
  Scissors,
  Sparkles,
  Stethoscope,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

type Industry = {
  id: string;
  label: string;
  icon: React.ElementType;
  defaultClientValue: number;
  pitch: string;
  automations: string[];
};

const INDUSTRIES: Industry[] = [
  {
    id: "limpieza",
    label: "Empresa de limpieza",
    icon: Building2,
    defaultClientValue: 8000,
    pitch: "contratos que se firman más rápido y nunca se te vence una renovación sin avisarte",
    automations: ["Alerta de renovación de contrato", "Seguimiento a cotizaciones", "Pipeline de visitas → contrato"],
  },
  {
    id: "vans",
    label: "Renta de vans/autos",
    icon: Truck,
    defaultClientValue: 2500,
    pitch: "menos no-shows y más clientes que rentan otra vez",
    automations: ["Recordatorio anti no-show", "Cobro pendiente automático", "Oferta a clientes recurrentes"],
  },
  {
    id: "spa",
    label: "Barbería / Nail Salon / Spa",
    icon: Scissors,
    defaultClientValue: 600,
    pitch: "agenda siempre llena y clientas que no se te olvidan",
    automations: ["Confirmación + recordatorio 24h", "Reactivación a 30 días", "Solicitud de reseña"],
  },
  {
    id: "clinica",
    label: "Clínica / Médico",
    icon: Stethoscope,
    defaultClientValue: 900,
    pitch: "menos pacientes que no llegan y seguimiento real post-consulta",
    automations: ["Recordatorio 24h", "Seguimiento post-consulta", "Recordatorio de chequeo anual"],
  },
  {
    id: "dentista",
    label: "Dentista",
    icon: HeartPulse,
    defaultClientValue: 1200,
    pitch: "limpiezas que se agendan solas cada 6 meses",
    automations: ["Recordatorio de cita", "Recordatorio de limpieza semestral", "Reactivación de pacientes"],
  },
  {
    id: "inmobiliaria",
    label: "Inmobiliaria",
    icon: Home,
    defaultClientValue: 15000,
    pitch: "leads fríos que se reactivan solos cada 2 semanas",
    automations: ["Respuesta inmediata con propiedades", "Seguimiento post-visita", "Nutrición de leads fríos"],
  },
  {
    id: "restaurante",
    label: "Restaurante",
    icon: UtensilsCrossed,
    defaultClientValue: 450,
    pitch: "mesas llenas y clientes que regresan",
    automations: ["Confirmación de reservación", "Lista de espera automática", "Reactivación a 3 semanas"],
  },
  {
    id: "gimnasio",
    label: "Gimnasio",
    icon: Dumbbell,
    defaultClientValue: 700,
    pitch: "menos cancelaciones de membresía y clientes inactivos que regresan",
    automations: ["Recordatorio de clase", "Aviso de renovación", "Reactivación de inactivos"],
  },
];

type Plan = {
  name: string;
  price: number;
  setup: number;
  color: string;
  bullets: string[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: 2500,
    setup: 4000,
    color: "#5B5BFF",
    bullets: ["1 pipeline + WhatsApp con IA", "3 automatizaciones clave", "Calendario de citas", "Gestión de reseñas"],
  },
  {
    name: "Growth",
    price: 5500,
    setup: 6000,
    color: "#00E5C0",
    bullets: ["Todo Starter", "WhatsApp + Instagram + Facebook + Web", "8 automatizaciones por tu industria", "Revisión bimestral contigo"],
  },
  {
    name: "Premium",
    price: 9500,
    setup: 9000,
    color: "#7B7BFF",
    bullets: ["Todo Growth", "Voice AI + funnel multipágina", "15 automatizaciones", "Dashboard avanzado + revisión mensual"],
  },
];

function recommendPlan(monthlyLoss: number): Plan {
  if (monthlyLoss < 6000) return PLANS[0];
  if (monthlyLoss < 15000) return PLANS[1];
  return PLANS[2];
}

const currency = (n: number) =>
  n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

export default function PropuestaTool() {
  const [step, setStep] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [leadsPerMonth, setLeadsPerMonth] = useState(40);
  const [pctNoRespondidos, setPctNoRespondidos] = useState(25);
  const [noShows, setNoShows] = useState(6);
  const [inactivos, setInactivos] = useState(20);
  const [clientValue, setClientValue] = useState(1000);

  const leadsPerdidos = useMemo(() => Math.round((leadsPerMonth * pctNoRespondidos) / 100), [leadsPerMonth, pctNoRespondidos]);

  const moneyLost = useMemo(() => {
    const porLeadsPerdidos = leadsPerdidos * clientValue * 0.5;
    const porNoShows = noShows * clientValue * 0.6;
    const porInactivos = inactivos * clientValue * 0.15;
    return Math.round(porLeadsPerdidos + porNoShows + porInactivos);
  }, [leadsPerdidos, clientValue, noShows, inactivos]);

  const plan = useMemo(() => recommendPlan(moneyLost), [moneyLost]);
  // Escenario conservador: recuperar solo la mitad de la fuga estimada
  const annualGain = useMemo(
    () => Math.round(moneyLost * 0.5 * 12 - plan.price * 12 - plan.setup),
    [moneyLost, plan]
  );

  const steps = ["Negocio", "Diagnóstico", "Propuesta"];

  function selectIndustry(ind: Industry) {
    setIndustry(ind);
    setClientValue(ind.defaultClientValue);
    setStep(1);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] px-4 py-10 sm:py-16 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-3xl">
        {/* Progress (hidden on print) */}
        <div className="mb-8 flex items-center justify-center gap-2 print:hidden">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  i <= step ? "bg-gradient-to-br from-[#5B5BFF] to-[#00E5C0] text-[#0A0A0F]" : "bg-white/10 text-[#8888AA]"
                }`}
              >
                {i + 1}
              </div>
              <span className={`hidden text-sm sm:inline ${i <= step ? "text-white" : "text-[#8888AA]"}`}>{label}</span>
              {i < steps.length - 1 && <div className="h-px w-6 bg-white/10 sm:w-10" />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/10 bg-[#12121A] p-6 sm:p-10"
            >
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Diagnóstico gratis de <span className="text-gradient-blue">tu negocio</span>
              </h1>
              <p className="mt-2 text-[#8888AA]">
                En 2 minutos te muestro cuánto dinero podrías estar perdiendo hoy.
              </p>

              <label className="mt-6 block text-sm font-medium text-[#F0F0F8]">Nombre del negocio</label>
              <input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Ej. Spa Bella Vida"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-[#8888AA] outline-none focus:border-[#5B5BFF]"
              />

              <p className="mt-6 text-sm font-medium text-[#F0F0F8]">¿A qué se dedica?</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {INDUSTRIES.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => selectIndustry(ind)}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center transition-colors hover:border-[#5B5BFF] hover:bg-[#5B5BFF]/10"
                    >
                      <Icon className="h-6 w-6 text-[#00E5C0]" />
                      <span className="text-xs font-medium text-[#F0F0F8]">{ind.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 1 && industry && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/10 bg-[#12121A] p-6 sm:p-10"
            >
              <h2 className="text-xl font-bold text-white sm:text-2xl">Cuéntame cómo va hoy tu negocio</h2>
              <p className="mt-1 text-sm text-[#8888AA]">Solo estimados, no necesitas números exactos.</p>

              <div className="mt-6 space-y-6">
                <SliderField
                  label="Leads/solicitudes que recibes al mes"
                  value={leadsPerMonth}
                  min={5}
                  max={300}
                  onChange={setLeadsPerMonth}
                />
                <SliderField
                  label="% que no contestas a tiempo o se te van"
                  value={pctNoRespondidos}
                  min={0}
                  max={80}
                  suffix="%"
                  onChange={setPctNoRespondidos}
                />
                <SliderField
                  label="Citas que se cancelan o no llegan (no-shows) al mes"
                  value={noShows}
                  min={0}
                  max={60}
                  onChange={setNoShows}
                />
                <SliderField
                  label="Clientes inactivos que podrían reactivarse"
                  value={inactivos}
                  min={0}
                  max={200}
                  onChange={setInactivos}
                />
                <SliderField
                  label="Valor promedio de un cliente (MXN)"
                  value={clientValue}
                  min={100}
                  max={50000}
                  step={100}
                  prefix="$"
                  onChange={setClientValue}
                />
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(0)}
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-[#F0F0F8] hover:bg-white/5"
                >
                  <ArrowLeft className="h-4 w-4" /> Atrás
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B5BFF] to-[#00E5C0] px-5 py-2.5 text-sm font-semibold text-[#0A0A0F]"
                >
                  Ver propuesta <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && industry && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#12121A] print:border-none print:bg-white"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[#0A0A0F] via-[#1C1C2E] to-[#0A0A0F] p-6 sm:p-10 print:bg-white print:text-black">
                <Logo />
                <p className="mt-4 text-sm uppercase tracking-widest text-[#00E5C0] print:text-[#5B5BFF]">
                  Diagnóstico y propuesta
                </p>
                <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl print:text-black">
                  {businessName || "Tu negocio"}
                </h1>
                <p className="mt-1 text-sm text-[#8888AA] print:text-gray-600">
                  {new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })} ·{" "}
                  {industry.label}
                </p>
              </div>

              <div className="p-6 sm:p-10">
                {/* Money lost */}
                <div className="rounded-2xl border border-[#5B5BFF]/30 bg-[#5B5BFF]/10 p-6 print:border-gray-300 print:bg-gray-50">
                  <p className="text-sm font-medium text-[#F0F0F8] print:text-black">
                    Hoy tu negocio podría estar perdiendo aproximadamente
                  </p>
                  <p className="mt-1 font-mono text-4xl font-bold text-[#00E5C0] print:text-[#5B5BFF] sm:text-5xl">
                    {currency(moneyLost)}
                  </p>
                  <p className="text-sm text-[#8888AA] print:text-gray-600">cada mes, en {industry.pitch}.</p>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <MiniStat label="Leads perdidos/mes" value={leadsPerdidos.toString()} />
                    <MiniStat label="No-shows/mes" value={noShows.toString()} />
                    <MiniStat label="Inactivos recuperables" value={inactivos.toString()} />
                  </div>
                  <p className="mt-3 text-[10px] leading-relaxed text-[#8888AA] print:text-gray-500">
                    * Estimación conservadora calculada con los datos que ingresaste. Los resultados reales varían por negocio.
                  </p>
                </div>

                {/* Recommended plan */}
                <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#8888AA] print:text-gray-500">
                  Plan recomendado para {industry.label.toLowerCase()}
                </p>
                <div
                  className="mt-3 rounded-2xl border-2 p-6 print:border-gray-300"
                  style={{ borderColor: plan.color }}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-white print:text-black">{plan.name}</h3>
                    <p className="font-mono text-2xl font-bold text-white print:text-black">
                      {currency(plan.price)}
                      <span className="text-sm text-[#8888AA] print:text-gray-500">/mes</span>
                    </p>
                  </div>
                  <p className="text-xs text-[#8888AA] print:text-gray-500">
                    + {currency(plan.setup)} de instalación única
                  </p>
                  <ul className="mt-4 space-y-2">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#F0F0F8] print:text-black">
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#00E5C0] print:text-[#5B5BFF]" /> {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#8888AA] print:text-gray-500">
                    Automatizaciones específicas para tu negocio
                  </p>
                  <ul className="mt-2 space-y-1">
                    {industry.automations.map((a) => (
                      <li key={a} className="text-sm text-[#F0F0F8] print:text-black">
                        · {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ROI */}
                <div className="mt-6 rounded-2xl border border-[#00E5C0]/30 bg-[#00E5C0]/10 p-6 print:border-gray-300 print:bg-gray-50">
                  {annualGain > 0 ? (
                    <>
                      <p className="text-sm font-medium text-[#F0F0F8] print:text-black">
                        Recuperando solo la mitad de esa fuga, tu ganancia estimada en 12 meses sería de
                      </p>
                      <p className="mt-1 font-mono text-3xl font-bold text-white print:text-black">
                        {currency(annualGain)}
                      </p>
                      <p className="text-xs text-[#8888AA] print:text-gray-500">
                        (ya descontando la mensualidad anual y la instalación)
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-[#F0F0F8] print:text-black">
                        Con estos números, lo ideal es platicar qué plan se ajusta al tamaño de tu operación
                      </p>
                      <p className="mt-1 text-xs text-[#8888AA] print:text-gray-500">
                        Cada negocio tiene fugas distintas — la llamada de diagnóstico es gratis.
                      </p>
                    </>
                  )}
                </div>

                {/* Contacto — visible también en el PDF impreso */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 print:border-gray-300 print:bg-white">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#00E5C0] print:text-black">
                    Siguiente paso
                  </p>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-[#F0F0F8] print:text-black sm:flex-row sm:gap-6">
                    <span>
                      WhatsApp: <strong className="font-mono">+52 81 2759 1172</strong>
                    </span>
                    <span>
                      Correo: <strong className="font-mono">hola@evoluzion.mx</strong>
                    </span>
                    <span className="font-mono">evoluzion.mx</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-center gap-3 text-center print:hidden">
                  <p className="text-sm text-[#8888AA]">¿Empezamos? Agenda tu instalación hoy mismo.</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={`https://wa.me/528127591172?text=${encodeURIComponent(
                        `Hola, soy de ${businessName || "un negocio"} (${industry.label}). Vi mi propuesta y me interesa el plan ${plan.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
                    >
                      Empezar por WhatsApp <ArrowRight className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                    >
                      <Printer className="h-4 w-4" /> Imprimir / PDF
                    </button>
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-[#8888AA] hover:text-white"
                    >
                      <ArrowLeft className="h-4 w-4" /> Ajustar datos
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm text-[#F0F0F8]">{label}</label>
        <span className="font-mono text-sm font-semibold text-[#00E5C0]">
          {prefix}
          {value.toLocaleString("es-MX")}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full"
      />
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-3 print:bg-gray-100">
      <p className="font-mono text-lg font-bold text-white print:text-black">{value}</p>
      <p className="text-[10px] leading-tight text-[#8888AA] print:text-gray-500">{label}</p>
    </div>
  );
}

function Logo() {
  return (
    <svg width="160" height="36" viewBox="0 0 360 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M 8 18 Q 8 8 18 8 L 52 8" stroke="#5B5BFF" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M 52 8 L 18 52" stroke="url(#propGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M 18 52 L 52 52 Q 62 52 62 42" stroke="#00E5C0" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="62" cy="36" r="3.5" fill="#00E5C0" />
        <circle cx="62" cy="36" r="6" fill="#00E5C0" opacity="0.15" />
        <defs>
          <linearGradient id="propGrad" x1="52" y1="8" x2="18" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5B5BFF" />
            <stop offset="100%" stopColor="#00E5C0" />
          </linearGradient>
        </defs>
      </g>
      <text x="84" y="50" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="38" letterSpacing="-1" fill="currentColor" className="fill-white print:fill-black">
        Evolu<tspan fill="#5B5BFF">z</tspan>ion
      </text>
    </svg>
  );
}
