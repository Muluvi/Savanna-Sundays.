'use client';

import React, { useState, useEffect } from 'react';
import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown } from 'lucide-react';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { TheNumbersSection } from '@/components/sections/TheNumbersSection';
import { MusicProgrammingSection } from '@/components/sections/MusicProgramming';
import { InfluencerPacksSection } from '@/components/sections/InfluencerPacks';
import { InfluencerLineup } from '@/components/sections/InfluencerLineup';

const sectionsData = [
  { id: 'the-gap', label: '01 — The Opportunity', title: "The Gap", component: <TheGap /> },
  { id: 'the-engine', label: '02 — The Engine', title: 'The Venue Network', component: <DualActivationModel /> },
  { id: 'the-ritual', label: '03 — The Ritual', title: 'The Experience', component: (
    <div className="space-y-12">
      <MusicProgrammingSection />
      <ExperienceDesignSection />
      <InfluencerPacksSection />
      <InfluencerLineup />
    </div>
  ) },
  { id: 'the-numbers', label: '04 — The Investment', title: 'The Numbers', component: <TheNumbersSection /> },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  useAnalyticsTracker();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-green text-foreground overflow-x-hidden">
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-[0.015] z-[100]" />
      <MobileNav />
      
      <main>
        {/* Cinematic Hero */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.15)_0%,transparent_75%)]" />

          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
            {savannaLogo && (
              <div className="relative h-40 md:h-[320px] w-full max-w-[600px] flex items-center justify-center mb-0">
                <Image 
                  src={savannaLogo.imageUrl} 
                  alt="Savanna Premium Cider" 
                  fill 
                  className="object-contain" 
                  priority 
                />
              </div>
            )}

            <div className="space-y-2">
              <h1 className="flex flex-col items-center leading-[0.9] tracking-tighter">
                <span className="text-brand-gold text-[clamp(4rem,15vw,10rem)] font-headline uppercase">Savanna</span>
                <span className="text-brand-gold text-[clamp(4rem,15vw,10rem)] font-headline uppercase">Sundays</span>
              </h1>
              <p className="font-body text-brand-gold text-lg md:text-2xl uppercase tracking-[6px] font-bold">
                Already live. Now scaling to Nairobi.
              </p>
            </div>
            
            <div className="max-w-3xl space-y-4 border-t border-brand-gold/20 pt-8">
              <p className="font-body text-brand-cream text-sm md:text-lg uppercase tracking-[2px] font-bold leading-relaxed">
                The Savanna Vybe Squad is already on the ground. The movement is real. Now we&apos;re taking it to mainstream venues, premium spots, and a city-wide audience.
              </p>
            </div>
          </div>

          <div className="absolute bottom-12 flex flex-col items-center gap-4">
            <p className="font-body text-[10px] text-brand-gold tracking-[0.6em] uppercase font-bold">
              Presented by Firefly Management
            </p>
            <ChevronDown className="text-brand-gold animate-bounce" size={24} />
          </div>
        </section>

        {sectionsData.map((section) => (
          <SectionContainer 
            key={section.id}
            id={section.id}
            label={section.label}
            title={section.title}
          >
            {section.component}
          </SectionContainer>
        ))}

        {/* Brand Closing */}
        <div className="py-24 px-6 text-center border-t border-white/10 relative overflow-hidden bg-brand-ink">
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <p className="font-serif italic text-2xl md:text-4xl text-brand-cream leading-snug">
              Savanna Sundays is already live. The Savanna Vybe Squad is on the ground. Thirteen venues. Three resident DJs. Five influencers. One brand owning the day. Let&apos;s scale Sunday.
            </p>

            <a 
              href="mailto:partner@firefly.co.ke" 
              className="btn-primary inline-flex h-16 px-12 items-center gap-6 group"
            >
              <span className="font-headline text-xl tracking-widest uppercase">Scale Sunday</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>

            <div className="pt-20 space-y-10 flex flex-col items-center">
              <div className="flex items-center gap-12">
                {savannaLogo && (
                  <div className="relative h-16 w-48">
                    <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" />
                  </div>
                )}
                <div className="h-12 w-[1px] bg-white/20" />
                <p className="font-headline text-4xl text-white tracking-widest uppercase">Firefly</p>
              </div>

              <div className="space-y-4 max-w-xl">
                <p className="font-body text-[10px] text-brand-gold uppercase tracking-[4px] font-bold">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited
                </p>
                <p className="font-body text-[10px] text-brand-gold/40 uppercase tracking-[2px] leading-relaxed">
                  Excessive alcohol consumption is harmful to your health. Not for sale to persons under the age of 18 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
