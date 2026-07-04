"use client";

import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { CAFES } from "@/lib/cafeto/data";
import { useFavoritos } from "@/lib/cafeto/store";
import CafeCard from "./CafeCard";

export default function FavoritosClient() {
  const { favoritos, listo } = useFavoritos();

  const guardados = CAFES.filter((c) => favoritos.includes(c.slug));

  if (!listo) {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-[4/5] rounded-3xl bg-crema-2" />
            <div className="mt-3 h-4 w-2/3 rounded-full bg-crema-2" />
            <div className="mt-2 h-3 w-1/3 rounded-full bg-crema-2" />
          </div>
        ))}
      </div>
    );
  }

  if (guardados.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-[2rem] border-2 border-dashed border-linea bg-lienzo/60 px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracota-tinte text-terracota-2">
          <Bookmark className="h-6 w-6" strokeWidth={1.8} aria-hidden />
        </span>
        <p className="mt-5 font-serif text-2xl font-semibold">
          Aún no guardas ningún café
        </p>
        <p className="mt-2 max-w-sm leading-relaxed text-espresso-2">
          Cuando encuentres uno que te enamore, tócale el marcador y aquí te
          estará esperando.
        </p>
        <Link
          href="/cafeto/"
          className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-terracota px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-terracota-2"
        >
          Explorar cafés
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="text-espresso-2">
        {guardados.length === 1
          ? "Un café guardado. Buen comienzo."
          : `${guardados.length} cafés guardados. Tu propio mapa de la ciudad.`}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {guardados.map((cafe) => (
          <CafeCard key={cafe.slug} cafe={cafe} />
        ))}
      </div>
    </div>
  );
}
