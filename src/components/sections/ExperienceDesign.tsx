"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Music, Users, Camera, Clock, CalendarDays, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentHarvestMetrics } from './ContentProduction';

/**
 * Live Countdown Clock
 * Calculates time remaining until the next Sunday at 12:00 PM EAT (UTC+3).
 * EAT (East Africa Time) is UTC+3.
 */
const CountdownClock = () => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const calculateTime = () => {
      const nowUTC = Date.now();
      const dateUTC = new Date(nowUTC);
      
      // Target: Sunday 12:00 PM EAT = 09:00 AM UTC
      let daysTillSun = (7 - dateUTC.getUTCDay()) % 7;
      
      const nextSunUTC = new Date(Date.UTC(
        dateUTC.getUTCFullYear(),
        dateUTC.getUTCMonth(),
        dateUTC.getUTCDate() + daysTillSun,
        9, 0, 0, 0
      ));

      // If Sunday 9 AM UTC has already passed today, target the next Sunday
      if (nextSunUTC.getTime() <= nowUTC) {
        nextSunUTC.setUTCDate(nextSunUTC.getUTCDate() + 7);
      }

      const diff = nextSunUTC.getTime() - nowUTC;
      
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m`);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="font-headline text-[var(--text-lg)] text-[#F8F5E6] opacity-70 uppercase tracking-widest mt-1">
      T-MINUS: {timeLeft}
    </div>
  );
};

const productionDays = [
  { day: "SUN 12 PM", title: "INFLUENCER PACK DROP", body: "Coordinated posting across all influencer channels.", icon: <Clock size={14} />, anchor: true },
  { day: "SUN 2-9PM", title: "LIVE ACTIVATION", body: "Content captured at squad venue.", icon: <Camera size={14} /> },
  { day: "MON", title: "RAW REVIEW", body: "Reel editing begins.", icon: <Sparkles size={14} /> },
  { day: "TUE", title: "HERO RECAP", body: "Reel 1 + photo batch.", icon: <Music size={14} /> },
  { day: "WED", title: "DJ HIGHLIGHT", body: "Reel 2 + photo batch.", icon: <Sparkles size={14} /> },
  { day: "THU", title: "CROWD/STYLE", body: "Reel 3 published.", icon: <Users size={14} /> },
  { day: "FRI", title: "INFLUENCER", body: "Reel 4 + YouTube Set.", icon: <Music size={14} /> },
  { day: "SAT", title: "TEASER", body: "UGC + Next Sunday teaser.", icon: <CalendarDays size={14} /> },
];

export const ExperienceDesignSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="space-y-8">
      {/* influencer Pack Drop Banner - Compacted */}
      <div className="w-full bg-brand-gold p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden group">
        <div className="shrink-0 w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-[#1A1208] border border-[#1A1208]/10">
          <Clock size={32} className="animate-pulse" />
        </div>
        <div className="space-y-1 text-center md:text-left relative z-10 flex-1">
          <h3 className="font-headline text-[var(--text-xl)] md:text-[var(--text-2xl)] text-[#1A1208] leading-none uppercase tracking-tighter">
            SUNDAY 12:00 PM: INFLUENCER PACK DROP
          </h3>
          <CountdownClock />
          <p className="font-body text-[#1A1208] font-bold text-[10px] uppercase tracking-widest max-w-xl mt-2 opacity-80">
            Synchronized Savanna content wave hits Nairobi's feeds at the stroke of noon.
          </p>
        </div>
      </div>

      {/* Content Harvest Metrics - Compacted */}
      <div className="space-y-4">
        <div className="section-label">03B — The Content Harvest</div>
        <ContentHarvestMetrics />
      </div>

      {/* Publishing Rhythm - Compacted */}
      <div className="space-y-4 pt-6 border-t border-white/5 relative">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <CalendarDays className="text-brand-gold" size={18} />
            <div className="section-label mb-0">03C — Publishing Rhythm</div>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-gold hover:bg-white/5 transition-colors"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-gold hover:bg-white/5 transition-colors"
              aria-label="Scroll Right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hide -mx-6 px-6"
          >
            <div className="flex gap-3 min-w-[1000px] pb-4 pt-1">
              {productionDays.map((p, i) => (
                <div key={i} className={cn(
                  "flex-1 p-5 rounded-2xl flex flex-col gap-3 border transition-all", 
                  p.anchor ? "bg-brand-gold text-brand-green scale-105 shadow-lg" : "bg-white/5 border-white/10 opacity-40 hover:opacity-100"
                )}>
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-[11px] uppercase tracking-widest">{p.day}</span>
                    <div className={cn("p-1.5 rounded-lg", p.anchor ? "bg-brand-green/10" : "bg-white/10")}>{p.icon}</div>
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="font-headline text-lg uppercase leading-none">{p.title}</h5>
                    <p className="font-body text-[9px] font-bold uppercase tracking-widest opacity-80">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-brand-gold/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-gold transition-transform duration-100 ease-out origin-left"
              style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
