"use client";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "", notes: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HEADER */}
      <section className="pt-36 pb-16 px-6 text-center max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-wine mb-4">Secure Your Spot</p>
        <h1 className="font-script text-7xl md:text-9xl text-ink leading-none mb-6">Reservations</h1>
        <div className="w-12 h-px bg-ink mx-auto mb-8" />
        <p className="text-ink-muted text-[15px] leading-relaxed">
          We seat 20 guests. Tables are limited and fill quickly — especially Thursday through Saturday. Book 3–5 days ahead when possible.
        </p>
      </section>

      <section className="pb-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Info */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-ink mb-3">Hours</p>
            <div className="text-ink-muted text-sm space-y-1">
              <p>Wednesday – Thursday: 5pm – 10pm</p>
              <p>Friday – Saturday: 5pm – 11pm</p>
              <p>Sunday: 4pm – 9pm</p>
              <p className="text-ink-light text-xs mt-2">Closed Monday & Tuesday</p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-ink mb-3">Location</p>
            <address className="not-italic text-ink-muted text-sm leading-relaxed">
              <p>Astoria, New York</p>
              <p className="text-ink-light text-xs mt-1">(Full address shared upon reservation)</p>
            </address>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-ink mb-3">Contact</p>
            <div className="text-ink-muted text-sm space-y-1">
              <p><a href="tel:+17181234567" className="hover:text-ink transition-colors">(718) 123-4567</a></p>
              <p><a href="mailto:hello@ilnonnonyc.com" className="hover:text-ink transition-colors">hello@ilnonnonyc.com</a></p>
            </div>
          </div>
          <div className="bg-surface border border-border p-5 text-sm text-ink-muted leading-relaxed">
            <p className="text-ink text-xs tracking-[0.15em] uppercase mb-2">Good to know</p>
            <p>We accommodate all dietary restrictions — note any allergies when you book. Groups of 8+, please reach out directly about group dining options.</p>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3 border border-border p-8 bg-surface">
          {submitted ? (
            <div className="text-center py-16">
              <p className="font-script text-5xl text-ink mb-4">See you soon</p>
              <p className="text-ink-muted text-sm leading-relaxed">
                Thank you, {form.name}. Your reservation request for {form.guests} guest{parseInt(form.guests) !== 1 ? "s" : ""} on {form.date} at {form.time} has been received.
              </p>
              <p className="text-ink-muted text-sm mt-2">We&rsquo;ll confirm via text to {form.phone} within a few hours.</p>
            </div>
          ) : (
            <>
              <h2 className="font-serif text-2xl font-light text-ink mb-6">Request a Reservation</h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Full Name</label>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-canvas border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Phone Number</label>
                    <input type="tel" required value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-canvas border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Email Address</label>
                  <input type="email" required value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-canvas border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Guests</label>
                    <select required value={form.guests}
                      onChange={(e) => setForm((p) => ({ ...p, guests: e.target.value }))}
                      className="w-full bg-canvas border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors">
                      <option value="">–</option>
                      {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Date</label>
                    <input type="date" required value={form.date}
                      onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                      className="w-full bg-canvas border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Time</label>
                    <select required value={form.time}
                      onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
                      className="w-full bg-canvas border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors">
                      <option value="">–</option>
                      {["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-ink-muted mb-2">Special Requests / Allergies</label>
                  <textarea rows={3} value={form.notes}
                    onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                    className="w-full bg-canvas border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full text-xs tracking-[0.2em] uppercase bg-ink text-canvas py-4 hover:bg-wine transition-colors">
                  Request Reservation
                </button>
                <p className="text-xs text-ink-light text-center">
                  Confirmed via text within a few hours. For same-day, call us directly.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
