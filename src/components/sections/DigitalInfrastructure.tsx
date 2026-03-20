"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QrCode, Activity, Ticket, Layers, Database, Zap } from 'lucide-react';

export const DigitalInfrastructureSection = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center animate-fade-in-up">
        <div className="space-y-4">
          <div className="section-label">05C: The Intelligence Loop</div>
          <h3 className="font-headline text-2xl md:text-4xl text-brand-green uppercase leading-tight">
            Vibes are fleeting; <br/>data is permanent.
          </h3>
          <p className="font-body text-xs md:text-base text-brand-green/60 leading-relaxed">
            Every ticket scan and bar order is a discrete data point that feeds into a continuous optimization loop for Savanna.
          </p>
        </div>
        
        <div className="relative py-6 flex flex-col items-center justify-center">
          <h3 className="font-serif italic text-xl md:text-2xl text-brand-green/80 leading-relaxed px-4 text-center">
            "We convert energy into insights."
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in-up [animation-delay:200ms]">
        <Card className="p-5 bg-white border border-brand-green/5 rounded-[24px] flex items-start gap-4 hover:border-brand-gold transition-all">
          <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
            <Ticket size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="font-headline text-lg text-brand-green uppercase leading-none">TicketSasa Rail</h4>
            <p className="font-body text-[10px] text-brand-green/50 leading-relaxed">Native M-Pesa integration with real-time inflow reporting.</p>
          </div>
        </Card>

        <Card className="p-5 bg-white border border-brand-green/5 rounded-[24px] flex items-start gap-4 hover:border-brand-teal transition-all">
          <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
            <Layers size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="font-headline text-lg text-brand-green uppercase leading-none">CRM Mapping</h4>
            <p className="font-body text-[10px] text-brand-green/50 leading-relaxed">Mandatory demographic capture for lifetime value tracking.</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 animate-fade-in-up [animation-delay:600ms]">
        {[
          { metric: "Capture Rate", value: "100%", progress: 100 },
          { metric: "Accuracy", value: "99.2%", progress: 99 },
          { metric: "Data Harvest", value: "8k+", progress: 85 },
          { metric: "Target ROI", value: "340%", progress: 92 },
        ].map((item, i) => (
          <Card key={i} className="p-4 bg-white border border-brand-green/5 rounded-xl space-y-2">
            <span className="font-body font-bold text-[7px] tracking-widest text-brand-teal uppercase">{item.metric}</span>
            <div className="font-headline text-xl text-brand-gold leading-none">{item.value}</div>
            <Progress value={item.progress} className="h-0.5 bg-brand-green/5" />
          </Card>
        ))}
      </div>
    </div>
  );
};
