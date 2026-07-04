"use client";

import { useState } from "react";
import { Bookmark, Check, Share2 } from "lucide-react";
import { useFavoritos, useVisitados } from "@/lib/cafeto/store";

interface Props {
  slug: string;
  nombre: string;
  frase: string;
}

export default function PerfilAcciones({ slug, nombre, frase }: Props) {
  const { esFavorito, alternarFavorito, listo } = useFavoritos();
  const { fueVisitado, alternarVisita, listo: visitasListas } = useVisitados();
  const [compartido, setCompartido] = useState(false);

  const guardado = listo && esFavorito(slug);
  const visitado = visitasListas && fueVisitado(slug);

  async function compartir() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${nombre} · Cafeto`, text: frase, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCompartido(true);
      setTimeout(() => setCompartido(false), 2000);
    } catch {
      // compartir cancelado por la persona: no es un error
    }
  }

  const pastilla =
    "inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200";

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <button
        type="button"
        onClick={() => alternarFavorito(slug)}
        aria-pressed={guardado}
        className={`${pastilla} ${
          guardado
            ? "bg-terracota text-white hover:bg-terracota-2"
            : "border border-espresso/20 bg-lienzo text-espresso hover:border-terracota hover:text-terracota-2"
        }`}
      >
        <Bookmark
          className="h-4 w-4"
          fill={guardado ? "currentColor" : "none"}
          aria-hidden
        />
        {guardado ? "Guardado" : "Guardar"}
      </button>

      <button
        type="button"
        onClick={compartir}
        className={`${pastilla} border border-espresso/20 bg-lienzo text-espresso hover:border-terracota hover:text-terracota-2`}
      >
        <Share2 className="h-4 w-4" aria-hidden />
        {compartido ? "Enlace copiado" : "Compartir"}
      </button>

      <button
        type="button"
        onClick={() => alternarVisita(slug)}
        aria-pressed={visitado}
        title="Tus visitas cuentan para los retos"
        className={`${pastilla} ${
          visitado
            ? "bg-bosque text-crema hover:bg-bosque/90"
            : "border border-espresso/20 bg-lienzo text-espresso hover:border-bosque hover:text-bosque"
        }`}
      >
        <Check className="h-4 w-4" aria-hidden />
        {visitado ? "Visitado" : "Ya fui"}
      </button>
    </div>
  );
}
