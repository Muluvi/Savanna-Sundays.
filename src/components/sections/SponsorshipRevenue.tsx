"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Calendar, Landmark, CheckCircle2, Sparkles, ReceiptText } from 'lucide-react';
import { cn } from '@/lib/utils';

const lineItems = [
  { item: "DJ 1 (Warm-Up Set)", cost: "50,000" },
  { item: "DJ 2 (Peak Time Set)", cost: "50,000" },
  { item: "MC / Host", cost: "40,000" },
  { item: "Influencer Content Pool (5 PAX)", cost: "100,000" },
  { item: "Content Generation & Production", cost: "41,250" },
  { item: "Logistics & Brand Materials", cost: "8,550" },
];

const projections = [
  {
    title: "Phase 1 Ignition",
    weekly: "KSh 336,168",
    weeklySub: "1 Squad + 1 Partner Venue",
    monthly: "KSh 1,344,672",
    icon: <Calendar className="text-brand-gold" size={24} />
  },
  {
    title: "Phase 2 Expansion",
    weekly: "KSh 336,168",
    weeklySub: "1 Squad + 2 Partner Venues",
    monthly: "KSh 1,344,672",
    icon: <TrendingUp className="text-brand-gold" size={24} />
  },
  {
    title: "Quarterly Projection",
    weekly: "Months 1–3",
    weeklySub: "Fixed Strategic Spend",
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
    <div className="space-y-24">
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-4">
          <ReceiptText className="text-brand-gold" size={32} />
          <h4 className="font-headline text-4xl md:text-6xl text-brand-gold uppercase tracking-tighter">
            The Strategic Investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/70 text-lg md:text-xl leading-relaxed">
          The activation follows a transparent fixed-rate model. This weekly investment covers the entire ecosystem of content, talent, and data across all participating venues.
        </p>
      </div>

      <div className="overflow-hidden border-t border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-[40px]">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-8 px-12 text-lg uppercase">
                Tactical Breakdown
              </TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-12 text-lg uppercase">
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
                <TableCell className="font-body font-bold text-sm md:text-base py-6 px-12 text-brand-cream/80">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-2xl text-brand-cream text-right px-12">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow className="bg-white/5 border-t-2 border-white/10">
              <TableCell className="font-headline text-xl py-8 px-12 text-brand-gold/60">
                Activation Subtotal
              </TableCell>
              <TableCell className="font-headline text-3xl text-brand-gold/60 text-right px-12">
                289,800
              </TableCell>
            </TableRow>

            <TableRow className="bg-brand-green/30">
              <TableCell className="font-body font-bold text-sm py-8 px-12 text-brand-gold">
                Firefly Agency Fee (16%)
              </TableCell>
              <TableCell className="font-headline text-3xl text-brand-gold text-right px-12">
                46,368
              </TableCell>
            </TableRow>

            <TableRow className="bg-brand-gold text-brand-green">
              <TableCell className="font-headline text-3xl md:text-5xl py-10 px-12 uppercase tracking-tighter">
                Weekly Total
              </TableCell>
              <TableCell className="font-headline text-4xl md:text-6xl text-right px-12 tracking-tighter">
                336,168
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projections.map((p, i) => (
          <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[48px] space-y-8 flex flex-col justify-between group hover:border-brand-gold/40 transition-all duration-700">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h5 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">
                {p.title}
              </h5>
              <div className="space-y-2">
                <p className="font-headline text-4xl text-white">{p.weekly}</p>
                <p className="font-body text-[11px] text-white/40 font-bold uppercase tracking-[4px]">{p.weeklySub}</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="font-body text-[11px] text-brand-gold uppercase tracking-[3px] font-bold mb-2">Monthly Budget</p>
              <p className="font-headline text-5xl text-brand-gold tracking-tighter leading-none">
                {p.monthly}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-16 pt-16" id="what-kwal-gets">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Sparkles className="text-brand-gold" size={32} />
            <span className="section-label mb-0">Strategic Deliverables</span>
          </div>
          <h4 className="font-headline text-5xl md:text-8xl text-brand-gold uppercase tracking-tighter">
            What KWAL Gets Every Week
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-start gap-6 p-10 rounded-[40px] bg-white/5 border border-white/5 group hover:bg-brand-gold/5 hover:border-brand-gold/20 transition-all duration-500"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-brand-gold text-brand-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <div className="space-y-2">
                <p className="font-headline text-2xl text-brand-gold uppercase tracking-tight leading-tight">
                  {item.label}
                </p>
                <p className="font-body text-brand-cream/60 text-xs leading-relaxed font-bold uppercase tracking-widest">
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