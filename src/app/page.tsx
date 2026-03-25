"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MobileNav } from '@/components/navigation/MobileNav';
import { MobileProgressBar } from '@/components/navigation/MobileProgressBar';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown } from 'lucide-react';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { CiderFizz } from '@/components/brand/VisualElements';
import { cl } from '@/lib/cloudinary';

import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { TheNumbersSection } from '@/components/sections/TheNumbersSection';
import { WhyFireflySection } from '@/components/sections/WhyFirefly';
import { GrowthRoadmapSection } from '@/components/sections/GrowthRoadmap';
import { DigitalInfrastructureSection } from '@/components/sections/DigitalInfrastructure';
import { TalentMarquee } from '@/components/sections/TalentMarquee';

const sectionsData = [
  { id: 'the-gap', label: '01 — The Opportunity', title: "The Expansion", component: <TheGap /> },
  { id: 'the-engine', label: '02 — The Venue Network', title: 'The Network', component: <DualActivationModel /> },
  { id: 'the-numbers', label: '04 — The Investment', title: 'The Capital', component: <TheNumbersSection /> },
  { id: 'why-firefly', label: '05 — Why Firefly', title: 'The Agency', component: <WhyFireflySection /> },
  { id: 'growth-plan', label: '06 — Growth Plan', title: 'The Roadmap', component: <GrowthRoadmapSection /> },
  { id: 'infrastructure', label: '07 — Infrastructure', title: 'The Intelligence', component: <DigitalInfrastructureSection /> },
];

const closingSentences = [
  "Savanna Sundays is already live.",
  "The Savanna Vybe Squad is on the ground.",
  "The content engine is producing.",
  "The crowd is growing.",
  "Now it's time to take this to every corner of Nairobi — mainstream bars, premium venues, and everything in between.",
  "Thirteen venues.",
  "Three resident DJs.",
  "Five influencers dropping every Sunday at noon.",
  "One brand owning the day.",
  "Let's scale Sunday."
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [closingVisible, setClosingVisible] = useState(false);
  
  const heroRef = useRef<HTMLElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  useAnalyticsTracker();

  useEffect(() => {
    setIsMounted(true);
    
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          heroObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    const closingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setClosingVisible(true);
          closingObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (closingRef.current) closingObserver.observe(closingRef.current);

    return () => {
      heroObserver.disconnect();
      closingObserver.disconnect();
    };
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-brand-green" />;

  const savannaText = "SAVANNA".split("");
  const sundaysText = "SUNDAYS".split("");

  return (
    <div className="relative min-h-screen bg-brand-green text-foreground overflow-x-hidden selection:bg-brand-gold selection:text-brand-green">
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-[0.05] z-0" />
      <MobileNav />
      <MobileProgressBar />
      
      <main>
        {/* Cinematic Hero */}
        <section 
          ref={heroRef}
          id="hero" 
          className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
        >
          <CiderFizz className="opacity-40 z-0" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.15)_0%,transparent_75%)]" />

          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
            {savannaLogo && (
              <img 
                src={cl(savannaLogo.imageUrl, 'q_auto:best,f_auto,dpr_2.0,w_600')} 
                alt="Savanna" 
                className={cn(
                  "reveal-on-scroll logo-shimmer transition-all duration-1000",
                  heroVisible ? "reveal-visible" : "opacity-0 scale-95"
                )}
                style={{ width: 'clamp(160px, 20vw, 280px)', height: 'auto', objectFit: 'contain' }}
                loading="eager"
                fetchPriority="high"
              />
            )}

            <div className="space-y-1">
              <h1 className="flex flex-col items-center leading-[0.95] tracking-tighter" aria-label="SAVANNA SUNDAYS">
                <div className="flex overflow-hidden">
                  {savannaText.map((char, i) => (
                    <span 
                      key={`savanna-${i}`}
                      style={{ transitionDelay: `${i * 30}ms` }}
                      className={cn(
                        "text-brand-gold text-[var(--text-display)] font-headline uppercase inline-block transition-all duration-700 cubic-bezier(0.22, 1, 0.36, 1)",
                        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
                      )}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="flex overflow-hidden">
                  {sundaysText.map((char, i) => (
                    <span 
                      key={`sundays-${i}`}
                      style={{ transitionDelay: `${(i + 7) * 30}ms` }}
                      className={cn(
                        "text-brand-gold text-[var(--text-display)] font-headline uppercase inline-block transition-all duration-700 cubic-bezier(0.22, 1, 0.36, 1)",
                        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
                      )}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </h1>
              <p className={cn(
                "font-body text-brand-gold text-[var(--text-lg)] md:text-[var(--text-xl)] uppercase tracking-[6px] font-bold reveal-on-scroll",
                heroVisible && "reveal-visible"
              )}>
                Already live. Now scaling to Nairobi.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 rounded-full border border-brand-gold animate-pulse-ring" />
              <div className="relative w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center">
                <ChevronDown className="text-brand-gold" size={20} />
              </div>
            </div>
          </div>
        </section>

        {/* Sections 01 & 02 */}
        {sectionsData.slice(0, 2).map((section) => (
          <SectionContainer 
            key={section.id}
            id={section.id}
            label={section.label}
            title={section.title}
          >
            {section.component}
          </SectionContainer>
        ))}

        {/* Section 03 — The Ritual (Full Bleed Talent Marquee) */}
        <div id="the-ritual" className="relative w-full overflow-hidden">
          <TalentMarquee />
          <SectionContainer 
            id="the-ritual-details"
            label="03 — The Ritual"
            title="The Content Flow"
          >
            <ExperienceDesignSection />
          </SectionContainer>
        </div>

        {/* Sections 04 - 07 */}
        {sectionsData.slice(2).map((section) => (
          <SectionContainer 
            key={section.id}
            id={section.id}
            label={section.label}
            title={section.title}
          >
            {section.component}
          </SectionContainer>
        ))}

        {/* Brand Closing */}
        <div 
          ref={closingRef}
          id="closing" 
          className="py-20 px-6 text-center border-t border-white/5 relative overflow-hidden bg-brand-ink"
        >
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <p className="font-serif italic text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-cream leading-snug">
              {closingSentences.map((sentence, i) => (
                <span 
                  key={i}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  className={cn(
                    "reveal-on-scroll inline-block mr-1.5",
                    closingVisible && "reveal-visible"
                  )}
                >
                  {sentence}
                </span>
              ))}
            </p>

            <div className={cn(
              "reveal-on-scroll",
              closingVisible && "reveal-visible"
            )} style={{ transitionDelay: '1200ms' }}>
              <a 
                href="mailto:partner@firefly.co.ke" 
                className="btn-scale-sunday-glow group h-16"
              >
                <div className="relative z-10 flex items-center gap-6 px-12 h-full text-brand-ink">
                  <span className="font-headline text-[var(--text-xl)] tracking-widest uppercase">Scale Sunday</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
