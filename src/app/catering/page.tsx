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
      <section className="pt-36 pb-12 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-wine mb-4">Private Events</p>
        <h1 className="font-script text-7xl md:text-9xl text-ink leading-none mb-6">Catering</h1>
        <div className="w-12 h-px bg-ink mx-auto" />
      </section>

      {/* FULL BLEED IMAGE */}
      <section className="relative h-[50vh] overflow-hidden mx-4 md:mx-8">
        <Image
          src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=1600&q=80"
          alt="Private dining event"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* INTRO + FORM */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif text-4xl font-light text-ink mb-8 leading-tight">
            Bring the Il Nonno experience to your event
          </h2>
          <p className="text-ink-muted leading-relaxed mb-6 text-[15px]">
            Whether you&rsquo;re hosting an intimate dinner party, a corporate lunch, or celebrating a milestone, we bring the same warmth, craft, and hospitality that defines our dining room — wherever you need us.
          </p>
          <p className="text-ink-muted leading-relaxed mb-10 text-[15px]">
            Every event is designed from scratch. No cookie-cutter packages — just a menu and experience built around you.
          </p>
          <ul className="space-y-3">
            {[
              "Private dinners & intimate gatherings",
              "Corporate lunches & team events",
              "Birthday and anniversary celebrations",
              "Holiday parties",
              "Photo shoots & brand events",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-[15px] text-ink-muted">
                <div className="w-4 h-px bg-wine flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FORM */}
        <div className="border border-border p-8 bg-surface">
          {submitted ? (
            <div className="text-center py-12">
              <p className="font-script text-4xl text-ink mb-4">We&rsquo;ll be in touch</p>
              <p className="text-ink-muted text-sm">
                Thank you, {form.name}. We&rsquo;ve received your inquiry and will respond within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-light text-ink mb-6">Request a Quote</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Your Name", key: "name", type: "text" },
                    { label: "Phone", key: "phone", type: "tel" },
                  ].map(({ label, key, type }) => (
                    <div key={key}>
                      <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">{label}</label>
                      <input type={type} required value={form[key as keyof typeof form]}
                        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                        className="w-full bg-canvas border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Email</label>
                  <input type="email" required value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-canvas border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Event Type</label>
                    <select required value={form.eventType}
                      onChange={(e) => setForm((p) => ({ ...p, eventType: e.target.value }))}
                      className="w-full bg-canvas border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors">
                      <option value="">Select…</option>
                      <option>Private Dinner</option>
                      <option>Corporate Event</option>
                      <option>Birthday / Anniversary</option>
                      <option>Holiday Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Guests</label>
                    <input type="number" min="1" required value={form.guests}
                      onChange={(e) => setForm((p) => ({ ...p, guests: e.target.value }))}
                      className="w-full bg-canvas border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Event Date</label>
                  <input type="date" required value={form.date}
                    onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                    className="w-full bg-canvas border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Tell us about your event</label>
                  <textarea rows={3} value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-canvas border border-border text-ink px-3 py-2.5 text-sm focus:outline-none focus:border-ink transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full text-xs tracking-[0.2em] uppercase bg-ink text-canvas py-4 hover:bg-wine transition-colors">
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
