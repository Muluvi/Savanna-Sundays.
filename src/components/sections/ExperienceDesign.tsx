
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
  Beer, 
  DoorOpen, 
  QrCode, 
  Zap, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { BrushStroke } from '@/components/brand/VisualElements';

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro - Proportional Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
        <div className="space-y-6">
          <div className="section-label">08A: Behavioral Design</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Earning equity through <br/>physical interaction.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            We treat Savanna Sundays as an experience system. Every touchpoint is engineered to create specific memories and high-value digital assets, turning a simple drink into a cultural ritual.
          </p>
        </div>
        
        <div className="relative py-12 flex flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <BrushStroke className="w-48 h-auto opacity-10 -rotate-1 mx-auto" color="#2D8C7F" />
            <h3 className="font-serif italic text-2xl md:text-3xl text-brand-green/80 leading-relaxed px-4">
              "We design memories, not just setups."
            </h3>
          </div>
        </div>
      </div>

      {/* 8B: The Arrival Rituals */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label">08B: The Arrival Sequence</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] space-y-4 hover:border-brand-gold transition-all group">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
              <DoorOpen size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">Branded Entry</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/50 leading-relaxed">
              Establishing the aesthetic boundary with a timber-framed portal that frames the first photo-op.
            </p>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] space-y-4 hover:border-brand-teal transition-all group">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
              <GlassWater size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">'First Crisp'</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/50 leading-relaxed">
              Immediate welcome serve: chilled Dry, Lemon, or 0.0 delivered via mobile Vibe Hosts.
            </p>
          </Card>

          <Card className="p-8 bg-brand-green text-white border-none rounded-[32px] space-y-4 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <QrCode size={80} />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h4 className="font-headline text-2xl text-brand-gold uppercase">Digital RSVP</h4>
              <p className="font-body text-xs md:text-sm text-white/60 leading-relaxed">
                Smart QR onboarding that triggers immediate WhatsApp community enrollment and data capture.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* 8C: Savanna 0.0 & Inclusivity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up [animation-delay:400ms]">
        <div className="bg-brand-teal rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <TrendingUp className="text-brand-gold" size={32} />
              <h4 className="font-headline text-3xl md:text-4xl text-white uppercase">THE 0.0 ADVANTAGE</h4>
            </div>
            <p className="font-serif italic text-xl md:text-2xl text-brand-gold leading-relaxed">
              "We aren't just reacting to a trend; we are leading a cultural shift in inclusive drinking."
            </p>
            <div className="flex gap-4">
              <Badge className="bg-white/10 text-white border-none text-[10px] uppercase px-4 py-2">Premium 0.0 Hubs</Badge>
              <Badge className="bg-white/10 text-white border-none text-[10px] uppercase px-4 py-2">Inclusive Rituals</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          <div className="section-label">08C: Growth Dynamics</div>
          <h4 className="font-headline text-2xl md:text-4xl text-brand-green uppercase">9.3% CAGR Market Growth</h4>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            By embedding Savanna 0.0 into the primary event flow (rather than a side-table), we ensure brand relevance to a health-conscious Gen-Z and professional audience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-brand-green/5 rounded-2xl">
              <div className="font-headline text-2xl text-brand-teal">85%</div>
              <div className="font-body text-[8px] uppercase font-bold tracking-widest opacity-40">Inclusive Reach</div>
            </div>
            <div className="p-5 bg-white border border-brand-green/5 rounded-2xl">
              <div className="font-headline text-2xl text-brand-gold">100%</div>
              <div className="font-body text-[8px] uppercase font-bold tracking-widest opacity-40">Premium Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* 8D: The Journey Timeline */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:600ms]">
        <div className="section-label">08D: The Attendee Lifecycle</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {[
            { label: "Discovery", icon: <Sparkles className="w-5 h-5" />, sub: "Viral Reel" },
            { label: "RSVP", icon: <CheckCircle2 className="w-5 h-5" />, sub: "WhatsApp" },
            { label: "Arrival", icon: <MapPin className="w-5 h-5" />, sub: "Timber Portal" },
            { label: "Ritual", icon: <Beer className="w-5 h-5" />, sub: "First Serve" },
            { label: "Capture", icon: <Camera className="w-5 h-5" />, sub: "Content Hub" },
            { label: "Advocacy", icon: <Trophy className="w-5 h-5" />, sub: "Referral Up" },
          ].map((step, i) => (
            <Card key={i} className="p-6 flex flex-col items-center text-center gap-3 bg-white border border-brand-green/5 rounded-[24px] hover:border-brand-gold transition-all shadow-sm group">
              <div className="w-10 h-10 rounded-full bg-brand-cream text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <span className="font-headline text-[11px] tracking-widest text-brand-green uppercase block">{step.label}</span>
                <span className="font-body text-[8px] text-brand-green/30 uppercase font-bold">{step.sub}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
