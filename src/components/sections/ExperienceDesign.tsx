"use client";

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  CheckCircle2, 
  GlassWater, 
  MapPin, 
  Sparkles, 
  Trophy, 
  Camera, 
  Beer, 
  DoorOpen, 
  QrCode, 
  Zap, 
  TrendingUp,
  Sunset,
  Coffee
} from 'lucide-react';

export const ExperienceDesignSection = () => {
  const [indicatorPos, setIndicatorPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndicatorPos((prev) => (prev + 0.5) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-4 animate-fade-in-up">
        <div className="section-label">03A: The Arrival Sequence</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Card className="p-5 bg-white border border-brand-green/5 rounded-[24px] space-y-3 hover:border-brand-gold transition-all shadow-sm group">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
              <DoorOpen size={20} />
            </div>
            <h4 className="font-headline text-lg text-brand-green uppercase">Branded Entry</h4>
            <p className="font-body text-[10px] text-brand-green/50 leading-relaxed">
              A bespoke architectural portal constructed from reclaimed cedar and brushed gold plating.
            </p>
          </Card>

          <Card className="p-5 bg-white border border-brand-green/5 rounded-[24px] space-y-3 hover:border-brand-teal transition-all shadow-sm group">
            <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              <GlassWater size={20} />
            </div>
            <h4 className="font-headline text-lg text-brand-green uppercase">'First Crisp'</h4>
            <p className="font-body text-[10px] text-brand-green/50 leading-relaxed">
              A signature welcome ritual where guests receive a perfectly chilled Savanna variant.
            </p>
          </Card>

          <Card className="p-5 bg-brand-green text-white border-none rounded-[24px] space-y-3 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <QrCode size={40} />
            </div>
            <div className="relative z-10 space-y-2">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center group-hover:animate-pulse">
                <Zap size={20} />
              </div>
              <h4 className="font-headline text-lg text-brand-gold uppercase">Digital RSVP</h4>
              <p className="font-body text-[10px] text-brand-text-muted leading-relaxed">
                NFC-enabled check-in points that trigger an immediate WhatsApp welcome sequence.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-4 animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label">03B: The Sonic Energy Arc</div>
        <div className="relative pt-12 pb-6">
          <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-brand-green/10 hidden md:block" />
          
          <div 
            className="absolute top-[4.15rem] left-0 w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_#F4C542] transition-all duration-300 ease-linear hidden md:block"
            style={{ left: `${indicatorPos}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {[
              { time: "2PM - 4PM", label: "The Arrival", sub: "Deep House", icon: <Coffee size={18} /> },
              { time: "4PM - 6PM", label: "The Build", sub: "Afro-House", icon: <Sunset size={18} /> },
              { time: "6PM - 8PM", label: "The Peak", sub: "Amapiano", icon: <Zap size={18} />, active: true },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className={`w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-md border transition-all ${step.active ? 'bg-brand-green text-brand-gold border-brand-gold' : 'bg-white text-brand-green border-brand-green/5'}`}>
                  <div className={step.active ? 'text-brand-gold' : 'text-brand-teal'}>
                    {step.icon}
                  </div>
                  <span className="font-headline text-[8px] mt-1 uppercase tracking-widest">{step.time}</span>
                </div>
                <div>
                  <h5 className="font-headline text-sm text-brand-green uppercase">{step.label}</h5>
                  <p className="font-body text-[8px] tracking-[2px] text-brand-green/40 font-bold uppercase">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-in-up [animation-delay:400ms]">
        <div className="bg-brand-teal rounded-[24px] p-6 text-white relative overflow-hidden flex flex-col justify-center shadow-lg group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700">
            <TrendingUp size={120} />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-brand-gold animate-bounce" size={24} />
              <h4 className="font-headline text-xl text-white uppercase leading-none">THE 0.0 ADVANTAGE</h4>
            </div>
            <p className="font-serif italic text-lg text-brand-gold leading-relaxed">
              "We are leading a cultural shift."
            </p>
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
          <h4 className="font-headline text-xl text-brand-green uppercase leading-tight">9.3% CAGR Growth</h4>
          <p className="font-body text-[10px] text-brand-green/60 leading-relaxed">
            Embedding Savanna 0.0 into the primary event flow for Gen-Z and professional relevance.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-white border border-brand-green/5 rounded-xl group hover:border-brand-teal transition-all">
              <div className="font-headline text-2xl text-brand-teal leading-none group-hover:scale-110 transition-transform origin-left">85%</div>
              <div className="font-body text-[7px] uppercase font-bold tracking-widest opacity-40 mt-1">Reach</div>
            </div>
            <div className="p-4 bg-white border border-brand-green/5 rounded-xl group hover:border-brand-gold transition-all">
              <div className="font-headline text-2xl text-brand-gold leading-none group-hover:scale-110 transition-transform origin-left">100%</div>
              <div className="font-body text-[7px] uppercase font-bold tracking-widest opacity-40 mt-1">Premium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
