import Link from "next/link";
import type { Cafe } from "@/lib/cafeto/types";
import { PRECIO_SIMBOLO } from "@/lib/cafeto/data";
import CafePhoto from "./CafePhoto";
import FavoritoBtn from "./FavoritoBtn";

interface Props {
  cafe: Cafe;
  /** "columna": cuadrícula fluida · "panorama": ancho fijo en rieles · "destacada": tarjeta ancha 16/9 */
  variante?: "columna" | "panorama" | "destacada";
  prioridad?: boolean;
  /** A dónde regresa el perfil (se anexa como ?de=) — solo informativo por ahora. */
  eyebrow?: string;
}

export default function CafeCard({
  cafe,
  variante = "columna",
  prioridad = false,
  eyebrow,
}: Props) {
  const anchoFijo =
    variante === "panorama" ? "w-[8.6rem] shrink-0 snap-start sm:w-40" : "";
  const aspecto =
    variante === "destacada"
      ? "aspect-[16/9.6]"
      : variante === "panorama"
        ? "aspect-[4/5.2]"
        : "aspect-[4/4.9]";

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
            ancho={variante === "destacada" ? 1200 : 640}
            sizes={
              variante === "destacada"
                ? "(min-width: 768px) 640px, 92vw"
                : "(min-width: 640px) 220px, 45vw"
            }
            prioridad={prioridad}
            conZoom
            className={`${aspecto} ${variante === "destacada" ? "rounded-[1.6rem]" : "rounded-3xl"} shadow-taza`}
          />
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 ${variante === "destacada" ? "rounded-[1.6rem]" : "rounded-3xl"} bg-gradient-to-t from-[#140b04]/75 via-[#140b04]/10 to-transparent`}
          />
          {cafe.nuevo && (
            <span className="absolute left-2.5 top-2.5 rounded-full bg-oro-tinte/95 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-oro">
              Nuevo
            </span>
          )}
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 ${variante === "destacada" ? "p-4" : "p-3"} text-white`}
          >
            {eyebrow && (
              <p className="mb-0.5 text-[0.58rem] font-extrabold uppercase tracking-[0.15em] text-[#e8c98a]">
                {eyebrow}
              </p>
            )}
            <h3
              className={`font-serif font-semibold leading-tight [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] ${
                variante === "destacada"
                  ? "text-2xl"
                  : variante === "panorama"
                    ? "text-[0.95rem]"
                    : "text-lg"
              }`}
            >
              {cafe.nombre}
            </h3>
            <p className="mt-0.5 flex min-w-0 items-center gap-2 text-xs font-medium text-white/85">
              <span className="truncate">{cafe.zona}</span>
              <span className="shrink-0 font-bold text-[#e8c98a]">
                {PRECIO_SIMBOLO[cafe.precio]}
              </span>
            </p>
          </div>
        </div>
      </Link>
      <FavoritoBtn
        slug={cafe.slug}
        nombre={cafe.nombre}
        className="absolute right-2.5 top-2.5 z-10"
      />
    </article>
  );
}
