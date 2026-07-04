"use client";

import { useCallback, useSyncExternalStore } from "react";

const EVENTO = "cafeto:sync";
const VACIA: string[] = [];

/* Instantáneas cacheadas por clave: useSyncExternalStore exige que
   getSnapshot devuelva el mismo objeto mientras el dato no cambie. */
const cache = new Map<string, { crudo: string | null; valor: string[] }>();

function suscribir(alCambiar: () => void) {
  window.addEventListener(EVENTO, alCambiar);
  window.addEventListener("storage", alCambiar);
  return () => {
    window.removeEventListener(EVENTO, alCambiar);
    window.removeEventListener("storage", alCambiar);
  };
}

function leerLista(clave: string): string[] {
  let crudo: string | null = null;
  try {
    crudo = window.localStorage.getItem(clave);
  } catch {
    return VACIA;
  }
  const guardado = cache.get(clave);
  if (guardado && guardado.crudo === crudo) return guardado.valor;

  let valor: string[];
  try {
    valor = crudo ? (JSON.parse(crudo) as string[]) : VACIA;
  } catch {
    valor = VACIA;
  }
  cache.set(clave, { crudo, valor });
  return valor;
}

function escribir(clave: string, valor: string[]) {
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
