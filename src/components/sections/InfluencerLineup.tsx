
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';
import { cn } from '@/lib/utils';

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
      const duration = 2000;

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
    <div ref={containerRef} className="font-headline text-3xl text-brand-gold leading-none tracking-tighter">
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
  { id: 1, name: "[Influencer Name]", handle: "@handle", followers: 70000, niche: "Lifestyle" },
  { id: 2, name: "[Influencer Name]", handle: "@handle", followers: 70000, niche: "Nightlife" },
  { id: 3, name: "[Influencer Name]", handle: "@handle", followers: 70000, niche: "Fashion" },
  { id: 4, name: "[Influencer Name]", handle: "@handle", followers: 70000, niche: "Food" },
  { id: 5, name: "[Influencer Name]", handle: "@handle", followers: 70000, niche: "Lifestyle" },
];

export const InfluencerLineup = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const igLogo = PlaceHolderImages.find(p => p.id === 'social-ig');
  const ttLogo = PlaceHolderImages.find(p => p.id === 'social-tt');
  const ytLogo = PlaceHolderImages.find(p => p.id === 'social-yt');

  return (
    <div className="space-y-12 py-20 border-t border-white/5">
      <div className="space-y-6">
        <div className="text-center space-y-4 mb-12">
          <div className="section-label">03E — The Influencer Lineup</div>
          <h4 className="font-headline text-[clamp(2.5rem,8vw,5rem)] text-brand-gold uppercase leading-none tracking-tighter">
            PROVEN CULTURAL REACH
          </h4>
          <p className="font-body text-brand-gold/60 text-xs md:text-sm uppercase tracking-[4px] font-bold max-w-2xl mx-auto">
            Each squad member commands a verified cross-platform audience.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex md:grid md:grid-cols-5 gap-6 min-w-[1200px] md:min-w-0 pb-8">
            {placeholderInfluencers.map((inf) => (
              <div 
                key={inf.id} 
                className="group relative flex flex-col items-center p-8 rounded-[40px] transition-all duration-700 hover:bg-white/[0.03] border border-transparent hover:border-white/10"
                style={{ backgroundColor: '#141E15' }}
              >
                {/* Profile Image Container */}
                <div className="relative w-32 h-32 rounded-full border-2 border-brand-gold/40 overflow-hidden mb-6 bg-brand-green/20 flex items-center justify-center group-hover:border-brand-gold transition-all duration-500 shadow-2xl">
                  {inf.imageUrl ? (
                    <img 
                      src={cl(inf.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_300,h_300,c_fill')} 
                      alt={inf.name} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6 opacity-20">
                      {savannaLogo && (
                        <img 
                          src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_100')} 
                          alt="Savanna" 
                          style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Info Block */}
                <div className="text-center space-y-4 relative z-10 w-full">
                  <div className="space-y-1">
                    <h4 className="font-headline text-2xl text-white tracking-widest uppercase leading-none group-hover:text-brand-gold transition-colors">
                      {inf.name}
                    </h4>
                    <p className="font-body text-[10px] text-brand-gold/60 font-bold tracking-[3px] uppercase">
                      {inf.handle}
                    </p>
                  </div>

                  {/* Reach Stats */}
                  <div className="py-4 border-y border-white/5 space-y-1">
                    <span className="font-headline text-[10px] tracking-[3px] text-brand-gold/40 uppercase block">Cumulative Reach</span>
                    <RollingCounter targetValue={inf.followers} />
                  </div>

                  {/* Platform Proof */}
                  <div className="flex justify-center items-center gap-4 py-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    {igLogo && <img src={cl(igLogo.imageUrl, 'w_40')} alt="IG" className="h-4 w-auto grayscale brightness-200" />}
                    {ttLogo && <img src={cl(ttLogo.imageUrl, 'w_40')} alt="TikTok" className="h-4 w-auto grayscale brightness-200" />}
                    {ytLogo && <img src={cl(ytLogo.imageUrl, 'w_40')} alt="YT" className="h-4 w-auto grayscale brightness-200" />}
                  </div>

                  <Badge className="bg-brand-gold text-brand-green border-none text-[8px] uppercase font-bold tracking-[3px] px-4 py-1.5 rounded-full shadow-xl">
                    {inf.niche}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center pt-8">
          <p className="font-body text-[11px] text-brand-gold/40 italic uppercase tracking-[3px] font-bold leading-relaxed px-6">
            The Influencer Pool is curated by Firefly for maximum resonance. <br className="hidden md:block" />
            Selection criteria: Nairobi-based creators with a cumulative 70,000+ cross-platform following <br className="hidden md:block" />
            and high-engagement story conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
};

    