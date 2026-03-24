'use client';

import { useState, useEffect } from 'react';
import { AppSidebar } from '@/components/navigation/AppSidebar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Content sections
import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { VisualIdentitySection } from '@/components/sections/VisualIdentity';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { ContentSocialSection } from '@/components/sections/ContentProduction';
import { BuildingTheCrowd } from '@/components/sections/BuildingTheCrowd';
import { TheNumbersSection } from '@/components/sections/SponsorshipRevenue';
import { MusicProgrammingSection } from '@/components/sections/MusicProgramming';
import { CommunityGrowthSection } from '@/components/sections/CommunityBuilding';

const sectionsData = [
  { 
    id: 'the-gap', 
    label: '01 — THE OPPORTUNITY', 
    title: "THE GAP", 
    variant: 'dark' as const, 
    component: <TheGap /> 
  },
  { 
    id: 'the-concept', 
    label: '02 — HOW IT WORKS', 
    title: 'THE ENGINE', 
    variant: 'alt' as const, 
    component: <DualActivationModel /> 
  },
  { 
    id: 'the-experience', 
    label: '03 — THE EXPERIENCE', 
    title: 'THE RITUAL', 
    variant: 'dark' as const, 
    component: (
      <div className="space-y-12">
        <VisualIdentitySection />
        <div className="w-full h-[1px] bg-white/5" />
        <MusicProgrammingSection />
        <div className="w-full h-[1px] bg-white/5" />
        <ExperienceDesignSection />
      </div>
    ) 
  },
  { 
    id: 'the-content-engine', 
    label: '04 — THE CONTENT ENGINE', 
    title: 'THE HARVEST', 
    variant: 'alt' as const, 
    component: <ContentSocialSection />
  },
  { 
    id: 'building-the-crowd', 
    label: '05 — BUILDING THE CROWD', 
    title: 'THE COMMUNITY', 
    variant: 'dark' as const, 
    component: (
      <div className="space-y-12">
        <CommunityGrowthSection />
        <BuildingTheCrowd />
      </div>
    )
  },
  { 
    id: 'the-numbers', 
    label: '06 — THE NUMBERS', 
    title: 'THE INVESTMENT', 
    variant: 'alt' as const, 
    component: <TheNumbersSection />
  },
];

export default function Home() {
  const fireflyLogo = PlaceHolderImages.find(p => p.id === 'firefly-logo');
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  useAnalyticsTracker();

  const scrollToSection1 = () => {
    const el = document.getElementById('the-gap');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        {/* Cinematic Hero */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-[#1A1208] snap-start">
          <div 
            className="absolute inset-0 pointer-events-none opacity-40" 
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(244,197,66,0.15) 0%, transparent 80%)'
            }} 
          />

          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
            {savannaLogo && (
              <div className="relative h-24 md:h-32 w-full max-w-[280px]">
                <Image 
                  src={savannaLogo.imageUrl} 
                  alt="Savanna" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            )}

            <div className="space-y-4">
              <h1 className="flex flex-col items-center leading-[0.8]">
                <span className="block text-brand-gold text-[clamp(4rem,15vw,12rem)] font-headline tracking-tighter">
                  SAVANNA
                </span>
                <span className="block text-brand-gold text-[clamp(4rem,15vw,12rem)] font-headline tracking-tighter">
                  SUNDAYS
                </span>
              </h1>
              
              <p className="font-headline text-xl md:text-3xl text-brand-gold tracking-[0.4em] uppercase">Nairobi Ritual</p>
            </div>
            
            <div className="max-w-2xl space-y-10">
              <p className="font-serif italic text-2xl md:text-4xl text-brand-cream leading-tight">
                One brand. Multiple venues. Every Sunday.
              </p>

              <button 
                onClick={scrollToSection1}
                className="btn-primary group inline-flex items-center gap-4"
              >
                <span className="font-headline text-lg md:text-2xl tracking-widest uppercase">Explore Strategy</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-4 opacity-40">
            <p className="font-body text-[9px] tracking-[5px] text-brand-text-muted uppercase font-bold">
              Firefly Management Strategic Prospectus
            </p>
            <ChevronDown className="text-brand-gold/60 animate-bounce" size={24} />
          </div>
        </section>

        {sectionsData.map((section) => (
          <SectionContainer 
            key={section.id}
            id={section.id}
            label={section.label}
            title={section.title}
            variant={section.variant}
          >
            {section.component}
          </SectionContainer>
        ))}

        {/* High-Fidelity Closing */}
        <div className="py-40 px-6 text-center bg-brand-dark border-t border-white/5 relative overflow-hidden snap-start min-h-screen flex flex-col justify-center">
          <div className="max-w-5xl mx-auto space-y-20 relative z-10">
            <div className="space-y-12">
              <Sparkles className="mx-auto text-brand-gold animate-pulse" size={64} />
              <p className="font-serif italic text-4xl md:text-7xl text-brand-cream leading-tight max-w-5xl mx-auto">
                "The ritual is ready. The squad is assembled. All that’s needed is the green light."
              </p>
            </div>

            <div className="pt-12">
              <a 
                href="mailto:partner@firefly.co.ke" 
                className="btn-primary inline-flex h-20 md:h-24 px-12 md:px-24 items-center gap-8 text-2xl md:text-5xl shadow-[0_40px_80px_rgba(244,197,66,0.3)] hover:scale-105"
              >
                <span>LET&apos;S OWN SUNDAY</span>
                <ArrowRight size={40} />
              </a>
            </div>

            <div className="pt-32 space-y-20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
                {savannaLogo && (
                  <div className="relative h-16 md:h-24 w-48 md:w-64 grayscale opacity-50">
                    <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" />
                  </div>
                )}
                <div className="hidden md:block h-20 w-[1px] bg-white/10" />
                {fireflyLogo && (
                  <div className="relative h-12 md:h-16 w-40 md:w-56 grayscale opacity-50">
                    <Image src={fireflyLogo.imageUrl} alt="Firefly" fill className="object-contain" />
                  </div>
                )}
              </div>

              <div className="space-y-8 max-w-4xl mx-auto">
                <p className="font-body text-[10px] text-brand-text-muted uppercase tracking-[5px] font-bold opacity-60">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>

                <div className="pt-8 border-t border-white/5">
                  <p className="font-body text-[9px] text-[#B8A98A] uppercase tracking-[2px] text-center leading-relaxed font-bold">
                    DO NOT FORWARD TO PERSONS UNDER THE AGE OF 18 YEARS. EXCESSIVE ALCOHOL CONSUMPTION IS HARMFUL TO YOUR HEALTH. NOT FOR SALE TO PERSONS UNDER THE AGE OF 18 YEARS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}