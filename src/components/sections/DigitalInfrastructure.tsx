
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QrCode, Activity, Ticket, Layers, Database, Zap, ShieldCheck } from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const DigitalInfrastructureSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">10A: The Intelligence Loop</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Vibes are fleeting; <br/>data is permanent.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            We treat digital infrastructure as an intelligence system. Every ticket scan and bar order is a discrete data point that feeds into a continuous optimization loop for Savanna.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "We convert energy into insights."
            </h3>
          </div>
        </div>
      </div>

      {/* 10B: The Tech Stack Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] flex items-start gap-6 group hover:border-brand-gold transition-all">
          <div className="w-14 h-14 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Ticket size={28} />
          </div>
          <div className="space-y-2">
            <h4 className="font-headline text-2xl text-brand-green uppercase leading-none">TicketSasa Rail</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/50 leading-relaxed">
              Native M-Pesa integration with real-time inflow reporting and whitelist management.
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] flex items-start gap-6 group hover:border-brand-teal transition-all">
          <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Layers size={28} />
          </div>
          <div className="space-y-2">
            <h4 className="font-headline text-2xl text-brand-green uppercase leading-none">CRM Mapping</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/50 leading-relaxed">
              Mandatory capture of demographic data mapping every attendee to a lifetime value profile.
            </p>
          </div>
        </Card>
      </div>

      {/* 10C: QR Tracking Visual */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
        <div className="section-label">10B: QR Tracking & Sensing</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: "Identity", icon: <QrCode />, sub: "Profile mapping." },
            { label: "Sensing", icon: <Activity />, sub: "Inflow speed." },
            { label: "Heatmaps", icon: <Database />, sub: "Zone tracking." },
          ].map((item, i) => (
            <Card key={i} className="p-8 bg-brand-cream/50 border border-brand-green/5 rounded-[32px] text-center space-y-4 hover:bg-white transition-all">
              <div className="w-12 h-12 rounded-full bg-white border border-brand-green/5 text-brand-gold flex items-center justify-center mx-auto shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="font-headline text-xl text-brand-green uppercase">{item.label}</h4>
                <p className="font-body text-[10px] tracking-widest text-brand-green/30 font-bold uppercase">{item.sub}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 10D: Live Optimization Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up [animation-delay:600ms]">
        {[
          { metric: "Capture Rate", value: "100%", progress: 100 },
          { metric: "Inflow Accuracy", value: "99.2%", progress: 99 },
          { metric: "Data Harvest", value: "8k+", progress: 85 },
          { metric: "Targeting ROI", value: "340%", progress: 92 },
        ].map((item, i) => (
          <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-[24px] space-y-3">
            <span className="font-body font-bold text-[8px] tracking-widest text-brand-teal uppercase">{item.metric}</span>
            <div className="font-headline text-2xl md:text-4xl text-brand-gold leading-none">{item.value}</div>
            <Progress value={item.progress} className="h-1 bg-brand-green/5" />
          </Card>
        ))}
      </div>
    </div>
  );
};
