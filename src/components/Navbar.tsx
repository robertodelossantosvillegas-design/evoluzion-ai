"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { useScrolled } from "@/lib/hooks";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Páginas Web", href: "#paginas-web" },
  { label: "Automatización IA", href: "#automatizacion" },
  { label: "Tarjetas Digitales", href: "#tarjetas" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "glass-strong shadow-2xl shadow-black/30"
            : "border border-transparent bg-white/5 backdrop-blur-md"
        }`}
      >
        <a
          href="#inicio"
          className="group flex cursor-pointer items-center gap-1 text-lg font-extrabold tracking-tight text-white"
        >
          EVOLUZION
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-secondary to-accent transition-transform duration-300 group-hover:scale-125" />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden cursor-pointer items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all duration-200 hover:bg-secondary-700 hover:shadow-secondary/50 sm:flex"
          >
            <CalendarCheck className="h-4 w-4" />
            Agenda una llamada
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl p-3 xl:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary-700"
            >
              <CalendarCheck className="h-4 w-4" />
              Agenda una llamada
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
