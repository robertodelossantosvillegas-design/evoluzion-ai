import type { Coleccion } from "@/lib/cafeto/types";
import { cafesDeColeccion } from "@/lib/cafeto/data";
import CafeCard from "./CafeCard";

export default function ColeccionRow({ coleccion }: { coleccion: Coleccion }) {
  const cafes = cafesDeColeccion(coleccion);

  return (
    <section aria-labelledby={`coleccion-${coleccion.slug}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2
          id={`coleccion-${coleccion.slug}`}
          className="font-serif text-2xl font-semibold tracking-tight md:text-3xl"
        >
          {coleccion.titulo}
        </h2>
        <p className="mt-1 text-espresso-2">{coleccion.bajada}</p>
      </div>
      <div className="sin-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:px-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))]">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.slug} cafe={cafe} variante="panorama" />
        ))}
        <span aria-hidden className="w-1 shrink-0" />
      </div>
    </section>
  );
}
