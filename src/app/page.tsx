import { AppSidebar } from '@/components/navigation/AppSidebar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { WaterDroplets } from '@/components/brand/VisualElements';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

const sectionsData = [
  { 
    id: 'the-gap', 
    label: '01 — THE GAP', 
    title: "300,000 DECISIONS. ZERO BRAND LOYALTY.", 
    variant: 'dark' as const, 
    component: <TheGap /> 
  },
  { 
    id: 'the-concept', 
    label: '02 — THE CONCEPT', 
    title: 'THE DUAL ACTIVATION MODEL', 
    variant: 'light' as const, 
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
        <div className="w-8 h-[1px] bg-brand-gold/20 mx-auto" />
        <ExperienceDesignSection />
      </div>
    ) 
  },
  { 
    id: 'the-content-engine', 
    label: '04 — THE CONTENT ENGINE', 
    title: 'ONE SUNDAY. 30 DAYS OF CONTENT.', 
    variant: 'light' as const, 
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
        <div className="w-8 h-[1px] bg-brand-gold/20 mx-auto" />
        <DigitalInfrastructureSection />
      </div>
    )
  },
  { 
    id: 'the-numbers', 
    label: '06 — THE NUMBERS', 
    title: 'A REVENUE PLATFORM, NOT A COST LINE', 
    variant: 'light' as const, 
    component: (
      <div className="space-y-12">
        <SponsorshipRevenueSection />
        <div className="w-8 h-[1px] bg-brand-gold/20 mx-auto" />
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
];

export default function Home() {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative min-h-screen bg-brand-cream">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        {/* Compact Hero Section */}
        <section id="hero" className="relative min-h-[60vh] dark-section flex flex-col px-6 py-12 overflow-hidden justify-center">
          <WaterDroplets className="opacity-10" />
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="max-w-6xl mx-auto w-full animate-fade-in-up">
              <h1 className="leading-[0.85] mb-4 md:mb-6">
                <span className="block text-white text-[clamp(60px,15vw,160px)] font-headline tracking-tighter">SAVANNA</span>
                <span className="block text-brand-gold text-[clamp(60px,15vw,160px)] font-headline tracking-tighter">SUNDAYS</span>
              </h1>
              
              <div className="max-w-2xl mx-auto">
                <p className="font-serif italic text-lg md:text-2xl text-brand-cream/60 tracking-wide">
                  Own Every Sunday in Nairobi
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col items-center mt-12 animate-fade-in-up [animation-delay:600ms]">
            <div className="w-8 h-[1px] bg-brand-gold/30 mb-6" />
            <span className="text-[9px] tracking-[6px] text-brand-gold uppercase mb-4 font-bold opacity-50">Presented by</span>
            {logo && (
              <div className="relative w-[200px] h-[60px] md:w-[400px] md:h-[100px] opacity-90">
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

        <footer className="bg-brand-ink py-10 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
          <WaterDroplets className="opacity-5" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex flex-col items-center md:items-start">
              {logo && (
                <div className="relative w-[180px] h-[50px] md:w-[250px] md:h-[80px] mb-4">
                  <Image 
                    src={logo.imageUrl} 
                    alt="Firefly Management" 
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="font-body text-[9px] tracking-[1.5px] uppercase text-brand-cream/30">
                &copy; 2024 Firefly Management. All Rights Reserved.
              </p>
            </div>

            <div className="max-w-xs text-center md:text-right">
              <p className="font-body text-[10px] tracking-[1px] uppercase text-brand-cream/40 font-bold">
                Drink Responsibly.
              </p>
              <p className="font-body text-[8px] tracking-[1px] uppercase text-brand-cream/20 leading-relaxed mt-2">
                Excessive alcohol consumption is harmful to your health · Not for sale to persons under the age of 18 years.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
