
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, Trophy, Star, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BrushStroke } from '@/components/brand/VisualElements';

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
    <div className="space-y-12 md:space-y-16">
      {/* 01: Core Logic Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up">
        <Card className="p-6 bg-white border-l-4 border-brand-gold rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">01: OWNED EDITIONS</h4>
            <p className="font-body text-brand-green/70 text-sm leading-relaxed">
              Proprietary boutique events. 100% brand control, exclusive content harvest, and deep data ownership.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold text-[9px] uppercase tracking-widest">Brand Focus</Badge>
            <Badge variant="outline" className="border-brand-gold/30 text-brand-gold text-[9px] uppercase tracking-widest">Data Mastery</Badge>
          </div>
        </Card>
        
        <Card className="p-6 bg-white border-l-4 border-brand-teal rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
              <Zap size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">02: TITLE SPONSORSHIP</h4>
            <p className="font-body text-brand-green/70 text-sm leading-relaxed">
              Strategic reach mapping. Scaling Savanna’s visual layer onto Nairobi’s existing premium Sunday properties.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal text-[9px] uppercase tracking-widest">Mass Reach</Badge>
            <Badge variant="outline" className="border-brand-teal/30 text-brand-teal text-[9px] uppercase tracking-widest">Culture Cred</Badge>
          </div>
        </Card>
      </div>

      {/* 02: Visual Synergy Pull Quote */}
      <div className="relative py-8 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:200ms]">
        <div className="relative z-10 max-w-4xl text-center">
          <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
          <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
            "We saturate the landscape without saturating the budget."
          </h3>
        </div>
      </div>

      {/* 03: Interactive Detail Tabs */}
      <div className="animate-fade-in-up [animation-delay:400ms]">
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="w-full bg-brand-green p-1 h-auto grid grid-cols-3 mb-8 rounded-2xl">
            <TabsTrigger value="network" className="py-2.5 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-[10px] md:text-sm">Network</TabsTrigger>
            <TabsTrigger value="scorecard" className="py-2.5 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-[10px] md:text-sm">Curation</TabsTrigger>
            <TabsTrigger value="calendar" className="py-2.5 font-headline tracking-widest text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-[10px] md:text-sm">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="network" className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {venues.map((venue, i) => (
                <Card key={i} className="group p-4 md:p-6 bg-white border border-brand-green/5 rounded-2xl hover:border-brand-gold transition-all text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-cream border border-brand-green/5 flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                    {venue.special ? (
                      <span className="font-headline text-2xl text-brand-green">G</span>
                    ) : venue.logo ? (
                      <Image src={venue.logo} alt={venue.name} width={40} height={40} className="object-contain" />
                    ) : (
                      <Star size={20} className="text-brand-gold" />
                    )}
                  </div>
                  <h5 className="font-headline text-sm md:text-base text-brand-green mb-1">{venue.name}</h5>
                  <p className="font-body text-[8px] md:text-[10px] text-brand-green/40 uppercase tracking-widest font-bold mb-3">{venue.area}</p>
                  <Badge className={cn("text-[7px] md:text-[9px] uppercase tracking-tighter", venue.type === 'Owned' ? 'bg-brand-gold text-brand-green' : 'bg-brand-teal text-white')}>
                    {venue.type}
                  </Badge>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scorecard" className="space-y-6">
            <div className="bg-brand-cream/50 p-6 rounded-3xl border border-brand-green/5">
              <h5 className="font-headline text-lg text-brand-green mb-6 text-center tracking-widest uppercase">Sponsorship Selection Matrix</h5>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: "Audience Fit", weight: "30%", icon: <UserCheck className="w-4 h-4" /> },
                  { label: "Visual Quality", weight: "20%", icon: <Trophy className="w-4 h-4" /> },
                  { label: "Content Potential", weight: "20%", icon: <Zap className="w-4 h-4" /> },
                  { label: "Credibility", weight: "15%", icon: <Star className="w-4 h-4" /> },
                  { label: "Exclusivity", weight: "15%", icon: <ShieldCheck className="w-4 h-4" /> },
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto text-brand-gold shadow-sm">
                      {item.icon}
                    </div>
                    <div className="font-headline text-xl text-brand-green">{item.weight}</div>
                    <div className="text-[7px] md:text-[9px] font-bold uppercase tracking-widest opacity-40 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-brand-green/5 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h5 className="font-headline text-sm md:text-base text-brand-green uppercase tracking-wider">The Sunday Sprint Loop</h5>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1"><div className="w-2 h-2 bg-brand-green rounded-full" /><span className="text-[7px] font-bold uppercase opacity-40">Owned</span></div>
                  <div className="flex items-center gap-1"><div className="w-2 h-2 bg-brand-teal rounded-full" /><span className="text-[7px] font-bold uppercase opacity-40">Sponsor</span></div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {[...Array(28)].map((_, i) => {
                  const isSunday = (i + 1) % 7 === 0;
                  const isOwned = isSunday && ((i + 1) === 7 || (i + 1) === 21);
                  const isSponsor = isSunday && ((i + 1) === 14 || (i + 1) === 28);
                  return (
                    <div key={i} className={cn(
                      "aspect-square rounded-lg flex items-center justify-center text-[9px] font-bold",
                      isOwned ? "bg-brand-green text-white" : 
                      isSponsor ? "bg-brand-teal text-white" : 
                      "bg-brand-cream/30 text-brand-green/10"
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
