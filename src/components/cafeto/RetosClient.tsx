"use client";

import Link from "next/link";
import {
  Bookmark,
  Compass,
  FlaskConical,
  Landmark,
  Medal,
  Trees,
  type LucideIcon,
} from "lucide-react";
import type { Reto } from "@/lib/cafeto/types";
import { RETOS } from "@/lib/cafeto/data";
import { useFavoritos, useVisitados } from "@/lib/cafeto/store";

const ICONO_RETO: Record<string, LucideIcon> = {
  "cronista-del-casco": Landmark,
  "cinco-nuevos": Compass,
  coleccionista: Bookmark,
  "catador-de-metodos": FlaskConical,
  "lado-del-valle": Trees,
};

function useProgreso() {
  const { visitados } = useVisitados();
  const { favoritos } = useFavoritos();

  return (reto: Reto): number => {
    switch (reto.tipo) {
      case "visitas":
        return Math.min(visitados.length, reto.meta);
      case "favoritos":
        return Math.min(favoritos.length, reto.meta);
      case "cafes":
        return (reto.cafes ?? []).filter((slug) => visitados.includes(slug))
          .length;
    }
  };
}

export default function RetosClient() {
  const progresoDe = useProgreso();
  const { visitados } = useVisitados();
  const { favoritos } = useFavoritos();

  const completados = RETOS.filter((r) => progresoDe(r) >= r.meta).length;

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 md:max-w-md">
        {[
          { valor: visitados.length, etiqueta: "cafés visitados" },
          { valor: favoritos.length, etiqueta: "guardados" },
          { valor: completados, etiqueta: "retos logrados" },
        ].map(({ valor, etiqueta }) => (
          <div
            key={etiqueta}
            className="rounded-3xl border border-linea bg-lienzo px-4 py-4 text-center shadow-taza"
          >
            <p className="font-serif text-3xl font-semibold text-espresso">
              {valor}
            </p>
            <p className="mt-0.5 text-xs font-medium text-humo">{etiqueta}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {RETOS.map((reto) => {
          const progreso = progresoDe(reto);
          const logrado = progreso >= reto.meta;
          const Icono = ICONO_RETO[reto.id] ?? Medal;

          return (
            <article
              key={reto.id}
              className={`rounded-[2rem] border p-6 shadow-taza transition-colors duration-300 ${
                logrado
                  ? "border-bosque/30 bg-bosque-tinte"
                  : "border-linea bg-lienzo"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                    logrado
                      ? "bg-bosque text-crema"
                      : "bg-oro-tinte text-oro"
                  }`}
                >
                  <Icono className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                </span>
                {logrado && (
                  <span className="flex items-center gap-1.5 rounded-full bg-bosque px-3 py-1.5 text-xs font-semibold text-crema">
                    <Medal className="h-3.5 w-3.5" aria-hidden />
                    Insignia: {reto.insignia}
                  </span>
                )}
              </div>

              <h2 className="mt-4 font-serif text-xl font-semibold tracking-tight">
                {reto.titulo}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-espresso-2">
                {reto.descripcion}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={reto.meta}
                  aria-valuenow={progreso}
                  aria-label={`${reto.titulo}: ${progreso} de ${reto.meta}`}
                  className="h-2 flex-1 overflow-hidden rounded-full bg-crema-2"
                >
                  <div
                    className={`h-full rounded-full transition-[width] duration-500 ${
                      logrado ? "bg-bosque" : "bg-terracota"
                    }`}
                    style={{ width: `${(progreso / reto.meta) * 100}%` }}
                  />
                </div>
                <p className="shrink-0 text-sm font-medium text-humo">
                  {progreso} de {reto.meta}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 rounded-3xl bg-crema-2 px-6 py-5 text-sm leading-relaxed text-espresso-2">
        ¿Cómo cuenta una visita? Entra al perfil del café y toca{" "}
        <span className="font-semibold text-espresso">“Ya fui”</span>. Sin
        trampas — el reto es contigo.{" "}
        <Link
          href="/cafeto/"
          className="font-medium text-terracota-2 transition-colors hover:text-terracota"
        >
          Explorar cafés
        </Link>
      </p>
    </div>
  );
}
