import Link from "next/link";

export default function CafetoFooter() {
  return (
    <footer className="border-t border-linea bg-crema-2/60">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="flex items-baseline gap-1.5 font-serif text-2xl font-semibold tracking-tight">
              Cafeto
              <span
                aria-hidden
                className="mb-0.5 inline-block h-2 w-2 rounded-full bg-terracota"
              />
            </p>
            <p className="mt-3 text-sm leading-relaxed text-espresso-2">
              Los cafés de Monterrey, escogidos uno por uno. Menos listas, más
              ganas de salir por un café.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <p className="font-medium text-espresso">Explora</p>
              <ul className="mt-3 space-y-2 text-espresso-2">
                <li>
                  <Link className="transition-colors hover:text-terracota-2" href="/cafeto/">
                    Descubre
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-terracota-2" href="/cafeto/ruleta/">
                    Ruleta de café
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-terracota-2" href="/cafeto/mapa/">
                    Mapa del café
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-terracota-2" href="/cafeto/comunidad/">
                    Comunidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-espresso">Cafeterías</p>
              <ul className="mt-3 space-y-2 text-espresso-2">
                <li>
                  <Link className="transition-colors hover:text-terracota-2" href="/cafeto/negocios/">
                    Únete a Cafeto
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors hover:text-terracota-2"
                    href="/cafeto/negocios/panel/"
                  >
                    Panel de ejemplo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-humo">
          © 2026 Cafeto · Hecho en Monterrey. Primero tu ciudad, luego todo
          México.
        </p>
      </div>
    </footer>
  );
}
