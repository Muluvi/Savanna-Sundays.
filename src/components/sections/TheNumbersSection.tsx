
"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Calendar, Landmark, ReceiptText, ShieldCheck, Zap, Music, Video, Camera, QrCode } from 'lucide-react';

const lineItems = [
  { item: "DJ 1 (Warm-Up Set)", cost: "50,000" },
  { item: "DJ 2 (Peak Time Set)", cost: "50,000" },
  { item: "MC / Host", cost: "40,000" },
  { item: "Influencer Content Pool (5 PAX)", cost: "100,000" },
  { item: "Content Generation & Production", cost: "41,250" },
  { item: "Logistics & Brand Materials", cost: "8,550" },
];

const checklistItems = [
  { label: "Branded Venues", desc: "Visual dominance at host venues.", icon: <ShieldCheck size={24} /> },
  { label: "Squad Activation", desc: "Live DJs, MC, and influencers.", icon: <Zap size={24} /> },
  { label: "Music Harvest", desc: "High-fidelity YouTube DJ sets.", icon: <Music size={24} /> },
  { label: "Social Content", desc: "Optimized Reels for all platforms.", icon: <Video size={24} /> },
  { label: "HD Photography", desc: "Lifestyle assets harvested weekly.", icon: <Camera size={24} /> },
  { label: "Data Capture", desc: "QR competitions for KWAL CRM.", icon: <QrCode size={24} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-4">
          <ReceiptText className="text-brand-gold" size={32} />
          <h4 className="font-headline text-4xl md:text-6xl text-brand-gold uppercase tracking-tighter">
            The Strategic Investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/70 text-lg leading-relaxed">
          Transparent fixed-rate model covering the entire ecosystem of content, talent, and data across Nairobi.
        </p>
      </div>

      <div className="overflow-hidden border border-white/10 bg-white/[0.02] rounded-[32px]">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-6 px-10 text-lg uppercase">
                Tactical Breakdown
              </TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-10 text-lg uppercase">
                KSh
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow 
                key={i} 
                className="border-white/5 hover:bg-white/5 transition-colors"
              >
                <TableCell className="font-body font-bold text-sm py-5 px-10 text-brand-cream/80">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-2xl text-brand-cream text-right px-10">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow className="bg-brand-gold text-brand-green">
              <TableCell className="font-headline text-3xl md:text-5xl py-8 px-10 uppercase tracking-tighter">
                Weekly Total
              </TableCell>
              <TableCell className="font-headline text-4xl md:text-6xl text-right px-10 tracking-tighter">
                336,168
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pop-Out Strategic Deliverables Section */}
      <div className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <div className="section-label mb-0">Strategic deliverables</div>
          <h4 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase tracking-tighter">What KWAL gets every week</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-6 rounded-[32px] bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-brand-gold/40 hover:-translate-y-1 shadow-xl"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-[0_0_20px_rgba(244,197,66,0.1)] group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-500">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="font-headline text-2xl text-white uppercase tracking-tight leading-tight group-hover:text-brand-gold transition-colors">{item.label}</p>
                  <p className="font-body text-brand-cream/50 text-[10px] leading-relaxed font-bold uppercase tracking-[2px]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
