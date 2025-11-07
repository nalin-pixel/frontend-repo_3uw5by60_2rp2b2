import React from 'react';
import { Rocket, BarChart3 } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">PitchPal</h1>
            <p className="text-xs text-gray-500">Manage startups, investors, and funding</p>
          </div>
        </div>
        <a
          href="#reports"
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
        >
          <BarChart3 className="h-4 w-4" />
          Reports
        </a>
      </div>
    </header>
  );
}
