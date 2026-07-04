This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Este repositorio contiene dos productos, cada uno con su propia identidad (grupos de rutas con root layouts separados):

- **Evoluzion** — sitio de la agencia: `/`, `/propuesta`, `/diagnostico` (`src/app/(evoluzion)/`)
- **Cafeto** — app de descubrimiento de cafés en Monterrey, en español: todo bajo `/cafeto` (`src/app/(cafeto)/`)

## Cafeto

App photography-first para descubrir cafés (MVP con datos semilla en `src/lib/cafeto/data.ts`):

| Ruta | Qué es |
|------|--------|
| `/cafeto` | Descubrimiento editorial: colecciones curadas y todos los cafés |
| `/cafeto/cafes/[slug]` | Perfil premium de cada café (sin reseñas ni estrellas, por diseño) |
| `/cafeto/ruleta` | Ruleta de café: azar con filtros de plan y zona |
| `/cafeto/rutas` | Rutas curadas de varias paradas, con progreso |
| `/cafeto/retos` | Retos ligeros con insignias (progreso vía visitas/guardados) |
| `/cafeto/favoritos` | Cafés guardados (localStorage) |
| `/cafeto/negocios` | Propuesta de valor y planes para dueños de cafeterías |
| `/cafeto/negocios/panel` | Panel demo del dueño: métricas, perfil y suscripción |

Documentación de producto: `docs/cafeto/` (CONTEXT, PRD, BRAND) · Sistema de diseño: `design-system/cafeto/MASTER.md`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
