import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Il Nonno NYC",
  description: "The story behind Il Nonno — a family-rooted, 20-seat Italian restaurant in Astoria, NY.",
};

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=80"
          alt="Il Nonno interior"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Who We Are</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream">Our Story</h1>
        </div>
      </section>

      {/* STORY BODY */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-cream-muted leading-relaxed">
          <p className="text-cream text-xl font-serif leading-relaxed">
            Il Nonno started with a table, a recipe, and a refusal to compromise.
          </p>
          <p>
            The name means &ldquo;The Grandfather&rdquo; — a nod to the person in every Italian family who cooked without measuring, seasoned by instinct, and set a table that made you never want to leave.
          </p>
          <p>
            We are a 20-seat restaurant on purpose. Not because we couldn&rsquo;t grow, but because we chose intimacy over scale. Every reservation matters. Every guest is seen.
          </p>
          <p>
            Our food is Italian in spirit, not in formula. We don&rsquo;t do red sauce as a default. We follow the seasons, we follow our curiosity, and we bring real craft to every plate — whether it&rsquo;s handmade pasta finished tableside or a simple branzino done with total conviction.
          </p>
          <p>
            This is a hidden gem by design. We don&rsquo;t try too hard. We don&rsquo;t need to. The food, the room, the service — they do the talking.
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
              alt="Chef at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&q=70"
                alt="Table setting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&q=70"
                alt="Dish"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              label: "Elevated, Not Pretentious",
              body: "We believe fine dining should feel like a warm hug, not an audition. Come as you are.",
            },
            {
              label: "Family-Rooted",
              body: "This is a legacy project. Every detail of the room and the menu carries a personal story.",
            },
            {
              label: "The Hidden Gem Experience",
              body: "You'll find us if you're looking for something real. We're for people who value connection over clout.",
            },
          ].map((v) => (
            <div key={v.label} className="space-y-3">
              <p className="font-serif text-xl text-cream">{v.label}</p>
              <div className="w-8 h-px bg-gold" />
              <p className="text-cream-muted text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="font-serif text-4xl text-cream mb-6">Come see for yourself</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="text-sm tracking-widest uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-dark transition-colors"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="text-sm tracking-widest uppercase border border-cream text-cream px-8 py-4 hover:bg-cream hover:text-ink transition-colors"
          >
            View Menu
          </Link>
        </div>
      </section>
    </>
  );
}
