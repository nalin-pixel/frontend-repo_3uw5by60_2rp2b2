import React from 'react';
import { Briefcase, DollarSign } from 'lucide-react';

export default function InvestorDashboard() {
  const startups = [
    { id: 1, name: 'NovaAI', domain: 'AI', totalFunding: 1200000 },
    { id: 2, name: 'EcoGrid', domain: 'Energy', totalFunding: 800000 },
  ];

  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold">Explore Startups</h2>
          <span className="text-xs text-gray-500">Domain-based discovery</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {startups.map((s) => (
            <div key={s.id} className="rounded-lg border border-gray-200 p-4 transition hover:shadow-sm dark:border-gray-800">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-sm font-semibold">{s.name}</h3>
                <span className="text-xs text-gray-500">{s.domain}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <DollarSign className="h-4 w-4" /> Total raised: ${s.totalFunding.toLocaleString()}
              </div>
              <div className="mt-3 flex gap-2">
                <button className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">Invest</button>
                <button className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900">Funding Rounds</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-2 flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <h3 className="text-sm font-semibold">Your Portfolio Overview</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">See total investments and latest rounds here.</p>
      </div>
    </section>
  );
}
