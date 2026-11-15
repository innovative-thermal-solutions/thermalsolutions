'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Plus, Edit3, Trash2, X, RefreshCw } from 'lucide-react';

export default function AdminNavigationPage() {
  const [navItems, setNavItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  useEffect(() => {
    fetchNav();
  }, []);

  async function fetchNav() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/navigation');
      const data = await res.json();
      if (data.navigation) setNavItems(data.navigation);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingItem) return;

    let updated = [...navItems];
    const idx = updated.findIndex(n => n.id === editingItem.id);
    if (idx !== -1) {
      updated[idx] = editingItem;
    } else {
      updated.push(editingItem);
    }

    try {
      setSaving(true);
      const res = await fetch('/api/admin/navigation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ navigation: updated })
      });
      const data = await res.json();
      if (data.success) {
        setNavItems(updated);
        setEditingItem(null);
      }
    } finally {
      setSaving(false);
    }
  }

  function handleDelete(id: string) {
    if (!confirm('Are you sure you want to remove this navigation item?')) return;
    const updated = navItems.filter(n => n.id !== id);
    fetch('/api/admin/navigation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ navigation: updated })
    }).then(() => setNavItems(updated));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Information Architecture</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Navigation Manager</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Configure header menu labels, destinations, and nested dropdown links.
          </p>
        </div>

        <button
          onClick={() => setEditingItem({
            id: 'nav-' + Date.now(),
            label: 'New Menu Link',
            href: '/new-page',
            order: navItems.length + 1
          })}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add Menu Item</span>
        </button>
      </div>

      <div className="space-y-3">
        {navItems.map(item => (
          <div key={item.id} className="bg-neutral-900/60 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-white/20">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-white text-sm">{item.label}</span>
                <span className="text-xs font-mono text-neutral-400">{item.href}</span>
              </div>
              {item.children && (
                <div className="text-[11px] font-mono text-[#01747A] mt-1">
                  Dropdown items: {item.children.map((c: any) => c.label).join(', ')}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => setEditingItem({ ...item })} className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/60 rounded">
                <Edit3 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(item.id)} className="p-1.5 text-rose-400 hover:text-rose-300 bg-rose-950/30 rounded">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white">Edit Navigation Item</h3>
              <button onClick={() => setEditingItem(null)}><X className="w-5 h-5 text-neutral-400" /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Navigation Label</label>
                <input
                  type="text"
                  required
                  value={editingItem.label}
                  onChange={e => setEditingItem({ ...editingItem, label: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Destination URL</label>
                <input
                  type="text"
                  required
                  value={editingItem.href}
                  onChange={e => setEditingItem({ ...editingItem, href: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-2 bg-neutral-800 rounded text-sm text-neutral-300">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#01747A] hover:bg-[#015f64] rounded text-sm text-white font-medium">
                  {saving ? 'Saving...' : 'Save Navigation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
