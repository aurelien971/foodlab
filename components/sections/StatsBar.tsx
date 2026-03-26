const stats = [
  { value: '500+', label: 'Global establishments' },
  { value: '2', label: 'Production facilities' },
  { value: '100%', label: 'Natural ingredients' },
  { value: '48h', label: 'Sample turnaround' },
]

export default function StatsBar() {
  return (
    <section className="bg-forest text-cream py-14">
      <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span
              className="font-display font-light"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              {value}
            </span>
            <span className="font-body text-sm text-cream/50 tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}