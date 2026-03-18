
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QrCode, Wifi, CreditCard, Activity, Smartphone, Share2, Database, BarChart3 } from 'lucide-react';
import Image from 'next/image';

const platforms = [
  { name: "Instagram", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png" },
  { name: "TikTok", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png" },
  { name: "YouTube", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764351543/YouTube_Icon_18_lal2zf.jpg" },
  { name: "Spotify", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764344747/Spotify_Primary_Logo_RGB_Green_hpueq3.png" },
  { name: "X", icon: "https://res.cloudinary.com/da5j0zjok/image/upload/v1763590344/X_idVRwaKp9b_4_vpw8j2.png" },
];

export const DigitalInfrastructureSection = () => {
  return (
    <div className="space-y-24">
      {/* Platform Integration Stack */}
      <div className="py-12 flex flex-col items-center">
        <div className="section-label mb-16">The Digital Hub Ecosystem</div>
        <div className="relative w-full max-w-2xl h-[400px] flex items-center justify-center">
          <div className="w-56 h-56 rounded-full border-4 border-brand-gold border-dashed flex items-center justify-center animate-spin [animation-duration:40s]">
            <div className="absolute inset-0 bg-brand-gold/5 rounded-full" />
          </div>
          
          <div className="absolute z-10 w-40 h-40 rounded-full bg-brand-green shadow-2xl flex flex-col items-center justify-center text-center p-6 border-2 border-brand-gold">
             <Database className="text-brand-gold mb-2" size={24} />
             <span className="font-headline text-brand-gold leading-none text-xl">SAVANNA<br/>DIGITAL HUB</span>
          </div>

          {platforms.map((p, i) => {
            const angle = (i * (360 / platforms.length)) * (Math.PI / 180);
            const x = Math.cos(angle) * 160;
            const y = Math.sin(angle) * 160;
            return (
              <div 
                key={i} 
                className="absolute w-16 h-16 rounded-full bg-white border-2 border-brand-teal p-3 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                <Image src={p.icon} alt={p.name} width={32} height={32} className={`object-contain ${p.name === 'X' ? 'brightness-0' : ''}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { icon: <Smartphone />, label: "M-Pesa API" },
          { icon: <QrCode />, label: "Smart QR" },
          { icon: <Wifi />, label: "Branded Wi-Fi" },
          { icon: <CreditCard />, label: "NFC Payment" },
          { icon: <Activity />, label: "Live Analytics" },
        ].map((tech, i) => (
          <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl flex flex-col items-center gap-4 text-center group hover:border-brand-teal transition-colors">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              {tech.icon}
            </div>
            <span className="font-headline text-xs tracking-widest text-brand-green uppercase">{tech.label}</span>
          </Card>
        ))}
      </div>

      {/* Analytics Dashboard Mockup */}
      <div className="space-y-8">
        <div className="section-label">Real-Time Impact Dashboard</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: "Attendance", value: "847", sub: "Capacity: 1,000", progress: 85 },
            { metric: "Social Reach", value: "1.2M", sub: "+12% from last Sun", progress: 72 },
            { metric: "Bottles Sold", value: "2,400", sub: "Avg 2.8/person", progress: 92 },
            { metric: "New Community", value: "312", sub: "Retained Members", progress: 65 },
            { metric: "UGC Posts", value: "89", sub: "Shared with #SavannaSundays", progress: 78 },
            { metric: "DJ Set Views", value: "45K", sub: "Across All Platforms", progress: 55 },
            { metric: "Sponsor ROI", value: "340%", sub: "Measured Impressions", progress: 88 },
            { metric: "Content Assets", value: "127", sub: "High-Fi Photos & Reels", progress: 95 },
          ].map((item, i) => (
            <Card key={i} className="p-6 bg-white border border-brand-green/5 rounded-2xl space-y-3 hover:shadow-md transition-shadow">
              <span className="font-body font-bold text-[10px] tracking-widest text-brand-teal uppercase">{item.metric}</span>
              <div className="font-headline text-4xl text-brand-gold leading-none">{item.value}</div>
              <p className="font-body text-xs text-brand-green/40">{item.sub}</p>
              <Progress value={item.progress} className="h-1 bg-brand-green/5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
