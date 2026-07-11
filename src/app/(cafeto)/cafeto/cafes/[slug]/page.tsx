import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Coffee, MapPin, Navigation } from "lucide-react";
import FavoritoBtn from "@/components/cafeto/FavoritoBtn";
import {
  CAFES,
  cafesRelacionados,
  getCafe,
  PRECIO_SIMBOLO,
  urlComoLlegar,
} from "@/lib/cafeto/data";
import CafePhoto from "@/components/cafeto/CafePhoto";
import CafeCard from "@/components/cafeto/CafeCard";
import Amenidades from "@/components/cafeto/Amenidades";
import PerfilAcciones from "@/components/cafeto/PerfilAcciones";

export function generateStaticParams() {
  return CAFES.map((cafe) => ({ slug: cafe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cafe = getCafe(slug);
  if (!cafe) return {};
  return {
    title: `${cafe.nombre} — ${cafe.zona}`,
    description: cafe.frase,
    openGraph: {
      title: `${cafe.nombre} · Cafeto`,
      description: cafe.frase,
    },
  };
}

export default async function PerfilCafe({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cafe = getCafe(slug);
  if (!cafe) notFound();

  const relacionados = cafesRelacionados(cafe);

  return (
    <main className="pb-20">
      <div className="mx-auto max-w-6xl px-5 pt-4 md:px-8">
        <div className="relative">
          <CafePhoto
            id={cafe.fotos.hero}
            alt={`Foto principal de ${cafe.nombre}`}
            ancho={1600}
            prioridad
            sizes="(min-width: 1152px) 1088px, 92vw"
            className="aspect-[4/3] rounded-[2rem] shadow-taza-lg sm:aspect-[16/9]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-b from-[#140b04]/35 via-transparent to-[#140b04]/25"
          />
          <Link
            href="/cafeto/"
            aria-label="Volver a Descubre"
            className="absolute left-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-espresso/40 text-white backdrop-blur-md transition-transform duration-150 active:scale-90"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </Link>
          <FavoritoBtn
            slug={cafe.slug}
            nombre={cafe.nombre}
            className="absolute right-4 top-4 z-10"
          />
          {cafe.nuevo && (
            <span className="absolute left-[4.4rem] top-[1.35rem] rounded-full bg-oro-tinte/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-oro">
              Nuevo
            </span>
          )}
        </div>

        <div className="mt-7">
          <p className="flex items-center gap-2 text-sm font-medium text-bosque">
            <MapPin className="h-4 w-4" aria-hidden />
            {cafe.zona}, {cafe.ciudad}
            <span aria-hidden className="text-linea">
              ·
            </span>
            <span aria-label={`Precio: ${PRECIO_SIMBOLO[cafe.precio]}`}>
              {PRECIO_SIMBOLO[cafe.precio]}
            </span>
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            {cafe.nombre}
          </h1>
          <div className="mt-5 md:max-w-xl">
            <PerfilAcciones
              slug={cafe.slug}
              nombre={cafe.nombre}
              frase={cafe.frase}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.55fr_1fr] md:gap-14">
          <div>
            <p className="font-serif text-xl font-medium leading-relaxed text-espresso md:text-2xl">
              {cafe.frase}
            </p>
            <p className="mt-5 max-w-prose leading-relaxed text-espresso-2">
              {cafe.descripcion}
            </p>

            <h2 className="mt-10 font-serif text-xl font-semibold">
              Conocido por
            </h2>
            <ul className="mt-4 space-y-3">
              {cafe.conocidoPor.map((detalle) => (
                <li key={detalle} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracota-tinte text-terracota-2">
                    <Coffee className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="leading-relaxed text-espresso-2">
                    {detalle}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {cafe.fotos.galeria.map((foto, i) => (
                <CafePhoto
                  key={foto}
                  id={foto}
                  alt={`Galería de ${cafe.nombre}, foto ${i + 1}`}
                  ancho={800}
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className={`rounded-3xl shadow-taza ${
                    i === 0 ? "aspect-[4/5]" : "mt-8 aspect-[4/5]"
                  }`}
                />
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[2rem] border border-linea bg-lienzo p-6 shadow-taza md:sticky md:top-24 md:p-7">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Clock className="h-4.5 w-4.5 text-terracota" aria-hidden />
              Horario
            </h2>
            <dl className="mt-3 space-y-2 text-sm">
              {cafe.horario.map((h) => (
                <div key={h.dias} className="flex justify-between gap-4">
                  <dt className="text-humo">{h.dias}</dt>
                  <dd className="font-medium text-espresso">{h.horas}</dd>
                </div>
              ))}
            </dl>

            <div className="my-6 h-px bg-linea" />

            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <MapPin className="h-4.5 w-4.5 text-terracota" aria-hidden />
              Dónde
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-espresso-2">
              {cafe.direccion}
              <br />
              {cafe.ciudad}, Nuevo León
            </p>
            <a
              href={urlComoLlegar(cafe)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-terracota-2 transition-colors hover:text-terracota"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Cómo llegar
            </a>

            <div className="my-6 h-px bg-linea" />

            <h2 className="font-serif text-lg font-semibold">Lo que hay</h2>
            <div className="mt-3">
              <Amenidades lista={cafe.amenidades} />
            </div>
          </aside>
        </div>

        <section aria-labelledby="relacionados" className="mt-16 md:mt-20">
          <h2
            id="relacionados"
            className="font-serif text-2xl font-semibold tracking-tight md:text-3xl"
          >
            Si te late {cafe.nombre}, checa estos
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
            {relacionados.map((otro) => (
              <CafeCard key={otro.slug} cafe={otro} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
