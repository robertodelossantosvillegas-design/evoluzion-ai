"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
        >
          <a
            href="tel:+521234567890"
            aria-label="Llámanos"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-secondary px-4 py-3 text-white shadow-lg shadow-secondary/40 transition-all duration-200 hover:bg-secondary-700"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden text-sm font-semibold sm:inline">
              Llámanos
            </span>
          </a>
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-lg shadow-emerald-500/40 transition-all duration-200 hover:bg-emerald-600"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden text-sm font-semibold sm:inline">
              WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
