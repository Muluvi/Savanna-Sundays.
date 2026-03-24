
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

/**
 * High-fidelity rolling counter with smooth ease-out.
 * Emphasizes the sheer quantity of strategic content harvested weekly.
 */
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
    const duration = 2500; // Longer duration for more "rolling" feel

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Sophisticated Ease Out Quart for high-end feel
      const easeOutQuart = (t: number) => 1 - (--t) * t * t * t;
      setDisplayValue(easeOutQuart(progress) * target);
      
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <span ref={containerRef} className="font-headline text-[clamp(4rem,15vw,7rem)] text-brand-gold leading-none tracking-tighter">
      {Math.floor(displayValue).toLocaleString()}
      <span className="text-[0.4em] ml-1 opacity-40">{suffix}</span>
    </span>
  );
};

const ContentSocialSection = () => {
  const ytLogo = PlaceHolderImages.find(p => p.id === 'social-yt');
  const igLogo = PlaceHolderImages.find(p => p.id === 'social-ig');
  const ttLogo = PlaceHolderImages.find(p => p.id === 'social-tt');
  const xLogo = PlaceHolderImages.find(p => p.id === 'social-x');

  const deliverables = [
    { 
      label: "YouTube Sets", 
      value: "4", 
      body: "Recorded high-fidelity DJ sets.", 
      logos: [ytLogo]
    },
    { 
      label: "Algorithm Reels", 
      value: "16", 
      body: "Optimized social recaps.", 
      logos: [igLogo, ttLogo]
    },
    { 
      label: "HD Photography", 
      value: "28", 
      body: "Premium lifestyle assets.", 
      logos: [igLogo, xLogo]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-xl md:text-3xl text-brand-gold leading-tight">
          One Sunday of production. A full month of absolute digital dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {deliverables.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-4 group">
            {/* Full Color HD Logos - Enlarged */}
            <div className="flex items-center justify-center gap-6 h-16">
              {item.logos.map((logo, idx) => (
                logo && (
                  <div key={idx} className="relative h-12 w-12 md:h-16 md:w-16 transition-transform duration-500 group-hover:scale-110">
                    <Image src={logo.imageUrl} alt={logo.description} fill className="object-contain" />
                  </div>
                )
              ))}
            </div>

            <div className="space-y-1">
              <RollingCounter value={item.value} suffix="/mo" />
              <div className="space-y-1">
                <h5 className="font-headline text-2xl md:text-3xl text-brand-gold uppercase tracking-widest">{item.label}</h5>
                <p className="font-body text-brand-cream/60 text-xs leading-relaxed font-bold uppercase tracking-[2px] max-w-[200px] mx-auto">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Unboxed HD Platform Marquee */}
      <div className="space-y-6 pt-12 border-t border-white/5">
        <div className="section-label text-center mb-0">Multi-Platform Distribution</div>
        <div className="relative overflow-hidden py-4">
          <div className="flex w-fit animate-marquee space-x-20 px-6 items-center">
            {[...Array(3)].map((_, listIdx) => (
              <div key={listIdx} className="flex items-center space-x-24 shrink-0">
                {['social-yt', 'social-ig', 'social-tt', 'social-fb', 'social-x'].map((id) => {
                  const img = PlaceHolderImages.find(i => i.id === id);
                  return (
                    <div key={`${listIdx}-${id}`} className="relative h-12 w-32 hover:scale-110 transition-all duration-500">
                      {img && <Image src={img.imageUrl} alt={img.description} fill className="object-contain" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-8 text-center">
        <p className="font-serif italic text-lg text-brand-gold/80 leading-relaxed max-w-xl mx-auto border-l-2 border-brand-gold/20 pl-6">
          "We convert energy into influence. Every Sunday feeds a high-fidelity narrative that compounds every single week."
        </p>
      </div>
    </div>
  );
};

export { ContentSocialSection };
