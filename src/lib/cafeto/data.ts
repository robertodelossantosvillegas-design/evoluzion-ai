import type {
  Amenidad,
  Cafe,
  Coleccion,
  Mood,
  PostComunidad,
  Reto,
  Ruta,
  Sector,
  Zona,
} from "./types";

/** URL de foto (Unsplash) al ancho pedido. */
export function fotoUrl(id: string, ancho: number): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${ancho}&q=80`;
}

export const ETIQUETA_MOOD: Record<Mood, string> = {
  "para-trabajar": "Para chambear",
  "para-una-cita": "Para una cita",
  "con-amigos": "Con la banda",
  tranquilo: "En calma",
  "al-aire-libre": "Al aire libre",
};

/* Gradientes cálidos para avatares y respaldos visuales. */
export const TONOS_CALIDOS = [
  "linear-gradient(150deg,#caa06b 0%,#a5744a 48%,#6f4527 100%)",
  "linear-gradient(150deg,#b9bd9d 0%,#8b9474 48%,#525f42 100%)",
  "linear-gradient(150deg,#d9b491 0%,#b07e52 48%,#7c4e2a 100%)",
  "linear-gradient(150deg,#b79a86 0%,#8a6a55 48%,#4f3826 100%)",
];

export const ETIQUETA_AMENIDAD: Record<Amenidad, string> = {
  wifi: "Wifi",
  enchufes: "Enchufes",
  petFriendly: "Pet friendly",
  terraza: "Terraza",
  brunch: "Brunch",
  postres: "Postres",
  metodos: "Barra de métodos",
  estacionamiento: "Estacionamiento",
  abreTemprano: "Abre temprano",
  cierraTarde: "Cierra tarde",
};

export const SECTORES: { id: Sector; nombre: string }[] = [
  { id: "centro", nombre: "Centro y Barrio Antiguo" },
  { id: "valle", nombre: "San Pedro y el Valle" },
  { id: "poniente", nombre: "Al poniente" },
  { id: "sur", nombre: "Al sur" },
];

export const CAFES: Cafe[] = [
  {
    slug: "la-vereda",
    nombre: "La Vereda",
    ciudad: "Monterrey",
    zona: "Barrio Antiguo",
    sector: "centro",
    direccion: "Padre Mier 852, Barrio Antiguo",
    frase: "Un patio entre plantas donde el tiempo camina más despacio.",
    descripcion:
      "Detrás de una fachada de casona, La Vereda esconde uno de los patios más queridos del Barrio Antiguo. La luz entra filtrada por las enredaderas, el espresso sale de un tostador local y nadie te apura. Es el lugar para una sobremesa larga o un libro a media tarde.",
    conocidoPor: [
      "Flat white con tueste de la casa",
      "El patio bajo las enredaderas",
      "Pan de elote que se acaba temprano",
    ],
    precio: 2,
    amenidades: ["wifi", "terraza", "petFriendly", "postres"],
    moods: ["tranquilo", "para-una-cita", "al-aire-libre"],
    horario: [
      { dias: "Lun – Vie", horas: "8:00 – 21:00" },
      { dias: "Sáb – Dom", horas: "9:00 – 22:00" },
    ],
    fotos: {
      hero: "1493857671505-72967e2e2760",
      galeria: ["1445116572660-236099ec97a0", "1521017432531-fbd92d768814"],
    },
    destacado: true,
  },
  {
    slug: "norte-tostadores",
    nombre: "Norte Tostadores",
    ciudad: "Monterrey",
    zona: "Centro",
    sector: "centro",
    direccion: "Morelos 415, Centro",
    frase: "El tostador que le cambió el paladar al centro.",
    descripcion:
      "Aquí el café se toma en serio sin ponerse solemne. Tuestan en el local dos veces por semana, la barra de métodos siempre tiene algo nuevo de Chiapas o Veracruz, y los baristas explican sin cátedra. Si quieres entender por qué el café de especialidad importa, empieza aquí.",
    conocidoPor: [
      "Tueste propio de fincas mexicanas",
      "Barra de métodos: V60, Chemex, aeropress",
      "Cursos de cata los sábados",
    ],
    precio: 2,
    amenidades: ["wifi", "enchufes", "metodos", "abreTemprano"],
    moods: ["para-trabajar", "tranquilo"],
    horario: [
      { dias: "Lun – Vie", horas: "7:30 – 20:00" },
      { dias: "Sáb", horas: "8:00 – 20:00" },
      { dias: "Dom", horas: "9:00 – 15:00" },
    ],
    fotos: {
      hero: "1447933601403-0c6688de566e",
      galeria: ["1507133750040-4a8f57021571", "1442512595331-e89e73853f31"],
    },
  },
  {
    slug: "casa-almendra",
    nombre: "Casa Almendra",
    ciudad: "Monterrey",
    zona: "Del Valle, San Pedro",
    sector: "valle",
    direccion: "Río Tamazunchale 210, Del Valle",
    frase: "Brunch de domingo con luz de revista.",
    descripcion:
      "Casa Almendra es la prueba de que un lugar puede ser bonito y servir un café impecable a la vez. Techos altos, mucha luz natural y una carta corta que hace pocas cosas muy bien. Los fines de semana hay fila; entre semana es un secreto a voces del Valle.",
    conocidoPor: [
      "Pan francés con almendra tostada",
      "Cortado en vaso de cristal",
      "Las mesas junto al ventanal",
    ],
    precio: 3,
    amenidades: ["wifi", "brunch", "postres", "estacionamiento"],
    moods: ["para-una-cita", "con-amigos"],
    horario: [
      { dias: "Lun – Vie", horas: "8:00 – 19:00" },
      { dias: "Sáb – Dom", horas: "8:30 – 20:00" },
    ],
    fotos: {
      hero: "1414235077428-338989a2e8c0",
      galeria: ["1515442261605-65987783cb6a", "1541167760496-1628856ab772"],
    },
    destacado: true,
  },
  {
    slug: "bruma",
    nombre: "Bruma",
    ciudad: "Monterrey",
    zona: "Obispado",
    sector: "poniente",
    direccion: "Hidalgo 2109, Obispado",
    frase: "Minimalismo, silencio y un espresso muy serio.",
    descripcion:
      "Bruma quita todo lo que sobra: paredes claras, madera clara, una barra y el mejor espresso de este lado de la ciudad. No hay música fuerte ni pantallas. La gente viene a leer, a trabajar en corto o a no hacer nada con estilo.",
    conocidoPor: [
      "Espresso de tueste claro",
      "Cortado y poco ruido",
      "La barra de madera junto a la ventana",
    ],
    precio: 2,
    amenidades: ["wifi", "enchufes", "metodos"],
    moods: ["tranquilo", "para-trabajar"],
    horario: [
      { dias: "Lun – Sáb", horas: "8:00 – 20:00" },
      { dias: "Dom", horas: "9:00 – 14:00" },
    ],
    fotos: {
      hero: "1511920170033-f8396924c348",
      galeria: ["1507133750040-4a8f57021571", "1498804103079-a6351b050096"],
    },
  },
  {
    slug: "madrugada",
    nombre: "Madrugada",
    ciudad: "Monterrey",
    zona: "Centro",
    sector: "centro",
    direccion: "Juárez 730, Centro",
    frase: "Abre a las 6:30. Los regulares llegan a las 6:31.",
    descripcion:
      "Madrugada es un bar de espresso de banqueta: chico, rápido y con memoria — al tercer día ya saben qué tomas. Es la primera parada de oficinistas, corredores y de cualquiera que entienda que el día se decide temprano.",
    conocidoPor: [
      "Espresso doble al paso",
      "Conchas de la panadería de al lado",
      "El barista que se sabe tu nombre",
    ],
    precio: 1,
    amenidades: ["abreTemprano"],
    moods: ["tranquilo"],
    horario: [
      { dias: "Lun – Vie", horas: "6:30 – 15:00" },
      { dias: "Sáb", horas: "7:00 – 13:00" },
    ],
    fotos: {
      hero: "1509042239860-f550ce710b93",
      galeria: ["1504753793650-d4a2b783c15e", "1498804103079-a6351b050096"],
    },
  },
  {
    slug: "el-solar",
    nombre: "El Solar",
    ciudad: "Monterrey",
    zona: "Barrio Antiguo",
    sector: "centro",
    direccion: "Mina 1032, Barrio Antiguo",
    frase: "El patio grande del barrio: perros, amigos y tardes largas.",
    descripcion:
      "El Solar es el plan fácil que siempre funciona: un patio enorme con mesas largas, café bien hecho, cerveza local si la tarde se alarga y perros por todos lados. Los sábados hay mercadito de productores; llega temprano si quieres mesa a la sombra.",
    conocidoPor: [
      "Cold brew de la casa",
      "Mercadito de sábado",
      "Ser el punto de reunión del barrio",
    ],
    precio: 2,
    amenidades: ["terraza", "petFriendly", "wifi", "cierraTarde"],
    moods: ["con-amigos", "al-aire-libre", "para-una-cita"],
    horario: [
      { dias: "Mar – Dom", horas: "9:00 – 23:00" },
      { dias: "Lun", horas: "Cerrado" },
    ],
    fotos: {
      hero: "1521017432531-fbd92d768814",
      galeria: ["1466978913421-dad2ebd01d17", "1445116572660-236099ec97a0"],
    },
  },
  {
    slug: "cerro-verde",
    nombre: "Cerro Verde",
    ciudad: "Monterrey",
    zona: "Cumbres",
    sector: "poniente",
    direccion: "Paseo de los Leones 2450, Cumbres",
    frase: "El café de colonia que todos quisieran tener a tres cuadras.",
    descripcion:
      "Cerro Verde no aparece en las listas de moda y a sus regulares les encanta que así sea. Familia tostando café desde hace una década, precios honestos y un pan dulce que sale dos veces al día. De esos lugares que sostienen a una colonia entera.",
    conocidoPor: [
      "Café de olla como debe ser",
      "Pan dulce horneado en casa",
      "El trato de siempre",
    ],
    precio: 1,
    amenidades: ["wifi", "estacionamiento", "postres", "abreTemprano"],
    moods: ["tranquilo", "con-amigos"],
    horario: [
      { dias: "Lun – Sáb", horas: "7:00 – 21:00" },
      { dias: "Dom", horas: "8:00 – 14:00" },
    ],
    fotos: {
      hero: "1559925393-8be0ec4767c8",
      galeria: ["1453614512568-c4024d13c247", "1445116572660-236099ec97a0"],
    },
  },
  {
    slug: "punto-y-coma",
    nombre: "Punto y Coma",
    ciudad: "Monterrey",
    zona: "Tecnológico",
    sector: "sur",
    direccion: "Av. Garza Sada 2211, Tecnológico",
    frase: "Enchufes en cada mesa y café hasta la medianoche.",
    descripcion:
      "A tres calles del Tec, Punto y Coma entendió lo que necesita quien estudia o trabaja: mesas amplias, enchufes en serio, wifi que no se cae y un refill de filtrado a precio de estudiante. De día suena a teclados; de noche, a proyectos que se entregan mañana.",
    conocidoPor: [
      "Refill de café filtrado",
      "Mesas grandes para equipos",
      "Abrir hasta tarde en exámenes",
    ],
    precio: 1,
    amenidades: ["wifi", "enchufes", "cierraTarde"],
    moods: ["para-trabajar", "con-amigos"],
    horario: [
      { dias: "Lun – Vie", horas: "8:00 – 00:00" },
      { dias: "Sáb – Dom", horas: "10:00 – 22:00" },
    ],
    fotos: {
      hero: "1497935586351-b67a49e012bf",
      galeria: ["1461023058943-07fcbe16d735", "1512568400610-62da28bc8a13"],
    },
  },
  {
    slug: "alba-y-grano",
    nombre: "Alba y Grano",
    ciudad: "Monterrey",
    zona: "Valle Oriente",
    sector: "valle",
    direccion: "Av. Lázaro Cárdenas 2320, Valle Oriente",
    frase: "Espresso de especialidad a la velocidad del corporativo.",
    descripcion:
      "Entre torres de oficinas, Alba y Grano demuestra que rápido no tiene que ser mediocre. La barra saca cortados impecables en minutos y la terraza del segundo piso mira a la Sierra Madre. A las 8:00 es una colmena; a las 16:00, un buen lugar para una junta que no quiere sala de juntas.",
    conocidoPor: [
      "Cortado en menos de tres minutos",
      "La terraza con vista a la Sierra",
      "Cold brew en las tardes de calor",
    ],
    precio: 2,
    amenidades: ["wifi", "enchufes", "terraza", "abreTemprano"],
    moods: ["para-trabajar", "tranquilo"],
    horario: [
      { dias: "Lun – Vie", horas: "7:00 – 20:00" },
      { dias: "Sáb", horas: "9:00 – 14:00" },
    ],
    fotos: {
      hero: "1501339847302-ac426a4a7cbb",
      galeria: ["1495474472287-4d71bcdd2085", "1524350876685-274059332603"],
    },
    nuevo: true,
  },
  {
    slug: "la-tejedora",
    nombre: "La Tejedora",
    ciudad: "Monterrey",
    zona: "La Purísima",
    sector: "centro",
    direccion: "Serafín Peña 938, La Purísima",
    frase: "Mitad café, mitad taller: aquí las tardes rinden distinto.",
    descripcion:
      "La Tejedora comparte techo con un taller de cerámica y se nota: cada taza es distinta, hecha a mano a unos metros de donde te la sirven. El ritmo es lento a propósito. Ven por un chai o un filtrado, quédate al taller de los jueves.",
    conocidoPor: [
      "Tazas de cerámica hechas en casa",
      "Chai especiado de la casa",
      "Talleres de cerámica los jueves",
    ],
    precio: 2,
    amenidades: ["wifi", "postres", "petFriendly"],
    moods: ["tranquilo", "para-una-cita"],
    horario: [
      { dias: "Mié – Lun", horas: "10:00 – 20:00" },
      { dias: "Mar", horas: "Cerrado" },
    ],
    fotos: {
      hero: "1445116572660-236099ec97a0",
      galeria: ["1512568400610-62da28bc8a13", "1453614512568-c4024d13c247"],
    },
  },
  {
    slug: "obsidiana",
    nombre: "Obsidiana",
    ciudad: "Monterrey",
    zona: "San Jerónimo",
    sector: "poniente",
    direccion: "Av. San Jerónimo 1104, San Jerónimo",
    frase: "Concreto, luz de neón suave y un menú que se atreve.",
    descripcion:
      "Obsidiana es el recién llegado que ya se siente necesario. Espresso de tueste claro, matcha ceremonial y una barra de temporada que cambia cada mes — el capuchino de cacao con chile es más serio de lo que suena. El espacio, de concreto y luz cálida, invita a quedarse.",
    conocidoPor: [
      "Matcha ceremonial",
      "Barra de temporada mensual",
      "Capuchino de cacao con chile",
    ],
    precio: 3,
    amenidades: ["wifi", "enchufes", "metodos", "estacionamiento"],
    moods: ["para-una-cita", "para-trabajar"],
    horario: [
      { dias: "Lun – Dom", horas: "8:00 – 21:00" },
    ],
    fotos: {
      hero: "1554118811-1e0d58224f24",
      galeria: ["1511920170033-f8396924c348", "1507133750040-4a8f57021571"],
    },
    nuevo: true,
    destacado: true,
  },
  {
    slug: "jardin-cuatro",
    nombre: "Jardín Cuatro",
    ciudad: "Monterrey",
    zona: "Casco de San Pedro",
    sector: "valle",
    direccion: "Morelos 4, Casco de San Pedro",
    frase: "Un jardín escondido detrás de una puerta verde.",
    descripcion:
      "Hay que saber que existe: una puerta verde sin letrero, un pasillo y de pronto un jardín con cuatro mesas bajo un árbol de aguacate. Jardín Cuatro sirve poco y bien — filtrado del día, dos pasteles, limonada de la casa. Ir es quedar en un secreto.",
    conocidoPor: [
      "El jardín bajo el aguacate",
      "Pastel de zanahoria de la casa",
      "Sentirse fuera de la ciudad",
    ],
    precio: 2,
    amenidades: ["terraza", "petFriendly", "postres"],
    moods: ["tranquilo", "al-aire-libre", "para-una-cita"],
    horario: [
      { dias: "Jue – Dom", horas: "9:00 – 18:00" },
      { dias: "Lun – Mié", horas: "Cerrado" },
    ],
    fotos: {
      hero: "1484659619207-9165d119dafe",
      galeria: ["1466978913421-dad2ebd01d17", "1495474472287-4d71bcdd2085"],
    },
    nuevo: true,
  },
  {
    slug: "faro-sur",
    nombre: "Faro Sur",
    ciudad: "Monterrey",
    zona: "Contry",
    sector: "sur",
    direccion: "Av. Eugenio Garza Sada 3820, Contry",
    frase: "Juegos de mesa, pastel y café hasta que cierren.",
    descripcion:
      "Faro Sur es la sala que le faltaba al sur de la ciudad: sillones hundidos, una pared de juegos de mesa y postres que salen del horno a las cinco. El café es de tueste local y el plan es quedarse. Ideal para noches de catán y pretextos para no irse temprano.",
    conocidoPor: [
      "Pared de juegos de mesa",
      "Pastel de chocolate a las cinco",
      "Noches largas entre semana",
    ],
    precio: 1,
    amenidades: ["wifi", "postres", "cierraTarde", "estacionamiento"],
    moods: ["con-amigos", "tranquilo"],
    horario: [
      { dias: "Lun – Dom", horas: "12:00 – 23:00" },
    ],
    fotos: {
      hero: "1524350876685-274059332603",
      galeria: ["1445116572660-236099ec97a0", "1512568400610-62da28bc8a13"],
    },
  },
];

export const COLECCIONES: Coleccion[] = [
  {
    slug: "para-trabajar",
    titulo: "Para trabajar toda la mañana",
    bajada: "Wifi que no falla, enchufes de sobra y nadie que te apure.",
    cafes: ["punto-y-coma", "bruma", "norte-tostadores", "alba-y-grano"],
  },
  {
    slug: "joyas-escondidas",
    titulo: "Joyas escondidas",
    bajada: "Los lugares que se pasan en voz baja, de mesa en mesa.",
    cafes: ["jardin-cuatro", "la-tejedora", "cerro-verde"],
  },
  {
    slug: "nuevos-este-mes",
    titulo: "De estreno",
    bajada: "Recién abiertos y ya con razones para volver.",
    cafes: ["obsidiana", "jardin-cuatro", "alba-y-grano"],
  },
  {
    slug: "los-infalibles",
    titulo: "Los infalibles",
    bajada: "Los que nunca fallan, a cualquier hora.",
    cafes: ["madrugada", "cerro-verde", "el-solar", "punto-y-coma", "la-vereda"],
  },
  {
    slug: "para-una-cita",
    titulo: "Para una cita",
    bajada: "Luz bonita, mesas para dos y sobremesa garantizada.",
    cafes: ["casa-almendra", "la-vereda", "el-solar"],
  },
  {
    slug: "donde-van-los-regulares",
    titulo: "Donde van los regulares",
    bajada: "Sin poses: café bueno, trato de siempre, precios honestos.",
    cafes: ["madrugada", "cerro-verde", "punto-y-coma", "faro-sur"],
  },
];

export const RUTAS: Ruta[] = [
  {
    slug: "sabado-en-san-pedro",
    titulo: "Sábado en San Pedro",
    bajada: "Tres cafés para una mañana lenta del lado del valle.",
    descripcion:
      "Empieza con calma, desayuna bien y termina con un espresso que te devuelva a la ciudad. Esta ruta cruza San Pedro de este a oeste sin prisa: son menos de veinte minutos de coche en total, o una buena caminata entre las dos primeras paradas.",
    zona: "San Pedro",
    duracion: "Una mañana (4 h aprox.)",
    foto: "1541167760496-1628856ab772",
    paradas: [
      {
        cafe: "casa-almendra",
        momento: "9:00 — El desayuno",
        tip: "Pide el pan francés antes de que se acabe; las mesas del ventanal se van primero.",
      },
      {
        cafe: "jardin-cuatro",
        momento: "11:30 — La pausa",
        tip: "La puerta verde no tiene letrero. Si el jardín está lleno, vale la pena esperar diez minutos.",
      },
      {
        cafe: "alba-y-grano",
        momento: "13:00 — El cierre",
        tip: "Sube a la terraza del segundo piso: el cortado sabe mejor con la Sierra enfrente.",
      },
    ],
  },
  {
    slug: "barrio-antiguo-de-taza-en-taza",
    titulo: "Barrio Antiguo de taza en taza",
    bajada: "El casco histórico en tres paradas, caminando todo el día.",
    descripcion:
      "El centro se camina, y con café en mano se camina mejor. Esta ruta empieza temprano en un bar de espresso de banqueta y termina en el patio donde cae la tarde. Todo queda a menos de quince minutos a pie.",
    zona: "Centro y Barrio Antiguo",
    duracion: "Un día completo, a pie",
    foto: "1521017432531-fbd92d768814",
    paradas: [
      {
        cafe: "madrugada",
        momento: "8:30 — El arranque",
        tip: "Espresso doble en barra y una concha de la panadería de al lado. Desayuno de campeonato.",
      },
      {
        cafe: "la-vereda",
        momento: "11:00 — El patio",
        tip: "Busca mesa bajo las enredaderas y déjate el pan de elote de postre, no de entrada.",
      },
      {
        cafe: "el-solar",
        momento: "17:00 — La tarde",
        tip: "Si es sábado, llegas justo al mercadito. El cold brew es el cierre correcto.",
      },
    ],
  },
  {
    slug: "tour-de-tercera-ola",
    titulo: "Tour de tercera ola",
    bajada: "Cuatro barras para entender el café de especialidad regio.",
    descripcion:
      "De un tostador del centro a la barra más nueva del poniente: cuatro paradas para probar métodos distintos, comparar tuestes y salir hablando de notas de cata sin pena. Recomendada para un día libre, con coche.",
    zona: "Centro, Obispado y San Jerónimo",
    duracion: "Un día, en coche",
    foto: "1507133750040-4a8f57021571",
    paradas: [
      {
        cafe: "norte-tostadores",
        momento: "9:00 — La escuela",
        tip: "Pregunta qué tostaron esta semana y pídelo en V60. Aquí empieza todo.",
      },
      {
        cafe: "bruma",
        momento: "11:30 — El espresso",
        tip: "Su tueste claro en espresso divide opiniones. Fórmate la tuya.",
      },
      {
        cafe: "alba-y-grano",
        momento: "14:00 — El contraste",
        tip: "Especialidad a ritmo corporativo: el mismo cuidado, otra velocidad.",
      },
      {
        cafe: "obsidiana",
        momento: "16:30 — El remate",
        tip: "Cierra con la barra de temporada. Si está el capuchino de cacao con chile, no lo pienses.",
      },
    ],
  },
];

export const RETOS: Reto[] = [
  {
    id: "cronista-del-casco",
    titulo: "Cronista del casco",
    descripcion: "Visita los tres clásicos del centro: Madrugada, La Vereda y El Solar.",
    insignia: "Cronista",
    tipo: "cafes",
    meta: 3,
    cafes: ["madrugada", "la-vereda", "el-solar"],
  },
  {
    id: "cinco-nuevos",
    titulo: "Cinco nuevos este mes",
    descripcion: "Sal de tu café de siempre: visita cinco lugares distintos.",
    insignia: "Explorador",
    tipo: "visitas",
    meta: 5,
  },
  {
    id: "coleccionista",
    titulo: "Coleccionista",
    descripcion: "Guarda cinco cafés que quieras recordar (o presumir).",
    insignia: "Coleccionista",
    tipo: "favoritos",
    meta: 5,
  },
  {
    id: "catador-de-metodos",
    titulo: "Catador de métodos",
    descripcion: "Recorre las tres barras de especialidad: Norte, Bruma y Obsidiana.",
    insignia: "Catador",
    tipo: "cafes",
    meta: 3,
    cafes: ["norte-tostadores", "bruma", "obsidiana"],
  },
  {
    id: "lado-del-valle",
    titulo: "Del lado del valle",
    descripcion: "Un fin de semana sampedrino: Casa Almendra, Jardín Cuatro y Alba y Grano.",
    insignia: "Valle",
    tipo: "cafes",
    meta: 3,
    cafes: ["casa-almendra", "jardin-cuatro", "alba-y-grano"],
  },
];

/**
 * Rumbos: la ciudad se navega por barrio, como se recomienda un café
 * en la vida real. Las zonas "proximamente" muestran a dónde crece Cafeto.
 */
export const ZONAS: Zona[] = [
  { slug: "barrio-antiguo", nombre: "Barrio Antiguo", abrev: "BA", cafes: ["la-vereda", "el-solar"] },
  { slug: "san-pedro", nombre: "San Pedro", abrev: "SP", cafes: ["casa-almendra", "jardin-cuatro", "alba-y-grano"] },
  { slug: "centro", nombre: "Centro", abrev: "CE", cafes: ["norte-tostadores", "madrugada"] },
  { slug: "cumbres", nombre: "Cumbres", abrev: "CU", cafes: ["cerro-verde"] },
  { slug: "san-jeronimo", nombre: "San Jerónimo", abrev: "SJ", cafes: ["obsidiana"] },
  { slug: "la-purisima", nombre: "La Purísima", abrev: "LP", cafes: ["la-tejedora"] },
  { slug: "tec", nombre: "Tec", abrev: "TEC", cafes: ["punto-y-coma"] },
  { slug: "contry", nombre: "Contry", abrev: "CO", cafes: ["faro-sur"] },
  { slug: "san-nicolas", nombre: "San Nicolás", abrev: "SN", cafes: [], proximamente: true },
  { slug: "guadalupe", nombre: "Guadalupe", abrev: "GP", cafes: [], proximamente: true },
];

export function getZona(slug: string): Zona | undefined {
  return ZONAS.find((z) => z.slug === slug);
}

export function cafesDeZona(zona: Zona): Cafe[] {
  return zona.cafes.map((s) => getCafe(s)).filter((c): c is Cafe => Boolean(c));
}

/** Posiciones en el mapa estilizado de Monterrey (viewBox 0 0 400 460). */
export const COORDS_MAPA: Record<string, [number, number]> = {
  "cerro-verde": [96, 96],
  obsidiana: [84, 208],
  bruma: [152, 196],
  "la-tejedora": [190, 168],
  "norte-tostadores": [232, 176],
  madrugada: [214, 206],
  "la-vereda": [268, 206],
  "el-solar": [292, 228],
  "casa-almendra": [142, 320],
  "jardin-cuatro": [104, 352],
  "alba-y-grano": [196, 330],
  "punto-y-coma": [252, 338],
  "faro-sur": [306, 376],
};

/** Semilla del feed: momentos, no reseñas. */
export const POSTS_SEMILLA: PostComunidad[] = [
  { id: "p1", tipo: "checkin", quien: "Andrea", tono: 2, cafe: "la-vereda", hace: "hace 20 min", sello: true, antojosBase: 5,
    texto: "El pan de elote no era leyenda. Patio para quedarse toda la tarde." },
  { id: "p2", tipo: "cafe", quien: "Obsidiana", tono: 3, cafe: "obsidiana", hace: "hace 2 h", conFoto: true, antojosBase: 11,
    texto: "Barra de temporada nueva: capuchino de cacao con chile. Del 10 al 31 de julio." },
  { id: "p3", tipo: "insignia", quien: "Luis", tono: 1, hace: "hace 5 h", insignia: "Catador de métodos", antojosBase: 7,
    texto: "Norte, Bruma y Obsidiana en una semana. Se dice fácil." },
  { id: "p4", tipo: "checkin", quien: "Marifer", tono: 0, cafe: "jardin-cuatro", hace: "ayer", sello: true, conFoto: true, antojosBase: 14,
    texto: "Encontramos la puerta verde. No les digo dónde es… ah no, sí: Casco de San Pedro." },
  { id: "p5", tipo: "checkin", quien: "Diego", tono: 3, cafe: "punto-y-coma", hace: "ayer", antojosBase: 4,
    texto: "Refill infinito + enchufes. Aquí se terminó la tesis, lo juro." },
  { id: "p6", tipo: "cafe", quien: "El Solar", tono: 1, cafe: "el-solar", hace: "hace 2 días", antojosBase: 9,
    texto: "Este sábado: mercadito de productores desde las 10:00. Traigan a sus perros." },
];

export function getCafe(slug: string): Cafe | undefined {
  return CAFES.find((c) => c.slug === slug);
}

export function getRuta(slug: string): Ruta | undefined {
  return RUTAS.find((r) => r.slug === slug);
}

export function getColeccion(slug: string): Coleccion | undefined {
  return COLECCIONES.find((c) => c.slug === slug);
}

export function cafesDeColeccion(coleccion: Coleccion): Cafe[] {
  return coleccion.cafes
    .map((slug) => getCafe(slug))
    .filter((c): c is Cafe => Boolean(c));
}

/** Cafés relacionados: misma zona o mood compartido, sin repetir el actual. */
export function cafesRelacionados(cafe: Cafe, cantidad = 3): Cafe[] {
  const puntaje = (otro: Cafe) => {
    let p = 0;
    if (otro.sector === cafe.sector) p += 2;
    if (otro.zona === cafe.zona) p += 2;
    p += otro.moods.filter((m) => cafe.moods.includes(m)).length;
    return p;
  };
  return CAFES.filter((c) => c.slug !== cafe.slug)
    .sort((a, b) => puntaje(b) - puntaje(a))
    .slice(0, cantidad);
}

export const PRECIO_SIMBOLO: Record<1 | 2 | 3, string> = {
  1: "$",
  2: "$$",
  3: "$$$",
};

/** Enlace de indicaciones sin copiar a Maps: solo el dato práctico. */
export function urlComoLlegar(cafe: Cafe): string {
  const consulta = encodeURIComponent(
    `${cafe.nombre}, ${cafe.direccion}, ${cafe.ciudad}`,
  );
  return `https://www.google.com/maps/search/?api=1&query=${consulta}`;
}
