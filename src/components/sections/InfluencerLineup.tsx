'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cl } from '@/lib/cloudinary';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface Influencer {
  id: number;
  name: string;
  handle: string;
  followers: number;
  niche: string;
  imageUrl: string;
  isVerified?: boolean;
}

const placeholderInfluencers: Influencer[] = [
  { 
    id: 1, 
    name: "MISSBARAKEILLA", 
    handle: "@missbarakeilla", 
    followers: 63700, 
    niche: "Fashion Model | Chef",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442878/IMG_3496_fgwbly.jpg",
    isVerified: true
  },
  { 
    id: 2, 
    name: "JOJO MLEIKA", 
    handle: "@jojo_mleika", 
    followers: 29700, 
    niche: "Fashion | Lifestyle",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442877/IMG-20260325-WA0045_rwvb6u.jpg",
    isVerified: true
  },
  { 
    id: 3, 
    name: "LOCKEY WILLIS KING", 
    handle: "@lockey_fashion_trend", 
    followers: 60200, 
    niche: "Award Winning Stylist",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774442876/IMG-20260325-WA0046_yizii9.jpg",
    isVerified: true
  },
  { 
    id: 4, 
    name: "ZAKI MANDUVE MATASI", 
    handle: "@manduve18", 
    followers: 5919, 
    niche: "Football Player | Actor",
    imageUrl: "https://res.cloudinary.com/da5j0zjok/image/upload/v1774456144/IMG-20260325-WA0057_v6fxg7.jpg",
    isVerified: false
  },
];

export const InfluencerLineup = () => {
  const igLogo = PlaceHolderImages.find(p => p.id === 'social-ig');
  const ttLogo = PlaceHolderImages.find(p => p.id === 'social-tt');
  const ytLogo = PlaceHolderImages.find(p => p.id === 'social-yt');

  const displayInfluencers = [...placeholderInfluencers, ...placeholderInfluencers, ...placeholderInfluencers];

  return (
    <div className="space-y-8 py-10 md:py-16 border-t border-white/5 relative overflow-hidden bg-[#0E1A10]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center space-y-3 px-6 relative z-10">
        <div className="flex items-center justify-center gap-3">
           <Sparkles className="text-brand-gold animate-pulse" size={14} />
           <div className="section-label mb-0 text-brand-gold tracking-[4px]">03E — PROVEN REACH</div>
           <Sparkles className="text-brand-gold animate-pulse" size={14} />
        </div>
        <h4 className="font-headline text-[var(--text-3xl)] md:text-[var(--text-5xl)] text-brand-gold uppercase tracking-tighter leading-none">
          THE SQUAD AMPLIFIERS
        </h4>
        <p className="font-body text-brand-gold/40 text-[9px] uppercase tracking-[4px] font-bold">
          CUMULATIVE CROSS-PLATFORM REACH: VERIFIED VIA FIREFLY INTELLIGENCE
        </p>
      </div>

      <div 
        className="relative w-full overflow-hidden group"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div 
          className="flex w-max space-x-12 items-start py-6 group-hover:[animation-play-state:paused]"
          style={{ animation: 'scrollL 45s linear infinite' }}
        >
          {displayInfluencers.map((inf, i) => (
            <div 
              key={`${inf.id}-${i}`} 
              className="relative flex flex-col items-center gap-6 w-[240px] md:w-[320px] shrink-0"
            >
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-brand-gold/20 overflow-hidden bg-brand-green/10 shadow-[0_15px_30px_rgba(0,0,0,0.5)] group-hover:border-brand-gold transition-all duration-700">
                <img 
                  src={cl(inf.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_600,h_600,c_fill')} 
                  alt={inf.name} 
                  className="h-full w-full object-cover" 
                />
              </div>

              <div className="text-center space-y-4 w-full">
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <h4 className="font-headline text-xl md:text-2xl text-white tracking-[4px] uppercase leading-none">{inf.name}</h4>
                    {inf.isVerified && <CheckCircle2 className="text-blue-400 w-3 h-3 fill-blue-400/10" />}
                  </div>
                  <p className="font-body text-[9px] text-brand-gold/60 font-bold tracking-[4px] uppercase">{inf.handle}</p>
                </div>

                <div className="space-y-3">
                  <AnimatedCounter 
                    value={inf.followers} 
                    suffix=""
                    className="font-headline text-4xl md:text-6xl text-brand-gold leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(244,197,66,0.4)]"
                  />
                  <div className="flex justify-center items-center gap-6">
                    {igLogo && <img src={cl(igLogo.imageUrl, 'w_120')} alt="IG" className="h-6 md:h-8 w-auto object-contain" />}
                    {ttLogo && <img src={cl(ttLogo.imageUrl, 'w_120')} alt="TikTok" className="h-6 md:h-8 w-auto object-contain" />}
                    {ytLogo && <img src={cl(ytLogo.imageUrl, 'w_120')} alt="YouTube" className="h-6 md:h-8 w-auto object-contain" />}
                  </div>
                </div>

                <Badge className="bg-brand-gold text-brand-green border-none text-[9px] uppercase font-bold tracking-[4px] px-6 py-2 rounded-full shadow-lg">
                  {inf.niche}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <p className="font-body text-[9px] text-brand-gold/20 italic uppercase tracking-[4px] font-bold leading-relaxed">
          Reach metrics verified via Firefly Intelligence. Figures animate as they roll onto screen.
        </p>
      </div>
    </div>
  );
};
