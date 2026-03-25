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
    <div ref={containerRef} className="font-headline text-[var(--text-4xl)] text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(244,197,66,0.4)]">
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
    <div className="space-y-16 py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background Proportional Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="space-y-8 relative z-10">
        <div className="text-center space-y-6 mb-16 px-6">
          <div className="flex items-center justify-center gap-3">
             <Sparkles className="text-brand-gold animate-pulse" size={20} />
             <div className="section-label mb-0">03E — The Influencer Lineup</div>
             <Sparkles className="text-brand-gold animate-pulse" size={20} />
          </div>
          <h4 className="font-headline text-[clamp(2.5rem,10vw,7rem)] text-brand-gold uppercase leading-[0.9] tracking-tighter max-w-5xl mx-auto">
            PROVEN CULTURAL REACH
          </h4>
          <p className="font-body text-brand-gold/60 text-xs md:text-base uppercase tracking-[6px] font-bold max-w-3xl mx-auto">
            Each squad member commands a verified cross-platform audience of <span className="text-brand-gold">70,000+</span> decision makers.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6 pb-12">
          <div className="flex md:grid md:grid-cols-5 gap-8 min-w-[1300px] md:min-w-0">
            {placeholderInfluencers.map((inf) => (
              <div 
                key={inf.id} 
                className="group relative flex flex-col items-center p-10 rounded-[56px] transition-all duration-700 hover:bg-white/[0.04] border border-white/5 hover:border-brand-gold/30 shadow-2xl"
                style={{ backgroundColor: '#0E1A10' }}
              >
                {/* Profile Image Container - Proportional Anchor */}
                <div className="relative w-40 h-40 rounded-full border-4 border-brand-gold/20 overflow-hidden mb-8 bg-brand-green/20 flex items-center justify-center group-hover:border-brand-gold transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  {inf.imageUrl ? (
                    <img 
                      src={cl(inf.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400,h_400,c_fill')} 
                      alt={inf.name} 
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8 opacity-20">
                      {savannaLogo && (
                        <img 
                          src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_160')} 
                          alt="Savanna" 
                          style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Info Block */}
                <div className="text-center space-y-6 relative z-10 w-full">
                  <div className="space-y-1">
                    <h4 className="font-headline text-3xl text-white tracking-widest uppercase leading-none group-hover:text-brand-gold transition-colors">
                      {inf.name}
                    </h4>
                    <p className="font-body text-[11px] text-brand-gold/60 font-bold tracking-[4px] uppercase">
                      {inf.handle}
                    </p>
                  </div>

                  {/* Reach Stats - The "Pop" Element */}
                  <div className="py-6 border-y border-white/10 space-y-2 group-hover:bg-white/5 transition-colors rounded-2xl">
                    <span className="font-headline text-[11px] tracking-[4px] text-brand-gold/40 uppercase block">Cumulative Reach</span>
                    <RollingCounter targetValue={inf.followers} />
                  </div>

                  {/* Platform Proof - Logos made more prominent */}
                  <div className="flex justify-center items-center gap-6 py-4 opacity-40 group-hover:opacity-100 transition-all duration-500">
                    {igLogo && <img src={cl(igLogo.imageUrl, 'w_60')} alt="IG" className="h-6 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all" />}
                    {ttLogo && <img src={cl(ttLogo.imageUrl, 'w_60')} alt="TikTok" className="h-6 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all" />}
                    {ytLogo && <img src={cl(ytLogo.imageUrl, 'w_60')} alt="YT" className="h-6 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all" />}
                  </div>

                  <Badge className="bg-brand-gold text-brand-green border-none text-[10px] uppercase font-bold tracking-[4px] px-6 py-2 rounded-full shadow-2xl group-hover:scale-110 transition-transform">
                    {inf.niche}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center pt-12 px-6">
          <p className="font-body text-[12px] text-brand-gold/40 italic uppercase tracking-[4px] font-bold leading-relaxed">
            The Influencer Pool is curated by Firefly for maximum resonance. <br className="hidden md:block" />
            Selection criteria: Nairobi-based creators with a cumulative <span className="text-brand-gold/60">70,000+</span> cross-platform following <br className="hidden md:block" />
            and high-engagement story conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
};