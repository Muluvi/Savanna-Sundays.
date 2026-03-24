
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { 
  Youtube, 
  Video, 
  Camera,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
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
    <span ref={containerRef} className="font-headline text-5xl md:text-8xl text-brand-gold leading-none tracking-tighter">
      {Math.floor(displayValue).toLocaleString()}
      {suffix}
    </span>
  );
};

const deliverables = [
  { label: "YouTube Sets", value: "4", body: "Multi-cam recorded DJ sets.", icon: <Youtube className="text-brand-gold" /> },
  { label: "Algorithm Reels", value: "16", body: "Optimised social recaps.", icon: <Video className="text-brand-gold" /> },
  { label: "HD Photography", value: "28", body: "High-end lifestyle assets.", icon: <Camera className="text-brand-gold" /> }
];

const PlatformDistribution = () => {
  const platforms = [
    { id: 'social-yt', name: 'YouTube' },
    { id: 'social-ig', name: 'Instagram' },
    { id: 'social-tt', name: 'TikTok' },
    { id: 'social-fb', name: 'Facebook' },
    { id: 'social-x', name: 'Twitter/X' },
  ];

  return (
    <div className="space-y-6 pt-4">
      <div className="section-label text-center">Multi-Platform Distribution</div>
      <div className="relative overflow-hidden py-4">
        <div className="flex w-fit animate-marquee space-x-20 px-6 items-center">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-24 shrink-0">
              {platforms.map((p) => {
                const img = PlaceHolderImages.find(i => i.id === p.id);
                return (
                  <div key={`${listIdx}-${p.id}`} className="relative h-12 w-48 hover:scale-110 transition-transform duration-500">
                    {img && (
                      <Image 
                        src={img.imageUrl} 
                        alt={p.name} 
                        fill 
                        className="object-contain" 
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ContentSocialSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-2xl md:text-4xl text-brand-gold leading-tight">
          "One Sunday. A month of visibility."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deliverables.map((item, i) => (
          <div key={i} className="space-y-4 p-8 bg-brand-gold/5 border border-brand-gold/10 rounded-[40px] flex flex-col items-center text-center group hover:bg-brand-gold/10 transition-all duration-500">
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-body font-bold text-[10px] uppercase tracking-[4px] text-brand-gold/60">{item.label}</span>
            </div>
            <div className="space-y-2">
              <Counter value={item.value} suffix="/mo" />
              <p className="font-body text-brand-cream/70 text-sm leading-relaxed font-bold uppercase tracking-widest">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <PlatformDistribution />

      <div className="p-8 bg-brand-gold/5 border border-brand-gold/10 rounded-[40px] text-center">
        <p className="font-serif italic text-lg md:text-xl text-brand-gold/80 leading-relaxed max-w-2xl mx-auto">
          "We convert energy into influence. Every Sunday provides the fuel for absolute digital dominance."
        </p>
      </div>
    </div>
  );
};
