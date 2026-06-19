"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone, Mail, MessageCircle, Check } from "lucide-react";

type Mode = "asistente" | "correo" | "whatsapp";

const MODE_DURATION = 4500;
const sequence: Mode[] = ["asistente", "correo", "whatsapp"];

const modeMeta: Record<Mode, { label: string; icon: typeof Phone }> = {
  asistente: { label: "Agente de Voz · Llamando", icon: Phone },
  correo: { label: "Email · Automatizado", icon: Mail },
  whatsapp: { label: "WhatsApp · Escribiendo", icon: MessageCircle },
};

/**
 * Cycles through 3 AI "modes" every 4.5s, always starting on "asistente".
 * Built with Framer Motion (already the project's animation library) instead
 * of raw CSS/JS so transitions share the same spring/easing language as the
 * rest of the site.
 */
export default function AIModesWidget() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setStep((s) => s + 1);
    }, MODE_DURATION);
    return () => clearInterval(id);
  }, [reduce]);

  const mode = sequence[step % sequence.length];
  const meta = modeMeta[mode];

  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-primary-900/80 px-4 pb-3 pt-7">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white">
          <meta.icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Asistente IA</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-accent-400"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {meta.label}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* stage */}
      <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden px-6 py-5">
        <AnimatePresence mode="wait">
          {mode === "asistente" && (
            <AsistenteMode key="asistente" reduce={!!reduce} />
          )}
          {mode === "correo" && <CorreoMode key="correo" reduce={!!reduce} />}
          {mode === "whatsapp" && (
            <WhatsappMode key="whatsapp" reduce={!!reduce} />
          )}
        </AnimatePresence>
      </div>

      {/* mode dots */}
      <div className="flex items-center justify-center gap-1.5 pb-2">
        {sequence.map((m, i) => (
          <span
            key={m}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === step % sequence.length ? "w-5 bg-accent" : "w-1.5 bg-white/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function StageWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex w-full flex-col items-center gap-4"
    >
      {children}
    </motion.div>
  );
}

/** Phone rings + sonar pings, then "answers" into a live audio waveform. */
function AsistenteMode({ reduce }: { reduce: boolean }) {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (reduce) {
      setAnswered(true);
      return;
    }
    const t = setTimeout(() => setAnswered(true), 1800);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <StageWrap>
      <div className="relative flex h-24 w-24 items-center justify-center">
        {!answered && !reduce && (
          <>
            <span className="absolute inline-flex h-full w-full rounded-full border border-accent/50 animate-sonar" />
            <span className="absolute inline-flex h-full w-full rounded-full border border-accent/50 animate-sonar [animation-delay:0.5s]" />
          </>
        )}
        <motion.div
          animate={
            !answered && !reduce
              ? { rotate: [0, -8, 8, -8, 8, 0] }
              : { rotate: 0, scale: 1 }
          }
          transition={
            !answered && !reduce
              ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30"
        >
          <Phone className="h-6 w-6" />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {answered ? (
          <motion.div
            key="waves"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-end gap-1"
          >
            {[8, 16, 24, 14, 20, 10, 18].map((h, i) => (
              <span
                key={i}
                style={{
                  height: `${h}px`,
                  animationDelay: `${i * 0.08}s`,
                }}
                className="w-1.5 origin-bottom rounded-full bg-accent animate-wave-bar"
              />
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="ringing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs font-medium text-slate-400"
          >
            Llamada entrante...
          </motion.p>
        )}
      </AnimatePresence>
      {answered && (
        <p className="text-xs font-medium text-slate-400">
          Respondiendo en vivo
        </p>
      )}
    </StageWrap>
  );
}

/** Envelope flies in, opens, types a message, then seals and shoots up. */
function CorreoMode({ reduce }: { reduce: boolean }) {
  const lines = ["Hola Carlos,", "Aquí tu cotización", "actualizada. ✓"];
  return (
    <StageWrap>
      <motion.div
        initial={reduce ? false : { y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30"
      >
        <Mail className="h-6 w-6" />
      </motion.div>

      <div className="w-full max-w-[14rem] rounded-xl border border-white/10 bg-primary-800 p-3 text-left">
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 0.6 + i * 0.5, duration: 0.2 }}
            className="text-xs leading-relaxed text-slate-200"
          >
            {line}
            {i === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-3 w-[1px] translate-y-0.5 bg-accent animate-blink-caret" />
            )}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 2.6, duration: 0.3 }}
        className="text-xs font-medium text-accent-400"
      >
        ✓ Enviado automáticamente
      </motion.p>
    </StageWrap>
  );
}

/** Chat bubble shows the classic "typing..." dots, then delivers with a blue double check. */
function WhatsappMode({ reduce }: { reduce: boolean }) {
  const [delivered, setDelivered] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDelivered(true);
      return;
    }
    const t = setTimeout(() => setDelivered(true), 2000);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <StageWrap>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30">
        <MessageCircle className="h-6 w-6" />
      </div>

      <div className="rounded-2xl rounded-bl-md border-l-2 border-accent bg-primary-800 px-4 py-3">
        <AnimatePresence mode="wait">
          {!delivered ? (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.15}s` }}
                  className="h-2 w-2 rounded-full bg-slate-400 animate-typing-dot"
                />
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="message"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs leading-relaxed text-slate-100"
            >
              ✓ Cita agendada, te esperamos mañana 2pm.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {delivered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-1 text-xs font-medium text-sky-400"
        >
          <span className="relative flex">
            <Check className="h-3.5 w-3.5" />
            <Check className="-ml-2 h-3.5 w-3.5" />
          </span>
          Entregado
        </motion.div>
      )}
    </StageWrap>
  );
}
