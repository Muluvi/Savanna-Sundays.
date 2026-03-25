"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, Zap } from 'lucide-react';

export const AttendanceDemandSection = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="text-brand-gold" size={20} />
            <div className="section-label mb-0">The Manufacture of Demand</div>
          </div>
          <p className="font-body text-brand-cream/80 text-base leading-relaxed">
            We transform passive awareness into urgent consumer action through a precise 14-day sequence that manages FOMO at a digital and physical level.
          </p>
        </div>
        
        <div className="relative py-4 flex flex-col items-center justify-center text-center">
          <h3 className="font-serif italic text-xl md:text-3xl text-brand-gold/80 leading-relaxed px-4">
            "We don't just sell tickets; <br className="hidden md:block" />we curate the Savanna Vybe Squad."
          </h3>
        </div>
      </div>

      {/* The 14-Day Sequence */}
      <div className="space-y-6">
        <div className="section-label text-center mb-0 opacity-100 text-brand-gold/60">The 14-Day Hype Sequence</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block" />
          {[
            { day: "14", label: "Anchor", sub: "Announcement" },
            { day: "10", label: "Spatial", sub: "Venue Drop" },
            { day: "07", label: "Sonic", sub: "DJ Reveal" },
            { day: "00", label: "Harvest", sub: "Live Event", active: true },
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-3">
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-500 shadow-xl ${step.active ? 'bg-brand-gold text-brand-green border-brand-gold animate-pulse scale-110' : 'bg-white/5 text-brand-gold border-white/10'}`}>
                <span className="font-headline text-2xl md:text-3xl leading-none">{step.day}</span>
                <span className="font-body text-[8px] uppercase font-bold tracking-widest opacity-60">Days</span>
              </div>
              <div className="space-y-0.5">
                <h5 className="font-headline text-xl text-brand-cream uppercase leading-none">{step.label}</h5>
                <p className="font-body text-[8px] tracking-[2px] text-brand-gold/40 font-bold uppercase">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-tile rounded-[24px] overflow-hidden">
          <Table>
            <TableHeader className="bg-brand-gold">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-brand-green font-headline tracking-widest py-4 px-8 text-sm uppercase">Tier</TableHead>
                <TableHead className="text-brand-green font-headline tracking-widest text-right px-8 text-sm uppercase">KSh</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="font-body font-bold text-[11px] py-4 px-8 text-brand-cream uppercase tracking-widest">Early Bird</TableCell>
                <TableCell className="font-headline text-2xl text-brand-cream text-right px-8">1,500</TableCell>
              </TableRow>
              <TableRow className="bg-white/5 border-none">
                <TableCell className="font-body font-bold text-[11px] py-4 px-8 text-brand-gold uppercase tracking-widest">VIP Access</TableCell>
                <TableCell className="font-headline text-3xl text-brand-gold text-right px-8">5,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <Card className="p-8 bg-brand-gold text-brand-green border-none rounded-[32px] shadow-2xl flex flex-col justify-center items-center text-center group">
          <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Award size={32} />
          </div>
          <h4 className="font-headline text-3xl text-brand-green uppercase leading-none mb-2">"BRING 3, GET VIP"</h4>
          <p className="font-body text-xs font-bold uppercase tracking-widest opacity-60">
            Every customer becomes a recruiter via unique referral links.
          </p>
        </Card>
      </div>
    </div>
  );
};
