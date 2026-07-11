"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bookmark,
  Compass,
  Map,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useScrolled } from "@/lib/hooks";
import { RuedaIcono } from "./iconos";

interface Enlace {
  href: string;
  etiqueta: string;
  icono: LucideIcon | typeof RuedaIcono;
  exacto?: boolean;
}

const ENLACES: Enlace[] = [
  { href: "/cafeto/", etiqueta: "Descubre", icono: Compass, exacto: true },
  { href: "/cafeto/mapa/", etiqueta: "Mapa", icono: Map },
  { href: "/cafeto/ruleta/", etiqueta: "Ruleta", icono: RuedaIcono },
  { href: "/cafeto/comunidad/", etiqueta: "Comunidad", icono: Users },
  { href: "/cafeto/favoritos/", etiqueta: "Guardados", icono: Bookmark },
];

function esActivo(pathname: string, href: string, exacto?: boolean) {
  const limpio = pathname.replace(/\/+$/, "") || "/";
  const objetivo = href.replace(/\/+$/, "");
  if (exacto) return limpio === objetivo || limpio.startsWith("/cafeto/rumbos");
  if (objetivo.endsWith("/mapa")) return limpio.startsWith(objetivo) || limpio.startsWith("/cafeto/rutas");
  return limpio.startsWith(objetivo);
}

export function CafetoNav() {
  const pathname = usePathname();
  const conFondo = useScrolled(16);

  return (
    <header
      className={`sticky top-0 z-40 hidden transition-colors duration-300 md:block ${
        conFondo
          ? "border-b border-linea bg-crema/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/cafeto/"
          className="flex items-baseline gap-1.5 font-serif text-2xl font-semibold tracking-tight text-espresso"
          aria-label="Cafeto, inicio"
        >
          Cafeto
          <span
            aria-hidden
            className="mb-0.5 inline-block h-2 w-2 rounded-full bg-terracota"
          />
        </Link>

        <nav aria-label="Principal" className="flex items-center gap-1">
          {ENLACES.map(({ href, etiqueta, exacto }) => {
            const activo = esActivo(pathname, href, exacto);
            return (
              <Link
                key={href}
                href={href}
                aria-current={activo ? "page" : undefined}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activo
                    ? "bg-terracota-tinte text-terracota-2"
                    : "text-espresso-2 hover:bg-crema-2 hover:text-espresso"
                }`}
              >
                {etiqueta}
              </Link>
            );
          })}
          <span aria-hidden className="mx-2 h-5 w-px bg-linea" />
          <Link
            href="/cafeto/negocios/"
            className="cursor-pointer rounded-full border border-espresso/20 px-4 py-2 text-sm font-medium text-espresso transition-colors duration-200 hover:border-terracota hover:text-terracota-2"
          >
            Para cafeterías
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function BarraInferior() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación inferior" className="dock-cafeto md:hidden">
      {ENLACES.map(({ href, etiqueta, icono: Icono, exacto }) => {
        const activo = esActivo(pathname, href, exacto);
        return (
          <Link
            key={href}
            href={href}
            aria-current={activo ? "page" : undefined}
            className={`flex w-[3.7rem] cursor-pointer flex-col items-center justify-center gap-0.5 rounded-full py-2 text-[0.58rem] font-bold transition-all duration-200 active:scale-90 ${
              activo
                ? "bg-terracota-tinte text-terracota-2"
                : "text-humo hover:text-espresso"
            }`}
          >
            <Icono
              className="h-[1.3rem] w-[1.3rem]"
              strokeWidth={activo ? 2.1 : 1.8}
              aria-hidden
            />
            {etiqueta}
          </Link>
        );
      })}
    </nav>
  );
}

export function TopBar({ derecha }: { derecha?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 pt-3 md:hidden">
      <Link
        href="/cafeto/"
        className="flex items-baseline gap-1.5 font-serif text-xl font-semibold tracking-tight"
        aria-label="Cafeto, inicio"
      >
        Cafeto
        <span aria-hidden className="mb-0.5 inline-block h-1.5 w-1.5 rounded-full bg-terracota" />
      </Link>
      {derecha ?? (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-linea bg-lienzo px-3 py-1.5 text-xs font-bold text-espresso-2">
          <MapPin className="h-3.5 w-3.5 text-terracota" aria-hidden />
          Monterrey
        </span>
      )}
    </div>
  );
}
