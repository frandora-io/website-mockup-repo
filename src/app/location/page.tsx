import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Us | Il Nonno NYC",
  description:
    "Find Il Nonno NYC in Astoria, Queens. Address, hours, directions, subway, and parking info for our intimate 20-seat Italian restaurant.",
};

const ADDRESS_LINE_1 = "31-14 Broadway";
const ADDRESS_LINE_2 = "Astoria, NY 11106";
const PHONE_DISPLAY = "(718) 123-4567";
const PHONE_TEL = "+17181234567";
const RESERVATIONS_DISPLAY = "(718) 123-4568";
const RESERVATIONS_TEL = "+17181234568";
const EMAIL = "hello@ilnonnonyc.com";

const MAPS_QUERY = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export default function LocationPage() {
  return (
    <>
      {/* ───────── VISIT US ───────── */}
      <section
        aria-label="Visit Il Nonno"
        className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column — copy */}
          <div>
            <h1 className="font-serif text-6xl md:text-8xl text-gold leading-[0.95] mb-10">
              Visit Us
            </h1>

            <div className="space-y-5 text-cream-muted leading-relaxed text-base md:text-lg max-w-xl">
              <p>
                Tucked into a quiet corner of Astoria, just a few blocks from
                the N/W tracks and a short walk from the East River waterfront,
                Il Nonno sits inside a century-old brick storefront we&rsquo;ve
                lovingly restored into a candlelit 20-seat dining room.
              </p>
              <p>
                We&rsquo;re a short ride from Midtown — 12 minutes on the N
                express — and worlds away from the noise of it. Come early for
                a glass of something cold at the bar, or linger late over
                espresso and amaro.
              </p>
            </div>

            {/* Address / contact table */}
            <dl className="mt-12 grid grid-cols-[auto_1fr] gap-x-8 md:gap-x-12 gap-y-4 text-sm md:text-base max-w-xl">
              <dt className="text-xs md:text-sm tracking-widest uppercase text-cream-muted/70 pt-0.5">
                Address
              </dt>
              <dd className="not-italic text-cream leading-snug">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </dd>

              <dt className="text-xs md:text-sm tracking-widest uppercase text-cream-muted/70 pt-0.5">
                Telephone
              </dt>
              <dd>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-cream hover:text-gold transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </dd>

              <dt className="text-xs md:text-sm tracking-widest uppercase text-cream-muted/70 pt-0.5">
                Reservations
              </dt>
              <dd>
                <a
                  href={`tel:${RESERVATIONS_TEL}`}
                  className="text-cream hover:text-gold transition-colors"
                >
                  {RESERVATIONS_DISPLAY}
                </a>
              </dd>

              <dt className="text-xs md:text-sm tracking-widest uppercase text-cream-muted/70 pt-0.5">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-cream hover:text-gold transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </dd>
            </dl>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 text-xs md:text-sm tracking-[0.3em] uppercase text-gold hover:text-cream transition-colors"
            >
              Open in Maps
              <span aria-hidden="true" className="text-lg">→</span>
            </a>
          </div>

          {/* Right column — map */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[720px] border border-border overflow-hidden">
            <iframe
              title="Map to Il Nonno NYC"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale contrast-110"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ───────── PRACTICAL INFO ───────── */}
      <section
        aria-label="Practical information"
        className="pb-24 md:pb-32 px-6 md:px-10"
      >
        <div className="max-w-7xl mx-auto border-t border-border pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Hours
            </p>
            <ul className="text-cream-muted text-sm space-y-1.5">
              <li>Wed — Thu · 5 – 10 PM</li>
              <li>Fri — Sat · 5 – 11 PM</li>
              <li>Sun · 4 – 9 PM</li>
              <li className="text-cream-muted/60">Closed Mon — Tue</li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Subway
            </p>
            <p className="text-cream-muted text-sm leading-relaxed">
              <span className="text-cream font-medium">N / W</span> to Broadway
              — 2-minute walk.
              <br />
              <span className="text-cream font-medium">R / M</span> to Steinway
              St — 8-minute walk.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Parking
            </p>
            <p className="text-cream-muted text-sm leading-relaxed">
              Free street parking on side streets. Paid lots on 31st St and
              34th Ave within a short walk.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Accessibility
            </p>
            <p className="text-cream-muted text-sm leading-relaxed">
              Ground-floor dining room, wheelchair accessible. Let us know
              about any accommodations when you reserve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
