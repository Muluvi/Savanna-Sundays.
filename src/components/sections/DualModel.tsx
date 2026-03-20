"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, Trophy, Star, ShieldCheck, Zap, MapPin } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BrushStroke } from '@/components/brand/VisualElements';

const venues = [
  { name: "Geco Cafe", area: "Westlands", capacity: "300", type: "Owned", special: true },
  { name: "The Alchemist", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/8367e513-9c35-4276-97b8-7ae60597091e_20260119_214311_0000_numq8q.png", area: "Westlands", capacity: "600", type: "Sponsor" },
  { name: "Waterfront", area: "Karen", capacity: "1500", type: "Sponsor" },
  { name: "K1 Klub House", area: "Parklands", capacity: "800", type: "Sponsor" },
  { name: "Muze", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/ac208aa5-8292-4543-a7ca-719fd61a3c46_20260119_214138_0000_ikxc7g.png", area: "Westlands", capacity: "400", type: "Owned" },
  { name: "KODA", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768848344/ee064dd8-0e0b-4c61-9469-dd6fe46a1572_20260119_214214_0000_r494od.png", area: "Kilimani", capacity: "350", type: "Owned" },
];

export const DualActivationModel = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* 02A: Intro */}
      <div className="max-w-3xl animate-fade-in-up">
        <p className="font-serif italic text-lg md:text-xl text-brand-green/60 leading-relaxed">
          One engine builds the brand. The other covers the city. Together, they make Savanna synonymous with Sunday.
        </p>
      </div>

      {/* 02B: Core Logic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-5 bg-white border-l-4 border-brand-gold rounded-[24px] flex flex-col justify-between group hover:shadow-lg transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-headline text-2xl text-brand-green uppercase">OWNED EDITIONS</h4>
              <p className="font-body text-brand-green/70 text-sm leading-relaxed">
                Proprietary boutique events. 100% brand control, exclusive content harvest, and deep data ownership.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge className="bg-brand-gold text-brand-green text-[9px] uppercase tracking-widest border-none font-bold">Brand Focus</Badge>
          </div>
        </Card>
        
        <Card className="p-5 bg-white border-l-4 border-brand-teal rounded-[24px] flex flex-col justify-between group hover:shadow-lg transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
              <Zap size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-headline text-2xl text-brand-green uppercase">TITLE SPONSORSHIP</h4>
              <p className="font-body text-brand-green/70 text-sm leading-relaxed">
                Strategic reach mapping. Scaling Savanna’s visual layer onto Nairobi’s existing premium Sunday properties.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge className="bg-brand-teal text-white text-[9px] uppercase tracking-widest border-none font-bold">Mass Reach</Badge>
          </div>
        </Card>
      </div>

      {/* 02C: Strategic Pull Quote - Prominent pause */}
      <div className="relative py-8 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:400ms]">
        <div className="relative z-10 max-w-4xl text-center">
          <BrushStroke className="w-40 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
          <h3 className="font-serif italic text-2xl md:text-4xl text-brand-green/90 leading-tight px-4">
            "We saturate the landscape without saturating the budget."
          </h3>
        </div>
      </div>

      {/* 02D: Details - Denser Tabs */}
      <div className="animate-fade-in-up [animation-delay:600ms]">
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="w-full bg-brand-green p-1 h-auto grid grid-cols-3 mb-6 rounded-xl">
            <TabsTrigger value="network" className="py-2.5 font-headline tracking-[1px] text-xs uppercase rounded-lg">Venue Network</TabsTrigger>
            <TabsTrigger value="scorecard" className="py-2.5 font-headline tracking-[1px] text-xs uppercase rounded-lg">Curation Matrix</TabsTrigger>
            <TabsTrigger value="calendar" className="py-2.5 font-headline tracking-[1px] text-xs uppercase rounded-lg">Sunday Sprint</TabsTrigger>
          </TabsList>

          <TabsContent value="network">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {venues.map((venue, i) => (
                <Card key={i} className="group p-4 bg-white border border-brand-green/5 rounded-xl hover:shadow-md transition-all text-center flex flex-col items-center justify-between">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-cream flex items-center justify-center mb-3 overflow-hidden shadow-sm">
                    {venue.special ? (
                      <span className="font-headline text-2xl text-brand-green">G</span>
                    ) : venue.logo ? (
                      <Image src={venue.logo} alt={venue.name} width={40} height={40} className="object-contain" />
                    ) : (
                      <MapPin size={24} className="text-brand-gold" />
                    )}
                  </div>
                  <div className="mb-2">
                    <h5 className="font-headline text-sm text-brand-green">{venue.name}</h5>
                    <p className="font-body text-[8px] text-brand-green/40 uppercase tracking-[2px] font-bold">{venue.area}</p>
                  </div>
                  <Badge className={cn("text-[8px] uppercase tracking-widest px-2 py-0.5 border-none", venue.type === 'Owned' ? 'bg-brand-gold text-brand-green' : 'bg-brand-teal text-white')}>
                    {venue.type}
                  </Badge>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scorecard">
            <div className="bg-brand-cream/50 p-6 rounded-2xl border border-brand-green/5">
              <h5 className="font-headline text-lg text-brand-green mb-6 text-center tracking-wider">Selection Criteria</h5>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: "Audience Fit", icon: <UserCheck className="w-5 h-5" /> },
                  { label: "Visual Quality", icon: <Trophy className="w-5 h-5" /> },
                  { label: "Content Potential", icon: <Zap className="w-5 h-5" /> },
                  { label: "Credibility", icon: <Star className="w-5 h-5" /> },
                  { label: "Exclusivity", icon: <ShieldCheck className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto text-brand-gold shadow-sm mb-2">
                      {item.icon}
                    </div>
                    <div className="text-[8px] font-bold uppercase tracking-[2px] text-brand-green leading-tight opacity-70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="bg-white p-6 rounded-2xl border border-brand-green/5 shadow-md">
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {[...Array(28)].map((_, i) => {
                  const isSunday = (i + 1) % 7 === 0;
                  const isOwned = isSunday && ((i + 1) === 7 || (i + 1) === 21);
                  const isSponsor = isSunday && ((i + 1) === 14 || (i + 1) === 28);
                  return (
                    <div key={i} className={cn(
                      "aspect-square rounded-md flex items-center justify-center text-[9px] font-bold shadow-sm",
                      isOwned ? "bg-brand-green text-white" : 
                      isSponsor ? "bg-brand-teal text-white" : 
                      "bg-brand-cream/40 text-brand-green/10"
                    )}>
                      {i + 1}
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
