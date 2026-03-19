
import { AppSidebar } from '@/components/navigation/AppSidebar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { SectionContainer } from '@/components/sections/SectionContainer';
import { WaterDroplets } from '@/components/brand/VisualElements';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Content sections
import { StrategicOverview } from '@/components/sections/StrategicOverview';
import { DualActivationModel } from '@/components/sections/DualModel';
import { VisualIdentitySection } from '@/components/sections/VisualIdentity';
import { ContentSocialSection } from '@/components/sections/ContentProduction';
import { CommunityGrowthSection } from '@/components/sections/CommunityBuilding';
import { AttendanceDemandSection } from '@/components/sections/Attendance';
import { MusicProgrammingSection } from '@/components/sections/MusicProgramming';
import { ExperienceDesignSection } from '@/components/sections/ExperienceDesign';
import { SponsorshipRevenueSection } from '@/components/sections/SponsorshipRevenue';
import { DigitalInfrastructureSection } from '@/components/sections/DigitalInfrastructure';
import { EventProductionSection } from '@/components/sections/EventProduction';
import { MeasurementROInSection } from '@/components/sections/MeasurementROI';
import { GrowthRoadmapSection } from '@/components/sections/GrowthRoadmap';
import { WhyFireflySection } from '@/components/sections/WhyFirefly';

const sectionsData = [
  { id: 'strategic-overview', label: '01 — STRATEGIC OVERVIEW', title: 'OWN EVERY SUNDAY — THE VISION', variant: 'dark' as const, component: <StrategicOverview /> },
  { id: 'dual-model', label: '02 — Dual Activation Model', title: 'The Lifestyle Synergy', variant: 'light' as const, component: <DualActivationModel /> },
  { id: 'visual-identity', label: '03 — Visual Identity', title: 'Brand Presence & Perception', variant: 'light' as const, component: <VisualIdentitySection /> },
  { id: 'content-social', label: '04 — Content Production', title: 'Social Media Domination', variant: 'light' as const, component: <ContentSocialSection /> },
  { id: 'community', label: '05 — Community Building', title: 'Audience Growth Strategy', variant: 'light' as const, component: <CommunityGrowthSection /> },
  { id: 'attendance', label: '06 — Attendance', title: 'Demand Generation Mechanics', variant: 'light' as const, component: <AttendanceDemandSection /> },
  { id: 'music', label: '07 — Music Programming', title: 'Curating the Vibe', variant: 'light' as const, component: <MusicProgrammingSection /> },
  { id: 'experience', label: '08 — Experience Design', title: 'On-Site Brand Activations', variant: 'light' as const, component: <ExperienceDesignSection /> },
  { id: 'revenue', label: '09 — Revenue Generation', title: 'Brand Sponsorship Alignment', variant: 'light' as const, component: <SponsorshipRevenueSection /> },
  { id: 'digital', label: '10 — Digital Infrastructure', title: 'Data-Driven Engagement', variant: 'light' as const, component: <DigitalInfrastructureSection /> },
  { id: 'production', label: '11 — Event Production', title: 'Execution Excellence', variant: 'light' as const, component: <EventProductionSection /> },
  { id: 'measurement', label: '12 — Measurement & ROI', title: 'Reporting & KPIs', variant: 'light' as const, component: <MeasurementROInSection /> },
  { id: 'roadmap', label: '13 — Growth Roadmap', title: 'Future Expansion', variant: 'light' as const, component: <GrowthRoadmapSection /> },
  { id: 'why-firefly', label: '14 — Why Firefly Management', title: 'The Partner of Choice', variant: 'dark' as const, component: <WhyFireflySection /> },
];

export default function Home() {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative min-h-screen bg-brand-cream">
      <AppSidebar />
      <MobileNav />
      
      <main className="md:ml-64 transition-all">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen dark-section flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
          <WaterDroplets />
          
          <div className="absolute top-8 left-8 md:top-12 md:left-12 flex flex-col items-start z-20">
            <span className="text-[8px] md:text-[10px] tracking-[5px] text-brand-teal uppercase mb-2 font-bold">Presented by</span>
            {logo && (
              <div className="relative w-[120px] h-[32px] md:w-[180px] md:h-[48px]">
                <Image 
                  src={logo.imageUrl} 
                  alt="Firefly Management" 
                  fill
                  className="brightness-0 invert opacity-80 object-contain object-left"
                  priority
                />
              </div>
            )}
          </div>

          <div className="relative z-10 max-w-5xl mx-auto w-full">
            <div className="animate-fade-in-up">
              <h1 className="leading-[0.85] mb-6">
                <span className="block text-white text-[clamp(48px,12vw,120px)] font-headline">SAVANNA</span>
                <span className="block text-brand-gold text-[clamp(48px,12vw,120px)] font-headline">SUNDAYS</span>
              </h1>
              
              <div className="max-w-md md:max-w-xl mx-auto mt-6 md:mt-8 border-l-2 md:border-l-4 border-brand-gold pl-4 md:pl-6 text-left">
                <p className="font-serif italic text-lg md:text-2xl text-brand-cream/70 leading-relaxed">
                  Own Every Sunday in Nairobi — A Comprehensive Activation Proposal
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-24 animate-fade-in-up [animation-delay:200ms]">
              <div className="flex flex-col items-center">
                <span className="font-headline text-3xl md:text-5xl text-brand-gold">14</span>
                <span className="font-body text-[8px] md:text-[10px] tracking-widest text-brand-cream/40 uppercase font-bold">Sections</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-headline text-3xl md:text-5xl text-brand-gold">6</span>
                <span className="font-body text-[8px] md:text-[10px] tracking-widest text-brand-cream/40 uppercase font-bold">Venues</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-headline text-3xl md:text-5xl text-brand-gold">30+</span>
                <span className="font-body text-[8px] md:text-[10px] tracking-widest text-brand-cream/40 uppercase font-bold">Content Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-headline text-3xl md:text-5xl text-brand-gold">5</span>
                <span className="font-body text-[8px] md:text-[10px] tracking-widest text-brand-cream/40 uppercase font-bold">Solutions</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <ChevronDown className="text-brand-gold" size={32} />
          </div>
        </section>

        {/* Dynamic Sections */}
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

        {/* Footer */}
        <footer className="bg-brand-ink py-16 md:py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
          <WaterDroplets />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 relative z-10">
            <div className="flex flex-col items-center md:items-start">
              {logo && (
                <div className="relative w-[100px] h-[28px] mb-6">
                  <Image 
                    src={logo.imageUrl} 
                    alt="Firefly Management" 
                    fill
                    className="brightness-0 invert opacity-30 object-contain"
                  />
                </div>
              )}
              <p className="font-body text-[9px] md:text-[11px] tracking-[1.5px] uppercase text-brand-cream/30 text-center md:text-left">
                &copy; 2024 Firefly Management. All Rights Reserved.
              </p>
            </div>

            <div className="max-w-md text-center md:text-right">
              <p className="font-body text-[9px] md:text-[11px] tracking-[1.5px] uppercase text-brand-cream/30 leading-relaxed">
                Excessive alcohol consumption is harmful to your health · Not for sale to persons under the age of 18 years.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
