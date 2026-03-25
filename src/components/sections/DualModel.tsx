'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const mainstreamVenues = [
  "Tin N Lit",
  "Alcapone",
  "Capital Noir",
  "Volt Lounge",
  "Covo Kahawa Sukari",
  "Covo Nairobi",
  "The Tunnel",
  "Kettle House"
];

const premiumVenues = [
  "Muze (Westlands)",
  "The Alchemist (Westlands)",
  "Black Samurai (Westlands)",
  "KODA (Kilimani)",
  "Masshouse (Industrial Area)"
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-12 animate-fade-in-up">
      {/* Strategic Context */}
      <div className="max-w-4xl space-y-6">
        <h4 className="font-headline text-3xl md:text-5xl text-brand-gold uppercase tracking-tight leading-none">
          THE VENUE NETWORK
        </h4>
        <p className="font-body text-brand-gold/60 text-xs md:text-sm uppercase tracking-[4px] font-bold leading-none">
          Premium and mainstream. The brand shows up everywhere the crowd is.
        </p>
        <p className="font-body text-brand-cream/80 text-lg leading-relaxed">
          Savanna is premium, but the mainstream crowd loves it too. Savanna Sundays doesn&apos;t choose one audience — it meets them both where they already are. The mainstream circuit brings volume. The premium circuit brings positioning. Together, they build a brand that&apos;s everywhere on Sunday.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* Tier 1: Mainstream */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Badge className="bg-brand-gold text-brand-green font-headline text-sm px-4 py-1.5 tracking-widest uppercase rounded-full">
              TIER 1 — MAINSTREAM CIRCUIT
            </Badge>
          </div>
          
          <div className="space-y-4 border-l-2 border-brand-gold/20 pl-6">
            {mainstreamVenues.map((venue, i) => (
              <div key={i} className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-2">
                <MapPin className="text-brand-gold shrink-0" size={16} />
                <span className="font-headline text-2xl md:text-3xl text-brand-cream uppercase tracking-wider group-hover:text-brand-gold">
                  {venue}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2: Premium */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Badge className="bg-brand-teal text-white font-headline text-sm px-4 py-1.5 tracking-widest uppercase rounded-full">
              TIER 2 — PREMIUM CIRCUIT
            </Badge>
          </div>
          
          <div className="space-y-4 border-l-2 border-brand-teal/20 pl-6">
            {premiumVenues.map((venue, i) => (
              <div key={i} className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-2">
                <MapPin className="text-brand-teal shrink-0" size={16} />
                <span className="font-headline text-2xl md:text-3xl text-brand-cream uppercase tracking-wider group-hover:text-brand-teal">
                  {venue}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="pt-12 border-t border-white/5 text-center">
        <p className="font-body text-[10px] text-brand-gold/30 italic uppercase tracking-[5px] font-bold">
          Firefly maintains active management and booking rights across this network.
        </p>
      </div>
    </div>
  );
};
