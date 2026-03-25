"use client";

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
  <div className="w-[1px] h-[40px] bg-[rgba(244,197,66,0.12)] shrink-0 self-center" />
);

export const Tier1Marquee = () => {
  const displayVenues = [...premiumVenues, ...premiumVenues];
  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_140';

  return (
    <div className="bg-[#0E1A10] py-6 overflow-hidden w-full relative z-20 border-b border-white/5">
      <div className="text-center mb-4">
        <h4 className="font-headline text-[9px] tracking-[0.5em] text-brand-gold uppercase leading-none opacity-80">
          TIER 1 — PREMIUM CIRCUIT
        </h4>
      </div>
      <div className="relative w-full overflow-hidden group" style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}>
        <div className="flex gap-12 w-max items-center py-2 group-hover:[animation-play-state:paused]" style={{ animation: 'scrollL 25s linear infinite' }}>
          {displayVenues.map((venue, i) => {
            const logo = PlaceHolderImages.find(p => p.id === venue.logoId);
            return (
              <React.Fragment key={`${venue.name}-${i}`}>
                <div className="flex flex-col items-center gap-3 shrink-0">
                  {logo && (
                    <img 
                      src={cl(logo.imageUrl, transformation)} 
                      alt={venue.name}
                      className="h-[60px] w-auto block flex-shrink-0 object-contain"
                      loading="lazy"
                    />
                  )}
                  <span className="font-headline text-[9px] tracking-[0.3em] text-white/40 uppercase">{venue.name}</span>
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
  const displayVenues = [...mainstreamVenues, ...mainstreamVenues];
  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_140';

  return (
    <div className="bg-[#0E1A10] py-6 overflow-hidden w-full relative z-20">
      <div className="text-center mb-4">
        <h4 className="font-headline text-[9px] tracking-[0.5em] text-[rgba(244,197,66,0.35)] uppercase leading-none">
          TIER 2 — MAINSTREAM CIRCUIT
        </h4>
      </div>
      <div className="relative w-full overflow-hidden group" style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}>
        <div className="flex gap-12 w-max items-center py-2 group-hover:[animation-play-state:paused]" style={{ animation: 'scrollR 28s linear infinite' }}>
          {displayVenues.map((venue, i) => (
            <React.Fragment key={`${venue.name}-${i}`}>
              <div className="flex flex-col items-center gap-3 shrink-0">
                <img 
                  src={cl(venue.url, transformation)} 
                  alt={venue.name}
                  className="h-[60px] w-auto block flex-shrink-0 object-contain transition-all duration-500"
                  loading="lazy"
                />
                <span className="font-headline text-[9px] tracking-[0.3em] text-brand-gold/30 uppercase">{venue.name}</span>
              </div>
              {i < displayVenues.length - 1 && <VenueDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};