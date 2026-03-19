
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
  TrendingUp,
  Sunset,
  Coffee
} from 'lucide-react';

export const ExperienceDesignSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* 03A: Arrival Sequence */}
      <div className="space-y-8 animate-fade-in-up">
        <div className="section-label">03A: The Arrival Sequence</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] space-y-4 hover:border-brand-gold transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
              <DoorOpen size={24} />
            </div>
            <h4 className="font-headline text-2xl text-brand-green uppercase">Branded Entry</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/50 leading-relaxed">
              Establishing the aesthetic boundary with a timber-framed portal that frames the first photo-op.
            </p>
          </Card>

          <Card className="p-8 bg-white border border-brand-green/5 rounded-[32px] space-y-4 hover:border-brand-teal transition-all group shadow-sm">
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

      {/* 03B: Energy Arc - MOVED FROM SECTION 06 */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
        <div className="section-label">03B: The Sonic Energy Arc</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative py-12">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-green/10 hidden md:block -translate-y-12" />
          {[
            { time: "2PM - 4PM", label: "The Arrival", sub: "Deep House & Neo-Soul", icon: <Coffee size={24} />, color: "teal" },
            { time: "4PM - 6PM", label: "The Build", sub: "Afro-House & Soulful", icon: <Sunset size={24} />, color: "gold" },
            { time: "6PM - 8PM", label: "The Peak", sub: "Amapiano & Global Beats", icon: <Zap size={24} />, color: "green", active: true },
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6 group">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-xl border transition-all group-hover:scale-110 ${step.active ? 'bg-brand-green text-brand-gold border-brand-gold' : 'bg-white text-brand-green border-brand-green/5'}`}>
                <div className={step.active ? 'text-brand-gold' : 'text-brand-teal'}>
                  {step.icon}
                </div>
                <span className="font-headline text-[10px] mt-2 leading-none uppercase font-bold tracking-widest">{step.time}</span>
              </div>
              <div className="space-y-1">
                <h5 className="font-headline text-xl text-brand-green uppercase">{step.label}</h5>
                <p className="font-body text-[10px] tracking-[3px] text-brand-green/40 font-bold uppercase">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 03C: Advantage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 animate-fade-in-up [animation-delay:400ms]">
        <div className="bg-brand-teal rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-xl">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <TrendingUp className="text-brand-gold" size={32} />
              <h4 className="font-headline text-3xl md:text-4xl text-white uppercase leading-none">THE 0.0 ADVANTAGE</h4>
            </div>
            <p className="font-serif italic text-xl md:text-2xl text-brand-gold leading-relaxed">
              "We aren't just reacting to a trend; we are leading a cultural shift in inclusive drinking."
            </p>
            <div className="flex gap-4">
              <Badge className="bg-white/10 text-white border-none text-[10px] uppercase px-4 py-2 font-bold tracking-widest">Premium 0.0 Hubs</Badge>
              <Badge className="bg-white/10 text-white border-none text-[10px] uppercase px-4 py-2 font-bold tracking-widest">Inclusive Rituals</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          <div className="section-label">03D: Growth Dynamics</div>
          <h4 className="font-headline text-2xl md:text-4xl text-brand-green uppercase leading-tight">9.3% CAGR Market Growth</h4>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed">
            By embedding Savanna 0.0 into the primary event flow, we ensure brand relevance to a health-conscious Gen-Z and professional audience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white border border-brand-green/5 rounded-2xl shadow-sm">
              <div className="font-headline text-3xl text-brand-teal leading-none">85%</div>
              <div className="font-body text-[8px] uppercase font-bold tracking-widest opacity-40 mt-1">Inclusive Reach</div>
            </div>
            <div className="p-6 bg-white border border-brand-green/5 rounded-2xl shadow-sm">
              <div className="font-headline text-3xl text-brand-gold leading-none">100%</div>
              <div className="font-body text-[8px] uppercase font-bold tracking-widest opacity-40 mt-1">Premium Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* 03E: Lifecycle Icons */}
      <div className="space-y-8 animate-fade-in-up [animation-delay:600ms]">
        <div className="section-label">03E: The Attendee Lifecycle</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {[
            { label: "Discovery", icon: <Sparkles className="w-6 h-6" />, sub: "Viral Reel" },
            { label: "RSVP", icon: <CheckCircle2 className="w-6 h-6" />, sub: "WhatsApp" },
            { label: "Arrival", icon: <MapPin className="w-6 h-6" />, sub: "Timber Portal" },
            { label: "Ritual", icon: <Beer className="w-6 h-6" />, sub: "First Serve" },
            { label: "Capture", icon: <Camera className="w-6 h-6" />, sub: "Content Hub" },
            { label: "Advocacy", icon: <Trophy className="w-6 h-6" />, sub: "Referral Up" },
          ].map((step, i) => (
            <Card key={i} className="p-6 flex flex-col items-center text-center gap-4 bg-white border border-brand-green/5 rounded-[24px] hover:border-brand-gold transition-all shadow-sm group">
              <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <span className="font-headline text-[12px] tracking-widest text-brand-green uppercase block font-bold mb-1">{step.label}</span>
                <span className="font-body text-[8px] text-brand-green/30 uppercase font-bold tracking-wider">{step.sub}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
