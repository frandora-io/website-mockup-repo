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
      <section className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Seasonal Menu</p>
        <h1 className="font-serif text-5xl md:text-6xl text-cream mb-6">The Menu</h1>
        <p className="text-cream-muted leading-relaxed">
          Our menu changes with the seasons. Below is our current selection. Dietary needs and allergies? Just ask — we&rsquo;ll take care of you.
        </p>
      </section>

      {/* MENU SECTIONS */}
      <section className="pb-24 px-6 max-w-4xl mx-auto space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border" />
              <h2 className="font-serif text-2xl text-cream tracking-wide">{section.title}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-6">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-6 group">
                  <div className="flex-1">
                    <p className="text-cream font-medium mb-1">{item.name}</p>
                    <p className="text-sm text-cream-muted leading-relaxed">{item.desc}</p>
                  </div>
                  <p className="text-gold font-serif text-lg flex-shrink-0">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-xs text-cream-muted tracking-wide pt-4 border-t border-border">
          Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Menu is subject to change based on availability.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface border-t border-border text-center px-6">
        <p className="font-serif text-3xl text-cream mb-6">Ready to dine?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="text-sm tracking-widest uppercase bg-gold text-ink px-8 py-4 hover:bg-gold-dark transition-colors"
          >
            Reserve a Table
          </Link>
          <Link
            href="/order"
            className="text-sm tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-ink transition-colors"
          >
            Order for Pickup
          </Link>
        </div>
      </section>
    </>
  );
}
