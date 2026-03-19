
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, TrendingUp, Flag } from 'lucide-react';

export const GrowthRoadmapSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Three-Phase Timeline */}
      <div className="relative pt-8 md:pt-12">
        {/* Progress Line */}
        <div className="absolute top-[165px] left-0 w-full h-1 bg-brand-gold/20 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Phase 1 */}
          <Card className="p-6 md:p-8 bg-brand-light-yellow/40 border-2 border-brand-gold rounded-[24px] md:rounded-[32px] space-y-4 md:space-y-6 shadow-sm">
            <div className="space-y-1 md:space-y-2">
              <span className="font-body font-bold text-[8px] md:text-[10px] tracking-[5px] text-brand-gold uppercase">Months 1-3</span>
              <h6 className="font-headline text-3xl md:text-4xl text-brand-green leading-none">IGNITION</h6>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {["Geco stabilisation", "Content engine launch", "Data portal rollout"].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <div className="w-1 h-1 rounded-full bg-brand-gold" />
                  <span className="font-body text-xs md:text-sm text-brand-green/70">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Phase 2 */}
          <Card className="p-6 md:p-8 bg-white border border-brand-teal/20 rounded-[24px] md:rounded-[32px] space-y-4 md:space-y-6 shadow-sm">
            <div className="space-y-1 md:space-y-2">
              <span className="font-body font-bold text-[8px] md:text-[10px] tracking-[5px] text-brand-teal uppercase">Months 4-8</span>
              <h6 className="font-headline text-3xl md:text-4xl text-brand-green leading-none">TRACTION</h6>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {["2 monthly editions", "Ambassador launch", "Merchandise drop"].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <div className="w-1 h-1 rounded-full bg-brand-teal" />
                  <span className="font-body text-xs md:text-sm text-brand-green/70">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Phase 3 */}
          <Card className="p-6 md:p-8 bg-brand-green text-white border-none rounded-[24px] md:rounded-[32px] space-y-4 md:space-y-6 shadow-xl">
            <div className="space-y-1 md:space-y-2">
              <span className="font-body font-bold text-[8px] md:text-[10px] tracking-[5px] text-brand-gold uppercase">Months 9+</span>
              <h6 className="font-headline text-3xl md:text-4xl text-brand-gold leading-none">INSTITUTION</h6>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {["Annual Gala", "Regional blueprint", "Market Dominance"].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <div className="w-1 h-1 rounded-full bg-brand-gold" />
                  <span className="font-body text-xs md:text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Floating Callouts */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {["800+ Attendee Peak", "100% CRM", "Market Dominance"].map((milestone, i) => (
          <Badge key={i} className="px-4 md:px-6 py-2 md:py-3 bg-brand-cream border border-brand-green/5 text-brand-green font-headline text-base md:text-lg tracking-widest shadow-sm">
            {milestone}
          </Badge>
        ))}
      </div>
    </div>
  );
};
