'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

export const TheGap = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const socialIcons = [
    { id: 'social-fb', label: 'Facebook', value: '603K', size: 'h-16 w-48' },
    { id: 'social-ig', label: 'Instagram', value: '6.1K', size: 'h-16 w-16' },
    { id: 'social-x', label: 'X (Twitter)', value: '1.1K', size: 'h-14 w-14' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="font-serif italic text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-gold leading-snug border-l-4 border-brand-gold pl-8 py-2">
            We&apos;re already building Nairobi&apos;s Sunday culture — now it&apos;s time to scale city-wide.
          </p>
        </div>

        <div className="glass-tile p-8 rounded-[32px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-1000">
            {savannaLogo && (
              <Image src={savannaLogo.imageUrl} alt="" width={200} height={200} className="object-contain" />
            )}
          </div>
          <div className="relative z-10 space-y-4">
            <h4 className="font-headline text-[var(--text-xl)] text-brand-gold uppercase tracking-tight">The expansion mandate</h4>
            <p className="font-body text-brand-cream/90 text-[var(--text-sm)] md:text-[var(--text-base)] leading-relaxed">
              Savanna Sundays isn&apos;t a concept. It&apos;s already running. The Savanna Vybe Squad is already pulling crowds and building ritual. We are now scaling what works—mainstream bars for volume and premium spots for positioning. The squad is proven. The infrastructure is built.
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
                <div className={cn("relative transition-transform duration-500 group-hover:scale-110", stat.size)}>
                  {img && <Image src={img.imageUrl} alt={stat.label} fill className="object-contain" />}
                </div>
                <div className="text-center">
                  <div className="font-headline text-[var(--text-4xl)] text-brand-gold leading-none">{stat.value}</div>
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
