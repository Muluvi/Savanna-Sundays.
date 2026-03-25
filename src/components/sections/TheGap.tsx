"use client";

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles } from 'lucide-react';
import { cl } from '@/lib/cloudinary';
import { AnimatedCounter } from '@/components/ui/animated-counter';

/**
 * Optimized The Gap (Opportunity)
 * Tightened internal spacing for higher narrative density.
 * Enhanced with 4K visual fidelity and high-impact logo "pop" effects.
 */
export const TheGap = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook Reach', value: '603000', delay: 100 },
    { id: 'social-ig', label: 'Instagram Reach', value: '6100', delay: 800 },
    { id: 'social-tt', label: 'TikTok Reach', value: '15000', delay: 1200 },
    { id: 'social-yt', label: 'YouTube Reach', value: '25000', delay: 1800 },
    { id: 'social-x', label: 'X (Twitter) Reach', value: '1100', delay: 2400 },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6">
          <p className="font-serif italic text-[var(--text-base)] md:text-[var(--text-2xl)] text-brand-gold leading-tight border-l-[4px] md:border-l-[6px] border-brand-gold/40 animate-border-breathe pl-6 md:pl-8 py-2 md:py-4">
            We&apos;re already building Nairobi&apos;s Sunday culture — now it&apos;s time to scale city-wide.
          </p>
        </div>

        <div className="glass-tile p-6 md:p-10 rounded-[32px] md:rounded-[40px] relative overflow-hidden group border-brand-gold/10 shadow-2xl">
          <div className="absolute top-0 right-0 p-6 md:p-8 z-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto,f_auto,dpr_2.0,w_400')} 
                alt="" 
                style={{ height: 'clamp(60px, 10vh, 100px)', width: 'auto', objectFit: 'contain' }}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
          <div className="relative z-10 space-y-3 md:space-y-4">
            <h4 className="font-headline text-[var(--text-lg)] md:text-[var(--text-xl)] text-brand-gold uppercase tracking-[4px] leading-none">The expansion mandate</h4>
            <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">
              Savanna Sundays isn&apos;t a concept. It&apos;s already running. The Savanna Vybe Squad is already pulling crowds and building ritual. We are now scaling what works—mainstream bars for volume and premium spots for positioning.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-12 border-t border-white/5 space-y-8 md:space-y-12">
        <div className="flex items-center justify-center gap-3 md:gap-4">
          <Sparkles className="text-brand-gold/60" size={14} />
          <span className="font-body text-[var(--text-xs)] tracking-[4px] text-brand-gold uppercase font-bold">Evidence of reach</span>
          <Sparkles className="text-brand-gold/60" size={14} />
        </div>
        
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          {socialIcons.map((stat) => {
            const img = PlaceHolderImages.find(i => i.id === stat.id);
            if (!img) return null;
            
            return (
              <div key={stat.id} className="flex items-center gap-6 md:gap-24 group transition-all duration-700 hover:bg-white/[0.02] p-4 rounded-3xl">
                <div className="shrink-0 flex items-center justify-center w-14 h-14 md:w-32 md:h-32 relative">
                  {/* High-fidelity background glow */}
                  <div className="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img 
                    src={cl(img.imageUrl, 'q_auto,f_auto,dpr_2.0,w_400')} 
                    alt={stat.label} 
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 brightness-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-16 flex-1 border-b border-white/10 pb-6 md:pb-8 group-hover:border-brand-gold/30 transition-colors">
                  <AnimatedCounter 
                    value={stat.value} 
                    delay={stat.delay}
                    className="text-brand-gold text-3xl md:text-6xl font-headline tracking-tighter leading-none drop-shadow-[0_0_25px_rgba(244,197,66,0.4)]" 
                  />
                  <div className="font-body text-[8px] md:text-[var(--text-xs)] uppercase tracking-[3px] md:tracking-[4px] text-brand-gold/45 font-bold group-hover:text-brand-gold/70 transition-colors">
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