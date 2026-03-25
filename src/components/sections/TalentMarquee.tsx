
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

/**
 * High-fidelity infinite marquee row.
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
    <div className="group flex overflow-hidden select-none gap-4">
      <div 
        className={cn(
          "flex flex-nowrap gap-4 shrink-0 min-w-full",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: speed }}
      >
        {images.map((src, i) => (
          <div 
            key={i} 
            className="relative h-[260px] md:h-[340px] shrink-0"
            style={{ width: 'auto' }}
          >
            <Image 
              src={src} 
              alt="Squad in Action" 
              height={340}
              width={600}
              className="h-full w-auto object-contain transition-transform duration-700"
              priority={i < 4}
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((src, i) => (
          <div 
            key={`dup-${i}`} 
            className="relative h-[260px] md:h-[340px] shrink-0"
            style={{ width: 'auto' }}
          >
            <Image 
              src={src} 
              alt="Squad in Action" 
              height={340}
              width={600}
              className="h-full w-auto object-contain"
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
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
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
    <div className="bg-[#0E1A10] py-16 -mx-6 md:-mx-12 lg:-mx-24 overflow-hidden relative">
      {/* Edge Masks */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0E1A10] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0E1A10] to-transparent pointer-events-none" />

      <div className="text-center mb-12 space-y-2 px-6">
        <p className="font-headline text-[11px] tracking-[0.4em] text-brand-gold/50 uppercase">
          03 — THE RITUAL
        </p>
        <h3 className="font-headline text-[clamp(2.5rem,8vw,5rem)] text-brand-gold uppercase leading-none">
          THE SAVANNA VYBE SQUAD
        </h3>
      </div>

      <div className="space-y-12">
        {talents.map((talent, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="font-headline text-[13px] tracking-[0.35em] text-brand-gold uppercase text-center">
              {talent.name}
            </h4>
            <MarqueeTrack images={talent.images} speed={talent.speed} reverse={talent.reverse} />
          </div>
        ))}
      </div>

      <div className="mt-16 px-6 max-w-2xl mx-auto">
        <p className="font-body text-[var(--text-xs)] text-brand-gold/20 italic uppercase tracking-[4px] font-bold text-center">
          Uncropped. Unedited. The raw energy of Nairobi&apos;s Sundays.
        </p>
      </div>
    </div>
  );
};
