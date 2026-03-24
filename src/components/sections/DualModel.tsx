"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const venueData = [
  { name: "Muze", area: "Westlands", capacity: "400", type: "Squad Venue", imageId: "venue-muze" },
  { name: "The Alchemist", area: "Westlands", capacity: "600", type: "Satellite", imageId: "venue-alchemist" },
  { name: "KODA", area: "Kilimani", capacity: "350", type: "Squad Venue", imageId: "venue-koda" },
  { name: "Black Samurai", area: "Westlands", capacity: "500", type: "Satellite", imageId: "venue-black-samurai" },
  { name: "Masshouse", area: "Industrial Area", capacity: "1200", type: "Satellite", imageId: "venue-masshouse" },
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <p className="font-body text-lg md:text-xl text-[#F8F5E6] leading-relaxed">
          One squad. Multiple venues. Every Sunday.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card: Squad Deployment */}
        <Card className="p-8 bg-[#1F4D3A] border-none border-t-[3px] border-[#F4C542] rounded-[24px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-4">
            <h4 className="font-headline text-3xl text-[#F4C542] uppercase tracking-tight">The Savanna Squad Arrives</h4>
            <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
              Every Sunday, the core squad (DJs, MC, influencers, content crew) deploys to <strong>one primary venue</strong>. This "Anchor Venue" receives the full live experience, multi-camera capture, and live social storytelling.
            </p>
          </div>
        </Card>
        
        {/* Right Card: Satellite Branding */}
        <Card className="p-8 bg-[#221A0A] border-none rounded-[24px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-4">
            <h4 className="font-headline text-3xl text-[#F4C542] uppercase tracking-tight">Satellite Venues</h4>
            <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
              Simultaneously, the brand takes over 1 or 2 other premium venues with "Standard Savanna Branding". These locations receive full visual identity kits — bar wraps, signage, and branded glassware — ensuring market dominance without duplicating personnel costs.
            </p>
          </div>
        </Card>
      </div>

      {/* Deployment Note */}
      <div className="max-w-3xl space-y-4 p-8 bg-white/5 rounded-3xl border border-white/5">
        <h5 className="font-headline text-xl text-brand-gold uppercase tracking-widest">The Multi-Venue Rollout</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="font-body text-xs md:text-sm text-brand-gold font-bold uppercase tracking-wider">Sundays 01 — 03</p>
            <p className="font-body text-xs md:text-sm text-[#B8A98A] leading-relaxed">
              <strong>2 Venues per Sunday:</strong><br/>
              1 Squad-Led "Anchor" Venue<br/>
              1 Branded "Satellite" Venue
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-body text-xs md:text-sm text-brand-gold font-bold uppercase tracking-wider">Sunday 04 (The Surge)</p>
            <p className="font-body text-xs md:text-sm text-[#B8A98A] leading-relaxed">
              <strong>3 Venues per Sunday:</strong><br/>
              1 Squad-Led "Anchor" Venue<br/>
              2 Branded "Satellite" Venues
            </p>
          </div>
        </div>
      </div>

      {/* Venue Marquee */}
      <div className="relative w-full mask-marquee pt-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-4">
          {[...venueData, ...venueData, ...venueData].map((venue, i) => {
            const img = venue.imageId ? PlaceHolderImages.find(p => p.id === venue.imageId) : null;
            return (
              <div key={i} className="inline-block min-w-[300px] md:min-w-[400px]">
                <div className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#1A1208]">
                  {img && (
                    <Image 
                      src={img.imageUrl} 
                      alt={venue.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="flex justify-between items-end">
                      <div>
                        <h5 className="font-headline text-xl text-[#F4C542] leading-none">{venue.name}</h5>
                        <p className="font-body text-[10px] uppercase tracking-widest text-[#F8F5E6]/60 mt-1">{venue.area}</p>
                      </div>
                      <span className="font-body text-[8px] font-bold text-brand-gold uppercase tracking-tighter border border-brand-gold/30 px-2 py-1 rounded">
                        {venue.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
