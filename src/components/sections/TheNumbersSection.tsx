"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Calendar, Landmark, CheckCircle2, Sparkles, ReceiptText } from 'lucide-react';

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

      <div className="overflow-hidden border-t border-white/5">
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
            
            <TableRow className="border-t-2 border-white/10">
              <TableCell className="font-headline text-xl py-6 px-10 text-brand-gold/60">
                Activation Subtotal
              </TableCell>
              <TableCell className="font-headline text-3xl text-brand-gold/60 text-right px-10">
                289,800
              </TableCell>
            </TableRow>

            <TableRow className="bg-brand-gold/10">
              <TableCell className="font-body font-bold text-sm py-6 px-10 text-brand-gold">
                Firefly Agency Fee (16%)
              </TableCell>
              <TableCell className="font-headline text-3xl text-brand-gold text-right px-10">
                46,368
              </TableCell>
            </TableRow>

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projections.map((p, i) => (
          <div key={i} className="p-10 border border-brand-gold/10 rounded-[48px] space-y-8 flex flex-col justify-between group hover:border-brand-gold/30 transition-all duration-700">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h5 className="font-headline text-3xl text-brand-gold uppercase tracking-tight">
                {p.title}
              </h5>
              <div className="space-y-1">
                <p className="font-headline text-4xl text-white">{p.weekly}</p>
                <p className="font-body text-[10px] text-white/40 font-bold uppercase tracking-[4px]">{p.weeklySub}</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <p className="font-body text-[10px] text-brand-gold uppercase tracking-[3px] font-bold mb-1">Monthly Budget</p>
              <p className="font-headline text-5xl text-brand-gold tracking-tighter leading-none">
                {p.monthly}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};