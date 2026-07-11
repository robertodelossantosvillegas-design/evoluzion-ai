import type { Metadata } from "next";
import { TopBar } from "@/components/cafeto/CafetoNav";
import MapaCafeto from "@/components/cafeto/MapaCafeto";

export const metadata: Metadata = {
  title: "El mapa del café",
  description:
    "El mapa curado de Monterrey: solo los cafés que valen la pena, con las rutas de Cafeto dibujadas encima. Ni un pin de más.",
};

export default function PaginaMapa() {
  return (
    <main className="pb-20">
      <TopBar />
      <div className="mx-auto max-w-3xl px-5 pt-4 md:px-8 md:pt-10">
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          El mapa del café
        </h1>
        <p className="mb-5 mt-1 text-espresso-2">Solo lo curado. Ni un pin de más.</p>
        <MapaCafeto />
      </div>
    </main>
  );
}
