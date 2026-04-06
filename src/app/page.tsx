import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO — full bleed, light overlay, editorial */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
          alt="Il Nonno dining room"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-canvas/30" />

        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-ink/70 mb-6">Astoria, New York</p>
          <h1 className="font-script text-8xl md:text-[10rem] text-ink leading-none mb-6">
            Il Nonno
          </h1>
          <p className="font-serif text-xl md:text-2xl text-ink/80 font-light tracking-wide mb-10">
            An intimate Italian table for twenty
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center text-xs tracking-[0.2em] uppercase bg-ink text-canvas px-10 py-4 hover:bg-wine transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto text-center text-xs tracking-[0.2em] uppercase border border-ink text-ink px-10 py-4 hover:bg-ink hover:text-canvas transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs tracking-[0.3em] uppercase text-ink/50">Scroll</p>
          <div className="w-px h-10 bg-ink/30" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="py-6 border-y border-border overflow-hidden">
        <div className="flex items-center justify-center gap-12 md:gap-24 flex-wrap px-6 text-center">
          {[
            ["20 Seats", "Intimate by design"],
            ["Family-Rooted", "Est. Astoria, NY"],
            ["Seasonally Driven", "Non-traditional Italian"],
            ["Date Night", "Dimmed lights, white linens"],
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="font-serif text-lg text-ink">{title}</p>
              <p className="text-xs tracking-widest uppercase text-ink-muted mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL STORY — text left, tall image right */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs tracking-[0.3em] uppercase text-wine mb-5">Our Philosophy</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-ink mb-8 leading-tight">
            A table that<br />feels like home
          </h2>
          <div className="w-12 h-px bg-ink mb-8" />
          <p className="text-ink-muted leading-relaxed mb-4 text-[15px]">
            Il Nonno was born from a simple belief: that the best meals happen at small tables, with good people, and no pretense. We are a 20-seat restaurant where every guest is known by name and every dish carries a story.
          </p>
          <p className="text-ink-muted leading-relaxed mb-10 text-[15px]">
            We are not a red-sauce joint. We are Italian food reinterpreted — honoring the classics while following the seasons and our own creative instincts.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-ink hover:text-wine transition-colors"
          >
            Read Our Story <span className="w-8 h-px bg-current inline-block" />
          </Link>
        </div>
        <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85"
            alt="Restaurant interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* FULL-BLEED IMAGE */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1800&q=80"
          alt="Dining atmosphere"
          fill
          className="object-cover object-center"
        />
      </section>

      {/* MENU TEASER — editorial columns */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <p className="text-xs tracking-[0.3em] uppercase text-wine mb-4">The Menu</p>
            <h2 className="font-serif text-5xl font-light text-ink leading-tight">
              Italian,<br />re-imagined
            </h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {[
              { course: "Antipasti", dish: "Polpo alla Brace", note: "Grilled octopus, cannellini purée, Calabrian chili oil" },
              { course: "Primi", dish: "Tagliolini al Limone", note: "Handmade egg pasta, preserved lemon, bottarga" },
              { course: "Secondi", dish: "Branzino al Forno", note: "Whole roasted sea bass, capers, white wine jus" },
              { course: "Dolci", dish: "Tiramisu della Casa", note: "Espresso-soaked, mascarpone, dark cacao" },
            ].map((item) => (
              <div key={item.dish} className="border-t border-border pt-4">
                <p className="text-xs tracking-[0.2em] uppercase text-wine mb-2">{item.course}</p>
                <p className="font-serif text-xl text-ink mb-1">{item.dish}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/menu"
            className="text-xs tracking-[0.2em] uppercase border border-ink text-ink px-10 py-4 hover:bg-ink hover:text-canvas transition-colors"
          >
            Full Menu
          </Link>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1 px-1">
        {[
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=75", alt: "Pasta dish" },
          { src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=75", alt: "Wine service" },
          { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=75", alt: "Plated dish" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75", alt: "Dining room" },
        ].map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden bg-surface">
            <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </section>

      {/* CATERING — editorial, text-centered */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-wine mb-5">Private Events & Catering</p>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-ink mb-6 leading-tight">
          Bring Il Nonno<br />to your occasion
        </h2>
        <div className="w-12 h-px bg-ink mx-auto mb-8" />
        <p className="text-ink-muted leading-relaxed mb-10 text-[15px]">
          Corporate dinners, private gatherings, intimate celebrations — we bring the same care and hospitality to every event, regardless of size.
        </p>
        <Link
          href="/catering"
          className="inline-block text-xs tracking-[0.2em] uppercase border border-ink text-ink px-10 py-4 hover:bg-ink hover:text-canvas transition-colors"
        >
          Inquire About Catering
        </Link>
      </section>

      {/* RESERVATION BANNER */}
      <section className="bg-ink text-canvas py-20 px-6 text-center">
        <p className="font-script text-5xl md:text-6xl mb-4">Ready for a night out?</p>
        <p className="text-canvas/60 text-sm mb-10 tracking-wide">We seat 20 guests. Tables fill quickly — reserve yours now.</p>
        <Link
          href="/contact"
          className="inline-block text-xs tracking-[0.2em] uppercase border border-canvas text-canvas px-10 py-4 hover:bg-canvas hover:text-ink transition-colors"
        >
          Reserve Your Table
        </Link>
      </section>
    </>
  );
}
