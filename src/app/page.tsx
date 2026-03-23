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
    label: '02 — HOW IT WORKS', 
    title: 'HOW IT WORKS', 
    variant: 'alt' as const, 
    component: <DualActivationModel /> 
  },
  { 
    id: 'the-experience', 
    label: '03 — THE EXPERIENCE', 
    title: 'THE SAVANNA EXPERIENCE', 
    variant: 'light' as const, 
    component: (
      <div className="space-y-12">
        <p className="font-body text-lg text-brand-gold/80 italic text-center max-w-2xl mx-auto -mt-4 mb-8">
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
    title: 'A REVENUE PLATFORM', 
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
    label: '08', 
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

  const scrollToSection1 = () => {
    const el = document.getElementById('the-gap');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        <section id="hero" className="relative min-h-screen flex flex-col px-6 py-12 overflow-hidden justify-center border-b border-white/5 bg-[#1A1208]">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `
              radial-gradient(circle at 40% 50%, rgba(244,197,66,0.12) 0%, transparent 70%),
              radial-gradient(circle at 80% 80%, rgba(232,135,58,0.08) 0%, transparent 60%)
            `
          }} />

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
                <div className="space-y-2">
                  <p className="font-serif italic text-xl md:text-3xl text-[#F8F5E6] tracking-wide">
                    Own Every Sunday in Nairobi
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
              <p className="font-body text-10px tracking-[3px] text-[#B8A98A] uppercase font-bold">Prepared by Firefly Management</p>
              <p className="font-body text-10px tracking-[3px] text-[#B8A98A] uppercase font-bold">Prepared for Kenya Wine Agencies Limited (KWAL)</p>
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
              <p className="font-body text-[8px] tracking-[1.5px] uppercase text-[#B8A98A]">
                &copy; 2024 Firefly Management. Confidential Strategic Document.
              </p>
            </div>

            <div className="max-w-xs text-center md:text-right">
              <p className="font-body text-[10px] tracking-[1px] uppercase text-[#F4C542] font-bold">
                Drink Responsibly.
              </p>
              <p className="font-body text-[7px] tracking-[0.5px] uppercase text-[#B8A98A] mt-1">
                Not for sale to persons under the age of 18 years.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
