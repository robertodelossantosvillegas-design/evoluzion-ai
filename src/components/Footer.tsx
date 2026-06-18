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

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/521234567890",
    path: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.04 20.15a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 5.82 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.4-8.08 8.4Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.25 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.16 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.25 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.25-1.77-.41-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07Zm0 4.32a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8.08a3.18 3.18 0 1 1 0-6.36 3.18 3.18 0 0 1 0 6.36Zm6.24-8.27a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V9.96H5.56v8.38h2.78ZM6.95 8.74a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22Zm11.39 9.6v-4.59c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13H10.1c.04.78 0 8.38 0 8.38h2.79v-4.68c0-.25.02-.5.09-.68.2-.5.66-1.01 1.42-1.01 1 0 1.4.76 1.4 1.88v4.49h2.54Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z",
  },
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
                  href="https://wa.me/521234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> +52 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2024 Evoluzion. Todos los derechos reservados.</p>
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
