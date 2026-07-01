import { Mail, MessageCircle } from "lucide-react";

const cols = [
  {
    title: "Servicios",
    links: [
      { label: "Automatización con IA", href: "#servicios" },
      { label: "Chatbots IA", href: "#servicios" },
      { label: "Agentes de Voz", href: "#servicios" },
      { label: "Páginas Web", href: "#precios" },
      { label: "Tarjetas Digitales", href: "#precios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Proceso", href: "#proceso" },
      { label: "Casos de uso", href: "#casos-de-uso" },
      { label: "Precios", href: "#precios" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

// TODO: Agregar perfiles reales de redes sociales cuando estén creados.
// Solo se muestra WhatsApp por ahora para evitar links genéricos.
const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/528127591172",
    path: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.04 20.15a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.4-8.08 8.4Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z",
  },
  // TODO: Instagram — reemplazar href cuando el perfil esté listo
  // { label: "Instagram", href: "https://instagram.com/evoluzion.mx", path: "..." },
  // TODO: LinkedIn — reemplazar href cuando el perfil esté listo
  // { label: "LinkedIn", href: "https://linkedin.com/company/evoluzion", path: "..." },
  // TODO: Facebook — reemplazar href cuando el perfil esté listo
  // { label: "Facebook", href: "https://facebook.com/evoluzion", path: "..." },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#inicio"
              aria-label="Evoluzion"
              className="flex cursor-pointer items-center"
            >
              <svg
                width="140"
                height="32"
                viewBox="0 0 360 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M 8 18 Q 8 8 18 8 L 52 8"
                    stroke="#5B5BFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 52 8 L 18 52"
                    stroke="url(#footGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 18 52 L 52 52 Q 62 52 62 42"
                    stroke="#00E5C0"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="62" cy="36" r="3.5" fill="#00E5C0" />
                  <circle cx="62" cy="36" r="6" fill="#00E5C0" opacity="0.15" />
                  <defs>
                    <linearGradient
                      id="footGrad"
                      x1="52"
                      y1="8"
                      x2="18"
                      y2="52"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#5B5BFF" />
                      <stop offset="100%" stopColor="#00E5C0" />
                    </linearGradient>
                  </defs>
                </g>
                <text
                  x="84"
                  y="50"
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="700"
                  fontSize="38"
                  letterSpacing="-1"
                  fill="white"
                >
                  Evolu
                  <tspan fill="#5B5BFF">z</tspan>
                  ion
                </text>
              </svg>
            </a>
            <p className="mt-4 max-w-xs font-mono text-sm font-medium text-gradient-blue">
              Tu negocio en automático. Tu crecimiento en evolución.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Automatización con inteligencia artificial para que tu negocio
              venda más y trabajes menos.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Monterrey, Nuevo León · Atendemos todo México
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-accent/40 hover:text-accent-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="cursor-pointer text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:hola@evoluzion.mx"
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <Mail className="h-4 w-4" /> hola@evoluzion.mx
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/528127591172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> +52 81 2759 1172
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Evoluzion. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a
              href="#"
              className="cursor-pointer transition-colors duration-200 hover:text-white"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="cursor-pointer transition-colors duration-200 hover:text-white"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
