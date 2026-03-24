'use client';

import { useState, useEffect } from 'react';
import { AppSidebar } from '@/components/navigation/AppSidebar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
    label: '01 — THE GAP', 
    title: "THE SUNDAY OPPORTUNITY", 
    variant: 'dark' as const, 
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
      <div className="space-y-12">
        <p className="font-body text-lg text-[#B8A98A] italic text-center max-w-2xl mx-auto -mt-4 mb-8">
          Every venue gets the full brand treatment. Every Sunday.
        </p>
        <VisualIdentitySection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
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
  const logo = PlaceHolderImages.find(p => p.id === 'firefly-logo');
  useAnalyticsTracker();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection1 = () => {
    const el = document.getElementById('the-gap');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch by waiting for mount
  }

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        <section id="hero" className="relative min-h-screen flex flex-col px-6 py-12 overflow-hidden justify-center border-b border-white/5 bg-[#1A1208]">
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: 'radial-gradient(circle at 40% 50%, rgba(244,197,66,0.12) 0%, transparent 70%), radial-gradient(circle at 80% 80%, rgba(232,135,58,0.08) 0%, transparent 60%)'
            }} 
          />

          <div className="flex flex-col items-center justify-center text-center relative z-10">
            <div className="max-w-6xl mx-auto w-full">
              <h1 className="leading-[0.85] mb-6 blur-in">
                <span 
                  className="block text-[#F4C542] text-[clamp(60px,15vw,160px)] font-headline tracking-tighter"
                  style={{ textShadow: '0 0 40px rgba(244,197,66,0.35)' }}
                >
                  SAVANNA
                </span>
                <span 
                  className="block text-[#F4C542] text-[clamp(60px,15vw,160px)] font-headline tracking-tighter"
                  style={{ textShadow: '0 0 40px rgba(244,197,66,0.35)' }}
                >
                  SUNDAYS
                </span>
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-6 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
                <div className="space-y-4">
                  <p className="font-serif text-xl md:text-3xl text-[#F8F5E6] tracking-wide">
                    Multiple venues. One squad. Every Sunday.
                  </p>
                  <p className="font-serif italic text-base md:text-lg text-[#B8A98A]">
                    A weekly brand activation by Savanna Premium Cider — every Sunday, every venue, every crowd.
                  </p>
                </div>

                <div className="pt-8">
                  <button 
                    onClick={scrollToSection1}
                    className="bg-[#F4C542] text-[#1A1208] px-10 py-4 rounded-full font-headline text-xl tracking-widest hover:bg-[#E8873A] hover:scale-105 transition-all duration-300 shadow-2xl active:scale-95"
                  >
                    Explore the Concept →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col items-center mt-20 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-forwards">
            <div className="w-8 h-[1px] bg-brand-gold/20 mb-6" />
            <div className="text-center space-y-1">
              <p className="font-body text-[10px] tracking-[3px] text-[#B8A98A] uppercase font-bold">Prepared by Firefly Management</p>
              <p className="font-body text-[10px] tracking-[3px] text-[#B8A98A] uppercase font-bold">Prepared for Kenya Wine Agencies Limited (KWAL)</p>
            </div>
            <div className="mt-8 animate-bounce opacity-20">
              <ChevronDown className="text-[#F4C542]" size={20} />
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

        {/* Closing Block */}
        <div className="py-24 px-6 text-center space-y-12 bg-brand-dark border-t border-white/5 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <p className="font-serif italic text-2xl md:text-3xl text-brand-cream leading-relaxed">
              "Savanna Sundays is ready to run.<br className="hidden md:block" />
              The squad is assembled. The network is scaled. The engine is built.<br className="hidden md:block" />
              All that's needed is the signal to go."
            </p>
            <p className="font-body text-xs md:text-sm text-brand-text-muted uppercase tracking-[3px] font-bold">
              Firefly Management — NextGen Mall, Mombasa Road, Nairobi
            </p>
          </div>

          <div className="pt-4 relative z-10">
            <a 
              href="mailto:partner@firefly.co.ke" 
              className={cn(
                "inline-flex items-center gap-4 bg-[#F4C542] text-[#1A1208] px-12 py-5 rounded-full font-headline",
                "text-2xl tracking-widest hover:bg-[#E8873A] hover:scale-105 transition-all duration-300",
                "shadow-2xl active:scale-95 group"
              )}
            >
              <span>Let&apos;s Own Sunday</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="pt-24 opacity-30 relative z-10 flex flex-col items-center gap-6">
            {logo && (
              <div className="relative h-[60px] w-[200px]">
                <Image 
                  src={logo.imageUrl} 
                  alt="Firefly Management" 
                  fill 
                  className="object-contain"
                />
              </div>
            )}
            <p className="font-body text-[10px] md:text-[11px] text-brand-text-muted uppercase tracking-[2px] font-bold">
              Prepared by Firefly Management for Kenya Wine Agencies Limited (KWAL) — Savanna Premium Cider
            </p>
          </div>
          
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at 50% 100%, rgba(244,197,66,0.05) 0%, transparent 70%)'
          }} />
        </div>
      </main>
    </div>
  );
}
