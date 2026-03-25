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
  Sparkles,
  Clock
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
    <div className="space-y-16">
      {/* HIGH-INTENSITY STRATEGIC BANNER */}
      <div className="w-full bg-brand-gold py-10 px-8 md:px-16 rounded-[40px] flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-[0_20px_60px_rgba(244,197,66,0.25)] relative overflow-hidden group animate-fade-in-up">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
          <Clock size={180} className="text-[#1A1208]" />
        </div>
        
        <div className="shrink-0 flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#1A1208]/5 text-[#1A1208] border-2 border-[#1A1208]/10">
          <Clock size={48} strokeWidth={2.5} className="md:scale-125" />
        </div>

        <div className="space-y-3 text-center md:text-left relative z-10">
          <h3 className="font-headline text-[clamp(2.5rem,8vw,5.5rem)] text-[#1A1208] leading-[0.85] tracking-tighter">
            EVERY SUNDAY. NOON. THE DROP.
          </h3>
          <p className="font-body text-[#1A1208] font-bold text-sm md:text-xl uppercase tracking-widest max-w-3xl opacity-90 leading-tight">
            All influencers post at 12:00 PM every Sunday — a coordinated Savanna content wave hits Nairobi's feeds before the first guest walks in. By the time doors open, the conversation is already Savanna.
          </p>
        </div>
      </div>

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
            Sets reflect Nairobi's mainstream sound — Bongo-led, genre-fluid, crowd-first.
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
