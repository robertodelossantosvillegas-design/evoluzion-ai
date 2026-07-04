import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Footprints, MapPin } from "lucide-react";
import { getCafe, getRuta, RUTAS } from "@/lib/cafeto/data";
import type { Cafe } from "@/lib/cafeto/types";
import CafePhoto from "@/components/cafeto/CafePhoto";
import RutaParadas from "@/components/cafeto/RutaParadas";

export function generateStaticParams() {
  return RUTAS.map((ruta) => ({ slug: ruta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ruta = getRuta(slug);
  if (!ruta) return {};
  return { title: `${ruta.titulo} — Ruta de café`, description: ruta.bajada };
}

export default async function PaginaRuta({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ruta = getRuta(slug);
  if (!ruta) notFound();

  const cafes = Object.fromEntries(
    ruta.paradas
      .map((p) => getCafe(p.cafe))
      .filter((c): c is Cafe => Boolean(c))
      .map((c) => [c.slug, c]),
  );

  return (
    <main className="mx-auto max-w-4xl px-5 pb-20 pt-4 md:px-8">
      <div className="relative">
        <CafePhoto
          id={ruta.foto}
          alt={`Ruta ${ruta.titulo}`}
          ancho={1400}
          prioridad
          sizes="(min-width: 896px) 832px, 92vw"
          className="aspect-[16/9] rounded-[2rem] shadow-taza-lg"
        />
        <Link
          href="/cafeto/rutas/"
          className="absolute left-4 top-4 inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-full bg-crema/90 pl-3 pr-4 text-sm font-medium text-espresso backdrop-blur-sm transition-colors duration-200 hover:bg-crema"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Rutas
        </Link>
      </div>

      <header className="mt-8">
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm font-medium text-bosque">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden />
            {ruta.zona}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden />
            {ruta.duracion}
          </span>
          <span className="flex items-center gap-1.5">
            <Footprints className="h-4 w-4" aria-hidden />
            {ruta.paradas.length} paradas
          </span>
        </div>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          {ruta.titulo}
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-espresso-2">
          {ruta.descripcion}
        </p>
      </header>

      <div className="mt-10">
        <RutaParadas ruta={ruta} cafes={cafes} />
      </div>
    </main>
  );
}
