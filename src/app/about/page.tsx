import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Il Nonno NYC",
  description: "The story behind Il Nonno — a family-rooted, 20-seat Italian restaurant in Astoria, NY.",
};

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-14 md:pt-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-4">Who We Are</p>
          <h1 className="font-display font-800 text-[12vw] md:text-[8vw] uppercase leading-[0.9] tracking-tight text-ink">
            Our Story
          </h1>
        </div>
      </section>

      <Marquee />

      {/* MAIN STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-6 text-ink-soft leading-relaxed">
          <p className="font-display font-700 text-2xl md:text-3xl text-ink leading-tight">
            The name means &ldquo;The Grandfather.&rdquo; That tells you everything.
          </p>
          <p>
            Il Nonno was born from a simple belief: that the best meals happen at small tables, with good people, and no pretense. A nod to the person in every Italian family who cooked without measuring, seasoned by instinct, and set a table that made you never want to leave.
          </p>
          <p>
            We are a 20-seat restaurant on purpose. Not because we couldn&rsquo;t grow, but because we chose intimacy over scale. Every reservation matters. Every guest is seen.
          </p>
          <p>
            Our food is Italian in spirit, not in formula. We don&rsquo;t do red sauce as a default. We follow the seasons, we follow our curiosity, and we bring real craft to every plate — whether it&rsquo;s handmade pasta finished tableside or a simple branzino done with total conviction.
          </p>
          <p>
            This is a hidden gem by design. We&rsquo;re for people who understand what makes a place special. Who like connection over clout. Who are open to a different take on Italian food.
          </p>
        </div>

        <div className="md:col-span-5 space-y-3">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&q=85"
              alt="In the kitchen"
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-red" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=500&q=80" alt="Pasta making" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80" alt="Ingredients" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — big bold grid */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { n: "01", label: "Elevated, Not Pretentious", body: "Fine dining should feel like a warm hug, not an audition. Come as you are." },
            { n: "02", label: "Family-Rooted", body: "Every detail of the room and menu carries a personal story. This is a legacy project." },
            { n: "03", label: "The Hidden Gem", body: "We&rsquo;re for people who value connection and quality. You&rsquo;ll find us if you&rsquo;re looking for something real." },
          ].map((v) => (
            <div key={v.n} className="py-10 md:py-0 md:px-10 first:pl-0 last:pr-0">
              <span className="font-display font-800 text-5xl text-red/20 leading-none block mb-4">{v.n}</span>
              <p className="font-display font-700 text-xl uppercase text-ink mb-3">{v.label}</p>
              <p className="text-sm text-ink-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: v.body }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center px-6">
        <h2 className="font-display font-800 text-4xl md:text-5xl uppercase text-paper mb-8">Come see for yourself</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="font-display font-700 text-xs tracking-widest uppercase bg-red text-paper px-10 py-4 hover:bg-red-dark transition-colors">
            Reserve a Table
          </Link>
          <Link href="/menu" className="font-display font-700 text-xs tracking-widest uppercase border-2 border-paper text-paper px-10 py-4 hover:bg-paper hover:text-ink transition-colors">
            View Menu
          </Link>
        </div>
      </section>
    </>
  );
}
