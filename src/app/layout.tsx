import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://evoluzion.mx"),
  title: "Evoluzion | Automatización con IA para negocios en México",
  description:
    "Chatbots de WhatsApp, agentes de voz y CRM inteligente para PyMEs en Monterrey y todo México. Tu negocio responde, agenda y da seguimiento en automático, 24/7.",
  keywords: [
    "automatización con IA Monterrey",
    "chatbot WhatsApp para negocios México",
    "agencia de IA para PyMEs",
    "agentes de voz IA",
    "CRM inteligente",
    "automatización WhatsApp",
    "automatización de negocios Monterrey",
  ],
  authors: [{ name: "Evoluzion" }],
  openGraph: {
    title: "Evoluzion | Automatización con IA para negocios en México",
    description:
      "Automatiza tu negocio. Vende más. Trabaja menos. Chatbots, agentes de voz y CRM con IA para PyMEs en Monterrey y todo México.",
    type: "website",
    locale: "es_MX",
    // TODO: reemplazar con imagen final de marca cuando esté lista
    // Dimensiones recomendadas: 1200×630 px, formato PNG o JPG
    // La imagen debe mostrar logo + tagline sobre fondo dark con los colores de marca
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evoluzion — Automatización con IA para tu negocio",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Evoluzion",
  description:
    "Agencia de automatización con inteligencia artificial para PyMEs: chatbots de WhatsApp, agentes de voz, CRM inteligente y páginas web.",
  url: "https://evoluzion.mx",
  email: "hola@evoluzion.mx",
  telephone: "+52-81-2759-1172",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monterrey",
    addressRegion: "Nuevo León",
    addressCountry: "MX",
  },
  areaServed: "MX",
  priceRange: "$$",
  sameAs: ["https://wa.me/528127591172"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chatbots con IA para WhatsApp" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agentes de voz con IA" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM inteligente y automatización de ventas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo de páginas web" } },
  ],
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
      <body className="bg-[#0A0A0F] text-[#F0F0F8]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
