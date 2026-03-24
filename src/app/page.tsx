'use client';

import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown } from 'lucide-react';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { VisualIdentitySection } from '@/components/sections/VisualIdentity';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { ContentSocialSection } from '@/components/sections/ContentProduction';
import { BuildingTheCrowd } from '@/components/sections/BuildingTheCrowd';
import { TheNumbersSection } from '@/components/sections/TheNumbersSection';
import { MusicProgrammingSection } from '@/components/sections/MusicProgramming';

const sectionsData = [
  { id: 'the-gap', label: '01 — The Opportunity', title: "The Gap", component: <TheGap /> },
  { id: 'the-engine', label: '02 — The Engine', title: 'The Dual Model', component: <DualActivationModel /> },
  { id: 'the-ritual', label: '03 — The Ritual', title: 'The Experience', component: (
    <div className="space-y-8">
      <VisualIdentitySection />
      <MusicProgrammingSection />
      <ExperienceDesignSection />
    </div>
  ) },
  { id: 'the-harvest', label: '04 — The Harvest', title: 'The Content Engine', component: <ContentSocialSection /> },
  { id: 'the-community', label: '05 — The Community', title: 'The Growth Flywheel', component: <BuildingTheCrowd /> },
  { id: 'the-numbers', label: '06 — The Investment', title: 'The Numbers', component: <TheNumbersSection /> },
];

export default function Home() {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  useAnalyticsTracker();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <MobileNav />
      
      <main>
        {/* Cinematic OLED Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.1)_0%,transparent_80%)]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
            {savannaLogo && (
              <div className="relative h-48 md:h-72 w-80 md:w-[520px] flex items-center justify-center animate-intense-glow">
                <Image 
                  src={savannaLogo.imageUrl} 
                  alt="Savanna" 
                  fill 
                  className="object-contain relative z-10" 
                  priority 
                />
              </div>
            )}

            <div className="space-y-2">
              <h1 className="flex flex-col items-center leading-[0.8] tracking-tighter">
                <span className="text-brand-gold text-[clamp(4rem,18vw,12rem)] font-headline">Savanna</span>
                <span className="text-brand-gold text-[clamp(4rem,18vw,12rem)] font-headline">Sundays</span>
              </h1>
            </div>
            
            <p className="font-serif italic text-lg md:text-2xl text-brand-cream/70 leading-relaxed max-w-lg">
              One brand. Multiple venues. Every Sunday.
            </p>
          </div>

          {/* High-Fidelity Attribution at Absolute Bottom */}
          <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-3 opacity-40">
            <p className="font-body text-[9px] text-brand-gold tracking-[0.5em] uppercase font-bold">
              Presented by Firefly Management
            </p>
            <ChevronDown className="text-brand-gold/30 animate-bounce" size={16} />
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

        {/* Glossy Closing Section */}
        <div className="py-20 px-6 text-center bg-background border-t border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <p className="font-serif italic text-xl md:text-4xl text-brand-cream leading-tight max-w-2xl mx-auto">
              Savanna Sundays is built. The squad is assembled. The venues are mapped. All that’s needed is the green light.
            </p>

            <a href="mailto:partner@firefly.co.ke" className="btn-primary inline-flex h-16 px-12 items-center gap-6 text-lg hover:scale-105 transition-all">
              <span>Let&apos;s own Sunday</span>
            </a>

            <div className="pt-12 space-y-8 opacity-40">
              <div className="flex items-center justify-center gap-12 grayscale">
                {savannaLogo && <div className="relative h-10 w-32"><Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" /></div>}
                <div className="h-6 w-[1px] bg-white/20" />
                <p className="font-headline text-2xl text-white tracking-widest">Firefly</p>
              </div>

              <div className="space-y-4 max-w-xl mx-auto">
                <p className="font-body text-[8px] text-brand-gold/40 uppercase tracking-[4px]">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>
                <p className="font-body text-[8px] text-brand-gold/20 uppercase tracking-[2px] leading-relaxed">
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