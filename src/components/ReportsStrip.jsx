import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export default function ReportsStrip() {
  const cards = [
    { label: 'Startups per Domain', value: '12', icon: Users, hint: 'Aggregated overview' },
    { label: 'Total Funding', value: '$8.4M', icon: DollarSign, hint: 'Across latest rounds' },
    { label: 'Active Investors', value: '73', icon: TrendingUp, hint: 'Last 30 days' },
  ];

  return (
    <section id="reports" className="mx-auto mt-10 max-w-6xl px-4">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(({ label, value, icon: Icon, hint }) => (
          <div key={label} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-white/90 backdrop-blur transition hover:bg-white/10">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{background:'radial-gradient(400px 200px at 80% 0%, rgba(139,92,246,0.25), transparent 60%)'}} />
            <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
            <div className="mt-1 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{value}</h3>
              <Icon className="h-5 w-5 text-white/70" />
            </div>
            <p className="text-xs text-white/60">{hint}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
