
'use client';

import React from 'react';
import { Globe, Sparkles } from 'lucide-react';

/**
 * Compact high-fidelity venue network overview.
 * Focuses on the "Venue Network" scale.
 */
export const DualActivationModel = () => {
  const allVenueNames = [
    "Muze", "The Alchemist", "Black Samurai", "KODA", "Masshouse", 
    "Tin N Lit", "Alcapone", "Capital Noir", "Volt Lounge", "Covo Nairobi", "The Tunnel"
  ];

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

      {/* The scrolling text marquee remains for a text-heavy branding layer */}
      <div 
        className="relative overflow-hidden py-6 border-y border-white/5 -mx-6 md:-mx-12 lg:-mx-24"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
        }}
      >
        <div className="flex w-fit animate-marquee space-x-12 px-12 items-center">
          {[...Array(3)].map((_, listIdx) => (
            <React.Fragment key={listIdx}>
              {allVenueNames.map((name, i) => (
                <div key={`${listIdx}-${i}`} className="flex items-center gap-4 shrink-0 group">
                  <Sparkles className="text-brand-gold/20 group-hover:text-brand-gold" size={10} />
                  <span className="font-headline text-2xl text-brand-cream/10 uppercase tracking-widest group-hover:text-brand-gold transition-all duration-500">
                    {name}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
