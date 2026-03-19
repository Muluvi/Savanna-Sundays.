
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
    <div className="space-y-12 md:space-y-24">
      {/* 02A: Intro */}
      <div className="max-w-3xl animate-fade-in-up">
        <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-brand-green/60 leading-relaxed">
          One engine builds the brand. The other covers the city. Together, they make Savanna synonymous with Sunday.
        </p>
      </div>

      {/* 02B: Core Logic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-8 bg-white border-l-4 border-brand-gold rounded-[32px] flex flex-col justify-between group hover:shadow-xl transition-all shadow-sm">
          <div className="space-y-6">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
              <ShieldCheck size={28} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-3xl text-brand-green uppercase">OWNED EDITIONS</h4>
              <p className="font-body text-brand-green/70 text-base leading-relaxed">
                Proprietary boutique events. 100% brand control, exclusive content harvest, and deep data ownership.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            <Badge className="bg-brand-gold text-brand-green text-[10px] uppercase tracking-widest px-4 py-1.5 border-none font-bold">Brand Focus</Badge>
            <Badge className="bg-brand-gold/10 text-brand-gold text-[10px] uppercase tracking-widest px-4 py-1.5 border-none font-bold">Data Mastery</Badge>
          </div>
        </Card>
        
        <Card className="p-8 bg-white border-l-4 border-brand-teal rounded-[32px] flex flex-col justify-between group hover:shadow-xl transition-all shadow-sm">
          <div className="space-y-6">
            <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
              <Zap size={28} />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline text-3xl text-brand-green uppercase">TITLE SPONSORSHIP</h4>
              <p className="font-body text-brand-green/70 text-base leading-relaxed">
                Strategic reach mapping. Scaling Savanna’s visual layer onto Nairobi’s existing premium Sunday properties.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            <Badge className="bg-brand-teal text-white text-[10px] uppercase tracking-widest px-4 py-1.5 border-none font-bold">Mass Reach</Badge>
            <Badge className="bg-brand-teal/10 text-brand-teal text-[10px] uppercase tracking-widest px-4 py-1.5 border-none font-bold">Culture Cred</Badge>
          </div>
        </Card>
      </div>

      {/* 02C: Strategic Pull Quote - THE CLIMAX */}
      <div className="relative py-16 flex flex-col items-center justify-center animate-fade-in-up [animation-delay:400ms]">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-headline text-[120px] md:text-[220px] text-brand-gold opacity-[0.05] select-none leading-none">
            SYNERGY
          </span>
        </div>
        <div className="relative z-10 max-w-4xl text-center">
          <BrushStroke className="w-64 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
          <h3 className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-brand-green/90 leading-tight px-4">
            "We saturate the landscape without saturating the budget."
          </h3>
          <div className="w-24 h-[2px] bg-brand-gold/40 mx-auto mt-12" />
        </div>
      </div>

      {/* 02D: Details */}
      <div className="animate-fade-in-up [animation-delay:600ms]">
        <Tabs defaultValue="network" className="w-full">
          <TabsList className="w-full bg-brand-green p-1.5 h-auto grid grid-cols-3 mb-10 rounded-2xl shadow-lg">
            <TabsTrigger value="network" className="py-3.5 font-headline tracking-[2px] text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-xs md:text-base">Venue Network</TabsTrigger>
            <TabsTrigger value="scorecard" className="py-3.5 font-headline tracking-[2px] text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-xs md:text-base">Curation Matrix</TabsTrigger>
            <TabsTrigger value="calendar" className="py-3.5 font-headline tracking-[2px] text-white/50 data-[state=active]:text-brand-gold data-[state=active]:bg-white/5 uppercase rounded-xl text-xs md:text-base">Sunday Sprint</TabsTrigger>
          </TabsList>

          <TabsContent value="network">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {venues.map((venue, i) => (
                <Card key={i} className="group p-6 md:p-8 bg-white border border-brand-green/5 rounded-[24px] hover:border-brand-gold hover:shadow-md transition-all text-center flex flex-col items-center justify-between">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-brand-cream border border-brand-green/5 flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform shadow-sm">
                    {venue.special ? (
                      <span className="font-headline text-4xl text-brand-green">G</span>
                    ) : venue.logo ? (
                      <Image src={venue.logo} alt={venue.name} width={60} height={60} className="object-contain" />
                    ) : (
                      <MapPin size={32} className="text-brand-gold" />
                    )}
                  </div>
                  <div className="space-y-2 mb-4">
                    <h5 className="font-headline text-lg md:text-xl text-brand-green">{venue.name}</h5>
                    <p className="font-body text-[10px] md:text-xs text-brand-green/40 uppercase tracking-[3px] font-bold">{venue.area}</p>
                  </div>
                  <Badge className={cn(
                    "text-[8px] md:text-[10px] uppercase tracking-widest px-4 py-1 border-none font-bold", 
                    venue.type === 'Owned' ? 'bg-brand-gold text-brand-green' : 'bg-brand-teal text-white'
                  )}>
                    {venue.type}
                  </Badge>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scorecard">
            <div className="bg-brand-cream/50 p-10 md:p-16 rounded-[40px] border border-brand-green/5 shadow-inner">
              <h5 className="font-headline text-2xl text-brand-green mb-12 text-center tracking-widest uppercase">Strategic Selection Matrix</h5>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
                {[
                  { label: "Audience Fit", icon: <UserCheck className="w-6 h-6" /> },
                  { label: "Visual Quality", icon: <Trophy className="w-6 h-6" /> },
                  { label: "Content Potential", icon: <Zap className="w-6 h-6" /> },
                  { label: "Credibility", icon: <Star className="w-6 h-6" /> },
                  { label: "Exclusivity", icon: <ShieldCheck className="w-6 h-6" /> },
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-4 group">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto text-brand-gold shadow-md group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[3px] text-brand-green leading-tight opacity-70 group-hover:opacity-100 transition-opacity">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="bg-white p-10 rounded-[40px] border border-brand-green/5 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                <div className="space-y-1 text-center md:text-left">
                  <h5 className="font-headline text-xl md:text-2xl text-brand-green uppercase tracking-wider">The Sunday Sprint Loop</h5>
                  <p className="font-body text-xs text-brand-green/40 uppercase tracking-widest font-bold">A 4-Week Recurring Momentum Cycle</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-green rounded-full shadow-sm" /><span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Owned Edition</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-teal rounded-full shadow-sm" /><span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Title Sponsor</span></div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 md:gap-4">
                {[...Array(28)].map((_, i) => {
                  const isSunday = (i + 1) % 7 === 0;
                  const isOwned = isSunday && ((i + 1) === 7 || (i + 1) === 21);
                  const isSponsor = isSunday && ((i + 1) === 14 || (i + 1) === 28);
                  return (
                    <div key={i} className={cn(
                      "aspect-square rounded-xl flex items-center justify-center text-[10px] md:text-sm font-bold shadow-sm transition-all",
                      isOwned ? "bg-brand-green text-white scale-105 shadow-md" : 
                      isSponsor ? "bg-brand-teal text-white scale-105 shadow-md" : 
                      "bg-brand-cream/40 text-brand-green/10 border border-brand-green/5"
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
