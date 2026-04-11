import Link from "next/link";
import Image from "next/image";
import PopupCTA from "@/components/PopupCTA";

export default function Home() {
  return (
    <>
      <PopupCTA />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
          alt="Il Nonno dining room"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/65" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">
            Astoria, New York
          </p>
          <h1 className="font-serif text-6xl md:text-8xl text-cream mb-6 leading-tight">
            Il Nonno
          </h1>
          <p className="text-lg md:text-xl text-cream/80 font-light leading-relaxed mb-10 text-balance">
            An intimate Italian table for twenty. Elevated but never pretentious — rooted in family, legacy, and the art of a proper meal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center text-sm tracking-widest uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-dark transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              href="/order"
              className="w-full sm:w-auto text-center text-sm tracking-widest uppercase border border-cream text-cream px-8 py-4 hover:bg-cream hover:text-ink transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gold/50 animate-pulse" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-surface py-8 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center md:text-left">
          {[
            ["Intimate", "Only 20 seats"],
            ["Family-Rooted", "Est. Astoria, NY"],
            ["Seasonally Driven", "Non-traditional Italian"],
          ].map(([title, sub]) => (
            <div key={title} className="flex flex-col gap-1">
              <p className="font-serif text-lg text-cream">{title}</p>
              <p className="text-xs tracking-widest uppercase text-cream-muted">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6 leading-tight">
            A table that feels like home
          </h2>
          <p className="text-cream-muted leading-relaxed mb-4">
            Il Nonno was born from a simple belief: that the best meals happen at small tables, with good people, and no pretense. We are a 20-seat restaurant where every guest is known by name and every dish carries a story.
          </p>
          <p className="text-cream-muted leading-relaxed mb-8">
            We are not a red-sauce joint. We are Italian food reinterpreted — honoring the classics while following the seasons and our own creative instincts.
          </p>
          <Link
            href="/about"
            className="inline-block text-sm tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-cream hover:border-cream transition-colors"
          >
            Read Our Story →
          </Link>
        </div>
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80"
            alt="Restaurant interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/10" />
        </div>
      </section>

      {/* ATMOSPHERE GRID */}
      <section className="py-4 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=70", alt: "Candlelit table" },
            { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=70", alt: "Italian pasta" },
            { src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=70", alt: "Wine service" },
            { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=70", alt: "Intimate dining" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">The Menu</p>
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
          Italian, re-imagined
        </h2>
        <p className="text-cream-muted leading-relaxed mb-10">
          Seasonal ingredients, unexpected combinations, and techniques rooted in the Italian canon — but never boxed in by it. We change the menu often. Come often.
        </p>
        <Link
          href="/menu"
          className="inline-block text-sm tracking-widest uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-dark transition-colors"
        >
          View Menu
        </Link>
      </section>

      {/* CATERING CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=1600&q=70"
          alt="Catering event"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Private Events & Catering</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Bring Il Nonno to your table
          </h2>
          <p className="text-cream/70 mb-10 leading-relaxed">
            Corporate dinners, private gatherings, intimate celebrations — we bring the same care and hospitality to every event, regardless of size.
          </p>
          <Link
            href="/catering"
            className="inline-block text-sm tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-ink transition-colors"
          >
            Inquire About Catering
          </Link>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="py-24 px-6 text-center max-w-2xl mx-auto">
        <p className="font-serif text-4xl md:text-5xl text-cream mb-6">
          Ready for a night out?
        </p>
        <p className="text-cream-muted mb-10 leading-relaxed">
          We seat 20 guests. Tables fill quickly, especially on weekends. Reserve yours now.
        </p>
        <Link
          href="/contact"
          className="inline-block text-sm tracking-widest uppercase bg-gold text-ink px-10 py-4 hover:bg-gold-dark transition-colors"
        >
          Reserve Your Table
        </Link>
      </section>
    </>
  );
}
