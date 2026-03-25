"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { cl } from '@/lib/cloudinary';

interface MarqueeRowProps {
  name: string;
  role: string;
  images: string[];
  duration: string;
  reverse?: boolean;
}

const MarqueeRow = ({ name, role, images, duration, reverse = false }: MarqueeRowProps) => {
  // Duplicate images for seamless loop
  const displayImages = [...images, ...images];
  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_680,c_limit';

  return (
    <div className="space-y-4 group/row">
      <div className="text-center space-y-1">
        <h4 className="font-headline text-[13px] tracking-[0.35em] text-brand-gold uppercase leading-none">
          {name}
        </h4>
        <p className="font-body text-[10px] tracking-[0.25em] text-[#F8F5E6]/40 uppercase font-bold">
          {role}
        </p>
      </div>
      
      <div 
        className="relative w-full overflow-hidden group/track"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
        }}
      >
        <div 
          className={cn(
            "flex gap-4 w-max",
            reverse ? "animate-scrollRight" : "animate-scrollLeft",
            "group-hover/track:[animation-play-state:paused]",
            "motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:scrollbar-hide"
          )}
          style={{ 
            animationName: reverse ? 'scrollR' : 'scrollL',
            animationDuration: duration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {displayImages.map((url, i) => (
            <img 
              key={`${name}-${i}`} 
              src={cl(url, transformation)} 
              alt={`${name} performing live`}
              loading={i === 0 && name === "DJ MOONS" ? "eager" : "lazy"}
              className="h-[260px] md:h-[340px] w-auto block flex-shrink-0"
              style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
            />
          ))}
        </div>
      </div>
      <div className="w-[48px] h-[1px] bg-brand-gold/20 mx-auto mt-8 mb-8" />
    </div>
  );
};

export const TalentMarquee = () => {
  const djMoonsImages = [
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435240/IMG_1744_dboqfs.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435239/IMG_1746_st88dv.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435194/IMG_1497_aiud8c.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435182/20fb5d79-d30b-405e-8a3a-4f434dbe8dc8_fgroxz.jpg"
  ];

  return (
    <div className="bg-[#0E1A10] py-[56px] overflow-hidden w-full relative z-20">
      <div className="text-center mb-12">
        <p className="font-headline text-[11px] tracking-[0.45em] text-brand-gold/45 uppercase mb-2">
          03 — THE RITUAL
        </p>
        <h3 className="font-headline text-[clamp(2.5rem,8vw,5rem)] text-brand-gold uppercase leading-none mb-[48px]">
          THE SAVANNA VYBE SQUAD
        </h3>
      </div>

      <div className="space-y-8">
        <MarqueeRow 
          name="DJ MOONS" 
          role="Resident DJ • Bongo-led open format"
          images={djMoonsImages} 
          duration="28s" 
        />
        
        {/* Placeholders for upcoming talent tracks */}
        <div className="opacity-20 grayscale pointer-events-none">
          <MarqueeRow 
            name="COMING SOON" 
            role="Squad Talent • Visual Identity Pending"
            images={Array(4).fill("https://images.unsplash.com/photo-1514525253361-bee8a187449a?q=80&w=1000&auto=format&fit=crop")} 
            duration="40s" 
            reverse
          />
        </div>
      </div>
    </div>
  );
};
