"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const venueData = [
  { name: "Muze", area: "Westlands", capacity: "400", type: "Owned", imageId: "venue-muze" },
  { name: "The Alchemist", area: "Westlands", capacity: "600", type: "Sponsor", imageId: "venue-alchemist" },
  { name: "KODA", area: "Kilimani", capacity: "350", type: "Owned", imageId: "venue-koda" },
  { name: "Black Samurai", area: "Westlands", capacity: "500", type: "Sponsor", imageId: "venue-black-samurai" },
  { name: "Masshouse", area: "Industrial Area", capacity: "1200", type: "Sponsor", imageId: "venue-masshouse" },
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        <p className="font-body text-lg md:text-xl text-[#F8F5E6] leading-relaxed">
          One squad. One brand. A different venue every Sunday.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card: Squad Deployment */}
        <Card className="p-8 bg-[#1F4D3A] border-none border-t-[3px] border-[#F4C542] rounded-[24px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-4">
            <h4 className="font-headline text-3xl text-[#F4C542] uppercase tracking-tight">The Savanna Squad Arrives</h4>
            <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
              Every Sunday, the squad deploys — DJs, MC, influencers, brand rep, content crew. Bar wraps, signage, and backdrop go up. By 2PM the venue is unmistakably Savanna. From 2PM to 9PM the squad runs the experience. By Monday, content is in post-production.
            </p>
          </div>
        </Card>
        
        {/* Right Card: Venue Rotation */}
        <Card className="p-8 bg-[#221A0A] border-none rounded-[24px] flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
          <div className="space-y-4">
            <h4 className="font-headline text-3xl text-[#F4C542] uppercase tracking-tight">Rotating Venues</h4>
            <p className="font-body text-[#F8F5E6] text-sm md:text-base leading-relaxed opacity-90">
              Savanna Sundays moves through Nairobi's best social venues — rooftops, gardens, lounges. Each edition looks distinct. Each venue gets a genuine brand moment.
            </p>
          </div>
        </Card>
      </div>

      {/* Future Expansion Note */}
      <div className="max-w-2xl space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h5 className="font-body font-bold text-sm text-[#B8A98A] uppercase tracking-[2px]">Future Expansion</h5>
        <p className="font-body text-xs md:text-sm text-[#B8A98A] leading-relaxed">
          As the Sunday community grows, Savanna Sundays becomes a platform for larger title sponsorships — festivals, concerts, seasonal tentpoles.
        </p>
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
                    <h5 className="font-headline text-xl text-[#F4C542] leading-none">{venue.name}</h5>
                    <p className="font-body text-[10px] uppercase tracking-widest text-[#F8F5E6]/60 mt-1">{venue.area}</p>
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
