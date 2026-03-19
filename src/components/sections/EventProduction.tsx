
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Volume2, Disc, Radio, HardHat, ShieldCheck, Zap } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

const staff = [
  { role: "Ambassadors", count: "12", duty: "Guest Experience" },
  { role: "Mixologists", count: "8", duty: "Liquid Curation" },
  { role: "Security", count: "15", duty: "Safe Haven Ops" },
  { role: "Production", count: "10", duty: "AV Execution" },
];

export const EventProductionSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">11A: Execution Excellence</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Broadcast precision, <br/>house-party warmth.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            Every Sunday is a high-stakes live broadcast. We operate with a dual-mindset: Technical precision that ensures safety and quality, paired with a vibe that feels intimate and exclusive.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "We build the stage for magic to happen."
            </h3>
          </div>
        </div>
      </div>

      {/* 11B: AV Standards Matrix */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label">11B: AV & Stage Standards</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] flex flex-col items-center text-center gap-4 hover:border-brand-gold transition-all group">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Volume2 size={28} />
            </div>
            <div>
              <h4 className="font-headline text-2xl text-brand-green uppercase">Hi-Fi PA</h4>
              <p className="font-body text-xs text-brand-green/40 leading-relaxed">L-Acoustics/RCF tuned for crisp mid-range clarity.</p>
            </div>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] flex flex-col items-center text-center gap-4 hover:border-brand-teal transition-all group">
            <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              <Disc size={28} />
            </div>
            <div>
              <h4 className="font-headline text-2xl text-brand-green uppercase">DJ Monitoring</h4>
              <p className="font-body text-xs text-brand-green/40 leading-relaxed">CDJ-3000s + DJM-A9 Standard Mandatory.</p>
            </div>
          </Card>

          <Card className="p-8 bg-brand-green text-white border-none rounded-[32px] flex flex-col items-center text-center gap-4 shadow-xl group">
            <div className="w-14 h-14 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <Radio size={28} />
            </div>
            <div>
              <h4 className="font-headline text-2xl text-brand-gold uppercase">Sonic Harvest</h4>
              <p className="font-body text-xs text-white/50 leading-relaxed">Direct XLR board-feed for the Sunday Mix Series.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* 11C: Human Infrastructure */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
        <div className="section-label">11C: The Human Infrastructure</div>
        <div className="bg-white rounded-[32px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6 px-8 text-xs md:text-sm">Human Asset</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-center text-xs md:text-sm">Unit Count</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right px-8 text-xs md:text-sm">Strategic Duty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staff.map((s, i) => (
                <TableRow key={i} className="hover:bg-brand-gold/5 transition-colors border-brand-green/5">
                  <TableCell className="font-headline text-lg md:text-2xl py-6 px-8 text-brand-green">{s.role}</TableCell>
                  <TableCell className="font-body font-bold text-center text-brand-teal">{s.count} PAX</TableCell>
                  <TableCell className="font-body text-[10px] text-brand-green/40 font-bold uppercase tracking-widest text-right px-8">{s.duty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
