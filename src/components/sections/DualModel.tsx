'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Sparkles, Globe, RotateCcw, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

const premiumVenues = [
  { name: "Muze (Westlands)", logoId: "venue-muze" },
  { name: "The Alchemist (Westlands)", logoId: "venue-alchemist" },
  { name: "Black Samurai (Westlands)", logoId: "venue-black-samurai" },
  { name: "KODA (Kilimani)", logoId: "venue-koda" },
  { name: "Masshouse (Industrial Area)", logoId: "venue-masshouse" }
];

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

const allVenueNames = [
  ...premiumVenues.map(v => v.name),
  ...mainstreamVenues
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-16 animate-fade-in-up">
      {/* Strategic Context */}
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Globe className="text-brand-gold animate-pulse" size={24} />
          <h4 className="font-headline text-4xl md:text-6xl text-brand-gold uppercase tracking-tight leading-none">
            THE VENUE NETWORK
          </h4>
        </div>
        <p className="font-body text-brand-gold/60 text-xs md:text-sm uppercase tracking-[4px] font-bold leading-none">
          Premium and mainstream. The brand shows up everywhere the crowd is.
        </p>
        <p className="font-body text-brand-cream/80 text-lg leading-relaxed max-w-2xl">
          Savanna is premium, but the mainstream crowd loves it too. Savanna Sundays doesn't choose one audience — it meets them both where they already are. The mainstream circuit brings volume. The premium circuit brings positioning. Together, they build a brand that's everywhere on Sunday.
        </p>
      </div>

      {/* Operational Note: The Rotation Model */}
      <Card className="p-8 md:p-10 bg-white/[0.03] border border-brand-gold/20 rounded-[40px] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-180 transition-transform duration-1000">
          <RotateCcw size={120} />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="text-brand-gold animate-pulse" size={20} />
            <span className="font-body text-[10px] text-brand-gold uppercase tracking-[4px] font-bold">Operational Model</span>
          </div>
          <h5 className="font-headline text-3xl text-white uppercase tracking-tight">How it works</h5>
          <p className="font-body text-brand-cream/70 text-base leading-relaxed max-w-3xl">
            The <span className="text-brand-gold font-bold">Savanna Vybe Squad</span> — resident DJs, MC, influencers, and content crew — activates one venue per Sunday. All other venues on the schedule carry full Savanna branding (bar wraps, signage, glassware, QR points, staff tees). Firefly recommends The Savanna Vybe Squad venue each week based on crowd potential, venue availability, and content opportunities. The squad rotates across both mainstream and premium circuits.
          </p>
        </div>
      </Card>

      {/* Premium Group */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="bg-brand-teal text-white font-headline text-xs px-4 py-1.5 tracking-widest uppercase rounded-full shadow-lg border-none">
            TIER 1 — PREMIUM CIRCUIT
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {premiumVenues.map((venue, i) => {
            const logo = PlaceHolderImages.find(p => p.id === venue.logoId);
            return (
              <div 
                key={i} 
                className="group relative aspect-square glass-tile rounded-[32px] overflow-hidden flex items-center justify-center p-6 border-brand-teal/20 hover:border-brand-teal/50 transition-all duration-500 hover:-translate-y-1"
              >
                {logo ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={logo.imageUrl} 
                      alt={venue.name} 
                      fill 
                      className="object-contain filter transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <span className="font-headline text-xl text-brand-gold text-center leading-none">{venue.name}</span>
                )}
                <div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-body text-[8px] text-brand-teal font-bold uppercase tracking-widest">POSITIONING PARTNER</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mainstream Group */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="bg-brand-gold text-brand-green font-headline text-xs px-4 py-1.5 tracking-widest uppercase rounded-full shadow-lg border-none">
            TIER 2 — MAINSTREAM CIRCUIT
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mainstreamVenues.map((venue, i) => (
            <div 
              key={i} 
              className="group glass-tile p-6 rounded-[24px] border-brand-gold/10 hover:border-brand-gold/40 flex flex-col items-center justify-center text-center gap-3 transition-all duration-500 hover:-translate-y-1 bg-white/[0.02]"
            >
              <MapPin className="text-brand-gold/40 group-hover:text-brand-gold transition-colors" size={16} />
              <h5 className="font-headline text-2xl md:text-3xl text-brand-gold uppercase leading-tight tracking-tight">
                {venue}
              </h5>
              <span className="font-body text-[8px] text-brand-gold/30 font-bold uppercase tracking-widest group-hover:text-brand-gold/60 transition-colors">VOLUME PARTNER</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Marquee */}
      <div className="pt-12 border-t border-white/5 space-y-8">
        <div className="section-label text-center mb-0 opacity-40">Network Presence</div>
        
        <div className="relative overflow-hidden py-8 -mx-6 md:-mx-12 lg:-mx-24">
          {/* Linear Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-green to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-green to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-fit animate-marquee space-x-12 px-12 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <React.Fragment key={listIdx}>
                {allVenueNames.map((name, i) => (
                  <div key={`${listIdx}-${i}`} className="flex items-center gap-4 shrink-0 group">
                    <Sparkles className="text-brand-gold/20 group-hover:text-brand-gold transition-colors" size={12} />
                    <span className="font-headline text-4xl md:text-6xl text-brand-cream/20 uppercase tracking-widest group-hover:text-brand-gold transition-all duration-500 cursor-default">
                      {name}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className="font-body text-[10px] text-brand-gold/30 italic uppercase tracking-[5px] font-bold text-center">
          Firefly maintains active management and booking rights across this network.
        </p>
      </div>
    </div>
  );
};
