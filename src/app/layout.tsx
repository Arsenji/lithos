import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Jost, Spectral } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
});

const spectral = Spectral({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LITHOS — украшения из натуральных камней",
    template: "%s — LITHOS",
  },
  description: siteConfig.description,
  openGraph: {
    title: "LITHOS — украшения из натуральных камней",
    description: siteConfig.description,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: "/images/hero.jpg", alt: "Браслет LITHOS на тёмном камне" }],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${jost.variable} ${spectral.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
