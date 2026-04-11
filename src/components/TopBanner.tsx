// src/components/TopBanner.tsx
import Link from "next/link";

const bannerLinks = [
  { label: "Reserve", href: "/contact" },
  { label: "Order Online", href: "/order" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
];

export default function TopBanner() {
  return (
    <div className="bg-surface border-b border-border">
      <div className="flex justify-center">
        {bannerLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-7 py-2.5 text-xs tracking-widest uppercase text-cream-muted hover:bg-gold/10 hover:text-gold transition-colors${
              i < bannerLinks.length - 1 ? " border-r border-border" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
