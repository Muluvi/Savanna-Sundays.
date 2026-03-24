"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const venueData = [
  { id: "venue-muze", name: "Muze", location: "Westlands" },
  { id: "venue-alchemist", name: "The Alchemist", location: "Westlands" },
  { id: "venue-black-samurai", name: "Black Samurai", location: "Westlands" },
  { id: "venue-koda", name: "KODA", location: "Kilimani" },
  { id: "venue-masshouse", name: "Masshouse", location: "Industrial Area" },
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

      {/* Venue Logo Grid */}
      <div className="pt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-hide">
          {venueData.map((v) => {
            const img = PlaceHolderImages.find(p => p.id === v.id);
            return (
              <Card 
                key={v.id} 
                className="min-w-[160px] p-8 bg-white/5 border border-white/5 hover:border-[#F4C542]/50 transition-all duration-500 group flex flex-col items-center text-center space-y-4 rounded-2xl"
              >
                {img && (
                  <div className="relative h-20 w-full flex items-center justify-center">
                    <Image 
                      src={img.imageUrl} 
                      alt={v.name} 
                      width={120}
                      height={80}
                      className="object-contain filter grayscale brightness-200 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <h5 className="font-headline text-base text-[#F4C542] uppercase leading-none">{v.name}</h5>
                  <p className="font-body text-[11px] text-[#B8A98A] uppercase tracking-wider font-bold">{v.location}</p>
                </div>
              </Card>
            );
          })}
        </div>
        <p className="font-body text-[11px] text-[#B8A98A] italic text-center md:text-left mt-8 uppercase tracking-[2px] font-bold">
          Firefly has active relationships with these venues and more. The network grows with the programme.
        </p>
      </div>
    </div>
  );
};
