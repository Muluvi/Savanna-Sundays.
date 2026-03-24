'use client';

import React from 'react';
import { 
  Layers, 
  MapPin, 
  Layout, 
  Beer, 
  QrCode, 
  Camera,
  Music,
  GlassWater,
  Zap,
  UserPlus,
  Sparkles
} from 'lucide-react';

const allVenuesItems = [
  { name: "Bar wraps", desc: "Full counter branding with Savanna logo", icon: <Layers size={24} /> },
  { name: "Venue signage", desc: "A-frames and directional posters", icon: <MapPin size={24} /> },
  { name: "Table dressing", desc: "Branded table tents and menu inserts", icon: <Layout size={24} /> },
  { name: "Branded glassware", desc: "Savanna-branded high-fidelity glasses", icon: <Beer size={24} /> },
  { name: "QR code points", desc: "Table-top entry points for competitions", icon: <QrCode size={24} /> },
];

const squadOnlyItems = [
  { name: "Branded backdrop", desc: "Step-and-repeat 4K photo wall", icon: <Camera size={24} /> },
  { name: "DJ booth wrap", desc: "Full HD branded skin on booth", icon: <Music size={24} /> },
  { name: "Serve stations", desc: "Dedicated Savanna pouring points", icon: <GlassWater size={24} /> },
  { name: "Neon signage", desc: "Custom 'Savanna Sundays' neon feature", icon: <Zap size={24} /> },
  { name: "Branded wristbands", desc: "VIP entry identification", icon: <UserPlus size={24} /> },
];

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

        <div className="space-y-8">
          <div className="relative py-4 border-b border-brand-gold/20">
            <div className="flex items-center gap-3">
              <Sparkles className="text-brand-gold" size={28} />
              <h4 className="font-headline text-3xl md:text-5xl text-brand-gold uppercase tracking-widest leading-none">
                All venues
              </h4>
            </div>
            <p className="font-body text-brand-gold/60 uppercase tracking-[4px] font-bold text-[9px] mt-1">
              Every Sunday • Every Location
            </p>
          </div>
          
          <div className="space-y-4">
            {allVenuesItems.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-6 group transition-all duration-500 hover:translate-x-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h5 className="font-headline text-xl text-brand-gold uppercase leading-none tracking-tight">{item.name}</h5>
                  <p className="font-body text-[10px] text-brand-cream/50 leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative py-4 border-b border-brand-gold/20">
            <div className="flex items-center gap-3">
              <Zap className="text-brand-gold" size={28} />
              <h4 className="font-headline text-3xl md:text-5xl text-brand-gold uppercase tracking-widest leading-none">
                Squad additions
              </h4>
            </div>
            <p className="font-body text-brand-gold/60 uppercase tracking-[4px] font-bold text-[9px] mt-1">
              Everything above plus:
            </p>
          </div>
          
          <div className="space-y-4">
            {squadOnlyItems.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-6 group transition-all duration-500 hover:translate-x-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <h5 className="font-headline text-xl text-brand-gold uppercase leading-none tracking-tight">{item.name}</h5>
                  <p className="font-body text-[10px] text-brand-cream/50 leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
