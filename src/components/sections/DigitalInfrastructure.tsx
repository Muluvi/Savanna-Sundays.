
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QrCode, Wifi, CreditCard, Activity, Smartphone, Database, CheckCircle2, Ticket, Layers, MousePointerClick, BellRing, Utensils, Globe, Vote, Filter, Target, Search } from 'lucide-react';

export const DigitalInfrastructureSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          We treat digital infrastructure as an intelligence system. Every physical interaction—from a ticket scan to a bar order—is a discrete data point that feeds into a continuous optimization loop.
        </p>
      </div>

      {/* 10B: Data Architecture */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          10B: Data Architecture
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Card className="p-5 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
              <Ticket size={20} />
            </div>
            <div>
              <h4 className="font-headline text-lg md:text-xl text-brand-green uppercase mb-1">TicketSasa Rail</h4>
              <p className="font-body text-[10px] md:text-sm text-brand-green/70">Native M-Pesa integration and real-time reporting.</p>
            </div>
          </Card>

          <Card className="p-5 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
              <Layers size={20} />
            </div>
            <div>
              <h4 className="font-headline text-lg md:text-xl text-brand-green uppercase mb-1">CRM Mapping</h4>
              <p className="font-body text-[10px] md:text-sm text-brand-green/70">Mandatory Name, Email, Phone, and Area capture.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* 10D: QR Tracking */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          10D: QR Tracking & Sensing
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: "Unique Identity", icon: <QrCode />, sub: "Identity mapped to profile." },
            { label: "Real-Time Inflow", icon: <Activity />, sub: "Monitor entry speed." },
            { label: "Heat-Mapping", icon: <Database />, sub: "Track activation zones." },
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto">{item.icon}</div>
              <h4 className="font-headline text-lg text-brand-green uppercase">{item.label}</h4>
              <p className="font-body text-xs text-brand-green/50">{item.sub}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {[
          { metric: "Attendance", value: "847", progress: 85 },
          { metric: "Social Reach", value: "1.2M", progress: 72 },
          { metric: "Bottles Sold", value: "2,400", progress: 92 },
          { metric: "ROI Index", value: "340%", progress: 88 },
        ].map((item, i) => (
          <Card key={i} className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-2xl space-y-2">
            <span className="font-body font-bold text-[8px] md:text-[10px] tracking-widest text-brand-teal uppercase">{item.metric}</span>
            <div className="font-headline text-2xl md:text-4xl text-brand-gold leading-none">{item.value}</div>
            <Progress value={item.progress} className="h-1 bg-brand-green/5" />
          </Card>
        ))}
      </div>
    </div>
  );
};
