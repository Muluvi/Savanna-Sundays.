"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export const TheGap = () => {
  const fbLogo = PlaceHolderImages.find(img => img.id === 'social-fb');
  const igLogo = PlaceHolderImages.find(img => img.id === 'social-ig');
  const xLogo = PlaceHolderImages.find(img => img.id === 'social-x');

  return (
    <div className="space-y-16 py-8 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        <div className="space-y-8">
          <p className="font-body text-lg md:text-2xl text-brand-cream leading-relaxed border-l-4 border-brand-gold pl-8 py-2">
            Every Sunday, Nairobi comes alive. Rooftops fill up. Playlists go on. Stories get posted. It’s the one day when the city’s young professionals choose where to be seen, what to drink, and what to share. 
          </p>
          
          <p className="font-body text-lg md:text-xl text-brand-cream/80 leading-relaxed opacity-90 pl-8">
            Right now, no cider brand is part of that conversation. Savanna Premium Cider has national distribution and a product people love — but zero cultural presence on the day that matters most. Savanna Sundays changes that. One brand, multiple venues, every Sunday.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-brand-gold/10 rounded-[40px] blur-2xl group-hover:bg-brand-gold/20 transition-all duration-700" />
          <div className="relative p-10 bg-brand-dark-alt border border-brand-gold/10 rounded-[40px] shadow-2xl space-y-6">
            <span className="font-headline text-brand-gold/60 text-xs tracking-[4px] uppercase font-bold">The Strategic Reality</span>
            <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-[1.2]">
              "Sunday is Nairobi’s biggest social stage. No cider brand is on it. We’re about to change that."
            </p>
            <div className="w-12 h-[2px] bg-brand-gold/30" />
          </div>
        </div>
      </div>

      {/* Social Proof Strip */}
      <div className="mt-12 bg-brand-dark-alt rounded-[40px] p-8 md:p-12 border border-brand-gold/20 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
           <h4 className="font-headline text-9xl text-brand-gold">DATA</h4>
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="section-label text-brand-gold/60 mb-4">Savanna Kenya Right Now</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Facebook Followers", value: "603K", img: fbLogo },
              { label: "Instagram Followers", value: "6,121", img: igLogo },
              { label: "Twitter/X Followers", value: "1,115", img: xLogo },
            ].map((stat, i) => (
              <Card key={i} className="bg-brand-dark border border-brand-gold/10 p-6 flex items-center gap-6 shadow-sm hover:border-brand-gold/30 transition-all">
                {stat.img && (
                  <div className="relative h-8 w-8 shrink-0">
                    <Image src={stat.img.imageUrl} alt={stat.label} fill className="object-contain filter brightness-200" />
                  </div>
                )}
                <div className="space-y-0.5">
                  <div className="font-headline text-4xl text-brand-gold leading-none">{stat.value}</div>
                  <div className="font-body text-[10px] uppercase font-bold tracking-widest text-brand-text-muted">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
          
          <p className="font-body text-sm md:text-base text-brand-cream/80 font-bold max-w-2xl">
            603K on Facebook. 6K on Instagram. The audience is there — the culture connection isn’t. <span className="text-brand-gold">Savanna Sundays builds it.</span>
          </p>
        </div>
      </div>
    </div>
  );
};