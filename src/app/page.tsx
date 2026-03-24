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
    label: '01 — THE OPPORTUNITY', 
    title: "THE GAP", 
    variant: 'dark' as const, 
    component: <TheGap /> 
  },
  { 
    id: 'the-engine', 
    label: '02 — THE ENGINE', 
    title: 'THE DUAL MODEL', 
    variant: 'alt' as const, 
    component: <DualActivationModel /> 
  },
  { 
    id: 'the-ritual', 
    label: '03 — THE RITUAL', 
    title: 'THE EXPERIENCE', 
    variant: 'dark' as const, 
    component: (
      <div className="space-y-32">
        <VisualIdentitySection />
        <MusicProgrammingSection />
        <ExperienceDesignSection />
      </div>
    ) 
  },
  { 
    id: 'the-harvest', 
    label: '04 — THE HARVEST', 
    title: 'THE CONTENT ENGINE', 
    variant: 'alt' as const, 
    component: <ContentSocialSection />
  },
  { 
    id: 'the-community', 
    label: '05 — THE COMMUNITY', 
    title: 'THE GROWTH FLYWHEEL', 
    variant: 'dark' as const, 
    component: <BuildingTheCrowd />
  },
  { 
    id: 'the-numbers', 
    label: '06 — THE INVESTMENT', 
    title: 'THE NUMBERS', 
    variant: 'alt' as const, 
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
        {/* Cinematic Hero */}
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-[#1A1208] snap-start">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.15)_0%,transparent_80%)]" />

          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-16 text-center">
            {savannaLogo && (
              <div className="relative h-24 md:h-32 w-64 md:w-80">
                <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" priority />
              </div>
            )}

            <div className="space-y-6">
              <h1 className="flex flex-col items-center leading-[0.8]">
                <span className="text-brand-gold text-[clamp(4rem,18vw,14rem)] font-headline tracking-tighter">SAVANNA</span>
                <span className="text-brand-gold text-[clamp(4rem,18vw,14rem)] font-headline tracking-tighter">SUNDAYS</span>
              </h1>
              <p className="font-headline text-2xl md:text-4xl text-brand-gold tracking-[0.5em] uppercase">Nairobi Ritual</p>
            </div>
            
            <div className="max-w-2xl space-y-12">
              <p className="font-serif italic text-3xl md:text-5xl text-brand-cream leading-tight">
                One brand. Multiple venues. Every Sunday.
              </p>
              <button onClick={scrollToFirst} className="btn-primary group inline-flex items-center gap-6">
                <span className="font-headline text-2xl md:text-3xl tracking-widest uppercase">Explore Strategy</span>
                <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-4 opacity-40">
            <p className="font-body text-[10px] tracking-[5px] text-brand-text-muted uppercase font-bold">Firefly Strategic Prospectus</p>
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
        <div className="py-40 px-6 text-center bg-brand-dark border-t border-white/10 relative overflow-hidden snap-start min-h-screen flex flex-col justify-center">
          <div className="max-w-5xl mx-auto space-y-24 relative z-10">
            <div className="space-y-12">
              <Sparkles className="mx-auto text-brand-gold animate-pulse" size={80} />
              <p className="font-serif italic text-4xl md:text-8xl text-brand-cream leading-[1.1] max-w-5xl mx-auto">
                "The ritual is ready. All that’s needed is the green light."
              </p>
            </div>

            <div className="pt-12">
              <a href="mailto:partner@firefly.co.ke" className="btn-primary inline-flex h-24 md:h-32 px-16 md:px-32 items-center gap-10 text-3xl md:text-6xl shadow-[0_40px_100px_rgba(244,197,66,0.4)] hover:scale-105">
                <span>LET&apos;S OWN SUNDAY</span>
                <ArrowRight size={56} />
              </a>
            </div>

            <div className="pt-32 space-y-20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 grayscale opacity-50">
                {savannaLogo && <div className="relative h-20 w-64"><Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" /></div>}
                <div className="hidden md:block h-24 w-[1px] bg-white/20" />
                {fireflyLogo && <div className="relative h-16 w-56"><Image src={fireflyLogo.imageUrl} alt="Firefly" fill className="object-contain" /></div>}
              </div>

              <div className="space-y-12 max-w-4xl mx-auto">
                <p className="font-body text-[11px] text-brand-text-muted uppercase tracking-[6px] font-bold opacity-70">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL)
                </p>
                <div className="pt-12 border-t border-white/10">
                  <p className="font-body text-[10px] text-[#B8A98A] uppercase tracking-[3px] text-center leading-relaxed font-bold">
                    DO NOT FORWARD TO PERSONS UNDER THE AGE OF 18 YEARS. EXCESSIVE ALCOHOL CONSUMPTION IS HARMFUL TO YOUR HEALTH.
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
