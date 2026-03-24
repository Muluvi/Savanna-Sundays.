'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    <div ref={containerRef} className="font-headline text-6xl md:text-8xl text-brand-gold leading-none tracking-tighter">
      {isKFormat ? (displayValue / 1000).toFixed(0) + 'K' : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K', size: 'h-32 w-48' },
    { id: 'social-ig', label: 'Instagram', value: '6K', size: 'h-24 w-24' },
    { id: 'social-x', label: 'Twitter / X', value: '1115', size: 'h-20 w-20' },
  ];

  return (
    <div className="space-y-16 py-4 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-[1.1] border-l-4 border-brand-gold pl-8 py-2">
            The audience is established; the ritual is ready.
          </p>
          <p className="font-body text-lg md:text-xl text-brand-cream/80 leading-relaxed">
            With over 600,000 followers on Facebook and a growing presence on Instagram and X, the community is poised for a high-fidelity catalyst. Savanna Sundays bridges the gap between digital scale and physical deep-tissue brand loyalty.
          </p>
        </div>

        <div className="relative p-10 bg-brand-gold/5 border border-brand-gold/10 rounded-[40px] shadow-2xl space-y-4 backdrop-blur-xl">
          <span className="font-body text-brand-gold/60 text-[10px] tracking-[5px] uppercase font-bold">The Strategic Anchor</span>
          <p className="font-body text-xl md:text-2xl text-brand-cream leading-tight font-bold tracking-tight">
            We convert Nairobi's digital reach into a cultural habit by owning the Sunday ritual.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <span className="section-label">Market presence snapshot</span>
          <h3 className="font-headline text-4xl md:text-7xl text-brand-cream uppercase tracking-tighter">A powerful foundation</h3>
        </div>

        {/* Full Color HD Social Marquee */}
        <div className="relative overflow-hidden py-8">
          <div className="flex w-fit animate-marquee space-x-24 px-8 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-32 shrink-0">
                {socialIcons.map((stat) => {
                  const img = PlaceHolderImages.find(i => i.id === stat.id);
                  return (
                    <div key={`${listIdx}-${stat.id}`} className="flex flex-col items-center gap-6 group">
                      <div className={`relative ${stat.size} transition-transform group-hover:scale-110`}>
                        {img && <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />}
                      </div>
                      <div className="text-center space-y-1">
                        <Counter value={stat.value} />
                        <div className="font-body text-xs uppercase font-bold tracking-[4px] text-brand-gold opacity-60">{stat.label}</div>
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
