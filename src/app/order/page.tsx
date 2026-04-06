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
          <span className="font-display font-800 text-6xl text-red block mb-4">✓</span>
          <h1 className="font-display font-800 text-4xl uppercase text-ink mb-4">Order Received</h1>
          <p className="text-ink-muted mb-2">Thank you, {info.name}.</p>
          <p className="text-ink-muted mb-8">Ready at {info.time}. Confirming via text to {info.phone}.</p>
          <button
            onClick={() => { setSubmitted(false); setCart([]); setStep("menu"); setInfo({ name: "", phone: "", email: "", time: "", notes: "" }); }}
            className="font-display font-700 text-xs tracking-widest uppercase border-2 border-ink text-ink px-8 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-14 md:pt-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-4">Direct Pickup — No Middleman</p>
          <h1 className="font-display font-800 text-[12vw] md:text-[8vw] uppercase leading-[0.9] tracking-tight text-ink">
            Order Online
          </h1>
        </div>
      </section>

      {/* Steps */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-8">
          {(["menu", "info", "confirm"] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              {i > 0 && <div className="w-8 h-0.5 bg-border" />}
              <div className={`flex items-center gap-2 ${step === s ? "text-ink" : "text-ink-muted"}`}>
                <div className={`w-6 h-6 text-xs flex items-center justify-center font-display font-700 ${step === s ? "bg-ink text-paper" : "border border-border text-ink-muted"}`}>
                  {i + 1}
                </div>
                <span className="font-display text-xs font-600 tracking-widest uppercase hidden md:block">
                  {s === "menu" ? "Select Items" : s === "info" ? "Your Info" : "Confirm"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          {step === "menu" && (
            <div className="space-y-10">
              {categories.map((cat) => (
                <div key={cat}>
                  <h2 className="font-display font-800 text-xl uppercase text-ink mb-4 border-b border-border pb-2">{cat}</h2>
                  <div className="space-y-0">
                    {menuItems.filter((i) => i.category === cat).map((item) => {
                      const inCart = cart.find((c) => c.id === item.id);
                      return (
                        <div key={item.id} className="flex items-center justify-between gap-4 py-3 border-b border-border">
                          <div>
                            <p className="font-display font-600 uppercase text-sm text-ink">{item.name}</p>
                            <p className="text-red font-display font-700 text-sm">${item.price}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {inCart && (
                              <>
                                <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 border border-border text-ink-muted hover:border-ink hover:text-ink transition-colors font-display font-700">−</button>
                                <span className="text-ink w-4 text-center font-display font-700">{inCart.qty}</span>
                              </>
                            )}
                            <button onClick={() => addToCart(item)} className="w-7 h-7 border-2 border-ink text-ink hover:bg-ink hover:text-paper transition-colors font-display font-700">+</button>
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
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setStep("confirm"); }}>
              <h2 className="font-display font-800 text-2xl uppercase text-ink">Your Information</h2>
              {[
                { label: "Full Name", key: "name", type: "text", required: true },
                { label: "Phone Number", key: "phone", type: "tel", required: true },
                { label: "Email Address", key: "email", type: "email", required: true },
                { label: "Pickup Time", key: "time", type: "time", required: true },
              ].map(({ label, key, type, required }) => (
                <div key={key}>
                  <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">{label}</label>
                  <input type={type} required={required} value={info[key as keyof typeof info]}
                    onChange={(e) => setInfo((p) => ({ ...p, [key]: e.target.value }))}
                    className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                </div>
              ))}
              <div>
                <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Notes (optional)</label>
                <textarea rows={3} value={info.notes}
                  onChange={(e) => setInfo((p) => ({ ...p, notes: e.target.value }))}
                  className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors resize-none" />
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep("menu")} className="font-display font-700 text-xs tracking-widest uppercase border border-border text-ink-muted px-6 py-3 hover:border-ink hover:text-ink transition-colors">Back</button>
                <button type="submit" className="flex-1 font-display font-700 text-xs tracking-widest uppercase bg-ink text-paper py-3 hover:bg-red transition-colors">Review Order</button>
              </div>
            </form>
          )}

          {step === "confirm" && (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <h2 className="font-display font-800 text-2xl uppercase text-ink">Confirm Order</h2>
              <div className="border-2 border-ink p-4 space-y-2">
                {cart.map((c) => (
                  <div key={c.id} className="flex justify-between text-sm">
                    <span className="text-ink-muted font-display font-600 uppercase text-xs">{c.name} × {c.qty}</span>
                    <span className="text-ink font-display font-700">${c.price * c.qty}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-display font-800 uppercase text-sm text-ink">Total</span>
                  <span className="font-display font-800 text-red text-lg">${total}</span>
                </div>
              </div>
              <div className="text-sm text-ink-muted space-y-1">
                <p><span className="text-ink font-display font-600 uppercase text-xs">Name: </span>{info.name}</p>
                <p><span className="text-ink font-display font-600 uppercase text-xs">Phone: </span>{info.phone}</p>
                <p><span className="text-ink font-display font-600 uppercase text-xs">Pickup: </span>{info.time}</p>
                {info.notes && <p><span className="text-ink font-display font-600 uppercase text-xs">Notes: </span>{info.notes}</p>}
              </div>
              <p className="text-xs text-ink-muted">Payment at pickup. Cash and all major cards accepted.</p>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep("info")} className="font-display font-700 text-xs tracking-widest uppercase border border-border text-ink-muted px-6 py-3 hover:border-ink hover:text-ink transition-colors">Back</button>
                <button type="submit" className="flex-1 font-display font-700 text-xs tracking-widest uppercase bg-red text-paper py-3 hover:bg-red-dark transition-colors">Place Order</button>
              </div>
            </form>
          )}
        </div>

        {/* Cart */}
        <div className="md:col-span-1">
          <div className="sticky top-20 border-2 border-ink p-6">
            <h2 className="font-display font-800 text-xl uppercase text-ink mb-4">Your Order</h2>
            {cart.length === 0 ? (
              <p className="text-sm text-ink-muted">Nothing added yet.</p>
            ) : (
              <>
                <div className="space-y-2 mb-4">
                  {cart.map((c) => (
                    <div key={c.id} className="flex justify-between text-xs">
                      <span className="text-ink-muted font-display font-600 uppercase">{c.name} × {c.qty}</span>
                      <span className="text-ink font-display font-700">${c.price * c.qty}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3 flex justify-between mb-5">
                  <span className="font-display font-800 uppercase text-sm text-ink">Total</span>
                  <span className="font-display font-800 text-red text-lg">${total}</span>
                </div>
                {step === "menu" && (
                  <button onClick={() => setStep("info")}
                    className="w-full font-display font-700 text-xs tracking-widest uppercase bg-ink text-paper py-3 hover:bg-red transition-colors">
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
