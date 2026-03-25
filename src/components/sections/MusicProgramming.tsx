
"use client";

import React from 'react';
import { TalentMarquee } from './TalentMarquee';

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-0">
      {/* High-Fidelity Talent Marquee handles its own layout and styling */}
      <TalentMarquee />
      
      <div className="max-w-4xl space-y-6 pt-16">
        <div className="section-label">03A — Sonic Architecture</div>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">
          The engine behind every activation. Proven talent, local resonance, and city-wide influence. We don't just book DJs; we deploy a movement.
        </p>
      </div>
    </div>
  );
};
