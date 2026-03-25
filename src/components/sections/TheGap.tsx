'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { cl } from '@/lib/cloudinary';

/**
 * High-fidelity counter for strategic metrics.
 * Animates from 0 to target value using requestAnimationFrame with an ease-out curve.
 * Triggers exactly when the element enters the viewport.
 */
const StatCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse the number and the suffix (e.g., "603K" -> 603, "K")
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
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const startAnimation = () => {
      let startTime: number | null = null;
      const duration = 1200; // 1.2 seconds duration

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Quadratic ease-out curve: f(t) = t * (2 - t)
        const easeOut = progress * (2 - progress);
        
        setDisplayValue(easeOut * target);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={containerRef} className="font-headline text-[var(--text-4xl)] text-brand-gold leading-none">
      {isDecimal ? displayValue.toFixed(1) : Math.floor(displayValue)}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K' },
    { id: 'social-ig', label: 'Instagram', value: '6.1K' },
    { id: 'social-x', label: 'X (Twitter)', value: '1.1K' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="font-serif italic text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-gold leading-snug border-l-4 border-brand-gold/40 animate-border-breathe pl-8 py-2">
            We&apos;re already building Nairobi&apos;s Sunday culture — now it&apos;s time to scale city-wide.
          </p>
        </div>

        <div className="glass-tile p-8 rounded-[32px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-1000">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')} 
                alt="" 
                style={{ height: '128px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="relative z-10 space-y-4">
            <h4 className="font-headline text-[var(--text-xl)] text-brand-gold uppercase tracking-tight">The expansion mandate</h4>
            <p className="font-body text-brand-cream/90 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">
              Savanna Sundays isn&apos;t a concept. It&apos;s already running. The Savanna Vybe Squad is already pulling crowds and building ritual. We are now scaling what works—mainstream bars for volume and premium spots for positioning. The squad is proven. The infrastructure is built. This proposal is about scaling what works.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="text-brand-gold/40" size={16} />
          <span className="font-body text-[var(--text-xs)] tracking-[5px] text-brand-gold uppercase font-bold">Evidence of reach</span>
          <Sparkles className="text-brand-gold/40" size={16} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialIcons.map((stat) => {
            const img = PlaceHolderImages.find(i => i.id === stat.id);
            return (
              <div key={stat.id} className="glass-tile p-6 rounded-3xl flex flex-col items-center gap-4 group hover:-translate-y-1">
                {img && (
                  <img 
                    src={cl(img.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_80')} 
                    alt={stat.label} 
                    className="transition-transform duration-500 group-hover:scale-110"
                    style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                  />
                )}
                <div className="text-center">
                  <StatCounter value={stat.value} />
                  <div className="font-body text-[var(--text-xs)] uppercase tracking-[4px] text-brand-gold/60 font-bold mt-1">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
