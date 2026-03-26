import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-28 bg-forest text-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-16">
        <div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/35 mb-5">Work with us</p>
          <h2 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}>
            Let's build<br /><em className="italic">your product.</em>
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="font-body text-cream/55 leading-relaxed mb-8 text-sm md:text-base">
            Whether you have a precise brief or just a starting idea — we develop, produce, and brand a product entirely tailored to your audience.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-cream text-charcoal font-body text-sm font-medium rounded-full hover:bg-gold transition-colors duration-300">
            Start the conversation
          </Link>
        </div>
      </div>
    </section>
  )
}