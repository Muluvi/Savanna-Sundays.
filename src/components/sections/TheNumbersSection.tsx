"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReceiptText, ShieldCheck, Zap, Music, Video, Camera, QrCode } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const lineItems = [
  { item: "DJs / Performing Artists (Bongo, R&B, Afrobeats, Amapiano)", cost: "100,000" },
  { item: "MC / Brand Host — The Savanna Voice", cost: "40,000" },
  { item: "Influencer Pool (5 PAX) • Cumulative Reach: 70k+", cost: "100,000" },
  { item: "Content Production Crew (Video/Photo/Social)", cost: "48,000" },
  { item: "Firefly Management Fee (16%)", cost: "46,080" },
];

const checklistItems = [
  { label: "Branded Venues", desc: "Visual dominance at host venues.", icon: <ShieldCheck size={28} /> },
  { label: "Squad Activation", desc: "Live DJs, MC, and influencers.", icon: <Zap size={28} /> },
  { label: "Music Harvest", desc: "High-fidelity YouTube DJ sets.", icon: <Music size={28} /> },
  { label: "Social Content", desc: "Optimised Reels for all platforms.", icon: <Video size={28} /> },
  { label: "HD Photography", desc: "Lifestyle assets harvested weekly.", icon: <Camera size={28} /> },
  { label: "Data Capture", desc: "QR competitions for KWAL CRM.", icon: <QrCode size={28} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-20">
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <ReceiptText className="text-brand-gold" size={32} />
          <h4 className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold uppercase tracking-tighter leading-none">
            The investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/80 text-[var(--text-lg)] max-w-3xl leading-relaxed">
          Transparent weekly activation model covering talent, content production, and professional management city-wide.
        </p>
      </div>

      <div className="glass-tile rounded-[48px] overflow-hidden border border-white/5 shadow-2xl">
        <Table className="w-full">
          <TableHeader className="bg-brand-gold">
            <TableRow className="border-none hover:bg-brand-gold">
              <TableHead className="text-brand-green font-headline tracking-[4px] py-8 px-8 md:px-12 text-[var(--text-sm)] uppercase">Breakdown</TableHead>
              <TableHead className="text-brand-green font-headline tracking-[4px] text-right px-8 md:px-12 text-[var(--text-sm)] uppercase">KSh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow 
                key={i} 
                className="border-white/5 transition-all duration-300 hover:bg-white/10"
              >
                <TableCell className="font-body font-bold text-[10px] md:text-[var(--text-base)] py-8 px-8 md:px-12 text-brand-cream/90 uppercase tracking-[2px] leading-relaxed">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] text-brand-gold text-right px-8 md:px-12">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow className="bg-brand-gold/[0.12] border-y border-brand-gold/30 hover:bg-brand-gold/20 transition-colors">
              <TableCell className="font-headline text-[var(--text-2xl)] md:text-[var(--text-5xl)] py-10 px-8 md:px-12 text-brand-gold uppercase tracking-tighter">
                Weekly total
              </TableCell>
              <TableCell className="font-headline text-[var(--text-4xl)] md:text-[var(--text-7xl)] text-brand-gold text-right px-8 md:px-12 tracking-tighter">
                <AnimatedCounter value="334080" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-16 pt-12">
        <div className="text-center space-y-4">
          <div className="section-label mb-0">Strategic deliverables</div>
          <h4 className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold uppercase tracking-tighter leading-none">What KWAL gets every week</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[48px] bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-700 hover:bg-white/[0.08] hover:border-brand-gold/40 hover:-translate-y-2 shadow-2xl"
            >
              <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-8">
                <div className="w-20 h-20 rounded-3xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-[0_0_30px_rgba(244,197,66,0.15)] group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-700">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <p className="font-headline text-[var(--text-2xl)] md:text-[var(--text-3xl)] text-white uppercase tracking-tight leading-none group-hover:text-brand-gold transition-colors">
                    {item.label}
                  </p>
                  <p className="font-body text-brand-cream/50 text-[10px] md:text-[var(--text-xs)] leading-relaxed font-bold uppercase tracking-[4px]">
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
