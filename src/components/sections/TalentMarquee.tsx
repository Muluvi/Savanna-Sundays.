
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

/**
 * High-fidelity infinite marquee row.
 * Renders images at natural aspect ratio with fixed height.
 */
const MarqueeRow = ({ 
  images, 
  speed = "30s", 
  reverse = false 
}: { 
  images: string[], 
  speed?: string, 
  reverse?: boolean 
}) => {
  return (
    <div className="group flex overflow-hidden select-none gap-4 py-2">
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
            style={{ 
              aspectRatio: '16/9', // Fallback, but NextJS Image handles content
              width: 'auto' 
            }}
          >
            <Image 
              src={src} 
              alt="Talent Action" 
              height={340}
              width={600}
              className="h-full w-auto object-cover grayscale-0 hover:scale-105 transition-transform duration-700"
              priority={i < 4}
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((src, i) => (
          <div 
            key={`dup-${i}`} 
            className="relative h-[260px] md:h-[340px] shrink-0"
            style={{ 
              aspectRatio: '16/9',
              width: 'auto' 
            }}
          >
            <Image 
              src={src} 
              alt="Talent Action" 
              height={340}
              width={600}
              className="h-full w-auto object-cover grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TalentMarquee = () => {
  // Source sets from existing placeholder data
  const djIvImages = [
    PlaceHolderImages.find(p => p.id === 'dj-iv-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-4')?.imageUrl || '',
  ].filter(Boolean);

  const djMgmImages = [
    PlaceHolderImages.find(p => p.id === 'dj-mgm-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-1')?.imageUrl || '',
  ].filter(Boolean);

  const mixedImages = [
    PlaceHolderImages.find(p => p.id === 'dj-iv-3')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-1')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-iv-2')?.imageUrl || '',
    PlaceHolderImages.find(p => p.id === 'dj-mgm-4')?.imageUrl || '',
  ].filter(Boolean);

  return (
    <div className="relative -mx-6 md:-mx-12 lg:-mx-24 space-y-4 md:space-y-6">
      {/* Subtle edge masks for focus */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-brand-green to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-brand-green to-transparent pointer-events-none" />

      <div className="space-y-2">
        <MarqueeRow images={djIvImages} speed="45s" />
        <MarqueeRow images={djMgmImages} speed="35s" reverse />
        <MarqueeRow images={mixedImages} speed="55s" />
      </div>

      <div className="mt-8 px-6 md:px-12 lg:px-24">
        <p className="font-body text-[var(--text-xs)] text-brand-gold/30 italic uppercase tracking-[4px] font-bold text-center">
          The Squad is live. The energy is captured. Uncropped, unedited, undeniable.
        </p>
      </div>
    </div>
  );
};
