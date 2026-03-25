"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReceiptText, ShieldCheck, Zap, Music, Video, Camera, QrCode } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const lineItems = [
  { item: "DJs / Performing Artists", cost: "100,000" },
  { item: "MC / Brand Host — The Voice", cost: "50,000" },
  { item: "Influencer Pool (5 PAX)", cost: "100,000" },
  { item: "Content Crew (Social/Video)", cost: "48,000" },
  { item: "Firefly Management (16%)", cost: "47,680" },
];

const checklistItems = [
  { label: "Branded Venues", desc: "Visual dominance at host venues.", icon: <ShieldCheck size={24} /> },
  { label: "Squad Activation", desc: "Live DJs, MC, and influencers.", icon: <Zap size={24} /> },
  { label: "Music Harvest", desc: "High-fidelity YouTube DJ sets.", icon: <Music size={24} /> },
  { label: "Social Content", desc: "Optimised Reels for all platforms.", icon: <Video size={24} /> },
  { label: "HD Photography", desc: "Lifestyle assets harvested weekly.", icon: <Camera size={24} /> },
  { label: "Data Capture", desc: "QR competitions for KWAL CRM.", icon: <QrCode size={24} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-10 md:space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <ReceiptText className="text-brand-gold shrink-0" size={24} />
          <h4 className="font-headline text-[var(--text-xl)] md:text-[var(--text-4xl)] text-brand-gold uppercase tracking-tighter leading-none">
            The investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-lg)] max-w-2xl leading-relaxed">
          Transparent weekly activation model covering talent, content production, and professional management city-wide.
        </p>
      </div>

      <div className="glass-tile rounded-[32px] overflow-hidden border border-white/5 shadow-xl">
        <Table className="w-full">
          <TableHeader className="bg-brand-gold">
            <TableRow className="border-none hover:bg-brand-gold">
              <TableHead className="text-brand-green font-headline tracking-[3px] py-4 px-6 md:px-10 text-[var(--text-xs)] uppercase">Breakdown</TableHead>
              <TableHead className="text-brand-green font-headline tracking-[3px] text-right px-6 md:px-10 text-[var(--text-xs)] uppercase">KSh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow 
                key={i} 
                className="border-white/5 transition-all duration-300 hover:bg-white/10"
              >
                <TableCell className="font-body font-bold text-[10px] md:text-[var(--text-base)] py-4 px-6 md:px-10 text-brand-cream/90 uppercase tracking-[1px] leading-snug">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-[var(--text-lg)] md:text-[var(--text-2xl)] text-brand-gold text-right px-6 md:px-10">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow className="bg-brand-gold/[0.08] border-y border-brand-gold/20 hover:bg-brand-gold/15 transition-colors">
              <TableCell className="font-headline text-[var(--text-lg)] md:text-[var(--text-3xl)] py-6 px-6 md:px-10 text-brand-gold uppercase tracking-tighter">
                Weekly total
              </TableCell>
              <TableCell className="font-headline text-[var(--text-2xl)] md:text-[var(--text-5xl)] text-brand-gold text-right px-6 md:px-10 tracking-tighter">
                <AnimatedCounter value="345680" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-8 pt-4">
        <div className="text-center space-y-2">
          <div className="section-label mb-0">Strategic deliverables</div>
          <h4 className="font-headline text-[var(--text-xl)] md:text-[var(--text-4xl)] text-brand-gold uppercase tracking-tighter leading-none">What KWAL gets every week</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-6 md:p-8 rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-700 hover:bg-white/[0.05] hover:border-brand-gold/20 hover:-translate-y-1 shadow-lg"
            >
              <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-[0_0_15px_rgba(244,197,66,0.1)] group-hover:scale-105 group-hover:bg-brand-gold/15 transition-all duration-700">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="font-headline text-[var(--text-lg)] md:text-[var(--text-2xl)] text-white uppercase tracking-tight leading-none group-hover:text-brand-gold transition-colors">
                    {item.label}
                  </p>
                  <p className="font-body text-brand-cream/50 text-[8px] md:text-[var(--text-xs)] leading-relaxed font-bold uppercase tracking-[2px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};