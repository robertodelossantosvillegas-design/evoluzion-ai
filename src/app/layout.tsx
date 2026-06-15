import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body className="bg-[#0f172a] text-white">{children}</body>
    </html>
  );
}
