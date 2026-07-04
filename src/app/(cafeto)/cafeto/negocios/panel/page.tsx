import type { Metadata } from "next";
import PanelClient from "@/components/cafeto/PanelClient";

export const metadata: Metadata = {
  title: "Panel de tu cafetería (demo)",
  description:
    "Así se ve el panel de una cafetería suscrita a Cafeto: métricas de descubrimiento, edición de perfil y suscripción, todo en un lugar.",
};

export default function PaginaPanel() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-8 md:px-8 md:pt-10">
      <PanelClient />
    </main>
  );
}
