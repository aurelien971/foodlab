const flavors = [
  { name: 'Vanilla', category: 'Syrup', note: 'Classic — always bespoke' },
  { name: 'Salted Caramel', category: 'Syrup', note: 'Seasonal favourite' },
  { name: 'Lavender', category: 'Syrup', note: 'Floral & refined' },
  { name: 'Hazelnut', category: 'Syrup', note: 'Rich & roasted' },
  { name: 'Ginger', category: 'Syrup / Cocktail', note: 'Versatile base' },
  { name: 'Hibiscus', category: 'Cocktail', note: 'Vibrant & tart' },
  { name: 'Yuzu Citrus', category: 'Cocktail', note: 'Japanese-inspired' },
  { name: 'Smoked Maple', category: 'Syrup', note: 'Autumn special' },
]

export default function FlavorShowcase() {
  return (
    <section className="py-28 bg-cream-dark">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-5">A taste of what's possible</p>
          <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}>
            Sample flavours we've<br /><em className="italic">created for clients</em>
          </h2>
          <p className="mt-5 text-sm text-charcoal/45 font-body max-w-md leading-relaxed">
            Every recipe starts from scratch. These are examples of the range — your flavour is entirely tailored to your brand and audience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/10 overflow-hidden rounded-sm">
          {flavors.map(({ name, category, note }) => (
            <div key={name} className="bg-cream-dark p-6 md:p-8 hover:bg-cream transition-colors duration-200 group cursor-default">
              <p className="font-body text-[10px] tracking-widest uppercase text-muted mb-3">{category}</p>
              <p className="font-display text-xl md:text-2xl font-light group-hover:text-forest transition-colors duration-200">{name}</p>
              <p className="font-body text-xs text-charcoal/35 mt-1.5">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <span className="w-12 h-px bg-forest" />
          <p className="font-display italic text-xl md:text-2xl font-light text-forest">+ unlimited custom possibilities.</p>
        </div>
      </div>
    </section>
  )
}