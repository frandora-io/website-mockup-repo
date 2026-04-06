import Link from "next/link";
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
      <section className="pt-36 pb-16 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-wine mb-4">Seasonal Selection</p>
        <h1 className="font-script text-7xl md:text-9xl text-ink leading-none mb-6">The Menu</h1>
        <div className="w-12 h-px bg-ink mx-auto mb-8" />
        <p className="text-ink-muted text-[15px] leading-relaxed">
          Our menu changes with the seasons. Dietary needs and allergies? Just ask — we&rsquo;ll take care of you.
        </p>
      </section>

      {/* MENU SECTIONS */}
      <section className="pb-24 max-w-3xl mx-auto px-6 space-y-20">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-6 mb-10">
              <div className="flex-1 h-px bg-border" />
              <h2 className="font-serif text-2xl font-light text-ink tracking-widest uppercase text-sm">
                {section.title}
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-7">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-8">
                  <div>
                    <p className="font-serif text-xl text-ink font-light mb-1">{item.name}</p>
                    <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                  </div>
                  <p className="text-wine font-serif text-lg flex-shrink-0">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-xs text-ink-light tracking-wide pt-4 border-t border-border">
          Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Menu subject to change.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-border py-16 text-center px-6">
        <p className="font-serif text-3xl font-light text-ink mb-8">Ready to dine?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="text-xs tracking-[0.2em] uppercase bg-ink text-canvas px-10 py-4 hover:bg-wine transition-colors">
            Reserve a Table
          </Link>
          <Link href="/order" className="text-xs tracking-[0.2em] uppercase border border-ink text-ink px-10 py-4 hover:bg-ink hover:text-canvas transition-colors">
            Order for Pickup
          </Link>
        </div>
      </section>
    </>
  );
}
