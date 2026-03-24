"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Layers, 
  MapPin, 
  Layout, 
  Beer, 
  QrCode, 
  CheckCircle, 
  Shirt, 
  GlassWater,
  Camera,
  Music,
  DoorOpen,
  Zap,
  UserPlus,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { BrushStroke } from '@/components/brand/VisualElements';

const allVenuesItems = [
  { name: "Bar Wraps", desc: "Full counter branding with Savanna logo", icon: <Layers size={20} /> },
  { name: "Venue Signage", desc: "A-frames and directional posters", icon: <MapPin size={20} /> },
  { name: "Table Dressing", desc: "Branded table tents and menu inserts", icon: <Layout size={20} /> },
  { name: "Branded Glassware", desc: "Savanna-branded high-fidelity glasses", icon: <Beer size={20} /> },
  { name: "QR Code Points", desc: "Table-top entry points for competitions", icon: <QrCode size={20} /> },
];

const squadOnlyItems = [
  { name: "Branded Backdrop", desc: "Step-and-repeat 4K photo wall", icon: <Camera size={20} /> },
  { name: "DJ Booth Wrap", desc: "Full HD branded skin on booth", icon: <Music size={20} /> },
  { name: "Serve Stations", desc: "Dedicated Savanna pouring points", icon: <GlassWater size={20} /> },
  { name: "Neon Signage", desc: "Custom 'Savanna Sundays' neon feature", icon: <Zap size={20} /> },
  { name: "Branded Wristbands", desc: "VIP entry identification", icon: <UserPlus size={20} /> },
];

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
        {/* Visual Connector Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 -translate-x-1/2" />

        {/* ALL VENUES COLUMN */}
        <div className="space-y-8">
          <div className="relative p-10 bg-brand-green rounded-[48px] shadow-2xl border border-white/5 overflow-hidden group">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="text-brand-gold" size={24} />
                <h4 className="font-headline text-3xl md:text-4xl text-brand-gold uppercase tracking-widest">
                  ALL VENUES
                </h4>
              </div>
              <p className="font-body text-brand-cream/80 uppercase tracking-[4px] font-bold text-xs">
                Every Sunday • Every Location
              </p>
              <div className="h-[2px] w-20 bg-brand-gold/40" />
            </div>
            <BrushStroke className="absolute -bottom-10 -right-10 w-64 h-auto opacity-10 rotate-12" color="#F4C542" />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {allVenuesItems.map((item, i) => (
              <Card 
                key={i} 
                className="p-6 bg-white/5 border border-white/10 rounded-[28px] flex items-center gap-6 group hover:bg-brand-gold/5 hover:border-brand-gold/30 transition-all duration-500 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="font-headline text-2xl text-brand-gold uppercase leading-none tracking-tight">{item.name}</h5>
                  <p className="font-body text-xs text-brand-cream/50 leading-relaxed font-bold uppercase tracking-wider">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SQUAD VENUE COLUMN */}
        <div className="space-y-8">
          <div className="relative p-10 bg-brand-gold rounded-[48px] shadow-2xl border border-brand-gold/20 overflow-hidden group">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="text-brand-green" size={24} />
                <h4 className="font-headline text-3xl md:text-4xl text-brand-green uppercase tracking-widest">
                  SQUAD ADDITIONS
                </h4>
              </div>
              <p className="font-body text-brand-green/80 uppercase tracking-[4px] font-bold text-xs">
                Everything Above PLUS:
              </p>
              <div className="h-[2px] w-20 bg-brand-green/40" />
            </div>
            <BrushStroke className="absolute -bottom-10 -right-10 w-64 h-auto opacity-10 rotate-12" color="#1F4D3A" />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {squadOnlyItems.map((item, i) => (
              <Card 
                key={i} 
                className="p-6 bg-brand-gold/10 border border-brand-gold/20 rounded-[28px] flex items-center gap-6 group hover:bg-brand-gold/20 hover:border-brand-gold transition-all duration-500 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold text-brand-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="font-headline text-2xl text-brand-gold uppercase leading-none tracking-tight">{item.name}</h5>
                  <p className="font-body text-xs text-brand-cream/50 leading-relaxed font-bold uppercase tracking-wider">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
