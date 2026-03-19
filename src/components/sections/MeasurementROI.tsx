
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, TrendingUp, BarChart3, Wallet, Target, Users, Zap, ShoppingBag, Share2, Search, CheckCircle2, Clock } from 'lucide-react';

const primaryKPIs = [
  { 
    label: "Attendance Metrics", 
    value: "800+ PAX", 
    sub: "90% Scan Accuracy", 
    icon: <Users size={20} />,
    metrics: ["Unique QR Scans", "Arrival Velocity", "Dwell Time"]
  },
  { 
    label: "Digital Engagement", 
    value: "1.2M+", 
    sub: "Monthly Reach", 
    icon: <Share2 size={20} />,
    metrics: ["UGC Posts", "Reels Impressions", "WhatsApp Shares"]
  },
  { 
    label: "Sales Velocity", 
    value: "2.8 Units", 
    sub: "Avg. Per Attendee", 
    icon: <ShoppingBag size={20} />,
    metrics: ["Variant Mix ROI", "VIP Spend Index", "Sampling Conversion"]
  },
  { 
    label: "Content Output", 
    value: "150+ Assets", 
    sub: "Per Edition Harvest", 
    icon: <Zap size={20} />,
    metrics: ["High-Res Photos", "Cinematic Reels", "Mix Series Plays"]
  },
];

export const MeasurementROInSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          At Firefly, we believe that if it isn't measured, it didn't happen. We move beyond "vanity metrics" to a rigorous data-driven accountability framework. Every edition of Savanna Sundays is backed by a comprehensive ROI report that links physical attendance and content capture directly to KWAL's commercial objectives. Measurement is our primary tool for continuous optimization and strategic transparency.
        </p>
      </div>

      {/* 12A: The Real-Time KPI Dashboard */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          12A: The Real-Time KPI Dashboard
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryKPIs.map((kpi, i) => (
            <Card key={i} className="p-8 bg-white border border-brand-green/5 rounded-[32px] flex flex-col gap-6 hover:border-brand-gold transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                {kpi.icon}
              </div>
              <div className="space-y-1">
                <span className="font-body font-bold text-[10px] tracking-[2px] text-brand-teal uppercase">{kpi.label}</span>
                <div className="font-headline text-4xl text-brand-green leading-none">{kpi.value}</div>
                <p className="font-body text-xs text-brand-green/40">{kpi.sub}</p>
              </div>
              <div className="pt-4 border-t border-brand-green/5 space-y-2">
                {kpi.metrics.map((m, mi) => (
                  <div key={mi} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-gold" />
                    <span className="font-body text-[10px] uppercase font-bold text-brand-green/60">{m}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 12B: The Reporting Mandate */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          12B: The Post-Event Reporting Mandate
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              Accountability doesn't end when the event stops. Firefly delivers a **Comprehensive Post-Event ROI Audit** within 72 hours of every owned edition. This report serves as KWAL's primary strategic asset for internal stakeholders.
            </p>
            <div className="font-serif italic text-lg text-brand-teal border-l-4 border-brand-teal pl-6 py-2 bg-brand-teal/5">
              "Data-driven reporting transforms marketing spend into a strategic investment. We provide the proof of impact that validates Savanna's market hegemony."
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                <BarChart3 size={20} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-1">Commercial Impact Audit</h4>
                <p className="font-body text-xs text-brand-green/60">Precise breakdown of bottles sold, variant performance, and VIP table ROI.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                <Search size={20} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-1">Sentiment & Data Mapping</h4>
                <p className="font-body text-xs text-brand-green/60">Processing of consumer poll data and community feedback to map brand perception.</p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4 hover:border-brand-gold transition-colors group">
              <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase mb-1">Optimization Insights</h4>
                <p className="font-body text-xs text-brand-green/60">Actionable recommendations for the next Sunday cycle based on real-time learnings.</p>
              </div>
            </Card>
          </div>
        </div>
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
