
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Volume2, TrendingUp, Award } from 'lucide-react';

export const AttendanceDemandSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Engineering attendance is a repeatable system of demand management. We treat every Sunday as a high-stakes launch, using a precise 14-day sequence that transforms passive awareness into urgent action.
        </p>
      </div>

      {/* 6A: The 14-Day Hype Cycle */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6A: The 14-Day Hype Cycle
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <Card className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-2xl space-y-2 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-lg md:text-xl">14</div>
              <h4 className="font-headline text-sm md:text-xl text-brand-green uppercase">Day 14</h4>
            </div>
            <p className="font-body text-[10px] md:text-sm text-brand-green/70">Date Anchor announcement.</p>
          </Card>

          <Card className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-2xl space-y-2 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-lg md:text-xl">10</div>
              <h4 className="font-headline text-sm md:text-xl text-brand-green uppercase">Day 10</h4>
            </div>
            <p className="font-body text-[10px] md:text-sm text-brand-green/70">Spatial Reveal (Venue).</p>
          </Card>

          <Card className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-2xl space-y-2 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-headline text-lg md:text-xl">07</div>
              <h4 className="font-headline text-sm md:text-xl text-brand-green uppercase">Day 07</h4>
            </div>
            <p className="font-body text-[10px] md:text-sm text-brand-green/70">Sonic Hook (1st DJ).</p>
          </Card>

          <Card className="p-4 md:p-6 bg-brand-green text-white border-none rounded-2xl space-y-2 md:space-y-4 shadow-xl">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold text-brand-green flex items-center justify-center font-headline text-lg md:text-xl">00</div>
              <h4 className="font-headline text-sm md:text-xl text-brand-gold uppercase">Day 00</h4>
            </div>
            <p className="font-body text-[10px] md:text-sm text-white/70">Live Event Harvest.</p>
          </Card>
        </div>
      </div>

      {/* 6B: Strategic Scarcity */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          6B: Scarcity Mechanics
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-white rounded-[24px] md:rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
            <Table>
              <TableHeader className="bg-brand-green">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="text-white font-headline tracking-widest py-4 md:py-6 text-xs md:text-sm">Tier</TableHead>
                  <TableHead className="text-white font-headline tracking-widest text-xs md:text-sm">Price (KSh)</TableHead>
                  <TableHead className="text-white font-headline tracking-widest text-xs md:text-sm">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-body font-bold text-xs md:text-sm">Early Bird</TableCell>
                  <TableCell className="font-headline text-lg md:text-xl">1,500</TableCell>
                  <TableCell><Badge className="bg-brand-green/10 text-brand-green border-none text-[8px] md:text-[10px]">Sold Out</Badge></TableCell>
                </TableRow>
                <TableRow className="border-l-4 border-brand-gold bg-brand-gold/5">
                  <TableCell className="font-body font-bold text-xs md:text-sm text-brand-gold">VIP Access</TableCell>
                  <TableCell className="font-headline text-lg md:text-xl text-brand-gold">5,000</TableCell>
                  <TableCell><Badge className="bg-brand-gold text-brand-green border-none text-[8px] md:text-[10px] animate-pulse">Few Left</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <Card className="p-6 md:p-8 bg-brand-gold/10 border-2 border-brand-gold rounded-[24px] md:rounded-[32px] space-y-4">
            <div className="flex items-center gap-4">
              <Award className="text-brand-gold" size={24} />
              <h4 className="font-headline text-xl md:text-2xl text-brand-green">"BRING 3, GET VIP"</h4>
            </div>
            <p className="font-body text-xs md:text-sm text-brand-green/80">Every ticket generates a unique referral link synced to WhatsApp. 3 friends = Automatic VIP upgrade.</p>
          </Card>
        </div>
      </div>

      {/* Stats Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {[
          { label: "Expected Attendance", value: "800+", icon: <Users /> },
          { label: "Savanna Units Sold", value: "2,000+", icon: <Volume2 />, color: "teal" },
          { label: "Monthly Impressions", value: "1M+", icon: <TrendingUp />, color: "green" },
        ].map((stat, i) => (
          <div key={i} className="text-center p-6 md:p-8 bg-brand-cream rounded-2xl md:rounded-3xl border border-brand-green/5 hover:bg-white transition-colors">
            <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full mb-4 md:mb-6 ${stat.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' : stat.color === 'green' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-gold/10 text-brand-gold'}`}>
              {stat.icon}
            </div>
            <h5 className="font-headline text-4xl md:text-5xl text-brand-gold mb-1 md:mb-2 leading-none">{stat.value}</h5>
            <span className="font-body font-bold text-[8px] md:text-[10px] tracking-widest text-brand-green/40 uppercase">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
