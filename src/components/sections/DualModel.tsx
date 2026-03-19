
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, Trophy, Star, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const venues = [
  { name: "Geco", area: "Westlands", capacity: "300", type: "Owned", special: true },
  { name: "Muze", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/ac208aa5-8292-4543-a7ca-719fd61a3c46_20260119_214138_0000_ikxc7g.png", area: "Westlands", capacity: "400", type: "Owned" },
  { name: "Alchemist", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/8367e513-9c35-4276-97b8-7ae60597091e_20260119_214311_0000_numq8q.png", area: "Westlands", capacity: "600", type: "Sponsor" },
  { name: "KODA", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/ee064dd8-0e0b-4c61-9469-dd6fe46a1572_20260119_214214_0000_r494od.png", area: "Kilimani", capacity: "350", type: "Owned" },
  { name: "Black Samurai", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/44699495-0ab1-43b0-bc11-b97b6d79c266_20260119_214246_0000_yko4eb.png", area: "Westlands", capacity: "500", type: "Sponsor" },
  { name: "Masshouse", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768407223/419b98e1-eb0d-4198-b3d8-618a79ef3641_20260114_191325_0000_ebdjee.png", area: "Kilimani", capacity: "800", type: "Sponsor" },
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-10 md:space-y-16">
      {/* Intro Narrative */}
      <div className="font-body text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] mb-8 md:mb-12 animate-fade-in-up">
        <p>
          The dual model is the strategic core of Savanna Sundays. Owned editions build the brand’s creative DNA and community depth; title sponsorships extend its geographic reach and frequency. Neither model alone achieves what KWAL needs—but together, they create a presence architecture that saturates Nairobi’s Sunday landscape without saturating Savanna’s production budget.
        </p>
      </div>

      {/* High Level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-6 md:p-8 bg-white border-l-4 border-brand-gold rounded-[20px] shadow-sm">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <UserCheck className="text-brand-gold w-8 h-8" />
            <h4 className="font-headline text-2xl md:text-3xl text-brand-green">FULLY OWNED EDITIONS</h4>
          </div>
          <p className="font-body text-sm md:text-base text-brand-green/70 mb-6">
            Complete creative and operational control. Every touchpoint is a Savanna branded experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold text-[10px]">100% Brand Focus</Badge>
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold text-[10px]">Data Mastery</Badge>
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold text-[10px]">Curated Vibe</Badge>
          </div>
        </Card>

        <Card className="p-6 md:p-8 bg-white border-l-4 border-brand-teal rounded-[20px] shadow-sm">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <Trophy className="text-brand-teal w-8 h-8" />
            <h4 className="font-headline text-2xl md:text-3xl text-brand-green">TITLE SPONSORSHIP</h4>
          </div>
          <p className="font-body text-sm md:text-base text-brand-green/70 mb-6">
            Amplifying established culture. We bring the Savanna crispness to Nairobi's existing Sunday favorites.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal text-[10px]">Mass Scale</Badge>
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal text-[10px]">Cultural Cred</Badge>
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal text-[10px]">Synergy</Badge>
          </div>
        </Card>
      </div>

      {/* Tabs Section */}
      <div className="py-4 md:py-8 animate-fade-in-up [animation-delay:400ms]">
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="w-full bg-brand-green p-1 h-auto grid grid-cols-1 md:grid-cols-3 mb-8 md:mb-12 rounded-2xl">
            <TabsTrigger value="network" className="py-2.5 md:py-3 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-xs md:text-base">Venue Network</TabsTrigger>
            <TabsTrigger value="sponsorship" className="py-2.5 md:py-3 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-xs md:text-base">Sponsorship Model</TabsTrigger>
            <TabsTrigger value="calendar" className="py-2.5 md:py-3 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-xs md:text-base">Combined Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="network" className="space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 mb-4 uppercase">
                2A: Fully Owned Savanna Sundays Editions
              </h3>
              <div className="font-body text-sm md:text-base text-brand-green/70 space-y-4 max-w-3xl">
                <p>
                  Owned editions are where the Savanna Sundays identity is built, tested, and perfected. Firefly controls every detail—from the moment the first social media teaser drops to the moment the last golden-hour photograph is color-graded. These events are Savanna’s creative incubator and content factory.
                </p>
                
                <h4 className="font-headline text-lg md:text-xl mt-6 mb-2">Format & Experience</h4>
                <ul className="space-y-0">
                  <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1 w-3.5 h-3.5" /> Daytime-to-evening format: doors open at 2:00 PM, energy builds through sunset, and the final set closes at 9:00 PM.</li>
                  <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1 w-3.5 h-3.5" /> Capacity range of 400–800 pax per edition, sized to feel full at 60–70% capacity.</li>
                  <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1 w-3.5 h-3.5" /> Outdoor or semi-outdoor settings with natural light and photogenic architectural character.</li>
                  <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1 w-3.5 h-3.5" /> Premium positioning: curated food vendors and signature Savanna serves.</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {venues.map((venue, i) => (
                <Card key={i} className="group p-5 md:p-6 bg-white border border-brand-green/5 rounded-[20px] hover:-translate-y-2 transition-all text-center">
                  <div className="relative mb-4 md:mb-6 flex justify-center">
                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-brand-cream border-2 border-brand-green/5 flex items-center justify-center overflow-hidden">
                      {venue.special ? (
                        <div className="relative flex flex-col items-center">
                          <span className="font-headline text-3xl md:text-4xl text-brand-green">G</span>
                          <div className="absolute -top-1 -right-1 bg-brand-gold p-1 rounded-full shadow-sm">
                            <Star className="fill-brand-green text-brand-green w-2 h-2" />
                          </div>
                        </div>
                      ) : venue.logo ? (
                        <Image src={venue.logo} alt={venue.name} width={50} height={50} className="object-contain" />
                      ) : null}
                    </div>
                  </div>
                  <h5 className="font-headline text-lg md:text-xl text-brand-green mb-1">{venue.name}</h5>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="font-body text-[10px] md:text-[12px] text-brand-green/40">{venue.area}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-green/20" />
                    <span className="font-body text-[10px] md:text-[12px] font-bold text-brand-teal">{venue.capacity} CAP</span>
                  </div>
                  <div className="flex justify-center">
                    <Badge className={cn("text-[9px] md:text-[10px]", venue.type === 'Owned' ? 'bg-brand-gold text-brand-green' : 'bg-brand-teal text-white')}>
                      {venue.type === 'Owned' ? 'Owned Edition' : 'Title Sponsor'}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sponsorship" className="space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 mb-4 uppercase">
                2B: Title Sponsorship of Existing Sunday Events
              </h3>
              <div className="font-body text-sm md:text-base text-brand-green/70 space-y-4 max-w-3xl">
                <p>
                  Title sponsorships extend Savanna’s Sunday presence to events Savanna doesn’t need to produce—multiplying reach while conserving production resources. The key is not quantity but curation: Savanna should be present only where the brand is elevated.
                </p>
                
                <h4 className="font-headline text-lg md:text-xl mt-6 mb-4">Sponsorship Scorecard</h4>
                <div className="bg-brand-cream p-4 md:p-6 rounded-2xl border border-brand-green/5">
                   <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {[
                        { label: "Audience Fit", weight: "30%" },
                        { label: "Visual Quality", weight: "20%" },
                        { label: "Content Potential", weight: "20%" },
                        { label: "Credibility", weight: "15%" },
                        { label: "Exclusivity", weight: "15%" },
                      ].map((item, i) => (
                        <div key={i} className="text-center">
                          <div className="font-headline text-xl md:text-2xl text-brand-gold">{item.weight}</div>
                          <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">{item.label}</div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               <Card className="p-6 md:p-8 bg-brand-green text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Trophy className="w-20 h-20 md:w-[120px] md:h-[120px]" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-2xl mb-6 md:mb-8 flex items-center justify-center overflow-hidden">
                      <Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/Boiler_Room_s9kvwq.jpg" alt="Boiler Room" width={60} height={60} className="object-contain" />
                    </div>
                    <h5 className="font-headline text-2xl md:text-3xl mb-3 md:mb-4">Boiler Room Nairobi</h5>
                    <p className="font-body text-sm md:text-base text-white/60 mb-6">Global underground credibility meeting Savanna's heritage.</p>
                    <Badge className="bg-brand-gold text-brand-green text-[10px]">Strategic Target</Badge>
                  </div>
               </Card>

               <Card className="p-6 md:p-8 bg-brand-green text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Trophy className="w-20 h-20 md:w-[120px] md:h-[120px]" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-2xl mb-6 md:mb-8 flex items-center justify-center overflow-hidden">
                      <Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1768410458/3085e5d1-651e-404e-8cc9-240365f9ad11_20260114_200656_0000_sstsmb.png" alt="Balcony Mix" width={60} height={60} className="object-contain" />
                    </div>
                    <h5 className="font-headline text-2xl md:text-3xl mb-3 md:mb-4">The Balcony Mix Africa</h5>
                    <p className="font-body text-sm md:text-base text-white/60 mb-6">The ultimate lifestyle synergy with Major League Djz.</p>
                    <Badge className="bg-brand-gold text-brand-green text-[10px]">Strategic Target</Badge>
                  </div>
               </Card>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 mb-4 uppercase">
                2C: The Combined Sunday Calendar
              </h3>
              <div className="font-body text-sm md:text-base text-brand-green/70 space-y-4 max-w-3xl">
                <p>
                  The calendar is the operational brain of the dual model. By mapping owned and sponsored events across weeks, neighborhoods, and audience segments, Firefly ensures maximum reach with minimal overlap.
                </p>
                <div className="flex flex-col gap-3 mt-4 md:mt-6">
                  <div className="flex gap-3 items-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-green" />
                    <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Phase 1: 2 Owned / Month</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-teal" />
                    <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Sponsored: 6-8 Events / Month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-[24px] md:rounded-[30px] border border-brand-green/5 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
                <h5 className="font-headline text-xl md:text-2xl text-brand-green">MARCH 2024 ACTIVATION</h5>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-brand-green rounded-sm" /><span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Owned</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 bg-brand-teal rounded-sm" /><span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Sponsor</span></div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {['M','T','W','T','F','S','S'].map((d, i) => (
                  <div key={i} className="text-center font-headline text-brand-green opacity-20 py-1 md:py-2 text-xs md:text-base">{d}</div>
                ))}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isSunday = (i + 1) % 7 === 0;
                  const isOwned = day === 7 || day === 21;
                  const isSponsor = day === 14 || day === 28;
                  const isCurrent = day === 14;

                  return (
                    <div key={i} className={`aspect-square rounded-lg md:rounded-xl flex flex-col items-center justify-center relative border ${
                      isOwned ? 'bg-brand-green border-transparent' : 
                      isSponsor ? 'bg-brand-teal border-transparent' : 
                      isCurrent ? 'border-brand-gold border-2' : 'border-brand-green/5'
                    }`}>
                      <span className={`text-[9px] md:text-[12px] font-bold ${isOwned || isSponsor ? 'text-white' : 'text-brand-green/20'}`}>{day}</span>
                      {(isOwned || isSponsor) && <div className="absolute bottom-1 w-0.5 h-0.5 md:w-1 md:h-1 bg-brand-gold rounded-full" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
