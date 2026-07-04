import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Footprints, MapPin } from "lucide-react";
import { RUTAS } from "@/lib/cafeto/data";
import CafePhoto from "@/components/cafeto/CafePhoto";

export const metadata: Metadata = {
  title: "Rutas de café",
  description:
    "Itinerarios de café curados en Monterrey: dos, tres o cuatro paradas con horarios sugeridos y tips de quien ya las caminó.",
};

export default function PaginaRutas() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pt-14">
      <header className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracota-2">
          Rutas de café
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Un buen día se planea por tazas
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-espresso-2">
          Itinerarios cortos y curados: a qué hora llegar, qué pedir y por qué
          vale la pena cada parada.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {RUTAS.map((ruta) => (
          <Link
            key={ruta.slug}
            href={`/cafeto/rutas/${ruta.slug}/`}
            className="group block cursor-pointer overflow-hidden rounded-[2rem] border border-linea bg-lienzo shadow-taza transition-shadow duration-200 hover:shadow-taza-lg"
          >
            <CafePhoto
              id={ruta.foto}
              alt={`Ruta ${ruta.titulo}`}
              ancho={900}
              conZoom
              sizes="(min-width: 768px) 33vw, 92vw"
              className="aspect-[16/10]"
            />
            <div className="p-6">
              <h2 className="font-serif text-xl font-semibold tracking-tight">
                {ruta.titulo}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-espresso-2">
                {ruta.bajada}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-humo">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {ruta.zona}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {ruta.duracion}
                </span>
                <span className="flex items-center gap-1.5">
                  <Footprints className="h-3.5 w-3.5" aria-hidden />
                  {ruta.paradas.length} paradas
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
