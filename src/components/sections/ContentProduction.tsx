
"use client";

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Play, AudioLines, Share2, ArrowRight, Camera, Video, Smartphone, Mic2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const ContentSocialSection = () => {
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate random heights only on the client to avoid hydration mismatch
    const heights = [...Array(60)].map(() => Math.random() * 40 + 10);
    setWaveformHeights(heights);
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Strategic Intro Card */}
      <Card className="p-6 border-none bg-brand-green text-white rounded-[24px] shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-1000">
          <Camera size={80} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="font-body font-bold text-[9px] tracking-[3px] uppercase text-brand-gold mb-2 block">The Deliverable</span>
          <h3 className="font-headline text-2xl md:text-4xl mb-3 leading-tight uppercase">Every event is a content harvest.</h3>
          <p className="font-body text-xs md:text-base text-white/70 leading-relaxed italic font-serif">
            "The event is the harvest. Content is the crop. Community is the soil."
          </p>
        </div>
      </Card>

      {/* 04A: The Production Unit */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="section-label">04A: The Production Unit</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Lead Stills", icon: <Camera />, desc: "Editorial fashion." },
            { label: "Cinema Unit", icon: <Video />, desc: "Cinematic recap." },
            { label: "Social Shooter", icon: <Smartphone />, desc: "IG/TikTok native." },
            { label: "Sonic Eng", icon: <Mic2 />, desc: "Mixer-feed capture.", live: true },
          ].map((role, i) => (
            <Card key={role.label} className="p-4 bg-white border border-brand-green/5 rounded-xl space-y-2 hover:border-brand-gold transition-all shadow-sm group">
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">{role.icon}</div>
                {role.live && (
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[7px] font-bold text-red-500 uppercase">Live</span>
                  </div>
                )}
              </div>
              <h4 className="font-headline text-base text-brand-green uppercase leading-none">{role.label}</h4>
              <p className="font-body text-[9px] text-brand-green/50 leading-tight">{role.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* 04B: Sonic Pipeline Visual - Animated Waveform */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="section-label">04B: The Sonic Pipeline</div>
        <div className="bg-brand-cream/50 border border-brand-green/5 rounded-[24px] p-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full flex items-end gap-0.5 px-4 opacity-10 pointer-events-none">
            {mounted && waveformHeights.map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-brand-green animate-waveform" 
                style={{ 
                  height: `${h}px`,
                  animationDelay: `${i * 0.05}s`
                }} 
              />
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-green/10 hidden md:block" />
            {[
              { label: "Capture", icon: <AudioLines />, sub: "Board Feed" },
              { label: "Polish", icon: <Play />, sub: "Post-Prod" },
              { label: "Distribute", icon: <Share2 />, sub: "YT / Mix" },
              { label: "Loop", icon: <ArrowRight />, sub: "Social" },
            ].map((step, i) => (
              <div key={step.label} className="relative z-10 flex flex-col items-center text-center space-y-2 group">
                <div className="w-10 h-10 rounded-full bg-white border border-brand-green/5 shadow-sm flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all group-hover:scale-110">
                  {step.icon}
                </div>
                <div className="space-y-0.5">
                  <h5 className="font-headline text-sm text-brand-green uppercase">{step.label}</h5>
                  <p className="font-body text-[8px] tracking-[1px] text-brand-green/40 font-bold uppercase">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 04C: Extraction Table */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="section-label">04C: 30-Day Extraction Strategy</div>
        <div className="bg-white rounded-xl overflow-hidden border border-brand-green/5 shadow-md">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-3 px-4 text-xs">Timeframe</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-xs">Asset Type</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-xs text-right px-4">Channel</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { time: "Day 1–3", type: "Viral Reels", plat: "IG/TT" },
                { time: "Day 4–10", type: "Full Mixes", plat: "YT/X" },
                { time: "Day 11–20", type: "Product Cuts", plat: "Meta" },
                { time: "Day 21–30", type: "Teasers", plat: "Email" },
              ].map((row, i) => (
                <TableRow key={row.time} className="hover:bg-brand-gold/5 transition-colors border-brand-green/5 group">
                  <TableCell className="font-headline text-lg py-3 px-4 text-brand-teal group-hover:translate-x-1 transition-transform">{row.time}</TableCell>
                  <TableCell className="font-body font-bold text-xs text-brand-green/70">{row.type}</TableCell>
                  <TableCell className="font-body text-[9px] text-brand-green/40 font-bold uppercase text-right px-4">{row.plat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
