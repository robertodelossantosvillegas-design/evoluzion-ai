"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Footprints, MapPin } from "lucide-react";
import { CAFES, COORDS_MAPA, getCafe, PRECIO_SIMBOLO, RUTAS } from "@/lib/cafeto/data";
import CafePhoto from "./CafePhoto";

function Chip({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
        activo ? "bg-espresso text-crema" : "bg-crema-2 text-espresso-2 hover:bg-linea"
      }`}
    >
      {children}
    </button>
  );
}

export default function MapaCafeto() {
  const [pin, setPin] = useState<string | null>(null);
  const [rutaSlug, setRutaSlug] = useState<string | null>(null);

  const ruta = rutaSlug ? RUTAS.find((r) => r.slug === rutaSlug) : null;
  const paradas = ruta ? ruta.paradas.map((p) => p.cafe) : null;
  const seleccionado = pin ? getCafe(pin) : null;

  return (
    <div>
      <div className="sin-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-3 md:mx-0 md:flex-wrap md:px-0">
        <Chip activo={!rutaSlug} onClick={() => { setRutaSlug(null); setPin(null); }}>
          Todos los cafés
        </Chip>
        {RUTAS.map((r) => (
          <Chip
            key={r.slug}
            activo={rutaSlug === r.slug}
            onClick={() => { setRutaSlug(r.slug); setPin(null); }}
          >
            {r.titulo}
          </Chip>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-[1.7rem] border border-linea bg-[#f2ead9] shadow-taza-lg">
        <svg
          viewBox="0 0 400 460"
          role="img"
          aria-label={`Mapa de Monterrey con los ${CAFES.length} cafés de Cafeto`}
          className="block h-auto w-full"
        >
          <rect width="400" height="460" fill="#f2ead9" />
          <path className="m-parque" d="M226 128 l50 -6 12 34 -44 14 z" />
          <path className="m-parque" d="M60 300 q30 -18 58 -4 l-8 34 q-28 10 -52 -6 z" />
          <path className="m-cerro" d="M318 300 l30 -44 16 22 14 -18 18 44 q-40 14 -78 -4 z" />
          <text className="m-etiqueta" x="352" y="322" textAnchor="middle" fontSize="8">
            Cerro de la Silla
          </text>
          <path className="m-calle" d="M40 120 L360 96" />
          <path className="m-calle" d="M30 180 L370 168" />
          <path className="m-avenida" d="M20 250 Q140 238 240 244 T 390 236" />
          <path className="m-calle" d="M60 320 L340 312" />
          <path className="m-calle" d="M50 390 L350 384" />
          <path className="m-calle" d="M96 60 L110 420" />
          <path className="m-avenida" d="M200 40 Q206 220 196 430" />
          <path className="m-calle" d="M290 50 L300 420" />
          <path className="m-rio" d="M14 282 Q110 262 210 272 T 396 260" />
          <text className="m-rio-txt" x="60" y="278">río Santa Catarina</text>
          <text className="m-etiqueta" x="96" y="76" textAnchor="middle">Cumbres</text>
          <text className="m-etiqueta" x="70" y="236" textAnchor="middle">San Jerónimo</text>
          <text className="m-etiqueta" x="240" y="156" textAnchor="middle">Centro</text>
          <text className="m-etiqueta" x="296" y="212" textAnchor="middle">B. Antiguo</text>
          <text className="m-etiqueta" x="128" y="300" textAnchor="middle">San Pedro</text>
          <text className="m-etiqueta" x="256" y="366" textAnchor="middle">Tec</text>
          <text className="m-etiqueta" x="316" y="402" textAnchor="middle">Contry</text>

          {paradas && (
            <path
              className="m-trazo"
              d={paradas
                .map((slug, i) => {
                  const [x, y] = COORDS_MAPA[slug];
                  return `${i === 0 ? "M" : "L"}${x} ${y}`;
                })
                .join(" ")}
            />
          )}

          {CAFES.map((cafe) => {
            const [x, y] = COORDS_MAPA[cafe.slug];
            const idx = paradas ? paradas.indexOf(cafe.slug) : -1;
            if (paradas && idx === -1) {
              return <circle key={cafe.slug} cx={x} cy={y} r="4" fill="#cbbfa6" opacity="0.7" />;
            }
            const activo = pin === cafe.slug;
            return (
              <g
                key={cafe.slug}
                className={`pin-mapa ${activo ? "activo" : ""}`}
                role="button"
                tabIndex={0}
                aria-label={cafe.nombre}
                onClick={() => setPin(activo ? null : cafe.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setPin(activo ? null : cafe.slug);
                  }
                }}
              >
                <path
                  className="gota"
                  d={`M${x} ${y} c -7 -8 -11 -12.5 -11 -18 a 11 11 0 1 1 22 0 c 0 5.5 -4 10 -11 18 z`}
                />
                {idx >= 0 ? (
                  <text
                    x={x}
                    y={y - 14.5}
                    textAnchor="middle"
                    fill="#fffcf5"
                    fontFamily="var(--font-fraunces), Georgia, serif"
                    fontWeight="700"
                    fontSize="11"
                  >
                    {idx + 1}
                  </text>
                ) : (
                  <g transform={`translate(${x - 6} ${y - 24}) scale(0.5)`}>
                    <path
                      d="M2 6h12v5.5A4.5 4.5 0 0 1 9.5 16H6.5A4.5 4.5 0 0 1 2 11.5V6z"
                      fill="none"
                      stroke="#fffcf5"
                      strokeWidth="2.4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 7h1.2a2.3 2.3 0 0 1 0 4.6H14"
                      fill="none"
                      stroke="#fffcf5"
                      strokeWidth="2.4"
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {seleccionado && (
          <div className="absolute inset-x-2.5 bottom-2.5 z-10 flex items-center gap-3 rounded-[1.3rem] border border-linea bg-lienzo/95 p-2.5 shadow-taza-lg backdrop-blur-md">
            <CafePhoto
              id={seleccionado.fotos.hero}
              alt=""
              ancho={200}
              className="h-14 w-14 shrink-0 rounded-xl"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate font-serif text-base font-semibold">
                {seleccionado.nombre}
              </p>
              <p className="truncate text-xs font-semibold text-humo">
                {seleccionado.zona} · {PRECIO_SIMBOLO[seleccionado.precio]}
              </p>
            </div>
            <Link
              href={`/cafeto/cafes/${seleccionado.slug}/`}
              className="shrink-0 cursor-pointer rounded-full bg-terracota px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracota-2"
            >
              Ver
            </Link>
          </div>
        )}
      </div>

      {ruta ? (
        <div className="mt-4 flex items-center justify-between gap-4 rounded-3xl border border-linea bg-lienzo px-5 py-4 shadow-taza">
          <div className="min-w-0">
            <p className="font-serif text-lg font-semibold">{ruta.titulo}</p>
            <p className="mt-0.5 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold text-humo">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden /> {ruta.zona}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden /> {ruta.duracion}
              </span>
              <span className="inline-flex items-center gap-1">
                <Footprints className="h-3.5 w-3.5" aria-hidden /> {ruta.paradas.length} paradas
              </span>
            </p>
          </div>
          <Link
            href={`/cafeto/rutas/${ruta.slug}/`}
            className="shrink-0 cursor-pointer rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-crema transition-colors hover:bg-espresso/90"
          >
            Abrir ruta
          </Link>
        </div>
      ) : (
        <p className="mt-3 px-2 text-center text-xs leading-relaxed text-humo">
          Toca un pin para ver el café, o elige una ruta arriba para dibujar el
          recorrido en el mapa.
        </p>
      )}
    </div>
  );
}
