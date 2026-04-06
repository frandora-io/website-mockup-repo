"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/catering", label: "Catering" },
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
        scrolled || open
          ? "bg-paper/95 backdrop-blur-sm border-b border-border"
          : "bg-paper/80 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-800 text-xl md:text-2xl tracking-tight text-ink uppercase"
        >
          Il Nonno
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-xs font-600 tracking-widest uppercase text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/order"
            className="font-display text-xs font-700 tracking-widest uppercase text-red hover:text-red-dark transition-colors"
          >
            Order Online
          </Link>
          <Link
            href="/contact"
            className="font-display text-xs font-700 tracking-widest uppercase bg-ink text-paper px-5 py-2.5 hover:bg-red transition-colors"
          >
            Reserve
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-paper border-t border-border px-6 pb-6 flex flex-col gap-1">
          {[...links, { href: "/contact", label: "Reservations" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-xs font-600 tracking-widest uppercase text-ink-muted hover:text-ink transition-colors py-3 border-b border-border"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 text-center font-display text-xs font-700 tracking-widest uppercase bg-ink text-paper py-3 hover:bg-red transition-colors"
          >
            Reserve a Table
          </Link>
        </nav>
      )}
    </header>
  );
}
