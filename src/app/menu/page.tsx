import Link from "next/link";
import Marquee from "@/components/Marquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Il Nonno NYC",
  description: "Seasonal Italian menu at Il Nonno NYC — handmade pasta, fresh seafood, and inspired antipasti in Astoria, NY.",
};

const sections = [
  {
    title: "Antipasti",
    items: [
      { name: "Burrata con Pesche", desc: "Stone fruit, aged balsamic, pistachio crumble, micro basil", price: "18" },
      { name: "Polpo alla Brace", desc: "Grilled octopus, cannellini purée, Calabrian chili oil, celery", price: "22" },
      { name: "Carpaccio di Manzo", desc: "Hand-cut beef, truffle aioli, capers, shaved Parmigiano, arugula", price: "20" },
      { name: "Suppli al Telefono", desc: "Roman risotto fritters, house tomato sugo, smoked mozzarella", price: "14" },
    ],
  },
  {
    title: "Primi — Pasta",
    items: [
      { name: "Tagliolini al Limone", desc: "Handmade egg pasta, brown butter, preserved lemon, bottarga, breadcrumbs", price: "26" },
      { name: "Rigatoni alla Norma", desc: "Roasted eggplant, San Marzano, salted ricotta, fresh basil", price: "24" },
      { name: "Tonnarelli Cacio e Pepe", desc: "Our take on the Roman classic — no tricks, just execution", price: "22" },
      { name: "Gnocchi al Tartufo", desc: "Potato gnocchi, black truffle cream, aged Parmigiano, chives", price: "30" },
    ],
  },
  {
    title: "Secondi",
    items: [
      { name: "Branzino al Forno", desc: "Whole roasted sea bass, capers, olives, cherry tomato, white wine jus", price: "38" },
      { name: "Pollo al Mattone", desc: "Brick-pressed half chicken, salsa verde, roasted fennel, lemon", price: "32" },
      { name: "Bistecca di Manzo", desc: "12oz NY strip, rosemary-garlic butter, roasted bone marrow", price: "52" },
      { name: "Melanzane alla Parmigiana", desc: "Classic but elevated — house-made sauce, fresh fior di latte", price: "26" },
    ],
  },
  {
    title: "Dolci",
    items: [
      { name: "Tiramisu della Casa", desc: "Espresso-soaked ladyfingers, mascarpone cream, dark cacao", price: "12" },
      { name: "Panna Cotta al Miele", desc: "Honey, fig compote, candied walnut, fresh thyme", price: "11" },
      { name: "Cannoli Siciliani", desc: "Fried shells, sheep's milk ricotta, pistachio, candied orange", price: "10" },
    ],
  },
];

export default function Menu() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-14 md:pt-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-4">Seasonal Selection</p>
          <h1 className="font-display font-800 text-[12vw] md:text-[8vw] uppercase leading-[0.9] tracking-tight text-ink">
            The Menu
          </h1>
        </div>
      </section>

      <Marquee />

      {/* NOTE */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-4">
        <p className="text-ink-muted text-sm">
          Our menu changes with the seasons. Dietary needs? Just ask — we&rsquo;ll take care of you.
        </p>
      </div>

      {/* MENU */}
      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display font-800 text-2xl uppercase tracking-tight text-ink">{section.title}</h2>
              <div className="flex-1 h-0.5 bg-red/20" />
            </div>
            <div className="space-y-0 border-t border-border">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-8 py-5 border-b border-border">
                  <div>
                    <p className="font-display font-700 text-base uppercase text-ink mb-1">{item.name}</p>
                    <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                  </div>
                  <p className="font-display font-700 text-lg text-red flex-shrink-0">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-xs text-ink-muted tracking-wide">
          Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Menu subject to change.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-center px-6">
        <p className="font-display font-800 text-4xl uppercase text-paper mb-8">Ready to dine?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="font-display font-700 text-xs tracking-widest uppercase bg-red text-paper px-10 py-4 hover:bg-red-dark transition-colors">
            Reserve a Table
          </Link>
          <Link href="/order" className="font-display font-700 text-xs tracking-widest uppercase border-2 border-paper text-paper px-10 py-4 hover:bg-paper hover:text-ink transition-colors">
            Order for Pickup
          </Link>
        </div>
      </section>
    </>
  );
}
