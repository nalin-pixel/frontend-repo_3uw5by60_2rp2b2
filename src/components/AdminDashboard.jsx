import React from 'react';
import { CheckCircle2, MessageSquareWarning } from 'lucide-react';

export default function AdminDashboard() {
  const pendingInvestors = [
    { id: 101, name: 'Alice Capital' },
    { id: 102, name: 'Beta Ventures' },
  ];

  const flaggedMessages = [
    { id: 1, from: 'Founder A', to: 'Investor X', preview: 'Let’s close this deal!' },
  ];

  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-indigo-600" />
          <h2 className="text-base font-semibold">Approve Investors</h2>
        </div>
        <ul className="space-y-2">
          {pendingInvestors.map((inv) => (
            <li key={inv.id} className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-gray-800">
              <span className="text-sm font-medium">{inv.name}</span>
              <div className="flex gap-2">
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">Approve</button>
                <button className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-3 flex items-center gap-2">
          <MessageSquareWarning className="h-4 w-4 text-rose-600" />
          <h2 className="text-base font-semibold">Moderate Messages</h2>
        </div>
        <ul className="space-y-2">
          {flaggedMessages.map((m) => (
            <li key={m.id} className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-gray-800">
              <div>
                <p className="text-sm font-medium">{m.from} → {m.to}</p>
                <p className="text-xs text-gray-500">{m.preview}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">Approve</button>
                <button className="rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
