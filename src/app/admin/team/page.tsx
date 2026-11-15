'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, Plus, Edit3, Trash2, Check, X, RefreshCw, Image as ImageIcon
} from 'lucide-react';
import { CMSTeamMember } from '@/lib/cms/types';

export default function AdminTeamPage() {
  const [members, setMembers] = useState<CMSTeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingMember, setEditingMember] = useState<CMSTeamMember | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  async function fetchTeam() {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/team');
      const data = await res.json();
      if (data.members) {
        setMembers(data.members);
      }
    } catch (err) {
      console.error('Failed to load team', err);
    } finally {
      setLoading(false);
    }
  }

  function showNotification(type: 'success' | 'error', message: string) {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  }

  async function saveTeam(updated: CMSTeamMember[]) {
    try {
      setSaving(true);
      const res = await fetch('/api/admin/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ members: updated })
      });
      const data = await res.json();
      if (data.success) {
        setMembers(updated);
        showNotification('success', 'Team members saved successfully!');
        setEditingMember(null);
      } else {
        showNotification('error', data.error || 'Failed to save team');
      }
    } catch {
      showNotification('error', 'Network error');
    } finally {
      setSaving(false);
    }
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingMember) return;

    let updated: CMSTeamMember[];
    const exists = members.some(m => m.id === editingMember.id);
    if (exists) {
      updated = members.map(m => m.id === editingMember.id ? editingMember : m);
    } else {
      updated = [...members, editingMember];
    }
    saveTeam(updated);
  }

  function handleDelete(id: string) {
    if (!confirm('Are you sure you want to remove this team member?')) return;
    const updated = members.filter(m => m.id !== id);
    saveTeam(updated);
  }

  function startCreate() {
    setEditingMember({
      id: 'team-' + Date.now(),
      name: 'New Engineer / Leader',
      title: 'Senior Thermal Engineer',
      credentials: 'P.Eng, M.Sc.',
      bio: 'Biographical summary...',
      image: '/images/team/placeholder.jpg',
      order: members.length + 1,
      status: 'published',
      updatedAt: new Date().toISOString()
    });
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#01747A] tracking-wider mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>Personnel & Leadership</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Engineering Team Manager</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Manage executive leadership, mechanical engineers, CFD specialists, and plant managers.
          </p>
        </div>

        <button
          onClick={startCreate}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#01747A] hover:bg-[#015f64] text-white text-sm font-medium rounded-lg shadow-sm transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Member</span>
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

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map(member => (
          <div key={member.id} className="bg-neutral-900/60 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-white/20 transition">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-neutral-950 border border-neutral-800 overflow-hidden shrink-0">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-600">
                      <Users className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{member.name}</h3>
                  <div className="text-xs text-[#01747A] font-medium">{member.title}</div>
                  {member.credentials && (
                    <div className="text-[11px] font-mono text-neutral-500">{member.credentials}</div>
                  )}
                </div>
              </div>

              <p className="text-xs text-neutral-400 line-clamp-3 mb-4 leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/5">
              <button
                onClick={() => setEditingMember({ ...member })}
                className="p-1.5 text-neutral-400 hover:text-white bg-neutral-800/60 rounded border border-neutral-700/50 transition"
                title="Edit member"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(member.id)}
                className="p-1.5 text-rose-400 hover:text-rose-300 bg-rose-950/30 rounded border border-rose-800/40 transition"
                title="Delete member"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal */}
      {editingMember && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white">
                  {members.some(m => m.id === editingMember.id) ? 'Edit Team Member' : 'Add Team Member'}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Full Name</label>
                <input
                  type="text"
                  required
                  value={editingMember.name}
                  onChange={e => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Position / Title</label>
                <input
                  type="text"
                  required
                  value={editingMember.title}
                  onChange={e => setEditingMember({ ...editingMember, title: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Credentials (e.g. P.Eng, Ph.D)</label>
                <input
                  type="text"
                  value={editingMember.credentials || ''}
                  onChange={e => setEditingMember({ ...editingMember, credentials: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Photo URL / Path</label>
                <input
                  type="text"
                  value={editingMember.image}
                  onChange={e => setEditingMember({ ...editingMember, image: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-400">Biography / Experience</label>
                <textarea
                  rows={4}
                  value={editingMember.bio || ''}
                  onChange={e => setEditingMember({ ...editingMember, bio: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#01747A]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
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
                  <span>Save Member</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
