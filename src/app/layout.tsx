import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
