const facilities = [
  {
    location: 'London, UK',
    details: 'Our UK production hub with an extended co-packing network across Britain — fast domestic turnaround and direct European reach.',
    tags: ['Syrups', 'Functional', 'Co-packing network'],
  },
  {
    location: 'Rhode Island, US',
    details: 'East Coast facility enabling US market supply with short lead times and significantly reduced transatlantic logistics costs.',
    tags: ['Syrups', 'Cocktail solutions', 'US distribution'],
  },
]

const advantages = [
  'Reduced shipping costs through local production',
  'Faster lead times from brief to delivery',
  'Fresher product with shorter supply chains',
  'Flexibility to scale volume quickly',
]

export default function ProductionSection() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="mb-16 pb-12 border-b border-charcoal/10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-5">Production</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}>
              Local production.<br /><em className="italic">Global reach.</em>
            </h2>
            <p className="max-w-sm font-body text-sm text-charcoal/55 leading-relaxed">
              Two dedicated facilities plus a UK co-packing network. Proximity means speed, lower costs, and reliable supply chains — wherever your brand operates.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {facilities.map(({ location, details, tags }) => (
            <div key={location} className="bg-cream-dark rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-2 h-2 rounded-full bg-forest flex-shrink-0" />
                <span className="font-body text-xs tracking-widest uppercase text-muted">Facility</span>
              </div>
              <h3 className="font-display font-light mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>{location}</h3>
              <p className="font-body text-sm text-charcoal/55 leading-relaxed mb-8">{details}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-body border border-charcoal/15 rounded-full text-charcoal/60">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-charcoal/10 rounded-2xl p-8 flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5" />
            <div>
              <p className="font-body text-sm font-medium text-charcoal mb-1">Co-packing network (UK)</p>
              <p className="font-body text-sm text-charcoal/50 leading-relaxed">Extended capacity through trusted UK manufacturers — enabling scalable production for high-volume orders.</p>
            </div>
          </div>
          <div className="border border-charcoal/10 rounded-2xl p-8">
            <p className="font-body text-xs tracking-widest uppercase text-muted mb-5">Why local production</p>
            <ul className="space-y-3">
              {advantages.map((adv) => (
                <li key={adv} className="flex items-start gap-3 font-body text-sm text-charcoal/60">
                  <span className="w-1 h-1 rounded-full bg-forest flex-shrink-0 mt-2" />
                  {adv}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}