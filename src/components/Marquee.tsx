const items = [
  "Reserve a Table",
  "★",
  "Astoria, New York",
  "★",
  "Handmade Pasta",
  "★",
  "20 Seats Only",
  "★",
  "Order Online",
  "★",
  "Elevated Italian",
  "★",
  "Family Rooted",
  "★",
  "Private Catering",
  "★",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-ink py-3 select-none">
      <div className="flex marquee-track animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-block px-4 font-display text-xs font-600 tracking-widest uppercase ${
              item === "★" ? "text-red" : "text-paper/80"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
