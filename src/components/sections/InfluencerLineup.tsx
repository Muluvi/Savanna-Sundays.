'use client';

import React from 'react';
import { Instagram, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface Influencer {
  id: number;
  name: string;
  handle: string;
  followers: string;
  niche: string;
  imageUrl?: string;
}

const placeholderInfluencers: Influencer[] = [
  { id: 1, name: "[Influencer Name]", handle: "@handle", followers: "XK", niche: "Lifestyle" },
  { id: 2, name: "[Influencer Name]", handle: "@handle", followers: "XK", niche: "Nightlife" },
  { id: 3, name: "[Influencer Name]", handle: "@handle", followers: "XK", niche: "Fashion" },
  { id: 4, name: "[Influencer Name]", handle: "@handle", followers: "XK", niche: "Food" },
  { id: 5, name: "[Influencer Name]", handle: "@handle", followers: "XK", niche: "Lifestyle" },
];

export const InfluencerLineup = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');

  return (
    <div className="space-y-12 pt-12 border-t border-white/5">
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-brand-gold" size={24} />
          <div className="section-label mb-0">03E — The Influencer Lineup</div>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex md:grid md:grid-cols-5 gap-4 min-w-[1200px] md:min-w-0 pb-8">
            {placeholderInfluencers.map((inf) => (
              <div 
                key={inf.id} 
                className="group relative flex flex-col items-center p-8 rounded-[40px] transition-all duration-500 hover:scale-105"
                style={{ backgroundColor: '#1A1208' }}
              >
                <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(244,197,66,0.15)] pointer-events-none" />
                
                <div className="relative w-24 h-24 rounded-full border-2 border-brand-gold overflow-hidden mb-6 bg-brand-green/20 flex items-center justify-center">
                  {inf.imageUrl ? (
                    <img src={inf.imageUrl} alt={inf.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-4 opacity-20">
                      {savannaLogo && (
                        <img 
                          src={savannaLogo.imageUrl} 
                          alt="Savanna" 
                          className="h-10 w-auto object-contain" 
                        />
                      )}
                    </div>
                  )}
                </div>

                <div className="text-center space-y-2 relative z-10">
                  <h4 className="font-headline text-2xl text-brand-gold tracking-widest uppercase leading-none">
                    {inf.name}
                  </h4>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2 text-[#CD7F32] group-hover:text-brand-gold transition-colors">
                      <Instagram size={12} />
                      <span className="font-body text-[10px] font-bold tracking-widest">{inf.handle}</span>
                    </div>
                    <span className="font-body text-[9px] text-brand-cream uppercase tracking-widest font-bold opacity-60">
                      {inf.followers} followers
                    </span>
                  </div>
                  <Badge className="bg-brand-gold/10 text-brand-gold border-brand-gold/20 text-[8px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mt-3 shadow-lg">
                    {inf.niche}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-[10px] text-brand-gold/30 italic uppercase tracking-[3px] font-bold leading-relaxed">
            Influencer lineup is curated by Firefly. Selection criteria: Nairobi-based, 10K–50K followers, lifestyle/nightlife/food/fashion niches, 3%+ Stories engagement rate. Rotated monthly to keep content fresh and expand reach.
          </p>
        </div>
      </div>
    </div>
  );
};
