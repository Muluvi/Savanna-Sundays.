'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Music, 
  Users, 
  Camera,
  Scissors,
  Upload,
  Video,
  Share2,
  CalendarDays,
  Sparkles
} from 'lucide-react';
import { ContentHarvestMetrics } from './ContentProduction';

const productionDays = [
  { day: "Sun", title: "Shoot", body: "Capture at The Savanna Vybe Squad venue.", icon: <Camera size={14} />, highlight: false },
  { day: "Mon", title: "Review", body: "Raw review. Reel edit starts.", icon: <Scissors size={14} />, highlight: false },
  { day: "Tue", title: "Hero", body: "Reel 1 published (Recap).", icon: <Upload size={14} />, highlight: true },
  { day: "Wed", title: "Music", body: "Reel 2 (DJ Highlight).", icon: <Music size={14} />, highlight: true },
  { day: "Thu", title: "Style", body: "Reel 3 (Crowd/Lifestyle).", icon: <Video size={14} />, highlight: true },
  { day: "Fri", title: "Vibe", body: "Reel 4 (Influencers).", icon: <Users size={14} />, highlight: true },
  { day: "Sat", title: "Loop", body: "UGC Roundup & Teaser.", icon: <Share2 size={14} />, highlight: true },
];

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12">
      {/* 03B: The Content Harvest */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03B: The Content Harvest</div>
        </div>
        
        <div className="space-y-4 max-w-2xl">
          <p className="font-body text-brand-cream/80 text-lg leading-relaxed">
            One Sunday of production feeds a full week of digital dominance. We transform high-energy moments into a permanent strategic asset library.
          </p>
          <p className="font-body text-brand-gold/60 text-sm italic border-l-2 border-brand-gold/20 pl-4">
            Sets reflect Nairobi’s mainstream sound — Bongo-led, genre-fluid, crowd-first.
          </p>
        </div>

        <ContentHarvestMetrics />
      </div>

      {/* 03C: The Publishing Rhythm */}
      <div className="space-y-6 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3 mb-2">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03C: The Weekly Publishing Rhythm</div>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-3 min-w-[900px] pb-4">
            {productionDays.map((p, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 p-6 rounded-[32px] flex flex-col gap-4 border transition-all duration-700",
                  p.highlight 
                    ? "bg-white/[0.04] border-brand-gold/30 shadow-[0_0_30px_rgba(244,197,66,0.05)]" 
                    : "bg-white/5 border-white/5 opacity-30"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-headline text-lg uppercase tracking-widest",
                    p.highlight ? "text-brand-gold" : "text-brand-cream/40"
                  )}>
                    {p.day}
                  </span>
                  <div className={cn(
                    "p-2 rounded-xl",
                    p.highlight ? "bg-brand-gold text-brand-green" : "bg-white/5 text-brand-gold/40"
                  )}>
                    {p.icon}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h5 className={cn(
                    "font-headline text-xl uppercase leading-none",
                    p.highlight ? "text-brand-gold" : "text-brand-cream"
                  )}>
                    {p.title}
                  </h5>
                  <p className="font-body text-[9px] text-brand-gold/60 leading-tight font-bold uppercase tracking-widest">
                    {p.body}
                  </p>
                </div>
                
                {p.highlight && (
                  <div className="mt-auto pt-3 border-t border-brand-gold/10">
                    <span className="font-body text-[8px] text-brand-gold font-bold uppercase tracking-[3px] animate-pulse">LIVE RELEASE</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center pt-6">
        <p className="font-body text-[10px] text-brand-gold/30 italic uppercase tracking-[4px] font-bold">
          High-fidelity assets are delivered via a private cloud portal every Sunday evening.
        </p>
      </div>
    </div>
  );
};
