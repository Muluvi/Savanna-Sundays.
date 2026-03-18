
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, TrendingUp, BarChart3, Wallet, Heart, Target } from 'lucide-react';

export const MeasurementROInSection = () => {
  return (
    <div className="space-y-24">
      {/* KPI ROI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Cost Per Attendee", value: "KSh 850", trend: "-5% vs Industry", color: "text-brand-teal" },
          { label: "Earned Media Value", value: "KSh 2.4M", trend: "7.4x Multiple", color: "text-brand-teal" },
          { label: "Content Shelf-Life", value: "45 Days", trend: "High Impact", color: "text-brand-teal" },
          { label: "Community Growth", value: "18%", trend: "MoM Compound", color: "text-brand-teal" },
          { label: "Sponsor Revenue", value: "KSh 4.2M", trend: "Edition Avg", color: "text-brand-teal" },
          { label: "Retainer Multiple", value: "12x", trend: "Annualized ROI", color: "text-brand-teal" },
          { label: "Brand Recall Score", value: "92/100", trend: "Premium Tier", color: "text-brand-teal" },
          { label: "Retention Rate", value: "64%", trend: "Loyal Core", color: "text-brand-teal" },
        ].map((item, i) => (
          <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl flex flex-col gap-2 hover:border-brand-gold transition-colors">
            <span className="font-body font-bold text-[10px] tracking-widest text-brand-green/40 uppercase">{item.label}</span>
            <div className="font-headline text-3xl text-brand-green leading-none">{item.value}</div>
            <div className="flex items-center gap-2">
              <TrendingUp size={12} className={item.color} />
              <span className={`text-[10px] font-bold ${item.color} uppercase`}>{item.trend}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* ROI Flow Cards */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
        <Card className="flex-1 p-10 bg-brand-green text-white text-center rounded-[30px] border border-white/5 relative overflow-hidden group shadow-lg">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
          <Target className="mx-auto mb-4 text-brand-gold" size={32} />
          <h6 className="font-headline text-3xl mb-2">KWAL INVESTS</h6>
          <p className="font-body text-white/50 text-xs uppercase tracking-widest">Strategic Retainer & Media</p>
        </Card>
        
        <ArrowRight className="text-brand-gold hidden md:block" size={40} />
        
        <Card className="flex-1 p-10 bg-brand-teal text-white text-center rounded-[30px] border border-white/5 relative overflow-hidden group shadow-lg">
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
          <BarChart3 className="mx-auto mb-4 text-white" size={32} />
          <h6 className="font-headline text-3xl mb-2">FIREFLY DELIVERS</h6>
          <p className="font-body text-white/50 text-xs uppercase tracking-widest">Execution & Content</p>
        </Card>

        <ArrowRight className="text-brand-gold hidden md:block" size={40} />

        <Card className="flex-1 p-10 bg-brand-gold text-brand-green text-center rounded-[30px] border border-white/5 relative overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Wallet className="mx-auto mb-4 text-brand-green" size={32} />
          <h6 className="font-headline text-3xl mb-2">KWAL RETURNS</h6>
          <p className="font-body text-brand-green/50 text-xs uppercase tracking-widest">Sales & Brand Value</p>
        </Card>
      </div>

      {/* Budget Summary Table */}
      <div className="space-y-8">
        <div className="section-label">Investment Summary</div>
        <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6">Category</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right">Per Edition</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right">Monthly Retainer</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-right">Annual Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { label: "Production & Logistics", ed: "1,200,000", mon: "-", ann: "14,400,000" },
                { label: "Talent & Entertainment", ed: "800,000", mon: "-", ann: "9,600,000" },
                { label: "Content & Digital", ed: "-", mon: "350,000", ann: "4,200,000" },
                { label: "Strategic Management", ed: "-", mon: "450,000", ann: "5,400,000" },
              ].map((row, i) => (
                <TableRow key={i} className="group hover:bg-brand-cream/50 border-l-4 border-transparent hover:border-brand-gold transition-all">
                  <TableCell className="font-headline text-xl py-6">{row.label}</TableCell>
                  <TableCell className="font-body font-bold text-right text-brand-green/60">{row.ed}</TableCell>
                  <TableCell className="font-body font-bold text-right text-brand-teal">{row.mon}</TableCell>
                  <TableCell className="font-body font-bold text-right text-brand-green">{row.ann}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
