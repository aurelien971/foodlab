import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-cream" />
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] md:w-[780px] md:h-[780px] rounded-full bg-forest/[0.06] translate-x-1/3 -translate-y-1/4" />
      <div className="absolute top-40 right-64 w-32 h-32 rounded-full border border-forest/20" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 w-full">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-10">
          B2B · Custom Production · White Label
        </p>
        <h1
          className="font-display font-light leading-[0.88] mb-12"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          Crafted for
          <br />
          <em className="italic text-forest">the brands</em>
          <br />
          behind the bar.
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-charcoal/12">
          <p className="max-w-md font-body text-base md:text-lg text-charcoal/60 leading-relaxed font-light">
            Food Lab produces custom-recipe syrups, cocktail solutions, and functional shots — branded entirely as yours. Trusted by 500+ establishments worldwide.
          </p>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/white-label"
              className="px-7 py-3.5 bg-forest text-cream font-body text-sm font-medium rounded-full hover:bg-charcoal transition-colors duration-300"
            >
              Explore white label
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-charcoal/25 text-charcoal font-body text-sm font-medium rounded-full hover:border-charcoal transition-colors duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}