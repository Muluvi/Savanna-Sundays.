"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Target, Users, Gem, RefreshCcw, Landmark, Music, HardHat, Camera, Rocket, Flag } from 'lucide-react';

const costs = [
  { category: "Venue & Permits", range: "150k – 450k", icon: <Landmark size={14} /> },
  { category: "Talent (DJs/MC)", range: "300k – 800k", icon: <Music size={14} /> },
  { category: "AV & Stage", range: "400k – 1.2M", icon: <HardHat size={14} /> },
  { category: "Content That Works Hard", range: "80k – 200k", icon: <Camera size={14} /> },
];

export const SponsorshipRevenueSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center animate-fade-in-up">
        <div className="space-y-4">
          <div className="section-label">06A: The Profit Engine</div>
          <p className="font-body text-xs md:text-base text-brand-green/60 leading-relaxed">
            Savanna Sundays is engineered as a high-performance revenue engine leverage brand equity for sustainable growth.
          </p>
        </div>
        
        <div className="py-6 flex flex-col items-center justify-center">
          <h3 className="font-serif italic text-xl md:text-2xl text-brand-green/80 leading-relaxed px-4 text-center">
            "We invest in equity."
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 animate-fade-in-up [animation-delay:200ms]">
        {[
          { label: "Ticketing", icon: <Users size={16} /> },
          { label: "Sponsorships", icon: <Target size={16} /> },
          { label: "VIP Sales", icon: <Gem size={16} /> },
          { label: "Partners", icon: <RefreshCcw size={16} /> },
        ].map((pillar, i) => (
          <Card key={i} className="p-4 bg-white border border-brand-green/5 rounded-xl flex flex-col items-center text-center gap-2 hover:border-brand-gold transition-all">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              {pillar.icon}
            </div>
            <h4 className="font-headline text-sm text-brand-green uppercase leading-none">{pillar.label}</h4>
          </Card>
        ))}
      </div>

      <div className="space-y-4 animate-fade-in-up [animation-delay:400ms]">
        <div className="section-label">06B: Production Investment Matrix</div>
        <div className="bg-white rounded-xl overflow-hidden border border-brand-green/5 shadow-md">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-3 px-6 text-xs">Investment Category</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right px-6 text-xs">KSh Range</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costs.map((cost, i) => (
                <TableRow key={i} className="hover:bg-brand-gold/5 transition-colors border-brand-green/5">
                  <TableCell className="font-headline text-lg py-3 px-6 flex items-center gap-3 text-brand-green">
                    <div className="text-brand-gold">{cost.icon}</div>
                    {cost.category}
                  </TableCell>
                  <TableCell className="font-body font-bold text-sm text-brand-teal text-right px-6">
                    {cost.range}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
