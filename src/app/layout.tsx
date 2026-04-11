import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";

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
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "Il Nonno NYC",
    description:
      "An intimate 20-seat Italian restaurant in Astoria, NY. Elevated but never pretentious — rooted in family, legacy, and the art of a proper meal.",
    url: "https://www.ilnonnonyc.com",
    telephone: "+17181234567",
    email: "hello@ilnonnonyc.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Astoria",
      addressRegion: "NY",
      addressCountry: "US",
    },
    servesCuisine: "Italian",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday"],
        opens: "17:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "17:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "16:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="bg-ink text-cream font-sans antialiased">
        <TopBanner />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
