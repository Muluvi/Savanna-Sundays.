"use client";

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
  { name: "Bar Wraps", desc: "Full counter branding with Savanna logo", icon: <Layers size={24} /> },
  { name: "Venue Signage", desc: "A-frames and directional posters", icon: <MapPin size={24} /> },
  { name: "Table Dressing", desc: "Branded table tents and menu inserts", icon: <Layout size={24} /> },
  { name: "Branded Glassware", desc: "Savanna-branded high-fidelity glasses", icon: <Beer size={24} /> },
  { name: "QR Code Points", desc: "Table-top entry points for competitions", icon: <QrCode size={24} /> },
];

const squadOnlyItems = [
  { name: "Branded Backdrop", desc: "Step-and-repeat 4K photo wall", icon: <Camera size={24} /> },
  { name: "DJ Booth Wrap", desc: "Full HD branded skin on booth", icon: <Music size={24} /> },
  { name: "Serve Stations", desc: "Dedicated Savanna pouring points", icon: <GlassWater size={24} /> },
  { name: "Neon Signage", desc: "Custom 'Savanna Sundays' neon feature", icon: <Zap size={24} /> },
  { name: "Branded Wristbands", desc: "VIP entry identification", icon: <UserPlus size={24} /> },
];

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

        <div className="space-y-10">
          <div className="relative py-6 border-b border-brand-gold/20">
            <div className="flex items-center gap-4">
              <Sparkles className="text-brand-gold" size={32} />
              <h4 className="font-headline text-4xl md:text-5xl text-brand-gold uppercase tracking-widest leading-none">
                All Venues
              </h4>
            </div>
            <p className="font-body text-brand-gold/60 uppercase tracking-[4px] font-bold text-[10px] mt-2">
              Every Sunday • Every Location
            </p>
          </div>
          
          <div className="space-y-6">
            {allVenuesItems.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-8 group transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="font-headline text-2xl text-brand-gold uppercase leading-none tracking-tight">{item.name}</h5>
                  <p className="font-body text-[11px] text-brand-cream/50 leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="relative py-6 border-b border-brand-gold/20">
            <div className="flex items-center gap-4">
              <Zap className="text-brand-gold" size={32} />
              <h4 className="font-headline text-4xl md:text-5xl text-brand-gold uppercase tracking-widest leading-none">
                Squad Additions
              </h4>
            </div>
            <p className="font-body text-brand-gold/60 uppercase tracking-[4px] font-bold text-[10px] mt-2">
              The Primary Narrative Anchor
            </p>
          </div>
          
          <div className="space-y-6">
            {squadOnlyItems.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-8 group transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="font-headline text-2xl text-brand-gold uppercase leading-none tracking-tight">{item.name}</h5>
                  <p className="font-body text-[11px] text-brand-cream/50 leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};