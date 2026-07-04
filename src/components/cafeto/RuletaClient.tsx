"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Dices, MapPin, RefreshCw } from "lucide-react";
import type { Cafe, Mood, Sector } from "@/lib/cafeto/types";
import { CAFES, ETIQUETA_MOOD, SECTORES } from "@/lib/cafeto/data";
import CafePhoto from "./CafePhoto";
import FavoritoBtn from "./FavoritoBtn";

const MOODS = Object.entries(ETIQUETA_MOOD) as [Mood, string][];

type Fase = "inicio" | "girando" | "resultado";

function Chip({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
        activo
          ? "bg-espresso text-crema"
          : "bg-crema-2 text-espresso-2 hover:bg-linea"
      }`}
    >
      {children}
    </button>
  );
}

function candidatosDe(mood: Mood | null, sector: Sector | null): Cafe[] {
  const filtrados = CAFES.filter(
    (c) =>
      (mood === null || c.moods.includes(mood)) &&
      (sector === null || c.sector === sector),
  );
  // Los cafés con plan Destacado aparecen con prioridad (doble boleto).
  return filtrados.flatMap((c) => (c.destacado ? [c, c] : [c]));
}

function alAzar<T>(lista: T[], excepto?: T): T {
  const opciones =
    lista.length > 1 && excepto ? lista.filter((x) => x !== excepto) : lista;
  return opciones[Math.floor(Math.random() * opciones.length)];
}

export default function RuletaClient() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [sector, setSector] = useState<Sector | null>(null);
  const [fase, setFase] = useState<Fase>("inicio");
  const [actual, setActual] = useState<Cafe | null>(null);
  const temporizadores = useRef<number[]>([]);
  const menosMovimiento = useReducedMotion();

  const candidatos = candidatosDe(mood, sector);
  const unicos = [...new Set(candidatos)];

  useEffect(() => {
    const pendientes = temporizadores.current;
    return () => pendientes.forEach((t) => window.clearTimeout(t));
  }, []);

  function girar() {
    if (candidatos.length === 0) return;
    temporizadores.current.forEach((t) => window.clearTimeout(t));
    temporizadores.current = [];

    const eleccion = alAzar(candidatos, actual ?? undefined);

    if (menosMovimiento || unicos.length === 1) {
      setActual(eleccion);
      setFase("resultado");
      return;
    }

    setFase("girando");
    // Barajado que se desacelera: rápido al inicio, se asienta al final.
    const pasos = [0, 110, 230, 360, 510, 690, 910, 1180, 1500];
    pasos.forEach((espera, i) => {
      const id = window.setTimeout(() => {
        if (i < pasos.length - 1) {
          setActual((previo) => alAzar(unicos, previo ?? undefined));
        } else {
          setActual(eleccion);
          setFase("resultado");
        }
      }, espera);
      temporizadores.current.push(id);
    });
  }

  return (
    <div>
      <fieldset>
        <legend className="text-sm font-medium text-humo">¿Qué plan traes?</legend>
        <div className="sin-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
          <Chip activo={mood === null} onClick={() => setMood(null)}>
            Sorpréndeme
          </Chip>
          {MOODS.map(([id, etiqueta]) => (
            <Chip key={id} activo={mood === id} onClick={() => setMood(id)}>
              {etiqueta}
            </Chip>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-humo">¿Por dónde andas?</legend>
        <div className="sin-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
          <Chip activo={sector === null} onClick={() => setSector(null)}>
            Donde sea
          </Chip>
          {SECTORES.map((s) => (
            <Chip
              key={s.id}
              activo={sector === s.id}
              onClick={() => setSector(s.id)}
            >
              {s.nombre}
            </Chip>
          ))}
        </div>
      </fieldset>

      <div className="mt-10 flex flex-col items-center">
        {candidatos.length === 0 ? (
          <p className="w-full max-w-md rounded-3xl bg-crema-2 p-6 text-center text-espresso-2">
            Ningún café coincide con esa combinación por ahora. Prueba con otra
            zona u otro plan.
          </p>
        ) : (
          <>
            <div className="w-full max-w-md" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                {fase === "inicio" && (
                  <motion.div
                    key="inicio"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex aspect-[4/3] flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-linea bg-lienzo/60 px-8 text-center"
                  >
                    <Dices
                      className="h-10 w-10 text-terracota"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <p className="mt-4 font-serif text-xl font-medium">
                      {unicos.length}{" "}
                      {unicos.length === 1 ? "café en juego" : "cafés en juego"}
                    </p>
                    <p className="mt-1 text-sm text-humo">
                      Gira y deja que el azar tenga buen gusto.
                    </p>
                  </motion.div>
                )}

                {fase === "girando" && actual && (
                  <motion.div
                    key={`girando-${actual.slug}`}
                    initial={{ opacity: 0.4, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4, scale: 0.97 }}
                    transition={{ duration: 0.09 }}
                    className="overflow-hidden rounded-[2rem] border border-linea bg-lienzo shadow-taza"
                  >
                    <CafePhoto
                      id={actual.fotos.hero}
                      alt=""
                      ancho={800}
                      className="aspect-[16/10]"
                    />
                    <div className="px-6 py-4">
                      <p className="font-serif text-xl font-semibold">
                        {actual.nombre}
                      </p>
                      <p className="text-sm text-humo">{actual.zona}</p>
                    </div>
                  </motion.div>
                )}

                {fase === "resultado" && actual && (
                  <motion.div
                    key={`resultado-${actual.slug}`}
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                    className="relative overflow-hidden rounded-[2rem] border border-linea bg-lienzo shadow-taza-lg"
                  >
                    <CafePhoto
                      id={actual.fotos.hero}
                      alt={`Foto de ${actual.nombre}`}
                      ancho={800}
                      className="aspect-[16/10]"
                    />
                    <FavoritoBtn
                      slug={actual.slug}
                      nombre={actual.nombre}
                      className="absolute right-4 top-4 z-10"
                    />
                    <div className="px-6 pb-6 pt-4 text-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracota-2">
                        Hoy toca
                      </p>
                      <p className="mt-1.5 font-serif text-3xl font-semibold tracking-tight">
                        {actual.nombre}
                      </p>
                      <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-humo">
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                        {actual.zona}
                      </p>
                      <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-espresso-2">
                        {actual.frase}
                      </p>
                      <Link
                        href={`/cafeto/cafes/${actual.slug}/`}
                        className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-terracota px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-terracota-2"
                      >
                        Ver perfil
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={girar}
              disabled={fase === "girando"}
              className="mt-8 inline-flex h-14 cursor-pointer items-center gap-2.5 rounded-full bg-espresso px-8 text-base font-medium text-crema shadow-taza transition-all duration-200 hover:bg-espresso/90 disabled:cursor-default disabled:opacity-60"
            >
              {fase === "resultado" ? (
                <>
                  <RefreshCw className="h-5 w-5" aria-hidden />
                  Girar otra vez
                </>
              ) : (
                <>
                  <Dices className="h-5 w-5" aria-hidden />
                  Girar la ruleta
                </>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
