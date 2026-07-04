# Design System Master File — Cafeto

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.
>
> Product docs: `docs/cafeto/` (CONTEXT.md → why, PRD.md → what, BRAND.md → how it feels).

---

**Project:** Cafeto — descubrimiento de cafés en Monterrey
**Generated:** 2026-07-04
**Category:** Editorial / Lifestyle premium (photography-first)
**Language:** Español (México), registro cálido y directo

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Fondo (crema cálida) | `#FAF6EE` | `--color-crema` |
| Fondo secundario | `#F3ECDD` | `--color-crema-2` |
| Superficie de tarjeta | `#FFFCF5` | `--color-lienzo` |
| Texto principal (espresso) | `#241A12` | `--color-espresso` |
| Texto secundario | `#4E3D2F` | `--color-espresso-2` |
| Texto atenuado | `#74604E` | `--color-humo` |
| CTA / acento primario (terracota) | `#B65327` | `--color-terracota` |
| CTA hover | `#9C4318` | `--color-terracota-2` |
| Tinte terracota (fondos suaves) | `#F6E3D7` | `--color-terracota-tinte` |
| Acento secundario (bosque) | `#33523B` | `--color-bosque` |
| Tinte bosque | `#E9EFE6` | `--color-bosque-tinte` |
| Acento dorado (texto en insignias) | `#6E5316` | `--color-oro` |
| Tinte dorado | `#F2E7CE` | `--color-oro-tinte` |
| Bordes / líneas | `#E8DFCC` | `--color-linea` |

**Color Notes:** Paleta de tonos de café sobre base neutra cálida — nunca "app toda café/marrón".
Terracota se usa con moderación (CTAs y momentos clave). Bosque para etiquetas/amenidades.
Dorado solo en insignias y badges ("Nuevo"). Prohibido: gradientes morado/azul de SaaS,
navy oscuro + azul eléctrico (esa identidad es de Evoluzion, no de Cafeto).

### Typography

- **Heading Font:** Fraunces (serif editorial, variable con `opsz`) — titulares, nombres de cafés, cifras destacadas
- **Body Font:** Instrument Sans — cuerpo, UI, etiquetas
- **Mood:** editorial, cálido, revista de estilo de vida, confiado, curado
- Carga vía `next/font/google` en `src/app/(cafeto)/layout.tsx` (self-hosted, sin requests a Google en runtime)

### Surfaces & Depth

- Radios generosos y suaves: tarjetas `rounded-3xl` a `rounded-[2rem]`, chips/pills `rounded-full`
- Sombras cálidas (tintadas de espresso, nunca gris frío): `--shadow-taza`, `--shadow-taza-lg`
- Bordes hairline `--color-linea`; nada de glassmorphism oscuro

### Photography

- Photography-first: la fotografía manda; la UI se retira (fondos crema, chrome mínimo)
- Tarjetas de café: aspecto 4:5; heros de perfil 16:9 / 4:3
- Toda imagen vive dentro de `CafePhoto` (`src/components/cafeto/CafePhoto.tsx`):
  fondo degradado cálido determinista + icono de taza mientras carga, y como respaldo si la foto falla
- Zoom sutil al hover (`scale 1.04`, 700 ms) solo dentro de enlaces `group`

### Motion

- Sutil y con propósito: fades/slides suaves (framer-motion, curva `[0.21, 0.47, 0.32, 0.98]`)
- Micro-interacciones 150–300 ms (`transition-colors duration-200`)
- `prefers-reduced-motion` respetado globalmente (CSS) y en la Ruleta (`useReducedMotion`)
- Nada rebotado, nada de confeti: elegante, no "app de juegos"

### Voice (es-MX)

- Frases cortas y seguras; cero relleno corporativo
- Recomendación de alguien con buen gusto, no ficha de directorio
- Sin sobredosis de superlativos; la curaduría implica la calidad
- Sin reseñas públicas ni estrellas — decisión de producto, protegerla en la UI

### Accessibility

- Contraste AA: texto principal `#241A12` sobre crema; atenuado `#74604E` solo para
  texto secundario ≥ 14 px
- Targets táctiles ≥ 44 px (`h-11`), `cursor-pointer` en todo lo clicable
- `focus-visible` con anillo terracota (global en `cafeto.css`)
- Iconos SVG (lucide-react, trazo 1.8), nunca emojis como iconos
- Botones de icono siempre con `aria-label`; toggles con `aria-pressed`

---

## Architecture Notes

- Grupo de rutas propio con root layout independiente: `src/app/(cafeto)/` —
  Cafeto no hereda nada del CSS/branding de Evoluzion (`src/app/(evoluzion)/`)
- Rutas bajo `/cafeto`: `/`, `/cafes/[slug]`, `/ruleta`, `/rutas`, `/rutas/[slug]`,
  `/retos`, `/favoritos`, `/negocios`, `/negocios/panel`
- Datos semilla en `src/lib/cafeto/data.ts`; la ciudad es un **dato** (`cafe.ciudad`),
  no una constante — listo para más ciudades sin rediseño
- Estado local (favoritos, visitas, rutas) en `localStorage` vía
  `src/lib/cafeto/store.ts` (`useSyncExternalStore`)
- Export estático (`output: "export"`): las fotos usan `<img>` con fallback, sin
  optimizador de imágenes de Next
