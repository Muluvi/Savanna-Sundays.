'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const RollingCounter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  
  const target = parseFloat(value.replace(/,/g, ''));

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
    <span ref={containerRef} className="font-headline text-[clamp(3rem,12vw,6rem)] text-brand-gold leading-none tracking-tighter">
      {Math.floor(displayValue).toLocaleString()}
      <span className="text-[0.4em] ml-1 opacity-40">{suffix}</span>
    </span>
  );
};

const ContentSocialSection = () => {
  const deliverables = [
    { label: "YouTube sets", value: "4", body: "High-fidelity sets." },
    { label: "Algorithm reels", value: "16", body: "Social recaps." },
    { label: "HD photography", value: "28", body: "Lifestyle assets." }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <p className="font-serif italic text-lg md:text-2xl text-brand-gold/80 leading-snug">
          One Sunday of production feeds a full month of absolute digital dominance.
        </p>
      </div>

      {/* High-Density Horizontal Row */}
      <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-8">
        {deliverables.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2">
            <RollingCounter value={item.value} suffix="/mo" />
            <div className="space-y-1">
              <h5 className="font-headline text-lg md:text-2xl text-brand-gold uppercase tracking-widest leading-none">{item.label}</h5>
              <p className="font-body text-brand-cream/40 text-[9px] leading-relaxed uppercase tracking-[2px]">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* OLED Optimized Platform Marquee */}
      <div className="space-y-4 pt-4">
        <div className="section-label text-center mb-0 opacity-30">Multi-Platform Distribution</div>
        <div className="relative overflow-hidden py-6">
          <div className="flex w-fit animate-marquee space-x-24 px-6 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-32 shrink-0">
                {['social-yt', 'social-ig', 'social-tt', 'social-fb', 'social-x'].map((id) => {
                  const img = PlaceHolderImages.find(i => i.id === id);
                  return (
                    <div key={`${listIdx}-${id}`} className="relative h-12 w-32 transition-transform duration-500 hover:scale-110">
                      {img && <Image src={img.imageUrl} alt={img.description} fill className="object-contain" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4 text-center">
        <p className="font-serif italic text-base text-brand-gold/50 leading-relaxed max-w-xl mx-auto">
          "We convert energy into influence. Every Sunday feeds a narrative that compounds every week."
        </p>
      </div>
    </div>
  );
};

export { ContentSocialSection };