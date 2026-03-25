'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

/**
 * High-fidelity rolling counter for influencer reach.
 * Calibrated to animate whenever it enters the screen, ensuring visibility in the marquee.
 */
const RollingCounter = ({ targetValue, suffix = "+" }: { targetValue: number, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and animate every time it becomes visible
          setDisplayValue(0);
          startAnimation();
        }
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const startAnimation = () => {
      let startTime: number | null = null;
      const duration = 2000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = progress * (2 - progress);
        setDisplayValue(easeOut * targetValue);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div ref={containerRef} className="font-headline text-5xl md:text-8xl text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_25px_rgba(244,197,66,0.4)]">
      {Math.floor(displayValue).toLocaleString()}{suffix}
    </div>
  );
};

interface Influencer {
  id: number;
  name: string;
  handle: string;
  followers: number;
  niche: string;
  imageUrl: string;
}

const placeholderInfluencers: Influencer[] = [
  { 
    id: 1, 
    name: "SQUAD ANCHOR 01", 
    handle: "@vybesquad_alpha", 
    followers: 70000, 
    niche: "Premium Lifestyle",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442878/IMG_3496_fgwbly.jpg"
  },
  { 
    id: 2, 
    name: "SQUAD ANCHOR 02", 
    handle: "@vybesquad_beta", 
    followers: 70000, 
    niche: "Nightlife Culture",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442877/IMG-20260325-WA0045_rwvb6u.jpg"
  },
  { 
    id: 3, 
    name: "SQUAD ANCHOR 03", 
    handle: "@vybesquad_gamma", 
    followers: 70000, 
    niche: "Fashion & Style",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442876/IMG-20260325-WA0046_yizii9.jpg"
  },
  { 
    id: 4, 
    name: "SQUAD ANCHOR 04", 
    handle: "@vybesquad_delta", 
    followers: 70000, 
    niche: "Mainstream Energy",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442875/IMG-20260325-WA0047_browth.jpg"
  },
];

export const InfluencerLineup = () => {
  const igLogo = PlaceHolderImages.find(p => p.id === 'social-ig');
  const ttLogo = PlaceHolderImages.find(p => p.id === 'social-tt');
  const ytLogo = PlaceHolderImages.find(p => p.id === 'social-yt');

  // Duplicate influencers for seamless loop
  const displayInfluencers = [...placeholderInfluencers, ...placeholderInfluencers, ...placeholderInfluencers];

  return (
    <div className="space-y-12 py-16 md:py-24 border-t border-white/5 relative overflow-hidden bg-[#0E1A10]">
      {/* Background Proportional Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center space-y-4 px-6 relative z-10">
        <div className="flex items-center justify-center gap-3">
           <Sparkles className="text-brand-gold animate-pulse" size={16} />
           <div className="section-label mb-0 text-brand-gold tracking-[4px]">03E — PROVEN REACH</div>
           <Sparkles className="text-brand-gold animate-pulse" size={16} />
        </div>
        <h4 className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold uppercase tracking-tighter leading-none">
          THE SQUAD AMPLIFIERS
        </h4>
        <p className="font-body text-brand-gold/40 text-[10px] uppercase tracking-[4px] font-bold">
          CUMULATIVE CROSS-PLATFORM REACH: 70,000+ PER NODE
        </p>
      </div>

      {/* Automated Marquee Track */}
      <div 
        className="relative w-full overflow-hidden group"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div 
          className="flex w-max space-x-16 items-start py-8 group-hover:[animation-play-state:paused]"
          style={{ animation: 'scrollL 45s linear infinite' }}
        >
          {displayInfluencers.map((inf, i) => (
            <div 
              key={`${inf.id}-${i}`} 
              className="relative flex flex-col items-center gap-8 w-[280px] md:w-[380px] shrink-0"
            >
              {/* Profile Image - Fixed HD Size */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-gold/20 overflow-hidden bg-brand-green/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:border-brand-gold transition-all duration-700">
                <img 
                  src={cl(inf.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_800,h_800,c_fill')} 
                  alt={inf.name} 
                  className="h-full w-full object-cover" 
                />
              </div>

              {/* Data Stack - Vertically Compact */}
              <div className="text-center space-y-6 w-full">
                <div className="space-y-1">
                  <h4 className="font-headline text-2xl md:text-3xl text-white tracking-[4px] uppercase leading-none">{inf.name}</h4>
                  <p className="font-body text-[10px] text-brand-gold/60 font-bold tracking-[4px] uppercase">{inf.handle}</p>
                </div>

                <div className="space-y-4">
                  <RollingCounter targetValue={inf.followers} />
                  <div className="flex justify-center items-center gap-8">
                    {igLogo && <img src={cl(igLogo.imageUrl, 'w_150')} alt="IG" className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)]" />}
                    {ttLogo && <img src={cl(ttLogo.imageUrl, 'w_150')} alt="TikTok" className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)]" />}
                    {ytLogo && <img src={cl(ytLogo.imageUrl, 'w_150')} alt="YouTube" className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.3)]" />}
                  </div>
                </div>

                <Badge className="bg-brand-gold text-brand-green border-none text-[10px] uppercase font-bold tracking-[4px] px-8 py-2.5 rounded-full shadow-lg">
                  {inf.niche}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <p className="font-body text-[10px] text-brand-gold/20 italic uppercase tracking-[4px] font-bold leading-relaxed">
          Reach metrics verified via Firefly Intelligence. Figures animate as they roll onto screen.
        </p>
      </div>
    </div>
  );
};
