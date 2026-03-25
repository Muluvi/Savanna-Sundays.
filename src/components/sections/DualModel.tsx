'use client';

import React from 'react';
import { Globe, RotateCcw, Zap, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

/**
 * Compact high-fidelity venue network overview.
 * Focuses on the "Dual Activation" narrative with minimal vertical footprint.
 */
export const DualActivationModel = () => {
  const allVenueNames = [
    "Muze", "The Alchemist", "Black Samurai", "KODA", "Masshouse", 
    "Tin N Lit", "Alcapone", "Capital Noir", "Volt Lounge", "Covo Nairobi", "The Tunnel"
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="text-brand-gold animate-pulse" size={20} />
            <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight leading-none">
              THE VENUE NETWORK
            </h4>
          </div>
          <p className="font-body text-brand-gold/60 text-[10px] uppercase tracking-[4px] font-bold leading-none">
            Premium and mainstream. Everywhere the crowd is.
          </p>
          <p className="font-body text-brand-cream/80 text-sm leading-relaxed max-w-xl">
            Savanna is premium, but the mainstream crowd loves it too. Savanna Sundays doesn't choose one audience — it meets them both where they already are.
          </p>
        </div>

        <Card className="p-6 bg-white/[0.03] border border-brand-gold/20 rounded-[32px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:rotate-180 transition-transform duration-1000">
            <RotateCcw size={80} />
          </div>
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="text-brand-gold animate-pulse" size={16} />
              <span className="font-body text-[9px] text-brand-gold uppercase tracking-[4px] font-bold">Model</span>
            </div>
            <h5 className="font-headline text-xl text-white uppercase tracking-tight">The Savanna Vybe Squad</h5>
            <p className="font-body text-brand-cream/60 text-xs leading-relaxed">
              Our resident DJs, MC, and content crew activates one strategic venue per Sunday across the network.
            </p>
          </div>
        </Card>
      </div>

      {/* The scrolling text marquee remains for a text-heavy branding layer */}
      <div 
        className="relative overflow-hidden py-4 border-y border-white/5 -mx-6 md:-mx-12 lg:-mx-24"
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
