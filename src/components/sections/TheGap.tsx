'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

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
    <div ref={containerRef} className="font-headline text-4xl md:text-7xl text-brand-gold leading-none tracking-tighter">
      {isKFormat ? (displayValue / 1000).toFixed(0) + 'K' : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K', size: 'h-16 w-48' },
    { id: 'social-ig', label: 'Instagram', value: '6K', size: 'h-14 w-14' },
    { id: 'social-x', label: 'X (Twitter)', value: '1115', size: 'h-10 w-10' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="space-y-4 flex flex-col justify-center">
          <p className="font-serif italic text-xl md:text-3xl text-brand-gold leading-tight border-l-4 border-brand-gold/40 pl-8 py-2">
            Converting music lovers and lovers of experiential events from digital platforms and loyal savanna cider fans into a physical community through consistent, high-fidelity Sunday experiences.
          </p>
        </div>

        <div className="glass-tile p-8 rounded-[32px] relative overflow-hidden border-brand-gold/20 bg-white/[0.04] shadow-2xl group">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none scale-150 translate-x-4 -translate-y-4 group-hover:scale-[1.7] transition-transform duration-1000">
            {savannaLogo && (
              <Image src={savannaLogo.imageUrl} alt="" width={160} height={160} className="object-contain" />
            )}
          </div>
          <span className="section-label mb-2 text-brand-gold opacity-100">The Opportunity</span>
          <p className="font-body text-lg text-brand-cream leading-relaxed relative z-10">
            Savanna Sundays is the bridge. We turn massive digital reach into deep brand loyalty through a physical Sunday ritual that Nairobi can finally own.
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-6">
        <div className="section-label text-center mb-0 text-brand-gold/80">Market Presence</div>
        
        <div className="relative overflow-hidden py-10 glass-tile rounded-[32px] border-brand-gold/10 bg-white/[0.02]">
          {/* Edge Masking for 4K Marquee */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-green to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-green to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-fit animate-marquee space-x-24 px-8 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-24 shrink-0">
                {socialIcons.map((stat) => {
                  const img = PlaceHolderImages.find(i => i.id === stat.id);
                  return (
                    <div key={`${listIdx}-${stat.id}`} className="flex flex-col items-center gap-4 group">
                      <div className={cn("relative transition-transform duration-700 group-hover:scale-110 grayscale brightness-150 group-hover:grayscale-0", stat.size)}>
                        {img && <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />}
                      </div>
                      <div className="text-center">
                        <RollingCounter value={stat.value} />
                        <div className="font-body text-[10px] uppercase tracking-[4px] text-brand-gold font-bold">{stat.label}</div>
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