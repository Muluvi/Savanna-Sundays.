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
    <div className="relative min-h-screen bg-brand-green text-foreground selection:bg-brand-gold selection:text-brand-green">
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-[0.02] z-[100]" />
      <MobileNav />
      
      <main>
        {/* Cinematic Brand Hero Section - Expansion Narrative */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.15)_0%,transparent_70%)]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-2 text-center">
            {savannaLogo && (
              <div className="relative h-64 md:h-[450px] w-full max-w-[800px] flex items-center justify-center animate-intense-glow mb-4">
                <Image 
                  src={savannaLogo.imageUrl} 
                  alt="Savanna Premium Cider" 
                  fill 
                  className="object-contain relative z-10" 
                  priority 
                />
              </div>
            )}

            <div className="space-y-0.5">
              <h1 className="flex flex-col items-center leading-[0.8] tracking-tighter">
                <span className="text-brand-gold text-[clamp(4.5rem,20vw,14rem)] font-headline">Savanna</span>
                <span className="text-brand-gold text-[clamp(4.5rem,20vw,14rem)] font-headline">Sundays</span>
              </h1>
            </div>
            
            <div className="space-y-6 max-w-2xl mt-6 animate-fade-in-up">
              <p className="font-serif italic text-xl md:text-3xl text-brand-gold leading-tight drop-shadow-lg">
                Already live. Now scaling to every corner of Nairobi.
              </p>
              <p className="font-body text-brand-cream/80 text-xs md:text-lg uppercase tracking-[3px] font-bold leading-relaxed max-w-xl mx-auto border-t border-brand-gold/20 pt-6">
                The Savanna Vybe Squad is already on the ground. The movement is real. Now we&apos;re taking it to mainstream venues, premium spots, and a bigger audience.
              </p>
            </div>
          </div>

          {/* High-Fidelity Attribution at Absolute Bottom */}
          <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-4">
            <p className="font-body text-[10px] text-brand-gold/80 tracking-[0.6em] uppercase font-bold">
              Presented by Firefly Management
            </p>
            <ChevronDown className="text-brand-gold/40 animate-bounce" size={20} />
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

        {/* Brand Closing Section - Expansion Commitment */}
        <div className="py-24 px-6 text-center bg-brand-green border-t border-white/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            {isMounted ? (
              <>
                <p className="font-serif italic text-2xl md:text-5xl text-brand-cream leading-tight max-w-4xl mx-auto">
                  Savanna Sundays is already live. The Savanna Vybe Squad is on the ground. The content engine is producing. The crowd is growing. Now it&apos;s time to take this to every corner of Nairobi — mainstream bars, premium venues, and everything in between. Thirteen venues. Three resident DJs. Five influencers dropping every Sunday at noon. One brand owning the day. Let&apos;s scale Sunday.
                </p>

                <a 
                  href="mailto:partner@firefly.co.ke" 
                  className={cn(
                    "btn-primary inline-flex h-20 px-16 items-center gap-8 text-xl hover:scale-105 transition-all"
                  )}
                >
                  <span>Scale Sunday &rarr;</span>
                </a>
              </>
            ) : (
              <div className="h-64 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-brand-gold/20 border-t-brand-gold rounded-full animate-spin" />
              </div>
            )}

            <div className="pt-16 space-y-8">
              <div className="flex items-center justify-center gap-12">
                {savannaLogo && (
                  <div className="relative h-20 w-60">
                    <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" />
                  </div>
                )}
                <div className="h-12 w-[1px] bg-white/20" />
                <p className="font-headline text-4xl text-white tracking-widest">Firefly</p>
              </div>

              <div className="space-y-4 max-w-xl mx-auto">
                <p className="font-body text-[10px] text-brand-gold/80 uppercase tracking-[4px] font-bold">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>
                <p className="font-body text-[9px] text-brand-gold/40 uppercase tracking-[2px] leading-relaxed">
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