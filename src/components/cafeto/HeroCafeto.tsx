"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Dices, MapPin } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import CafePhoto from "./CafePhoto";

export default function HeroCafeto() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-8 md:pb-20 md:pt-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-2 text-sm font-medium text-bosque"
          >
            <MapPin className="h-4 w-4" strokeWidth={2} aria-hidden />
            Monterrey, Nuevo León
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            ¿A dónde vamos por café hoy?
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md text-lg leading-relaxed text-espresso-2"
          >
            Cafés escogidos uno por uno — para trabajar, para platicar o para
            perderte un rato. Sin listas infinitas, sin estrellitas.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#explora"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-terracota px-6 py-3.5 font-medium text-white shadow-taza transition-colors duration-200 hover:bg-terracota-2"
            >
              Explorar cafés
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/cafeto/ruleta/"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-espresso/20 bg-lienzo px-6 py-3.5 font-medium text-espresso transition-colors duration-200 hover:border-terracota hover:text-terracota-2"
            >
              <Dices className="h-4 w-4" aria-hidden />
              Que decida la ruleta
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
          aria-hidden
        >
          <div className="grid grid-cols-[1.2fr_1fr] gap-4">
            <CafePhoto
              id="1501339847302-ac426a4a7cbb"
              alt=""
              ancho={900}
              prioridad
              className="aspect-[3/4] rounded-[2rem] shadow-taza-lg"
            />
            <div className="flex flex-col gap-4 pt-10">
              <CafePhoto
                id="1495474472287-4d71bcdd2085"
                alt=""
                ancho={600}
                prioridad
                className="aspect-square rounded-[2rem] shadow-taza"
              />
              <CafePhoto
                id="1453614512568-c4024d13c247"
                alt=""
                ancho={600}
                className="aspect-[4/5] rounded-[2rem] shadow-taza"
              />
            </div>
          </div>
          <div className="absolute -left-3 bottom-6 rounded-2xl border border-linea bg-lienzo/95 px-4 py-3 shadow-taza backdrop-blur-sm md:-left-6">
            <p className="font-serif text-sm font-semibold">
              13 cafés con historia
            </p>
            <p className="text-xs text-humo">y contando, cada mes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
