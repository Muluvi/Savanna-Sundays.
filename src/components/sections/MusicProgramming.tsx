
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, Sun, Sunset, Moon, Star, Mic2, Palette, Smile, CheckCircle2, Clock, Zap, Coffee } from 'lucide-react';
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
      {/* Strategic Intro */}
      <div className="space-y-12 animate-fade-in-up">
        <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7]">
          <p>
            Music isn't background noise for Savanna Sundays; it's the architecture of the vibe. It is the primary tool for emotional engineering—taking a crowd from a relaxed afternoon arrival to a peak-energy sunset celebration. We don't just hire DJs; we curate a sonic narrative that reinforces Savanna’s premium, crisp positioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
              7A: The Savanna Sonic Identity
            </h3>
            <p className="font-body text-base text-brand-green/70">
              Our sonic landscape is governed by four non-negotiable pillars that ensure the music feels like the brand:
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Warm:</strong> Analog textures, rich bass, and soul-inflected vocals that match the Savanna Gold aesthetic.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Rhythmic:</strong> Afro-centric patterns (Afro Tech, Amapiano, Deep House) that invite movement without being aggressive.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Culturally Fluent:</strong> Music that speaks to Nairobi's global-yet-local tastes—recognizing heritage while pushing boundaries.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Emotionally Precise:</strong> Curating the right energy for the light. As the sun dips, the music deepens and builds.</li>
            </ul>
          </div>

          <div className="bg-brand-cream/50 p-8 rounded-[32px] border border-brand-green/5 flex flex-col justify-center">
            <h4 className="font-headline text-xl text-brand-green mb-4">Impact on Perception</h4>
            <div className="font-serif italic text-lg text-brand-teal leading-relaxed border-l-2 border-brand-teal pl-6 py-2">
              "A precise sonic identity transforms Savanna from a cider you drink into a culture you feel. It creates a 'memory anchor'—when people hear these rhythms later, they are mentally transported back to that crisp golden-hour moment."
            </div>
          </div>
        </div>
      </div>

      {/* 7B: The Energy Progression Schedule */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          7B: The Energy Progression Schedule
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <p>
              We engineer the energy arc to mirror the physical environment. As the venue transitions from natural daylight to golden hour and finally to night, the music follows a strictly curated BPM and intensity ladder.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-4 border-brand-gold pl-6 py-2 bg-brand-gold/5">
              "We don't peak too early. The build-up is where the brand loyalty is earned; the peak is where it's celebrated."
            </div>
            <p className="text-sm">
              Each time slot is defined by a specific emotional intent, ensuring that the music never fights the setting, but enhances it.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-center gap-6 hover:border-brand-teal transition-colors group">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 text-brand-teal flex flex-col items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Coffee size={20} />
                <span className="font-headline text-xs mt-1">2–4 PM</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-xl text-brand-green">THE ARRIVAL (DEEP HOUSE & NEO-SOUL)</h4>
                <p className="font-body text-xs text-brand-green/60 leading-relaxed">
                  Low BPM, high texture. Intent: Frictionless entry. Allows for conversation, photography, and the first signature serve.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-center gap-6 hover:border-brand-gold transition-colors group">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex flex-col items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Sun size={20} />
                <span className="font-headline text-xs mt-1">4–6 PM</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-xl text-brand-green uppercase">THE GLOW (AFRO-HOUSE & MELODIC AMAPIANO)</h4>
                <p className="font-body text-xs text-brand-green/60 leading-relaxed">
                  The Golden Hour build. Rhythms become more physical as the sun begins to dip. Content capture reaches its highest value here.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-brand-green text-white border-none rounded-2xl flex items-center gap-6 shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-brand-gold text-brand-green flex flex-col items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Zap size={20} />
                <span className="font-headline text-xs mt-1">6–8 PM</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-xl text-brand-gold uppercase">THE PEAK (AMAPIANO & AFROBEAT)</h4>
                <p className="font-body text-xs text-white/70 leading-relaxed">
                  The Sunset Celebration. Maximum crowd density and energy. High-impact anthems that anchor the "Savanna Sunday" memory.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-brand-green/5 rounded-2xl flex items-center gap-6 hover:border-brand-green transition-colors group opacity-60">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex flex-col items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Moon size={20} />
                <span className="font-headline text-xs mt-1">8–9 PM</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-xl text-brand-green uppercase">THE RESOLUTION (COOL-DOWN SETS)</h4>
                <p className="font-body text-xs text-brand-green/60 leading-relaxed">
                  A gentle decline in energy. Soulful edits and classic grooves encouraging a safe and premium departure experience.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

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

      {/* Energy Arc Visualization */}
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
          { label: "MC Energy", icon: <Volume2Icon size={20} /> },
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

const Volume2Icon = ({ size }: { size: number }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>;
