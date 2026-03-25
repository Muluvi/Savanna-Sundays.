
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

/**
 * High-fidelity infinite marquee track.
 * Features edge-fading via CSS masks and hover-to-pause logic.
 * Supports prefers-reduced-motion with a static scrollable fallback.
 */
const MarqueeTrack = ({ 
  images, 
  duration = "30s", 
  reverse = false 
}: { 
  images: string[], 
  duration?: string, 
  reverse?: boolean 
}) => {
  return (
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
          "motion-safe:animate-none", // Reset base animation to let tailwind classes handle it
          reverse ? "animate-scrollRight" : "animate-scrollLeft",
          "group-hover/track:[animation-play-state:paused]",
          "motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:scrollbar-hide"
        )}
        style={{ animationDuration: duration }}
      >
        {/* Render two sets for a seamless infinite loop */}
        {[...images, ...images].map((src, i) => (
          <div 
            key={i} 
            className="relative h-[260px] md:h-[340px] shrink-0"
          >
            <Image 
              src={src} 
              alt="Talent in Action" 
              height={340}
              width={600}
              className="h-full w-auto object-cover block"
              priority={i < 4}
              unoptimized // Preserve Cloudinary raw quality
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TalentMarquee = () => {
  // Hardcoded High-Fidelity URLs for DJ Moons
  const djMoonsImages = [
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435240/IMG_1744_dboqfs.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435239/IMG_1746_st88dv.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435194/IMG_1497_aiud8c.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435182/20fb5d79-d30b-405e-8a3a-4f434dbe8dc8_fgroxz.jpg"
  ];

  const djMainPattImages = [
    PlaceHolderImages.find(p => p.id === 'dj-mgm-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-4')?.imageUrl || '',
  ].filter(Boolean);

  const sameerImages = [
    PlaceHolderImages.find(p => p.id === 'dj-iv-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-1')?.imageUrl || '',
  ].filter(Boolean);

  const mcImages = [
    PlaceHolderImages.find(p => p.id === 'dj-mgm-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
  ].filter(Boolean);

  const influencerImages = [
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-4')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-1')?.imageUrl || '',
  ].filter(Boolean);

  const talents = [
    { name: "DJ MOONS", images: djMoonsImages, duration: "28s", reverse: false },
    { name: "DJ MAIN PATT", images: djMainPattImages, duration: "34s", reverse: true },
    { name: "SAMEER", images: sameerImages, duration: "32s", reverse: false },
    { name: "MC VOICE", images: mcImages, duration: "30s", reverse: true },
    { name: "INFLUENCER SQUAD", images: influencerImages, duration: "38s", reverse: false },
  ];

  return (
    <div className="bg-[#0E1A10] py-[64px] overflow-hidden">
      <div className="text-center mb-12">
        <p className="font-headline text-[11px] tracking-[0.4em] text-brand-gold/50 uppercase mb-2">
          03 — THE RITUAL
        </p>
        <h3 className="font-headline text-[clamp(2.5rem,8vw,5rem)] text-brand-gold uppercase leading-none mb-[48px]">
          THE SAVANNA VYBE SQUAD
        </h3>
      </div>

      <div className="space-y-[20px]">
        {talents.map((talent, idx) => (
          <div key={idx} className="space-y-[12px]">
            <h4 className="font-headline text-[13px] tracking-[0.35em] text-brand-gold uppercase text-center">
              {talent.name}
            </h4>
            <MarqueeTrack 
              images={talent.images} 
              duration={talent.duration} 
              reverse={talent.reverse} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};
