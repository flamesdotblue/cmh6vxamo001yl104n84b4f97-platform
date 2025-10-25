import React from 'react';
import { Shield, Menu } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import PreRegister from './components/PreRegister';
import Footer from './components/Footer';

export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="text-lg font-semibold tracking-wide">VANGUARD</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#features" className="text-white/80 transition-colors hover:text-white">Features</a>
            <a href="#pricing" className="text-white/80 transition-colors hover:text-white">Pricing</a>
            <a href="#pre-register" className="text-white/80 transition-colors hover:text-white">Pre-register</a>
            <a href="#download" className="rounded-md bg-emerald-500 px-4 py-2 font-medium text-black transition-colors hover:bg-emerald-400">Get the App</a>
          </nav>
          <button className="rounded-md p-2 text-white/80 hover:bg-white/5 hover:text-white md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 px-4 pb-4 md:hidden">
            <div className="flex flex-col gap-2">
              <a href="#features" className="rounded-md px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>Features</a>
              <a href="#pricing" className="rounded-md px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>Pricing</a>
              <a href="#pre-register" className="rounded-md px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white" onClick={() => setOpen(false)}>Pre-register</a>
              <a href="#download" className="rounded-md bg-emerald-500 px-3 py-2 text-center font-medium text-black hover:bg-emerald-400" onClick={() => setOpen(false)}>Get the App</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <PreRegister />
      </main>

      <Footer />
    </div>
  );
}
