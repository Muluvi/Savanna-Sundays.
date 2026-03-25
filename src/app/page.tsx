"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MobileNav } from '@/components/navigation/MobileNav';
import { MobileProgressBar } from '@/components/navigation/MobileProgressBar';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { ChevronDown } from 'lucide-react';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { TheNumbersSection } from '@/components/sections/TheNumbersSection';
import { MusicProgrammingSection } from '@/components/sections/MusicProgramming';

const sectionsData = [
  { id: 'the-gap', label: '01 The Opportunity', title: "The Expansion", component: <TheGap /> },
  { id: 'the-engine', label: '02 The Venue Network', title: 'The Network', component: <DualActivationModel /> },
  { id: 'the-ritual', label: '03 The Ritual', title: 'The Vybe', component: (
    <div className="space-y-12">
      <MusicProgrammingSection />
      <ExperienceDesignSection />
    </div>
  ) },
  { id: 'the-numbers', label: '04 The Investment', title: 'The Capital', component: <TheNumbersSection /> },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  useAnalyticsTracker();

  useEffect(() => {
    setIsMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
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
        {/* Cinematic Hero - Expansion Mandate */}
        <section 
          ref={heroRef}
          id="hero" 
          className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(244,197,66,0.15)_0%,transparent_75%)]" />

          <div className={cn(
            "relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-4 text-center"
          )}>
            {savannaLogo && (
              <div className={cn(
                "relative h-40 md:h-[280px] w-full max-w-[500px] flex items-center justify-center reveal-on-scroll",
                heroVisible && "reveal-visible"
              )}>
                <Image 
                  src={savannaLogo.imageUrl} 
                  alt="Savanna Premium Cider" 
                  fill 
                  className="object-contain" 
                  priority 
                />
              </div>
            )}

            <div className="space-y-1">
              <h1 
                className="flex flex-col items-center leading-[0.95] tracking-tighter"
                aria-label="SAVANNA SUNDAYS"
              >
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
            
            <div className={cn(
              "max-w-3xl border-t border-brand-gold/20 pt-6 reveal-on-scroll",
              heroVisible && "reveal-visible"
            )}>
              <p className="font-body text-brand-cream text-[var(--text-sm)] md:text-[var(--text-base)] uppercase tracking-[1px] font-bold leading-relaxed opacity-80">
                The Savanna Vybe Squad is already on the ground. The movement is real. Now we&apos;re taking it to mainstream venues, premium spots, and a city-wide audience.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-3 animate-bounce">
            <p className="font-body text-[var(--text-xs)] text-brand-gold tracking-[0.5em] uppercase font-bold opacity-60">
              Presented by Firefly Management
            </p>
            <ChevronDown className="text-brand-gold" size={20} />
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

        {/* Brand Closing - The Scale Mandate */}
        <div id="closing" className="py-20 px-6 text-center border-t border-white/5 relative overflow-hidden bg-brand-ink">
          <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <p className="font-serif italic text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-cream leading-snug">
              Savanna Sundays is already live. The Savanna Vybe Squad is on the ground. The content engine is producing. The crowd is growing. Now it&apos;s time to take this to every corner of Nairobi — mainstream bars, premium venues, and everything in between. Thirteen venues. Three resident DJs. Five influencers dropping every Sunday at noon. One brand owning the day. Let&apos;s scale Sunday.
            </p>

            <a 
              href="mailto:partner@firefly.co.ke" 
              className="btn-primary inline-flex h-16 px-12 items-center gap-6 group"
              suppressHydrationWarning
            >
              <span className="font-headline text-[var(--text-xl)] tracking-widest uppercase">Scale Sunday</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>

            <div className="pt-16 space-y-8 flex flex-col items-center">
              <div className="flex items-center gap-10">
                {savannaLogo && (
                  <div className="relative h-14 w-40">
                    <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" />
                  </div>
                )}
                <div className="h-10 w-[1px] bg-white/10" />
                <p className="font-headline text-[var(--text-2xl)] text-white tracking-widest uppercase">Firefly</p>
              </div>

              <div className="space-y-3 max-w-xl">
                <p className="font-body text-[var(--text-xs)] text-brand-gold uppercase tracking-[3px] font-bold opacity-60">
                  Prepared by Firefly Management for Kenya Wine Agencies Limited
                </p>
                <p className="font-body text-[var(--text-xs)] text-brand-gold/30 uppercase tracking-[1px] leading-relaxed">
                  Excessive alcohol consumption is harmful to your health. Not for sale to persons under the age of 18 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
