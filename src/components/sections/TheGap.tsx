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
      const duration = 1500; // Calibrated for smooth "reveal" feel

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Quadratic ease-out curve
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
    <div ref={containerRef} className="font-headline text-[var(--text-6xl)] text-brand-gold leading-none tracking-tighter">
      {isDecimal ? displayValue.toFixed(1) : Math.floor(displayValue)}
      {suffix}
    </div>
  );
};

export const TheGap = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook Reach', value: '603K' },
    { id: 'social-ig', label: 'Instagram Reach', value: '6.1K' },
    { id: 'social-x', label: 'X (Twitter) Reach', value: '1.1K' },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="font-serif italic text-[var(--text-xl)] md:text-[var(--text-4xl)] text-brand-gold leading-tight border-l-[6px] border-brand-gold/40 animate-border-breathe pl-10 py-4">
            We&apos;re already building Nairobi&apos;s Sunday culture — now it&apos;s time to scale city-wide.
          </p>
        </div>

        <div className="glass-tile p-10 rounded-[48px] relative overflow-hidden group border-brand-gold/10">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')} 
                alt="" 
                style={{ height: '160px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="relative z-10 space-y-6">
            <h4 className="font-headline text-[var(--text-2xl)] text-brand-gold uppercase tracking-tight">The expansion mandate</h4>
            <p className="font-body text-brand-cream/80 text-[var(--text-base)] leading-relaxed">
              Savanna Sundays isn&apos;t a concept. It&apos;s already running. The Savanna Vybe Squad is already pulling crowds and building ritual. We are now scaling what works—mainstream bars for volume and premium spots for positioning. The squad is proven. The infrastructure is built. This proposal is about scaling what works.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-16 border-t border-white/5">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Sparkles className="text-brand-gold" size={24} />
          <span className="font-body text-[var(--text-sm)] tracking-[8px] text-brand-gold uppercase font-bold">Evidence of reach</span>
          <Sparkles className="text-brand-gold" size={24} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialIcons.map((stat) => {
            const img = PlaceHolderImages.find(i => i.id === stat.id);
            return (
              <div key={stat.id} className="glass-tile p-10 rounded-[40px] flex flex-col items-center gap-8 group hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-500">
                {img && (
                  <div className="p-4 rounded-3xl bg-white/[0.03] group-hover:bg-brand-gold/10 transition-colors">
                    <img 
                      src={cl(img.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_200')} 
                      alt={stat.label} 
                      className="transition-transform duration-700 group-hover:scale-110"
                      style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                    />
                  </div>
                )}
                <div className="text-center space-y-2">
                  <StatCounter value={stat.value} />
                  <div className="font-body text-[var(--text-xs)] uppercase tracking-[6px] text-brand-gold/60 font-bold">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};