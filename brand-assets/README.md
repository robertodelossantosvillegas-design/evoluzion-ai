# Evoluzion — Kit de Logos

## ¿Qué archivo usar?

| Necesito esto... | Usa este archivo |
|---|---|
| Favicon del sitio web | `png/icon-square-32.png` o `png/icon-square-16.png` |
| Ícono de app (iOS/Android, Apple touch icon) | `png/icon-square-180.png` (iOS), `png/icon-square-192.png` y `png/icon-square-512.png` (Android/PWA) |
| Foto de perfil de WhatsApp Business | `png/whatsapp-profile-512.jpg` |
| Foto de perfil de Instagram/Facebook/LinkedIn | `png/icon-square-512.png` o `png/icon-square-1024.png` |
| Logo en documentos, presentaciones, fondo oscuro | `png/logo-full-dark-bg-960.png` (texto blanco, fondo transparente — colócalo sobre Obsidian/negro) |
| Logo en documentos, presentaciones, fondo claro | `png/logo-full-light-bg-960.png` (texto negro, fondo transparente — colócalo sobre blanco) |
| Logo sobre una foto o fondo de color | `png/logo-full-white-mono-960.png` (versión monocromática blanca) |
| Imprenta / lonas / tarjetas (alta resolución) | versión `-1920` de cualquiera de los anteriores, o los archivos `.svg` (se pueden escalar a cualquier tamaño sin perder calidad) |
| Editar el logo o usarlo en otra app/diseño | los archivos en `svg/` — son vectores, escalables a cualquier tamaño |

## Estructura

```
brand-assets/
├── svg/                          ← archivos maestros (editables, calidad infinita)
│   ├── logo-mark.svg             ← solo el símbolo "Z", fondo transparente
│   ├── logo-mark-square-bg.svg   ← símbolo "Z" sobre fondo Obsidian (para íconos de app)
│   ├── logo-full-dark-bg.svg     ← logo completo, texto blanco (fondo oscuro)
│   ├── logo-full-light-bg.svg    ← logo completo, texto negro (fondo claro)
│   └── logo-full-white-mono.svg  ← logo completo, todo en blanco (sobre fotos/color)
└── png/                          ← exportados en los tamaños más usados
    ├── icon-square-*.png         ← 16, 32, 48, 64, 128, 180, 192, 256, 384, 512, 1024 px
    ├── mark-transparent-*.png    ← solo el símbolo, sin fondo: 64, 128, 256, 512, 1024 px
    ├── whatsapp-profile-512.jpg  ← listo para subir directo a WhatsApp Business
    └── logo-full-*-bg-*.png      ← logo completo en 480 / 960 / 1920 px de ancho
```

## Colores de marca

- Obsidian (fondo): `#0A0A0F`
- Aurora (morado/azul): `#5B5BFF`
- Neon (verde/turquesa): `#00E5C0`
- Tipografía del wordmark: Space Grotesk, weight 700

## Notas

- Los PNG con fondo transparente se ven "vacíos" si los abres en un visor con fondo blanco y el texto es blanco — eso es normal, simplemente colócalos sobre un fondo oscuro y se verán correctamente.
- Si necesitas un tamaño que no está aquí, los `.svg` se pueden volver a exportar a cualquier resolución sin perder nitidez (son vectores).
