import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <p className="font-display font-800 text-4xl uppercase tracking-tight text-paper mb-4">
            Il Nonno
          </p>
          <p className="text-paper/60 text-sm leading-relaxed max-w-xs">
            An intimate 20-seat Italian restaurant in Astoria, NY. Elevated dining rooted in family, legacy, and love for the craft.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-display text-xs font-600 tracking-widest uppercase text-red mb-4">Explore</p>
          <ul className="space-y-2">
            {[
              ["Our Story", "/about"],
              ["Menu", "/menu"],
              ["Order Online", "/order"],
              ["Catering", "/catering"],
              ["Reservations", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-display text-xs font-600 tracking-widest uppercase text-red mb-4">Visit Us</p>
          <address className="not-italic text-sm text-paper/60 leading-relaxed space-y-1">
            <p>Astoria, New York</p>
            <p className="mt-3">
              <a href="tel:+17181234567" className="hover:text-paper transition-colors">(718) 123-4567</a>
            </p>
            <p>
              <a href="mailto:hello@ilnonnonyc.com" className="hover:text-paper transition-colors">hello@ilnonnonyc.com</a>
            </p>
          </address>
          <div className="mt-4 text-sm text-paper/60 space-y-1">
            <p>Wed–Thu: 5pm – 10pm</p>
            <p>Fri–Sat: 5pm – 11pm</p>
            <p>Sun: 4pm – 9pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} Il Nonno NYC. All rights reserved.
          </p>
          <p className="text-xs text-paper/40">
            Astoria · Long Island City · Upper East Side · Williamsburg
          </p>
        </div>
      </div>
    </footer>
  );
}
