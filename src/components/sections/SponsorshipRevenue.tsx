'use client';

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Calendar, Landmark, CheckCircle2, Sparkles, ReceiptText } from 'lucide-react';

const lineItems = [
  { item: "DJ 1 (Warm-up set)", cost: "50,000" },
  { item: "DJ 2 (Peak time set)", cost: "50,000" },
  { item: "MC / Host", cost: "40,000" },
  { item: "Influencer content pool (5 PAX)", cost: "100,000" },
  { item: "Content generation & production", cost: "41,250" },
  { item: "Logistics & brand materials", cost: "8,550" },
];

const projections = [
  {
    title: "Phase 1 ignition",
    weekly: "KSh 336,168",
    weeklySub: "1 Squad + 1 Partner venue",
    monthly: "KSh 1,344,672",
    icon: <Calendar className="text-brand-gold" size={24} />
  },
  {
    title: "Phase 2 expansion",
    weekly: "KSh 336,168",
    weeklySub: "1 Squad + 2 Partner venues",
    monthly: "KSh 1,344,672",
    icon: <TrendingUp className="text-brand-gold" size={24} />
  },
  {
    title: "Quarterly projection",
    weekly: "Months 1–3",
    weeklySub: "Fixed strategic spend",
    monthly: "KSh 4,034,016",
    icon: <Landmark className="text-brand-gold" size={24} />
  }
];

const checklistItems = [
  { label: "2–3 branded venues across Nairobi every Sunday", desc: "A network of premium locations activated simultaneously." },
  { label: "1 full squad activation with live DJs, MC, and influencers", desc: "The primary narrative engine at a rotating host venue." },
  { label: "1 broadcast-quality DJ set for YouTube", desc: "High-fidelity video and audio assets for the Sunday Mix Series." },
  { label: "4 algorithm-optimised Reels for Instagram and TikTok", desc: "Short-form content designed for maximum discovery." },
  { label: "Unlimited edited, colour-graded photos", desc: "A continuous harvest of brand-safe lifestyle assets." },
  { label: "20+ influencer Stories and Reels", desc: "Immediate reach and digital amplification through trusted voices." },
  { label: "QR-driven competitions at every venue", desc: "Direct data capture and CRM growth for KWAL." },
  { label: "A growing, owned community around Savanna Sundays", desc: "Building a platform that KWAL owns forever." },
  { label: "Full brand presence on every surface", desc: "Visual dominance at all participating partner network venues." }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-4">
          <ReceiptText className="text-brand-gold" size={32} />
          <h4 className="font-headline text-3xl md:text-6xl text-brand-gold uppercase tracking-tighter">
            The strategic investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/70 text-base md:text-lg leading-relaxed">
          The activation follows a transparent fixed-rate model. This weekly investment covers the entire ecosystem of content, talent, and data across all participating network venues.
        </p>
      </div>

      <div className="overflow-hidden border-t border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-[32px]">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-6 px-10 text-lg uppercase">
                Tactical breakdown
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
                <TableCell className="font-body font-bold text-sm md:text-base py-4 px-10 text-brand-cream/80">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-2xl text-brand-cream text-right px-10">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow className="bg-white/5 border-t-2 border-white/10">
              <TableCell className="font-headline text-xl py-6 px-10 text-brand-gold/60">
                Activation subtotal
              </TableCell>
              <TableCell className="font-headline text-3xl text-brand-gold/60 text-right px-10">
                289,800
              </TableCell>
            </TableRow>

            <TableRow className="bg-brand-green/30">
              <TableCell className="font-body font-bold text-sm py-6 px-10 text-brand-gold">
                Firefly agency fee (16%)
              </TableCell>
              <TableCell className="font-headline text-3xl text-brand-gold text-right px-10">
                46,368
              </TableCell>
            </TableRow>

            <TableRow className="bg-brand-gold text-brand-green">
              <TableCell className="font-headline text-3xl md:text-5xl py-8 px-10 uppercase tracking-tighter">
                Weekly total
              </TableCell>
              <TableCell className="font-headline text-4xl md:text-6xl text-right px-10 tracking-tighter">
                336,168
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projections.map((p, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[40px] space-y-6 flex flex-col justify-between group hover:border-brand-gold/40 transition-all duration-700">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h5 className="font-headline text-2xl text-brand-gold uppercase tracking-tight">
                {p.title}
              </h5>
              <div className="space-y-1">
                <p className="font-headline text-3xl text-white">{p.weekly}</p>
                <p className="font-body text-[10px] text-white/40 font-bold uppercase tracking-[4px]">{p.weeklySub}</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <p className="font-body text-[9px] text-brand-gold uppercase tracking-[3px] font-bold mb-1">Monthly budget</p>
              <p className="font-headline text-4xl text-brand-gold tracking-tighter leading-none">
                {p.monthly}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-12 pt-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="text-brand-gold" size={28} />
            <span className="section-label mb-0">Strategic deliverables</span>
          </div>
          <h4 className="font-headline text-4xl md:text-7xl text-brand-gold uppercase tracking-tighter">
            What KWAL gets every week
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-start gap-4 p-8 rounded-[32px] bg-white/5 border border-white/5 group hover:bg-brand-gold/5 hover:border-brand-gold/20 transition-all duration-500"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-gold text-brand-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle2 size={20} />
              </div>
              <div className="space-y-1">
                <p className="font-headline text-xl text-brand-gold uppercase tracking-tight leading-tight">
                  {item.label}
                </p>
                <p className="font-body text-brand-cream/60 text-[10px] leading-relaxed font-bold uppercase tracking-widest">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
