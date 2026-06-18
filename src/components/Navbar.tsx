"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { useScrolled } from "@/lib/hooks";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

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
          aria-label="Evoluzion"
          className="group flex cursor-pointer items-center"
        >
          <svg
            width="160"
            height="36"
            viewBox="0 0 360 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-[1.03]"
          >
            <g>
              <path
                d="M 8 18 Q 8 8 18 8 L 52 8"
                stroke="#5B5BFF"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 52 8 L 18 52"
                stroke="url(#navGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 18 52 L 52 52 Q 62 52 62 42"
                stroke="#00E5C0"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="62" cy="36" r="3.5" fill="#00E5C0" />
              <circle cx="62" cy="36" r="6" fill="#00E5C0" opacity="0.15" />
              <defs>
                <linearGradient
                  id="navGrad"
                  x1="52"
                  y1="8"
                  x2="18"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#5B5BFF" />
                  <stop offset="100%" stopColor="#00E5C0" />
                </linearGradient>
              </defs>
            </g>
            <text
              x="84"
              y="50"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="700"
              fontSize="38"
              letterSpacing="-1"
              fill="white"
            >
              Evolu
              <tspan fill="#5B5BFF">z</tspan>
              ion
            </text>
          </svg>
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
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 0 rgba(91,91,255,0.5)",
                      "0 0 0 10px rgba(91,91,255,0)",
                    ],
                  }
            }
            transition={{
              boxShadow: { duration: 1.8, repeat: Infinity, ease: "easeOut" },
            }}
            className="hidden cursor-pointer items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-colors duration-200 hover:bg-secondary-700 sm:flex"
          >
            <CalendarCheck className="h-4 w-4" />
            Agenda una llamada
          </motion.a>
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
