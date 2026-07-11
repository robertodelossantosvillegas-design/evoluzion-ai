import type { Metadata } from "next";
import { TopBar } from "@/components/cafeto/CafetoNav";
import RuletaClient from "@/components/cafeto/RuletaClient";

export const metadata: Metadata = {
  title: "Ruleta de café",
  description:
    "¿No sabes a dónde ir por café en Monterrey? Gira la ruleta: tú pones el plan y la zona, el azar pone el café.",
};

export default function PaginaRuleta() {
  return (
    <main className="pb-20">
      <TopBar />
      <div className="mx-auto max-w-3xl px-5 pt-4 md:px-8 md:pt-10">
        <header>
          <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            La ruleta decide
          </h1>
          <p className="mt-1 text-espresso-2">
            Tu plan, tu zona — y una vuelta con buen gusto.
          </p>
        </header>
        <div className="mt-6">
          <RuletaClient />
        </div>
      </div>
    </main>
  );
}
