const facilities = [
  {
    location: 'London, UK',
    details: 'Our primary UK hub producing syrups and functional ranges for European distribution. Supported by a co-packing network across Great Britain for additional volume capacity.',
    capabilities: ['Syrup production', 'Functional shots', 'Custom labelling', 'Co-packing network'],
  },
  {
    location: 'Rhode Island, US',
    details: 'East Coast facility serving North American markets. Local production dramatically reduces lead times and shipping costs for US-based clients.',
    capabilities: ['Syrup production', 'Cocktail solutions', 'US distribution', 'East Coast logistics'],
  },
]

export default function ProductionPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-6">Production</p>
          <h1 className="font-display font-light leading-tight mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Built close<br /><em className="italic text-forest">to your market.</em>
          </h1>
          <p className="max-w-xl font-body text-charcoal/60 text-base md:text-lg leading-relaxed">
            Two production facilities — London and Rhode Island — plus a UK co-packing network. Local manufacturing means faster turnarounds, lower costs, and fresher product.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-5">
          {facilities.map(({ location, details, capabilities }) => (
            <div key={location} className="bg-cream rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-forest" />
                    <span className="font-body text-xs tracking-widest uppercase text-muted">Facility</span>
                  </div>
                  <h2 className="font-display font-light leading-tight mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{location}</h2>
                  <p className="font-body text-sm text-charcoal/55 leading-relaxed">{details}</p>
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted mb-5">Capabilities</p>
                  <ul className="space-y-3">
                    {capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-3 font-body text-sm text-charcoal/70">
                        <span className="w-1 h-1 rounded-full bg-forest flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}