"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Layers, 
  MapPin, 
  Camera, 
  Layout, 
  GlassWater, 
  Music, 
  QrCode, 
  Beer
} from 'lucide-react';
import { cn } from '@/lib/utils';

const deploymentItems = [
  {
    name: "Bar Wraps",
    desc: "Branded vinyl on the bar front",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    name: "Venue Signage",
    desc: "Entrance boards, standees, directional signs",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    name: "Branded Backdrop",
    desc: "Photo/video backdrop on every shoot",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    name: "Table Dressing",
    desc: "Runners, coasters, bottle presenters",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    name: "Serve Stations",
    desc: "Branded cider stations — the pour is part of the show",
    icon: <GlassWater className="w-6 h-6" />,
  },
  {
    name: "DJ Booth Wrap",
    desc: "Custom branding on the booth every edition",
    icon: <Music className="w-6 h-6" />,
  },
  {
    name: "QR Code Points",
    desc: "Scan-at-venue interactive touchpoints",
    icon: <QrCode className="w-6 h-6" />,
  },
  {
    name: "Branded Glassware",
    desc: "Ice buckets and glasses that match the aesthetic",
    icon: <Beer className="w-6 h-6" />,
  },
];

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="section-label">03A: What the Squad Deploys</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deploymentItems.map((item, i) => (
            <Card 
              key={i} 
              className="p-5 bg-[#1F4D3A] border-none rounded-2xl flex flex-col gap-3 group hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="text-brand-gold group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-lg text-[#F4C542] uppercase leading-none">{item.name}</h4>
                <p className="font-body text-[10px] text-[#F8F5E6] opacity-70 leading-tight">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
