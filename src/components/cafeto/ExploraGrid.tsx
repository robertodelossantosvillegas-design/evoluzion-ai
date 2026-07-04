"use client";

import { useState } from "react";
import type { Mood } from "@/lib/cafeto/types";
import { CAFES, ETIQUETA_MOOD } from "@/lib/cafeto/data";
import CafeCard from "./CafeCard";

const MOODS = Object.entries(ETIQUETA_MOOD) as [Mood, string][];

export default function ExploraGrid() {
  const [mood, setMood] = useState<Mood | "todos">("todos");

  const visibles =
    mood === "todos" ? CAFES : CAFES.filter((c) => c.moods.includes(mood));

  return (
    <section id="explora" className="mx-auto max-w-6xl scroll-mt-24 px-5 md:px-8">
      <h2 className="font-serif text-2xl font-semibold tracking-tight md:text-3xl">
        Todos los cafés
      </h2>
      <p className="mt-1 text-espresso-2">
        Explora a tu ritmo — o filtra si ya sabes qué plan traes.
      </p>

      <div
        className="sin-scrollbar -mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0"
        role="group"
        aria-label="Filtrar por plan"
      >
        <button
          type="button"
          onClick={() => setMood("todos")}
          aria-pressed={mood === "todos"}
          className={`shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
            mood === "todos"
              ? "bg-espresso text-crema"
              : "bg-crema-2 text-espresso-2 hover:bg-linea"
          }`}
        >
          Todos
        </button>
        {MOODS.map(([id, etiqueta]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMood(id)}
            aria-pressed={mood === id}
            className={`shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              mood === id
                ? "bg-espresso text-crema"
                : "bg-crema-2 text-espresso-2 hover:bg-linea"
            }`}
          >
            {etiqueta}
          </button>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
        {visibles.map((cafe) => (
          <CafeCard key={cafe.slug} cafe={cafe} />
        ))}
      </div>

      {visibles.length === 0 && (
        <p className="mt-8 rounded-2xl bg-crema-2 p-6 text-espresso-2">
          Ningún café coincide con ese plan por ahora.
        </p>
      )}
    </section>
  );
}
