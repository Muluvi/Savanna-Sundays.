'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

/**
 * Sophisticated rolling counter for market data with high-fidelity ease-out.
 */
const RollingCounter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
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
    let startTime: number;
    const duration = 2500;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = (t: number) => 1 - (--t) * t * t * t;
      setDisplayValue(easeOutQuart(progress) * target);
      
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
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K', size: 'h-24 w-64' },
    { id: 'social-ig', label: 'Instagram', value: '6K', size: 'h-20 w-20' },
    { id: 'social-x', label: 'X (Twitter)', value: '1115', size: 'h-16 w-16' },
  ];

  return (
    <div className="space-y-12 py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-[1.1] border-l-4 border-brand-gold pl-6 py-2">
            The audience is established. <br/>The culture is waiting.
          </p>
          <p className="font-body text-base md:text-xl text-brand-cream/80 leading-relaxed">
            Savanna Sundays is the bridge. We turn massive digital reach into deep brand loyalty through a physical Sunday ritual that Nairobi can finally own.
          </p>
        </div>

        <div className="relative p-10 bg-white/5 border border-white/10 rounded-[40px] space-y-4 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            {savannaLogo && (
              <Image 
                src={savannaLogo.imageUrl} 
                alt="" 
                width={200} 
                height={200} 
                className="object-contain" 
              />
            )}
          </div>
          <span className="font-body text-brand-gold/60 text-[10px] tracking-[4px] uppercase">The Opportunity</span>
          <p className="font-body text-xl md:text-2xl text-brand-cream leading-tight tracking-tight relative z-10">
            Converting music lovers and lovers of experiential events from digital platforms and loyal savanna cider fans into a physical community through consistent, high-fidelity Sunday experiences.
          </p>
        </div>
      </div>

      <div className="space-y-8 pt-8 border-t border-white/5">
        <div className="section-label text-center mb-0">Savanna Kenya Market Presence</div>
        
        <div className="relative overflow-hidden py-12 bg-white/[0.02] rounded-[40px]">
          <div className="flex w-fit animate-marquee space-x-24 px-6 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-32 shrink-0">
                {socialIcons.map((stat) => {
                  const img = PlaceHolderImages.find(i => i.id === stat.id);
                  return (
                    <div key={`${listIdx}-${stat.id}`} className="flex flex-col items-center gap-6 group">
                      <div className={cn("relative transition-transform duration-500 hover:scale-110", stat.size)}>
                        {img && <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />}
                      </div>
                      <div className="text-center">
                        <RollingCounter value={stat.value} />
                        <div className="font-body text-xs uppercase tracking-[4px] text-brand-gold/60 mt-2">{stat.label}</div>
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
