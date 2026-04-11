import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Visit Us | Il Nonno NYC",
  description:
    "Find Il Nonno NYC in Astoria, Queens. Address, hours, directions, subway, and parking info for our intimate 20-seat Italian restaurant.",
};

const ADDRESS_LINE_1 = "31-14 Broadway";
const ADDRESS_LINE_2 = "Astoria, NY 11106";
const PHONE_DISPLAY = "(718) 123-4567";
const PHONE_TEL = "+17181234567";
const MAPS_QUERY = encodeURIComponent(
  `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`
);
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export default function LocationPage() {
  return (
    <>
      {/* ───────── FIRST FOLD — BOLD ───────── */}
      <section
        aria-label="Visit Il Nonno"
        className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0"
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80"
          alt="Il Nonno storefront on Broadway, Astoria"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">
              Astoria, Queens
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl text-cream leading-[0.95] mb-8">
              Visit <span className="italic text-gold">Il Nonno</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/85 font-light leading-relaxed mb-10 text-balance">
              A 20-seat table tucked between the N/W tracks and the East River.
              Come hungry. Leave a little louder than you arrived.
            </p>

            {/* Address card */}
            <div className="border border-gold/40 bg-ink/60 backdrop-blur-sm p-6 md:p-8 mb-8">
              <p className="text-xs tracking-widest uppercase text-gold mb-3">
                Find Us
              </p>
              <address className="not-italic font-serif text-2xl md:text-3xl text-cream leading-snug mb-4">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </address>
              <p className="text-cream-muted">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="hover:text-gold transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm tracking-widest uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-dark transition-colors"
              >
                Get Directions
              </a>
              <Link
                href="/contact"
                className="text-center text-sm tracking-widest uppercase border border-cream text-cream px-8 py-4 hover:bg-cream hover:text-ink transition-colors"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SECOND FOLD — DETAILS + MAP ───────── */}
      <section
        aria-label="Location Details"
        className="py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                Hours
              </p>
              <ul className="text-cream-muted space-y-1.5 text-sm md:text-base">
                <li className="flex justify-between border-b border-border/60 pb-1.5">
                  <span>Wednesday — Thursday</span>
                  <span className="text-cream">5 – 10 PM</span>
                </li>
                <li className="flex justify-between border-b border-border/60 pb-1.5">
                  <span>Friday — Saturday</span>
                  <span className="text-cream">5 – 11 PM</span>
                </li>
                <li className="flex justify-between border-b border-border/60 pb-1.5">
                  <span>Sunday</span>
                  <span className="text-cream">4 – 9 PM</span>
                </li>
                <li className="flex justify-between pt-1.5">
                  <span>Monday — Tuesday</span>
                  <span className="text-cream-muted/60">Closed</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                Subway
              </p>
              <p className="text-cream-muted leading-relaxed text-sm md:text-base">
                <span className="text-cream font-medium">N / W</span> to
                Broadway — 2-minute walk.
                <br />
                <span className="text-cream font-medium">R / M</span> to
                Steinway St — 8-minute walk.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                Parking
              </p>
              <p className="text-cream-muted leading-relaxed text-sm md:text-base">
                Free street parking is usually available on side streets.
                Paid lots on 31st St and 34th Ave within a short walk.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                Accessibility
              </p>
              <p className="text-cream-muted leading-relaxed text-sm md:text-base">
                Our dining room is on the ground floor and wheelchair
                accessible. Please let us know about any accommodations when
                you reserve.
              </p>
            </div>
          </div>

          {/* Map column */}
          <div className="lg:col-span-3">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] border border-border overflow-hidden">
              <iframe
                title="Map to Il Nonno NYC"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale contrast-110"
                allowFullScreen
              />
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-cream hover:border-cream transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
