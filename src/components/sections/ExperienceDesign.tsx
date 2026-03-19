
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  GlassWater, 
  MapPin, 
  Sparkles, 
  Trophy, 
  Camera, 
  Utensils, 
  Beer, 
  DoorOpen, 
  QrCode, 
  Smartphone, 
  ChefHat, 
  Gift, 
  Tv, 
  Zap, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Experience design is the process of earning brand equity through physical interaction. We treat Savanna Sundays as an experience system, engineering every touchpoint to create specific memories and high-value digital assets.
        </p>
      </div>

      {/* 8B: The Arrival */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8B: The Arrival Experience
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-5 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
              <DoorOpen size={20} />
            </div>
            <div>
              <h4 className="font-headline text-lg md:text-xl text-brand-green uppercase mb-1">Branded Entry</h4>
              <p className="font-body text-[10px] md:text-sm text-brand-green/70">Timber-framed portal establishing the aesthetic.</p>
            </div>
          </Card>

          <Card className="p-5 md:p-6 bg-white border border-brand-green/5 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
              <GlassWater size={20} />
            </div>
            <div>
              <h4 className="font-headline text-lg md:text-xl text-brand-green uppercase mb-1">'First Crisp'</h4>
              <p className="font-body text-[10px] md:text-sm text-brand-green/70">Immediate welcome serve: chilled Dry or 0.0.</p>
            </div>
          </Card>

          <Card className="p-5 md:p-6 bg-brand-green text-white border-none rounded-2xl flex items-start gap-4 shadow-xl">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
              <QrCode size={20} />
            </div>
            <div>
              <h4 className="font-headline text-lg md:text-xl text-brand-gold uppercase mb-1">Onboarding</h4>
              <p className="font-body text-[10px] md:text-sm text-white/70">Smart QR triggering WhatsApp enrollment.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* 8G: Savanna 0.0 */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8G: Savanna 0.0 & Inclusive Drinking
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="p-6 md:p-8 bg-brand-teal/5 border-2 border-brand-teal rounded-[24px] md:rounded-[32px] space-y-4">
            <div className="flex items-center gap-4">
              <TrendingUp className="text-brand-teal" size={24} />
              <h4 className="font-headline text-2xl md:text-3xl text-brand-green uppercase">9.3% CAGR Growth</h4>
            </div>
            <p className="font-serif italic text-base md:text-lg text-brand-green leading-relaxed">
              "We aren't just reacting to a trend; we are leading a cultural shift. 0.0 ensures relevance to the next generation."
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-xl flex items-center gap-4">
              <ShieldCheck className="text-brand-gold" size={20} />
              <span className="font-headline text-sm md:text-lg text-brand-green uppercase">Premium Presentation Standards</span>
            </Card>
            <Card className="p-4 md:p-6 bg-white border border-brand-green/5 rounded-xl flex items-center gap-4">
              <Sparkles className="text-brand-teal" size={20} />
              <span className="font-headline text-sm md:text-lg text-brand-green uppercase">Dedicated Savanna 0.0 Hub</span>
            </Card>
          </div>
        </div>
      </div>

      {/* 8F: Journey */}
      <div className="space-y-6 md:space-y-8 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          8F: The Attendee Journey
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 py-4 md:py-8">
          {[
            { label: "Discovery", icon: <Sparkles size={16} /> },
            { label: "RSVP", icon: <CheckCircle2 size={16} /> },
            { label: "Arrival", icon: <MapPin size={16} /> },
            { label: "Experience", icon: <Beer size={16} /> },
            { label: "Share", icon: <Camera size={16} /> },
            { label: "Return", icon: <Trophy size={16} /> },
          ].map((step, i) => (
            <Card key={i} className="p-4 md:p-5 flex flex-col items-center gap-2 md:gap-3 bg-white border border-brand-green/5 rounded-2xl hover:border-brand-gold transition-colors shadow-sm">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                {step.icon}
              </div>
              <span className="font-headline text-[8px] md:text-[10px] tracking-widest text-brand-green uppercase text-center">{step.label}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
