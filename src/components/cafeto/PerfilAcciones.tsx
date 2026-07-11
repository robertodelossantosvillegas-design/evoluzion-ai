"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bookmark, Check, QrCode, Share2 } from "lucide-react";
import { useFavoritos, usePostsLocales, useSellos, useVisitados } from "@/lib/cafeto/store";

interface Props {
  slug: string;
  nombre: string;
  frase: string;
}

export default function PerfilAcciones({ slug, nombre, frase }: Props) {
  const { esFavorito, alternarFavorito, listo } = useFavoritos();
  const { fueVisitado, alternarVisita, listo: visitasListas } = useVisitados();
  const { sellar, tieneSello } = useSellos();
  const { publicarCheckin } = usePostsLocales();
  const [compartido, setCompartido] = useState(false);
  const [escaneando, setEscaneando] = useState<"no" | "leyendo" | "listo">("no");
  const timeoutRef = useRef<number | null>(null);

  const guardado = listo && esFavorito(slug);
  const visitado = visitasListas && fueVisitado(slug);
  const conSello = tieneSello(slug);
  const abrev = nombre
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  async function compartir() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${nombre} · Cafeto`, text: frase, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCompartido(true);
      window.setTimeout(() => setCompartido(false), 2000);
    } catch {
      // compartir cancelado por la persona: no es un error
    }
  }

  function escanear() {
    setEscaneando("leyendo");
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timeoutRef.current = window.setTimeout(
      () => {
        sellar(slug);
        publicarCheckin(slug, true);
        setEscaneando("listo");
      },
      menosMovimiento ? 300 : 1700,
    );
  }

  const pastilla =
    "inline-flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors duration-200";

  return (
    <div>
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={() => alternarFavorito(slug)}
          aria-pressed={guardado}
          className={`${pastilla} ${
            guardado
              ? "bg-terracota text-white hover:bg-terracota-2"
              : "border border-espresso/20 bg-lienzo text-espresso hover:border-terracota hover:text-terracota-2"
          }`}
        >
          <Bookmark className="h-4 w-4" fill={guardado ? "currentColor" : "none"} aria-hidden />
          {guardado ? "Guardado" : "Guardar"}
        </button>

        <button
          type="button"
          onClick={compartir}
          className={`${pastilla} border border-espresso/20 bg-lienzo text-espresso hover:border-terracota hover:text-terracota-2`}
        >
          <Share2 className="h-4 w-4" aria-hidden />
          {compartido ? "Copiado" : "Compartir"}
        </button>

        <button
          type="button"
          onClick={() => alternarVisita(slug)}
          aria-pressed={visitado}
          title="Tus visitas cuentan para los retos"
          className={`${pastilla} ${
            visitado
              ? "bg-bosque text-crema hover:bg-bosque/90"
              : "border border-espresso/20 bg-lienzo text-espresso hover:border-bosque hover:text-bosque"
          }`}
        >
          <Check className="h-4 w-4" aria-hidden />
          {visitado ? "Visitado" : "Ya fui"}
        </button>
      </div>

      <button
        type="button"
        onClick={escanear}
        disabled={escaneando !== "no"}
        className="mt-2.5 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-espresso text-sm font-semibold text-crema shadow-taza transition-colors duration-200 hover:bg-espresso/90 disabled:cursor-default"
      >
        <QrCode className="h-4.5 w-4.5" aria-hidden />
        {conSello ? "Sello ganado — volver a escanear" : "Escanear QR de la mesa"}
      </button>
      <p className="mt-2 text-center text-xs text-humo">
        El QR sella tu visita: cuenta para retos y tu pasaporte.
      </p>

      {escaneando !== "no" && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
          <button
            type="button"
            aria-label="Cerrar escáner"
            onClick={() => setEscaneando("no")}
            className="absolute inset-0 bg-espresso/55 backdrop-blur-[3px]"
          />
          <div
            role="dialog"
            aria-label="Escáner de QR"
            className="relative z-10 w-full max-w-md rounded-t-[2rem] bg-lienzo p-6 text-center shadow-taza-lg md:rounded-[2rem]"
          >
            {escaneando === "leyendo" ? (
              <>
                <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-terracota-2">
                  QR de la mesa
                </p>
                <div className="visor-qr">
                  <span className="laser-qr" aria-hidden />
                </div>
                <h2 className="font-serif text-xl font-semibold">Escaneando…</h2>
                <p className="mt-1 text-sm text-espresso-2">
                  Apunta al código Cafeto de {nombre}.
                </p>
              </>
            ) : (
              <>
                <p className="text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-bosque">
                  ¡Listo!
                </p>
                <span className="mx-auto mt-3 flex aspect-square w-24 -rotate-[5deg] flex-col items-center justify-center rounded-full border-[3px] border-terracota bg-terracota-tinte/60 text-terracota-2">
                  <span className="font-serif text-2xl font-bold">{abrev}</span>
                  <span className="text-[0.56rem] font-extrabold uppercase tracking-widest">
                    Sello
                  </span>
                </span>
                <h2 className="mt-3 font-serif text-xl font-semibold">
                  Sello de {nombre}
                </h2>
                <p className="mx-auto mt-1 max-w-xs text-sm leading-relaxed text-espresso-2">
                  Tu visita quedó registrada: cuenta para tus retos y tu pasaporte.
                </p>
                <div className="mt-5 flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => setEscaneando("no")}
                    className="flex-1 cursor-pointer rounded-full bg-crema-2 px-4 py-3.5 text-sm font-bold text-espresso transition-colors hover:bg-linea"
                  >
                    Cerrar
                  </button>
                  <Link
                    href="/cafeto/comunidad/"
                    className="flex-1 cursor-pointer rounded-full bg-terracota px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-terracota-2"
                  >
                    Ver pasaporte
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
