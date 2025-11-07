import React, { useEffect, useState } from 'react';
import ImmersiveShell from './components/ImmersiveShell';
import ImmersiveHeader from './components/ImmersiveHeader';
import Hero3D from './components/Hero3D';
import RoleSwitcher from './components/RoleSwitcher';
import FounderDashboard from './components/FounderDashboard';
import InvestorDashboard from './components/InvestorDashboard';
import AdminDashboard from './components/AdminDashboard';
import ReportsStrip from './components/ReportsStrip';

function App() {
  const [role, setRole] = useState('founder');
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <ImmersiveShell>
      <ImmersiveHeader dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <Hero3D />

      <main className="mx-auto -mt-10 max-w-6xl px-4">
        <section id="switch-role" className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Welcome to PitchPal</h2>
              <p className="text-sm text-white/70">Choose a role to manage and explore the PitchPal ecosystem.</p>
            </div>
            <RoleSwitcher value={role} onChange={setRole} />
          </div>
        </section>

        {role === 'founder' && <FounderDashboard />}
        {role === 'investor' && <InvestorDashboard />}
        {role === 'admin' && <AdminDashboard />}
      </main>

      <ReportsStrip />
    </ImmersiveShell>
  );
}

export default App;
