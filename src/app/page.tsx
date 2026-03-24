
'use client';

import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Unified Content sections
import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { VisualIdentitySection } from '@/components/sections/VisualIdentity';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { ContentSocialSection } from '@/components/sections/ContentProduction';
import { BuildingTheCrowd } from '@/components/sections/BuildingTheCrowd';
import { TheNumbersSection } from '@/components/sections/TheNumbersSection';
import { MusicProgrammingSection } from '@/components/sections/MusicProgramming';

const sectionsData = [
  { 
    id: 'the-gap', 
    label: '01 — The Opportunity', 
    title: "The Gap", 
    variant: 'dark' as const, 
    component: <TheGap /> 
  },
  { 
    id: 'the-engine', 
    label: '02 — The Engine', 
    title: 'The Dual Model', 
    variant: 'dark' as const, 
    component: <DualActivationModel /> 
  },
  { 
    id: 'the-ritual', 
    label: '03 — The Ritual', 
    title: 'The Experience', 
    variant: 'dark' as const, 
    component: (
      <div className="space-y-12">
        <VisualIdentitySection />
        <MusicProgrammingSection />
        <ExperienceDesignSection />
      </div>
    ) 
  },
  { 
    id: 'the-harvest', 
    label: '04 — The Harvest', 
    title: 'The Content Engine', 
    variant: 'dark' as const, 
    component: <ContentSocialSection />
  },
  { 
    id: 'the-community', 
    label: '05 — The Community', 
    title: 'The Growth Flywheel', 
    variant: 'dark' as const, 
    component: <BuildingTheCrowd />
  },
  { 
    id: 'the-numbers', 
    label: '06 — The Investment', 
    title: 'The Numbers', 
    variant: 'dark' as const, 
    component: <TheNumbersSection />
  },
];

export default function Home() {
  const fireflyLogo = PlaceHolderImages.find(p => p.id === 'firefly-logo');
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  useAnalyticsTracker();

  return (
    <div className="relative min-h-screen bg-background">
      <MobileNav />
      
      <main className="transition-all">
        {/* Proportional Hero Section - Clean & Glowing */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-background">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.15)_0%,transparent_80%)]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-12 text-center">
            <div className="space-y-2">
              <p className="font-headline text-xs md:text-sm text-brand-gold/60 tracking-[0.6em] uppercase animate-in fade-in slide-in-from-top-4 duration-1000">
                Presented by Firefly Management
              </p>
            </div>

            {savannaLogo && (
              <div className="relative h-32 md:h-48 w-80 md:w-96 flex items-center justify-center">
                {/* Bright Glow Effect */}
                <div className="absolute inset-0 bg-brand-gold/30 blur-[120px] rounded-full scale-150 animate-pulse" />
                <div className="absolute inset-0 bg-brand-gold/25 blur-[60px] rounded-full scale-110" />
                <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain relative z-10" priority />
              </div>
            )}

            <div className="space-y-4">
              <h1 className="flex flex-col items-center leading-[0.8] tracking-tighter">
                <span className="text-brand-gold text-[clamp(4.5rem,20vw,12rem)] font-headline">Savanna</span>
                <span className="text-brand-gold text-[clamp(4.5rem,20vw,12rem)] font-headline">Sundays</span>
              </h1>
            </div>
            
            <div className="max-w-xl">
              <p className="font-serif italic text-xl md:text-3xl text-brand-cream leading-[1.1]">
                One brand. Multiple venues. Every Sunday.
              </p>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-2 opacity-30">
            <p className="font-body text-[10px] tracking-[4px] text-brand-gold uppercase font-bold">Strategic prospectus 2024</p>
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

        {/* Closing Section */}
        <div className="py-16 px-6 text-center bg-background border-t border-white/5 relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="space-y-6">
              <Sparkles className="mx-auto text-brand-gold/60" size={48} />
              <p className="font-serif italic text-2xl md:text-5xl text-brand-cream leading-[1.1] max-w-3xl mx-auto">
                Savanna Sundays is built. The squad is assembled. The venues are mapped. All that’s needed is the green light.
              </p>
            </div>

            <div className="pt-4">
              <a href="mailto:partner@firefly.co.ke" className="btn-primary inline-flex h-16 md:h-20 px-10 md:px-16 items-center gap-6 text-xl md:text-2xl shadow-2xl hover:scale-105 transition-all">
                <span>Let&apos;s own Sunday</span>
              </a>
            </div>

            <div className="pt-12 space-y-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 grayscale opacity-40">
                {savannaLogo && <div className="relative h-12 w-44"><Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" /></div>}
                <div className="hidden md:block h-12 w-[1px] bg-white/10" />
                {fireflyLogo && <div className="relative h-10 w-40"><Image src={fireflyLogo.imageUrl} alt="Firefly" fill className="object-contain" /></div>}
              </div>

              <div className="space-y-8 max-w-2xl mx-auto border-t border-white/10 pt-10">
                <p className="font-body text-[10px] text-brand-gold/40 uppercase tracking-[4px] font-bold">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>
                <div className="space-y-3">
                  <p className="font-body text-[9px] text-brand-gold/30 uppercase tracking-[2px] text-center leading-relaxed">
                    Do not forward to persons under the age of 18 years. Excessive alcohol consumption is harmful to your health.
                  </p>
                  <p className="font-body text-[9px] text-brand-gold/60 uppercase tracking-[2px] text-center font-bold">
                    Not for sale to persons under the age of 18 years.
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
