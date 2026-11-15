'use client';

import React, { useState, useEffect } from 'react';
import { Award, Plus, Edit3, Trash2, X, RefreshCw } from 'lucide-react';

export default function AdminLogosPage() {
  const [logos, setLogos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  useEffect(() => {
    fetchLogos();
  }, []);

  async function fetchLogos() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/logos');
      const data = await res.json();
      if (data.logos) setLogos(data.logos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingItem) return;

    let updated = [...logos];
    const idx = updated.findIndex(l => l.id === editingItem.id);
    if (idx !== -1) {
      updated[idx] = editingItem;
    } else {
      updated.push(editingItem);
    }

    try {
      setSaving(true);
      const res = await fetch('/api/admin/logos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logos: updated })
      });
      const data = await res.json();
      if (data.success) {
        setLogos(updated);
        setEditingItem(null);
      }
    } finally {
      setSaving(false);
    }
  }

  function handleDelete(id: string) {
    if (!confirm('Are you sure you want to remove this partner logo?')) return;
    const updated = logos.filter(l => l.id !== id);
    fetch('/api/admin/logos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logos: updated })
    }).then(() => setLogos(updated));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>Brand Proof</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Customer & Partner Logos</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Upload and manage tier-1 customer and partner trust logos displayed on the homepage.
          </p>
        </div>

        <button
          onClick={() => setEditingItem({
            id: 'logo-' + Date.now(),
            clientName: 'New Partner Organization',
            logoUrl: '/images/logo/partner-sample.svg',
            industry: 'Aerospace',
            order: logos.length + 1,
            active: true
          })}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add Logo</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {logos.map(logo => (
          <div key={logo.id} className="bg-neutral-900/60 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-white/20">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-neutral-400">{logo.industry}</span>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setEditingItem({ ...logo })} className="p-1 text-neutral-400 hover:text-white">
                    <Edit3 className="w-3 h-3" />
                  </button>
                  <button onClick={() => handleDelete(logo.id)} className="p-1 text-rose-400 hover:text-rose-300">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="h-20 bg-neutral-950 rounded flex items-center justify-center p-2 mb-3">
                <img src={logo.logoUrl} alt={logo.clientName} className="max-h-12 max-w-full object-contain" />
              </div>
              <div className="text-xs font-semibold text-white truncate">{logo.clientName}</div>
            </div>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white">Edit Partner Logo</h3>
              <button onClick={() => setEditingItem(null)}><X className="w-5 h-5 text-neutral-400" /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Organization Name</label>
                <input
                  type="text"
                  required
                  value={editingItem.clientName}
                  onChange={e => setEditingItem({ ...editingItem, clientName: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Logo SVG/PNG URL</label>
                <input
                  type="text"
                  required
                  value={editingItem.logoUrl}
                  onChange={e => setEditingItem({ ...editingItem, logoUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Industry Sector</label>
                <input
                  type="text"
                  value={editingItem.industry || ''}
                  onChange={e => setEditingItem({ ...editingItem, industry: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-2 bg-neutral-800 rounded text-sm text-neutral-300">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#01747A] hover:bg-[#015f64] rounded text-sm text-white font-medium">
                  {saving ? 'Saving...' : 'Save Logo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

