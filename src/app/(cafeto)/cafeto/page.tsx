import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Dices, Map } from "lucide-react";
import { COLECCIONES, getColeccion } from "@/lib/cafeto/data";
import HeroCafeto from "@/components/cafeto/HeroCafeto";
import ColeccionRow from "@/components/cafeto/ColeccionRow";
import ExploraGrid from "@/components/cafeto/ExploraGrid";

export const metadata: Metadata = {
  title: "Cafeto — Descubre el mejor café de Monterrey",
};

const EXPERIENCIAS = [
  {
    href: "/cafeto/ruleta/",
    icono: Dices,
    titulo: "Ruleta de café",
    texto: "¿No sabes a dónde? Gira y déjate llevar.",
    tinte: "bg-terracota-tinte text-terracota-2",
  },
  {
    href: "/cafeto/rutas/",
    icono: Map,
    titulo: "Rutas de café",
    texto: "Itinerarios curados de dos o tres paradas.",
    tinte: "bg-bosque-tinte text-bosque",
  },
  {
    href: "/cafeto/retos/",
    icono: Award,
    titulo: "Retos",
    texto: "Excusas elegantes para conocer más cafés.",
    tinte: "bg-oro-tinte text-oro",
  },
] as const;

function Experiencias() {
  return (
    <section aria-label="Formas de descubrir" className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {EXPERIENCIAS.map(({ href, icono: Icono, titulo, texto, tinte }) => (
          <Link
            key={href}
            href={href}
            className="group flex cursor-pointer items-center gap-4 rounded-3xl border border-linea bg-lienzo p-5 shadow-taza transition-shadow duration-200 hover:shadow-taza-lg"
          >
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tinte}`}
            >
              <Icono className="h-6 w-6" strokeWidth={1.8} aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 font-serif text-lg font-semibold">
                {titulo}
                <ArrowRight
                  className="h-4 w-4 text-terracota opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden
                />
              </span>
              <span className="mt-0.5 block text-sm text-espresso-2">
                {texto}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

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
              Preséntala como se merece: perfil editorial, fotografía al
              frente y métricas claras de cuánta gente te descubre.
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
  const nuevos = getColeccion("nuevos-este-mes");
  const restantes = COLECCIONES.filter((c) => c.slug !== "nuevos-este-mes");

  return (
    <main className="flex flex-col gap-14 pb-20 md:gap-20">
      <HeroCafeto />
      {nuevos && <ColeccionRow coleccion={nuevos} />}
      <Experiencias />
      {restantes.map((coleccion) => (
        <ColeccionRow key={coleccion.slug} coleccion={coleccion} />
      ))}
      <ExploraGrid />
      <BandaNegocios />
    </main>
  );
}
