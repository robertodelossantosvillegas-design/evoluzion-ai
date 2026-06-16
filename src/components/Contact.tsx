"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  CalendarCheck,
  Loader2,
  CheckCircle2,
  Send,
  Zap,
} from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type FormState = {
  nombre: string;
  email: string;
  whatsapp: string;
  negocio: string;
  mensaje: string;
};

const initial: FormState = {
  nombre: "",
  email: "",
  whatsapp: "",
  negocio: "",
  mensaje: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) next.nombre = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Ingresa un correo válido.";
    if (form.whatsapp.replace(/\D/g, "").length < 10)
      next.whatsapp = "Ingresa un número de 10 dígitos.";
    if (!form.negocio) next.negocio = "Selecciona un tipo de negocio.";
    if (!form.mensaje.trim()) next.mensaje = "Cuéntanos un poco más.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setForm(initial);
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-b from-primary-900 to-primary-950 py-24"
    >
      <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-secondary/20 blur-[130px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
            Contacto
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Hablemos de tu <span className="text-gradient-blue">negocio</span>
          </h2>
          <p className="mt-4 max-w-md text-slate-300">
            Cuéntanos qué quieres automatizar y te mostramos exactamente cómo la
            IA puede ayudarte. Sin compromiso.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-400">
            <Zap className="h-4 w-4" />
            Tiempo de respuesta: menos de 2 horas
          </div>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:hola@evoluzion.mx"
              className="glass group flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors duration-200 hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-400">Correo</p>
                <p className="font-semibold text-white">hola@evoluzion.mx</p>
              </div>
            </a>
            <a
              href="https://wa.me/521234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors duration-200 hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-400">WhatsApp</p>
                <p className="font-semibold text-white">+52 123 456 7890</p>
              </div>
            </a>
          </div>

          {/* Calendly placeholder */}
          <div className="glass mt-4 flex items-center gap-4 rounded-2xl border-dashed p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/20 text-secondary-400">
              <CalendarCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">Agenda una llamada</p>
              <p className="text-sm text-slate-400">
                Calendly se integrará aquí.
              </p>
            </div>
          </div>
        </motion.div>

        {/* form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="glass-strong rounded-3xl p-6 sm:p-8"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full flex-col items-center justify-center py-12 text-center"
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <CheckCircle2 className="h-9 w-9" />
              </span>
              <h3 className="text-xl font-bold text-white">¡Mensaje enviado!</h3>
              <p className="mt-2 max-w-xs text-sm text-slate-300">
                Gracias por contactarnos. Te responderemos muy pronto.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 cursor-pointer rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <Field
                id="nombre"
                label="Nombre"
                value={form.nombre}
                error={errors.nombre}
                onChange={(v) => update("nombre", v)}
                placeholder="Tu nombre completo"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => update("email", v)}
                placeholder="tu@correo.com"
              />
              <Field
                id="whatsapp"
                label="WhatsApp"
                type="tel"
                value={form.whatsapp}
                error={errors.whatsapp}
                onChange={(v) => update("whatsapp", v)}
                placeholder="10 dígitos"
              />
              <div>
                <label
                  htmlFor="negocio"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Tipo de negocio
                </label>
                <select
                  id="negocio"
                  value={form.negocio}
                  onChange={(e) => update("negocio", e.target.value)}
                  className={`w-full cursor-pointer rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition-colors duration-200 focus:border-accent/60 ${
                    errors.negocio ? "border-rose-500/60" : "border-white/10"
                  }`}
                >
                  <option value="" className="bg-primary-900">
                    Selecciona una opción
                  </option>
                  {[
                    "Despacho / Abogados",
                    "Clínica / Médico",
                    "Restaurante",
                    "E-commerce",
                    "Inmobiliaria",
                    "Agencia de Marketing",
                    "Constructora",
                    "Coach / Consultor",
                    "Otro",
                  ].map((o) => (
                    <option key={o} value={o} className="bg-primary-900">
                      {o}
                    </option>
                  ))}
                </select>
                {errors.negocio && (
                  <p className="mt-1 text-xs text-rose-400">{errors.negocio}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => update("mensaje", e.target.value)}
                  placeholder="¿Qué te gustaría automatizar?"
                  className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-accent/60 ${
                    errors.mensaje ? "border-rose-500/60" : "border-white/10"
                  }`}
                />
                {errors.mensaje && (
                  <p className="mt-1 text-xs text-rose-400">{errors.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-200"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-accent/60 ${
          error ? "border-rose-500/60" : "border-white/10"
        }`}
      />
      {error && <p className="mt-1 text-xs text-rose-400">{error}</p>}
    </div>
  );
}
