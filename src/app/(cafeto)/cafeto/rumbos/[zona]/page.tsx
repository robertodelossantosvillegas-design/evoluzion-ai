import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, MapPin } from "lucide-react";
import { cafesDeZona, getZona, ZONAS } from "@/lib/cafeto/data";
import CafeCard from "@/components/cafeto/CafeCard";

export function generateStaticParams() {
  return ZONAS.map((zona) => ({ zona: zona.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zona: string }>;
}): Promise<Metadata> {
  const { zona: slug } = await params;
  const zona = getZona(slug);
  if (!zona) return {};
  return {
    title: `${zona.nombre} — cafés por el rumbo`,
    description: `Los cafés de ${zona.nombre} en Cafeto, escogidos uno por uno.`,
  };
}

export default async function PaginaZona({
  params,
}: {
  params: Promise<{ zona: string }>;
}) {
  const { zona: slug } = await params;
  const zona = getZona(slug);
  if (!zona) notFound();

  const cafes = cafesDeZona(zona);

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-4 md:px-8 md:pt-10">
      <div className="flex items-center justify-between">
        <Link
          href="/cafeto/"
          className="inline-flex h-10 cursor-pointer items-center gap-1 rounded-full bg-crema-2 pl-2.5 pr-4 text-sm font-semibold text-espresso transition-colors hover:bg-linea"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Rumbos
        </Link>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-linea bg-lienzo px-3 py-1.5 text-xs font-bold text-espresso-2">
          <MapPin className="h-3.5 w-3.5 text-terracota" aria-hidden />
          {cafes.length} {cafes.length === 1 ? "café" : "cafés"}
        </span>
      </div>

      <h1 className="mt-5 font-serif text-3xl font-semibold tracking-tight md:text-5xl">
        {zona.nombre}
      </h1>

      {zona.proximamente || cafes.length === 0 ? (
        <div className="mt-8 max-w-md rounded-[2rem] border-2 border-dashed border-linea bg-lienzo/60 px-8 py-14 text-center">
          <p className="font-serif text-2xl font-semibold">Vamos para allá</p>
          <p className="mt-2 leading-relaxed text-espresso-2">
            Todavía estamos escogiendo los cafés que valen la pena por este
            rumbo. Muy pronto.
          </p>
        </div>
      ) : (
        <>
          <p className="mt-2 max-w-md text-espresso-2">
            Lo que vale la pena por este rumbo, escogido uno por uno.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
            {cafes.map((cafe) => (
              <CafeCard key={cafe.slug} cafe={cafe} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
