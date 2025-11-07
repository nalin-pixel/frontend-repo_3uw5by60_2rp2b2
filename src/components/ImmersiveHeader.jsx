import React from 'react';
import { Rocket, BarChart3, Moon, Sun } from 'lucide-react';

export default function ImmersiveHeader({ dark, onToggleDark }) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-white">
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/30">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">PitchPal</h1>
            <p className="text-xs text-white/70">Startups • Investors • Funding</p>
          </div>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#reports"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            <BarChart3 className="h-4 w-4" /> Reports
          </a>
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}
