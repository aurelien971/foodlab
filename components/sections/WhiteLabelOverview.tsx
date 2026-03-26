import Link from 'next/link'

const features = [
  { title: 'Custom Recipes', body: 'We collaborate directly on your desired flavour profile — developing bespoke formulations from a blank page.' },
  { title: 'Your Brand, Entirely', body: 'Products ship with your labels. No Food Lab branding, no trace back to us. It is simply your product.' },
  { title: 'Natural Ingredients Only', body: 'We source only the highest-quality, purely natural ingredients. No artificial additives or shortcuts.' },
  { title: 'Fast Turnaround', body: 'From brief to sample in days. Our capacity scales with your demand without compromising quality.' },
]

export default function WhiteLabelOverview() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-12 border-b border-charcoal/10">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-5">Core offering</p>
            <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}>
              White Label<br /><em className="italic">Production</em>
            </h2>
          </div>
          <p className="max-w-sm font-body text-charcoal/55 leading-relaxed text-sm md:text-base">
            Your recipe. Your brand. Our facility. We produce syrups and cocktail solutions indistinguishable from in-house — because they are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10 overflow-hidden rounded-sm">
          {features.map(({ title, body }) => (
            <div key={title} className="bg-cream p-8 md:p-10 hover:bg-cream-dark transition-colors duration-300 group">
              <h3 className="font-display text-2xl md:text-3xl font-light mb-3 group-hover:text-forest transition-colors duration-300">{title}</h3>
              <p className="font-body text-sm text-charcoal/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { type: 'Syrups', audience: 'Coffee chains & cafés', desc: 'Vanilla, salted caramel, lavender, seasonal specials — any flavour profile, ready for your menu.' },
            { type: 'Cocktails', audience: 'Restaurants & bars', desc: 'Pre-batched solutions, mixers and infused syrups for consistent, scalable bar service.' },
          ].map(({ type, audience, desc }) => (
            <div key={type} className="border border-charcoal/12 rounded-2xl p-8 flex flex-col gap-3 hover:border-forest/40 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="font-body text-xs tracking-widest uppercase text-muted">Range</span>
                <span className="font-body text-xs text-forest bg-forest/10 px-3 py-1 rounded-full">{audience}</span>
              </div>
              <h3 className="font-display text-3xl font-light">{type}</h3>
              <p className="font-body text-sm text-charcoal/55 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/white-label" className="inline-flex items-center gap-3 font-body text-sm font-medium text-forest hover:text-charcoal transition-colors duration-200 group">
            Learn more about white label
            <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300 inline-block" />
          </Link>
        </div>
      </div>
    </section>
  )
}