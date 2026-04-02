'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const ACTIVE_COUNTRIES: Record<string, string> = {
  '056': 'Belgium', '124': 'Canada', '208': 'Denmark', '246': 'Finland',
  '250': 'France', '276': 'Germany', '344': 'Hong Kong', '352': 'Iceland',
  '372': 'Ireland', '410': 'South Korea', '414': 'Kuwait', '528': 'Netherlands',
  '578': 'Norway', '634': 'Qatar', '682': 'Saudi Arabia', '702': 'Singapore',
  '752': 'Sweden', '756': 'Switzerland', '784': 'United Arab Emirates',
  '826': 'United Kingdom', '840': 'United States',
}

const countryGroups = [
  { country: 'United Kingdom', flag: '🇬🇧' },
  { country: 'United States', flag: '🇺🇸' },
  { country: 'UAE', flag: '🇦🇪' },
  { country: 'Canada', flag: '🇨🇦' },
  { country: 'Denmark', flag: '🇩🇰' },
  { country: 'Germany', flag: '🇩🇪' },
  { country: 'Ireland', flag: '🇮🇪' },
  { country: 'South Korea', flag: '🇰🇷' },
  { country: 'Hong Kong', flag: '🇭🇰' },
  { country: 'Singapore', flag: '🇸🇬' },
  { country: 'Norway', flag: '🇳🇴' },
  { country: 'Sweden', flag: '🇸🇪' },
  { country: 'France', flag: '🇫🇷' },
  { country: 'Switzerland', flag: '🇨🇭' },
  { country: 'Netherlands', flag: '🇳🇱' },
  { country: 'Belgium', flag: '🇧🇪' },
  { country: 'Kuwait', flag: '🇰🇼' },
  { country: 'Saudi Arabia', flag: '🇸🇦' },
  { country: 'Qatar', flag: '🇶🇦' },
  { country: 'Finland', flag: '🇫🇮' },
  { country: 'Iceland', flag: '🇮🇸' },
]

export default function WorldMap() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Full width title */}
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-4">Global presence</p>
        <h2 className="font-display font-light leading-tight text-charcoal mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
          Trusted across <em className="italic text-forest">{countryGroups.length} countries.</em>
        </h2>
        <p className="font-body text-charcoal/40 text-sm mb-8">75+ cities worldwide</p>

        {/* Side by side — stretch so both columns are same height */}
        <div className="flex gap-6" style={{ alignItems: 'stretch' }}>

          {/* Left: countries in 2 cols, fixed width */}
          <div style={{ width: '200px', flexShrink: 0 }}>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
              {countryGroups.map(({ country, flag }) => (
                <span key={country} className="font-body text-xs text-charcoal/55 flex items-center gap-1 whitespace-nowrap">
                  <span>{flag}</span> {country}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-1 text-[10px] font-body text-charcoal/30">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-forest inline-block flex-shrink-0" /> Active market</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-gold inline-block flex-shrink-0" /> Hover to highlight</div>
            </div>
          </div>

          {/* Right: map clipped to same height as country list */}
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', height: '100%' }}>
            <ComposableMap
              projectionConfig={{ scale: 147, center: [10, 5] }}
              viewBox="0 0 800 500"
              style={{ width: '100%', height: '100%', display: 'block', marginTop: '-15%' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isActive = ACTIVE_COUNTRIES[geo.id]
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isActive ? '#2C4A3E' : '#DDD8CE'}
                        stroke="#F5F0E8"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: 'none' },
                          hover: { fill: isActive ? '#C9A84C' : '#D0C9BE', outline: 'none', cursor: isActive ? 'pointer' : 'default' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

        </div>
      </div>
    </section>
  )
}