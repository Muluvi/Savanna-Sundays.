
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, TrendingUp, Flag, CheckCircle2 } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const GrowthRoadmapSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">13A: Scaling The Vibe</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            From pilot activation <br/>to market dominance.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            We don't just launch events; we build institutions. Our 3-phase roadmap ensures that Savanna Sundays evolves from a boutique activation into a permanent fixture of Nairobi's lifestyle landscape.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "We play the long game."
            </h3>
          </div>
        </div>
      </div>

      {/* 13B: The 3-Phase Roadmap Timeline */}
      <div className="relative pt-12 animate-fade-in-up [animation-delay:200ms]">
        {/* Progress Line (Desktop) */}
        <div className="absolute top-[165px] left-0 w-full h-[1px] bg-brand-green/10 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Phase 1 */}
          <Card className="p-10 bg-brand-gold/10 border-2 border-brand-gold/30 rounded-[40px] space-y-8 shadow-sm group hover:-translate-y-2 transition-all">
            <div className="space-y-2">
              <span className="font-body font-bold text-[10px] tracking-[5px] text-brand-gold uppercase">Months 1-3</span>
              <h6 className="font-headline text-4xl text-brand-green leading-none">IGNITION</h6>
            </div>
            <ul className="space-y-4">
              {["Geco stabilisation", "Content engine launch", "Data portal rollout"].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <CheckCircle2 size={14} className="text-brand-gold" />
                  <span className="font-body text-sm text-brand-green/70">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Phase 2 */}
          <Card className="p-10 bg-white border border-brand-teal/20 rounded-[40px] space-y-8 shadow-xl group hover:-translate-y-2 transition-all">
            <div className="space-y-2">
              <span className="font-body font-bold text-[10px] tracking-[5px] text-brand-teal uppercase">Months 4-8</span>
              <h6 className="font-headline text-4xl text-brand-green leading-none">TRACTION</h6>
            </div>
            <ul className="space-y-4">
              {["2 monthly editions", "Ambassador launch", "Merchandise drop"].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <CheckCircle2 size={14} className="text-brand-teal" />
                  <span className="font-body text-sm text-brand-green/70">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Phase 3 */}
          <Card className="p-10 bg-brand-green text-white border-none rounded-[40px] space-y-8 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Flag size={100} />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <span className="font-body font-bold text-[10px] tracking-[5px] text-brand-gold uppercase">Months 9+</span>
                <h6 className="font-headline text-4xl text-brand-gold leading-none">DOMINANCE</h6>
              </div>
              <ul className="space-y-4">
                {["Annual Gala Property", "Regional blueprint", "Market Monopolization"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <CheckCircle2 size={14} className="text-brand-gold" />
                    <span className="font-body text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>

      {/* 13C: Milestone Badges */}
      <div className="flex flex-wrap justify-center gap-4 pt-12 animate-fade-in-up [animation-delay:400ms]">
        {["800+ Attendee Peak", "100% CRM Mapping", "Market Institution"].map((milestone, i) => (
          <Badge key={i} className="px-8 py-4 bg-white border border-brand-green/5 text-brand-green font-headline text-xl tracking-widest shadow-sm hover:bg-brand-gold transition-all">
            {milestone}
          </Badge>
        ))}
      </div>
    </div>
  );
};
