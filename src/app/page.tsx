'use client';

import { AppSidebar } from '@/components/navigation/AppSidebar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
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
import { TheNumbersSection } from '@/components/sections/SponsorshipRevenue';
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
      <div className="space-y-20">
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

  const scrollToFirst = () => {
    document.getElementById('the-gap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        {/* Proportional Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.1)_0%,transparent_80%)]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            {savannaLogo && (
              <div className="relative h-20 md:h-24 w-56 md:w-64 mb-4">
                <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" priority />
              </div>
            )}

            <div className="space-y-4">
              <h1 className="flex flex-col items-center leading-[0.85] tracking-tighter">
                <span className="text-brand-gold text-[clamp(3.5rem,15vw,10rem)] font-headline">Savanna</span>
                <span className="text-brand-gold text-[clamp(3.5rem,15vw,10rem)] font-headline">Sundays</span>
              </h1>
              <p className="font-headline text-lg md:text-2xl text-brand-gold/60 tracking-[0.4em] uppercase">The Nairobi Ritual</p>
            </div>
            
            <div className="max-w-2xl space-y-10">
              <p className="font-serif italic text-2xl md:text-4xl text-brand-cream leading-tight">
                One brand. Multiple venues. Every Sunday.
              </p>
              <button onClick={scrollToFirst} className="btn-primary group inline-flex items-center gap-4">
                <span className="font-headline text-xl md:text-2xl tracking-widest uppercase">Explore Strategy</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-2 opacity-30">
            <p className="font-body text-[9px] tracking-[4px] text-brand-text-muted uppercase font-bold">Strategic Prospectus 2024</p>
            <ChevronDown className="text-brand-gold/60 animate-bounce" size={20} />
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
        <div className="py-24 px-6 text-center bg-brand-dark border-t border-white/5 relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <div className="space-y-8">
              <Sparkles className="mx-auto text-brand-gold/60" size={48} />
              <p className="font-serif italic text-3xl md:text-5xl text-brand-cream leading-[1.2] max-w-3xl mx-auto">
                Savanna Sundays is built. The squad is assembled. The venues are mapped. All that’s needed is the green light.
              </p>
            </div>

            <div className="pt-6">
              <a href="mailto:partner@firefly.co.ke" className="btn-primary inline-flex h-20 md:h-24 px-12 md:px-20 items-center gap-6 text-2xl md:text-4xl shadow-2xl hover:scale-105">
                <span>Let&apos;s Own Sunday</span>
                <ArrowRight size={32} />
              </a>
            </div>

            <div className="pt-20 space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 grayscale opacity-40">
                {savannaLogo && <div className="relative h-14 w-44"><Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" /></div>}
                <div className="hidden md:block h-12 w-[1px] bg-white/10" />
                {fireflyLogo && <div className="relative h-10 w-40"><Image src={fireflyLogo.imageUrl} alt="Firefly" fill className="object-contain" /></div>}
              </div>

              <div className="space-y-8 max-w-2xl mx-auto border-t border-white/5 pt-10">
                <p className="font-body text-[10px] text-brand-text-muted uppercase tracking-[4px] font-bold opacity-60">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>
                <div className="space-y-2">
                  <p className="font-body text-[9px] text-[#B8A98A] uppercase tracking-[2px] text-center leading-relaxed">
                    DO NOT FORWARD TO PERSONS UNDER THE AGE OF 18 YEARS. EXCESSIVE ALCOHOL CONSUMPTION IS HARMFUL TO YOUR HEALTH.
                  </p>
                  <p className="font-body text-[9px] text-[#B8A98A] uppercase tracking-[2px] text-center font-bold">
                    NOT FOR SALE TO PERSONS UNDER THE AGE OF 18 YEARS.
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