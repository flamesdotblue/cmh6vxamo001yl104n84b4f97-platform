import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <div className="text-lg font-semibold">VANGUARD</div>
          <p className="mt-2 max-w-sm text-sm text-white/70">Discreet, reliable safety for India. Focused on women’s safety, built for everyone. Designed to scale across cities and states.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:col-span-2 md:grid-cols-4">
          <div>
            <div className="mb-3 font-medium text-white/90">Product</div>
            <ul className="space-y-2 text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#download" className="hover:text-white">Get the App</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-medium text-white/90">Security</div>
            <ul className="space-y-2 text-white/70">
              <li>End-to-end encryption</li>
              <li>24-hour auto-delete</li>
              <li>Consent-based sharing</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-medium text-white/90">Integrations</div>
            <ul className="space-y-2 text-white/70">
              <li>Govt & Police APIs</li>
              <li>Ride-share partners</li>
              <li>Emergency services</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-medium text-white/90">Company</div>
            <ul className="space-y-2 text-white/70">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/60 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} VANGUARD Technologies Pvt. Ltd. Made with care in India.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
