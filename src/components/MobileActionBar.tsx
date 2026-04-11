import Link from "next/link";

/**
 * Sticky bottom bar shown only on mobile. Provides one-tap access to the
 * highest-intent actions: Menu, Call, Reserve, Directions.
 */
export default function MobileActionBar() {
  const iconClass = "w-5 h-5";

  return (
    <nav
      aria-label="Quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink/95 backdrop-blur-sm border-t border-border grid grid-cols-4 pb-[env(safe-area-inset-bottom)]"
    >
      <Link
        href="/menu"
        className="flex flex-col items-center justify-center gap-1 py-3 text-cream-muted active:bg-gold/10 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <path d="M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2z" />
          <path d="M8 7h8M8 11h8M8 15h5" />
        </svg>
        <span className="text-[10px] tracking-widest uppercase">Menu</span>
      </Link>

      <a
        href="tel:+17181234567"
        className="flex flex-col items-center justify-center gap-1 py-3 text-cream-muted active:bg-gold/10 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="text-[10px] tracking-widest uppercase">Call</span>
      </a>

      <Link
        href="/location"
        className="flex flex-col items-center justify-center gap-1 py-3 text-cream-muted active:bg-gold/10 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        <span className="text-[10px] tracking-widest uppercase">Visit</span>
      </Link>

      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-gold text-ink active:bg-gold-dark transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        <span className="text-[10px] tracking-widest uppercase font-semibold">
          Reserve
        </span>
      </Link>
    </nav>
  );
}
