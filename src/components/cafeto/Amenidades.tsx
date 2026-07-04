import {
  CakeSlice,
  Car,
  Croissant,
  Dog,
  FlaskConical,
  Moon,
  Plug,
  Sunrise,
  Trees,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { Amenidad } from "@/lib/cafeto/types";
import { ETIQUETA_AMENIDAD } from "@/lib/cafeto/data";

const ICONO_AMENIDAD: Record<Amenidad, LucideIcon> = {
  wifi: Wifi,
  enchufes: Plug,
  petFriendly: Dog,
  terraza: Trees,
  brunch: Croissant,
  postres: CakeSlice,
  metodos: FlaskConical,
  estacionamiento: Car,
  abreTemprano: Sunrise,
  cierraTarde: Moon,
};

export default function Amenidades({ lista }: { lista: Amenidad[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {lista.map((amenidad) => {
        const Icono = ICONO_AMENIDAD[amenidad];
        return (
          <li
            key={amenidad}
            className="flex items-center gap-2 rounded-full bg-bosque-tinte px-3.5 py-2 text-sm font-medium text-bosque"
          >
            <Icono className="h-4 w-4" strokeWidth={1.8} aria-hidden />
            {ETIQUETA_AMENIDAD[amenidad]}
          </li>
        );
      })}
    </ul>
  );
}
