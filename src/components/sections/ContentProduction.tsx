
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { 
  Youtube, 
  Video, 
  Camera,
  Instagram,
  Share2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const TikTokIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const XIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="currentColor" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

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
    <span ref={containerRef} className="font-headline text-5xl md:text-7xl text-brand-gold leading-none tracking-tighter">
      {Math.floor(displayValue).toLocaleString()}
      {suffix}
    </span>
  );
};

const deliverables = [
  { 
    label: "YouTube Sets", 
    value: "4", 
    body: "Multi-cam recorded sets.", 
    icon: <Youtube className="text-brand-gold" size={24} />,
    platforms: [<Youtube key="yt" size={14} className="text-brand-gold/40" />]
  },
  { 
    label: "Algorithm Reels", 
    value: "16", 
    body: "Optimised recaps.", 
    icon: <Video className="text-brand-gold" size={24} />,
    platforms: [
      <Instagram key="ig" size={14} className="text-brand-gold/40" />,
      <TikTokIcon key="tt" size={14} className="text-brand-gold/40" />
    ]
  },
  { 
    label: "HD Photography", 
    value: "28", 
    body: "Lifestyle assets.", 
    icon: <Camera className="text-brand-gold" size={24} />,
    platforms: [
      <Instagram key="ig2" size={14} className="text-brand-gold/40" />,
      <XIcon key="x" size={14} className="text-brand-gold/40" />
    ]
  }
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
    <div className="space-y-4 pt-4">
      <div className="section-label text-center mb-0">Multi-Platform Distribution</div>
      <div className="relative overflow-hidden py-2">
        <div className="flex w-fit animate-marquee space-x-12 px-6 items-center">
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-16 shrink-0">
              {platforms.map((p) => {
                const img = PlaceHolderImages.find(i => i.id === p.id);
                return (
                  <div key={`${listIdx}-${p.id}`} className="relative h-10 w-32 grayscale hover:grayscale-0 transition-all duration-500">
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
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <p className="font-serif italic text-xl md:text-3xl text-brand-gold leading-tight">
          One Sunday. A full month of visibility.
        </p>
        <p className="font-body text-brand-gold/40 text-[10px] uppercase tracking-[4px] font-bold">The Harvest Workflow</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {deliverables.map((item, i) => (
          <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-[32px] flex flex-col items-center text-center space-y-3 group hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center gap-3">
              {item.icon}
              <div className="flex gap-2">
                {item.platforms}
              </div>
            </div>
            <div className="space-y-1">
              <Counter value={item.value} suffix="/mo" />
              <div className="space-y-0.5">
                <h5 className="font-headline text-lg text-brand-gold uppercase tracking-widest">{item.label}</h5>
                <p className="font-body text-brand-cream/50 text-[10px] leading-relaxed font-bold uppercase tracking-wider">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PlatformDistribution />

      <div className="p-6 bg-brand-gold/5 border border-brand-gold/10 rounded-[32px] text-center">
        <p className="font-serif italic text-base md:text-lg text-brand-gold/80 leading-relaxed max-w-xl mx-auto">
          "We convert energy into influence. Every Sunday provides the fuel for absolute digital dominance across all major algorithms."
        </p>
      </div>
    </div>
  );
};
