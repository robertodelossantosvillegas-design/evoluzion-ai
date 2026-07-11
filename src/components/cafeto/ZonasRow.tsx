import Link from "next/link";
import { ZONAS, getCafe } from "@/lib/cafeto/data";
import CafePhoto from "./CafePhoto";

export default function ZonasRow() {
  return (
    <section aria-labelledby="rumbos">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-5 md:px-8">
        <h2 id="rumbos" className="font-serif text-lg font-semibold md:text-2xl">
          Por el rumbo
        </h2>
        <span className="text-[0.68rem] font-bold tracking-wide text-humo">
          tu barrio primero
        </span>
      </div>
      <div className="sin-scrollbar mt-3 flex gap-4 overflow-x-auto px-5 pb-1 md:px-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))]">
        {ZONAS.map((zona) => {
          const portada = zona.cafes[0] ? getCafe(zona.cafes[0]) : undefined;
          if (zona.proximamente || !portada) {
            return (
              <div
                key={zona.slug}
                className="flex w-16 shrink-0 flex-col items-center gap-1.5 text-center"
                aria-disabled
              >
                <span className="flex h-[3.7rem] w-[3.7rem] items-center justify-center rounded-full border-2 border-dashed border-linea bg-crema-2 font-serif text-sm font-semibold text-humo">
                  {zona.abrev}
                </span>
                <span className="text-[0.62rem] font-bold leading-tight text-humo">
                  {zona.nombre}
                </span>
                <span className="-mt-1 text-[0.56rem] font-bold text-humo/70">
                  pronto
                </span>
              </div>
            );
          }
          return (
            <Link
              key={zona.slug}
              href={`/cafeto/rumbos/${zona.slug}/`}
              className="group flex w-16 shrink-0 cursor-pointer flex-col items-center gap-1.5 text-center"
            >
              <span className="relative block h-[3.7rem] w-[3.7rem] overflow-hidden rounded-full shadow-taza ring-2 ring-lienzo transition-transform duration-200 group-active:scale-90">
                <CafePhoto
                  id={portada.fotos.hero}
                  alt=""
                  ancho={160}
                  className="h-full w-full rounded-full"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center rounded-full bg-espresso/35 font-serif text-sm font-semibold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]"
                >
                  {zona.abrev}
                </span>
              </span>
              <span className="text-[0.62rem] font-bold leading-tight text-espresso-2">
                {zona.nombre}
              </span>
              <span className="-mt-1 text-[0.56rem] font-bold text-humo">
                {zona.cafes.length} {zona.cafes.length === 1 ? "café" : "cafés"}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
