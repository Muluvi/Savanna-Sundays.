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
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K' },
    { id: 'social-ig', label: 'Instagram', value: '6,121' },
    { id: 'social-x', label: 'Twitter/X', value: '1,115' },
  ];

  return (
    <div className="space-y-16 py-8 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        <div className="space-y-10">
          <p className="font-body text-lg md:text-3xl text-brand-cream leading-relaxed border-l-4 border-brand-gold pl-8 py-2">
            Every Sunday, Nairobi chooses where to be seen, what to drink, and what to share. Savanna Premium Cider has the product people love — now it's time to own the cultural stage.
          </p>
          
          <p className="font-body text-base md:text-xl text-brand-cream/80 leading-relaxed opacity-90 pl-8 max-w-3xl uppercase tracking-widest font-bold">
            One brand • Multiple venues • Every Sunday
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-brand-gold/5 rounded-[40px] blur-3xl group-hover:bg-brand-gold/15 transition-all duration-1000" />
          <div className="relative p-10 bg-brand-dark-alt border border-brand-gold/10 rounded-[40px] shadow-2xl space-y-8">
            <span className="font-body text-brand-gold/60 text-[10px] tracking-[4px] uppercase font-bold">The Strategic Reality</span>
            <p className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-[1.15]">
              "Nairobi’s biggest social stage is waiting for its signature cider ritual."
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof Strip - Animated & HD */}
      <div className="mt-12 bg-brand-dark-alt rounded-[40px] border border-white/5 shadow-2xl overflow-hidden relative">
        <div className="py-12 border-b border-white/5 text-center">
          <p className="font-body text-brand-gold/60 text-xs tracking-[5px] uppercase font-bold mb-2">Market Presence Snapshot</p>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-cream uppercase tracking-tight">Existing Brand Power</h3>
        </div>

        <div className="relative overflow-hidden group py-16">
          <div className="flex w-fit animate-marquee space-x-20 px-10">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-20 shrink-0">
                {socialIcons.map((stat) => {
                  const img = PlaceHolderImages.find(i => i.id === stat.id);
                  return (
                    <div key={`${listIdx}-${stat.id}`} className="flex flex-col items-center gap-6 min-w-[200px]">
                      {img && (
                        <div className="relative h-16 w-16">
                          <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />
                        </div>
                      )}
                      <div className="text-center space-y-1">
                        <Counter value={stat.value} />
                        <div className="font-body text-[10px] uppercase font-bold tracking-[3px] text-brand-text-muted">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-12 bg-brand-gold text-brand-green text-center">
          <p className="font-body text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed uppercase font-bold tracking-tight">
            Savanna has a massive foundation of 603K+ supporters. Savanna Sundays is the catalyst that turns this digital presence into a living, breathing Nairobi cultural movement.
          </p>
        </div>
      </div>
    </div>
  );
};