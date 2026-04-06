"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";

export default function Catering() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", guests: "", date: "", message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HEADER */}
      <section className="pt-14 md:pt-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-4">Private Events</p>
          <h1 className="font-display font-800 text-[12vw] md:text-[8vw] uppercase leading-[0.9] tracking-tight text-ink">
            Catering
          </h1>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display font-800 text-3xl md:text-4xl uppercase leading-tight text-ink mb-8">
            Every event gets the full Il Nonno treatment
          </h2>
          <p className="text-ink-soft leading-relaxed mb-6">
            Corporate dinners, private gatherings, intimate celebrations — we bring the same warmth, craft, and hospitality that defines our dining room, wherever you need us. No cookie-cutter packages. Every event is built from scratch.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Private dinners & intimate gatherings",
              "Corporate lunches & team events",
              "Birthday and anniversary celebrations",
              "Holiday parties",
              "Photo shoots & brand events",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-sm text-ink-soft">
                <div className="w-1.5 h-1.5 bg-red flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=900&q=80"
              alt="Private event setup"
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-red" />
          </div>
        </div>

        {/* FORM */}
        <div className="border-2 border-ink p-8">
          {submitted ? (
            <div className="text-center py-12">
              <span className="font-display font-800 text-5xl text-red block mb-4">✓</span>
              <h3 className="font-display font-800 text-2xl uppercase text-ink mb-3">We&rsquo;ll be in touch</h3>
              <p className="text-ink-muted text-sm">
                Thank you, {form.name}. We&rsquo;ll respond within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display font-800 text-2xl uppercase text-ink mb-6">Request a Quote</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Your Name", key: "name", type: "text" },
                    { label: "Phone", key: "phone", type: "tel" },
                  ].map(({ label, key, type }) => (
                    <div key={key}>
                      <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">{label}</label>
                      <input type={type} required value={form[key as keyof typeof form]}
                        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                        className="w-full bg-paper border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Email</label>
                  <input type="email" required value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-paper border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Event Type</label>
                    <select required value={form.eventType}
                      onChange={(e) => setForm((p) => ({ ...p, eventType: e.target.value }))}
                      className="w-full bg-paper border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors">
                      <option value="">Select…</option>
                      <option>Private Dinner</option>
                      <option>Corporate Event</option>
                      <option>Birthday / Anniversary</option>
                      <option>Holiday Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Guests</label>
                    <input type="number" min="1" required value={form.guests}
                      onChange={(e) => setForm((p) => ({ ...p, guests: e.target.value }))}
                      className="w-full bg-paper border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Event Date</label>
                  <input type="date" required value={form.date}
                    onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                    className="w-full bg-paper border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                </div>
                <div>
                  <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Tell us about your event</label>
                  <textarea rows={3} value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-paper border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full font-display font-700 text-xs tracking-widest uppercase bg-ink text-paper py-4 hover:bg-red transition-colors">
                  Send Inquiry
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
