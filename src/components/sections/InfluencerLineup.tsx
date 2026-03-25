'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

/**
 * High-fidelity rolling counter for influencer reach.
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
        
        // Quad ease-out
        const easeOut = progress * (2 - progress);
        setDisplayValue(easeOut * targetValue);

        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <div ref={containerRef} className="font-headline text-[clamp(3rem,8vw,6rem)] text-brand-gold leading-[0.85] tracking-tighter drop-shadow-[0_0_30px_rgba(244,197,66,0.3)]">
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
  imageUrl?: string;
}

const placeholderInfluencers: Influencer[] = [
  { id: 1, name: "[Influencer 01]", handle: "@vybesquad_01", followers: 70000, niche: "Premium Lifestyle" },
  { id: 2, name: "[Influencer 02]", handle: "@vybesquad_02", followers: 70000, niche: "Nightlife Culture" },
  { id: 3, name: "[Influencer 03]", handle: "@vybesquad_03", followers: 70000, niche: "Fashion & Style" },
  { id: 4, name: "[Influencer 04]", handle: "@vybesquad_04", followers: 70000, niche: "Mainstream Energy" },
  { id: 5, name: "[Influencer 05]", handle: "@vybesquad_05", followers: 70000, niche: "Music & Trends" },
];

export const InfluencerLineup = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const igLogo = PlaceHolderImages.find(p => p.id === 'social-ig');
  const ttLogo = PlaceHolderImages.find(p => p.id === 'social-tt');
  const ytLogo = PlaceHolderImages.find(p => p.id === 'social-yt');

  return (
    <div className="space-y-16 py-32 border-t border-white/5 relative overflow-hidden bg-[#0E1A10]">
      {/* Background Proportional Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="space-y-24 relative z-10">
        <div className="text-center space-y-6 px-6">
          <div className="flex items-center justify-center gap-3">
             <Sparkles className="text-brand-gold animate-pulse" size={20} />
             <div className="section-label mb-0">03E — The Influencer Lineup</div>
             <Sparkles className="text-brand-gold animate-pulse" size={20} />
          </div>
          <h4 className="font-headline text-[clamp(3rem,12vw,9rem)] text-brand-gold uppercase leading-[0.85] tracking-tighter max-w-6xl mx-auto">
            PROVEN CULTURAL REACH
          </h4>
          <p className="font-body text-brand-gold/60 text-sm md:text-xl uppercase tracking-[8px] font-bold max-w-4xl mx-auto leading-tight">
            Each squad member commands a verified cumulative cross-platform audience of <span className="text-brand-gold underline decoration-brand-gold/40 underline-offset-[12px]">70,000+</span>.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-12 min-w-[1500px] pb-12">
            {placeholderInfluencers.map((inf) => (
              <div 
                key={inf.id} 
                className="group relative flex flex-col items-center gap-8 transition-all duration-700 hover:-translate-y-4"
              >
                {/* Profile Image Container */}
                <div className="relative w-56 h-56 rounded-full border-4 border-brand-gold/20 overflow-hidden bg-brand-green/20 flex items-center justify-center group-hover:border-brand-gold transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                  {inf.imageUrl ? (
                    <img 
                      src={cl(inf.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_600,h_600,c_fill')} 
                      alt={inf.name} 
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-12 opacity-20">
                      {savannaLogo && (
                        <img 
                          src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_240')} 
                          alt="Savanna" 
                          style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Info Block - No Cards */}
                <div className="text-center space-y-8 w-full">
                  <div className="space-y-1">
                    <h4 className="font-headline text-4xl text-white tracking-widest uppercase leading-none group-hover:text-brand-gold transition-colors">
                      {inf.name}
                    </h4>
                    <p className="font-body text-[12px] text-brand-gold/60 font-bold tracking-[5px] uppercase">
                      {inf.handle}
                    </p>
                  </div>

                  {/* Reach Stats */}
                  <div className="py-10 border-y border-white/5 space-y-4">
                    <span className="font-body text-[10px] tracking-[6px] text-brand-gold/30 uppercase block font-bold">Total Social Equity</span>
                    <RollingCounter targetValue={inf.followers} />
                  </div>

                  {/* Platform Proof */}
                  <div className="flex justify-center items-center gap-10 py-4 opacity-40 group-hover:opacity-100 transition-all duration-500">
                    {igLogo && <img src={cl(igLogo.imageUrl, 'w_160')} alt="IG" className="h-10 w-auto grayscale group-hover:grayscale-0 brightness-200 group-hover:brightness-100 transition-all" />}
                    {ttLogo && <img src={cl(ttLogo.imageUrl, 'w_160')} alt="TikTok" className="h-10 w-auto grayscale group-hover:grayscale-0 brightness-200 group-hover:brightness-100 transition-all" />}
                    {ytLogo && <img src={cl(ytLogo.imageUrl, 'w_160')} alt="YT" className="h-10 w-auto grayscale group-hover:grayscale-0 brightness-200 group-hover:brightness-100 transition-all" />}
                  </div>

                  <Badge className="bg-brand-gold text-brand-green border-none text-[11px] uppercase font-bold tracking-[5px] px-8 py-2.5 rounded-full shadow-2xl">
                    {inf.niche}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="font-body text-sm text-brand-gold/30 italic uppercase tracking-[6px] font-bold leading-relaxed">
            Consolidated verification: 70,000+ cumulative followers across Tier 1 digital nodes.
          </p>
        </div>
      </div>
    </div>
  );
};
