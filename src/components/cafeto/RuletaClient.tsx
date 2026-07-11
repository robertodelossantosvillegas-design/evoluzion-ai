"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { MapPin, RefreshCw, X } from "lucide-react";
import type { Cafe, Mood, Sector } from "@/lib/cafeto/types";
import { CAFES, ETIQUETA_MOOD, PRECIO_SIMBOLO, SECTORES } from "@/lib/cafeto/data";
import CafePhoto from "./CafePhoto";
import FavoritoBtn from "./FavoritoBtn";

const MOODS = Object.entries(ETIQUETA_MOOD) as [Mood, string][];
const COLORES_RUEDA = ["#b65327", "#8a6117", "#33523b", "#6f4527", "#c9a15a", "#9c4318", "#4d6b52", "#a5744a"];

function candidatosDe(mood: Mood | null, sector: Sector | null): Cafe[] {
  return CAFES.filter(
    (c) =>
      (mood === null || c.moods.includes(mood)) &&
      (sector === null || c.sector === sector),
  );
}

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
      className={`shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
        activo
          ? "border-oro bg-oro text-[#241811]"
          : "border-linea bg-lienzo text-espresso-2 hover:border-oro/50"
      }`}
    >
      {children}
    </button>
  );
}

export default function RuletaClient() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [sector, setSector] = useState<Sector | null>(null);
  const [girando, setGirando] = useState(false);
  const [ganador, setGanador] = useState<Cafe | null>(null);
  const anguloRef = useRef(0);
  const ruedaRef = useRef<SVGGElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const menosMovimiento = useReducedMotion();

  /* Toda la interfaz se "tuesta" mientras vives la ruleta. */
  useEffect(() => {
    document.body.dataset.escena = "oscura";
    return () => {
      delete document.body.dataset.escena;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const candidatos = candidatosDe(mood, sector);
  const n = candidatos.length;
  const seg = n > 0 ? 360 / n : 360;

  function girar() {
    if (!n || girando) return;
    const w = Math.floor(Math.random() * n);
    const elegido = candidatos[w];
    if (menosMovimiento || n === 1) {
      setGanador(elegido);
      return;
    }
    setGirando(true);
    const g = ruedaRef.current;
    if (!g) return;
    const centro = w * seg + seg / 2;
    const vueltas = 5 + Math.floor(Math.random() * 2);
    const desvio = (Math.random() - 0.5) * seg * 0.5;
    const destino =
      anguloRef.current +
      360 * vueltas +
      ((360 - centro - (anguloRef.current % 360) + 720) % 360) +
      desvio;
    g.classList.add("girando");
    requestAnimationFrame(() => {
      g.style.transform = `rotate(${destino}deg)`;
    });
    const terminar = () => {
      g.removeEventListener("transitionend", terminar);
      anguloRef.current = destino % 360;
      setGirando(false);
      setGanador(elegido);
    };
    g.addEventListener("transitionend", terminar);
    timeoutRef.current = window.setTimeout(terminar, 3900);
  }

  function segmentos() {
    const cx = 150, cy = 150, r = 144;
    if (n === 1) {
      return (
        <>
          <circle cx={cx} cy={cy} r={r} fill={COLORES_RUEDA[0]} stroke="#120b06" strokeWidth="3" />
          <text x={cx} y={86} textAnchor="middle" className="fill-[#fffaee] font-serif" fontSize="21" fontWeight="650">
            {candidatos[0].nombre.slice(0, 1)}
          </text>
        </>
      );
    }
    return candidatos.map((cafe, i) => {
      const a0 = ((-90 + i * seg) * Math.PI) / 180;
      const a1 = ((-90 + (i + 1) * seg) * Math.PI) / 180;
      const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const am = ((-90 + i * seg + seg / 2) * Math.PI) / 180;
      const tx = cx + r * 0.68 * Math.cos(am), ty = cy + r * 0.68 * Math.sin(am);
      const rot = -90 + i * seg + seg / 2 + 90;
      return (
        <g key={cafe.slug}>
          <path
            d={`M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${seg > 180 ? 1 : 0} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z`}
            fill={COLORES_RUEDA[i % COLORES_RUEDA.length]}
            stroke="#120b06"
            strokeWidth="2.5"
          />
          <text
            x={tx.toFixed(1)}
            y={ty.toFixed(1)}
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${rot.toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)})`}
            fontSize="21"
            fontWeight="650"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fill: "rgba(255,250,238,0.95)" }}
          >
            {cafe.nombre.slice(0, 1)}
          </text>
        </g>
      );
    });
  }

  return (
    <div>
      <fieldset>
        <legend className="text-sm font-medium text-humo">¿Qué plan traes?</legend>
        <div className="sin-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
          <Chip activo={mood === null} onClick={() => { setMood(null); setGanador(null); }}>
            Sorpréndeme
          </Chip>
          {MOODS.map(([id, tx]) => (
            <Chip key={id} activo={mood === id} onClick={() => { setMood(id); setGanador(null); }}>
              {tx}
            </Chip>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-humo">¿Por dónde andas?</legend>
        <div className="sin-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
          <Chip activo={sector === null} onClick={() => { setSector(null); setGanador(null); }}>
            Donde sea
          </Chip>
          {SECTORES.map((s) => (
            <Chip key={s.id} activo={sector === s.id} onClick={() => { setSector(s.id); setGanador(null); }}>
              {s.nombre}
            </Chip>
          ))}
        </div>
      </fieldset>

      {n === 0 ? (
        <p className="mx-auto mt-10 max-w-md rounded-3xl border-2 border-dashed border-linea p-6 text-center text-espresso-2">
          Ningún café coincide con esa combinación por ahora. Prueba con otra zona
          u otro plan.
        </p>
      ) : (
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="relative w-[min(78vw,300px)]">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-[14%] rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(201,161,90,0.18), transparent 72%)" }}
            />
            <span
              aria-hidden
              className="absolute -top-2 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-x-[0.72rem] border-t-[1.15rem] border-x-transparent border-t-oro drop-shadow-[0_3px_5px_rgba(0,0,0,0.45)]"
            />
            <svg
              viewBox="0 0 300 300"
              role="img"
              aria-label={`Ruleta con ${n} cafés`}
              className="relative block h-auto w-full drop-shadow-[0_18px_34px_rgba(0,0,0,0.45)]"
            >
              <circle cx="150" cy="150" r="149" fill="#120b06" />
              <g ref={ruedaRef} className="g-rueda">
                {segmentos()}
              </g>
              <circle cx="150" cy="150" r="146" fill="none" stroke="rgba(201,161,90,0.5)" strokeWidth="2" />
            </svg>
            <button
              type="button"
              onClick={girar}
              disabled={girando}
              className="absolute left-1/2 top-1/2 aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full font-serif text-sm font-bold tracking-[0.14em] text-oro transition-transform active:scale-95 disabled:cursor-default disabled:opacity-85"
              style={{
                background: "radial-gradient(circle at 32% 28%, #3a2818, #1c1108 78%)",
                boxShadow: "0 0 0 5px rgba(201,161,90,0.55), 0 8px 22px rgba(0,0,0,0.5)",
              }}
            >
              {girando ? "…" : "GIRAR"}
            </button>
          </div>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-humo">
            {n} {n === 1 ? "café" : "cafés"} en la rueda. Toca <strong>girar</strong> y
            deja que el azar tenga buen gusto.
          </p>
        </div>
      )}

      {ganador && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
          <button
            type="button"
            aria-label="Cerrar resultado"
            onClick={() => setGanador(null)}
            className="absolute inset-0 bg-black/55 backdrop-blur-[3px]"
          />
          <div
            role="dialog"
            aria-label="Resultado de la ruleta"
            className="relative z-10 w-full max-w-md overflow-hidden rounded-t-[2rem] bg-lienzo shadow-taza-lg md:rounded-[2rem]"
          >
            <div className="relative">
              <CafePhoto
                id={ganador.fotos.hero}
                alt={`Foto de ${ganador.nombre}`}
                ancho={900}
                className="aspect-[16/8.5]"
              />
              <FavoritoBtn
                slug={ganador.slug}
                nombre={ganador.nombre}
                className="absolute right-3 top-3 z-10"
              />
              <button
                type="button"
                onClick={() => setGanador(null)}
                aria-label="Cerrar"
                className="absolute left-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-espresso/40 text-white backdrop-blur-sm"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="p-5 text-center">
              <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-oro">
                Hoy toca
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold tracking-tight">
                {ganador.nombre}
              </h2>
              <p className="mt-0.5 flex items-center justify-center gap-1.5 text-sm text-humo">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {ganador.zona} · {PRECIO_SIMBOLO[ganador.precio]}
              </p>
              <p className="mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-espresso-2">
                {ganador.frase}
              </p>
              <div className="mt-5 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setGanador(null);
                    window.setTimeout(girar, menosMovimiento ? 0 : 320);
                  }}
                  className="flex-1 cursor-pointer rounded-full bg-crema-2 px-4 py-3.5 text-sm font-bold text-espresso transition-colors hover:bg-linea"
                >
                  <RefreshCw className="mr-1.5 inline h-4 w-4" aria-hidden />
                  Otra vuelta
                </button>
                <Link
                  href={`/cafeto/cafes/${ganador.slug}/`}
                  className="flex-1 cursor-pointer rounded-full bg-terracota px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-terracota-2"
                >
                  Ver perfil
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
