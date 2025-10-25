import React from 'react';

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-white/70">Start free. Upgrade for AI detection, verified helpers, extended history, and more.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Plan
          name="Freemium"
          price="Free"
          cta="Start Free"
          features={[
            'Silent SOS to trusted contacts',
            'Live location sharing (24 hrs)',
            'Basic ride route alerts',
            'Quick call and message shortcuts',
          ]}
          highlight={false}
        />

        <Plan
          name="Vanguard Pro"
          price="₹99/month"
          cta="Upgrade to Pro"
          features={[
            'AI-powered threat detection',
            'Verified helper alerts nearby',
            'Call log access (30 days, consent-based)',
            'Extended location history (30 days)',
            'Background audio/video capture',
            'Priority support and reliability SLAs',
          ]}
          highlight
        />
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-white/60">
        Privacy-first: All evidence and location data auto-delete after 24 hours unless securely preserved for an ongoing investigation with your consent or lawful request. End-to-end encryption protects data in transit.
      </p>
    </section>
  );
}

function Plan({ name, price, features, cta, highlight }) {
  return (
    <div className={`relative rounded-2xl border p-6 ${
      highlight
        ? 'border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-neutral-900/60 to-transparent'
        : 'border-white/10 bg-neutral-900/40'
    }`}>
      {highlight && (
        <div className="absolute -top-3 left-6 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          Best protection
        </div>
      )}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="mt-2 text-3xl font-semibold text-emerald-300">{price}</div>
        </div>
        <a href="#download" className={`rounded-md px-4 py-2 font-medium transition-colors ${
          highlight ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
        }`}>
          {cta}
        </a>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-white/80">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
