"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PopupCTA() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("popup-dismissed")) {
      setIsOpen(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("popup-dismissed", "1");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative bg-surface border border-border max-w-md w-[90%] p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-5 text-cream-muted hover:text-cream transition-colors text-lg leading-none"
          aria-label="Close"
        >
          ✕
        </button>
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Now Delivering
        </p>
        <h2 className="font-serif text-2xl text-cream mb-4 leading-snug">
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
