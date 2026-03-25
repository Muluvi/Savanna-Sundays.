'use client';

import React from 'react';
import { Globe } from 'lucide-react';

/**
 * Compact high-fidelity venue network overview.
 * Focuses on the strategic description of the "Venue Network" scale.
 * Marquee functionality is handled by Tier1Marquee and Tier2Marquee for maximum impact.
 */
export const DualActivationModel = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-4xl space-y-4">
        <div className="flex items-center gap-3">
          <Globe className="text-brand-gold animate-pulse" size={20} />
          <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight leading-none">
            THE VENUE NETWORK
          </h4>
        </div>
        <p className="font-body text-brand-gold/60 text-[10px] uppercase tracking-[4px] font-bold leading-none">
          Premium and mainstream. Everywhere the crowd is.
        </p>
        <p className="font-body text-brand-cream/80 text-sm md:text-base leading-relaxed">
          Savanna Sundays doesn't choose one audience — it meets them all where they already are, mapping the brand identity onto Nairobi's existing high-energy Sunday properties.
        </p>
      </div>
    </div>
  );
};
