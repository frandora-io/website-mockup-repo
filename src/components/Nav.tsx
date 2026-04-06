"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order Online" },
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
          ? "bg-canvas/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-script text-3xl md:text-4xl text-ink leading-none">
          Il Nonno
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.2em] uppercase text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase bg-ink text-canvas px-5 py-2.5 hover:bg-wine transition-colors"
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
          <span className={`block w-6 h-px bg-ink transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-canvas border-t border-border px-6 pb-6 flex flex-col gap-1">
          {[...links, { href: "/contact", label: "Reservations" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-ink-muted hover:text-ink transition-colors py-3 border-b border-border"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 text-center text-xs tracking-[0.2em] uppercase bg-ink text-canvas px-4 py-3 hover:bg-wine transition-colors"
          >
            Reserve a Table
          </Link>
        </nav>
      )}
    </header>
  );
}
