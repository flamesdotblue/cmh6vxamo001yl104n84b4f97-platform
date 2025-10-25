import React from 'react';
import Background3D from './Background3D';
import { Shield, MapPin, Phone, Video, Users, Lock, AlertTriangle, Route, Clock, MessageCircle } from 'lucide-react';

const features = [
  {
    title: 'Silent Emergency SOS',
    desc: 'Trigger SOS via hidden button, voice phrase, or gesture. Instantly alerts trusted contacts, verified helpers, and authorities.',
    icon: Shield,
    highlights: ['Discreet activation', 'Instant alerts', 'Background evidence capture'],
  },
  {
    title: 'Live Location & Tracking',
    desc: 'Continuous real-time location sharing and route history with geofencing alerts for unusual movements.',
    icon: MapPin,
    highlights: ['30-day history', 'Route replay', 'Smart geofencing'],
  },
  {
    title: 'AI-Powered Threat Detection',
    desc: 'Analyzes audio, video, and sensors to detect distress cues. Auto-triggers SOS if you cannot respond.',
    icon: AlertTriangle,
    highlights: ['On-device inference', 'Fall/incapacity detection', 'Anomaly alerts'],
  },
  {
    title: 'Community & Verified Helpers',
    desc: 'Notifies nearby verified helpers like ride-share drivers and vetted volunteers when you need support.',
    icon: Users,
    highlights: ['Real identity checks', 'Proximity-based alerts', 'Abuse prevention'],
  },
  {
    title: 'Ride & Travel Safety',
    desc: 'Verify cab and transit journeys with live GPS and AI. Get alerted on major route deviations.',
    icon: Route,
    highlights: ['Driver/vehicle match', 'Route deviation alerts', 'Trip timeline'],
  },
  {
    title: 'Privacy & Data Security',
    desc: 'Automatic 24-hour data deletion unless preserved for investigations. End-to-end encrypted sharing.',
    icon: Lock,
    highlights: ['Auto-delete', 'E2E encryption', 'Granular controls'],
  },
  {
    title: 'Call Log & Quick Connect',
    desc: 'One-tap call/message to trusted contacts and services, with 30-day call log (consent-based).',
    icon: Phone,
    highlights: ['Trusted contacts', 'Police & ambulance', '30-day log'],
  },
  {
    title: 'Evidence Capture',
    desc: 'Background audio and video recording during SOS to aid investigations without user interaction.',
    icon: Video,
    highlights: ['Stealth recording', 'Secure cloud vault', 'Chain of custody'],
  },
  {
    title: 'Contextual Communications',
    desc: 'Auto-drafted updates with live location to keep contacts informed during emergencies.',
    icon: MessageCircle,
    highlights: ['Smart updates', 'Share ETA', 'Low-signal fallback'],
  },
  {
    title: 'Uptime & Reliability',
    desc: 'Optimized for low-latency dispatch and robust operation across Indian networks and cities.',
    icon: Clock,
    highlights: ['Sub-second triggers', 'Offline resilience', 'PAN-India scale'],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 md:px-6 md:py-24">
      <Background3D overlayFrom="from-neutral-950/20" overlayVia="via-neutral-950/70" overlayTo="to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Designed for real emergencies</h2>
        <p className="mt-3 text-white/70">Purpose-built safety stack prioritizing speed, discretion, and privacy for users across India.</p>
      </div>

      <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent p-6 sm:grid-cols-3 backdrop-blur">
        <MiniStat title="Instant SOS" value="< 1s" note="Dispatch latency" />
        <MiniStat title="Coverage" value="PAN-India" note="City to state scale" />
        <MiniStat title="Privacy" value="E2E" note="Encrypted data" />
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon: Icon, highlights }) {
  return (
    <div className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-neutral-900/50 p-5 backdrop-blur transition-colors hover:border-emerald-400/30">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
        <Icon className="h-5 w-5 text-emerald-400" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/75">{desc}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {highlights.map((h) => (
          <li key={h} className="rounded-md border border-white/10 bg-neutral-800/60 px-2.5 py-1 text-xs text-white/80">{h}</li>
        ))}
      </ul>
    </div>
  );
}

function MiniStat({ title, value, note }) {
  return (
    <div className="rounded-lg border border-white/10 bg-neutral-900/60 p-5 backdrop-blur">
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-1 text-2xl font-semibold text-emerald-300">{value}</div>
      <div className="text-xs text-white/60">{note}</div>
    </div>
  );
}
