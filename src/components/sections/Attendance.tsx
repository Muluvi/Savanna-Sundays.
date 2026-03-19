
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Volume2, TrendingUp, Award, Share2, Zap } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const AttendanceDemandSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">06A: Engineering Scarcity</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Demand isn't found; <br/>it's manufactured.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            We treat every Sunday as a high-stakes product launch. By using a precise 14-day sequence, we transform passive awareness into urgent consumer action.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "We don't sell tickets; we manage FOMO."
            </h3>
          </div>
        </div>
      </div>

      {/* 14-Day Hype Cycle Visual */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label">06B: The 14-Day Hype Sequence</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-green/10 hidden md:block -translate-y-12" />
          
          {[
            { day: "14", label: "Date Anchor", sub: "Announcement", icon: <Zap size={16} /> },
            { day: "10", label: "Spatial Reveal", sub: "Venue Drop", icon: <Zap size={16} /> },
            { day: "07", label: "Sonic Hook", sub: "DJ Reveal", icon: <Zap size={16} /> },
            { day: "00", label: "The Harvest", sub: "Live Event", icon: <Zap size={16} />, active: true },
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center shadow-xl border ${step.active ? 'bg-brand-green text-brand-gold border-brand-gold' : 'bg-white text-brand-green border-brand-green/5'}`}>
                <span className="font-headline text-2xl md:text-3xl leading-none">{step.day}</span>
                <span className="font-body text-[8px] uppercase font-bold tracking-widest opacity-50">Days</span>
              </div>
              <div className="space-y-1">
                <h5 className="font-headline text-sm md:text-lg text-brand-green uppercase">{step.label}</h5>
                <p className="font-body text-[9px] tracking-widest text-brand-green/40 font-bold uppercase">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scarcity Mechanics & Referral */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up [animation-delay:400ms]">
        <div className="bg-white rounded-[32px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6 px-8 text-xs md:text-sm">Pricing Tier</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-xs md:text-sm">KSh</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right px-8 text-xs md:text-sm">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-brand-green/5">
                <TableCell className="font-body font-bold text-xs md:text-sm px-8">Early Bird</TableCell>
                <TableCell className="font-headline text-xl text-brand-green">1,500</TableCell>
                <TableCell className="text-right px-8"><Badge className="bg-brand-green/10 text-brand-green border-none text-[8px] uppercase">Sold Out</Badge></TableCell>
              </TableRow>
              <TableRow className="bg-brand-gold/5 border-l-4 border-brand-gold border-brand-green/5">
                <TableCell className="font-body font-bold text-xs md:text-sm px-8 text-brand-gold">VIP Access</TableCell>
                <TableCell className="font-headline text-xl text-brand-gold">5,000</TableCell>
                <TableCell className="text-right px-8"><Badge className="bg-brand-gold text-brand-green border-none text-[8px] uppercase animate-pulse">Few Left</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <Card className="p-8 bg-brand-green text-white border-none rounded-[32px] shadow-2xl relative overflow-hidden group flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <Share2 size={120} />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-green flex items-center justify-center">
                <Award size={24} />
              </div>
              <h4 className="font-headline text-2xl md:text-3xl text-brand-gold uppercase">"BRING 3, GET VIP"</h4>
            </div>
            <p className="font-body text-sm md:text-lg text-white/70 leading-relaxed">
              Every ticket generates a unique referral link synced to WhatsApp. When 3 friends purchase, the original attendee is automatically upgraded to VIP—turning every customer into a recruiter.
            </p>
          </div>
        </Card>
      </div>

      {/* KPI Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 animate-fade-in-up [animation-delay:600ms]">
        {[
          { label: "Attendance Cap", value: "800+", icon: <Users />, color: "gold" },
          { label: "Savanna Units", value: "2,000+", icon: <Volume2 />, color: "teal" },
          { label: "Social Impressions", value: "1M+", icon: <TrendingUp />, color: "green" },
        ].map((stat, i) => (
          <div key={i} className="text-center p-8 bg-brand-cream rounded-[32px] border border-brand-green/5 hover:bg-white transition-all group">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 group-hover:scale-110 transition-transform ${stat.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' : stat.color === 'green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-gold/10 text-brand-gold'}`}>
              {stat.icon}
            </div>
            <h5 className="font-headline text-4xl md:text-5xl text-brand-green mb-2 leading-none">{stat.value}</h5>
            <span className="font-body font-bold text-[10px] tracking-widest text-brand-green/40 uppercase">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
