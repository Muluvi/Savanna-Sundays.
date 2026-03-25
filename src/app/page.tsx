"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MobileNav } from '@/components/navigation/MobileNav';
import { MobileProgressBar } from '@/components/navigation/MobileProgressBar';
import { AppSidebar } from '@/components/navigation/AppSidebar';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { CiderFizz, WaterDroplets } from '@/components/brand/VisualElements';
import { cl } from '@/lib/cloudinary';

import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { TheNumbersSection } from '@/components/sections/TheNumbersSection';
import { TalentMarquee } from '@/components/sections/TalentMarquee';
import { Tier1Marquee, Tier2Marquee } from '@/components/sections/VenueMarquee';
import { InfluencerLineup } from '@/components/sections/InfluencerLineup';
import { LeadCapture } from '@/components/sections/LeadCapture';
import { StrategicAdvisor } from '@/components/ai/StrategicAdvisor';

const closingSentences = [
  "Savanna Sundays is already live.",
  "The Savanna Vybe Squad is on the ground.",
  "The content engine is producing.",
  "The crowd is growing.",
  "Now it's time to take this to every corner of Nairobi.",
  "Thirteen venues.",
  "Three resident DJs.",
  "One brand owning the day.",
  "Let's scale Sunday."
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [closingVisible, setClosingVisible] = useState(false);
  
  const closingRef = useRef<HTMLDivElement>(null);
  
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const fireflyLogo = PlaceHolderImages.find(p => p.id === 'firefly-logo');
  
  useAnalyticsTracker();

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setHeroVisible(true), 150);

    const closingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClosingVisible(true);
          closingObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (closingRef.current) closingObserver.observe(closingRef.current);

    return () => {
      closingObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-brand-green" />;

  return (
    <div className="relative min-h-screen bg-brand-green text-foreground overflow-x-hidden selection:bg-brand-gold selection:text-brand-green">
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-[0.05] z-0" />
      <MobileNav />
      <AppSidebar />
      <MobileProgressBar />
      
      <main className="md:pl-64">
        {/* Cinematic Hero Section */}
        <section 
          id="hero" 
          className="relative h-screen flex flex-col justify-between items-center px-6 py-16 overflow-hidden bg-brand-green"
        >
          {/* Visual Layers */}
          <CiderFizz className="opacity-50 z-0" />
          <WaterDroplets className="opacity-20 z-0" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(244,197,66,0.22)_0%,transparent_75%)]" />

          {/* Logo Reveal */}
          <div className={cn(
            "relative z-10 transition-all duration-[1500ms] ease-out",
            heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-12 scale-95"
          )}>
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_600')} 
                alt="Savanna" 
                className="logo-shimmer drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                style={{ width: 'clamp(180px, 20vw, 300px)', height: 'auto', objectFit: 'contain' }}
                loading="eager"
                fetchPriority="high"
              />
            )}
          </div>

          {/* Headline Stack */}
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
            <h1 className="flex flex-col items-center leading-[0.82] tracking-tighter">
              <span className={cn(
                "text-brand-gold text-[clamp(4.5rem,18vw,14rem)] font-headline uppercase block transition-all duration-[1400ms] delay-300 text-glow-gold",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
              )}>SAVANNA</span>
              <span className={cn(
                "text-brand-gold text-[clamp(4.5rem,18vw,14rem)] font-headline uppercase block transition-all duration-[1400ms] delay-500 text-glow-gold",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
              )}>SUNDAYS</span>
            </h1>
            
            <div className={cn(
              "mt-10 space-y-6 transition-all duration-1000 delay-1000",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="space-y-2">
                <p className="font-body text-brand-gold text-[var(--text-base)] uppercase tracking-[4px] font-bold">
                  Already live. Now scaling.
                </p>
                <div className="h-[1px] w-12 bg-brand-gold/30 mx-auto" />
              </div>
              
              <div className="flex justify-center pt-8">
                 <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(244,197,66,0.25)] cursor-pointer group hover:bg-brand-gold/10 transition-colors" onClick={() => document.getElementById('the-gap')?.scrollIntoView({ behavior: 'smooth' })}>
                    <ChevronDown className="text-brand-gold group-hover:scale-110 transition-transform" size={28} />
                 </div>
              </div>
            </div>
          </div>

          {/* Footer Attribution */}
          <div className={cn(
            "relative z-10 flex flex-col items-center gap-8 transition-all duration-1200 delay-[1200ms]",
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="flex flex-col items-center gap-6">
              <span className="font-body text-[var(--text-lg)] tracking-[4px] text-brand-gold uppercase font-bold opacity-80">Presented by</span>
              <div className="flex items-center gap-10">
                <div className="h-[1px] w-16 bg-brand-gold/20" />
                {fireflyLogo && (
                  <img 
                    src={cl(fireflyLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_800')} 
                    alt="Firefly Management" 
                    className="opacity-100 hover:scale-110 transition-all duration-700 drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
                    style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
                  />
                )}
                <div className="h-[1px] w-16 bg-brand-gold/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 01 — The Opportunity */}
        <SectionContainer id="the-gap" label="01 — The Opportunity" title="The Expansion">
          <TheGap />
        </SectionContainer>

        {/* Section 02 — The Venue Network */}
        <div id="the-engine" className="relative w-full">
          <SectionContainer id="the-engine-details" label="02 — The Venue Network" title="The Network">
            <DualActivationModel />
          </SectionContainer>
          <Tier1Marquee />
          <Tier2Marquee />
        </div>

        {/* Section 03 — The Ritual */}
        <div id="the-ritual" className="relative w-full">
          <TalentMarquee />
          <InfluencerLineup />
          <SectionContainer id="the-ritual-details" label="03 — The Ritual" title="The Content Flow">
            <ExperienceDesignSection />
          </SectionContainer>
        </div>

        {/* Section 04 — The Investment */}
        <SectionContainer id="the-numbers" label="04 — The Investment" title="The Capital">
          <TheNumbersSection />
        </SectionContainer>

        {/* Section 05 — The Partnership */}
        <SectionContainer id="the-partnership" label="05 — The Partnership" title="Next Steps">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <LeadCapture />
            <StrategicAdvisor />
          </div>
        </SectionContainer>

        {/* Closing */}
        <div ref={closingRef} id="closing" className="py-40 px-6 text-center border-t border-white/5 relative overflow-hidden bg-[#0A140B]">
          <CiderFizz className="opacity-[0.05]" />
          <div className="max-w-4xl mx-auto space-y-20 relative z-10">
            <p className="font-serif italic text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-cream leading-snug">
              {closingSentences.map((sentence, i) => (
                <span key={i} style={{ transitionDelay: `${i * 120}ms` }} className={cn("reveal-on-scroll inline-block mr-2 mb-2", closingVisible && "reveal-visible")}>
                  {sentence}
                </span>
              ))}
            </p>
            <div className={cn("reveal-on-scroll", closingVisible && "reveal-visible")} style={{ transitionDelay: '1400ms' }}>
              <a href="mailto:partner@firefly.co.ke" className="btn-scale-sunday-glow group h-24">
                <div className="relative z-10 flex items-center gap-10 px-20 h-full text-brand-ink">
                  <span className="font-headline text-[var(--text-2xl)] tracking-widest uppercase">Scale Sunday</span>
                  <ArrowRight className="group-hover:translate-x-4 transition-transform" size={32} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
