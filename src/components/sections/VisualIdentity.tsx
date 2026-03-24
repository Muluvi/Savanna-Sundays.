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
  UserPlus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const allVenuesItems = [
  { name: "Bar Wraps", desc: "Full counter branding with Savanna logo and product imagery", icon: <Layers size={18} /> },
  { name: "Venue Signage", desc: "A-frames, posters, and directional signage at entrance and key spots", icon: <MapPin size={18} /> },
  { name: "Table Dressing", desc: "Branded table tents, coasters, and menu inserts", icon: <Layout size={18} /> },
  { name: "Branded Glassware", desc: "Savanna-branded glasses for cider service", icon: <Beer size={18} /> },
  { name: "QR Code Points", desc: "Table-top and bar-top QR stands linking to weekly competition", icon: <QrCode size={18} /> },
  { name: "Branded Napkins & Coasters", desc: "Subtle logo placement on every surface", icon: <CheckCircle size={18} /> },
  { name: "Staff Branded T-Shirts", desc: "Serving staff in Savanna Sundays tees", icon: <Shirt size={18} /> },
  { name: "Branded Ice Buckets", desc: "Product display at every table", icon: <GlassWater size={18} /> },
];

const squadOnlyItems = [
  { name: "Branded Backdrop", desc: "Step-and-repeat photo wall with Savanna + Savanna Sundays branding", icon: <Camera size={18} /> },
  { name: "DJ Booth Wrap", desc: "Full branded skin on the DJ booth", icon: <Music size={18} /> },
  { name: "Serve Stations", desc: "Dedicated Savanna pouring/serve points with branded counters", icon: <GlassWater size={18} /> },
  { name: "Entrance Arch / Stanchion Wraps", desc: "Branded entry experience", icon: <DoorOpen size={18} /> },
  { name: "Neon Signage", desc: "“Savanna Sundays” neon light feature (reusable)", icon: <Zap size={18} /> },
  { name: "Branded Wristbands", desc: "Entry wristbands with Savanna Sundays logo", icon: <UserPlus size={18} /> },
];

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* ALL VENUES COLUMN */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="bg-brand-green p-6 rounded-t-[32px] border-b border-white/10">
            <h4 className="font-headline text-2xl text-brand-gold uppercase tracking-widest text-center">
              ALL VENUES
            </h4>
            <p className="text-[10px] text-center text-brand-cream/60 uppercase tracking-[3px] font-bold mt-1">
              Every Sunday • Every Location
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {allVenuesItems.map((item, i) => (
              <Card 
                key={i} 
                className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-brand-green/20 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{item.name}</h5>
                  <p className="font-body text-[10px] text-brand-cream/60 leading-tight">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SQUAD VENUE COLUMN */}
        <div className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
          <div className="bg-brand-gold p-6 rounded-t-[32px] border-b border-brand-green/10">
            <h4 className="font-headline text-2xl text-brand-green uppercase tracking-widest text-center">
              SQUAD VENUE ADDITIONS
            </h4>
            <p className="text-[10px] text-center text-brand-green/60 uppercase tracking-[3px] font-bold mt-1">
              Everything Above PLUS:
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {squadOnlyItems.map((item, i) => (
              <Card 
                key={i} 
                className="p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl flex items-center gap-4 group hover:bg-brand-gold/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h5 className="font-headline text-lg text-brand-gold uppercase leading-none">{item.name}</h5>
                  <p className="font-body text-[10px] text-brand-cream/60 leading-tight">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
