'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/white-label', label: 'White Label' },
  { href: '/functional-range', label: 'Functional Range' },
  { href: '/production', label: 'Production' },
  { href: '/contact', label: 'Contact' },
]

const DARK_HERO_PAGES = ['/functional-range']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isDarkPage = DARK_HERO_PAGES.includes(pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const useLightLogo = !scrolled && isDarkPage

  const getLinkClass = (href: string) => {
    const isActive = pathname === href
    if (scrolled || !isDarkPage) {
      return isActive
        ? 'text-charcoal font-semibold border-b border-charcoal pb-0.5'
        : 'text-charcoal/50 hover:text-charcoal'
    } else {
      return isActive
        ? 'text-cream font-semibold border-b border-cream pb-0.5'
        : 'text-cream/60 hover:text-cream'
    }
  }

  const ctaClass = scrolled || !isDarkPage
    ? 'bg-forest text-cream hover:bg-charcoal'
    : 'bg-cream text-charcoal hover:bg-gold'

  const hamColor = scrolled || !isDarkPage ? 'bg-charcoal' : 'bg-cream'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-charcoal/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center">
          <Image
            src={useLightLogo ? '/images/logo-light.png' : '/images/logo-dark.png'}
            alt="Food Lab"
            width={160}
            height={52}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm transition-colors duration-200 tracking-wide ${getLinkClass(href)}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`ml-2 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${ctaClass}`}
            >
              Get in touch
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${hamColor} ${menuOpen ? 'rotate-45 translate-y-[10px]' : ''}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${hamColor} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px transition-all duration-300 origin-center ${hamColor} ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal/10 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-display text-2xl font-light ${pathname === href ? 'text-forest' : 'text-charcoal/80 hover:text-charcoal'}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}