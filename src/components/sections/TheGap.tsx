"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const cleanValue = value.replace(/,/g, '').replace(/K/g, '000');
  const target = parseFloat(cleanValue);
  const isKFormat = value.includes('K');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.5 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 2000, 1);
      setDisplayValue(progress * target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <div ref={containerRef} className="font-headline text-5xl md:text-8xl text-brand-gold leading-none tracking-tighter">
      {isKFormat && displayValue >= 1000 ? (displayValue / 1000).toFixed(0) + 'K' : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K' },
    { id: 'social-ig', label: 'Instagram', value: '6K' },
    { id: 'social-x', label: 'Twitter/X', value: '1.1K' },
  ];

  return (
    <div className="space-y-20 py-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <p className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-[1.1] border-l-4 border-brand-gold pl-8 py-2">
            "The community is waiting for a cultural catalyst."
          </p>
          <p className="font-body text-lg md:text-2xl text-brand-cream/80 leading-relaxed font-bold uppercase tracking-[2px]">
            The audience is massive—now it's time to bridge the ritual gap.
          </p>
        </div>

        <div className="relative p-12 bg-white/5 border border-white/10 rounded-[48px] shadow-2xl space-y-8 backdrop-blur-xl">
          <span className="font-body text-brand-gold/60 text-[10px] tracking-[5px] uppercase font-bold">The Strategic Anchor</span>
          <p className="font-body text-xl md:text-2xl text-brand-cream leading-relaxed uppercase font-bold tracking-tight">
            Savanna Sundays converts passive followers into cultural advocates by owning the primary social stage in Nairobi.
          </p>
        </div>
      </div>

      <div className="bg-brand-dark-alt rounded-[48px] border border-white/5 overflow-hidden shadow-2xl">
        <div className="py-12 border-b border-white/5 text-center bg-white/5">
          <p className="section-label mb-2">Market Presence Snapshot</p>
          <h3 className="font-headline text-4xl md:text-6xl text-brand-cream uppercase tracking-tighter">THE FOUNDATION IS SET</h3>
        </div>

        <div className="flex flex-wrap justify-center items-center py-20 px-8 gap-16 md:gap-32">
          {socialIcons.map((stat) => {
            const img = PlaceHolderImages.find(i => i.id === stat.id);
            return (
              <div key={stat.id} className="flex flex-col items-center gap-6 group">
                <div className="relative h-20 w-20 transition-transform duration-500 group-hover:scale-110">
                  {img && <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />}
                </div>
                <div className="text-center space-y-2">
                  <Counter value={stat.value} />
                  <div className="font-body text-[10px] uppercase font-bold tracking-[4px] text-brand-text-muted">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
