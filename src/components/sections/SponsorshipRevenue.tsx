
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, DollarSign, PieChart, ArrowRight } from 'lucide-react';

const tiers = [
  { name: "Title Sponsor", price: "5,000,000+", touchpoints: "Exclusive Naming, Main Stage, Digital Takeover", exclusivity: "Full Category", border: "4px" },
  { name: "Presenting Partner", price: "2,500,000", touchpoints: "Zone Ownership, Co-branded Content", exclusivity: "Limited", border: "3px" },
  { name: "Category Sponsor", price: "1,200,000", touchpoints: "Product Placement, 1x Activation Hub", exclusivity: "Non-Exclusive", border: "2px" },
  { name: "Activation Partner", price: "500,000", touchpoints: "Pop-up Station, Sampling Rights", exclusivity: "Open", border: "1px" },
];

export const SponsorshipRevenueSection = () => {
  return (
    <div className="space-y-24">
      {/* Sponsor Tier Table */}
      <div className="space-y-8">
        <div className="section-label">09.1 — Commercial Partnership Matrix</div>
        <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-xl">
          <Table>
            <TableHeader className="bg-brand-gold">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-brand-green font-headline tracking-widest py-6 text-xl">Tier</TableHead>
                <TableHead className="text-brand-green font-headline tracking-widest text-xl text-right">Investment (KSh)</TableHead>
                <TableHead className="text-brand-green font-headline tracking-widest text-xl">Touchpoints</TableHead>
                <TableHead className="text-brand-green font-headline tracking-widest text-xl">Exclusivity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tiers.map((tier, i) => (
                <TableRow key={i} className="group hover:bg-brand-cream/50 transition-colors">
                  <TableCell className="font-headline text-2xl py-8 text-brand-green flex items-center gap-4">
                    <div className="h-10 bg-brand-gold" style={{ width: tier.border }} />
                    {tier.name}
                  </TableCell>
                  <TableCell className="font-body font-bold text-xl text-brand-green text-right">
                    {tier.price}
                  </TableCell>
                  <TableCell className="font-body text-sm text-brand-green/60 max-w-xs">
                    {tier.touchpoints}
                  </TableCell>
                  <TableCell className="font-body text-sm font-bold text-brand-teal uppercase tracking-widest">
                    {tier.exclusivity}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-brand-green">
                <TableCell className="font-headline text-2xl text-brand-gold py-6 pl-10">TOTAL POTENTIAL</TableCell>
                <TableCell className="font-body font-bold text-2xl text-brand-gold text-right pr-10">10,000,000+ / EDITION</TableCell>
                <TableCell colSpan={2} />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Revenue Mix & ROI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="section-label">Revenue Mix Proportion</div>
          <div className="flex h-16 w-full rounded-2xl overflow-hidden shadow-inner border border-brand-green/5">
            <div className="h-full w-[40%] bg-brand-gold flex items-center justify-center font-headline text-brand-green text-xs md:text-sm">40% Tickets</div>
            <div className="h-full w-[30%] bg-brand-teal flex items-center justify-center font-headline text-white text-xs md:text-sm">30% Sponsors</div>
            <div className="h-full w-[20%] bg-brand-green flex items-center justify-center font-headline text-brand-gold text-xs md:text-sm">20% Sales</div>
            <div className="h-full w-[10%] bg-brand-light-yellow flex items-center justify-center font-headline text-brand-green text-xs md:text-sm">10% Fees</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-8 bg-brand-cream border border-brand-green/5 text-center flex flex-col gap-2">
            <span className="font-body font-bold text-[10px] tracking-widest text-brand-green/40 uppercase">Before Firefly</span>
            <span className="font-headline text-2xl text-brand-green/30 line-through">Organic Growth</span>
            <span className="text-[10px] text-brand-green/40 font-bold uppercase tracking-tighter">Fragmented Data</span>
          </Card>
          <Card className="p-8 bg-white border-2 border-brand-gold text-center flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2"><TrendingUp size={12} className="text-brand-gold" /></div>
            <span className="font-body font-bold text-[10px] tracking-widest text-brand-gold uppercase">After Firefly</span>
            <span className="font-headline text-2xl text-brand-green">Unified Engine</span>
            <span className="text-[10px] text-brand-teal font-bold uppercase tracking-tighter">100% Retained Audience</span>
          </Card>
        </div>
      </div>
    </div>
  );
};
