export type Amenidad =
  | "wifi"
  | "enchufes"
  | "petFriendly"
  | "terraza"
  | "brunch"
  | "postres"
  | "metodos"
  | "estacionamiento"
  | "abreTemprano"
  | "cierraTarde";

export type Mood =
  | "para-trabajar"
  | "para-una-cita"
  | "con-amigos"
  | "tranquilo"
  | "al-aire-libre";

/** Sectores de la ciudad usados por la ruleta; agrupan zonas colindantes. */
export type Sector = "centro" | "valle" | "poniente" | "sur";

export interface Horario {
  dias: string;
  horas: string;
}

export interface Cafe {
  slug: string;
  nombre: string;
  /** La ciudad es un dato, no una constante: preparado para más ciudades. */
  ciudad: string;
  zona: string;
  sector: Sector;
  direccion: string;
  /** Una línea con voz editorial; aparece en tarjetas. */
  frase: string;
  /** Párrafo curado para el perfil. */
  descripcion: string;
  conocidoPor: string[];
  /** 1 = accesible, 2 = medio, 3 = premium */
  precio: 1 | 2 | 3;
  amenidades: Amenidad[];
  moods: Mood[];
  horario: Horario[];
  fotos: {
    hero: string;
    galeria: string[];
  };
  nuevo?: boolean;
  /** Plan Destacado: aparece en colecciones destacadas y con prioridad en la ruleta. */
  destacado?: boolean;
}

export interface Coleccion {
  slug: string;
  titulo: string;
  bajada: string;
  cafes: string[];
}

export interface ParadaRuta {
  cafe: string;
  momento: string;
  tip: string;
}

export interface Ruta {
  slug: string;
  titulo: string;
  bajada: string;
  descripcion: string;
  zona: string;
  duracion: string;
  foto: string;
  paradas: ParadaRuta[];
}

export interface Zona {
  slug: string;
  nombre: string;
  abrev: string;
  cafes: string[];
  proximamente?: boolean;
}

export type TipoPost = "checkin" | "insignia" | "cafe";

export interface PostComunidad {
  id: string;
  tipo: TipoPost;
  quien: string;
  /** Índice del gradiente cálido para el avatar. */
  tono: number;
  cafe?: string;
  hace: string;
  texto?: string;
  conFoto?: boolean;
  sello?: boolean;
  insignia?: string;
  antojosBase?: number;
}

export type TipoReto = "visitas" | "favoritos" | "cafes";

export interface Reto {
  id: string;
  titulo: string;
  descripcion: string;
  insignia: string;
  tipo: TipoReto;
  meta: number;
  /** Para retos tipo "cafes": los slugs que cuentan. */
  cafes?: string[];
}
