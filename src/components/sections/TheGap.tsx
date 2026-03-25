
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { cl } from '@/lib/cloudinary';

/**
 * High-fidelity counter for strategic metrics.
 * Triggers sequentially based on the delay prop.
 */
const StatCounter = ({ value, delay = 0, className }: { value: string; delay?: number; className?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const numericMatch = value.match(/[\d.]+/);
  const suffixMatch = value.match(/[a-zA-Z%]+/);
  
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : '';
  const isDecimal = numericMatch ? numericMatch[0].includes('.') : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            startAnimation();
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const startAnimation = () => {
      let startTime: number | null = null;
      const duration = 1500;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = progress * (2 - progress);
        setDisplayValue(easeOut * target);
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    return () => observer.disconnect();
  }, [target, hasAnimated, delay]);

  return (
    <div ref={containerRef} className={cn("font-headline tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(244,197,66,0.35)]", className)}>
      {isDecimal ? displayValue.toFixed(1) : Math.floor(displayValue).toLocaleString()}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook Reach', value: '603K', delay: 100 },
    { id: 'social-ig', label: 'Instagram Reach', value: '6.1K', delay: 500 },
    { id: 'social-x', label: 'X (Twitter) Reach', value: '1.1K', delay: 900 },
  ];

  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="font-serif italic text-[var(--text-lg)] md:text-[var(--text-4xl)] text-brand-gold leading-tight border-l-[6px] border-brand-gold/40 animate-border-breathe pl-8 py-4">
            We&apos;re already building Nairobi&apos;s Sunday culture — now it&apos;s time to scale city-wide.
          </p>
        </div>

        <div className="glass-tile p-8 md:p-12 rounded-[40px] relative overflow-hidden group border-brand-gold/10">
          <div className="absolute top-0 right-0 p-8 z-0 opacity-10">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_300')} 
                alt="" 
                style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="relative z-10 space-y-4">
            <h4 className="font-headline text-[var(--text-xl)] text-brand-gold uppercase tracking-tighter">The expansion mandate</h4>
            <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">
              Savanna Sundays isn&apos;t a concept. It&apos;s already running. The Savanna Vybe Squad is already pulling crowds and building ritual. We are now scaling what works—mainstream bars for volume and premium spots for positioning.
            </p>
          </div>
        </div>
      </div>

      {/* Compact Evidence of Reach */}
      <div className="pt-12 border-t border-white/5 space-y-12">
        <div className="flex items-center justify-center gap-4">
          <Sparkles className="text-brand-gold/60" size={18} />
          <span className="font-body text-[var(--text-xs)] tracking-[4px] text-brand-gold uppercase font-bold">Evidence of reach</span>
          <Sparkles className="text-brand-gold/60" size={18} />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {socialIcons.map((stat) => {
            const img = PlaceHolderImages.find(i => i.id === stat.id);
            return (
              <div key={stat.id} className="flex items-center gap-10 md:gap-20 group transition-all duration-500">
                {img && (
                  <div className="shrink-0 flex items-center justify-center w-24 h-24 md:w-40 md:h-40 relative">
                    <img 
                      src={cl(img.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_600')} 
                      alt={stat.label} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
                    />
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1 border-b border-white/10 pb-8">
                  <StatCounter 
                    value={stat.value} 
                    delay={stat.delay}
                    className="text-brand-gold text-6xl md:text-display" 
                  />
                  <div className="font-body text-[11px] md:text-sm uppercase tracking-[4px] text-brand-gold/45 font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
