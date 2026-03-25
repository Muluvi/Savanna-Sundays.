
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MobileNav } from '@/components/navigation/MobileNav';
import { MobileProgressBar } from '@/components/navigation/MobileProgressBar';
import { AppSidebar } from '@/components/navigation/AppSidebar';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
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
      { threshold: 0.1 }
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
        {/* Cinematic Hero Section - High Fidelity Upgrade */}
        <section 
          id="hero" 
          className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 md:py-20 overflow-hidden bg-brand-green"
        >
          {/* Enhanced Visual Layers */}
          <CiderFizz className="opacity-50 z-0" />
          <WaterDroplets className="opacity-20 z-0" />
          
          {/* Dynamic Light Spot for Logo Pop */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(244,197,66,0.22)_0%,transparent_60%)] z-0" />

          {/* Monumental Logo Reveal */}
          <div className={cn(
            "relative z-10 transition-all duration-[1800ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform",
            heroVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-12 scale-90"
          )}>
            {savannaLogo && (
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] rounded-full group-hover:bg-brand-gold/20 transition-all duration-1000" />
                <img 
                  src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_1200')} 
                  alt="Savanna" 
                  className="logo-shimmer drop-shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative z-10"
                  style={{ width: 'clamp(240px, 32vw, 480px)', height: 'auto', objectFit: 'contain' }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            )}
          </div>

          {/* High-Stakes Headline Stack */}
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
            <h1 className="flex flex-col items-center leading-[0.82] tracking-tighter">
              <span className={cn(
                "text-brand-gold text-[clamp(4rem,16vw,12rem)] font-headline uppercase block transition-all duration-[1500ms] delay-[400ms] text-glow-gold will-change-transform",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
              )}>SAVANNA</span>
              <span className={cn(
                "text-brand-gold text-[clamp(4rem,16vw,12rem)] font-headline uppercase block transition-all duration-[1500ms] delay-[600ms] text-glow-gold will-change-transform",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
              )}>SUNDAYS</span>
            </h1>
            
            <div className={cn(
              "mt-8 md:mt-10 space-y-6 transition-all duration-1200 delay-[1200ms]",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-brand-gold/40" />
                  <p className="font-body text-brand-gold text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase tracking-[5px] font-bold">
                    Already live. Now scaling Nairobi.
                  </p>
                  <div className="h-[1px] w-8 bg-brand-gold/40" />
                </div>
              </div>
              
              <div className="flex justify-center pt-4">
                 <button 
                  onClick={() => document.getElementById('the-gap')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-brand-gold/30 flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(244,197,66,0.3)] cursor-pointer group hover:bg-brand-gold/20 hover:border-brand-gold transition-all duration-500"
                 >
                    <ChevronDown className="text-brand-gold group-hover:scale-125 transition-transform" size={32} />
                 </button>
              </div>
            </div>
          </div>

          {/* Premium Footer Attribution - Increased Firefly Logo Size */}
          <div className={cn(
            "relative z-10 flex flex-col items-center gap-6 md:gap-10 transition-all duration-1500 delay-[1400ms]",
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <Sparkles size={14} className="text-brand-gold/40 animate-pulse" />
                <span className="font-body text-[10px] tracking-[5px] text-brand-gold uppercase font-bold opacity-60">Presented by</span>
                <Sparkles size={14} className="text-brand-gold/40 animate-pulse" />
              </div>
              <div className="flex items-center gap-8 md:gap-14">
                <div className="h-[1px] w-16 md:w-48 bg-brand-gold/20" />
                {fireflyLogo && (
                  <img 
                    src={cl(fireflyLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_1200')} 
                    alt="Firefly Management" 
                    className="logo-shimmer hover:scale-110 transition-all duration-1000 drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] brightness-125"
                    style={{ height: 'clamp(180px, 22vh, 280px)', width: 'auto', objectFit: 'contain' }}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                )}
                <div className="h-[1px] w-16 md:w-48 bg-brand-gold/20" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <LeadCapture />
            <StrategicAdvisor />
          </div>
        </SectionContainer>

        {/* Cinematic Closing */}
        <div ref={closingRef} id="closing" className="py-20 md:py-32 px-6 text-center border-t border-white/5 relative overflow-hidden bg-[#0A140B]">
          <CiderFizz className="opacity-[0.05]" />
          <div className="max-w-4xl mx-auto space-y-14 md:space-y-20 relative z-10">
            <p className="font-serif italic text-[var(--text-lg)] md:text-[var(--text-2xl)] text-brand-cream/90 leading-relaxed max-w-2xl mx-auto">
              {closingSentences.map((sentence, i) => (
                <span key={i} style={{ transitionDelay: `${i * 120}ms` }} className={cn("reveal-on-scroll inline-block mr-2 mb-2", closingVisible && "reveal-visible")}>
                  {sentence}
                </span>
              ))}
            </p>
            <div className={cn("reveal-on-scroll", closingVisible && "reveal-visible")} style={{ transitionDelay: '1400ms' }}>
              <a href="mailto:partner@firefly.co.ke" className="btn-scale-sunday-glow group h-16 md:h-20">
                <div className="relative z-10 flex items-center gap-6 md:gap-8 px-10 md:px-14 h-full text-brand-ink">
                  <span className="font-headline text-[var(--text-lg)] md:text-[var(--text-xl)] tracking-widest uppercase">Scale Sunday</span>
                  <ArrowRight className="group-hover:translate-x-4 transition-transform" size={24} />
                </div>
              </a>
            </div>
            
            <div className={cn("reveal-on-scroll pt-16 md:pt-24", closingVisible && "reveal-visible")} style={{ transitionDelay: '1600ms' }}>
               {fireflyLogo && (
                  <img 
                    src={cl(fireflyLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_1200')} 
                    alt="Firefly Management" 
                    className="mx-auto brightness-125 drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)] opacity-95 hover:scale-110 transition-all duration-1000"
                    style={{ height: '160px', width: 'auto', objectFit: 'contain' }}
                  />
                )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
