"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order Online" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Reservations" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ink/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl tracking-widest text-cream uppercase"
        >
          Il Nonno
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase border border-transparent text-cream-muted px-4 py-2 hover:border-gold hover:bg-gold hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Location icon */}
          <Link
            href="/location"
            aria-label="Visit us"
            className="p-2 text-gold hover:bg-gold hover:text-ink transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </Link>
          {/* Phone icon */}
          <a
            href="tel:+17181234567"
            aria-label="Call us"
            className="p-2 text-gold hover:bg-gold hover:text-ink transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <Link
            href="/order"
            className="text-sm tracking-widest uppercase border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-ink transition-colors"
          >
            Order Online
          </Link>
          <Link
            href="/contact"
            className="text-sm tracking-widest uppercase bg-gold text-ink px-4 py-2 hover:bg-gold-dark transition-colors"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile right-side actions */}
        <div className="md:hidden flex items-center gap-1">
          <Link
            href="/location"
            aria-label="Visit us"
            className="p-2 text-gold hover:bg-gold hover:text-ink transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </Link>
          <a
            href="tel:+17181234567"
            aria-label="Call us"
            className="p-2 text-gold hover:bg-gold hover:text-ink transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-ink border-t border-border px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-cream-muted hover:text-cream transition-colors py-2 border-b border-border"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/location"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest uppercase text-cream-muted hover:text-cream transition-colors py-2 border-b border-border"
          >
            Visit Us
          </Link>
          <a
            href="tel:+17181234567"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest uppercase text-cream-muted hover:text-cream transition-colors py-2 border-b border-border"
          >
            Call (718) 123-4567
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center text-sm tracking-widest uppercase bg-gold text-ink px-4 py-3 hover:bg-gold-dark transition-colors"
          >
            Reserve a Table
          </Link>
        </nav>
      )}
    </header>
  );
}
