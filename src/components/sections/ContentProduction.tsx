"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Youtube, 
  Instagram, 
  Video, 
  Scissors, 
  Wand2, 
  Upload, 
  Share2, 
  Play,
  CalendarDays,
  Smartphone,
  CheckCircle2,
  RefreshCcw,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const deliverables = [
  { tag: "4/mo", heading: "YouTube Sets", body: "Multi-cam, board-feed audio, mastered for broadcast.", variant: "green" },
  { tag: "16/mo", heading: "Algorithm Reels", body: "Recaps, DJ clips, and crowd energy cut for growth.", variant: "dark" },
  { tag: "28/mo", heading: "HD Photography", body: "Edited, color-graded photos ready for distribution.", variant: "green" }
];

const PlatformDistribution = () => {
  const platforms = [
    { id: 'social-yt', name: 'YouTube', reach: '5K–20K views' },
    { id: 'social-ig', name: 'Instagram', reach: '10K–50K imp' },
    { id: 'social-tt', name: 'TikTok', reach: 'Discovery hub' },
    { id: 'social-fb', name: 'Facebook', reach: '603K Community' },
    { id: 'social-x', name: 'Twitter/X', reach: 'Conversational' },
  ];

  return (
    <div className="space-y-8">
      <div className="section-label text-center">Multi-Platform Distribution</div>
      <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide -mx-6 px-6 snap-x">
        {platforms.map((p) => {
          const img = PlaceHolderImages.find(i => i.id === p.id);
          return (
            <div key={p.id} className="min-w-[180px] md:flex-1 p-8 bg-white/5 border border-white/5 rounded-[32px] flex flex-col items-center text-center gap-6 group hover:bg-white/10 transition-all snap-center relative overflow-hidden h-48 justify-center">
              <div className="relative w-full h-12">
                {img && (
                  <Image 
                    src={img.imageUrl} 
                    alt={p.name} 
                    fill 
                    className="object-contain" 
                  />
                )}
              </div>
              <div className="space-y-1">
                <h5 className="font-headline text-lg text-brand-gold uppercase tracking-wider leading-none">{p.name}</h5>
                <p className="font-body text-[9px] text-brand-text-muted font-bold uppercase tracking-widest">{p.reach}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ContentSocialSection = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        [0, 1, 2, 3, 4, 5].forEach((i) => setTimeout(() => setActiveDay(i), i * 300));
      }
    }, { threshold: 0.2 });
    if (rhythmRef.current) observer.observe(rhythmRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <p className="font-serif italic text-2xl md:text-4xl text-brand-gold leading-tight">
          "One Sunday. A week of visibility."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deliverables.map((card, i) => (
          <div key={i} className={cn(
            "p-10 rounded-[40px] space-y-4 shadow-2xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 border-none",
            card.variant === 'green' ? 'bg-brand-green' : 'bg-[#221A0A]'
          )}>
            <div className="space-y-4">
              <span className="font-body font-bold text-[9px] uppercase tracking-[4px] text-brand-gold/60">{card.tag}</span>
              <h4 className="font-headline text-3xl text-brand-gold uppercase leading-none tracking-tight">{card.heading}</h4>
              <p className="font-body text-[#F8F5E6]/70 text-sm leading-relaxed font-semibold uppercase tracking-wider">{card.body}</p>
            </div>
          </div>
        ))}
      </div>

      <PlatformDistribution />

      <div className="space-y-8 py-12" ref={rhythmRef}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <CalendarDays className="text-brand-gold" size={24} />
          <div className="section-label mb-0">Publishing Rhythm</div>
        </div>

        <div className="relative overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 min-w-[1000px] pb-6 snap-x snap-mandatory">
            {[
              { day: "SUN", title: "SHOOT", icon: <Video size={20} /> },
              { day: "TUE", title: "RECAP", icon: <Smartphone size={20} /> },
              { day: "WED", title: "DJ CLIP", icon: <Play size={20} /> },
              { day: "THU", title: "LIFESTYLE", icon: <Scissors size={20} /> },
              { day: "FRI", title: "YOUTUBE", icon: <Youtube size={20} /> },
              { day: "SAT", title: "UGC", icon: <RefreshCcw size={20} /> },
            ].map((item, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex-1 p-8 rounded-[32px] border transition-all duration-700 snap-center flex flex-col justify-between h-48",
                  activeDay !== null && activeDay >= i 
                    ? "bg-brand-gold/10 border-brand-gold" 
                    : "bg-white/5 border-white/5 opacity-40"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline text-xl text-brand-gold tracking-widest uppercase">{item.day}</span>
                  <div className={cn("p-3 rounded-xl", activeDay !== null && activeDay >= i ? "bg-brand-gold text-brand-green" : "bg-white/5 text-brand-gold/40")}>
                    {item.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <h5 className="font-headline text-2xl text-white uppercase leading-none tracking-tight">{item.title}</h5>
                  <CheckCircle2 className={cn("w-5 h-5 transition-all duration-500", activeDay !== null && activeDay >= i ? "text-brand-gold" : "opacity-0")} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
