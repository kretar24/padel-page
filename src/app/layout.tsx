import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epic Padel | Canchas de Pádel en Grecia, Alajuela",
  description:
    "Las primeras canchas de pádel en Grecia, Alajuela. 3 canchas profesionales. Abierto 3PM–10PM. Reserva ahora sin salir de la zona.",
  openGraph: {
    title: "Epic Padel | Canchas de Pádel en Grecia, Alajuela",
    description:
      "Las primeras canchas de pádel en Grecia, Alajuela. 3 canchas profesionales. Abierto 3PM–10PM. Reserva ahora sin salir de la zona.",
    type: "website",
    locale: "es_CR",
    siteName: "Epic Padel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Padel | Canchas de Pádel en Grecia, Alajuela",
    description:
      "Las primeras canchas de pádel en Grecia, Alajuela. Abierto 3PM–10PM.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Epic Padel",
  description: "Las primeras canchas de pádel en Grecia, Alajuela, Costa Rica.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Canchas en Creta",
    addressLocality: "Grecia",
    addressRegion: "Alajuela",
    addressCountry: "CR",
  },
  telephone: "+50689527591",
  openingHours: "Mo-Su 15:00-22:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.065,
    longitude: -84.32,
  },
  priceRange: "$30–$40",
  sport: "Padel",
  numberOfRooms: 3,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-navy">
        {children}
      </body>
    </html>
  );
}
