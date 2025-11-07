import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-b-3xl bg-[#0b0b12]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient film + vignette (non-blocking) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(139,92,246,0.20), transparent 60%), radial-gradient(1000px 800px at 80% 30%, rgba(59,130,246,0.18), transparent 55%), radial-gradient(800px 700px at 50% 100%, rgba(236,72,153,0.18), transparent 60%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b12]/40 via-[#0b0b12]/20 to-[#0b0b12]" />

      {/* Headline */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            Interactive 3D • Purple/Blue Futuristic Vibes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            PitchPal: Build and Fund the Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-base text-indigo-100/90 sm:text-lg"
          >
            A dynamic hub where founders, investors, and admins collaborate. Manage startups, run funding rounds, and turn pitches into partnerships — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#switch-role"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow hover:from-indigo-500 hover:to-fuchsia-500"
            >
              <Rocket className="h-4 w-4" /> Get Started
            </a>
            <a
              href="#reports"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
            >
              View Reports
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
