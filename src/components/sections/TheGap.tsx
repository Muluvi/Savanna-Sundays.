'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const cleanValue = value.replace(/,/g, '').replace(/K/g, '000');
  const target = parseFloat(cleanValue);
  const isKFormat = value.includes('K') && target >= 1000;

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
    <div ref={containerRef} className="font-headline text-7xl md:text-9xl text-brand-gold leading-none tracking-tighter">
      {isKFormat ? (displayValue / 1000).toFixed(0) + 'K' : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K', size: 'h-40 w-56' },
    { id: 'social-ig', label: 'Instagram', value: '6K', size: 'h-32 w-32' },
    { id: 'social-x', label: 'Twitter / X', value: '1115', size: 'h-24 w-24' },
  ];

  return (
    <div className="space-y-16 py-4 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <p className="font-serif italic text-3xl md:text-6xl text-brand-gold leading-[1.1] border-l-8 border-brand-gold pl-8 py-4">
            A massive community awaits.
          </p>
          <p className="font-body text-xl md:text-2xl text-brand-cream/80 leading-relaxed">
            Savanna Sundays is the catalyst that turns digital energy into a physical cultural habit. We bridge the gap between Nairobi’s digital reach and physical brand loyalty.
          </p>
        </div>

        <div className="relative p-12 bg-brand-gold/5 border border-brand-gold/20 rounded-[48px] shadow-2xl space-y-6 backdrop-blur-3xl">
          <span className="font-body text-brand-gold/60 text-xs tracking-[5px] uppercase font-bold">The strategic catalyst</span>
          <p className="font-body text-2xl md:text-4xl text-brand-cream leading-tight font-bold tracking-tight">
            Converting 600,000+ digital fans into a dedicated cultural community through the Sunday ritual.
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="text-center">
          <span className="section-label">Savanna Kenya right now</span>
          <h3 className="font-headline text-5xl md:text-8xl text-brand-cream uppercase tracking-tighter">The audience is established</h3>
        </div>

        {/* Full Color HD Social Marquee - Unboxed */}
        <div className="relative overflow-hidden py-12">
          <div className="flex w-fit animate-marquee space-x-32 px-12 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-40 shrink-0">
                {socialIcons.map((stat) => {
                  const img = PlaceHolderImages.find(i => i.id === stat.id);
                  return (
                    <div key={`${listIdx}-${stat.id}`} className="flex flex-col items-center gap-8 group">
                      <div className={cn("relative transition-transform group-hover:scale-110", stat.size)}>
                        {img && <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />}
                      </div>
                      <div className="text-center space-y-2">
                        <Counter value={stat.value} />
                        <div className="font-body text-sm uppercase font-bold tracking-[6px] text-brand-gold/60">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
