
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export const TheGap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) setIsVisible(true); 
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="space-y-12 py-8 relative overflow-hidden">
      <div className="space-y-4">
        <div className="relative inline-block">
          <h2 className="font-headline text-5xl md:text-8xl text-brand-cream uppercase leading-none tracking-tighter blur-in">
            THE SUNDAY OPPORTUNITY
          </h2>
          <div className={cn("absolute -bottom-2 left-0 h-[1.5px] bg-brand-gold transition-all duration-1000 ease-in-out origin-left", isVisible ? "w-full" : "w-0")} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        <div className="space-y-8">
          <p className="font-body text-lg md:text-2xl text-brand-cream leading-relaxed border-l-4 border-brand-gold pl-8 py-2">
            Every Sunday, Nairobi comes alive. Rooftops fill up. Playlists go on. Stories get posted. It’s the one day when the city’s young professionals choose where to be seen, what to drink, and what to share. 
          </p>
          
          <p className="font-body text-lg md:text-xl text-brand-cream/80 leading-relaxed opacity-90 pl-8">
            Right now, no cider brand is part of that conversation. Savanna Premium Cider has national distribution and a product people love — but zero cultural presence on the day that matters most. Savanna Sundays changes that. One brand, multiple venues, every Sunday.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-brand-gold/5 rounded-[40px] blur-2xl group-hover:bg-brand-gold/10 transition-all duration-700" />
          <div className="relative p-10 bg-white/5 border border-white/10 rounded-[40px] shadow-2xl space-y-6">
            <span className="font-headline text-brand-gold text-xs tracking-[4px] uppercase font-bold">The Strategic Reality</span>
            <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-[1.2]">
              "Sunday is Nairobi’s biggest social stage. No cider brand is on it. We’re about to change that."
            </p>
            <div className="w-12 h-[2px] bg-brand-gold/30" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blur-in {
          from { filter: blur(10px); opacity: 0; transform: translateY(10px); }
          to { filter: blur(0); opacity: 1; transform: translateY(0); }
        }
        .blur-in { animation: blur-in 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};
