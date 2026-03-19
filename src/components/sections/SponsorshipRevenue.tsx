
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target, Users, Gem, RefreshCcw, Landmark, Music, HardHat, Camera, Rocket, Flag } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

const costs = [
  { category: "Venue & Permits", range: "150k – 450k", icon: <Landmark size={16} /> },
  { category: "Talent (DJs/MC)", range: "300k – 800k", icon: <Music size={16} /> },
  { category: "AV & Stage", range: "400k – 1.2M", icon: <HardHat size={16} /> },
  { category: "Content Harvest", range: "80k – 200k", icon: <Camera size={16} /> },
];

export const SponsorshipRevenueSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">09A: The Profit Engine</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Moving beyond <br/>the cost-center.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            Savanna Sundays is engineered as a high-performance revenue engine. We create a multi-layered profit platform that leverages brand equity for sustainable growth.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "We don't spend budgets; we invest in equity."
            </h3>
          </div>
        </div>
      </div>

      {/* 9B: Revenue Pillars Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 animate-fade-in-up [animation-delay:200ms]">
        {[
          { label: "Ticketing", icon: <Users />, sub: "Primary Inflow" },
          { label: "Sponsorships", icon: <Target />, sub: "Portfolio Scale" },
          { label: "VIP Sales", icon: <Gem />, sub: "High-Margin" },
          { label: "Partners", icon: <RefreshCcw />, sub: "Vendor Synergy" },
        ].map((pillar, i) => (
          <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-[24px] flex flex-col items-center text-center gap-4 hover:border-brand-gold transition-all group">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              {pillar.icon}
            </div>
            <div className="space-y-1">
              <h4 className="font-headline text-lg text-brand-green uppercase leading-none">{pillar.label}</h4>
              <p className="font-body text-[8px] tracking-widest text-brand-green/30 font-bold uppercase">{pillar.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* 9C: Production Framework Table */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
        <div className="section-label">09B: Production Investment Matrix</div>
        <div className="bg-white rounded-[32px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6 px-8 text-xs md:text-sm">Investment Category</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right px-8 text-xs md:text-sm">Range (KSh)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costs.map((cost, i) => (
                <TableRow key={i} className="hover:bg-brand-gold/5 transition-colors border-brand-green/5">
                  <TableCell className="font-headline text-lg md:text-xl py-6 px-8 flex items-center gap-4 text-brand-green">
                    <div className="text-brand-gold">{cost.icon}</div>
                    {cost.category}
                  </TableCell>
                  <TableCell className="font-body font-bold text-base md:text-lg text-brand-teal text-right px-8">
                    {cost.range}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 9D: Growth Trajectory */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:600ms]">
        <Card className="p-8 bg-brand-gold/10 border-2 border-brand-gold/20 rounded-[32px] space-y-6">
          <div className="flex items-center gap-4">
            <Rocket className="text-brand-gold" size={24} />
            <h4 className="font-headline text-2xl text-brand-green uppercase">Phase 1: Ignition</h4>
          </div>
          <p className="font-body text-sm text-brand-green/70 leading-relaxed">
            Focus on brand infrastructure and attendee recruitment. Achieving break-even through high-impact content and initial sponsorship mapping.
          </p>
        </Card>

        <Card className="p-8 bg-brand-green text-white border-none rounded-[32px] space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Flag size={80} />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <Flag className="text-brand-gold" size={24} />
              <h4 className="font-headline text-2xl text-brand-gold uppercase">Phase 3: Institution</h4>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              A self-sustaining profit center. Market dominance allows for premium vendor auctions and annual gala properties with 140%+ ROI.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
