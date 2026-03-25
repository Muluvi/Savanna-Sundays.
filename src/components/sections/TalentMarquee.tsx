"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { cl } from '@/lib/cloudinary';

interface TalentMarqueeProps {
  name: string;
  images?: string[];
  duration: string;
  reverse?: boolean;
}

const MarqueeTrack = ({ name, images, duration, reverse = false }: TalentMarqueeProps) => {
  // Seamless loop requires duplicating the track
  const content = images && images.length > 0 
    ? [...images, ...images] 
    : Array(10).fill(null);

  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_680,c_limit';

  return (
    <div className="space-y-[12px] group/row">
      <h4 className="font-headline text-[13px] tracking-[0.35em] text-brand-gold uppercase text-center opacity-80 group-hover/row:opacity-100 transition-opacity">
        {name}
      </h4>
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
            reverse ? "animate-scroll-right" : "animate-scroll-left",
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
          {content.map((item, i) => (
            item ? (
              <img 
                key={i} 
                src={cl(item, transformation)} 
                alt={`${name} in action`}
                loading={i === 0 && name === "DJ MOONS" ? "eager" : "lazy"}
                className="h-[260px] md:h-[340px] w-auto block flex-shrink-0"
                style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
              />
            ) : (
              <div 
                key={i}
                className="h-[260px] md:h-[340px] w-[240px] flex-shrink-0 bg-brand-gold/[0.08] flex items-center justify-center"
              />
            )
          ))}
        </div>
      </div>
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

  const djMainPattImages = [
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439551/IMG-20260325-WA0028_xg0xmg.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439550/IMG-20260325-WA0025_hejydl.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439550/IMG-20260325-WA0029_xkfd0g.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439549/IMG-20260325-WA0026_vfggnh.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439549/IMG-20260325-WA0024_oagwdk.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439549/IMG-20260325-WA0020_pyiaoj.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439548/IMG-20260325-WA0021_ws8z0m.jpg"
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

      <div className="space-y-[32px]">
        <div>
          <MarqueeTrack name="DJ MOONS" images={djMoonsImages} duration="28s" />
          <div className="w-[48px] h-[1px] bg-brand-gold/20 mx-auto mt-8 mb-0" />
        </div>
        
        <div>
          <MarqueeTrack name="DJ MAIN PATT" images={djMainPattImages} duration="34s" reverse />
          <div className="w-[48px] h-[1px] bg-brand-gold/20 mx-auto mt-8 mb-0" />
        </div>

        <div>
          <MarqueeTrack name="SAMEER" duration="32s" />
          <div className="w-[48px] h-[1px] bg-brand-gold/20 mx-auto mt-8 mb-0" />
        </div>

        <div>
          <MarqueeTrack name="MC VOICE" duration="30s" reverse />
          <div className="w-[48px] h-[1px] bg-brand-gold/20 mx-auto mt-8 mb-0" />
        </div>

        <MarqueeTrack name="INFLUENCER SQUAD" duration="38s" />
      </div>
    </div>
  );
};
