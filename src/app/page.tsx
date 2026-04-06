import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      {/* HERO — big type, offset image */}
      <section className="pt-14 md:pt-16 min-h-screen flex flex-col justify-between border-b border-border">
        <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-end gap-0">

          {/* Left: big headline */}
          <div className="flex-1 pt-16 md:pt-20 pb-10 md:pb-16">
            <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-6">
              Astoria, New York — Est.
            </p>
            <h1 className="font-display font-800 text-[13vw] md:text-[9vw] leading-[0.9] uppercase tracking-tight text-ink">
              Il<br />Nonno
            </h1>
            <p className="mt-8 text-ink-soft text-base md:text-lg leading-relaxed max-w-sm">
              An intimate Italian table for twenty. Elevated but never pretentious — rooted in family, legacy, and the art of a proper meal.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="font-display font-700 text-xs tracking-widest uppercase bg-ink text-paper px-8 py-4 hover:bg-red transition-colors"
              >
                Reserve a Table
              </Link>
              <Link
                href="/menu"
                className="font-display font-700 text-xs tracking-widest uppercase border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Right: tall offset image */}
          <div className="w-full md:w-[42%] relative">
            <div className="relative h-[50vh] md:h-[85vh] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900&q=85"
                alt="Handmade pasta"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Red border accent */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-red/30 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6 md:gap-16">
            {[
              ["20", "Seats"],
              ["5", "Days a Week"],
              ["100%", "Family Owned"],
              ["0", "Red Sauce Clichés"],
            ].map(([num, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-display font-800 text-3xl text-red">{num}</span>
                <span className="font-display text-xs font-600 tracking-widest uppercase text-ink-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* STORY — asymmetric grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Image col */}
        <div className="md:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551183053-bf91798d047a?w=800&q=85"
              alt="Kitchen in action"
              fill
              className="object-cover"
            />
          </div>
          {/* Offset red box */}
          <div className="absolute -bottom-6 -right-6 bg-red text-paper p-6 w-40 hidden md:block">
            <p className="font-display font-800 text-3xl leading-none">20</p>
            <p className="font-display text-xs font-600 tracking-widest uppercase mt-1">Seats Only</p>
          </div>
        </div>

        {/* Text col */}
        <div className="md:col-span-7 md:pl-10">
          <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-4">Our Philosophy</p>
          <h2 className="font-display font-800 text-5xl md:text-6xl uppercase leading-tight text-ink mb-8">
            Not your<br />grandfather&apos;s<br />red sauce
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            Il Nonno was born from a simple belief: that the best meals happen at small tables, with good people, and no pretense. We are a 20-seat restaurant where every guest is known by name and every dish carries a story.
          </p>
          <p className="text-ink-soft leading-relaxed mb-10">
            We honor Italian tradition — then we push past it. Seasonal, creative, and rooted in craft. We are not trying to impress you. We are trying to feed you well.
          </p>
          <Link
            href="/about"
            className="font-display font-700 text-xs tracking-widest uppercase inline-flex items-center gap-3 text-ink hover:text-red transition-colors"
          >
            Read Our Story
            <span className="block w-8 h-0.5 bg-current" />
          </Link>
        </div>
      </section>

      {/* FULL-BLEED TEXTURE BREAK */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1572441712957-49b1bb17bb86?w=1800&q=80"
          alt="Fresh pasta"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <blockquote className="font-display font-800 text-4xl md:text-6xl text-paper uppercase leading-tight max-w-3xl">
            &ldquo;Italian in spirit,<br />not in formula&rdquo;
          </blockquote>
        </div>
      </section>

      {/* MENU PREVIEW — numbered grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-14">
          <h2 className="font-display font-800 text-5xl md:text-6xl uppercase leading-tight text-ink">
            What We&apos;re<br />Cooking
          </h2>
          <div className="flex items-end">
            <Link
              href="/menu"
              className="font-display font-700 text-xs tracking-widest uppercase border-2 border-ink text-ink px-8 py-4 hover:bg-ink hover:text-paper transition-colors"
            >
              Full Menu
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
          {[
            { n: "01", course: "Antipasti", name: "Polpo alla Brace", desc: "Grilled octopus, cannellini purée, Calabrian chili oil, celery" },
            { n: "02", course: "Pasta", name: "Tagliolini al Limone", desc: "Handmade egg pasta, preserved lemon, bottarga, brown butter" },
            { n: "03", course: "Secondi", name: "Branzino al Forno", desc: "Whole roasted sea bass, capers, olives, white wine jus" },
            { n: "04", course: "Dolci", name: "Tiramisu della Casa", desc: "Espresso-soaked ladyfingers, mascarpone, dark cacao" },
          ].map((item) => (
            <div key={item.n} className="border-b border-r-0 md:odd:border-r border-border p-8 flex gap-6 items-start">
              <span className="font-display font-800 text-4xl text-red/30 leading-none flex-shrink-0">{item.n}</span>
              <div>
                <p className="font-display text-xs font-600 tracking-widest uppercase text-red mb-2">{item.course}</p>
                <p className="font-display font-700 text-xl uppercase text-ink mb-2">{item.name}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="px-6 pb-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {[
            { src: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=75", alt: "Italian dish" },
            { src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=75", alt: "Kitchen" },
            { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=75", alt: "Ingredients" },
            { src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=400&q=75", alt: "Pasta making" },
            { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=75", alt: "Plated dish" },
            { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=75", alt: "Food closeup" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden bg-paper-dark">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CATERING — big bold call */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-4">Private Events</p>
          <h2 className="font-display font-800 text-5xl md:text-6xl uppercase leading-tight text-ink mb-8">
            Bring Il Nonno<br />to Your<br />Table
          </h2>
          <p className="text-ink-soft leading-relaxed mb-10">
            Corporate dinners, intimate celebrations, private gatherings — we bring the same craft and hospitality wherever you need us. No cookie-cutter packages, ever.
          </p>
          <Link
            href="/catering"
            className="font-display font-700 text-xs tracking-widest uppercase bg-ink text-paper px-8 py-4 hover:bg-red transition-colors inline-block"
          >
            Get a Quote
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=900&q=80"
            alt="Private event"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 right-0 h-1 bg-red" />
        </div>
      </section>

      {/* RESERVE BANNER */}
      <section className="bg-red py-20 px-6 text-center">
        <h2 className="font-display font-800 text-5xl md:text-7xl uppercase text-paper leading-tight mb-6">
          Ready to Eat?
        </h2>
        <p className="text-paper/80 mb-10 text-base">20 seats. Fill fast. Book yours.</p>
        <Link
          href="/contact"
          className="font-display font-700 text-xs tracking-widest uppercase border-2 border-paper text-paper px-10 py-4 hover:bg-paper hover:text-red transition-colors inline-block"
        >
          Reserve Your Table
        </Link>
      </section>
    </>
  );
}
