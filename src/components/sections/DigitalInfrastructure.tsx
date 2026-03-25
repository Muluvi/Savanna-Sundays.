"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Ticket, Layers, Database, Zap } from 'lucide-react';

export const DigitalInfrastructureSection = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Database className="text-brand-gold" size={20} />
            <div className="section-label mb-0">The Intelligence Loop</div>
          </div>
          <h3 className="font-headline text-4xl text-brand-gold uppercase leading-none">Vibes are fleeting; <br/>data is permanent.</h3>
          <p className="font-body text-brand-cream/80 text-base leading-relaxed">
            Every ticket scan and bar order is a discrete data point that feeds into a continuous optimization loop for Savanna.
          </p>
        </div>
        
        <div className="relative py-4 flex flex-col items-center justify-center text-center">
          <h3 className="font-serif italic text-xl md:text-3xl text-brand-gold/80 leading-relaxed px-4">
            "We convert high-energy <br className="hidden md:block" />into actionable insights."
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-tile p-8 flex items-start gap-6 group">
          <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Ticket size={28} />
          </div>
          <div className="space-y-1">
            <h4 className="font-headline text-2xl text-brand-gold uppercase leading-none">TicketSasa Rail</h4>
            <p className="font-body text-[10px] text-brand-cream/50 leading-relaxed uppercase font-bold tracking-widest">Native M-Pesa integration with real-time reporting.</p>
          </div>
        </Card>

        <Card className="glass-tile p-8 flex items-start gap-6 group">
          <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Layers size={28} />
          </div>
          <div className="space-y-1">
            <h4 className="font-headline text-2xl text-brand-gold uppercase leading-none">CRM Mapping</h4>
            <p className="font-body text-[10px] text-brand-cream/50 leading-relaxed uppercase font-bold tracking-widest">Demographic capture for lifetime value tracking.</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { metric: "Capture Rate", value: "100%", progress: 100 },
          { metric: "Accuracy", value: "99.2%", progress: 99 },
          { metric: "Sunday Setup", value: "8k+", progress: 85 },
          { metric: "Target ROI", value: "340%", progress: 92 },
        ].map((item, i) => (
          <Card key={i} className="glass-tile p-5 space-y-3">
            <span className="font-body font-bold text-[8px] tracking-[3px] text-brand-gold/40 uppercase">{item.metric}</span>
            <div className="font-headline text-3xl text-brand-gold leading-none">{item.value}</div>
            <Progress value={item.progress} className="h-0.5 bg-white/5" />
          </Card>
        ))}
      </div>
    </div>
  );
};
