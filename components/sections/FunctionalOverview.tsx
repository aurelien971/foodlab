import Link from 'next/link'

const ingredients = [
  { name: 'Functional Mushrooms', desc: "Lion's mane, reishi, chaga — adaptogenic blends for focus, immunity, and recovery." },
  { name: 'Vitamins & Minerals', desc: 'Targeted formulations supporting energy, immunity, and everyday wellbeing.' },
  { name: 'Botanical Extracts', desc: 'Ashwagandha, turmeric, elderberry and more — in a convenient pump-shelf format.' },
]

export default function FunctionalOverview() {
  return (
    <section className="py-28 bg-charcoal text-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/35 mb-5">Functional range</p>
            <h2 className="font-display font-light leading-tight mb-7" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}>
              Health-forward<br /><em className="italic" style={{ color: '#C9A84C' }}>functional shots</em>
            </h2>
            <p className="font-body text-cream/55 leading-relaxed text-sm md:text-base max-w-sm mb-10">
              Functional wellness is one of the fastest-growing categories in hospitality. We make it effortless — pump-shelf format, ready to serve or retail from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/functional-range" className="px-6 py-3 bg-gold text-charcoal text-sm font-medium font-body rounded-full hover:bg-cream transition-colors duration-300 text-center">
                Explore functional range
              </Link>
              <a href="https://www.bloomin.co.uk" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-cream/15 text-cream/70 text-sm font-medium font-body rounded-full hover:border-cream/40 hover:text-cream transition-colors duration-300 text-center">
                Shop at Bloomin →
              </a>
            </div>
          </div>

          <div>
            {ingredients.map(({ name, desc }, i) => (
              <div key={name} className="border-t border-cream/10 py-8">
                <div className="flex items-start gap-5">
                  <span className="font-body text-xs text-cream/25 mt-1 w-6 flex-shrink-0 tabular-nums">0{i + 1}</span>
                  <div>
                    <p className="font-display text-xl md:text-2xl font-light mb-2">{name}</p>
                    <p className="font-body text-sm text-cream/45 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-cream/10 pt-6 pl-11">
              <p className="font-body text-xs text-cream/25 leading-relaxed">Available for hospitality service + direct B2C retail via Bloomin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}