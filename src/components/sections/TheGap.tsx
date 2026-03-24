
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
    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) setIsVisible(true); 
    }, { threshold: 0.5 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 2000, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      setDisplayValue(easeOutQuad(progress) * target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <div ref={containerRef} className="font-headline text-5xl md:text-8xl text-brand-gold leading-none tracking-tighter">
      {isKFormat ? (displayValue / 1000).toFixed(0) + 'K' : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K', size: 'h-24 w-64' },
    { id: 'social-ig', label: 'Instagram', value: '6K', size: 'h-20 w-20' },
    { id: 'social-x', label: 'X (Twitter)', value: '1115', size: 'h-16 w-16' },
  ];

  return (
    <div className="space-y-6 py-2 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="font-serif italic text-2xl md:text-4xl text-brand-gold leading-[1.1] border-l-4 border-brand-gold pl-4 py-1">
            The audience is established. <br/>The culture is waiting.
          </p>
          <p className="font-body text-sm md:text-lg text-brand-cream/80 leading-relaxed">
            Savanna Sundays is the bridge. We turn massive digital reach into deep brand loyalty through a physical Sunday ritual that Nairobi can finally own.
          </p>
        </div>

        <div className="relative p-8 bg-white/5 border border-white/10 rounded-[32px] space-y-3">
          <span className="font-body text-brand-gold/60 text-[10px] tracking-[4px] uppercase font-bold">The Opportunity</span>
          <p className="font-body text-lg md:text-2xl text-brand-cream leading-tight font-bold tracking-tight">
            Converting 600,000+ digital fans into a physical community through consistent, high-fidelity Sunday experiences.
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="section-label text-center mb-0">Savanna Kenya Market Presence</div>
        
        <div className="relative overflow-hidden py-4 border-y border-white/5 bg-white/[0.02]">
          <div className="flex w-fit animate-marquee space-x-16 px-6 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-24 shrink-0">
                {socialIcons.map((stat) => {
                  const img = PlaceHolderImages.find(i => i.id === stat.id);
                  return (
                    <div key={`${listIdx}-${stat.id}`} className="flex flex-col items-center gap-4 group">
                      <div className={cn("relative transition-transform duration-500", stat.size)}>
                        {img && <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />}
                      </div>
                      <div className="text-center">
                        <Counter value={stat.value} />
                        <div className="font-body text-[9px] uppercase font-bold tracking-[4px] text-brand-gold/60">{stat.label}</div>
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
