'use client';

import React, { useState, useEffect } from 'react';
import { Factory, Plus, Edit3, Trash2, RefreshCw, X, Save, ArrowRight } from 'lucide-react';

export default function AdminIndustriesPage() {
  const [industries, setIndustries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchIndustries();
  }, []);

  async function fetchIndustries() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/industries');
      const data = await res.json();
      if (data.industries) setIndustries(data.industries);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingItem) return;

    let updated = [...industries];
    const exists = updated.some(item => item.slug === editingItem.slug);
    if (exists) {
      updated = updated.map(item => item.slug === editingItem.slug ? editingItem : item);
    } else {
      updated.push(editingItem);
    }

    try {
      setSaving(true);
      const res = await fetch('/api/admin/industries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industries: updated })
      });
      const data = await res.json();
      if (data.success) {
        setIndustries(updated);
        setEditingItem(null);
        setNotification({ type: 'success', message: 'Industries CMS updated successfully!' });
      }
    } catch {
      setNotification({ type: 'error', message: 'Failed to update industries' });
    } finally {
      setSaving(false);
    }
  }

  function handleDelete(slug: string) {
    if (!confirm('Are you sure you want to remove this industry?')) return;
    const updated = industries.filter(i => i.slug !== slug);
    fetch('/api/admin/industries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ industries: updated })
    }).then(() => {
      setIndustries(updated);
      setNotification({ type: 'success', message: 'Industry removed' });
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Factory className="w-3.5 h-3.5" />
            <span>Market Verticals</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Industries Manager</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Manage industry solutions (Power Electronics, EV & Battery, Aerospace, Clean Energy, Satellite).
          </p>
        </div>

        <button
          onClick={() => setEditingItem({
            slug: 'new-industry-' + Date.now(),
            title: 'New Industry Sector',
            subtitle: 'Technical Thermal Regulation for High-Heat Applications',
            description: 'Engineering overview of cooling challenges and approach...',
            challenges: 'Thermal boundaries, packaging limits...',
            itsApproach: 'In-house CNC machining and friction stir welding...',
            image: '/images/industries/power-electronics.webp',
            keySpecs: ['Custom heat flux limits', 'ISO 9001:2015 tested']
          })}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Industry</span>
        </button>
      </div>

      {notification && (
        <div className={`p-4 rounded-lg flex items-center justify-between text-sm ${
          notification.type === 'success' ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-200' : 'bg-rose-950/70 border border-rose-500/40 text-rose-200'
        }`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)}><X className="w-4 h-4" /></button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {industries.map(item => (
          <div key={item.slug} className="bg-neutral-900/60 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#01747A]">
                  /{item.slug}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingItem({ ...item })}
                    className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/60 rounded"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.slug)}
                    className="p-1.5 text-rose-400 hover:text-rose-300 bg-rose-950/30 rounded"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
              <p className="text-xs text-[#01747A] font-mono mb-2 line-clamp-1">{item.subtitle}</p>
              <p className="text-xs text-neutral-400 line-clamp-3 mb-4 leading-relaxed">{item.description}</p>
            </div>

            <div className="h-28 rounded-lg bg-neutral-950 border border-neutral-800 overflow-hidden relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white">Edit Industry: {editingItem.title}</h3>
              <button onClick={() => setEditingItem(null)}><X className="w-5 h-5 text-neutral-400" /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Industry Title</label>
                <input
                  type="text"
                  required
                  value={editingItem.title}
                  onChange={e => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Subtitle / Tagline</label>
                <input
                  type="text"
                  required
                  value={editingItem.subtitle}
                  onChange={e => setEditingItem({ ...editingItem, subtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Description</label>
                <textarea
                  rows={3}
                  required
                  value={editingItem.description}
                  onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Image URL / Path</label>
                <input
                  type="text"
                  required
                  value={editingItem.image}
                  onChange={e => setEditingItem({ ...editingItem, image: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-2 bg-neutral-800 rounded text-sm text-neutral-300">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#01747A] hover:bg-[#015f64] rounded text-sm text-white font-medium">
                  {saving ? 'Saving...' : 'Save Industry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

