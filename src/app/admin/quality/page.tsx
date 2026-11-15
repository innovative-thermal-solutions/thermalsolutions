'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Save, RefreshCw, X, Award, CheckCircle2
} from 'lucide-react';
import { CMSQualitySection } from '@/lib/cms/types';

export default function AdminQualityPage() {
  const [quality, setQuality] = useState<CMSQualitySection | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchQuality();
  }, []);

  async function fetchQuality() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/quality');
      const data = await res.json();
      if (data.quality) {
        setQuality(data.quality);
      }
    } catch (err) {
      console.error('Failed to load quality data', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!quality) return;

    try {
      setSaving(true);
      const res = await fetch('/api/admin/quality', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quality })
      });
      const data = await res.json();
      if (data.success) {
        showNotification('success', 'Quality policies & ISO certifications saved successfully!');
      } else {
        showNotification('error', data.error || 'Failed to save');
      }
    } catch {
      showNotification('error', 'Network error');
    } finally {
      setSaving(false);
    }
  }

  if (loading || !quality) {
    return (
      <div className="py-20 text-center text-neutral-500 text-sm">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#01747A]" />
        Loading quality settings...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Compliance & Standards</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Quality & ISO 9001:2015 CMS</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Edit quality manual statement, executive leadership quotes, and 4 core principles.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition disabled:opacity-50"
        >
          {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          <span>Save Changes</span>
        </button>
      </div>

      {notification && (
        <div className={`p-4 rounded-lg flex items-center justify-between text-sm ${
          notification.type === 'success' 
            ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200' 
            : 'bg-rose-950/70 border border-rose-500/40 text-rose-200'
        }`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="opacity-70 hover:opacity-100">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Policy Section */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-[#01747A]" />
            Official Quality Policy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-mono uppercase text-neutral-400">Headline</label>
              <input
                type="text"
                value={quality.policyHeadline || ''}
                onChange={e => setQuality({ ...quality, policyHeadline: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-mono uppercase text-neutral-400">Quality Statement</label>
              <textarea
                rows={4}
                value={quality.policyStatement}
                onChange={e => setQuality({ ...quality, policyStatement: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">Signatory Executive Name</label>
              <input
                type="text"
                value={quality.ceoName}
                onChange={e => setQuality({ ...quality, ceoName: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-400">Signatory Title</label>
              <input
                type="text"
                value={quality.ceoTitle}
                onChange={e => setQuality({ ...quality, ceoTitle: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars Section */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#01747A]" />
            Four Quality Principles / Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quality.principles?.map((p, idx) => (
              <div key={idx} className="p-4 bg-neutral-950 border border-neutral-800/80 rounded-lg space-y-3">
                <div className="text-xs font-mono text-[#01747A]">Pillar {p.number}</div>
                <input
                  type="text"
                  value={p.title}
                  onChange={e => {
                    const next = [...quality.principles];
                    next[idx].title = e.target.value;
                    setQuality({ ...quality, principles: next });
                  }}
                  className="w-full px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-sm font-semibold text-white focus:outline-none focus:border-[#01747A]"
                />
                <textarea
                  rows={3}
                  value={p.description}
                  onChange={e => {
                    const next = [...quality.principles];
                    next[idx].description = e.target.value;
                    setQuality({ ...quality, principles: next });
                  }}
                  className="w-full px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-xs text-neutral-300 focus:outline-none focus:border-[#01747A]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Auditor Certificates Section */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-semibold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-[#01747A]" />
            Auditor Accreditations & Certificates
          </h2>

          <div className="space-y-4">
            {quality.auditorCertificates?.map((c, idx) => (
              <div key={idx} className="p-4 bg-neutral-950 border border-neutral-800/80 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-mono uppercase text-neutral-500">Auditor Name</label>
                  <input
                    type="text"
                    value={c.name}
                    onChange={e => {
                      const next = [...quality.auditorCertificates];
                      next[idx].name = e.target.value;
                      setQuality({ ...quality, auditorCertificates: next });
                    }}
                    className="w-full px-2.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-neutral-500">Certificate / Scope</label>
                  <input
                    type="text"
                    value={c.certNumber}
                    onChange={e => {
                      const next = [...quality.auditorCertificates];
                      next[idx].certNumber = e.target.value;
                      setQuality({ ...quality, auditorCertificates: next });
                    }}
                    className="w-full px-2.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-neutral-500">Certificate Image Path</label>
                  <input
                    type="text"
                    value={c.image}
                    onChange={e => {
                      const next = [...quality.auditorCertificates];
                      next[idx].image = e.target.value;
                      setQuality({ ...quality, auditorCertificates: next });
                    }}
                    className="w-full px-2.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-xs text-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
