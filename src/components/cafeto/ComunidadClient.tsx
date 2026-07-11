"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  Check,
  Coffee,
  Compass,
  FlaskConical,
  Landmark,
  Medal,
  X,
  type LucideIcon,
} from "lucide-react";
import type { PostComunidad, Reto } from "@/lib/cafeto/types";
import {
  CAFES,
  getCafe,
  POSTS_SEMILLA,
  RETOS,
  TONOS_CALIDOS,
} from "@/lib/cafeto/data";
import {
  useAntojos,
  useFavoritos,
  usePostsLocales,
  useSellos,
  useVisitados,
} from "@/lib/cafeto/store";
import CafePhoto from "./CafePhoto";

const ICONO_RETO: Record<string, LucideIcon> = {
  "cronista-del-casco": Landmark,
  "cinco-nuevos": Compass,
  coleccionista: Bookmark,
  "catador-de-metodos": FlaskConical,
  "lado-del-valle": Coffee,
};

function AnilloProgreso({
  progreso,
  meta,
  logrado,
  icono: Icono,
}: {
  progreso: number;
  meta: number;
  logrado: boolean;
  icono: LucideIcon;
}) {
  const r = 15;
  const cf = 2 * Math.PI * r;
  return (
    <div className="relative h-14 w-14 flex-none">
      <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="20" cy="20" r={r} fill="none" strokeWidth="4" className="stroke-crema-2" />
        <circle
          cx="20"
          cy="20"
          r={r}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={cf.toFixed(1)}
          strokeDashoffset={(cf * (1 - progreso / meta)).toFixed(1)}
          className={logrado ? "stroke-bosque" : "stroke-terracota"}
          style={{ transition: "stroke-dashoffset 0.5s" }}
        />
      </svg>
      <span
        className={`absolute inset-0 flex items-center justify-center ${logrado ? "text-bosque" : "text-espresso-2"}`}
      >
        <Icono className="h-5 w-5" strokeWidth={1.8} aria-hidden />
      </span>
    </div>
  );
}

function Post({ post }: { post: PostComunidad }) {
  const { meAntoja, alternarAntojo } = useAntojos();
  const cafe = post.cafe ? getCafe(post.cafe) : undefined;
  const activo = meAntoja(post.id);
  const cuenta = (post.antojosBase ?? 0) + (activo ? 1 : 0);

  return (
    <article
      className={`rounded-[1.5rem] border p-4 shadow-taza ${
        post.tipo === "insignia"
          ? "border-oro/30 bg-gradient-to-br from-oro-tinte/60 to-lienzo"
          : "border-linea bg-lienzo"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className="relative flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full font-serif text-sm font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]"
          style={{ background: TONOS_CALIDOS[post.tono] }}
          aria-hidden
        >
          {post.quien.slice(0, 1)}
        </span>
        <p className="min-w-0 flex-1 text-sm leading-snug">
          <b>{post.quien}</b>
          {post.tipo === "checkin" && cafe && (
            <>
              {" está en "}
              <Link
                href={`/cafeto/cafes/${cafe.slug}/`}
                className="font-bold text-terracota-2 hover:text-terracota"
              >
                {cafe.nombre}
              </Link>
            </>
          )}
          {post.tipo === "insignia" && (
            <>
              {" desbloqueó la insignia "}
              <b>{post.insignia}</b>
            </>
          )}
        </p>
        <span className="flex-none text-[0.68rem] font-semibold text-humo">
          {post.hace}
        </span>
      </div>

      {post.texto && (
        <p className="mt-2.5 text-sm leading-relaxed text-espresso-2">{post.texto}</p>
      )}
      {post.conFoto && cafe && (
        <CafePhoto
          id={cafe.fotos.galeria[0] ?? cafe.fotos.hero}
          alt={`Foto en ${cafe.nombre}`}
          ancho={800}
          className="mt-3 aspect-[16/8] rounded-2xl"
        />
      )}

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => alternarAntojo(post.id)}
          aria-pressed={activo}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition-colors duration-200 ${
            activo
              ? "border-terracota/35 bg-terracota-tinte text-terracota-2"
              : "border-linea text-espresso-2 hover:border-terracota/35 hover:text-terracota-2"
          }`}
        >
          <Coffee className="h-3.5 w-3.5" aria-hidden />
          Se me antoja · {cuenta}
        </button>
        {post.sello && (
          <span className="inline-flex items-center gap-1 rounded-full bg-bosque-tinte px-2.5 py-1.5 text-[0.64rem] font-extrabold text-bosque">
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
            Sello QR
          </span>
        )}
      </div>
    </article>
  );
}

export default function ComunidadClient() {
  const [segmento, setSegmento] = useState<"actividad" | "retos">("actividad");
  const [eligiendo, setEligiendo] = useState(false);
  const { posts, publicarCheckin } = usePostsLocales();
  const { visitados } = useVisitados();
  const { favoritos } = useFavoritos();
  const { sellos } = useSellos();

  const progresoDe = (reto: Reto): number => {
    switch (reto.tipo) {
      case "visitas":
        return Math.min(visitados.length, reto.meta);
      case "favoritos":
        return Math.min(favoritos.length, reto.meta);
      case "cafes":
        return (reto.cafes ?? []).filter((s) => visitados.includes(s)).length;
    }
  };
  const logrados = RETOS.filter((r) => progresoDe(r) >= r.meta).length;

  return (
    <div>
      <div
        className="mb-5 flex gap-1 rounded-full bg-crema-2 p-1 md:max-w-sm"
        role="tablist"
        aria-label="Secciones de comunidad"
      >
        {(
          [
            ["actividad", "Actividad"],
            ["retos", "Retos y sellos"],
          ] as const
        ).map(([id, etiqueta]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={segmento === id}
            onClick={() => setSegmento(id)}
            className={`flex-1 cursor-pointer rounded-full py-2.5 text-sm font-bold transition-all duration-200 ${
              segmento === id
                ? "bg-lienzo text-espresso shadow-taza"
                : "text-humo hover:text-espresso"
            }`}
          >
            {etiqueta}
          </button>
        ))}
      </div>

      {segmento === "actividad" ? (
        <div className="flex flex-col gap-3 md:max-w-xl">
          <button
            type="button"
            onClick={() => setEligiendo(true)}
            className="flex cursor-pointer items-center gap-3 rounded-full border border-linea bg-lienzo px-4 py-3 text-left text-sm text-humo shadow-taza transition-transform active:scale-[0.99]"
          >
            <span
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full font-serif text-sm font-semibold text-white"
              style={{ background: TONOS_CALIDOS[2] }}
              aria-hidden
            >
              T
            </span>
            ¿Dónde andas tomando café?
          </button>

          {[...posts, ...POSTS_SEMILLA].map((post) => (
            <Post key={post.id} post={post} />
          ))}

          <p className="px-4 pt-2 text-center text-xs leading-relaxed text-humo">
            La comunidad de Cafeto comparte momentos, no reseñas: aquí no hay
            estrellitas.
          </p>
        </div>
      ) : (
        <div className="md:max-w-xl">
          <div className="grid grid-cols-3 gap-3">
            {[
              { valor: visitados.length, etiqueta: "visitados" },
              { valor: sellos.length, etiqueta: "sellos QR" },
              { valor: logrados, etiqueta: "insignias" },
            ].map(({ valor, etiqueta }) => (
              <div
                key={etiqueta}
                className="rounded-3xl border border-linea bg-lienzo px-3 py-3.5 text-center shadow-taza"
              >
                <p className="font-serif text-2xl font-semibold">{valor}</p>
                <p className="text-[0.64rem] font-bold text-humo">{etiqueta}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {RETOS.map((reto) => {
              const progreso = progresoDe(reto);
              const logrado = progreso >= reto.meta;
              return (
                <article
                  key={reto.id}
                  className={`flex items-center gap-4 rounded-[1.5rem] border p-4 shadow-taza ${
                    logrado ? "border-bosque/30 bg-bosque-tinte" : "border-linea bg-lienzo"
                  }`}
                >
                  <AnilloProgreso
                    progreso={progreso}
                    meta={reto.meta}
                    logrado={logrado}
                    icono={ICONO_RETO[reto.id] ?? Medal}
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-base font-semibold">{reto.titulo}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-espresso-2">
                      {reto.descripcion}
                    </p>
                    <p
                      className={`mt-1 text-[0.68rem] font-extrabold ${logrado ? "text-bosque" : "text-humo"}`}
                    >
                      {logrado ? `Insignia: ${reto.insignia} ✓` : `${progreso} de ${reto.meta}`}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6 flex items-baseline justify-between">
            <h2 className="font-serif text-lg font-semibold">Pasaporte de sellos</h2>
            <span className="text-[0.66rem] font-bold text-humo">
              escanea el QR de la mesa
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2.5">
            {CAFES.map((cafe) => {
              const ganado = sellos.includes(cafe.slug);
              const abrev = cafe.nombre
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2);
              return (
                <div
                  key={cafe.slug}
                  title={cafe.nombre}
                  className={`sello-cafeto flex aspect-square flex-col items-center justify-center gap-0.5 rounded-full text-center ${
                    ganado
                      ? "border-[2.5px] border-terracota bg-terracota-tinte/60 text-terracota-2"
                      : "border-2 border-dashed border-linea text-humo"
                  }`}
                >
                  <span className="font-serif text-base font-semibold">{abrev}</span>
                  <span className="px-1 text-[0.52rem] font-bold leading-tight">
                    {cafe.nombre.length > 13 ? `${cafe.nombre.slice(0, 12)}…` : cafe.nombre}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-4 px-2 text-center text-xs leading-relaxed text-humo">
            Cada café tiene su QR en la mesa. Escanearlo deja tu sello y cuenta tu
            visita — de verdad, no de palabra.
          </p>
        </div>
      )}

      {eligiendo && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setEligiendo(false)}
            className="absolute inset-0 bg-espresso/50 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-label="Elige el café de tu check-in"
            className="relative z-10 max-h-[70vh] w-full max-w-md overflow-y-auto rounded-t-[2rem] bg-lienzo p-5 shadow-taza-lg md:rounded-[2rem]"
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold">¿Dónde andas?</h2>
              <button
                type="button"
                onClick={() => setEligiendo(false)}
                aria-label="Cerrar"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-crema-2 text-espresso-2 hover:text-espresso"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {CAFES.map((cafe) => (
                <button
                  key={cafe.slug}
                  type="button"
                  onClick={() => {
                    publicarCheckin(cafe.slug, false);
                    setEligiendo(false);
                    setSegmento("actividad");
                  }}
                  className="flex cursor-pointer items-center gap-3 rounded-2xl border border-linea bg-crema/50 p-2.5 text-left transition-colors hover:border-terracota/40"
                >
                  <CafePhoto
                    id={cafe.fotos.hero}
                    alt=""
                    ancho={120}
                    className="h-11 w-11 flex-none rounded-xl"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-serif text-sm font-semibold">
                      {cafe.nombre}
                    </span>
                    <span className="block truncate text-xs text-humo">{cafe.zona}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
