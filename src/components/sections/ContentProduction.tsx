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
    <span ref={containerRef} className="font-headline text-[clamp(2.5rem,10vw,5rem)] text-brand-gold leading-none tracking-tighter">
      {Math.floor(displayValue).toLocaleString()}
      <span className="text-[0.4em] ml-1 opacity-40">{suffix}</span>
    </span>
  );
};

const ContentSocialSection = () => {
  const deliverables = [
    { label: "YouTube sets", value: "4", body: "Hi-Fi DJ Sets" },
    { label: "Recap reels", value: "16", body: "Algorithm Loops" },
    { label: "HD photography", value: "28", body: "Lifestyle Assets" }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center max-w-xl mx-auto">
        <p className="font-serif italic text-sm md:text-lg text-brand-gold/60 leading-relaxed">
          One Sunday of production feeds a full month of absolute digital dominance.
        </p>
      </div>

      {/* High-Density Horizontal Row - Metrics Only */}
      <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 bg-white/[0.005]">
        {deliverables.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-0.5">
            <RollingCounter value={item.value} suffix="/mo" />
            <div className="space-y-0.5">
              <h5 className="font-headline text-sm md:text-lg text-brand-gold uppercase tracking-widest leading-none">{item.label}</h5>
              <p className="font-body text-brand-cream/30 text-[7px] leading-tight font-bold uppercase tracking-[2px]">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* OLED Platform Marquee */}
      <div className="space-y-2 pt-2">
        <div className="section-label text-center mb-0 opacity-10">Multi-Platform Distribution</div>
        <div className="relative overflow-hidden py-3">
          <div className="flex w-fit animate-marquee space-x-12 px-4 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-16 shrink-0">
                {['social-yt', 'social-ig', 'social-tt', 'social-fb', 'social-x'].map((id) => {
                  const img = PlaceHolderImages.find(i => i.id === id);
                  return (
                    <div key={`${listIdx}-${id}`} className="relative h-8 w-20 transition-transform duration-500 hover:scale-110">
                      {img && <Image src={img.imageUrl} alt={img.description} fill className="object-contain" />}
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

export { ContentSocialSection };