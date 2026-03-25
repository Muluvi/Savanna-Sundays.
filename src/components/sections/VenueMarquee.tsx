
"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { cl } from '@/lib/cloudinary';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const premiumVenues = [
  { name: "Muze (Westlands)", logoId: "venue-muze" },
  { name: "The Alchemist (Westlands)", logoId: "venue-alchemist" },
  { name: "Black Samurai (Westlands)", logoId: "venue-black-samurai" },
  { name: "KODA (Kilimani)", logoId: "venue-koda" },
  { name: "Masshouse (Industrial Area)", logoId: "venue-masshouse" }
];

const mainstreamVenues = [
  { name: "Tin N Lit", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Tin_N_Lit_bakftg.jpg" },
  { name: "Alcapone", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Alcapone_hxxkky.jpg" },
  { name: "Capital Noir", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Capital_Noir_occqpt.jpg" },
  { name: "Volt Lounge", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Volt_Lounge_t9amvx.jpg" },
  { name: "Covo Nairobi", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Covo_azkm99.jpg" },
  { name: "The Tunnel", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/The_Tunnel_wgahvg.jpg" },
];

const VenueDivider = () => (
  <div className="w-[1px] h-[60px] bg-brand-gold/20 shrink-0 self-center" />
);

export const Tier1Marquee = () => {
  const displayVenues = [...premiumVenues, ...premiumVenues, ...premiumVenues];
  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_300,c_limit';

  return (
    <div className="bg-[#0E1A10] py-12 overflow-hidden w-full relative z-20 border-b border-white/5">
      <div className="text-center mb-8 px-6">
        <h4 className="font-headline text-[11px] tracking-[4px] text-brand-gold uppercase leading-none font-bold">
          TIER 1 — PREMIUM CIRCUIT
        </h4>
      </div>
      <div 
        className="relative w-full overflow-hidden group" 
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
        }}
      >
        <div 
          className="flex gap-16 w-max items-center py-4 group-hover:[animation-play-state:paused]" 
          style={{ animation: 'scrollL 30s linear infinite' }}
        >
          {displayVenues.map((venue, i) => {
            const logo = PlaceHolderImages.find(p => p.id === venue.logoId);
            return (
              <React.Fragment key={`${venue.name}-${i}`}>
                <div className="flex flex-col items-center gap-4 shrink-0 transition-transform duration-500 hover:scale-105">
                  {logo && (
                    <img 
                      src={cl(logo.imageUrl, transformation)} 
                      alt={venue.name}
                      className="h-[110px] md:h-[130px] w-auto block flex-shrink-0 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                      loading="lazy"
                    />
                  )}
                  <span className="font-headline text-[10px] tracking-[4px] text-white/60 uppercase">{venue.name}</span>
                </div>
                {i < displayVenues.length - 1 && <VenueDivider />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Tier2Marquee = () => {
  const displayVenues = [...mainstreamVenues, ...mainstreamVenues, ...mainstreamVenues];
  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_240,c_limit';

  return (
    <div className="bg-[#0E1A10] py-10 overflow-hidden w-full relative z-20">
      <div className="text-center mb-6 px-6">
        <h4 className="font-headline text-[11px] tracking-[4px] text-brand-gold/40 uppercase leading-none font-bold">
          TIER 2 — MAINSTREAM CIRCUIT
        </h4>
      </div>
      <div 
        className="relative w-full overflow-hidden group" 
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
        }}
      >
        <div 
          className="flex gap-16 w-max items-center py-4 group-hover:[animation-play-state:paused]" 
          style={{ animation: 'scrollR 35s linear infinite' }}
        >
          {displayVenues.map((venue, i) => (
            <React.Fragment key={`${venue.name}-${i}`}>
              <div className="flex flex-col items-center gap-4 shrink-0 transition-transform duration-500 hover:scale-105">
                <img 
                  src={cl(venue.url, transformation)} 
                  alt={venue.name}
                  className="h-[90px] md:h-[110px] w-auto block flex-shrink-0 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                  loading="lazy"
                />
                <span className="font-headline text-[10px] tracking-[4px] text-brand-gold/30 uppercase">{venue.name}</span>
              </div>
              {i < displayVenues.length - 1 && <VenueDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
