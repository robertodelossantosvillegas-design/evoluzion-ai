"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  QrCode,
  Check,
  ChevronLeft,
  CreditCard,
  Dices,
  Eye,
  Info,
  Sparkles,
} from "lucide-react";
import type { Amenidad } from "@/lib/cafeto/types";
import { ETIQUETA_AMENIDAD, getCafe } from "@/lib/cafeto/data";

/* Datos de ejemplo del panel: una semana de actividad de Casa Almendra. */
const VISTAS_POR_DIA = [
  { dia: "Lu", vistas: 132 },
  { dia: "Ma", vistas: 168 },
  { dia: "Mi", vistas: 149 },
  { dia: "Ju", vistas: 201 },
  { dia: "Vi", vistas: 186 },
  { dia: "Sá", vistas: 234 },
  { dia: "Do", vistas: 178 },
];

const TODAS_LAS_AMENIDADES = Object.keys(ETIQUETA_AMENIDAD) as Amenidad[];

function TarjetaMetrica({
  icono: Icono,
  etiqueta,
  valor,
  detalle,
  positivo,
}: {
  icono: typeof Eye;
  etiqueta: string;
  valor: string;
  detalle: string;
  positivo?: boolean;
}) {
  return (
    <div className="rounded-[2rem] border border-linea bg-lienzo p-6 shadow-taza">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-crema-2 text-espresso-2">
          <Icono className="h-5 w-5" strokeWidth={1.8} aria-hidden />
        </span>
        {positivo !== undefined && (
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              positivo ? "bg-bosque-tinte text-bosque" : "bg-crema-2 text-humo"
            }`}
          >
            {detalle}
          </span>
        )}
      </div>
      <p className="mt-4 font-serif text-4xl font-semibold tracking-tight">
        {valor}
      </p>
      <p className="mt-1 text-sm text-humo">{etiqueta}</p>
      {positivo === undefined && (
        <p className="mt-1 text-xs text-humo">{detalle}</p>
      )}
    </div>
  );
}

export default function PanelClient() {
  const cafe = getCafe("casa-almendra");
  const [nombre, setNombre] = useState(cafe?.nombre ?? "");
  const [frase, setFrase] = useState(cafe?.frase ?? "");
  const [descripcion, setDescripcion] = useState(cafe?.descripcion ?? "");
  const [amenidades, setAmenidades] = useState<Amenidad[]>(
    cafe?.amenidades ?? [],
  );
  const [guardado, setGuardado] = useState(false);

  const maxVistas = Math.max(...VISTAS_POR_DIA.map((d) => d.vistas));
  const totalVistas = VISTAS_POR_DIA.reduce((s, d) => s + d.vistas, 0);

  function alternarAmenidad(a: Amenidad) {
    setAmenidades((previas) =>
      previas.includes(a) ? previas.filter((x) => x !== a) : [...previas, a],
    );
  }

  function guardarCambios(e: React.FormEvent) {
    e.preventDefault();
    setGuardado(true);
    setTimeout(() => setGuardado(false), 2500);
  }

  const campo =
    "w-full rounded-2xl border border-linea bg-crema/50 px-4 py-3 text-espresso placeholder:text-humo/70 focus:border-terracota focus:outline-none";

  return (
    <div>
      <div className="flex items-center gap-2 rounded-2xl border border-oro/20 bg-oro-tinte px-4 py-3 text-sm text-oro">
        <Info className="h-4 w-4 shrink-0" aria-hidden />
        Vista de demostración con datos de ejemplo — así se ve el panel de una
        cafetería suscrita.
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link
            href="/cafeto/negocios/"
            className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-humo transition-colors hover:text-terracota-2"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Cafeto para cafeterías
          </Link>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Panel de {cafe?.nombre}
          </h1>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-terracota px-4 py-2 text-sm font-semibold text-white">
          <Sparkles className="h-4 w-4" aria-hidden />
          Plan Destacado
        </span>
      </div>

      <section aria-label="Métricas de la semana" className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TarjetaMetrica
            icono={Eye}
            etiqueta="vistas del perfil esta semana"
            valor={totalVistas.toLocaleString("es-MX")}
            detalle="+12% vs. semana pasada"
            positivo
          />
          <TarjetaMetrica
            icono={Bookmark}
            etiqueta="personas lo tienen guardado"
            valor="86"
            detalle="+9 esta semana"
            positivo
          />
          <TarjetaMetrica
            icono={Dices}
            etiqueta="apariciones en la ruleta"
            valor="312"
            detalle="con prioridad de plan Destacado"
          />
          <TarjetaMetrica
            icono={QrCode}
            etiqueta="visitas verificadas por QR"
            valor="23"
            detalle="+9 esta semana"
            positivo
          />
        </div>

        <div className="mt-4 rounded-[2rem] border border-linea bg-lienzo p-6 shadow-taza md:p-7">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg font-semibold">
              Vistas del perfil, día por día
            </h2>
            <p className="text-sm text-humo">últimos 7 días</p>
          </div>
          <div
            role="img"
            aria-label={`Vistas por día: ${VISTAS_POR_DIA.map(
              (d) => `${d.dia} ${d.vistas}`,
            ).join(", ")}`}
            className="mt-6 grid grid-cols-7 gap-3"
          >
            {VISTAS_POR_DIA.map(({ dia, vistas }) => (
              <div key={dia} className="flex flex-col items-center gap-2">
                <div className="flex h-28 w-full items-end justify-center">
                  <div
                    title={`${dia}: ${vistas} vistas`}
                    className="w-full max-w-12 rounded-t-[4px] bg-terracota transition-colors duration-200 hover:bg-terracota-2"
                    style={{ height: `${(vistas / maxVistas) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-humo">{dia}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <section
          aria-labelledby="editar-perfil"
          className="rounded-[2rem] border border-linea bg-lienzo p-6 shadow-taza md:p-8"
        >
          <h2 id="editar-perfil" className="font-serif text-2xl font-semibold">
            Tu perfil
          </h2>
          <p className="mt-1 text-sm text-espresso-2">
            Lo que cambies aquí se publica al instante en Cafeto.
          </p>

          <form onSubmit={guardarCambios} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="campo-nombre"
                className="mb-1.5 block text-sm font-medium text-espresso"
              >
                Nombre
              </label>
              <input
                id="campo-nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={campo}
              />
            </div>
            <div>
              <label
                htmlFor="campo-frase"
                className="mb-1.5 block text-sm font-medium text-espresso"
              >
                Frase de portada
              </label>
              <input
                id="campo-frase"
                type="text"
                value={frase}
                onChange={(e) => setFrase(e.target.value)}
                className={campo}
              />
              <p className="mt-1.5 text-xs text-humo">
                Una línea con gancho: aparece en las tarjetas de descubrimiento.
              </p>
            </div>
            <div>
              <label
                htmlFor="campo-descripcion"
                className="mb-1.5 block text-sm font-medium text-espresso"
              >
                Descripción editorial
              </label>
              <textarea
                id="campo-descripcion"
                rows={4}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className={campo}
              />
              <p className="mt-1.5 text-xs text-humo">
                Redactada con el equipo editorial de Cafeto. Puedes proponer
                ajustes cuando quieras.
              </p>
            </div>

            <fieldset>
              <legend className="mb-2 text-sm font-medium text-espresso">
                Lo que hay en tu café
              </legend>
              <div className="flex flex-wrap gap-2">
                {TODAS_LAS_AMENIDADES.map((a) => {
                  const activa = amenidades.includes(a);
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => alternarAmenidad(a)}
                      aria-pressed={activa}
                      className={`cursor-pointer rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                        activa
                          ? "bg-bosque text-crema"
                          : "bg-crema-2 text-espresso-2 hover:bg-linea"
                      }`}
                    >
                      {ETIQUETA_AMENIDAD[a]}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-terracota px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-terracota-2"
              >
                Guardar cambios
              </button>
              <span
                role="status"
                className={`flex items-center gap-1.5 text-sm font-medium text-bosque transition-opacity duration-300 ${
                  guardado ? "opacity-100" : "opacity-0"
                }`}
              >
                <Check className="h-4 w-4" aria-hidden />
                Cambios guardados
              </span>
            </div>
          </form>
        </section>

        <section
          aria-labelledby="suscripcion"
          className="h-fit rounded-[2rem] border border-linea bg-lienzo p-6 shadow-taza md:p-7"
        >
          <h2 id="suscripcion" className="font-serif text-2xl font-semibold">
            Suscripción
          </h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-humo">Plan</dt>
              <dd className="font-medium text-espresso">
                Destacado · $890 MXN/mes
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-humo">Próximo cargo</dt>
              <dd className="font-medium text-espresso">1 de agosto de 2026</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-humo">Método de pago</dt>
              <dd className="flex items-center gap-1.5 font-medium text-espresso">
                <CreditCard className="h-4 w-4 text-humo" aria-hidden />
                •••• 4242
              </dd>
            </div>
          </dl>

          <div className="my-6 h-px bg-linea" />

          <div className="space-y-2.5">
            <button
              type="button"
              className="w-full cursor-pointer rounded-full border border-espresso/20 px-5 py-3 text-sm font-medium text-espresso transition-colors duration-200 hover:border-terracota hover:text-terracota-2"
            >
              Cambiar de plan
            </button>
            <button
              type="button"
              className="w-full cursor-pointer rounded-full px-5 py-3 text-sm font-medium text-humo transition-colors duration-200 hover:text-espresso"
            >
              Cancelar suscripción
            </button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-humo">
            Sin plazos forzosos: si cancelas, tu perfil sigue visible hasta el
            fin del periodo pagado.
          </p>
        </section>
      </div>
    </div>
  );
}
