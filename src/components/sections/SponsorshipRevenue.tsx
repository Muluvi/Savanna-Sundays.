"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info, TrendingUp, Calendar, Landmark, CheckCircle2, Sparkles } from 'lucide-react';
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
  "2–3 branded venues across Nairobi every Sunday",
  "1 full squad activation with live DJs, MC, and influencers",
  "1 broadcast-quality DJ set for YouTube",
  "4 algorithm-optimised Reels for Instagram and TikTok",
  "Unlimited edited, colour-graded photos",
  "20+ influencer Stories and Reels",
  "QR-driven competitions at every venue (built by Firefly)",
  "A growing, owned community around Savanna Sundays",
  "Full brand presence on every surface, every Sunday"
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4 max-w-2xl">
        <h4 className="font-headline text-2xl md:text-3xl text-brand-gold uppercase tracking-tight">
          Weekly investment per Sunday Activation
        </h4>
        <p className="font-body text-brand-cream/60 text-sm md:text-base leading-relaxed">
          The activation follows a transparent fixed-rate model. This weekly investment covers the entire Sunday ecosystem across all participating venues.
        </p>
      </div>

      <div className="bg-brand-dark-alt rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="text-brand-green font-headline tracking-widest py-5 px-8 text-sm uppercase">
                Item Breakdown
              </TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-8 text-sm uppercase">
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
                <TableCell className="font-body font-bold text-xs md:text-sm py-4 px-8 text-brand-cream/80">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-lg md:text-xl text-brand-cream text-right px-8">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            <TableRow className="bg-white/5 border-t-2 border-white/10">
              <TableCell className="font-headline text-lg py-5 px-8 text-brand-gold/60">
                Activation Subtotal
              </TableCell>
              <TableCell className="font-headline text-2xl text-brand-gold/60 text-right px-8">
                289,800
              </TableCell>
            </TableRow>

            <TableRow className="bg-brand-green/40">
              <TableCell className="font-body font-bold text-xs py-5 px-8 text-brand-gold">
                Firefly Agency Fee (16%)
              </TableCell>
              <TableCell className="font-headline text-2xl text-brand-gold text-right px-8">
                46,368
              </TableCell>
            </TableRow>

            <TableRow className="bg-brand-gold text-brand-green">
              <TableCell className="font-headline text-2xl md:text-3xl py-6 px-8 uppercase tracking-tighter">
                Weekly Total
              </TableCell>
              <TableCell className="font-headline text-3xl md:text-4xl text-right px-8 tracking-tighter">
                336,168
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projections.map((p, i) => (
          <Card key={i} className="p-6 bg-white/5 border border-white/10 rounded-[28px] space-y-4 flex flex-col justify-between group hover:border-brand-gold/40 transition-all duration-500">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                {p.icon}
              </div>
              <h5 className="font-headline text-xl text-brand-gold uppercase tracking-tight">
                {p.title}
              </h5>
              <div className="space-y-1">
                <p className="font-headline text-2xl text-white">{p.weekly}</p>
                <p className="font-body text-[10px] text-white/40 font-bold uppercase tracking-widest">{p.weeklySub}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/5">
              <p className="font-body text-[10px] text-brand-gold uppercase tracking-[2px] font-bold mb-1">Monthly Total</p>
              <p className="font-headline text-3xl text-brand-gold tracking-tighter leading-none">
                {p.monthly}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="pt-16 space-y-10">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="text-brand-gold" size={24} />
            <span className="section-label mb-0">Executive Summary</span>
          </div>
          <h4 className="font-headline text-4xl md:text-6xl text-brand-gold uppercase tracking-tighter">
            What KWAL Gets Every Week
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-brand-gold/5 hover:border-brand-gold/20 transition-all"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-gold text-brand-green flex items-center justify-center">
                <CheckCircle2 size={18} />
              </div>
              <p className="font-body text-brand-cream/90 text-sm md:text-base leading-snug font-bold uppercase tracking-tight">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};