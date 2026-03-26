'use client'

import { ComposableMap, Geographies, Geography } from '@vnedyalk0v/react19-simple-maps'

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

        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-4">Global presence</p>

        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Left: headline + countries */}
          <div className="flex-shrink-0 md:w-44">
            <h2 className="font-display font-light leading-tight text-charcoal mb-1" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
              Trusted across<br />
              <em className="italic text-forest">{countryGroups.length} countries.</em>
            </h2>
            <p className="font-body text-charcoal/40 text-xs mb-5">75+ cities worldwide</p>

            <div className="flex flex-col gap-1">
              {countryGroups.map(({ country, flag }) => (
                <span key={country} className="font-body text-xs text-charcoal/55 flex items-center gap-1.5">
                  <span className="text-sm">{flag}</span> {country}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-1 text-[10px] font-body text-charcoal/30">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-forest inline-block" /> Active market</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-gold inline-block" /> Hover to highlight</div>
            </div>
          </div>

          {/* Right: map */}
          <div className="flex-1 min-w-0" style={{ lineHeight: 0 }}>
            <ComposableMap
              projectionConfig={{ scale: 130, center: [10, 10] }}
              viewBox="0 0 800 450"
              style={{ width: '100%', height: 'auto' }}
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
                        strokeWidth={0.4}
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