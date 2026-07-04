import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ChartLine,
  Check,
  Dices,
  Quote,
  Sparkles,
} from "lucide-react";
import { getCafe } from "@/lib/cafeto/data";
import CafeCard from "@/components/cafeto/CafeCard";

export const metadata: Metadata = {
  title: "Para cafeterías",
  description:
    "Cafeto presenta tu cafetería como se merece: perfil editorial con fotografía al frente, apariciones en ruleta y rutas, y métricas claras. Planes desde $490 MXN al mes.",
};

const VENTAJAS = [
  {
    icono: Camera,
    titulo: "Perfil editorial premium",
    texto:
      "Fotografía al frente y una descripción escrita con oficio — nada de fichas grises de directorio. Tu café, presentado como en una revista.",
  },
  {
    icono: Dices,
    titulo: "Descubrimiento activo",
    texto:
      "Apareces en la ruleta, en colecciones curadas y en rutas de café. La gente no te busca: te encuentra cuando anda decidiendo a dónde ir.",
  },
  {
    icono: ChartLine,
    titulo: "Métricas que sí dicen algo",
    texto:
      "Cuántas personas vieron tu perfil, cuántas te guardaron, cuántas veces saliste en la ruleta. Claridad para saber qué estás ganando.",
  },
] as const;

const PLANES = [
  {
    nombre: "Esencial",
    precio: "$490",
    nota: "MXN al mes",
    descripcion: "Para estar presente donde la gente decide.",
    incluye: [
      "Perfil editorial con galería de fotos",
      "Aparición en descubrimiento y ruleta",
      "Métricas básicas: vistas y guardados",
      "Actualiza horarios y datos cuando quieras",
    ],
    destacado: false,
  },
  {
    nombre: "Destacado",
    precio: "$890",
    nota: "MXN al mes",
    descripcion: "Para ser de los primeros que se antojan.",
    incluye: [
      "Todo lo del plan Esencial",
      "Lugar en colecciones destacadas de portada",
      "Prioridad en la ruleta y en rutas curadas",
      "Métricas completas con tendencia semanal",
      "Sesión fotográfica editorial anual",
    ],
    destacado: true,
  },
] as const;

const PREGUNTAS = [
  {
    pregunta: "¿Puedo cancelar cuando quiera?",
    respuesta:
      "Sí. La suscripción es mensual, sin plazos forzosos ni letras chiquitas. Si Cafeto no te está trayendo valor, cancelas desde tu panel en dos clics.",
  },
  {
    pregunta: "¿Quién escribe la descripción de mi café?",
    respuesta:
      "Nuestro equipo editorial la redacta contigo: visitamos tu café, escuchamos tu historia y la contamos con la voz de Cafeto. Tú apruebas la versión final.",
  },
  {
    pregunta: "¿Cómo entro a las rutas y colecciones?",
    respuesta:
      "Las rutas y colecciones son curadas — no se compran por sí solas. El plan Destacado te da prioridad de consideración, y la curaduría hace el resto. Así protegemos la confianza de quien explora.",
  },
] as const;

export default function PaginaNegocios() {
  const ejemplo = getCafe("casa-almendra");

  return (
    <main className="pb-20">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracota-2">
            Cafeto para cafeterías
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Tu cafetería, presentada como se merece
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-espresso-2">
            Cafeto no es un directorio: es donde la gente de Monterrey decide a
            dónde ir por café. Una membresía mensual pone tu café frente a esa
            decisión — con fotografía, voz editorial y métricas claras.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hola@cafeto.mx?subject=Quiero%20mi%20cafeter%C3%ADa%20en%20Cafeto"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-terracota px-6 py-3.5 font-medium text-white shadow-taza transition-colors duration-200 hover:bg-terracota-2"
            >
              Quiero estar en Cafeto
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/cafeto/negocios/panel/"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-espresso/20 bg-lienzo px-6 py-3.5 font-medium text-espresso transition-colors duration-200 hover:border-terracota hover:text-terracota-2"
            >
              Ver el panel de ejemplo
            </Link>
          </div>
        </div>

        {ejemplo && (
          <div className="relative mx-auto w-full max-w-xs">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] border border-linea bg-lienzo/60" aria-hidden />
            <div className="relative">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-humo">
                Así se ve tu café en Cafeto
              </p>
              <CafeCard cafe={ejemplo} />
            </div>
          </div>
        )}
      </section>

      <section className="border-y border-linea bg-crema-2/50 py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="max-w-md font-serif text-3xl font-semibold tracking-tight">
            Una membresía, tres formas de ganar clientes
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {VENTAJAS.map(({ icono: Icono, titulo, texto }) => (
              <div key={titulo}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracota-tinte text-terracota-2">
                  <Icono className="h-6 w-6" strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {titulo}
                </h3>
                <p className="mt-2 leading-relaxed text-espresso-2">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8" id="planes">
        <div className="max-w-md">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">
            Simple a propósito
          </h2>
          <p className="mt-3 leading-relaxed text-espresso-2">
            Dos planes, sin matrices de precios. Empieza donde tenga sentido y
            cambia cuando quieras.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:max-w-4xl md:grid-cols-2">
          {PLANES.map((plan) => (
            <div
              key={plan.nombre}
              className={`relative rounded-[2rem] border p-7 md:p-8 ${
                plan.destacado
                  ? "border-terracota/40 bg-lienzo shadow-taza-lg"
                  : "border-linea bg-lienzo shadow-taza"
              }`}
            >
              {plan.destacado && (
                <span className="absolute -top-3.5 left-7 flex items-center gap-1.5 rounded-full bg-terracota px-3.5 py-1.5 text-xs font-semibold text-white">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  El favorito
                </span>
              )}
              <h3 className="font-serif text-2xl font-semibold">
                {plan.nombre}
              </h3>
              <p className="mt-1 text-sm text-espresso-2">{plan.descripcion}</p>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-semibold tracking-tight">
                  {plan.precio}
                </span>
                <span className="text-sm font-medium text-humo">
                  {plan.nota}
                </span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.incluye.map((punto) => (
                  <li key={punto} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.destacado
                          ? "bg-terracota-tinte text-terracota-2"
                          : "bg-bosque-tinte text-bosque"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="leading-relaxed text-espresso-2">
                      {punto}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:hola@cafeto.mx?subject=Plan%20${plan.nombre}%20para%20mi%20cafeter%C3%ADa`}
                className={`mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium transition-colors duration-200 ${
                  plan.destacado
                    ? "bg-terracota text-white hover:bg-terracota-2"
                    : "border border-espresso/20 text-espresso hover:border-terracota hover:text-terracota-2"
                }`}
              >
                Empezar con {plan.nombre}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-humo">
          Sin plazos forzosos. Sin comisiones por cliente. Cancela cuando
          quieras.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="rounded-[2rem] bg-espresso p-8 text-crema md:p-12">
          <Quote className="h-8 w-8 text-terracota" aria-hidden />
          <p className="mt-4 max-w-2xl font-serif text-2xl font-medium leading-snug md:text-3xl">
            La gente ya no busca “café cerca de mí”. Abre Cafeto y se antoja.
            Queremos que se antoje del tuyo.
          </p>
          <p className="mt-4 text-sm text-crema/70">
            El equipo de Cafeto · Monterrey
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">
          Preguntas directas, respuestas directas
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PREGUNTAS.map(({ pregunta, respuesta }) => (
            <div
              key={pregunta}
              className="rounded-[2rem] border border-linea bg-lienzo p-6 shadow-taza"
            >
              <h3 className="font-serif text-lg font-semibold leading-snug">
                {pregunta}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso-2">
                {respuesta}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center rounded-[2rem] border border-linea bg-crema-2/60 px-8 py-12 text-center">
          <h2 className="max-w-lg font-serif text-3xl font-semibold tracking-tight">
            Hagamos que tu café sea el plan de alguien hoy
          </h2>
          <a
            href="mailto:hola@cafeto.mx?subject=Quiero%20mi%20cafeter%C3%ADa%20en%20Cafeto"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-terracota px-7 py-4 font-medium text-white shadow-taza transition-colors duration-200 hover:bg-terracota-2"
          >
            Escríbenos: hola@cafeto.mx
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>
    </main>
  );
}
