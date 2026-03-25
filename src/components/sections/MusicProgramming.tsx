
"use client";

import React from 'react';
import { TalentMarquee } from './TalentMarquee';

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-16">
      <div className="max-w-4xl space-y-6">
        <div className="section-label">03A — Sonic Architecture</div>
        <h3 className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold uppercase tracking-tighter">THE SAVANNA VYBE SQUAD</h3>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">
          The engine behind every activation. Proven talent, local resonance, and city-wide influence. We don't just book DJs; we deploy a movement.
        </p>
      </div>
      
      {/* High-Fidelity Talent Marquee replaces the grid */}
      <TalentMarquee />
    </div>
  );
};
