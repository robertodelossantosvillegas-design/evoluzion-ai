"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import type { Cafe, Ruta } from "@/lib/cafeto/types";
import { useProgresoRutas } from "@/lib/cafeto/store";
import CafePhoto from "./CafePhoto";

interface Props {
  ruta: Ruta;
  cafes: Record<string, Cafe>;
}

export default function RutaParadas({ ruta, cafes }: Props) {
  const { completadas, alternarParada, listo } = useProgresoRutas(ruta.slug);
  const total = ruta.paradas.length;
  const hechas = listo ? completadas.length : 0;
  const completa = hechas === total;

  return (
    <div>
      <div className="flex items-center justify-between gap-4 rounded-3xl border border-linea bg-lienzo px-6 py-4 shadow-taza">
        {completa ? (
          <p className="flex items-center gap-2.5 font-medium text-bosque">
            <Sparkles className="h-5 w-5" aria-hidden />
            Ruta completada. Nada mal, ¿eh?
          </p>
        ) : (
          <p className="text-sm text-espresso-2">
            <span className="font-serif text-2xl font-semibold text-espresso">
              {hechas}
            </span>{" "}
            de {total} paradas — marca cada una cuando llegues.
          </p>
        )}
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={hechas}
          aria-label={`Progreso de la ruta: ${hechas} de ${total} paradas`}
          className="h-2 w-24 shrink-0 overflow-hidden rounded-full bg-crema-2 sm:w-40"
        >
          <div
            className="h-full rounded-full bg-terracota transition-[width] duration-500"
            style={{ width: `${(hechas / total) * 100}%` }}
          />
        </div>
      </div>

      <ol className="mt-8 space-y-0">
        {ruta.paradas.map((parada, i) => {
          const cafe = cafes[parada.cafe];
          const hecha = listo && completadas.includes(parada.cafe);
          const ultima = i === ruta.paradas.length - 1;
          if (!cafe) return null;

          return (
            <li key={parada.cafe} className="relative flex gap-5 md:gap-7">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-lg font-semibold transition-colors duration-300 ${
                    hecha
                      ? "bg-bosque text-crema"
                      : "bg-terracota-tinte text-terracota-2"
                  }`}
                  aria-hidden
                >
                  {hecha ? <Check className="h-5 w-5" /> : i + 1}
                </span>
                {!ultima && (
                  <span
                    aria-hidden
                    className="w-px flex-1 bg-linea"
                  />
                )}
              </div>

              <div className={`min-w-0 flex-1 ${ultima ? "" : "pb-10"}`}>
                <p className="pt-2 text-sm font-semibold uppercase tracking-[0.14em] text-humo">
                  {parada.momento}
                </p>
                <div className="mt-3 flex flex-col gap-4 rounded-3xl border border-linea bg-lienzo p-4 shadow-taza sm:flex-row sm:items-center">
                  <Link
                    href={`/cafeto/cafes/${cafe.slug}/`}
                    className="group flex min-w-0 flex-1 cursor-pointer items-center gap-4"
                  >
                    <CafePhoto
                      id={cafe.fotos.hero}
                      alt={`Foto de ${cafe.nombre}`}
                      ancho={300}
                      conZoom
                      className="h-20 w-20 shrink-0 rounded-2xl"
                    />
                    <span className="min-w-0">
                      <span className="block truncate font-serif text-lg font-semibold group-hover:text-terracota-2">
                        {cafe.nombre}
                      </span>
                      <span className="block text-sm text-humo">
                        {cafe.zona}
                      </span>
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => alternarParada(parada.cafe)}
                    aria-pressed={hecha}
                    className={`h-11 shrink-0 cursor-pointer rounded-full px-5 text-sm font-medium transition-colors duration-200 ${
                      hecha
                        ? "bg-bosque text-crema hover:bg-bosque/90"
                        : "border border-espresso/20 text-espresso hover:border-bosque hover:text-bosque"
                    }`}
                  >
                    {hecha ? "Hecha" : "Marcar parada"}
                  </button>
                </div>
                <p className="mt-3 max-w-prose text-sm italic leading-relaxed text-espresso-2">
                  {parada.tip}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
