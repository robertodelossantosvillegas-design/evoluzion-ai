import type { Metadata } from "next";
import FavoritosClient from "@/components/cafeto/FavoritosClient";

export const metadata: Metadata = {
  title: "Guardados",
  description: "Tus cafés guardados en Cafeto: tu propio mapa de Monterrey.",
};

export default function PaginaFavoritos() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pt-14">
      <header className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracota-2">
          Guardados
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Los tuyos
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-espresso-2">
          Los cafés que quieres recordar, recomendar o repetir.
        </p>
      </header>

      <div className="mt-10">
        <FavoritosClient />
      </div>
    </main>
  );
}
