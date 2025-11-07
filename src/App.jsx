import React, { useState } from 'react';
import Header from './components/Header';
import RoleSwitcher from './components/RoleSwitcher';
import FounderDashboard from './components/FounderDashboard';
import InvestorDashboard from './components/InvestorDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [role, setRole] = useState('founder');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-900 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 dark:text-gray-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Welcome to PitchPal</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Choose a role to manage and explore the PitchPal ecosystem.</p>
            </div>
            <RoleSwitcher value={role} onChange={setRole} />
          </div>
        </section>

        {role === 'founder' && <FounderDashboard />}
        {role === 'investor' && <InvestorDashboard />}
        {role === 'admin' && <AdminDashboard />}

        <section id="reports" className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <p className="text-xs uppercase tracking-wide text-gray-500">Startups per Domain</p>
            <h3 className="mt-1 text-2xl font-bold">12</h3>
            <p className="text-xs text-gray-500">Aggregated overview</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <p className="text-xs uppercase tracking-wide text-gray-500">Total Funding</p>
            <h3 className="mt-1 text-2xl font-bold">$8.4M</h3>
            <p className="text-xs text-gray-500">Across latest rounds</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <p className="text-xs uppercase tracking-wide text-gray-500">Top Investors</p>
            <h3 className="mt-1 text-2xl font-bold">3</h3>
            <p className="text-xs text-gray-500">By participation</p>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-gray-200 py-6 text-center text-xs text-gray-500 dark:border-gray-800">
        Built with love for founders and investors.
      </footer>
    </div>
  );
}

export default App;
