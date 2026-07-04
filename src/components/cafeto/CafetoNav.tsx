"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  Bookmark,
  Compass,
  Dices,
  Map,
  Store,
  type LucideIcon,
} from "lucide-react";
import { useScrolled } from "@/lib/hooks";

interface Enlace {
  href: string;
  etiqueta: string;
  icono: LucideIcon;
  exacto?: boolean;
}

const ENLACES: Enlace[] = [
  { href: "/cafeto/", etiqueta: "Descubre", icono: Compass, exacto: true },
  { href: "/cafeto/ruleta/", etiqueta: "Ruleta", icono: Dices },
  { href: "/cafeto/rutas/", etiqueta: "Rutas", icono: Map },
  { href: "/cafeto/retos/", etiqueta: "Retos", icono: Award },
  { href: "/cafeto/favoritos/", etiqueta: "Guardados", icono: Bookmark },
];

function esActivo(pathname: string, href: string, exacto?: boolean) {
  const limpio = pathname.replace(/\/+$/, "") || "/";
  const objetivo = href.replace(/\/+$/, "");
  return exacto ? limpio === objetivo : limpio.startsWith(objetivo);
}

export function CafetoNav() {
  const pathname = usePathname();
  const conFondo = useScrolled(16);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
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

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
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

        <Link
          href="/cafeto/negocios/"
          aria-label="Para cafeterías"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-espresso-2 transition-colors duration-200 hover:bg-crema-2 md:hidden"
        >
          <Store className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </header>
  );
}

export function BarraInferior() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación inferior"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-linea bg-lienzo/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto grid h-16 max-w-md grid-cols-5">
        {ENLACES.map(({ href, etiqueta, icono: Icono, exacto }) => {
          const activo = esActivo(pathname, href, exacto);
          return (
            <Link
              key={href}
              href={href}
              aria-current={activo ? "page" : undefined}
              className={`flex cursor-pointer flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors duration-200 ${
                activo ? "text-terracota-2" : "text-humo hover:text-espresso"
              }`}
            >
              <Icono
                className="h-5 w-5"
                strokeWidth={activo ? 2.2 : 1.8}
                aria-hidden
              />
              {etiqueta}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
