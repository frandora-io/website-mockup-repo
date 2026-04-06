import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl tracking-widest uppercase text-cream mb-4">
            Il Nonno
          </p>
          <p className="text-cream-muted text-sm leading-relaxed">
            An intimate 20-seat Italian restaurant in Astoria, NY. Elevated dining rooted in family, legacy, and love for the craft.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold mb-4">Explore</p>
          <ul className="space-y-2">
            {[
              ["Our Story", "/about"],
              ["Menu", "/menu"],
              ["Order Online", "/order"],
              ["Catering", "/catering"],
              ["Reservations", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-cream-muted hover:text-cream transition-colors tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold mb-4">Find Us</p>
          <address className="not-italic text-sm text-cream-muted leading-relaxed space-y-1">
            <p>Astoria, New York</p>
            <p className="mt-3">
              <a href="tel:+17181234567" className="hover:text-cream transition-colors">
                (718) 123-4567
              </a>
            </p>
            <p>
              <a href="mailto:hello@ilnonnonyc.com" className="hover:text-cream transition-colors">
                hello@ilnonnonyc.com
              </a>
            </p>
          </address>
          <div className="mt-4 text-sm text-cream-muted space-y-1">
            <p>Wed–Thu: 5pm – 10pm</p>
            <p>Fri–Sat: 5pm – 11pm</p>
            <p>Sun: 4pm – 9pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-cream-muted tracking-wide">
            © {new Date().getFullYear()} Il Nonno NYC. All rights reserved.
          </p>
          <p className="text-xs text-cream-muted tracking-wide">
            Astoria · Long Island City · Upper East Side · Williamsburg
          </p>
        </div>
      </div>
    </footer>
  );
}
