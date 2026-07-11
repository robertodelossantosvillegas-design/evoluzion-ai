import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { getCafe, getColeccion } from "@/lib/cafeto/data";
import { TopBar } from "@/components/cafeto/CafetoNav";
import ZonasRow from "@/components/cafeto/ZonasRow";
import CafeCard from "@/components/cafeto/CafeCard";
import ColeccionRow from "@/components/cafeto/ColeccionRow";
import ExploraGrid from "@/components/cafeto/ExploraGrid";

export const metadata: Metadata = {
  title: "Cafeto — Descubre el mejor café de Monterrey",
};

function BandaNegocios() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="rounded-[2rem] bg-espresso px-6 py-10 text-crema md:px-12 md:py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-lg">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-crema md:text-3xl">
              ¿Tienes una cafetería en Monterrey?
            </h2>
            <p className="mt-3 leading-relaxed text-crema/75">
              Preséntala como se merece: perfil editorial, tu pin en el mapa,
              apariciones en la ruleta y métricas claras de cuánta gente te
              descubre.
            </p>
          </div>
          <Link
            href="/cafeto/negocios/"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-terracota px-6 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-terracota-2"
          >
            Conoce Cafeto para negocios
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PaginaDescubre() {
  const destacado = getCafe("obsidiana");
  const estreno = getColeccion("nuevos-este-mes");
  const infalibles = getColeccion("los-infalibles");

  return (
    <main className="flex flex-col gap-10 pb-20 md:gap-14">
      <div>
        <TopBar />
        <div className="mx-auto max-w-6xl px-5 pt-4 md:px-8 md:pt-10">
          <h1 className="font-serif text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            ¿A dónde vamos por café?
          </h1>
          <Link
            href="#explora"
            className="mt-4 flex w-full max-w-xl cursor-pointer items-center gap-3 rounded-full border border-linea bg-lienzo px-5 py-3.5 text-sm text-humo shadow-taza transition-transform active:scale-[0.99]"
          >
            <Search className="h-4 w-4 text-terracota" aria-hidden />
            ¿Qué se te antoja hoy?
          </Link>
        </div>
      </div>

      <ZonasRow />

      {destacado && (
        <section aria-label="La selección de la semana" className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="md:max-w-2xl">
            <CafeCard
              cafe={destacado}
              variante="destacada"
              prioridad
              eyebrow="El favorito de la semana"
            />
          </div>
        </section>
      )}

      {estreno && <ColeccionRow coleccion={estreno} />}
      {infalibles && <ColeccionRow coleccion={infalibles} />}

      <ExploraGrid />
      <BandaNegocios />
    </main>
  );
}
