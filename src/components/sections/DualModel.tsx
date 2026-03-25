'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Sparkles, Globe, RotateCcw, Zap, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const premiumVenues = [
  { name: "Muze (Westlands)", logoId: "venue-muze" },
  { name: "The Alchemist (Westlands)", logoId: "venue-alchemist" },
  { name: "Black Samurai (Westlands)", logoId: "venue-black-samurai" },
  { name: "KODA (Kilimani)", logoId: "venue-koda" },
  { name: "Masshouse (Industrial Area)", logoId: "venue-masshouse" }
];

const mainstreamVenues = [
  "Tin N Lit", "Alcapone", "Capital Noir", "Volt Lounge", "Covo Kahawa Sukari", "Covo Nairobi", "The Tunnel", "Kettle House"
];

const allVenueNames = [...premiumVenues.map(v => v.name), ...mainstreamVenues];

export const DualActivationModel = () => {
  return (
    <div className="space-y-16">
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-3">
          <Globe className="text-brand-gold animate-pulse" size={24} />
          <h4 className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] text-brand-gold uppercase tracking-tight leading-none">
            THE VENUE NETWORK
          </h4>
        </div>
        <p className="font-body text-brand-gold/60 text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase tracking-[4px] font-bold leading-none">
          Premium and mainstream. The brand shows up everywhere the crowd is.
        </p>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed max-w-2xl">
          Savanna is premium, but the mainstream crowd loves it too. Savanna Sundays doesn't choose one audience — it meets them both where they already are.
        </p>
      </div>

      <Card className="p-8 md:p-10 bg-white/[0.03] border border-brand-gold/20 rounded-[40px] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-180 transition-transform duration-1000">
          <RotateCcw size={120} />
        </div>
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="text-brand-gold animate-pulse" size={20} />
            <span className="font-body text-[var(--text-xs)] text-brand-gold uppercase tracking-[4px] font-bold">Operational Model</span>
          </div>
          <h5 className="font-headline text-[var(--text-xl)] text-white uppercase tracking-tight">How it works</h5>
          <p className="font-body text-brand-cream/70 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed max-w-3xl">
            The <span className="text-brand-gold font-bold">Savanna Vybe Squad</span> — resident DJs, MC, influencers, and content crew — activates one venue per Sunday.
          </p>
        </div>
      </Card>

      <div className="space-y-8">
        <Badge className="bg-brand-teal text-white font-headline text-[var(--text-xs)] px-4 py-1.5 tracking-widest uppercase rounded-full border-none flex items-center gap-2 w-fit">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M1 11L2.5 3L5.5 7L8 1L10.5 7L13.5 3L15 11H1Z" fill="#F4C542"/>
          </svg>
          TIER 1 — PREMIUM CIRCUIT
        </Badge>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {premiumVenues.map((venue, i) => {
            const logo = PlaceHolderImages.find(p => p.id === venue.logoId);
            return (
              <div 
                key={i} 
                className="group relative aspect-square glass-tile rounded-[32px] flex items-center justify-center p-6 transition-all duration-500 hover:bg-brand-gold/8 hover:border-l-2 hover:border-brand-gold hover:translate-x-1"
              >
                {logo && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={logo.imageUrl} 
                      alt={venue.name} 
                      className="max-h-full max-w-full object-contain filter transition-all duration-500 group-hover:scale-110" 
                    />
                  </div>
                )}
                <ArrowRight className="absolute bottom-4 right-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        <Badge className="bg-brand-ink-soft text-brand-gold font-headline text-[var(--text-xs)] px-4 py-1.5 tracking-widest uppercase rounded-full border-none flex items-center gap-2 w-fit shadow-lg">
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M7 0L0 9H5V16L12 7H7V0Z" fill="#F4C542"/>
          </svg>
          TIER 2 — MAINSTREAM CIRCUIT
        </Badge>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mainstreamVenues.map((venue, i) => (
            <div 
              key={i} 
              className="group relative glass-tile p-6 rounded-[24px] flex flex-col items-center justify-center text-center gap-3 transition-all duration-500 bg-white/[0.02] hover:bg-brand-gold/8 hover:border-l-2 hover:border-brand-gold hover:translate-x-1"
            >
              <MapPin className="text-brand-gold/40 group-hover:text-brand-gold transition-colors" size={16} />
              <h5 className="font-headline text-[var(--text-lg)] md:text-[var(--text-xl)] text-brand-gold uppercase leading-tight tracking-tight">{venue}</h5>
              <ArrowRight className="absolute bottom-4 right-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={14} />
            </div>
          ))}
        </div>
      </div>

      <div 
        className="relative overflow-hidden py-8 -mx-6 md:-mx-12 lg:-mx-24"
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
                  <Sparkles className="text-brand-gold/20 group-hover:text-brand-gold" size={12} />
                  <span className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] text-brand-cream/20 uppercase tracking-widest group-hover:text-brand-gold transition-all duration-500">
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
