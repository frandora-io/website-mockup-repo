"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Use localStorage so we don't nag the same visitor on every session.
const DISMISSED_KEY = "popup-dismissed-v2";
// Require some scroll depth AND a short delay before showing. Prevents the
// modal from hijacking the first impression on mobile.
const SCROLL_TRIGGER_PX = 600;
const DELAY_MS = 8000;

export default function PopupCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(DISMISSED_KEY)) return;

    const maybeFire = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      setIsOpen(true);
    };

    const onScroll = () => {
      if (window.scrollY >= SCROLL_TRIGGER_PX) maybeFire();
    };

    const timer = window.setTimeout(maybeFire, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // ignore quota / private mode errors
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 backdrop-blur-sm p-4"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        className="relative bg-surface border border-border max-w-md w-full p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          onClick={dismiss}
          className="absolute top-3 right-4 text-cream-muted hover:text-cream transition-colors text-2xl leading-none w-11 h-11 flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 mt-6 md:mt-0">
          Now Delivering
        </p>
        <h2
          id="popup-heading"
          className="font-serif text-2xl text-cream mb-4 leading-snug"
        >
          We Cater to All of New York City
        </h2>
        <p className="text-cream-muted text-sm leading-relaxed mb-6">
          Order from our Chelsea location for delivery — we can deliver to
          addresses within a 14-mile radius. No third-party fees.
        </p>
        <Link
          href="/order"
          onClick={dismiss}
          className="inline-block text-sm tracking-widest uppercase bg-gold text-ink px-8 py-3 hover:bg-gold-dark transition-colors"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}
