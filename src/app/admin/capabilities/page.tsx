'use client';

import React, { useState, useEffect } from 'react';
import { 
  Cpu, Edit3, Check, X, RefreshCw, Layers, Image as ImageIcon
} from 'lucide-react';
import { CMSCapability } from '@/lib/cms/types';

export default function AdminCapabilitiesPage() {
  const [capabilities, setCapabilities] = useState<CMSCapability[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<CMSCapability | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchCapabilities();
  }, []);

  async function fetchCapabilities() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/capabilities');
      const data = await res.json();
      if (data.capabilities) {
        setCapabilities(data.capabilities);
      }
    } catch (err) {
      console.error('Failed to load capabilities', err);
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
    if (!editingItem) return;

    const updated = capabilities.map(c => c.id === editingItem.id ? editingItem : c);
    try {
      setSaving(true);
      const res = await fetch('/api/admin/capabilities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ capabilities: updated })
      });
      const data = await res.json();
      if (data.success) {
        setCapabilities(updated);
        showNotification('success', 'Capabilities updated successfully!');
        setEditingItem(null);
      } else {
        showNotification('error', data.error || 'Failed to update capabilities');
      }
    } catch {
      showNotification('error', 'Network error');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>Manufacturing & Engineering</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Capabilities CMS</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Manage all 8 core capability chapters, headings, technical descriptions, and images.
          </p>
        </div>

        <button
          onClick={fetchCapabilities}
          disabled={loading}
          className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
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

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {capabilities.map((cap) => (
          <div key={cap.id} className="bg-neutral-900/60 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition">
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#01747A] font-semibold">
                  Chapter {cap.chapter}
                </span>
                <button
                  onClick={() => setEditingItem({ ...cap })}
                  className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/60 rounded border border-neutral-700/50 transition"
                  title="Edit chapter"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="font-semibold text-white text-base mb-1">{cap.title}</h3>
              <p className="text-xs text-[#01747A] font-mono mb-2">{cap.subtitle}</p>
              <p className="text-xs text-neutral-400 line-clamp-3 mb-4 leading-relaxed">
                {cap.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cap.tags?.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image preview */}
            <div className="h-28 rounded-lg bg-neutral-950 border border-neutral-800 overflow-hidden relative group">
              {cap.image ? (
                <img src={cap.image} alt={cap.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-600">
                  <ImageIcon className="w-6 h-6" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setEditingItem({ ...cap })}
                  className="text-xs font-medium text-white px-3 py-1 bg-[#01747A] rounded"
                >
                  Change Image
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white">
                  Edit Chapter {editingItem.chapter}: {editingItem.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Chapter Title</label>
                <input
                  type="text"
                  required
                  value={editingItem.title}
                  onChange={e => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Subtitle / Tagline</label>
                <input
                  type="text"
                  required
                  value={editingItem.subtitle}
                  onChange={e => setEditingItem({ ...editingItem, subtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Description</label>
                <textarea
                  rows={4}
                  required
                  value={editingItem.description}
                  onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Image URL or Local Upload Path</label>
                <input
                  type="text"
                  required
                  value={editingItem.image}
                  onChange={e => setEditingItem({ ...editingItem, image: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={(editingItem.tags || []).join(', ')}
                  onChange={e => setEditingItem({ 
                    ...editingItem, 
                    tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition disabled:opacity-50"
                >
                  {saving && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                  <span>Save Capability</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
