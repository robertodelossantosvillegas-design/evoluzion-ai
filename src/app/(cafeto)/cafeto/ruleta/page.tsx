import type { Metadata } from "next";
import RuletaClient from "@/components/cafeto/RuletaClient";

export const metadata: Metadata = {
  title: "Ruleta de café",
  description:
    "¿No sabes a dónde ir por café en Monterrey? Gira la ruleta: tú pones el plan y la zona, el azar pone el café.",
};

export default function PaginaRuleta() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pt-14">
      <header className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracota-2">
          Ruleta de café
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          ¿No sabes a dónde? Perfecto.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-espresso-2">
          Dinos qué plan traes y por dónde andas. La ruleta hace el resto — y
          tiene buen gusto.
        </p>
      </header>

      <div className="mt-10">
        <RuletaClient />
      </div>
    </main>
  );
}
