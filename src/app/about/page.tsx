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
      {/* PAGE HEADER */}
      <section className="pt-36 pb-16 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-wine mb-4">Who We Are</p>
        <h1 className="font-script text-7xl md:text-9xl text-ink leading-none mb-6">Our Story</h1>
        <div className="w-12 h-px bg-ink mx-auto" />
      </section>

      {/* FULL-BLEED IMAGE */}
      <section className="relative h-[55vh] overflow-hidden mx-4 md:mx-8">
        <Image
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=85"
          alt="Il Nonno interior"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* STORY — editorial two-col */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif text-4xl font-light text-ink mb-8 leading-tight">
            The name means<br />&ldquo;The Grandfather&rdquo;
          </h2>
          <p className="text-ink-muted leading-relaxed mb-4 text-[15px]">
            Il Nonno was born from a simple belief: that the best meals happen at small tables, with good people, and no pretense. The name is a nod to the person in every Italian family who cooked without measuring, seasoned by instinct, and set a table that made you never want to leave.
          </p>
          <p className="text-ink-muted leading-relaxed mb-4 text-[15px]">
            We are a 20-seat restaurant on purpose. Not because we couldn&rsquo;t grow, but because we chose intimacy over scale. Every reservation matters. Every guest is seen.
          </p>
          <p className="text-ink-muted leading-relaxed text-[15px]">
            This is a hidden gem by design. We don&rsquo;t try too hard. We don&rsquo;t need to. The food, the room, the service — they do the talking.
          </p>
        </div>

        <div>
          <p className="text-ink-muted leading-relaxed mb-4 text-[15px]">
            Our food is Italian in spirit, not in formula. We don&rsquo;t do red sauce as a default. We follow the seasons, we follow our curiosity, and we bring real craft to every plate — whether it&rsquo;s handmade pasta finished tableside or a simple branzino done with total conviction.
          </p>
          <p className="text-ink-muted leading-relaxed mb-12 text-[15px]">
            We are for people who understand what makes a place special. Who like the concept of the hidden gem. Who are open to different takes on Italian food and who value connection and quality over pretension.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&q=80" alt="Table setting" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&q=80" alt="Dish" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — horizontal rules */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { label: "Elevated, Not Pretentious", body: "Fine dining should feel like a warm hug, not an audition. Come as you are." },
            { label: "Family-Rooted", body: "Every detail of the room and menu carries a personal story. This is a legacy project." },
            { label: "The Hidden Gem", body: "We're for people who value connection and quality. You'll find us if you're looking for something real." },
          ].map((v) => (
            <div key={v.label} className="py-10 md:py-0 md:px-12 first:pl-0 last:pr-0">
              <p className="font-serif text-2xl font-light text-ink mb-4">{v.label}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LARGE PHOTO */}
      <section className="relative h-[50vh] overflow-hidden mx-4 md:mx-8 my-4">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
          alt="Chef at work"
          fill
          className="object-cover"
        />
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="font-serif text-4xl font-light text-ink mb-8">Come see for yourself</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="text-xs tracking-[0.2em] uppercase bg-ink text-canvas px-10 py-4 hover:bg-wine transition-colors">
            Reserve a Table
          </Link>
          <Link href="/menu" className="text-xs tracking-[0.2em] uppercase border border-ink text-ink px-10 py-4 hover:bg-ink hover:text-canvas transition-colors">
            View Menu
          </Link>
        </div>
      </section>
    </>
  );
}
