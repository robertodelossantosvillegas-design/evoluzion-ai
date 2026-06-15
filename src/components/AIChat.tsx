"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  from: "bot" | "user";
  text: string;
};

const GREETING = "¡Hola! Soy el asistente de Evoluzion 👋 ¿En qué puedo ayudarte hoy?";

function getBotReply(input: string): string {
  const t = input.toLowerCase();
  if (/precio|costo|cuánto|cuanto|plan|paquete/.test(t))
    return "Tenemos tres planes: Starter ($2,990), Growth ($6,990) y Scale (desde $12,990) MXN/mes. ¿Quieres que te explique qué incluye cada uno?";
  if (/chatbot|chat bot|bot/.test(t))
    return "Implementamos chatbots de IA para WhatsApp, tu sitio web, Instagram y Facebook. Responden preguntas, califican prospectos y agendan citas las 24 horas.";
  if (/whatsapp|wha/.test(t))
    return "¡Sí! Automatizamos WhatsApp: seguimientos, confirmaciones, recuperación de clientes y ventas asistidas con IA.";
  if (/web|página|pagina|sitio/.test(t))
    return "Creamos páginas web desde $4,990 MXN: landing pages, sitios corporativos, sitios premium y e-commerce. Todos rápidos, responsive y con SEO.";
  if (/tarjeta|nfc|qr/.test(t))
    return "Ofrecemos tarjetas digitales con NFC y QR desde $990 MXN. Comparte tu información de contacto con solo acercar la tarjeta a cualquier celular.";
  if (/tiempo|cuándo|cuando|tarda|rapido/.test(t))
    return "La mayoría de implementaciones toman de 1 a 3 semanas. Automatizaciones básicas pueden estar listas en pocos días.";
  if (/hola|hi|buenas|saludos/.test(t))
    return "¡Hola! Estoy aquí para ayudarte. Puedes preguntarme sobre precios, servicios, páginas web, WhatsApp y más.";
  return "Gracias por tu mensaje. Para darte una atención más personalizada, ¿puedo tomar tu WhatsApp? Nuestro equipo te contactará en minutos.";
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typing]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { from: "user", text }]);
    setTyping(true);
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 600));
    setTyping(false);
    setMessages((m) => [...m, { from: "bot", text: getBotReply(text) }]);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.22 }}
            className="mb-3 flex h-[420px] w-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-primary-900 shadow-2xl shadow-black/40"
          >
            {/* header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-secondary/20 to-accent/10 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Asistente Evoluzion</p>
                  <p className="flex items-center gap-1 text-xs text-emerald-400">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    En línea · Demo IA
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-secondary text-white"
                        : "bg-white/8 text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-white/8 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="h-1.5 w-1.5 rounded-full bg-slate-400"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* input */}
            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Escribe un mensaje..."
                  aria-label="Mensaje al asistente"
                  className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
                />
                <button
                  type="button"
                  onClick={send}
                  aria-label="Enviar mensaje"
                  disabled={!input.trim()}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-secondary text-white transition-all hover:bg-secondary-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* toggle bubble */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-white shadow-xl shadow-secondary/40 transition-shadow hover:shadow-secondary/60"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
