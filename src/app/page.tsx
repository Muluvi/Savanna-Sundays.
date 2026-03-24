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

const sectionsData = [
  { 
    id: 'the-gap', 
    label: '01 — THE OPPORTUNITY', 
    title: "THE SUNDAY OPPORTUNITY", 
    variant: 'cream' as const, 
    component: <TheGap /> 
  },
  { 
    id: 'the-concept', 
    label: '02 — HOW IT WORKS', 
    title: 'HOW IT WORKS', 
    variant: 'alt' as const, 
    component: <DualActivationModel /> 
  },
  { 
    id: 'the-experience', 
    label: '03 — THE EXPERIENCE', 
    title: 'THE SAVANNA EXPERIENCE', 
    variant: 'dark' as const, 
    component: (
      <div className="space-y-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <p className="font-serif italic text-3xl md:text-5xl text-brand-gold leading-tight blur-in">
            “When the squad arrives, the venue transforms.”
          </p>
          <p className="font-body text-lg md:text-xl text-brand-cream/70 leading-relaxed max-w-3xl mx-auto">
            Every squad venue gets the full treatment — from branded glassware on the tables to a neon Savanna Sundays sign behind the DJ booth. Every partner venue carries the brand on every surface.
          </p>
        </div>
        <VisualIdentitySection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <ExperienceDesignSection />
      </div>
    ) 
  },
  { 
    id: 'the-content-engine', 
    label: '04 — THE CONTENT ENGINE', 
    title: 'CONTENT THAT WORKS HARD', 
    variant: 'alt' as const, 
    component: <ContentSocialSection />
  },
  { 
    id: 'building-the-crowd', 
    label: '05 — BUILDING THE CROWD', 
    title: 'BUILDING THE CROWD', 
    variant: 'dark' as const, 
    component: <BuildingTheCrowd />
  },
  { 
    id: 'the-numbers', 
    label: '06 — THE NUMBERS', 
    title: 'THE NUMBERS', 
    variant: 'alt' as const, 
    component: <TheNumbersSection />
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const fireflyLogo = PlaceHolderImages.find(p => p.id === 'firefly-logo');
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  useAnalyticsTracker();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection1 = () => {
    const el = document.getElementById('the-gap');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#1A1208]" />;
  }

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        {/* Cinematic Hero */}
        <section id="hero" className="relative min-h-screen flex flex-col px-6 py-20 overflow-hidden justify-center items-center border-b border-white/5 bg-[#1A1208]">
          <div 
            className="absolute inset-0 pointer-events-none opacity-40" 
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(244,197,66,0.15) 0%, transparent 80%)'
            }} 
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
            <div className="space-y-16 text-center w-full">
              {savannaLogo && (
                <div className="relative h-28 md:h-40 w-full max-w-[320px] mx-auto animate-float">
                  <Image 
                    src={savannaLogo.imageUrl} 
                    alt="Savanna Premium Cider" 
                    fill 
                    className="object-contain drop-shadow-[0_0_30px_rgba(244,197,66,0.2)]"
                    priority
                  />
                </div>
              )}

              <div className="space-y-4">
                <h1 className="leading-[0.8] blur-in">
                  <span className="block text-[#F4C542] text-[clamp(70px,18vw,220px)] font-headline tracking-tighter filter drop-shadow-[0_0_60px_rgba(244,197,66,0.4)]">
                    SAVANNA
                  </span>
                  <span className="block text-[#F4C542] text-[clamp(70px,18vw,220px)] font-headline tracking-tighter filter drop-shadow-[0_0_60px_rgba(244,197,66,0.4)]">
                    SUNDAYS
                  </span>
                </h1>
                
                <div className="flex items-center justify-center gap-4 opacity-0 animate-in fade-in duration-1000 delay-700 fill-mode-forwards">
                  <div className="h-[1px] w-12 bg-brand-gold/40" />
                  <p className="font-headline text-2xl md:text-4xl text-brand-gold tracking-[0.2em]">NAIROBI EDITION</p>
                  <div className="h-[1px] w-12 bg-brand-gold/40" />
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-10 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-forwards">
                <div className="space-y-6">
                  <p className="font-serif text-2xl md:text-4xl text-[#F8F5E6] tracking-tight leading-tight">
                    Multiple venues. One squad. Every Sunday.
                  </p>
                  <p className="font-body text-lg md:text-xl text-[#B8A98A] max-w-2xl mx-auto leading-relaxed">
                    A premium weekly lifestyle activation by Savanna Premium Cider — owning the Nairobi Sunday ritual.
                  </p>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={scrollToSection1}
                    className="btn-primary group"
                  >
                    <span className="flex items-center gap-4">
                      Explore the Concept <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40 animate-in fade-in duration-1000 delay-[1500ms]">
            <div className="text-center space-y-2">
              <p className="font-body text-[10px] tracking-[5px] text-[#B8A98A] uppercase font-bold">PREPARED BY FIREFLY MANAGEMENT</p>
              <p className="font-body text-[10px] tracking-[5px] text-[#B8A98A] uppercase font-bold">STAKEHOLDER CONFIDENTIAL</p>
            </div>
            <div className="animate-bounce">
              <ChevronDown className="text-brand-gold" size={24} />
            </div>
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
        <div className="py-40 px-6 text-center bg-brand-dark border-t border-white/5 relative overflow-hidden">
          <div className="max-w-5xl mx-auto space-y-16 relative z-10">
            <div className="space-y-8">
              <Sparkles className="mx-auto text-brand-gold animate-pulse" size={48} />
              <p className="font-serif italic text-3xl md:text-6xl text-brand-cream leading-tight max-w-4xl mx-auto">
                "Multiple venues, one squad, every Sunday. All that’s needed is the green light."
              </p>
            </div>

            <div className="pt-12">
              <a 
                href="mailto:partner@firefly.co.ke" 
                className="btn-primary inline-flex h-20 px-20 items-center gap-8 text-2xl md:text-4xl shadow-[0_30px_70px_rgba(244,197,66,0.3)]"
              >
                <span>LET&apos;S OWN SUNDAY</span>
                <ArrowRight size={32} />
              </a>
            </div>

            <div className="pt-24 space-y-16">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                {savannaLogo && (
                  <div className="relative h-20 w-56 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <Image 
                      src={savannaLogo.imageUrl} 
                      alt="Savanna Premium Cider" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="hidden md:block h-16 w-[1px] bg-white/10" />
                {fireflyLogo && (
                  <div className="relative h-14 w-48 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <Image 
                      src={fireflyLogo.imageUrl} 
                      alt="Firefly Management" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-10 max-w-4xl mx-auto">
                <p className="font-body text-[11px] md:text-xs text-brand-text-muted uppercase tracking-[4px] font-bold opacity-60">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL) — Savanna Premium Cider
                </p>

                <div className="pt-10 border-t border-white/5">
                  <p className="font-body text-[10px] text-[#B8A98A] uppercase tracking-[2px] text-center leading-relaxed max-w-3xl mx-auto opacity-40">
                    DO NOT FORWARD TO PERSONS UNDER THE AGE OF 18 YEARS. EXCESSIVE ALCOHOL CONSUMPTION IS HARMFUL TO YOUR HEALTH. NOT FOR SALE TO PERSONS UNDER THE AGE OF 18 YEARS.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at 50% 100%, rgba(244,197,66,0.1) 0%, transparent 70%)'
          }} />
        </div>
      </main>
    </div>
  );
}