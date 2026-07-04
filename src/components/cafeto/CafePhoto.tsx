"use client";

import { useState } from "react";
import { Coffee } from "lucide-react";
import { fotoUrl } from "@/lib/cafeto/data";

/* Fondos cálidos deterministas para cuando una foto aún no carga o falla. */
const FONDOS = [
  "linear-gradient(135deg, #E9DCC5 0%, #D9BFA0 55%, #C9A177 100%)",
  "linear-gradient(135deg, #E5E0D0 0%, #C9CBB4 55%, #9FA88B 100%)",
  "linear-gradient(135deg, #EBD9C8 0%, #DDB596 55%, #B97F55 100%)",
  "linear-gradient(135deg, #E3D6C9 0%, #C7AE9B 55%, #8F6F5A 100%)",
];

function indiceFondo(id: string) {
  let suma = 0;
  for (let i = 0; i < id.length; i++) suma = (suma + id.charCodeAt(i)) % 997;
  return suma % FONDOS.length;
}

interface Props {
  id: string;
  alt: string;
  /** Ancho pedido a la CDN de fotos, no el ancho renderizado. */
  ancho?: number;
  className?: string;
  sizes?: string;
  prioridad?: boolean;
  conZoom?: boolean;
}

export default function CafePhoto({
  id,
  alt,
  ancho = 1200,
  className = "",
  sizes,
  prioridad = false,
  conZoom = false,
}: Props) {
  const [cargada, setCargada] = useState(false);
  const [fallo, setFallo] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: FONDOS[indiceFondo(id)] }}
    >
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center text-espresso/25"
      >
        <Coffee className="h-10 w-10" strokeWidth={1.5} />
      </span>
      {!fallo && (
        /* Exportación estática sin optimizador de imágenes + respaldo onError:
           se usa <img> directamente en lugar de next/image. */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={fotoUrl(id, ancho)}
          alt={alt}
          sizes={sizes}
          loading={prioridad ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          onLoad={() => setCargada(true)}
          onError={() => setFallo(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ${
            cargada ? "opacity-100" : "opacity-0"
          } ${conZoom ? "group-hover:scale-[1.04]" : ""}`}
        />
      )}
    </div>
  );
}
