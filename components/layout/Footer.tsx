import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60 py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-cream/10">
          <div className="max-w-xs">
            <p className="font-display text-2xl text-cream mb-3">Food Lab</p>
            <p className="text-sm leading-relaxed">
              Custom-crafted syrups, functional shots and cocktail solutions — built for the brands behind the bar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-cream font-medium mb-4 tracking-widest uppercase text-xs">Offerings</p>
              <ul className="space-y-2">
                <li><Link href="/white-label" className="hover:text-cream transition-colors">White Label</Link></li>
                <li><Link href="/functional-range" className="hover:text-cream transition-colors">Functional Range</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-cream font-medium mb-4 tracking-widest uppercase text-xs">Company</p>
              <ul className="space-y-2">
                <li><Link href="/production" className="hover:text-cream transition-colors">Production</Link></li>
                <li><Link href="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-cream font-medium mb-4 tracking-widest uppercase text-xs">Facilities</p>
              <ul className="space-y-2">
                <li>London, UK</li>
                <li>Rhode Island, US</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-cream/30">© {new Date().getFullYear()} Food Lab. All rights reserved.</p>
          <a
            href="https://www.bloomin.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cream/30 hover:text-cream/60 transition-colors"
          >
            Bloomin → retail shop
          </a>
        </div>
      </div>
    </footer>
  )
}