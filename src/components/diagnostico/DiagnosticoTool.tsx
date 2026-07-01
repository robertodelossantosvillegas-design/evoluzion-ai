"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Banknote,
  Clock,
  Gauge,
  Printer,
  TrendingUp,
  Users,
} from "lucide-react";

const currency = (n: number) =>
  (Number.isFinite(n) ? n : 0).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  });

const pct = (n: number) =>
  `${Math.round((Number.isFinite(n) ? n : 0) * 100)}%`;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export default function DiagnosticoTool() {
  // Sección 1 — Información del negocio
  const [nombre, setNombre] = useState("");
  const [giro, setGiro] = useState("");
  const [numEmpleados, setNumEmpleados] = useState(4);
  const [clientesPotenciales, setClientesPotenciales] = useState(60);
  const [clientesPerdidos, setClientesPerdidos] = useState(15);
  const [ticketPromedio, setTicketPromedio] = useState(1200);
  const [horasAdminSemana, setHorasAdminSemana] = useState(12);
  const [horasDuenoSemana, setHorasDuenoSemana] = useState(10);
  const [valorHoraDueno, setValorHoraDueno] = useState(300);
  const [sueldoPromedioEmpleado, setSueldoPromedioEmpleado] = useState(8500);

  // Sección 3 — inputs de la solución
  const [costoImplementacion, setCostoImplementacion] = useState(6000);
  const [mensualidad, setMensualidad] = useState(3500);
  const [pctRecuperacion, setPctRecuperacion] = useState(70);

  // ---------- Sección 2: Diagnóstico de pérdidas ----------
  const perdidaClientes = useMemo(() => clientesPerdidos * ticketPromedio, [clientesPerdidos, ticketPromedio]);

  const horaEmpleado = useMemo(() => sueldoPromedioEmpleado / 160, [sueldoPromedioEmpleado]);
  const horasAdminMes = useMemo(() => horasAdminSemana * 4.33, [horasAdminSemana]);
  const costoTiempoEmpleados = useMemo(
    () => horasAdminMes * horaEmpleado * numEmpleados,
    [horasAdminMes, horaEmpleado, numEmpleados]
  );

  const horasDuenoMes = useMemo(() => horasDuenoSemana * 4.33, [horasDuenoSemana]);
  const costoTiempoDueno = useMemo(() => horasDuenoMes * valorHoraDueno, [horasDuenoMes, valorHoraDueno]);

  const horasDesperdiciadasMes = useMemo(
    () => horasAdminMes * numEmpleados + horasDuenoMes,
    [horasAdminMes, numEmpleados, horasDuenoMes]
  );

  const perdidaMensual = useMemo(
    () => perdidaClientes + costoTiempoEmpleados + costoTiempoDueno,
    [perdidaClientes, costoTiempoEmpleados, costoTiempoDueno]
  );
  const perdidaDiaria = perdidaMensual / 30;
  const perdidaSemanal = perdidaMensual / 4.33;
  const perdidaAnual = perdidaMensual * 12;

  // ---------- Sección 3: Proyección con Evoluzion AI ----------
  const ahorroMensual = perdidaMensual * (clamp(pctRecuperacion, 0, 100) / 100);
  const ahorroAnual = ahorroMensual * 12;
  const gananciaNetaMensual = ahorroMensual - mensualidad;
  const gananciaNetaAnual = gananciaNetaMensual * 12 - costoImplementacion;
  const roi = (gananciaNetaMensual * 12 - costoImplementacion) / (costoImplementacion + mensualidad * 12);
  const paybackMeses = gananciaNetaMensual > 0 ? costoImplementacion / gananciaNetaMensual : null;

  // ---------- Índice de Madurez Operativa ----------
  const tasaPerdidaClientes = clientesPerdidos / Math.max(clientesPotenciales, 1);
  const horasTotalesSemana = horasAdminSemana + horasDuenoSemana;
  const indiceMadurez = useMemo(() => {
    const penalizacionClientes = tasaPerdidaClientes * 55;
    const penalizacionHoras = Math.min(horasTotalesSemana, 70) / 70 * 45;
    return Math.round(clamp(100 - penalizacionClientes - penalizacionHoras, 2, 98));
  }, [tasaPerdidaClientes, horasTotalesSemana]);

  const semaforo = indiceMadurez < 40 ? "rojo" : indiceMadurez < 70 ? "amarillo" : "verde";
  const semaforoColor = { rojo: "#FF4D5E", amarillo: "#F5C542", verde: "#00E5C0" }[semaforo];
  const semaforoLabel = {
    rojo: "Operación reactiva — depende casi todo de personas y memoria",
    amarillo: "Operación parcialmente organizada — hay procesos, pero se rompen seguido",
    verde: "Operación madura — pocas fugas, buen control",
  }[semaforo];

  return (
    <div className="min-h-screen bg-[#0A0A0F] px-4 py-8 text-[#FFFFFF] sm:py-12 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-6xl">
        <Header />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
          {/* ---------------- Columna izquierda: inputs ---------------- */}
          <div className="space-y-4 lg:sticky lg:top-6 lg:self-start print:hidden">
            <Card title="1 · Información del negocio" icon={Users} accent="#5B5BFF">
              <TextField label="Nombre del negocio" value={nombre} onChange={setNombre} />
              <TextField label="Giro" value={giro} onChange={setGiro} placeholder="Ej. Clínica dental" />
              <NumField label="Número de empleados" value={numEmpleados} onChange={setNumEmpleados} />
              <NumField label="Clientes potenciales al mes" value={clientesPotenciales} onChange={setClientesPotenciales} />
              <NumField label="Clientes perdidos por falta de seguimiento" value={clientesPerdidos} onChange={setClientesPerdidos} />
              <NumField label="Ticket promedio (MXN)" value={ticketPromedio} onChange={setTicketPromedio} prefix="$" />
              <NumField label="Horas/semana en tareas administrativas (equipo)" value={horasAdminSemana} onChange={setHorasAdminSemana} />
              <NumField label="Horas/semana del dueño en operación" value={horasDuenoSemana} onChange={setHorasDuenoSemana} />
              <NumField label="Valor estimado por hora del dueño" value={valorHoraDueno} onChange={setValorHoraDueno} prefix="$" />
              <NumField label="Sueldo promedio por empleado" value={sueldoPromedioEmpleado} onChange={setSueldoPromedioEmpleado} prefix="$" />
            </Card>

            <Card title="Tu propuesta Evoluzion AI" icon={TrendingUp} accent="#00E5C0">
              <NumField label="Costo de implementación (setup)" value={costoImplementacion} onChange={setCostoImplementacion} prefix="$" />
              <NumField label="Mensualidad del servicio" value={mensualidad} onChange={setMensualidad} prefix="$" />
              <NumField label="% de fugas que se recuperan (estimado)" value={pctRecuperacion} onChange={setPctRecuperacion} />
            </Card>

            <button
              onClick={() => window.print()}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2A2A40] bg-[#1C1C2E] px-4 py-3 text-sm font-medium text-white hover:border-[#5B5BFF]"
            >
              <Printer className="h-4 w-4" /> Imprimir / Exportar PDF
            </button>
          </div>

          {/* ---------------- Columna derecha: resultados ---------------- */}
          <div className="space-y-6">
            {/* Sección 2 — pérdidas, en rojo */}
            <Card title="2 · Diagnóstico de pérdidas" icon={AlertTriangle} accent="#FF4D5E">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Stat label="Por clientes no atendidos" value={currency(perdidaClientes)} color="#FF4D5E" />
                <Stat label="Tiempo de empleados" value={currency(costoTiempoEmpleados)} color="#FF4D5E" />
                <Stat label="Tiempo operativo del dueño" value={currency(costoTiempoDueno)} color="#FF4D5E" />
                <Stat label="Horas desperdiciadas/mes" value={`${Math.round(horasDesperdiciadasMes)} hrs`} color="#FF4D5E" />
                <Stat label="Pérdida diaria" value={currency(perdidaDiaria)} color="#FF4D5E" />
                <Stat label="Pérdida semanal" value={currency(perdidaSemanal)} color="#FF4D5E" />
              </div>
              <div className="mt-4 rounded-xl border border-[#FF4D5E]/30 bg-[#FF4D5E]/10 p-4">
                <p className="text-sm text-[#8888AA]">Pérdida mensual total</p>
                <p className="font-mono text-3xl font-bold text-[#FF4D5E]">{currency(perdidaMensual)}</p>
                <p className="mt-1 text-sm text-[#8888AA]">
                  Pérdida anual proyectada: <span className="font-semibold text-[#FF4D5E]">{currency(perdidaAnual)}</span>
                </p>
              </div>
            </Card>

            {/* Sección 3 — proyección, en verde */}
            <Card title="3 · Proyección con Evoluzion AI" icon={TrendingUp} accent="#00E5C0">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Stat label="Ahorro mensual estimado" value={currency(ahorroMensual)} color="#00E5C0" />
                <Stat label="Ahorro anual estimado" value={currency(ahorroAnual)} color="#00E5C0" />
                <Stat label="Ganancia neta mensual" value={currency(gananciaNetaMensual)} color={gananciaNetaMensual >= 0 ? "#00E5C0" : "#FF4D5E"} />
                <Stat label="Ganancia neta anual" value={currency(gananciaNetaAnual)} color={gananciaNetaAnual >= 0 ? "#00E5C0" : "#FF4D5E"} />
                <Stat label="ROI a 12 meses" value={pct(roi)} color={roi >= 0 ? "#00E5C0" : "#FF4D5E"} />
                <Stat
                  label="Recuperación de inversión"
                  value={paybackMeses ? `${paybackMeses.toFixed(1)} meses` : "N/A"}
                  color="#00E5C0"
                />
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-[#8888AA]">
                * Proyección estimada asumiendo la recuperación del {Math.round(clamp(pctRecuperacion, 0, 100))}% de
                las fugas identificadas. Los resultados reales dependen de cada negocio.
              </p>
            </Card>

            {/* Sección 4 — resultado ejecutivo */}
            <div className="rounded-3xl border-2 border-[#5B5BFF] bg-gradient-to-br from-[#1C1C2E] via-[#12121A] to-[#1C1C2E] p-6 shadow-2xl shadow-[#5B5BFF]/20 print:border-gray-400">
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#8888AA] print:text-gray-600">
                4 · Resultado del diagnóstico
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <BigStat label="Pierde al mes" value={currency(perdidaMensual)} color="#FF4D5E" />
                <BigStat label="Perderá en 1 año" value={currency(perdidaAnual)} color="#FF4D5E" />
                <BigStat
                  label="Recupera inversión en"
                  value={paybackMeses ? `${paybackMeses.toFixed(1)} meses` : "N/A"}
                  color="#00E5C0"
                />
                <BigStat label="ROI anual" value={pct(roi)} color="#00E5C0" />
              </div>
            </div>

            {/* Sección 5 — conclusión dinámica */}
            <Card title="5 · Conclusión" icon={Banknote} accent="#5B5BFF">
              <p className="leading-relaxed text-[#F0F0F8]">
                {"Con base en la información proporcionada, "}
                <strong>{nombre || "este negocio"}</strong>
                {" está perdiendo aproximadamente "}
                <strong className="text-[#FF4D5E]">{currency(perdidaMensual)}</strong>
                {" cada mes debido a procesos manuales, falta de seguimiento y tiempo operativo. Si esta situación continúa, la pérdida anual superará los "}
                <strong className="text-[#FF4D5E]">{currency(perdidaAnual)}</strong>
                {"."}
                {paybackMeses ? (
                  <>
                    {" La implementación de Evoluzion AI podría recuperar la inversión en aproximadamente "}
                    <strong className="text-[#00E5C0]">{`${paybackMeses.toFixed(1)} meses`}</strong>
                    {" y comenzar a generar beneficios económicos desde ese momento."}
                  </>
                ) : (
                  " Con los números actuales conviene revisar juntos qué plan se ajusta mejor al tamaño de la operación."
                )}
              </p>
            </Card>

            {/* Índice de Madurez Operativa */}
            <Card title="Índice de Madurez Operativa" icon={Gauge} accent={semaforoColor}>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 font-mono text-2xl font-bold"
                    style={{ borderColor: semaforoColor, color: semaforoColor }}
                  >
                    {indiceMadurez}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {semaforo === "rojo" ? "🔴" : semaforo === "amarillo" ? "🟡" : "🟢"} {indiceMadurez}/100
                    </p>
                    <p className="text-sm text-[#8888AA]">{semaforoLabel}</p>
                  </div>
                </div>
                <div className="w-full sm:w-56">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#2A2A40]">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${indiceMadurez}%`, background: semaforoColor }}
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-[#8888AA]">
                    ¿Qué tendría que cambiar para llegar a verde?
                  </p>
                </div>
              </div>
            </Card>

            {/* Siguiente paso + contacto (queda en el PDF impreso) */}
            <div className="rounded-2xl border border-[#00E5C0]/30 bg-[#00E5C0]/5 p-5 print:border-gray-300 print:bg-white">
              <p className="text-sm font-bold uppercase tracking-wide text-[#00E5C0] print:text-black">
                Siguiente paso
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#F0F0F8] print:text-black">
                Agenda tu llamada de diagnóstico sin costo y te mostramos exactamente
                cómo recuperar estas fugas en tu negocio.
              </p>
              <div className="mt-3 flex flex-col gap-1 text-sm text-[#F0F0F8] print:text-black sm:flex-row sm:gap-6">
                <span>
                  WhatsApp: <strong className="font-mono">+52 81 2759 1172</strong>
                </span>
                <span>
                  Correo: <strong className="font-mono">hola@evoluzion.mx</strong>
                </span>
                <span className="font-mono">evoluzion.mx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <Logo />
      </div>
      <div className="text-left sm:text-right">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#00E5C0]">
          Diagnóstico de Madurez Operativa
        </p>
        <p className="text-xs text-[#8888AA]">
          {new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg width="160" height="36" viewBox="0 0 360 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M 8 18 Q 8 8 18 8 L 52 8" stroke="#5B5BFF" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M 52 8 L 18 52" stroke="url(#diagGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M 18 52 L 52 52 Q 62 52 62 42" stroke="#00E5C0" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="62" cy="36" r="3.5" fill="#00E5C0" />
        <circle cx="62" cy="36" r="6" fill="#00E5C0" opacity="0.15" />
        <defs>
          <linearGradient id="diagGrad" x1="52" y1="8" x2="18" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5B5BFF" />
            <stop offset="100%" stopColor="#00E5C0" />
          </linearGradient>
        </defs>
      </g>
      <text x="84" y="50" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="38" letterSpacing="-1" className="fill-white print:fill-black">
        Evolu<tspan fill="#5B5BFF">z</tspan>ion
      </text>
    </svg>
  );
}

function Card({
  title,
  icon: Icon,
  accent,
  children,
}: {
  title: string;
  icon: React.ElementType;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#2A2A40] bg-[#1C1C2E] p-5 print:border-gray-300 print:bg-white">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4" style={{ color: accent }} />
        <h3 className="text-sm font-bold uppercase tracking-wide text-white print:text-black">{title}</h3>
      </div>
      <div className="space-y-3 print:text-black">{children}</div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-[#8888AA]">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-[#5B5BFF]/40 bg-[#0A0A0F] px-3 py-2 text-sm text-white outline-none focus:border-[#5B5BFF]"
      />
    </div>
  );
}

function NumField({
  label,
  value,
  onChange,
  prefix = "",
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-[#8888AA]">{label}</label>
      <div className="mt-1 flex items-center rounded-lg border border-[#5B5BFF]/40 bg-[#0A0A0F] px-3 focus-within:border-[#5B5BFF]">
        {prefix && <span className="text-sm text-[#8888AA]">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent py-2 pl-1 text-sm text-white outline-none"
        />
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl border border-[#2A2A40] bg-[#0A0A0F]/60 p-3 print:border-gray-200 print:bg-gray-50">
      <p className="font-mono text-base font-bold" style={{ color }}>
        {value}
      </p>
      <p className="text-[10px] leading-tight text-[#8888AA]">{label}</p>
    </div>
  );
}

function BigStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="text-center">
      <p className="font-mono text-xl font-bold sm:text-2xl" style={{ color }}>
        {value}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-wide text-[#8888AA] sm:text-xs">{label}</p>
    </div>
  );
}
