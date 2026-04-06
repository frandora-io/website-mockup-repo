import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Il Nonno NYC — Boutique Italian Restaurant in Astoria",
  description:
    "An intimate, 20-seat Italian restaurant in Astoria, NY. Elevated but never pretentious. Reserve your table, order online, or inquire about catering.",
  keywords: [
    "Italian restaurant Astoria",
    "Il Nonno NYC",
    "boutique Italian NYC",
    "date night restaurant Queens",
    "Italian food LIC",
    "catering Astoria",
  ],
  openGraph: {
    title: "Il Nonno NYC",
    description: "Boutique Italian dining in the heart of Astoria.",
    url: "https://www.ilnonnonyc.com",
    siteName: "Il Nonno NYC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ink text-cream font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
