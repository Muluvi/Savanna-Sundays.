'use client';

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

  const scrollToFirst = () => {
    document.getElementById('the-gap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-background">
      <MobileNav />
      
      <main className="transition-all">
        {/* Proportional Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-background">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.08)_0%,transparent_80%)]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
            {savannaLogo && (
              <div className="relative h-20 md:h-28 w-56 md:w-72 mb-2 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-gold/10 blur-[60px] rounded-full scale-125" />
                <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain relative z-10" priority />
              </div>
            )}

            <div className="space-y-3">
              <h1 className="flex flex-col items-center leading-[0.8] tracking-tighter">
                <span className="text-brand-gold text-[clamp(4rem,18vw,11rem)] font-headline">Savanna</span>
                <span className="text-brand-gold text-[clamp(4rem,18vw,11rem)] font-headline">Sundays</span>
              </h1>
              <p className="font-headline text-lg md:text-2xl text-brand-gold/40 tracking-[0.4em] uppercase">The Nairobi Ritual</p>
            </div>
            
            <div className="max-w-xl space-y-10">
              <p className="font-serif italic text-xl md:text-4xl text-brand-cream leading-[1.1]">
                One brand. Multiple venues. Every Sunday.
              </p>
              <button onClick={scrollToFirst} className="btn-primary group inline-flex items-center gap-4">
                <span className="font-headline text-xl md:text-2xl tracking-widest uppercase">Explore strategy</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-2 opacity-30">
            <p className="font-body text-[10px] tracking-[4px] text-brand-gold uppercase font-bold">Strategic prospectus 2024</p>
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
        <div className="py-20 px-6 text-center bg-background border-t border-white/5 relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="space-y-6">
              <Sparkles className="mx-auto text-brand-gold/60" size={48} />
              <p className="font-serif italic text-2xl md:text-5xl text-brand-cream leading-[1.1] max-w-3xl mx-auto">
                Savanna Sundays is built. The squad is assembled. The venues are mapped. All that’s needed is the green light.
              </p>
            </div>

            <div className="pt-4">
              <a href="mailto:partner@firefly.co.ke" className="btn-primary inline-flex h-16 md:h-24 px-10 md:px-20 items-center gap-6 text-xl md:text-4xl shadow-2xl hover:scale-105 transition-all">
                <span>Let&apos;s own Sunday</span>
                <ArrowRight size={32} />
              </a>
            </div>

            <div className="pt-16 space-y-10">
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
