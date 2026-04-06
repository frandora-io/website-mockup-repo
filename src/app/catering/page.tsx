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
      {/* HERO */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=1600&q=80"
          alt="Catering event"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 px-6 pb-16 max-w-7xl mx-auto w-full">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Private Events</p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream">Catering & Events</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl text-cream mb-6 leading-tight">
            Bring the Il Nonno experience to your event
          </h2>
          <p className="text-cream-muted leading-relaxed mb-4">
            Whether you&rsquo;re hosting an intimate dinner party, a corporate lunch, or celebrating a milestone, we bring the same warmth, craft, and hospitality that defines our dining room — wherever you need us.
          </p>
          <p className="text-cream-muted leading-relaxed mb-4">
            We work closely with every client to design a menu that fits your vision, your guests, and your occasion. No cookie-cutter packages — every event is its own story.
          </p>
          <ul className="space-y-2 text-cream-muted text-sm">
            {[
              "Private dinners & intimate gatherings",
              "Corporate lunches & team events",
              "Birthday and anniversary celebrations",
              "Holiday parties",
              "Photo shoots & brand events",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-gold">—</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FORM */}
        <div className="bg-surface border border-border p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-gold">✓</span>
              </div>
              <h3 className="font-serif text-2xl text-cream mb-3">We&rsquo;ll be in touch</h3>
              <p className="text-cream-muted text-sm">
                Thank you, {form.name}. We&rsquo;ve received your inquiry and will respond within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl text-cream mb-6">Request a Quote</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Your Name", key: "name", type: "text" },
                    { label: "Phone Number", key: "phone", type: "tel" },
                  ].map(({ label, key, type }) => (
                    <div key={key}>
                      <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">{label}</label>
                      <input
                        type={type}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                        className="w-full bg-ink border border-border text-cream px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-ink border border-border text-cream px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Event Type</label>
                    <select
                      required
                      value={form.eventType}
                      onChange={(e) => setForm((p) => ({ ...p, eventType: e.target.value }))}
                      className="w-full bg-ink border border-border text-cream px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select…</option>
                      <option>Private Dinner</option>
                      <option>Corporate Event</option>
                      <option>Birthday / Anniversary</option>
                      <option>Holiday Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Guest Count</label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={form.guests}
                      onChange={(e) => setForm((p) => ({ ...p, guests: e.target.value }))}
                      className="w-full bg-ink border border-border text-cream px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Event Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                    className="w-full bg-ink border border-border text-cream px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Tell us about your event</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-ink border border-border text-cream px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-sm tracking-widest uppercase bg-gold text-ink py-3.5 hover:bg-gold-dark transition-colors"
                >
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
