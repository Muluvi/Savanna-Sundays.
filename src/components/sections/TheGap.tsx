"use client";

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles } from 'lucide-react';
import { cl } from '@/lib/cloudinary';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export const TheGap = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook Reach', value: '603000', delay: 100 },
    { id: 'social-ig', label: 'Instagram Reach', value: '6100', delay: 800 },
    { id: 'social-x', label: 'X (Twitter) Reach', value: '1100', delay: 1500 },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="font-serif italic text-[var(--text-lg)] md:text-[var(--text-3xl)] text-brand-gold leading-tight border-l-[6px] border-brand-gold/40 animate-border-breathe pl-8 py-4">
            We&apos;re already building Nairobi&apos;s Sunday culture — now it&apos;s time to scale city-wide.
          </p>
        </div>

        <div className="glass-tile p-8 md:p-12 rounded-[40px] relative overflow-hidden group border-brand-gold/10 shadow-2xl">
          <div className="absolute top-0 right-0 p-8 z-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_400')} 
                alt="" 
                style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
              />
            )}
          </div>
          <div className="relative z-10 space-y-4">
            <h4 className="font-headline text-[var(--text-xl)] text-brand-gold uppercase tracking-[4px] leading-none">The expansion mandate</h4>
            <p className="font-body text-brand-cream/80 text-[var(--text-base)] leading-relaxed">
              Savanna Sundays isn&apos;t a concept. It&apos;s already running. The Savanna Vybe Squad is already pulling crowds and building ritual. We are now scaling what works—mainstream bars for volume and premium spots for positioning.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 space-y-12">
        <div className="flex items-center justify-center gap-4">
          <Sparkles className="text-brand-gold/60" size={16} />
          <span className="font-body text-[var(--text-xs)] tracking-[4px] text-brand-gold uppercase font-bold">Evidence of reach</span>
          <Sparkles className="text-brand-gold/60" size={16} />
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {socialIcons.map((stat) => {
            const img = PlaceHolderImages.find(i => i.id === stat.id);
            return (
              <div key={stat.id} className="flex items-center gap-8 md:gap-24 group transition-all duration-700">
                {img && (
                  <div className="shrink-0 flex items-center justify-center w-16 h-16 md:w-32 md:h-32 relative">
                    <img 
                      src={cl(img.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_800')} 
                      alt={stat.label} 
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-115 drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter brightness-110"
                    />
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 flex-1 border-b border-white/10 pb-8 md:pb-12">
                  <AnimatedCounter 
                    value={stat.value} 
                    delay={stat.delay}
                    className="text-brand-gold text-4xl md:text-6xl font-headline tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(244,197,66,0.4)]" 
                  />
                  <div className="font-body text-[10px] md:text-[var(--text-sm)] uppercase tracking-[4px] text-brand-gold/45 font-bold">
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
