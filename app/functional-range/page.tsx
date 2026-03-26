import Link from 'next/link'

const formats = [
  {
    title: 'Hospitality',
    desc: 'Pump-shelf format designed for easy service. Add to any drink menu with zero friction — no mixing, no measuring.',
    tags: ['Cafés', 'Restaurants', 'Hotels', 'Gyms'],
  },
  {
    title: 'Retail / B2C',
    desc: 'Customers can purchase the same products directly for home use via our Bloomin retail channel.',
    tags: ['Take-home', 'Online shop', 'Gift-ready'],
    link: { label: 'Shop at Bloomin', href: 'https://www.bloomin.co.uk' },
  },
]

const ingredients = [
  { name: "Lion's Mane", benefit: 'Focus & cognitive function' },
  { name: 'Reishi', benefit: 'Stress & immunity support' },
  { name: 'Chaga', benefit: 'Antioxidant & energy' },
  { name: 'Ashwagandha', benefit: 'Adaptogenic stress relief' },
  { name: 'Turmeric', benefit: 'Anti-inflammatory' },
  { name: 'Elderberry', benefit: 'Immune defence' },
  { name: 'Vitamin C', benefit: 'Immunity & skin' },
  { name: 'B-Complex', benefit: 'Energy metabolism' },
]

export default function FunctionalRangePage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/35 mb-6">Functional range</p>
          <h1 className="font-display font-light leading-tight mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Wellness,<br /><em className="italic" style={{ color: '#C9A84C' }}>effortlessly served.</em>
          </h1>
          <p className="max-w-xl font-body text-cream/55 text-base md:text-lg leading-relaxed">
            Functional ingredients in a pump-shelf format — ready for hospitality service or direct retail. No powders, no prep, no hassle.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal text-cream border-t border-cream/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/30 mb-12">Two channels</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {formats.map(({ title, desc, tags, link }) => (
              <div key={title} className="border border-cream/10 rounded-2xl p-8 md:p-10 hover:border-cream/25 transition-colors duration-300">
                <h3 className="font-display text-3xl md:text-4xl font-light mb-4">{title}</h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed mb-7">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-body border border-cream/15 rounded-full text-cream/50">{tag}</span>
                  ))}
                </div>
                {link && (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-medium text-gold hover:text-cream transition-colors duration-200">
                    {link.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-12">Key ingredients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/10 overflow-hidden rounded-sm">
            {ingredients.map(({ name, benefit }) => (
              <div key={name} className="bg-cream p-6 md:p-8 hover:bg-cream-dark transition-colors duration-200">
                <p className="font-display text-xl font-light mb-1">{name}</p>
                <p className="font-body text-xs text-charcoal/45">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}