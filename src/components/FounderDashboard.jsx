import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Send } from 'lucide-react';

export default function FounderDashboard() {
  const [startups, setStartups] = useState([
    { id: 1, name: 'NovaAI', domain: 'AI', stage: 'Seed' },
  ]);
  const [form, setForm] = useState({ name: '', domain: '', stage: '' });

  const addStartup = (e) => {
    e.preventDefault();
    if (!form.name) return;
    const newStartup = { id: Date.now(), ...form };
    setStartups((s) => [...s, newStartup]);
    setForm({ name: '', domain: '', stage: '' });
  };

  const updateStartup = (id) => {
    const name = prompt('Update name');
    if (!name) return;
    setStartups((s) => s.map((st) => (st.id === id ? { ...st, name } : st)));
  };

  const deleteStartup = (id) => {
    setStartups((s) => s.filter((st) => st.id !== id));
  };

  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold">Your Startups</h2>
          <span className="text-xs text-gray-500">CRUD demo (wired to backend later)</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-600 dark:border-gray-800">
                <th className="p-2">Name</th>
                <th className="p-2">Domain</th>
                <th className="p-2">Stage</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {startups.map((s) => (
                <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50 dark:border-gray-900 dark:hover:bg-gray-900/50">
                  <td className="p-2 font-medium">{s.name}</td>
                  <td className="p-2">{s.domain}</td>
                  <td className="p-2">{s.stage}</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateStartup(s.id)} className="rounded-md border border-gray-200 p-1 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900" aria-label="Edit">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button onClick={() => deleteStartup(s.id)} className="rounded-md border border-gray-200 p-1 text-red-600 hover:bg-red-50 dark:border-gray-800 dark:hover:bg-gray-900" aria-label="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form onSubmit={addStartup} className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
          <input
            className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-900"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-900"
            placeholder="Domain"
            value={form.domain}
            onChange={(e) => setForm((f) => ({ ...f, domain: e.target.value }))}
          />
          <input
            className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-900"
            placeholder="Stage"
            value={form.stage}
            onChange={(e) => setForm((f) => ({ ...f, stage: e.target.value }))}
          />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Plus className="h-4 w-4" /> Add Startup
          </button>
        </form>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Pitches & Matches</h3>
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900">
            <Send className="h-4 w-4" /> Create Pitch
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">View matched investors and pitch statuses here.</p>
      </div>
    </section>
  );
}
