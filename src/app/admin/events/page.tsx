'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, Plus, Edit3, Trash2, Check, X, RefreshCw, 
  ExternalLink, MapPin, Eye, Image as ImageIcon 
} from 'lucide-react';
import { CMSEvent } from '@/lib/cms/types';

export default function AdminEventsPage() {
  const [events, setEvents] = useState<CMSEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingEvent, setEditingEvent] = useState<CMSEvent | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/events');
      const data = await res.json();
      if (data.events) {
        setEvents(data.events);
      }
    } catch (err) {
      console.error('Failed to load events', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function saveEventsToServer(updated: CMSEvent[]) {
    try {
      setSaving(true);
      const res = await fetch('/api/admin/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: updated })
      });
      const data = await res.json();
      if (data.success) {
        setEvents(updated);
        showNotification('success', 'Events updated and published successfully!');
        setEditingEvent(null);
      } else {
        showNotification('error', data.error || 'Failed to save events');
      }
    } catch {
      showNotification('error', 'Network error while saving events');
    } finally {
      setSaving(false);
    }
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingEvent) return;

    let updated: CMSEvent[];
    const exists = events.some(ev => ev.id === editingEvent.id);
    if (exists) {
      updated = events.map(ev => ev.id === editingEvent.id ? editingEvent : ev);
    } else {
      updated = [...events, editingEvent];
    }
    saveEventsToServer(updated);
  }

  function handleDelete(id: string) {
    if (!confirm('Are you sure you want to remove this trade show event?')) return;
    const updated = events.filter(ev => ev.id !== id);
    saveEventsToServer(updated);
  }

  function startCreate() {
    const newId = 'event-' + Date.now();
    setEditingEvent({
      id: newId,
      year: new Date().getFullYear(),
      name: '',
      dates: '',
      location: '',
      logo: '/images/events/electronica-2026.png',
      detailsUrl: 'https://',
      order: events.length + 1,
      status: 'published',
      updatedAt: new Date().toISOString()
    });
  }

  if (loading) {
    return (
      <div className="py-24 text-center text-neutral-500 text-sm">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-3 text-[#01747A]" />
        Loading upcoming trade shows and events...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Exhibitions &amp; Expos</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Upcoming Events &amp; Trade Shows CMS</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Manage upcoming industry expos, trade show dates, booth locations, and registration links.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider rounded-lg transition"
          >
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            <span>View Public Page</span>
          </a>
          <button
            onClick={startCreate}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-mono uppercase font-bold tracking-wider rounded-lg shadow-sm transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Event</span>
          </button>
        </div>
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

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id}
            className="bg-neutral-900/60 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition group"
          >
            <div>
              {/* Event Logo Box */}
              <div className="h-28 w-full bg-neutral-950/80 rounded-lg border border-neutral-800 flex items-center justify-center p-4 mb-4 relative overflow-hidden">
                {event.logo ? (
                  <img src={event.logo} alt={event.name} className="max-h-16 max-w-full object-contain" />
                ) : (
                  <ImageIcon className="w-8 h-8 text-neutral-600" />
                )}
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-neutral-800 text-teal-300 border border-neutral-700">
                  {event.year}
                </span>
              </div>

              <div className="space-y-1 mb-4">
                <h3 className="font-bold text-white text-base group-hover:text-teal-400 transition-colors">
                  {event.name}
                </h3>
                <p className="text-xs text-neutral-300 font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>{event.dates}</span>
                </p>
                <p className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{event.location}</span>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={event.detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-teal-400 hover:text-teal-300 inline-flex items-center gap-1"
              >
                <span>Details Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingEvent(event)}
                  className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded transition"
                  title="Edit Event"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-rose-950/40 rounded transition"
                  title="Delete Event"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Create Modal */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-white/15 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h2 className="text-lg font-bold text-white font-serif">
                {events.some(e => e.id === editingEvent.id) ? 'Edit Trade Show Event' : 'Add New Event'}
              </h2>
              <button
                onClick={() => setEditingEvent(null)}
                className="text-neutral-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-[11px] font-mono uppercase text-neutral-400">Event / Show Name</label>
                  <input
                    type="text"
                    required
                    value={editingEvent.name}
                    onChange={e => setEditingEvent({ ...editingEvent, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="e.g. Electronica 2026"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-neutral-400">Year</label>
                  <input
                    type="number"
                    required
                    value={editingEvent.year}
                    onChange={e => setEditingEvent({ ...editingEvent, year: parseInt(e.target.value, 10) || new Date().getFullYear() })}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-neutral-400">Event Dates</label>
                <input
                  type="text"
                  required
                  value={editingEvent.dates}
                  onChange={e => setEditingEvent({ ...editingEvent, dates: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  placeholder="e.g. November 10–13, 2026"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-neutral-400">City, Country / Location</label>
                <input
                  type="text"
                  required
                  value={editingEvent.location}
                  onChange={e => setEditingEvent({ ...editingEvent, location: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  placeholder="e.g. Munich, Germany"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-neutral-400">Logo Image Path or URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={editingEvent.logo}
                    onChange={e => setEditingEvent({ ...editingEvent, logo: e.target.value })}
                    className="flex-1 px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                    placeholder="/images/events/electronica-2026.png"
                  />
                  {editingEvent.logo && (
                    <div className="w-10 h-10 rounded border border-neutral-800 overflow-hidden bg-neutral-950 flex items-center justify-center shrink-0 p-1">
                      <img src={editingEvent.logo} alt="Preview" className="max-h-full max-w-full object-contain" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-neutral-400">Official Details URL / Link</label>
                <input
                  type="url"
                  required
                  value={editingEvent.detailsUrl}
                  onChange={e => setEditingEvent({ ...editingEvent, detailsUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                  placeholder="https://..."
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono uppercase tracking-wider rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-xs font-mono uppercase font-bold tracking-wider rounded-lg shadow-sm transition disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
