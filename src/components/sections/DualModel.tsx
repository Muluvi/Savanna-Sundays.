
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
          “Multiple venues. One squad. Every Sunday.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: THE SAVANNA SQUAD */}
        <Card className="p-8 bg-[#1F4D3A] border-none border-t-[3px] border-[#F4C542] rounded-[24px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-4">
            <h4 className="font-headline text-3xl text-[#F4C542] uppercase tracking-tight">THE SAVANNA SQUAD</h4>
            <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
              Every Sunday, the full Savanna Squad deploys to one venue. Two DJs. One MC. Five influencers. A three-person content crew. Bar wraps go up, signage goes in, the backdrop drops. By the time the first guest walks in, the venue is unmistakably Savanna. From doors-open to wind-down, the squad runs the experience — music, crowd energy, competitions, and content capture. By Monday, footage is in post-production.
            </p>
          </div>
        </Card>
        
        {/* Card 2: MULTI-VENUE PRESENCE */}
        <Card className="p-8 bg-[#221A0A] border-none rounded-[24px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-4">
            <h4 className="font-headline text-3xl text-[#F4C542] uppercase tracking-tight">MULTI-VENUE PRESENCE</h4>
            <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
              Savanna Sundays doesn’t stop at one venue. Every Sunday, 2–3 premium venues across Nairobi carry full Savanna branding — bar wraps, table dressing, signage, branded glassware, and QR engagement points. The squad activates one. The brand shows up at all of them. First 3 Sundays: 2 venues. From the 4th Sunday: 3. As the programme grows, so does the footprint.
            </p>
          </div>
        </Card>
      </div>

      {/* Deployment & Expansion Note */}
      <div className="max-w-3xl space-y-6 p-8 bg-white/5 rounded-3xl border border-white/5">
        <div className="space-y-2">
          <h5 className="font-body font-bold text-xs text-[#B8A98A] uppercase tracking-[3px]">Future Expansion</h5>
          <p className="font-body text-sm md:text-base text-[#F8F5E6]/80 leading-relaxed">
            As the Sunday community grows, Savanna Sundays becomes a platform for larger moments — festivals, concerts, seasonal events. The infrastructure scales.
          </p>
        </div>
        <div className="pt-4 border-t border-white/10">
          <p className="font-body text-xs md:text-sm text-[#B8A98A] italic">
            * Firefly recommends the squad venue each week based on crowd potential and content opportunities.
          </p>
        </div>
      </div>

      {/* Venue Marquee */}
      <div className="relative w-full mask-marquee pt-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-4">
          {[...venueData, ...venueData].map((venue, i) => {
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
