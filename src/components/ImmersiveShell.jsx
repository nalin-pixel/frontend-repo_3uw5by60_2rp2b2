import React from 'react';

export default function ImmersiveShell({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white">
      {children}
      <footer className="mx-auto mt-12 max-w-6xl px-4 py-8 text-center text-xs text-white/60">
        Built with love for founders and investors.
      </footer>
    </div>
  );
}
