"use client";
import { useState, FormEvent } from "react";
import { submitReservation } from "./actions";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "", notes: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const result = await submitReservation(form);
    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  };

  return (
    <>
      <section className="pt-32 pb-8 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Secure Your Spot</p>
        <h1 className="font-serif text-5xl md:text-6xl text-cream mb-4">Reservations</h1>
        <p className="text-cream-muted leading-relaxed">
          We seat 20 guests. Tables are limited and fill quickly, especially Thursday–Saturday. We recommend booking at least 3–5 days in advance.
        </p>
      </section>

      <section className="pb-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Info panel */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-3">Hours</p>
            <div className="text-cream-muted text-sm space-y-1">
              <p>Wednesday – Thursday: 5pm – 10pm</p>
              <p>Friday – Saturday: 5pm – 11pm</p>
              <p>Sunday: 4pm – 9pm</p>
              <p className="text-cream-muted/60 text-xs mt-2">Closed Monday & Tuesday</p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-3">Location</p>
            <address className="not-italic text-cream-muted text-sm leading-relaxed">
              <p>Astoria, New York</p>
              <p className="text-cream-muted/60 text-xs mt-1">(Full address shared upon reservation)</p>
            </address>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-3">Contact</p>
            <div className="text-cream-muted text-sm space-y-1">
              <p>
                <a href="tel:+17181234567" className="hover:text-cream transition-colors">(718) 123-4567</a>
              </p>
              <p>
                <a href="mailto:hello@ilnonnonyc.com" className="hover:text-cream transition-colors">hello@ilnonnonyc.com</a>
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border p-4 text-sm text-cream-muted leading-relaxed">
            <p className="text-cream font-medium mb-2">Good to know</p>
            <p>We do our best to accommodate all dietary restrictions. Please note any allergies in your reservation. Parties of 8 or more — please reach out about our group dining options.</p>
          </div>
        </div>

        {/* Reservation form */}
        <div className="md:col-span-3 bg-surface border border-border p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-xl">✓</span>
              </div>
              <h2 className="font-serif text-3xl text-cream mb-3">We&rsquo;ll see you soon</h2>
              <p className="text-cream-muted">
                Thank you, {form.name}. Your reservation request for{" "}
                {form.guests} guest{parseInt(form.guests) !== 1 ? "s" : ""} on {form.date} at {form.time} has been received.
              </p>
              <p className="text-cream-muted text-sm mt-2">
                We&rsquo;ll confirm via text to {form.phone} within a few hours.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl text-cream mb-6">Request a Reservation</h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-ink border border-border text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-ink border border-border text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-ink border border-border text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Guests</label>
                    <select
                      required
                      value={form.guests}
                      onChange={(e) => setForm((p) => ({ ...p, guests: e.target.value }))}
                      className="w-full bg-ink border border-border text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">–</option>
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Date</label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                      className="w-full bg-ink border border-border text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Time</label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
                      className="w-full bg-ink border border-border text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">–</option>
                      {["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-cream-muted mb-2">Special Requests / Allergies</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                    className="w-full bg-ink border border-border text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 bg-red-950/30 border border-red-900/40 px-4 py-3">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full text-sm tracking-widest uppercase bg-gold text-ink py-4 hover:bg-gold-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Request Reservation"}
                </button>
                <p className="text-xs text-cream-muted text-center">
                  Reservations are confirmed via text within a few hours. For same-day requests, call us directly.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
