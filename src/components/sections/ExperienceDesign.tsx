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
  { day: "SUN 12:00 PM", title: "THE DROP", body: "Influencer pack release.", icon: <Clock size={14} />, anchor: true },
  { day: "SUN 2-9PM", title: "LIVE OPS", body: "Capture at squad venue.", icon: <Camera size={14} /> },
  { day: "MON", title: "REVIEW", body: "Raw review. Editing begins.", icon: <Scissors size={14} /> },
  { day: "TUE", title: "HERO", body: "Recap Reel + photos.", icon: <Upload size={14} />, highlight: true },
  { day: "WED", title: "MUSIC", body: "DJ Highlight Reel.", icon: <Music size={14} />, highlight: true },
  { day: "THU", title: "STYLE", body: "Crowd lifestyle cut.", icon: <Video size={14} />, highlight: true },
  { day: "FRI", title: "VYBE", body: "Influencer Reel + YouTube.", icon: <Users size={14} />, highlight: true },
  { day: "SAT", title: "LOOP", body: "Next Sunday teaser.", icon: <Share2 size={14} />, highlight: true },
];

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12">
      {/* Cinematic Banner */}
      <div className="w-full bg-brand-gold p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
          <Clock size={200} className="text-[#1A1208]" />
        </div>
        
        <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-green/10 flex items-center justify-center text-[#1A1208] border-2 border-[#1A1208]/10">
          <Clock size={40} strokeWidth={2.5} />
        </div>

        <div className="space-y-2 text-center md:text-left relative z-10">
          <h3 className="font-headline text-[clamp(2rem,6vw,4.5rem)] text-[#1A1208] leading-none tracking-tighter uppercase">
            Every Sunday. Noon. The Drop.
          </h3>
          <p className="font-body text-[#1A1208] font-bold text-xs md:text-lg uppercase tracking-widest max-w-2xl leading-snug">
            Synchronized Savanna content wave hits Nairobi's feeds at 12:00 PM. By the time doors open, the conversation is already Savanna.
          </p>
        </div>
      </div>

      {/* 03B: The Content Harvest */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Sparkles className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03B: The Content Harvest</div>
        </div>
        
        <p className="section-subtitle">
          One Sunday of production feeds a week of digital dominance. We transform high-energy moments into a permanent strategic asset library.
        </p>

        <ContentHarvestMetrics />
      </div>

      {/* 03C: Publishing Rhythm */}
      <div className="space-y-6 pt-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">03C: The Weekly Publishing Rhythm</div>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-3 min-w-[1000px] pb-4">
            {productionDays.map((p, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 p-6 rounded-[32px] flex flex-col gap-4 border transition-all duration-500",
                  p.anchor
                    ? "bg-brand-gold border-brand-gold text-brand-green scale-105 shadow-xl"
                    : p.highlight 
                      ? "bg-white/[0.04] border-brand-gold/30" 
                      : "bg-white/5 border-white/5 opacity-40"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline text-lg uppercase tracking-widest">{p.day}</span>
                  <div className={cn("p-2 rounded-xl", p.anchor ? "bg-brand-green/10" : "bg-white/10")}>
                    {p.icon}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h5 className="font-headline text-xl uppercase leading-none">{p.title}</h5>
                  <p className="font-body text-[9px] font-bold uppercase tracking-widest opacity-80">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
