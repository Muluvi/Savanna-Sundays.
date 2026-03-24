'use client';

import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown, Sparkles } from 'lucide-react';
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
    <div className="space-y-10">
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
  const fireflyLogo = PlaceHolderImages.find(p => p.id === 'firefly-logo');
  useAnalyticsTracker();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <MobileNav />
      
      <main>
        {/* Cinematic 4K Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.15)_0%,transparent_80%)]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            {savannaLogo && (
              <div className="relative h-48 md:h-72 w-80 md:w-[520px] flex items-center justify-center animate-pulse-gold">
                <Image 
                  src={savannaLogo.imageUrl} 
                  alt="Savanna" 
                  fill 
                  className="object-contain relative z-10" 
                  priority 
                />
              </div>
            )}

            <div className="space-y-4">
              <h1 className="flex flex-col items-center leading-[0.8] tracking-tighter">
                <span className="text-brand-gold text-[clamp(5rem,22vw,13rem)] font-headline">Savanna</span>
                <span className="text-brand-gold text-[clamp(5rem,22vw,13rem)] font-headline">Sundays</span>
              </h1>
            </div>
            
            <div className="max-w-xl">
              <p className="font-serif italic text-xl md:text-3xl text-brand-cream/80 leading-[1.1] animate-in fade-in duration-1000">
                One brand. Multiple venues. Every Sunday.
              </p>
            </div>
          </div>

          {/* High-Fidelity Bottom Attribution */}
          <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-6 opacity-60">
            <div className="space-y-2 text-center">
              <p className="font-body text-[10px] text-brand-gold tracking-[0.5em] uppercase font-bold">
                Presented by Firefly Management
              </p>
            </div>
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

        {/* Glossy Closing Section */}
        <div className="py-24 px-6 text-center bg-background border-t border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="space-y-6">
              <Sparkles className="mx-auto text-brand-gold/40" size={40} />
              <p className="font-serif italic text-2xl md:text-5xl text-brand-cream leading-tight max-w-3xl mx-auto">
                Savanna Sundays is built. The squad is assembled. The venues are mapped. All that’s needed is the green light.
              </p>
            </div>

            <div className="pt-4">
              <a href="mailto:partner@firefly.co.ke" className="btn-primary inline-flex h-16 md:h-20 px-10 md:px-16 items-center gap-6 text-xl md:text-2xl hover:scale-105 transition-all">
                <span>Let&apos;s own Sunday</span>
              </a>
            </div>

            <div className="pt-16 space-y-12 opacity-40">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 grayscale">
                {savannaLogo && <div className="relative h-14 w-48"><Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" /></div>}
                <div className="hidden md:block h-10 w-[1px] bg-white/20" />
                {fireflyLogo && <div className="relative h-10 w-40"><Image src={fireflyLogo.imageUrl} alt="Firefly" fill className="object-contain" /></div>}
              </div>

              <div className="space-y-8 max-w-2xl mx-auto pt-10">
                <p className="font-body text-[9px] text-brand-gold/40 uppercase tracking-[4px]">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>
                <div className="space-y-2">
                  <p className="font-body text-[9px] text-brand-gold/20 uppercase tracking-[2px] leading-relaxed">
                    Excessive alcohol consumption is harmful to your health.
                  </p>
                  <p className="font-body text-[9px] text-brand-gold/40 uppercase tracking-[2px]">
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