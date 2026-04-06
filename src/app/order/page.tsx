"use client";
import { useState } from "react";
import type { FormEvent } from "react";

const menuItems = [
  { id: 1, category: "Antipasti", name: "Burrata con Pesche", price: 18 },
  { id: 2, category: "Antipasti", name: "Polpo alla Brace", price: 22 },
  { id: 3, category: "Antipasti", name: "Carpaccio di Manzo", price: 20 },
  { id: 4, category: "Pasta", name: "Tagliolini al Limone", price: 26 },
  { id: 5, category: "Pasta", name: "Rigatoni alla Norma", price: 24 },
  { id: 6, category: "Pasta", name: "Tonnarelli Cacio e Pepe", price: 22 },
  { id: 7, category: "Secondi", name: "Branzino al Forno", price: 38 },
  { id: 8, category: "Secondi", name: "Pollo al Mattone", price: 32 },
  { id: 9, category: "Dolci", name: "Tiramisu della Casa", price: 12 },
  { id: 10, category: "Dolci", name: "Cannoli Siciliani", price: 10 },
];

type CartItem = { id: number; name: string; price: number; qty: number };

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState<"menu" | "info" | "confirm">("menu");
  const [info, setInfo] = useState({ name: "", phone: "", email: "", time: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const addToCart = (item: (typeof menuItems)[0]) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing && existing.qty > 1) return prev.map((c) => c.id === id ? { ...c, qty: c.qty - 1 } : c);
      return prev.filter((c) => c.id !== id);
    });
  };

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const categories = [...new Set(menuItems.map((i) => i.category))];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full border-2 border-ink flex items-center justify-center mx-auto mb-6">
            <span className="text-ink text-2xl">✓</span>
          </div>
          <h1 className="font-serif text-4xl font-light text-ink mb-4">Order Received</h1>
          <p className="text-ink-muted mb-2">Thank you, {info.name}.</p>
          <p className="text-ink-muted mb-8">Your order will be ready at {info.time}. We&rsquo;ll confirm via text to {info.phone}.</p>
          <button
            onClick={() => { setSubmitted(false); setCart([]); setStep("menu"); setInfo({ name: "", phone: "", email: "", time: "", notes: "" }); }}
            className="text-xs tracking-[0.2em] uppercase border border-ink text-ink px-8 py-3 hover:bg-ink hover:text-canvas transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-36 pb-8 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-wine mb-4">Direct Pickup</p>
        <h1 className="font-script text-7xl md:text-9xl text-ink leading-none mb-4">Order Online</h1>
        <div className="w-12 h-px bg-ink mx-auto mb-6" />
        <p className="text-ink-muted text-[15px]">Order directly from us — no third-party fees, no middleman. Pickup only.</p>
      </section>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-4">
          {(["menu", "info", "confirm"] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              {i > 0 && <div className="flex-1 h-px bg-border w-8 md:w-16" />}
              <div className={`flex items-center gap-2 ${step === s ? "text-ink" : "text-ink-light"}`}>
                <div className={`w-6 h-6 rounded-full border text-xs flex items-center justify-center ${step === s ? "border-ink text-ink" : "border-border text-ink-light"}`}>
                  {i + 1}
                </div>
                <span className="text-xs tracking-[0.15em] uppercase hidden md:block">
                  {s === "menu" ? "Select Items" : s === "info" ? "Your Info" : "Confirm"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left */}
        <div className="md:col-span-2">
          {step === "menu" && (
            <div className="space-y-10">
              {categories.map((cat) => (
                <div key={cat}>
                  <h2 className="font-serif text-xl font-light text-ink mb-4 border-b border-border pb-2">{cat}</h2>
                  <div className="space-y-3">
                    {menuItems.filter((i) => i.category === cat).map((item) => {
                      const inCart = cart.find((c) => c.id === item.id);
                      return (
                        <div key={item.id} className="flex items-center justify-between gap-4 py-2">
                          <div>
                            <p className="text-ink">{item.name}</p>
                            <p className="text-wine text-sm">${item.price}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {inCart && (
                              <>
                                <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 border border-border text-ink-muted hover:border-ink hover:text-ink transition-colors">−</button>
                                <span className="text-ink w-4 text-center">{inCart.qty}</span>
                              </>
                            )}
                            <button onClick={() => addToCart(item)} className="w-7 h-7 border border-wine text-wine hover:bg-wine hover:text-canvas transition-colors">+</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === "info" && (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep("confirm"); }}>
              <h2 className="font-serif text-2xl font-light text-ink">Your Information</h2>
              {[
                { label: "Full Name", key: "name", type: "text", required: true },
                { label: "Phone Number", key: "phone", type: "tel", required: true },
                { label: "Email Address", key: "email", type: "email", required: true },
                { label: "Pickup Time", key: "time", type: "time", required: true },
              ].map(({ label, key, type, required }) => (
                <div key={key}>
                  <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">{label}</label>
                  <input type={type} required={required} value={info[key as keyof typeof info]}
                    onChange={(e) => setInfo((p) => ({ ...p, [key]: e.target.value }))}
                    className="w-full bg-canvas border border-border text-ink px-4 py-3 focus:outline-none focus:border-ink transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Special Notes (optional)</label>
                <textarea rows={3} value={info.notes}
                  onChange={(e) => setInfo((p) => ({ ...p, notes: e.target.value }))}
                  className="w-full bg-canvas border border-border text-ink px-4 py-3 focus:outline-none focus:border-ink transition-colors resize-none" />
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep("menu")} className="text-xs tracking-[0.2em] uppercase border border-border text-ink-muted px-6 py-3 hover:border-ink hover:text-ink transition-colors">Back</button>
                <button type="submit" className="flex-1 text-xs tracking-[0.2em] uppercase bg-ink text-canvas px-6 py-3 hover:bg-wine transition-colors">Review Order</button>
              </div>
            </form>
          )}

          {step === "confirm" && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h2 className="font-serif text-2xl font-light text-ink">Confirm Your Order</h2>
              <div className="bg-surface border border-border p-4 space-y-2">
                {cart.map((c) => (
                  <div key={c.id} className="flex justify-between text-sm">
                    <span className="text-ink-muted">{c.name} × {c.qty}</span>
                    <span className="text-ink">${c.price * c.qty}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between font-medium">
                  <span className="text-ink">Total</span>
                  <span className="text-wine font-serif text-lg">${total}</span>
                </div>
              </div>
              <div className="text-sm text-ink-muted space-y-1">
                <p><span className="text-ink">Name:</span> {info.name}</p>
                <p><span className="text-ink">Phone:</span> {info.phone}</p>
                <p><span className="text-ink">Pickup:</span> {info.time}</p>
                {info.notes && <p><span className="text-ink">Notes:</span> {info.notes}</p>}
              </div>
              <p className="text-xs text-ink-muted">Payment is collected at pickup. We accept cash and all major cards.</p>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep("info")} className="text-xs tracking-[0.2em] uppercase border border-border text-ink-muted px-6 py-3 hover:border-ink hover:text-ink transition-colors">Back</button>
                <button type="submit" className="flex-1 text-xs tracking-[0.2em] uppercase bg-ink text-canvas px-6 py-3 hover:bg-wine transition-colors">Place Order</button>
              </div>
            </form>
          )}
        </div>

        {/* Cart summary */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-surface border border-border p-6">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Your Order</h2>
            {cart.length === 0 ? (
              <p className="text-sm text-ink-muted">No items added yet.</p>
            ) : (
              <>
                <div className="space-y-2 mb-4">
                  {cart.map((c) => (
                    <div key={c.id} className="flex justify-between text-sm">
                      <span className="text-ink-muted">{c.name} × {c.qty}</span>
                      <span className="text-ink">${c.price * c.qty}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 flex justify-between mb-6">
                  <span className="text-ink font-medium">Total</span>
                  <span className="text-wine font-serif text-lg">${total}</span>
                </div>
                {step === "menu" && (
                  <button onClick={() => setStep("info")}
                    className="w-full text-xs tracking-[0.2em] uppercase bg-ink text-canvas py-3 hover:bg-wine transition-colors">
                    Continue
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
