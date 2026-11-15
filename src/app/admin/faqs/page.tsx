'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, Plus, Edit3, Trash2, RefreshCw, X, Save } from 'lucide-react';

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  async function fetchFaqs() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/faqs');
      const data = await res.json();
      if (data.faqs) setFaqs(data.faqs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingItem) return;

    let updated = [...faqs];
    const idx = updated.findIndex(f => f.id === editingItem.id);
    if (idx !== -1) {
      updated[idx] = editingItem;
    } else {
      updated.push(editingItem);
    }

    try {
      setSaving(true);
      const res = await fetch('/api/admin/faqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ faqs: updated })
      });
      const data = await res.json();
      if (data.success) {
        setFaqs(updated);
        setEditingItem(null);
        setNotification({ type: 'success', message: 'FAQs updated successfully!' });
      }
    } catch {
      setNotification({ type: 'error', message: 'Failed to update FAQs' });
    } finally {
      setSaving(false);
    }
  }

  function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;
    const updated = faqs.filter(f => f.id !== id);
    fetch('/api/admin/faqs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ faqs: updated })
    }).then(() => {
      setFaqs(updated);
      setNotification({ type: 'success', message: 'FAQ deleted' });
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support & Technical Q&A</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">FAQ Manager</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Manage frequently asked engineering, FSW manufacturing, and ISO compliance questions.
          </p>
        </div>

        <button
          onClick={() => setEditingItem({
            id: 'faq-' + Date.now(),
            question: 'What is the maximum cold plate size ITS can manufacture?',
            answer: 'ITS can design, CNC-machine, and friction-stir weld monolithic aluminum liquid cold plates up to 57 inches (1,450 mm) in length.',
            category: 'Manufacturing',
            order: faqs.length + 1,
            status: 'published'
          })}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add FAQ</span>
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

      <div className="space-y-3">
        {faqs.map(faq => (
          <div key={faq.id} className="bg-neutral-900/60 border border-white/10 rounded-xl p-5 hover:border-white/20 transition flex items-start justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#01747A]">
                  {faq.category || 'General'}
                </span>
                <span className="text-xs font-semibold text-white">{faq.question}</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">{faq.answer}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => setEditingItem({ ...faq })} className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/60 rounded">
                <Edit3 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(faq.id)} className="p-1.5 text-rose-400 hover:text-rose-300 bg-rose-950/30 rounded">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white">Edit FAQ</h3>
              <button onClick={() => setEditingItem(null)}><X className="w-5 h-5 text-neutral-400" /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Question</label>
                <input
                  type="text"
                  required
                  value={editingItem.question}
                  onChange={e => setEditingItem({ ...editingItem, question: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Answer</label>
                <textarea
                  rows={4}
                  required
                  value={editingItem.answer}
                  onChange={e => setEditingItem({ ...editingItem, answer: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Category</label>
                <input
                  type="text"
                  value={editingItem.category || ''}
                  onChange={e => setEditingItem({ ...editingItem, category: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded text-sm text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-2 bg-neutral-800 rounded text-sm text-neutral-300">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#01747A] hover:bg-[#015f64] rounded text-sm text-white font-medium">
                  {saving ? 'Saving...' : 'Save FAQ'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
