import React from 'react';
import Background3D from './Background3D';
import { createClient } from '@supabase/supabase-js';

let supabaseSingleton;
function getSupabase() {
  if (!supabaseSingleton) {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;
    supabaseSingleton = createClient(url || '', anon || '');
  }
  return supabaseSingleton;
}

export default function PreRegister() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    state: '',
    country: '',
    city: '',
    gender: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({ type: '', message: '' });

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name || !form.email || !form.country) return 'Please fill required fields (name, email, country).';
    const re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!re.test(form.email)) return 'Please enter a valid email.';
    return '';
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    const err = validate();
    if (err) {
      setStatus({ type: 'error', message: err });
      return;
    }
    setLoading(true);
    try {
      const supabase = getSupabase();
      if (!supabase) throw new Error('Supabase client not initialized');
      const { error } = await supabase.from('pre_registrations').insert({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        state: form.state.trim() || null,
        country: form.country.trim(),
        city: form.city.trim() || null,
        gender: form.gender || null,
        created_at: new Date().toISOString(),
      });
      if (error) throw error;
      setStatus({ type: 'success', message: 'Pre-registration successful. We\'ll notify you on launch!' });
      setForm({ name: '', email: '', state: '', country: '', city: '', gender: '' });
    } catch (e2) {
      setStatus({ type: 'error', message: e2.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pre-register" className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 md:px-6 md:py-24">
      <Background3D overlayFrom="from-neutral-950/20" overlayVia="via-neutral-950/70" overlayTo="to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Pre-register for VANGUARD</h2>
        <p className="mt-3 text-white/70">Be the first to get access. We\'ll notify you as we roll out city by city across India.</p>
      </div>

      <form onSubmit={onSubmit} className="relative z-10 mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur md:grid-cols-2">
        <Field label="Full Name" required>
          <input name="name" value={form.name} onChange={onChange} className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring-2" placeholder="e.g., Aisha Sharma" />
        </Field>
        <Field label="Email" required>
          <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring-2" placeholder="you@example.com" />
        </Field>
        <Field label="Country" required>
          <input name="country" value={form.country} onChange={onChange} className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring-2" placeholder="India" />
        </Field>
        <Field label="State">
          <input name="state" value={form.state} onChange={onChange} className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring-2" placeholder="e.g., Maharashtra" />
        </Field>
        <Field label="City">
          <input name="city" value={form.city} onChange={onChange} className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring-2" placeholder="e.g., Mumbai" />
        </Field>
        <Field label="Gender">
          <select name="gender" value={form.gender} onChange={onChange} className="w-full rounded-md border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm outline-none ring-emerald-400/30 focus:ring-2">
            <option value="">Prefer not to say</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Other">Other</option>
          </select>
        </Field>

        <div className="md:col-span-2 mt-2 flex items-center justify-between gap-4">
          <p className="text-xs text-white/60">We respect privacy. Submissions are securely stored. No spam.</p>
          <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-emerald-400 disabled:opacity-60">
            {loading ? 'Submitting…' : 'Pre-register'}
          </button>
        </div>

        {status.message && (
          <div className={`md:col-span-2 mt-2 rounded-md border px-3 py-2 text-sm ${status.type === 'success' ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' : 'border-red-400/30 bg-red-500/10 text-red-200'}`}>
            {status.message}
          </div>
        )}
      </form>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-white/80">{label}{required ? <span className="text-red-400"> *</span> : null}</span>
      {children}
    </label>
  );
}
