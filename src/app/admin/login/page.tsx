'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';

function LoginForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', email, password }),
        credentials: 'include'
      });
      const data = await res.json();

      if (res.ok && data.success) {
        // Hard navigation ensures browser cookie is cleanly attached to the HTTP request for /admin
        window.location.href = redirect;
      } else {
        setError(data.error || 'Authentication failed. Please verify credentials.');
        setLoading(false);
      }
    } catch {
      setError('Network communication failure. Please check connection.');
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#141f22] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Top brand header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01747A] to-[#005a5f] flex items-center justify-center mx-auto mb-4 shadow-lg border border-teal-400/30">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">ITS COOLING CMS</h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono uppercase tracking-wider">
            Protected Administrative Portal
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-lg bg-rose-950/70 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase text-neutral-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#01747A]" />
              <span>Admin Email</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@itscooling.com"
              className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#01747A] transition"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase text-neutral-400 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#01747A]" />
                <span>Password</span>
              </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-3.5 pr-10 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#01747A] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2.5 px-4 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-teal-900/30 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Redirecting...</span>
              </>
            ) : (
              <>
                <span>Authenticate & Enter</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Secure indicator */}
        <div className="mt-8 pt-4 border-t border-white/5 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono text-neutral-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>SHA-512 PBKDF2 & Edge JWT Security</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f11] flex items-center justify-center p-4">
      <Suspense fallback={
        <div className="text-white text-sm font-mono flex items-center gap-2">
          <RefreshCw className="w-4 h-4 animate-spin text-[#01747A]" />
          Loading security portal...
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}
