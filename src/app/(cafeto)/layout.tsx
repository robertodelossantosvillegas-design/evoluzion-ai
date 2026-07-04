import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./cafeto.css";
import { CafetoNav, BarraInferior } from "@/components/cafeto/CafetoNav";
import CafetoFooter from "@/components/cafeto/CafetoFooter";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cafeto — Descubre el mejor café de Monterrey",
    template: "%s · Cafeto",
  },
  description:
    "Cafés de Monterrey escogidos uno por uno. Descubre lugares para trabajar, platicar o perderte un rato: ruleta, rutas y retos para que el café siempre sea un plan.",
  keywords: [
    "café Monterrey",
    "cafeterías Monterrey",
    "café de especialidad",
    "dónde tomar café",
    "Cafeto",
  ],
  authors: [{ name: "Cafeto" }],
  openGraph: {
    title: "Cafeto — Descubre el mejor café de Monterrey",
    description:
      "Cafés escogidos uno por uno. Ruleta, rutas y retos para que el café siempre sea un plan.",
    type: "website",
    locale: "es_MX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF6EE",
};

export default function CafetoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${fraunces.variable} ${instrumentSans.variable} antialiased`}
    >
      <body className="bg-crema text-espresso">
        <CafetoNav />
        <div className="con-tabbar">
          {children}
          <CafetoFooter />
        </div>
        <BarraInferior />
      </body>
    </html>
  );
}
