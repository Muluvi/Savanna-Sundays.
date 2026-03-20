"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Volume2, TrendingUp, Award, Share2, Zap } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const AttendanceDemandSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center animate-fade-in-up">
        <div className="space-y-4">
          <div className="section-label">05A: Engineering Scarcity</div>
          <h3 className="font-headline text-2xl md:text-4xl text-brand-green uppercase leading-tight">
            Demand isn't found; <br/>it's manufactured.
          </h3>
          <p className="font-body text-xs md:text-base text-brand-green/60 leading-relaxed">
            We transform passive awareness into urgent consumer action through a precise 14-day sequence.
          </p>
        </div>
        
        <div className="relative py-6 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <h3 className="font-serif italic text-xl md:text-2xl text-brand-green/80 leading-relaxed px-4">
              "We don't sell tickets; we manage FOMO."
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-4 animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label">05B: The 14-Day Hype Sequence</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-green/10 hidden md:block" />
          {[
            { day: "14", label: "Anchor", sub: "Announcement" },
            { day: "10", label: "Spatial", sub: "Venue Drop" },
            { day: "07", label: "Sonic", sub: "DJ Reveal" },
            { day: "00", label: "Harvest", sub: "Live Event", active: true },
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-2">
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center shadow-lg border ${step.active ? 'bg-brand-green text-brand-gold border-brand-gold' : 'bg-white text-brand-green border-brand-green/5'}`}>
                <span className="font-headline text-xl md:text-2xl leading-none">{step.day}</span>
                <span className="font-body text-[7px] uppercase font-bold tracking-widest opacity-50">Days</span>
              </div>
              <div>
                <h5 className="font-headline text-xs md:text-sm text-brand-green uppercase">{step.label}</h5>
                <p className="font-body text-[7px] tracking-widest text-brand-green/40 font-bold uppercase">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-in-up [animation-delay:400ms]">
        <div className="bg-white rounded-xl overflow-hidden border border-brand-green/5 shadow-md">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-3 px-6 text-xs">Tier</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-xs">KSh</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right px-6 text-xs">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-brand-green/5">
                <TableCell className="font-body font-bold text-xs px-6">Early Bird</TableCell>
                <TableCell className="font-headline text-lg text-brand-green">1,500</TableCell>
                <TableCell className="text-right px-6"><Badge className="bg-brand-green/10 text-brand-green border-none text-[7px] uppercase">Sold Out</Badge></TableCell>
              </TableRow>
              <TableRow className="bg-brand-gold/5 border-l-4 border-brand-gold border-brand-green/5">
                <TableCell className="font-body font-bold text-xs px-6 text-brand-gold">VIP Access</TableCell>
                <TableCell className="font-headline text-lg text-brand-gold">5,000</TableCell>
                <TableCell className="text-right px-6"><Badge className="bg-brand-gold text-brand-green border-none text-[7px] uppercase">Few Left</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <Card className="p-6 bg-brand-green text-white border-none rounded-xl shadow-lg relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-green flex items-center justify-center">
                <Award size={20} />
              </div>
              <h4 className="font-headline text-xl text-brand-gold uppercase">"BRING 3, GET VIP"</h4>
            </div>
            <p className="font-body text-[11px] text-white/70 leading-relaxed">
              Every customer becomes a recruiter via unique referral links synced to WhatsApp.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
