import React from 'react';
import { AlertTriangle, MapPin, Users, Lock } from 'lucide-react';
import Background3D from './Background3D';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[86vh] w-full items-center overflow-hidden">
      <Background3D />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-neutral-900/60 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Built for discreet, instant protection
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            VANGUARD
            <span className="block bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Personal Security & Emergency Response</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            The fastest, most discreet safety app in India. Trigger silent SOS, share live location, and let AI watch your back. Focused on women’s safety, built for everyone.
          </p>
          <div id="download" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 font-medium text-black transition-colors hover:bg-emerald-400">Get VANGUARD</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10">Explore Features</a>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            <Badge icon={<AlertTriangle className="h-4 w-4" />} label="Silent SOS" />
            <Badge icon={<MapPin className="h-4 w-4" />} label="Live Tracking" />
            <Badge icon={<Lock className="h-4 w-4" />} label="E2E Encryption" />
            <Badge icon={<Users className="h-4 w-4" />} label="Verified Helpers" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-emerald-400/20 bg-neutral-900/60 px-3 py-2 text-sm text-white/90 backdrop-blur">
      <span className="text-emerald-300">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
