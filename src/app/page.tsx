
'use client';

import { AppSidebar } from '@/components/navigation/AppSidebar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { WaterDroplets } from '@/components/brand/VisualElements';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAnalyticsTracker } from '@/hooks/use-analytics-tracker';

// Content sections
import { TheGap } from '@/components/sections/TheGap';
import { DualActivationModel } from '@/components/sections/DualModel';
import { VisualIdentitySection } from '@/components/sections/VisualIdentity';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { ContentSocialSection } from '@/components/sections/ContentProduction';
import { AttendanceDemandSection } from '@/components/sections/Attendance';
import { DigitalInfrastructureSection } from '@/components/sections/DigitalInfrastructure';
import { SponsorshipRevenueSection } from '@/components/sections/SponsorshipRevenue';
import { MeasurementROInSection } from '@/components/sections/MeasurementROI';
import { WhyFireflySection } from '@/components/sections/WhyFirefly';
import { LeadCapture } from '@/components/sections/LeadCapture';
import { StrategicAdvisor } from '@/components/ai/StrategicAdvisor';

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
    label: '02 — THE CONCEPT', 
    title: 'THE DUAL ACTIVATION MODEL', 
    variant: 'alt' as const, 
    component: <DualActivationModel /> 
  },
  { 
    id: 'the-experience', 
    label: '03 — THE EXPERIENCE', 
    title: 'WHAT A SAVANNA SUNDAY LOOKS LIKE', 
    variant: 'light' as const, 
    component: (
      <div className="space-y-12">
        <VisualIdentitySection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
        <ExperienceDesignSection />
      </div>
    ) 
  },
  { 
    id: 'the-content-engine', 
    label: '04 — THE CONTENT ENGINE', 
    title: 'ONE SUNDAY. 30 DAYS OF CONTENT.', 
    variant: 'alt' as const, 
    component: <ContentSocialSection />
  },
  { 
    id: 'the-demand-machine', 
    label: '05 — THE DEMAND MACHINE', 
    title: 'HOW EVERY EDITION SELLS OUT', 
    variant: 'light' as const, 
    component: (
      <div className="space-y-12">
        <AttendanceDemandSection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-teal/10 to-transparent" />
        <DigitalInfrastructureSection />
      </div>
    )
  },
  { 
    id: 'the-numbers', 
    label: '06 — THE NUMBERS', 
    title: 'A REVENUE PLATFORM, NOT A COST LINE', 
    variant: 'alt' as const, 
    component: (
      <div className="space-y-12">
        <SponsorshipRevenueSection />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />
        <MeasurementROInSection />
      </div>
    )
  },
  { 
    id: 'the-partnership', 
    label: '07 — THE PARTNERSHIP', 
    title: 'WHY FIREFLY. WHY NOW.', 
    variant: 'dark' as const, 
    component: <WhyFireflySection />
  },
  { 
    id: 'strategic-advisor', 
    label: '08 — STRATEGIC INTELLIGENCE', 
    title: 'QUERY THE ENGINE', 
    variant: 'alt' as const, 
    component: <StrategicAdvisor />
  },
  { 
    id: 'lead-capture', 
    label: '09 — NEXT STEPS', 
    title: 'SECURE THE MOMENTUM', 
    variant: 'dark' as const, 
    component: <LeadCapture />
  },
];

export default function Home() {
  useAnalyticsTracker();
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        <section id="hero" className="relative min-h-[70vh] dark-section flex flex-col px-6 py-12 overflow-hidden justify-center border-b border-white/5">
          <WaterDroplets className="opacity-10" />
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="max-w-6xl mx-auto w-full">
              <h1 className="leading-[0.85] mb-4 md:mb-6 blur-in">
                <span className="block text-white text-[clamp(60px,15vw,160px)] font-headline tracking-tighter">SAVANNA</span>
                <span className="block text-brand-gold text-[clamp(60px,15vw,160px)] font-headline tracking-tighter">SUNDAYS</span>
              </h1>
              
              <div className="max-w-2xl mx-auto opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards">
                <p className="font-serif italic text-lg md:text-2xl text-brand-cream/60 tracking-wide">
                  Own Every Sunday in Nairobi
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col items-center mt-12 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-forwards">
            <div className="w-8 h-[1px] bg-brand-gold/30 mb-6" />
            <span className="text-[9px] tracking-[6px] text-brand-gold uppercase mb-4 font-bold opacity-50">Presented by</span>
            {logo && (
              <div className="relative w-[220px] h-[70px] md:w-[450px] md:h-[120px] hover:scale-105 transition-transform duration-500">
                <Image 
                  src={logo.imageUrl} 
                  alt="Firefly Management" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
            <div className="mt-8 animate-bounce opacity-20">
              <ChevronDown className="text-brand-gold" size={20} />
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

        <footer className="bg-brand-dark py-16 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
          <WaterDroplets className="opacity-5" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="flex flex-col items-center md:items-start">
              {logo && (
                <div className="relative w-[150px] h-[40px] md:w-[200px] md:h-[60px] mb-4 opacity-50 hover:opacity-100 transition-opacity">
                  <Image 
                    src={logo.imageUrl} 
                    alt="Firefly Management" 
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="font-body text-[8px] tracking-[1.5px] uppercase text-brand-cream/20">
                &copy; 2024 Firefly Management. Confidential Strategic Document.
              </p>
            </div>

            <div className="max-w-xs text-center md:text-right">
              <p className="font-body text-[10px] tracking-[1px] uppercase text-brand-gold font-bold">
                Drink Responsibly.
              </p>
              <p className="font-body text-[7px] tracking-[0.5px] uppercase text-brand-cream/20 mt-1">
                Not for sale to persons under the age of 18 years.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
