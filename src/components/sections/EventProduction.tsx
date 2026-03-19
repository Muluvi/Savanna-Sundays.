
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Volume2, Disc, Radio } from 'lucide-react';

const staff = [
  { role: "Ambassadors", count: "12", inv: "120k–180k" },
  { role: "Mixologists", count: "8", inv: "80k–150k" },
  { role: "Security", count: "15", inv: "150k–250k" },
  { role: "Production", count: "10", inv: "100k–200k" },
];

export const EventProductionSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          We operate with a dual-mindset: <strong>Broadcast-Level Precision</strong> meeting <strong>House-Party Warmth</strong>. Every Sunday is a high-stakes live broadcast.
        </p>
      </div>

      {/* 11B: AV Standards */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11B: AV Standards
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-5 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0"><Volume2 size={20} /></div>
            <div>
              <h4 className="font-headline text-lg text-brand-green uppercase mb-1">Hi-Fi PA</h4>
              <p className="font-body text-[10px] text-brand-green/60">L-Acoustics/RCF tuned for mid-range clarity.</p>
            </div>
          </Card>
          <Card className="p-5 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0"><Disc size={20} /></div>
            <div>
              <h4 className="font-headline text-lg text-brand-green uppercase mb-1">DJ Monitoring</h4>
              <p className="font-body text-[10px] text-brand-green/60">CDJ-3000s + DJM-A9 Mandatory.</p>
            </div>
          </Card>
          <Card className="p-5 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0"><Radio size={20} /></div>
            <div>
              <h4 className="font-headline text-lg text-brand-green uppercase mb-1">Audio Capture</h4>
              <p className="font-body text-[10px] text-brand-green/60">Direct XLR board-feed for Mix Series.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* 11C: Human Infrastructure */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          11C: Staffing Matrix
        </h3>
        
        <div className="bg-white rounded-[24px] md:rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-4 md:py-6 text-xs md:text-sm">Role</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-center text-xs md:text-sm">Count</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right text-xs md:text-sm">Range (KSh)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staff.map((s, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-base md:text-lg py-4 md:py-6 text-brand-green">{s.role}</TableCell>
                  <TableCell className="font-body font-bold text-center text-brand-teal">{s.count}</TableCell>
                  <TableCell className="font-body font-bold text-right text-brand-green/60">{s.inv}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
