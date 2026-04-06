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
      <section className="pt-14 md:pt-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <p className="font-display text-xs font-600 tracking-[0.3em] uppercase text-red mb-4">Secure Your Spot</p>
          <h1 className="font-display font-800 text-[12vw] md:text-[8vw] uppercase leading-[0.9] tracking-tight text-ink">
            Reservations
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Info */}
        <div className="md:col-span-2 space-y-10">
          <div>
            <p className="font-display text-xs font-600 tracking-widest uppercase text-ink mb-3">Hours</p>
            <div className="text-ink-soft text-sm space-y-1">
              <p>Wednesday – Thursday: 5pm – 10pm</p>
              <p>Friday – Saturday: 5pm – 11pm</p>
              <p>Sunday: 4pm – 9pm</p>
              <p className="text-ink-muted text-xs mt-2">Closed Monday & Tuesday</p>
            </div>
          </div>
          <div>
            <p className="font-display text-xs font-600 tracking-widest uppercase text-ink mb-3">Location</p>
            <address className="not-italic text-ink-soft text-sm">
              <p>Astoria, New York</p>
              <p className="text-ink-muted text-xs mt-1">(Full address shared upon reservation)</p>
            </address>
          </div>
          <div>
            <p className="font-display text-xs font-600 tracking-widest uppercase text-ink mb-3">Contact</p>
            <div className="text-ink-soft text-sm space-y-1">
              <p><a href="tel:+17181234567" className="hover:text-red transition-colors">(718) 123-4567</a></p>
              <p><a href="mailto:hello@ilnonnonyc.com" className="hover:text-red transition-colors">hello@ilnonnonyc.com</a></p>
            </div>
          </div>
          <div className="border-l-4 border-red pl-4 text-sm text-ink-soft leading-relaxed">
            <p className="font-display font-700 text-xs uppercase text-ink mb-1">Good to know</p>
            <p>We accommodate all dietary restrictions. Note allergies when you book. Groups of 8+, reach out directly.</p>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3 border-2 border-ink p-8">
          {submitted ? (
            <div className="text-center py-16">
              <span className="font-display font-800 text-5xl text-red block mb-4">✓</span>
              <h2 className="font-display font-800 text-3xl uppercase text-ink mb-3">See you soon</h2>
              <p className="text-ink-muted text-sm leading-relaxed">
                {form.name}, your table for {form.guests} on {form.date} at {form.time} is requested. We&rsquo;ll confirm via text to {form.phone}.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-display font-800 text-2xl uppercase text-ink mb-6">Book a Table</h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Full Name</label>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                  <div>
                    <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Phone</label>
                    <input type="tel" required value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Email</label>
                  <input type="email" required value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Guests</label>
                    <select required value={form.guests}
                      onChange={(e) => setForm((p) => ({ ...p, guests: e.target.value }))}
                      className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors">
                      <option value="">–</option>
                      {[1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Date</label>
                    <input type="date" required value={form.date}
                      onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                      className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors" />
                  </div>
                  <div>
                    <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Time</label>
                    <select required value={form.time}
                      onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
                      className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors">
                      <option value="">–</option>
                      {["5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-display text-xs font-600 tracking-widest uppercase text-ink-muted mb-2">Allergies / Notes</label>
                  <textarea rows={3} value={form.notes}
                    onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                    className="w-full bg-paper border border-border text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full font-display font-700 text-xs tracking-widest uppercase bg-ink text-paper py-4 hover:bg-red transition-colors">
                  Request Reservation
                </button>
                <p className="text-xs text-ink-muted text-center">Confirmed via text within a few hours. Same-day? Call us.</p>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
