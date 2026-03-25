"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { cl } from '@/lib/cloudinary';

const mainstreamVenues = [
  { name: "Tin N Lit", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Tin_N_Lit_bakftg.jpg" },
  { name: "Alcapone", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Alcapone_hxxkky.jpg" },
  { name: "Capital Noir", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Capital_Noir_occqpt.jpg" },
  { name: "Volt Lounge", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Volt_Lounge_t9amvx.jpg" },
  { name: "Covo Nairobi", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/Covo_azkm99.jpg" },
  { name: "The Tunnel", url: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774440687/The_Tunnel_wgahvg.jpg" },
];

const VenueDivider = () => (
  <div className="w-[1px] h-[60px] bg-[rgba(244,197,66,0.12)] shrink-0 self-center" />
);

export const VenueMarquee = () => {
  // Duplicate list for seamless loop
  const displayVenues = [...mainstreamVenues, ...mainstreamVenues];
  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_160';

  return (
    <div className="bg-[#0E1A10] py-12 overflow-hidden w-full relative z-20">
      <div className="text-center mb-10">
        <h4 className="font-headline text-[10px] tracking-[0.5em] text-[rgba(244,197,66,0.35)] uppercase leading-none">
          TIER 2 — MAINSTREAM CIRCUIT
        </h4>
      </div>
      
      <div 
        className="relative w-full overflow-hidden group"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
        }}
      >
        <div 
          className={cn(
            "flex gap-12 w-max items-center py-4",
            "group-hover:[animation-play-state:paused]",
            "motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:scrollbar-hide"
          )}
          style={{ 
            animation: 'scrollL 22s linear infinite',
          }}
        >
          {displayVenues.map((venue, i) => (
            <React.Fragment key={`${venue.name}-${i}`}>
              <div className="flex flex-col items-center gap-4 shrink-0">
                <img 
                  src={cl(venue.url, transformation)} 
                  alt={`${venue.name} logo`}
                  className="h-[80px] w-auto block flex-shrink-0 object-contain"
                  style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
                  loading="lazy"
                />
                <span className="font-headline text-[10px] tracking-[0.35em] text-[rgba(244,197,66,0.5)] uppercase">
                  {venue.name}
                </span>
              </div>
              {i < displayVenues.length - 1 && <VenueDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
