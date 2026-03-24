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
      <div className="space-y-16">
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
      {/* Removed AppSidebar to ensure no fixed navigation bars blocking the view */}
      <MobileNav />
      
      <main className="transition-all">
        {/* Proportional Hero Section */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-background">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.08)_0%,transparent_80%)]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            {savannaLogo && (
              <div className="relative h-24 md:h-32 w-64 md:w-80 mb-2 flex items-center justify-center">
                {/* Visual Tool: Golden Aura to make the logo pop */}
                <div className="absolute inset-0 bg-brand-gold/10 blur-[60px] rounded-full scale-125" />
                <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain relative z-10" priority />
              </div>
            )}

            <div className="space-y-4">
              <h1 className="flex flex-col items-center leading-[0.8] tracking-tighter">
                <span className="text-brand-gold text-[clamp(4rem,18vw,12rem)] font-headline">Savanna</span>
                <span className="text-brand-gold text-[clamp(4rem,18vw,12rem)] font-headline">Sundays</span>
              </h1>
              <p className="font-headline text-xl md:text-3xl text-brand-gold/40 tracking-[0.5em] uppercase">The Nairobi Ritual</p>
            </div>
            
            <div className="max-w-2xl space-y-12">
              <p className="font-serif italic text-2xl md:text-5xl text-brand-cream leading-[1.1]">
                One brand. Multiple venues. Every Sunday.
              </p>
              <button onClick={scrollToFirst} className="btn-primary group inline-flex items-center gap-6">
                <span className="font-headline text-2xl md:text-3xl tracking-widest uppercase">Explore strategy</span>
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 opacity-30">
            <p className="font-body text-[10px] tracking-[5px] text-brand-gold uppercase font-bold">Strategic prospectus 2024</p>
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
        <div className="py-24 px-6 text-center bg-background border-t border-white/5 relative overflow-hidden flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <div className="space-y-8">
              <Sparkles className="mx-auto text-brand-gold/60" size={56} />
              <p className="font-serif italic text-3xl md:text-6xl text-brand-cream leading-[1.1] max-w-4xl mx-auto">
                Savanna Sundays is built. The squad is assembled. The venues are mapped. All that’s needed is the green light.
              </p>
            </div>

            <div className="pt-8">
              <a href="mailto:partner@firefly.co.ke" className="btn-primary inline-flex h-20 md:h-28 px-12 md:px-24 items-center gap-8 text-2xl md:text-5xl shadow-2xl hover:scale-105 transition-all">
                <span>Let&apos;s own Sunday</span>
                <ArrowRight size={40} />
              </a>
            </div>

            <div className="pt-24 space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-16 grayscale opacity-50">
                {savannaLogo && <div className="relative h-16 w-52"><Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" /></div>}
                <div className="hidden md:block h-16 w-[1px] bg-white/10" />
                {fireflyLogo && <div className="relative h-12 w-48"><Image src={fireflyLogo.imageUrl} alt="Firefly" fill className="object-contain" /></div>}
              </div>

              <div className="space-y-10 max-w-3xl mx-auto border-t border-white/10 pt-12">
                <p className="font-body text-[11px] text-brand-gold/40 uppercase tracking-[5px] font-bold">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>
                <div className="space-y-4">
                  <p className="font-body text-[10px] text-brand-gold/30 uppercase tracking-[3px] text-center leading-relaxed">
                    Do not forward to persons under the age of 18 years. Excessive alcohol consumption is harmful to your health.
                  </p>
                  <p className="font-body text-[10px] text-brand-gold/60 uppercase tracking-[3px] text-center font-bold">
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
