import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evoluzion | Automatización con IA para tu negocio",
  description:
    "Implementamos inteligencia artificial, automatizaciones y soluciones digitales que trabajan por ti las 24 horas del día. Chatbots, agentes de voz, CRM, páginas web y más.",
  keywords: [
    "automatización con IA",
    "chatbots",
    "agentes de voz IA",
    "CRM inteligente",
    "automatización WhatsApp",
    "agencia de IA México",
    "páginas web",
  ],
  authors: [{ name: "Evoluzion" }],
  openGraph: {
    title: "Evoluzion | Automatización con IA para tu negocio",
    description:
      "Automatiza tu negocio. Vende más. Trabaja menos. Soluciones de IA para PYMEs en México.",
    type: "website",
    locale: "es_MX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="bg-[#0A0A0F] text-[#F0F0F8]">{children}</body>
    </html>
  );
}
