import type { Metadata } from "next";
import RetosClient from "@/components/cafeto/RetosClient";

export const metadata: Metadata = {
  title: "Retos",
  description:
    "Retos de café en Monterrey: excusas elegantes para salir de tu café de siempre y ganarte una que otra insignia.",
};

export default function PaginaRetos() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pt-14">
      <header className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracota-2">
          Retos
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Tu ciudad, taza por taza
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-espresso-2">
          Nada de puntos ni tableros: retos cortos para conocer más cafés, a tu
          ritmo. Las insignias son entre tú y tu paladar.
        </p>
      </header>

      <div className="mt-10">
        <RetosClient />
      </div>
    </main>
  );
}
