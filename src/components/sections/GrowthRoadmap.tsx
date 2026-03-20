"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, TrendingUp, Flag, CheckCircle2 } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const GrowthRoadmapSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center animate-fade-in-up">
        <div className="space-y-4">
          <div className="section-label">13A: Scaling The Vibe</div>
          <h3 className="font-headline text-2xl md:text-4xl text-brand-green uppercase leading-tight">
            Pilot to market dominance.
          </h3>
          <p className="font-body text-xs md:text-base text-brand-green/60 leading-relaxed">
            Our 3-phase roadmap ensures Savanna Sundays evolves into a permanent fixture of Nairobi's landscape.
          </p>
        </div>
        
        <div className="py-6 flex flex-col items-center justify-center">
          <h3 className="font-serif italic text-xl md:text-2xl text-brand-green/80 leading-relaxed px-4 text-center">
            "We play the long game."
          </h3>
        </div>
      </div>

      <div className="relative pt-4 animate-fade-in-up [animation-delay:200ms]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Phase 1 */}
          <Card className="p-6 bg-brand-gold/10 border-2 border-brand-gold/30 rounded-[24px] space-y-4 shadow-sm hover:-translate-y-1 transition-all">
            <div className="space-y-1">
              <span className="font-body font-bold text-[8px] tracking-[3px] text-brand-gold uppercase">Months 1-3</span>
              <h6 className="font-headline text-2xl text-brand-green leading-none">IGNITION</h6>
            </div>
            <ul className="space-y-2">
              {["Geco stabilisation", "Content engine launch", "Data portal rollout"].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <CheckCircle2 size={12} className="text-brand-gold" />
                  <span className="font-body text-[11px] text-brand-green/70">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Phase 2 */}
          <Card className="p-6 bg-white border border-brand-teal/20 rounded-[24px] space-y-4 shadow-md hover:-translate-y-1 transition-all">
            <div className="space-y-1">
              <span className="font-body font-bold text-[8px] tracking-[3px] text-brand-teal uppercase">Months 4-8</span>
              <h6 className="font-headline text-2xl text-brand-green leading-none">TRACTION</h6>
            </div>
            <ul className="space-y-2">
              {["2 monthly editions", "Ambassador launch", "Merchandise drop"].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <CheckCircle2 size={12} className="text-brand-teal" />
                  <span className="font-body text-[11px] text-brand-green/70">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Phase 3 */}
          <Card className="p-6 bg-brand-green text-white border-none rounded-[24px] space-y-4 shadow-lg relative overflow-hidden hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Flag size={40} />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="space-y-1">
                <span className="font-body font-bold text-[8px] tracking-[3px] text-brand-gold uppercase">Months 9+</span>
                <h6 className="font-headline text-2xl text-brand-gold leading-none">DOMINANCE</h6>
              </div>
              <ul className="space-y-2">
                {["Annual Gala Property", "Regional blueprint", "Market Monopoly"].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <CheckCircle2 size={12} className="text-brand-gold" />
                    <span className="font-body text-[11px] text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
