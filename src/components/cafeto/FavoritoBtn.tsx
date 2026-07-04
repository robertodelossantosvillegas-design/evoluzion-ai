"use client";

import { Bookmark } from "lucide-react";
import { useFavoritos } from "@/lib/cafeto/store";

interface Props {
  slug: string;
  nombre: string;
  /** "foto": flotando sobre una imagen · "plano": sobre fondo claro */
  tono?: "foto" | "plano";
  className?: string;
}

export default function FavoritoBtn({
  slug,
  nombre,
  tono = "foto",
  className = "",
}: Props) {
  const { esFavorito, alternarFavorito, listo } = useFavoritos();
  const activo = listo && esFavorito(slug);

  const base =
    "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-200 active:scale-90";
  const estilo =
    tono === "foto"
      ? activo
        ? "bg-lienzo text-terracota shadow-taza"
        : "bg-espresso/35 text-white backdrop-blur-sm hover:bg-espresso/55"
      : activo
        ? "bg-terracota-tinte text-terracota-2"
        : "bg-crema-2 text-espresso-2 hover:bg-terracota-tinte hover:text-terracota-2";

  return (
    <button
      type="button"
      onClick={() => alternarFavorito(slug)}
      aria-pressed={activo}
      aria-label={
        activo ? `Quitar ${nombre} de guardados` : `Guardar ${nombre}`
      }
      className={`${base} ${estilo} ${className}`}
    >
      <Bookmark
        className="h-5 w-5"
        strokeWidth={2}
        fill={activo ? "currentColor" : "none"}
        aria-hidden
      />
    </button>
  );
}
