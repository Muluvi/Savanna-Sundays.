"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReceiptText, ShieldCheck, Zap, Music, Video, Camera, QrCode } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * High-fidelity counter for the investment total.
 * Animates from 0 to target value on scroll entry using an ease-out curve.
 */
const StatCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const target = parseFloat(value.replace(/,/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const startAnimation = () => {
      let startTime: number | null = null;
      const duration = 1200;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Quadratic ease-out: f(t) = t * (2 - t)
        const easeOut = progress * (2 - progress);
        
        setDisplayValue(easeOut * target);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={containerRef}>{Math.floor(displayValue).toLocaleString()}</span>;
};

const lineItems = [
  { item: "DJ 1 opens with warm-up (Bongo, R&B, Afrobeats)", cost: "50,000" },
  { item: "DJ 2 takes peak time (High-energy Bongo, amapiano)", cost: "50,000" },
  { item: "MC / Brand Host — The Savanna Voice", cost: "40,000" },
  { item: "Influencer Pool (5 PAX)", cost: "100,000" },
  { item: "Content Production Crew", cost: "41,250" },
  { item: "Strategic Logistics", cost: "54,918" },
];

const checklistItems = [
  { label: "Branded Venues", desc: "Visual dominance at host venues.", icon: <ShieldCheck size={24} /> },
  { label: "Squad Activation", desc: "Live DJs, MC, and influencers.", icon: <Zap size={24} /> },
  { label: "Music Harvest", desc: "High-fidelity YouTube DJ sets.", icon: <Music size={24} /> },
  { label: "Social Content", desc: "Optimised Reels for all platforms.", icon: <Video size={24} /> },
  { label: "HD Photography", desc: "Lifestyle assets harvested weekly.", icon: <Camera size={24} /> },
  { label: "Data Capture", desc: "QR competitions for KWAL CRM.", icon: <QrCode size={24} /> }
];

export const TheNumbersSection = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <ReceiptText className="text-brand-gold" size={24} />
          <h4 className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] text-brand-gold uppercase tracking-tighter leading-none">
            The investment
          </h4>
        </div>
        <p className="font-body text-brand-cream/80 text-[var(--text-sm)] md:text-[var(--text-base)]">
          Transparent fixed-rate model city-wide.
        </p>
      </div>

      <div className="glass-tile rounded-[24px] overflow-hidden border border-white/5 shadow-2xl">
        <Table>
          <TableHeader className="bg-brand-gold">
            <TableRow className="border-none hover:bg-brand-gold">
              <TableHead className="text-brand-green font-headline tracking-widest py-4 px-8 text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase">Breakdown</TableHead>
              <TableHead className="text-brand-green font-headline tracking-widest text-right px-8 text-[var(--text-xs)] md:text-[var(--text-sm)] uppercase">KSh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((row, i) => (
              <TableRow 
                key={i} 
                className="border-white/5 transition-all duration-200 odd:bg-brand-gold/[0.04] even:bg-transparent hover:bg-brand-gold/[0.08] hover:border-r-2 hover:border-brand-gold group"
              >
                <TableCell className="font-body font-bold text-[var(--text-xs)] py-4 px-8 text-brand-cream/80 uppercase tracking-widest">
                  {row.item}
                </TableCell>
                <TableCell className="font-headline text-[var(--text-xl)] md:text-[var(--text-2xl)] text-brand-gold text-right px-8">
                  {row.cost}
                </TableCell>
              </TableRow>
            ))}
            
            {/* Summary Row - High Fidelity Separation */}
            <TableRow className="bg-brand-gold/[0.12] border-t border-brand-gold/30 border-b border-brand-gold/30 hover:bg-brand-gold/20 transition-colors">
              <TableCell className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] py-6 px-8 text-brand-gold uppercase tracking-tighter">
                Weekly total
              </TableCell>
              <TableCell className="font-headline text-[var(--text-4xl)] md:text-[var(--text-6xl)] text-brand-gold text-right px-8 tracking-tighter">
                <StatCounter value="336,168" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <div className="section-label mb-0">Strategic deliverables</div>
          <h4 className="font-headline text-[var(--text-2xl)] md:text-[var(--text-4xl)] text-brand-gold uppercase tracking-tighter">What KWAL gets every week</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {checklistItems.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-6 rounded-[32px] bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-brand-gold/40 hover:-translate-y-1 shadow-xl"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
              
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shadow-[0_0_20px_rgba(244,197,66,0.1)] group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-500">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="font-headline text-[var(--text-xl)] md:text-[var(--text-2xl)] text-white uppercase tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                    {item.label}
                  </p>
                  
                  {/* Revealable Description: Visible on mobile, hidden -> expanded on desktop hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-10 md:max-h-0 md:group-hover:max-h-10">
                    <p className="font-body text-brand-cream/50 text-[10px] leading-relaxed font-bold uppercase tracking-[2px] pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};