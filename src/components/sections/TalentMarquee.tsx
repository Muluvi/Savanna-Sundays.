"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

/**
 * High-fidelity infinite marquee track.
 * Fades edges via CSS mask to prevent hard clipping.
 * Renders images at natural aspect ratio with fixed height.
 */
const MarqueeTrack = ({ 
  images, 
  speed = "35s", 
  reverse = false 
}: { 
  images: string[], 
  speed?: string, 
  reverse?: boolean 
}) => {
  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
      }}
    >
      <div 
        className={cn(
          "flex gap-4 w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: speed }}
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
              width={600} // width auto will preserve aspect ratio
              className="h-full w-auto object-cover block"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TalentMarquee = () => {
  const djIvImages = [
    PlaceHolderImages.find(p => p.id === 'dj-iv-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-3')?.imageUrl || '',
  ].filter(Boolean);

  const djMgmImages = [
    PlaceHolderImages.find(p => p.id === 'dj-mgm-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-4')?.imageUrl || '',
  ].filter(Boolean);

  const squadImages = [
    PlaceHolderImages.find(p => p.id === 'dj-iv-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-4')?.imageUrl || '',
  ].filter(Boolean);

  const talents = [
    { name: "DJ IV", images: djIvImages, speed: "40s", reverse: false },
    { name: "DJ MGM", images: djMgmImages, speed: "30s", reverse: true },
    { name: "THE SQUAD", images: squadImages, speed: "50s", reverse: false },
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
            <MarqueeTrack images={talent.images} speed={talent.speed} reverse={talent.reverse} />
          </div>
        ))}
      </div>
    </div>
  );
};
