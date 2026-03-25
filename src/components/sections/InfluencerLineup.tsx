'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

/**
 * High-fidelity rolling counter for influencer reach.
 * Calibrated with increased line-height to prevent vertical text overlap.
 */
const RollingCounter = ({ targetValue, suffix = "+" }: { targetValue: number, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const startAnimation = () => {
      let startTime: number | null = null;
      const duration = 2500;

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
  }, [targetValue, hasAnimated]);

  return (
    <div ref={containerRef} className="font-headline text-[var(--text-display)] text-brand-gold leading-[1.1] tracking-tighter drop-shadow-[0_0_40px_rgba(244,197,66,0.4)]">
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
    name: "CULTURAL ANCHOR 01", 
    handle: "@vybesquad_alpha", 
    followers: 70000, 
    niche: "Premium Lifestyle",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442878/IMG_3496_fgwbly.jpg"
  },
  { 
    id: 2, 
    name: "CULTURAL ANCHOR 02", 
    handle: "@vybesquad_beta", 
    followers: 70000, 
    niche: "Nightlife Culture",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442877/IMG-20260325-WA0045_rwvb6u.jpg"
  },
  { 
    id: 3, 
    name: "CULTURAL ANCHOR 03", 
    handle: "@vybesquad_gamma", 
    followers: 70000, 
    niche: "Fashion & Style",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442876/IMG-20260325-WA0046_yizii9.jpg"
  },
  { 
    id: 4, 
    name: "CULTURAL ANCHOR 04", 
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

  return (
    <div className="space-y-24 py-32 border-t border-white/5 relative overflow-hidden bg-[#0E1A10]">
      {/* Background Proportional Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-gold/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="space-y-32 relative z-10">
        <div className="text-center space-y-8 px-6">
          <div className="flex items-center justify-center gap-4">
             <Sparkles className="text-brand-gold animate-pulse" size={24} />
             <div className="section-label mb-0 text-brand-gold tracking-[10px]">03E — PROVEN REACH</div>
             <Sparkles className="text-brand-gold animate-pulse" size={24} />
          </div>
          <h4 className="font-headline text-[var(--text-6xl)] md:text-[var(--text-display)] text-brand-gold uppercase leading-[0.9] tracking-tighter max-w-7xl mx-auto">
            THE AMPLIFIERS
          </h4>
          <p className="font-body text-brand-gold/60 text-base md:text-[var(--text-lg)] uppercase tracking-[10px] font-bold max-w-5xl mx-auto leading-tight">
            CUMULATIVE CROSS-PLATFORM AUDIENCE: <span className="text-brand-gold border-b-2 border-brand-gold/40">70,000+ PER NODE</span>
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-24 min-w-[1400px] pb-12 pt-8">
            {placeholderInfluencers.map((inf) => (
              <div 
                key={inf.id} 
                className="group relative flex flex-col items-center gap-12 transition-all duration-700 hover:-translate-y-4"
              >
                {/* Profile Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-gold/20 overflow-hidden bg-brand-green/10 flex items-center justify-center transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
                  <img 
                    src={cl(inf.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_800,h_800,c_fill')} 
                    alt={inf.name} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>

                {/* Data Narrative */}
                <div className="text-center space-y-12 w-full">
                  <div className="space-y-3">
                    <h4 className="font-headline text-4xl md:text-5xl text-white tracking-widest uppercase leading-none group-hover:text-brand-gold transition-colors">
                      {inf.name}
                    </h4>
                    <p className="font-body text-[var(--text-sm)] text-brand-gold/60 font-bold tracking-[6px] uppercase">
                      {inf.handle}
                    </p>
                  </div>

                  {/* reach figures animated to pop out more */}
                  <div className="py-16 border-y border-white/5 space-y-6">
                    <span className="font-body text-[var(--text-xs)] tracking-[8px] text-brand-gold/40 uppercase block font-bold">VERIFIED AUDIENCE EQUITY</span>
                    <RollingCounter targetValue={inf.followers} />
                  </div>

                  {/* Platform Proof */}
                  <div className="flex justify-center items-center gap-12 py-8 transition-all duration-500">
                    {igLogo && <img src={cl(igLogo.imageUrl, 'w_160')} alt="IG" className="h-10 w-auto transition-all" />}
                    {ttLogo && <img src={cl(ttLogo.imageUrl, 'w_160')} alt="TikTok" className="h-10 w-auto transition-all" />}
                    {ytLogo && <img src={cl(ytLogo.imageUrl, 'w_160')} alt="YT" className="h-10 w-auto transition-all" />}
                  </div>

                  <Badge className="bg-brand-gold text-brand-green border-none text-[var(--text-sm)] uppercase font-bold tracking-[6px] px-10 py-4 rounded-full shadow-2xl">
                    {inf.niche}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="font-body text-[var(--text-xs)] text-brand-gold/20 italic uppercase tracking-[8px] font-bold leading-relaxed">
            All session data and reach metrics verified via Firefly Intelligence.
          </p>
        </div>
      </div>
    </div>
  );
};
