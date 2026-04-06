import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <p className="font-script text-4xl text-ink mb-4">Il Nonno</p>
          <p className="text-ink-muted text-sm leading-relaxed max-w-xs">
            An intimate 20-seat Italian restaurant in Astoria, NY. Elevated dining rooted in family, legacy, and love for the craft.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ink mb-4">Explore</p>
          <ul className="space-y-2">
            {[
              ["Our Story", "/about"],
              ["Menu", "/menu"],
              ["Order Online", "/order"],
              ["Catering", "/catering"],
              ["Reservations", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-ink-muted hover:text-ink transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ink mb-4">Visit Us</p>
          <address className="not-italic text-sm text-ink-muted leading-relaxed space-y-1">
            <p>Astoria, New York</p>
            <p className="mt-3">
              <a href="tel:+17181234567" className="hover:text-ink transition-colors">(718) 123-4567</a>
            </p>
            <p>
              <a href="mailto:hello@ilnonnonyc.com" className="hover:text-ink transition-colors">hello@ilnonnonyc.com</a>
            </p>
          </address>
          <div className="mt-4 text-sm text-ink-muted space-y-1">
            <p>Wed–Thu: 5pm – 10pm</p>
            <p>Fri–Sat: 5pm – 11pm</p>
            <p>Sun: 4pm – 9pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-ink-light">
            © {new Date().getFullYear()} Il Nonno NYC. All rights reserved.
          </p>
          <p className="text-xs text-ink-light">
            Astoria · Long Island City · Upper East Side · Williamsburg
          </p>
        </div>
      </div>
    </footer>
  );
}
