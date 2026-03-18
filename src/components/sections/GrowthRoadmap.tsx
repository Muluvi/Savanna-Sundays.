
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, TrendingUp, Flag } from 'lucide-react';

export const GrowthRoadmapSection = () => {
  return (
    <div className="space-y-24">
      {/* Three-Phase Timeline */}
      <div className="relative pt-12">
        {/* Progress Line */}
        <div className="absolute top-[165px] left-0 w-full h-1 bg-brand-gold/20 hidden lg:block" />
        <div className="absolute top-[165px] left-0 w-[40%] h-1 bg-brand-gold hidden lg:block animate-pulse" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Phase 1 */}
          <div className="relative space-y-8">
            <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-gold items-center justify-center text-brand-green z-10 border-4 border-white shadow-lg">
              <Rocket size={18} />
            </div>
            <Card className="p-8 bg-brand-light-yellow/40 border-2 border-brand-gold rounded-[32px] space-y-6 hover:-translate-y-2 transition-transform shadow-sm">
              <div className="space-y-2">
                <span className="font-body font-bold text-[10px] tracking-[5px] text-brand-gold uppercase">Phase 01 — Months 1-3</span>
                <h6 className="font-headline text-4xl text-brand-green leading-none">IGNITION</h6>
              </div>
              <ul className="space-y-4">
                {[
                  "Geco Edition stabilization",
                  "Launch content engine",
                  "First title sponsorship",
                  "Data portal rollout",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="font-body text-sm text-brand-green/70">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Phase 2 */}
          <div className="relative space-y-8">
            <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-teal items-center justify-center text-white z-10 border-4 border-white shadow-lg">
              <TrendingUp size={18} />
            </div>
            <Card className="p-8 bg-white border border-brand-teal/20 rounded-[32px] space-y-6 hover:-translate-y-2 transition-transform shadow-sm">
              <div className="space-y-2">
                <span className="font-body font-bold text-[10px] tracking-[5px] text-brand-teal uppercase">Phase 02 — Months 4-8</span>
                <h6 className="font-headline text-4xl text-brand-green leading-none">TRACTION</h6>
              </div>
              <ul className="space-y-4">
                {[
                  "Scale to 2 monthly editions",
                  "Ambassador tier launch",
                  "Merchandise drop (limited)",
                  "Strategic festival alignment",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                    <span className="font-body text-sm text-brand-green/70">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Phase 3 */}
          <div className="relative space-y-8">
            <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-green items-center justify-center text-brand-gold z-10 border-4 border-white shadow-lg">
              <Flag size={18} />
            </div>
            <Card className="p-8 bg-brand-green text-white border-none rounded-[32px] space-y-6 hover:-translate-y-2 transition-transform shadow-xl">
              <div className="space-y-2">
                <span className="font-body font-bold text-[10px] tracking-[5px] text-brand-gold uppercase">Phase 03 — Months 9+</span>
                <h6 className="font-headline text-4xl text-brand-gold leading-none">INSTITUTION</h6>
              </div>
              <ul className="space-y-4">
                {[
                  "Annual Savanna Sundays Gala",
                  "Regional expansion blueprint",
                  "Self-sustaining sponsorship",
                  "The 'Nairobi Sunday' Standard",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="font-body text-sm text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Callouts */}
      <div className="flex flex-wrap justify-center gap-4">
        {["800+ Attendee Peak", "100% Retained CRM", "Market Dominance", "Digital Hegemony"].map((milestone, i) => (
          <Badge key={i} className="px-6 py-3 bg-brand-cream border border-brand-green/5 text-brand-green font-headline text-lg tracking-widest shadow-sm">
            {milestone}
          </Badge>
        ))}
      </div>
    </div>
  );
};
