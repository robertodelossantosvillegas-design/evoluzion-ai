"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { PostComunidad } from "./types";

const EVENTO = "cafeto:sync";
const VACIA: string[] = [];
const SIN_POSTS: PostComunidad[] = [];

/* Instantáneas cacheadas por clave: useSyncExternalStore exige que
   getSnapshot devuelva el mismo objeto mientras el dato no cambie. */
const cache = new Map<string, { crudo: string | null; valor: unknown }>();

function suscribir(alCambiar: () => void) {
  window.addEventListener(EVENTO, alCambiar);
  window.addEventListener("storage", alCambiar);
  return () => {
    window.removeEventListener(EVENTO, alCambiar);
    window.removeEventListener("storage", alCambiar);
  };
}

function leerCrudo<T>(clave: string, porDefecto: T): T {
  let crudo: string | null = null;
  try {
    crudo = window.localStorage.getItem(clave);
  } catch {
    return porDefecto;
  }
  const guardado = cache.get(clave);
  if (guardado && guardado.crudo === crudo) return guardado.valor as T;

  let valor: T;
  try {
    valor = crudo ? (JSON.parse(crudo) as T) : porDefecto;
  } catch {
    valor = porDefecto;
  }
  cache.set(clave, { crudo, valor });
  return valor;
}

const leerLista = (clave: string) => leerCrudo<string[]>(clave, VACIA);

function escribir(clave: string, valor: unknown) {
  try {
    window.localStorage.setItem(clave, JSON.stringify(valor));
  } catch {
    // almacenamiento no disponible (modo privado): se pierde al recargar
  }
  window.dispatchEvent(new Event(EVENTO));
}

/**
 * Lista de slugs persistida en localStorage y sincronizada entre
 * componentes (y pestañas). En prerender devuelve la lista vacía;
 * `listo` distingue "aún hidratando" de "de verdad no hay nada".
 */
function useListaLocal(clave: string) {
  const lista = useSyncExternalStore(
    suscribir,
    () => leerLista(clave),
    () => VACIA,
  );
  const listo = useSyncExternalStore(
    suscribir,
    () => true,
    () => false,
  );

  const alternar = useCallback(
    (slug: string) => {
      const actual = leerLista(clave);
      const siguiente = actual.includes(slug)
        ? actual.filter((s) => s !== slug)
        : [...actual, slug];
      escribir(clave, siguiente);
    },
    [clave],
  );

  return { lista, alternar, listo };
}

export function useFavoritos() {
  const { lista, alternar, listo } = useListaLocal("cafeto:favoritos");
  return {
    favoritos: lista,
    alternarFavorito: alternar,
    esFavorito: (slug: string) => lista.includes(slug),
    listo,
  };
}

export function useVisitados() {
  const { lista, alternar, listo } = useListaLocal("cafeto:visitados");
  return {
    visitados: lista,
    alternarVisita: alternar,
    fueVisitado: (slug: string) => lista.includes(slug),
    listo,
  };
}

/** Sellos QR: visitas verificadas escaneando el código de la mesa. */
export function useSellos() {
  const { lista, listo } = useListaLocal("cafeto:sellos");
  const sellar = useCallback((slug: string) => {
    const actual = leerLista("cafeto:sellos");
    if (!actual.includes(slug)) escribir("cafeto:sellos", [...actual, slug]);
    const visitas = leerLista("cafeto:visitados");
    if (!visitas.includes(slug)) escribir("cafeto:visitados", [...visitas, slug]);
  }, []);
  return { sellos: lista, sellar, tieneSello: (s: string) => lista.includes(s), listo };
}

/** Reacción "se me antoja" por post. */
export function useAntojos() {
  const { lista, alternar, listo } = useListaLocal("cafeto:antojos");
  return { antojos: lista, alternarAntojo: alternar, meAntoja: (id: string) => lista.includes(id), listo };
}

/** Publicaciones propias del feed (check-ins), las más nuevas primero. */
export function usePostsLocales() {
  const posts = useSyncExternalStore(
    suscribir,
    () => leerCrudo<PostComunidad[]>("cafeto:posts", SIN_POSTS),
    () => SIN_POSTS,
  );
  const publicarCheckin = useCallback((cafeSlug: string, conSello: boolean) => {
    const actuales = leerCrudo<PostComunidad[]>("cafeto:posts", SIN_POSTS);
    const nuevo: PostComunidad = {
      id: `u${Date.now()}`,
      tipo: "checkin",
      quien: "Tú",
      tono: 2,
      cafe: cafeSlug,
      hace: "ahora",
      sello: conSello,
      antojosBase: 0,
    };
    escribir("cafeto:posts", [nuevo, ...actuales].slice(0, 20));
  }, []);
  return { posts, publicarCheckin };
}

/** Paradas completadas por ruta: se guardan como "rutaSlug/cafeSlug". */
export function useProgresoRutas(rutaSlug: string) {
  const { lista, alternar, listo } = useListaLocal("cafeto:rutas");
  const clavesDeRuta = lista.filter((p) => p.startsWith(`${rutaSlug}/`));
  return {
    completadas: clavesDeRuta.map((p) => p.slice(rutaSlug.length + 1)),
    alternarParada: (cafeSlug: string) => alternar(`${rutaSlug}/${cafeSlug}`),
    iniciada: clavesDeRuta.length > 0,
    listo,
  };
}
