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
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
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
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-cream-muted hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
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
