
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
        <section id="hero" className="relative min-h-screen dark-section flex flex-col items-center justify-center text-center px-6 py-12 overflow-hidden">
          <WaterDroplets className="opacity-20" />
          
          <div className="relative z-20 flex flex-col items-center mb-12 animate-fade-in-up">
            <span className="text-[10px] tracking-[4px] md:tracking-[6px] text-brand-gold uppercase mb-4 font-bold opacity-60">Presented by</span>
            {logo && (
              <div className="relative w-[220px] h-[55px] md:w-[320px] md:h-[80px]">
                <Image 
                  src={logo.imageUrl} 
                  alt="Firefly Management" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>

          <div className="relative z-10 max-w-5xl mx-auto w-full">
            <div className="animate-fade-in-up [animation-delay:200ms]">
              <h1 className="leading-[0.85] mb-8">
                <span className="block text-white text-[clamp(56px,14vw,160px)] font-headline tracking-tighter">SAVANNA</span>
                <span className="block text-brand-gold text-[clamp(56px,14vw,160px)] font-headline tracking-tighter">SUNDAYS</span>
              </h1>
              
              <div className="max-w-2xl mx-auto space-y-6">
                <p className="font-serif italic text-xl md:text-3xl text-brand-cream/80 leading-relaxed">
                  Own Every Sunday in Nairobi
                </p>
                <div className="w-16 h-[2px] bg-brand-gold mx-auto opacity-30" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-30">
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
        <footer className="bg-brand-ink py-16 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
          <WaterDroplets className="opacity-10" />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 relative z-10">
            <div className="flex flex-col items-center md:items-start">
              {logo && (
                <div className="relative w-[180px] h-[45px] mb-6">
                  <Image 
                    src={logo.imageUrl} 
                    alt="Firefly Management" 
                    fill
                    className="object-contain"
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
