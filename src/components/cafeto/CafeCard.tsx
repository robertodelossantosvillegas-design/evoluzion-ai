import Link from "next/link";
import type { Cafe } from "@/lib/cafeto/types";
import { PRECIO_SIMBOLO } from "@/lib/cafeto/data";
import CafePhoto from "./CafePhoto";
import FavoritoBtn from "./FavoritoBtn";

interface Props {
  cafe: Cafe;
  /** "columna": para cuadrículas fluidas · "panorama": ancho fijo en filas horizontales */
  variante?: "columna" | "panorama";
  prioridad?: boolean;
}

export default function CafeCard({
  cafe,
  variante = "columna",
  prioridad = false,
}: Props) {
  const anchoFijo =
    variante === "panorama" ? "w-[16.5rem] shrink-0 snap-start sm:w-72" : "";

  return (
    <article className={`relative ${anchoFijo}`}>
      <Link
        href={`/cafeto/cafes/${cafe.slug}/`}
        className="group block cursor-pointer"
      >
        <div className="relative">
          <CafePhoto
            id={cafe.fotos.hero}
            alt={`Foto de ${cafe.nombre}`}
            ancho={800}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            prioridad={prioridad}
            conZoom
            className="aspect-[4/5] rounded-3xl"
          />
          {cafe.nuevo && (
            <span className="absolute left-3 top-3 rounded-full bg-oro-tinte/95 px-3 py-1 text-xs font-semibold text-oro">
              Nuevo
            </span>
          )}
        </div>
        <div className="px-1 pt-3">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-lg font-semibold leading-snug">
              {cafe.nombre}
            </h3>
            <span className="text-sm text-humo">
              {PRECIO_SIMBOLO[cafe.precio]}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-humo">{cafe.zona}</p>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-espresso-2">
            {cafe.frase}
          </p>
        </div>
      </Link>
      <FavoritoBtn
        slug={cafe.slug}
        nombre={cafe.nombre}
        className="absolute right-3 top-3 z-10"
      />
    </article>
  );
}
