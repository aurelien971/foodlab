'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-40 pb-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted mb-6">Contact</p>
          <h1 className="font-display font-light leading-tight" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Start the<br /><em className="italic text-forest">conversation.</em>
          </h1>
        </div>
      </section>

      <section className="pb-28 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-10 max-w-sm">
              Whether you have a precise brief, a rough idea, or just want to understand what's possible — we're happy to talk. No commitment required.
            </p>
            <div className="space-y-6">
              {[
                { label: 'For white label & syrups', detail: 'Custom recipes, branding, volume pricing' },
                { label: 'For functional range', detail: 'Hospitality formats, retail partnerships' },
                { label: 'For production enquiries', detail: 'UK or US facility, co-packing' },
              ].map(({ label, detail }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-body text-sm font-medium text-charcoal">{label}</p>
                    <p className="font-body text-xs text-charcoal/45 mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col justify-center py-16">
              <p className="font-display text-4xl font-light mb-3"><em className="italic text-forest">Thank you.</em></p>
              <p className="font-body text-sm text-charcoal/55">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { id: 'name', label: 'Name', placeholder: 'Your name' },
                  { id: 'company', label: 'Company', placeholder: 'Your brand or business' },
                ].map(({ id, label, placeholder }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="font-body text-xs tracking-widest uppercase text-muted">{label}</label>
                    <input
                      id={id} type="text" placeholder={placeholder} required
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                      className="bg-cream-dark border border-charcoal/10 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-forest transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-body text-xs tracking-widest uppercase text-muted">Email</label>
                <input
                  id="email" type="email" placeholder="you@brand.com" required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="bg-cream-dark border border-charcoal/10 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-forest transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="font-body text-xs tracking-widest uppercase text-muted">I'm interested in</label>
                <select
                  id="type" value={form.type}
                  onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                  className="bg-cream-dark border border-charcoal/10 rounded-xl px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-forest transition-colors duration-200 appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="white-label-syrups">White label syrups</option>
                  <option value="white-label-cocktails">White label cocktails</option>
                  <option value="functional-range">Functional range</option>
                  <option value="other">Other / General enquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-body text-xs tracking-widest uppercase text-muted">Message</label>
                <textarea
                  id="message" rows={5}
                  placeholder="Tell us about your project, volumes, or anything else relevant..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="bg-cream-dark border border-charcoal/10 rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-forest transition-colors duration-200 resize-none"
                />
              </div>
              <button type="submit" className="mt-2 w-full md:w-auto md:self-start px-8 py-4 bg-forest text-cream font-body text-sm font-medium rounded-full hover:bg-charcoal transition-colors duration-300">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}