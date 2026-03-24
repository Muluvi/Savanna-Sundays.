"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extract number from strings like "603K" or "1,115"
  const cleanValue = value.replace(/,/g, '').replace(/K/g, '000');
  const target = parseFloat(cleanValue);
  const isKFormat = value.includes('K');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const current = easeOutQuad(progress) * target;
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  const formatDisplay = (val: number) => {
    if (isKFormat && val >= 1000) {
      return (val / 1000).toFixed(0) + 'K';
    }
    return Math.floor(val).toLocaleString();
  };

  return (
    <div ref={containerRef} className="font-headline text-4xl md:text-6xl text-brand-gold leading-none">
      {formatDisplay(displayValue)}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const fbLogo = PlaceHolderImages.find(img => img.id === 'social-fb');
  const igLogo = PlaceHolderImages.find(img => img.id === 'social-ig');
  const xLogo = PlaceHolderImages.find(img => img.id === 'social-x');

  return (
    <div className="space-y-16 py-8 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        <div className="space-y-10">
          <p className="font-body text-lg md:text-3xl text-brand-cream leading-relaxed border-l-4 border-brand-gold pl-8 py-2">
            Every Sunday, Nairobi comes alive. Rooftops fill up. Playlists go on. Stories get posted. It’s the one day when the city’s young professionals choose where to be seen, what to drink, and what to share. 
          </p>
          
          <p className="font-body text-base md:text-xl text-brand-cream/80 leading-relaxed opacity-90 pl-8 max-w-3xl">
            Right now, no cider brand is part of that conversation. Savanna Premium Cider has national distribution and a product people love — but zero cultural presence on the day that matters most. Savanna Sundays changes that. One brand, multiple venues, every Sunday.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-brand-gold/5 rounded-[40px] blur-3xl group-hover:bg-brand-gold/15 transition-all duration-1000" />
          <div className="relative p-10 bg-brand-dark-alt border border-brand-gold/10 rounded-[40px] shadow-2xl space-y-8">
            <span className="font-body text-brand-gold/60 text-[10px] tracking-[4px] uppercase font-bold">The Strategic Reality</span>
            <p className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-[1.15]">
              "Sunday is Nairobi’s biggest social stage. No cider brand is on it. We’re about to change that."
            </p>
            <div className="w-16 h-[2px] bg-brand-gold/20" />
          </div>
        </div>
      </div>

      {/* Social Proof Strip - Flashy Counters Added */}
      <div className="mt-12 bg-brand-dark-alt rounded-[40px] p-8 md:p-16 border border-brand-gold/10 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
           <h4 className="font-headline text-[12rem] text-brand-gold select-none">DATA</h4>
        </div>
        
        <div className="relative z-10 space-y-12">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-body text-brand-gold/60 text-xs tracking-[5px] uppercase font-bold mb-2">Market Presence Snapshot</span>
            <h3 className="font-headline text-3xl md:text-5xl text-brand-cream uppercase tracking-tight">Savanna Kenya Right Now</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Facebook Followers", value: "603K", img: fbLogo },
              { label: "Instagram Followers", value: "6,121", img: igLogo },
              { label: "Twitter/X Followers", value: "1,115", img: xLogo },
            ].map((stat, i) => (
              <Card key={i} className="bg-brand-dark/50 backdrop-blur-sm border border-brand-gold/10 p-8 flex flex-col items-center text-center gap-6 shadow-2xl hover:border-brand-gold/40 transition-all duration-500 group">
                {stat.img && (
                  <div className="relative h-12 w-12 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                    <Image src={stat.img.imageUrl} alt={stat.label} fill className="object-contain filter brightness-200" />
                  </div>
                )}
                <div className="space-y-3">
                  <Counter value={stat.value} />
                  <div className="font-body text-[11px] uppercase font-bold tracking-[3px] text-brand-text-muted opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="pt-8 border-t border-brand-gold/10">
            <p className="font-body text-lg md:text-2xl text-brand-cream/80 max-w-4xl mx-auto text-center leading-relaxed">
              603K on Facebook. 6K on Instagram. The audience is there — the culture connection isn’t. <span className="text-brand-gold font-bold">Savanna Sundays bridges the gap.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
