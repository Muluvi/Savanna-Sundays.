
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target, Users, Gem, RefreshCcw, Landmark, Music, HardHat, Camera, Rocket, Flag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const costs = [
  { category: "Venue & Permits", range: "150k – 450k", icon: <Landmark size={16} /> },
  { category: "Talent (DJs/MC)", range: "300k – 800k", icon: <Music size={16} /> },
  { category: "AV & Stage", range: "400k – 1.2M", icon: <HardHat size={16} /> },
  { category: "Content Harvest", range: "80k – 200k", icon: <Camera size={16} /> },
];

export const SponsorshipRevenueSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Savanna Sundays is engineered as a high-performance revenue engine. We move beyond the "cost-center" model to create a multi-layered profit platform.
        </p>
      </div>

      {/* 9A: Revenue Pillars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 animate-fade-in-up">
        {[
          { label: "Ticketing", icon: <Users /> },
          { label: "Sponsorships", icon: <Target /> },
          { label: "VIP Sales", icon: <Gem /> },
          { label: "Portfolio", icon: <RefreshCcw /> },
        ].map((pillar, i) => (
          <Card key={i} className="p-4 md:p-8 bg-white border border-brand-green/5 rounded-2xl md:rounded-[24px] flex flex-col items-center text-center gap-2 md:gap-4 hover:border-brand-gold transition-colors group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              {pillar.icon}
            </div>
            <h4 className="font-headline text-xs md:text-xl text-brand-green uppercase">{pillar.label}</h4>
          </Card>
        ))}
      </div>

      {/* 9B: Costs Table */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          9B: Production Framework
        </h3>

        <div className="bg-white rounded-[24px] md:rounded-[30px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-4 md:py-6 text-xs md:text-sm">Category</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right text-xs md:text-sm">Range (KSh)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costs.map((cost, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-lg md:text-xl py-4 md:py-6 flex items-center gap-3 text-brand-green">
                    <div className="text-brand-gold">{cost.icon}</div>
                    {cost.category}
                  </TableCell>
                  <TableCell className="font-body font-bold text-base md:text-lg text-brand-teal text-right">
                    {cost.range}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 9F: Financial Growth */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 animate-fade-in-up">
        <Card className="p-6 md:p-8 bg-brand-light-yellow/10 border-2 border-brand-gold/20 rounded-[24px] md:rounded-[32px] space-y-4">
          <div className="flex items-center gap-3">
            <Rocket className="text-brand-gold" size={20} />
            <h4 className="font-headline text-lg md:text-2xl text-brand-green uppercase">Ignition</h4>
          </div>
          <div className="h-1.5 bg-brand-green/5 rounded-full overflow-hidden">
            <div className="h-full w-[40%] bg-brand-gold" />
          </div>
          <p className="font-body text-[10px] md:text-sm text-brand-green/70">Focus on brand infrastructure and recruitment.</p>
        </Card>

        <Card className="p-6 md:p-8 bg-brand-green text-white border-none rounded-[24px] md:rounded-[32px] shadow-xl">
          <div className="flex items-center gap-3">
            <Flag className="text-brand-gold" size={20} />
            <h4 className="font-headline text-lg md:text-2xl text-brand-gold uppercase">Institution</h4>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-full bg-brand-gold" />
          </div>
          <p className="font-body text-[10px] md:text-sm text-white/70">Self-sustaining profit center with 140% ROI.</p>
        </Card>
      </div>
    </div>
  );
};
