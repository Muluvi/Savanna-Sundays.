
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Sun, Sunset, Moon, Star, Mic2, Palette, Smile } from 'lucide-react';
import Image from 'next/image';

const labels = [
  { name: "Kunye Records", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203530/Kunye_Records_r4ecqg.png", special: true },
  { name: "Descendants Records", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203532/Descendants_Rec_yoghrn.jpg" },
  { name: "Groove Cartel SA", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/Groove_Cartel_SA_wlwymi.png" },
  { name: "Sondela Recordings", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/SondeLa_Recordings_egodlz.png" },
  { name: "Boiler Room", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203531/Boiler_Room_s9kvwq.jpg" },
  { name: "Mixmag", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203530/Mixmag_xlnckz.png" },
  { name: "The Balcony Mix", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768410458/3085e5d1-651e-404e-8cc9-240365f9ad11_20260114_200656_0000_sstsmb.png" },
];

export const MusicProgrammingSection = () => {
  return (
    <div className="space-y-24">
      {/* Ecosystem Credentials */}
      <div className="bg-brand-green rounded-[30px] p-10 md:p-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
          <h5 className="font-headline text-4xl mb-4 text-brand-gold">Cultural Powerhouses</h5>
          <p className="font-serif italic text-white/60 leading-relaxed text-lg">
            Our network extends to the heavyweights of Afro-house and Electronic music.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {labels.map((label, i) => (
            <div key={i} className={`flex flex-col items-center gap-4 ${label.special ? 'lg:col-span-1' : ''}`}>
              <div className={`w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center relative shadow-xl transition-all hover:-translate-y-2 ${label.special ? 'border-2 border-brand-gold scale-110' : ''}`}>
                <Image 
                  src={label.logo} 
                  alt={label.name} 
                  width={56} 
                  height={56} 
                  className="object-contain filter grayscale hover:grayscale-0 transition-all" 
                />
                {label.special && (
                  <div className="absolute -top-2 -right-2 bg-brand-gold p-1 rounded-full shadow-lg">
                    <Star size={10} className="fill-brand-green text-brand-green" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Energy Arc */}
      <div className="space-y-8">
        <div className="section-label">THE EVENT ENERGY ARC</div>
        <div className="relative h-24 w-full bg-white rounded-3xl overflow-hidden shadow-inner flex border border-brand-green/5">
          <div className="h-full w-[30%] bg-brand-teal/20 flex flex-col justify-center items-center gap-1 border-r border-brand-green/5">
             <Sun className="text-brand-teal" size={16} />
             <span className="font-headline text-brand-teal">2PM - 4PM</span>
          </div>
          <div className="h-full w-[40%] bg-brand-gold/20 flex flex-col justify-center items-center gap-1 border-r border-brand-green/5">
             <Sunset className="text-brand-gold" size={16} />
             <span className="font-headline text-brand-gold text-center">4PM - 7PM<br/>THE PEAK</span>
          </div>
          <div className="h-full w-[30%] bg-brand-green/20 flex flex-col justify-center items-center gap-1">
             <Moon className="text-brand-green" size={16} />
             <span className="font-headline text-brand-green">7PM - 9PM</span>
          </div>
        </div>
      </div>

      {/* DJ Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "THE RESIDENT", role: "Resident", genre: "Afro Tech", tier: "Gold" },
          { name: "THE HEADLINER", role: "Headline", genre: "Amapiano", tier: "Green" },
          { name: "THE DISCOVERED", role: "Guest", genre: "Deep House", tier: "Outline" },
        ].map((dj, i) => (
          <Card key={i} className="p-8 text-center bg-white rounded-[30px] border border-brand-green/5 hover:border-brand-gold transition-all group">
            <div className="w-32 h-32 rounded-full border-4 border-brand-gold/20 mx-auto mb-6 flex items-center justify-center bg-brand-cream relative">
               <Music className="text-brand-gold opacity-20 group-hover:scale-110 transition-transform" size={48} />
               <div className="absolute -bottom-2 right-4"><Badge className="bg-brand-gold text-brand-green">VIP</Badge></div>
            </div>
            <h6 className="font-headline text-3xl text-brand-green mb-2">{dj.name}</h6>
            <div className="flex flex-col gap-3 items-center">
              <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal border-none">{dj.genre}</Badge>
              <Badge className={dj.role === 'Headline' ? 'bg-brand-gold text-brand-green' : 'bg-brand-green text-white'}>{dj.role}</Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Beyond DJs */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Live Instruments", icon: <Mic2 size={20} /> },
          { label: "Live Comedy", icon: <Smile size={20} /> },
          { label: "Fashion Hub", icon: <Palette size={20} /> },
          { label: "MC Energy", icon: <Volume2 size={20} /> },
          { label: "Live Art", icon: <Palette size={20} /> },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white rounded-3xl border border-brand-green/5 text-center group hover:bg-brand-teal/5 transition-colors">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="font-body font-bold text-[9px] uppercase tracking-widest text-brand-green/40">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Volume2 = ({ size }: { size: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
