import Link from 'next/link'

const process = [
  { step: '01', title: 'Brief', desc: 'You share your target flavour, intended use case, and any brand guidelines.' },
  { step: '02', title: 'Development', desc: 'Our team develops formulations using natural ingredients, aligned to your spec.' },
  { step: '03', title: 'Sample', desc: "You receive samples within 48 hours. We iterate until it's exactly right." },
  { step: '04', title: 'Production', desc: 'We produce at your required volume with your labels and packaging.' },
]

const usps = [
  'Purely natural ingredients — no artificials',
  'Full NDA and confidentiality on all client work',
  'Custom labels and branded packaging',
  'Scalable volumes from boutique to large chain',
  'Both UK and US production available',
  'Ongoing recipe development partnership',
]

export default function WhiteLabelPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-6">White label</p>
          <h1 className="font-display font-light leading-tight mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Your product.<br /><em className="italic text-forest">Our production.</em>
          </h1>
          <p className="max-w-xl font-body text-charcoal/60 text-base md:text-lg leading-relaxed">
            We create custom-recipe syrups and cocktail solutions that carry your brand exclusively — trusted by 500+ establishments globally, from independent cafés to large international chains.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-12">How it works</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-charcoal/10 overflow-hidden rounded-sm">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-cream-dark p-8 hover:bg-cream transition-colors duration-200">
                <p className="font-display text-5xl font-light text-charcoal/15 mb-6">{step}</p>
                <h3 className="font-display text-2xl font-light mb-3">{title}</h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-6">Why Food Lab</p>
            <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
              The off-the-shelf<br /><em className="italic">alternative isn't enough.</em>
            </h2>
          </div>
          <ul className="space-y-4 pt-2">
            {usps.map((usp) => (
              <li key={usp} className="flex items-start gap-4 font-body text-sm text-charcoal/70 border-b border-charcoal/8 pb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0 mt-2" />
                {usp}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
            Ready to brief us?
          </h2>
          <Link href="/contact" className="px-8 py-4 bg-cream text-charcoal font-body text-sm font-medium rounded-full hover:bg-gold transition-colors duration-300 flex-shrink-0">
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  )
}