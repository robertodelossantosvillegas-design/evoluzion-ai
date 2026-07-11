import type { Metadata } from "next";
import { TopBar } from "@/components/cafeto/CafetoNav";
import ComunidadClient from "@/components/cafeto/ComunidadClient";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Lo que está pasando en el café de Monterrey: check-ins, sellos QR, retos e insignias. Momentos, no reseñas.",
};

export default function PaginaComunidad() {
  return (
    <main className="pb-20">
      <TopBar />
      <div className="mx-auto max-w-6xl px-5 pt-4 md:px-8 md:pt-10">
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Está pasando
        </h1>
        <p className="mb-5 mt-1 text-espresso-2">
          Momentos de la comunidad — y tu recorrido taza por taza.
        </p>
        <ComunidadClient />
      </div>
    </main>
  );
}
