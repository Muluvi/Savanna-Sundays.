
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GlassWater, Mic2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Section Intro */}
      <div className="font-body text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Savanna’s visual presence must be the most Instagram-worthy activation setup in Nairobi—not by spending the most, but by thinking the most carefully about every surface, every fabric, every light source. If it doesn’t photograph as premium, it doesn’t exist at Savanna Sundays.
        </p>
      </div>

      {/* 3A: Physical Setup */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up [animation-delay:200ms]">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          3A: Physical Setup & Environment Design
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8 font-body text-sm md:text-base text-brand-green/70">
            <div className="space-y-3">
              <h4 className="font-headline text-xl text-brand-green">Stage Design & Branded Backdrops</h4>
              <p>
                The DJ booth is the visual centrepiece of every owned edition. Firefly designs a modular, transportable stage backdrop system in Savanna’s warm gold-and-earth palette, incorporating the shield logo as a sculptural element rather than a flat banner.
              </p>
              <ul className="space-y-0">
                <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> Laser-cut metal or MDF panels with logo silhouette, backlit with warm amber LEDs.</li>
                <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> Designed for the camera—every photograph is a brand impression.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-headline text-xl text-brand-green">Bar Design & Drink Service Stations</h4>
              <p>
                Owned editions feature a dedicated Savanna Bar with back-bar shelving displaying all four variants (Dry, Light, Angry Lemon, 0.0) with warm spotlighting and branded counter wraps.
              </p>
              <ul className="space-y-0">
                <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Savanna 0.0 Hub:</strong> Operates as a separate bar element, signaling non-alcoholic as a featured choice.</li>
                <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Signature Serves:</strong> Garnishes and branded glassware for high-quality photography potential.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
            <div className="md:col-span-2 rounded-[24px] p-6 md:p-8 flex flex-col justify-end text-brand-green relative overflow-hidden min-h-[180px] md:min-h-[240px]" style={{ background: 'linear-gradient(140deg, #F4C542 0%, #E8A820 55%, #2D8C7F 100%)' }}>
              <div className="relative z-10">
                <h5 className="font-headline text-3xl md:text-4xl mb-1 md:mb-2">Golden Hour Energy</h5>
                <p className="font-body text-xs md:text-sm text-brand-green/60">Premium, vibrant, and unmistakably Savanna.</p>
              </div>
            </div>
            <div className="rounded-[24px] p-6 md:p-8 flex flex-col justify-center items-center text-center text-white min-h-[140px] md:min-h-[200px]" style={{ background: 'linear-gradient(130deg, #1F4D3A 0%, #2D8C7F 100%)' }}>
              <h5 className="font-headline text-2xl md:text-3xl mb-2 uppercase">Premium Lounge</h5>
              <div className="w-10 h-1 bg-brand-gold mx-auto" />
            </div>
            <div className="rounded-[24px] p-6 md:p-8 flex flex-col justify-end bg-brand-cream border border-brand-green/10 min-h-[140px] md:min-h-[200px]" style={{ background: 'radial-gradient(ellipse at top, #F4C542, #F8F5E6 80%)' }}>
               <h5 className="font-headline text-2xl md:text-3xl text-brand-green">Fresh & Crisp</h5>
            </div>
          </div>
        </div>

        <div className="font-serif italic text-lg md:text-2xl text-brand-green border-l-[3px] border-brand-gold pl-6 py-2 my-6 md:my-8">
          "Nairobi’s Sunday scene is fragmented. We close the gap with a visual language that turns every surface into a content asset."
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-body text-sm md:text-base text-brand-green/70">
          <div className="space-y-3">
            <h4 className="font-headline text-xl text-brand-green">Furniture, Lighting & Zoning</h4>
            <p>Owned editions are zoned into distinct areas, each with its own energy level:</p>
            <ul className="space-y-0">
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Dance Floor:</strong> Main stage area with the highest energy and programmed LED transitions.</li>
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Chill / Lounge:</strong> Low seating, cushions, and greenery for lifestyle-focused photography.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline text-xl text-brand-green">Lighting Design (3 Phases)</h4>
            <p>The afternoon-to-evening transition is our signature visual moment:</p>
            <ul className="space-y-0">
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Phase 1:</strong> Natural daylight only, leveraging architecture and greenery.</li>
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Phase 2:</strong> Golden hour accentuation with amber washes and warm canopies.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3B: Staff Dressing */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up [animation-delay:400ms]">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          3B: Staff Dressing & Brand Presentation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-6 md:p-8 text-center bg-white rounded-[24px] border-brand-green/5 shadow-sm">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <GlassWater className="text-brand-gold" size={24} />
            </div>
            <h6 className="font-headline text-xl md:text-2xl text-brand-green mb-1 md:mb-2">The Mixologist</h6>
            <p className="font-body text-brand-green/50 text-xs md:text-sm">Branded yellow aprons and precision serving.</p>
          </Card>
          <Card className="p-6 md:p-8 text-center bg-white rounded-[24px] border-brand-green/5 shadow-sm">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Mic2 className="text-brand-teal" size={24} />
            </div>
            <h6 className="font-headline text-xl md:text-2xl text-brand-green mb-1 md:mb-2">The Vibe Host</h6>
            <p className="font-body text-brand-green/50 text-xs md:text-sm">Cultural connectors ensuring seamless energy flow.</p>
          </Card>
          <Card className="p-6 md:p-8 text-center bg-white rounded-[24px] border-brand-green/5 shadow-sm">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <ShieldCheck className="text-brand-green" size={24} />
            </div>
            <h6 className="font-headline text-xl md:text-2xl text-brand-green mb-1 md:mb-2">Elite Security</h6>
            <p className="font-body text-brand-green/50 text-xs md:text-sm">Unobtrusive but vigilant safety protocols.</p>
          </Card>
        </div>
      </div>

      {/* 3C: Social Media Standards */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up [animation-delay:600ms]">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          3C: Social Media Visual Standards
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 md:space-y-8 font-body text-sm md:text-base text-brand-green/70">
            <div className="space-y-3">
              <h4 className="font-headline text-xl text-brand-green">The "Savanna Sundays Look"</h4>
              <ul className="space-y-0">
                <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Palette:</strong> Warm golds, deep greens, cream backgrounds.</li>
                <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Photography:</strong> Natural light, shallow depth, authentic moments.</li>
                <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Captions:</strong> Short, punchy, cheeky dry wit.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4 justify-center">
            <Card className="w-[140px] md:w-[200px] aspect-[9/16] bg-brand-ink rounded-[24px] md:rounded-[30px] p-2 border-4 border-brand-green/20 relative overflow-hidden group shadow-2xl">
              <div className="w-full h-full bg-brand-gold/10 flex items-end p-3 md:p-4">
                <span className="font-headline text-brand-gold text-base md:text-xl leading-none uppercase">IG REELS</span>
              </div>
            </Card>
            <Card className="w-[140px] md:w-[200px] aspect-[9/16] bg-brand-ink rounded-[24px] md:rounded-[30px] p-2 border-4 border-brand-green/20 relative overflow-hidden group shadow-2xl">
              <div className="w-full h-full bg-brand-teal/10 flex items-end p-3 md:p-4">
                <span className="font-headline text-brand-teal text-base md:text-xl leading-none uppercase">TIKTOK LIVES</span>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="section-label">Brand Voice Attributes</div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {["Witty", "Self-Aware", "Playful", "Confident", "Premium", "Inclusive", "Sharp"].map((attr, i) => (
              <Badge key={i} className="bg-brand-gold text-brand-green px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-[10px] md:text-sm">{attr}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
