"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Flag, Rocket, TrendingUp } from 'lucide-react';

export const GrowthRoadmapSection = () => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Rocket className="text-brand-gold" size={20} />
            <div className="section-label mb-0">Scaling The Vibe</div>
          </div>
          <h3 className="font-headline text-4xl text-brand-gold uppercase leading-none">Scaling from pilot to market dominance.</h3>
          <p className="font-body text-brand-cream/80 text-base leading-relaxed">
            Our 3-phase roadmap ensures Savanna Sundays scales into a permanent fixture of Nairobi's lifestyle landscape.
          </p>
        </div>
        
        <div className="relative py-4 flex flex-col items-center justify-center text-center">
          <h3 className="font-serif italic text-xl md:text-3xl text-brand-gold/80 leading-relaxed px-4">
            "We aren't just here for a month; <br className="hidden md:block" />we're here to define the decade."
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Phase 1 */}
        <Card className="glass-tile p-8 space-y-6 border-l-4 border-l-brand-gold">
          <div className="space-y-1">
            <span className="font-body font-bold text-[10px] tracking-[4px] text-brand-gold uppercase">Months 1-3</span>
            <h6 className="font-headline text-4xl text-brand-cream leading-none uppercase">CONSOLIDATION</h6>
          </div>
          <ul className="space-y-4">
            {["Circuit expansion", "Content engine scaling", "Data portal rollout"].map((item, i) => (
              <li key={i} className="flex gap-4 items-center">
                <CheckCircle2 size={16} className="text-brand-gold shrink-0" />
                <span className="font-body text-xs text-brand-cream/70 uppercase tracking-widest font-bold">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Phase 2 */}
        <Card className="glass-tile p-8 space-y-6 border-l-4 border-l-brand-teal">
          <div className="space-y-1">
            <span className="font-body font-bold text-[10px] tracking-[4px] text-brand-teal uppercase">Months 4-8</span>
            <h6 className="font-headline text-4xl text-brand-cream leading-none uppercase">TRACTION</h6>
          </div>
          <ul className="space-y-4">
            {["2 monthly editions", "Ambassador scale-up", "Merchandise drop"].map((item, i) => (
              <li key={i} className="flex gap-4 items-center">
                <TrendingUp size={16} className="text-brand-teal shrink-0" />
                <span className="font-body text-xs text-brand-cream/70 uppercase tracking-widest font-bold">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Phase 3 */}
        <Card className="p-8 bg-brand-gold text-brand-green border-none rounded-[32px] space-y-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-1000">
            <Flag size={80} />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="space-y-1">
              <span className="font-body font-bold text-[10px] tracking-[4px] text-brand-green/60 uppercase">Months 9+</span>
              <h6 className="font-headline text-4xl text-brand-green leading-none uppercase">DOMINANCE</h6>
            </div>
            <ul className="space-y-4">
              {["Annual Gala Property", "Regional blueprint", "Market Monopoly"].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <CheckCircle2 size={16} className="text-brand-green shrink-0" />
                  <span className="font-body text-xs text-brand-green uppercase tracking-widest font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};
