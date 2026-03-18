
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GlassWater, Mic2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-24">
      {/* Section Intro */}
      <div className="font-body text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Savanna’s visual presence must be the most Instagram-worthy activation setup in Nairobi—not by spending the most, but by thinking the most carefully about every surface, every fabric, every light source. If it doesn’t photograph as premium, it doesn’t exist at Savanna Sundays.
        </p>
      </div>

      {/* 3A: Physical Setup */}
      <div className="space-y-12 animate-fade-in-up [animation-delay:200ms]">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          3A: Physical Setup & Environment Design
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 font-body text-base text-brand-green/70">
            <div className="space-y-4">
              <h4 className="font-headline text-xl text-brand-green">Stage Design & Branded Backdrops</h4>
              <p>
                The DJ booth is the visual centrepiece of every owned edition. Firefly designs a modular, transportable stage backdrop system in Savanna’s warm gold-and-earth palette, incorporating the shield logo as a sculptural element rather than a flat banner.
              </p>
              <ul className="space-y-0">
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> Laser-cut metal or MDF panels with logo silhouette, backlit with warm amber LEDs.</li>
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> Designed for the camera—every photograph is a brand impression.</li>
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> Portable "Savanna Sundays" DJ booth fascia for title sponsorship events.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline text-xl text-brand-green">Bar Design & Drink Service Stations</h4>
              <p>
                Owned editions feature a dedicated Savanna Bar with back-bar shelving displaying all four variants (Dry, Light, Angry Lemon, 0.0) with warm spotlighting and branded counter wraps.
              </p>
              <ul className="space-y-0">
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Savanna 0.0 Mocktail Station:</strong> Operates as a separate bar element, signaling non-alcoholic as a featured choice.</li>
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Signature Serves:</strong> Garnishes and branded glassware for high-quality photography potential.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
            <div className="md:col-span-2 rounded-[24px] p-8 flex flex-col justify-end text-brand-green relative overflow-hidden min-h-[240px]" style={{ background: 'linear-gradient(140deg, #F4C542 0%, #E8A820 55%, #2D8C7F 100%)' }}>
              <div className="relative z-10">
                <h5 className="font-headline text-4xl mb-2">Golden Hour Energy</h5>
                <p className="font-body text-brand-green/60">Premium, vibrant, and unmistakably Savanna.</p>
              </div>
            </div>
            <div className="rounded-[24px] p-8 flex flex-col justify-center items-center text-center text-white min-h-[200px]" style={{ background: 'linear-gradient(130deg, #1F4D3A 0%, #2D8C7F 100%)' }}>
              <h5 className="font-headline text-3xl mb-2 uppercase">Premium Lounge</h5>
              <div className="w-12 h-1 bg-brand-gold mx-auto" />
            </div>
            <div className="rounded-[24px] p-8 flex flex-col justify-end bg-brand-cream border border-brand-green/10 min-h-[200px]" style={{ background: 'radial-gradient(ellipse at top, #F4C542, #F8F5E6 80%)' }}>
               <h5 className="font-headline text-3xl text-brand-green">Fresh & Crisp</h5>
            </div>
          </div>
        </div>

        <div className="font-serif italic text-xl md:text-2xl text-brand-green border-l-[3px] border-brand-gold pl-6 py-2 my-8">
          "Nairobi’s Sunday scene is fragmented. We close the gap with a visual language that turns every surface into a content asset."
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-body text-base text-brand-green/70">
          <div className="space-y-4">
            <h4 className="font-headline text-xl text-brand-green">Furniture, Lighting & Zoning</h4>
            <p>Owned editions are zoned into distinct areas, each with its own energy level:</p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Dance Floor:</strong> Main stage area with the highest energy and programmed LED transitions.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Chill / Lounge Zone:</strong> Low seating, cushions, and greenery for lifestyle-focused photography.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Photo Moment Zone:</strong> Interactive installations (mirrored platforms, vintage props) for unique UGC.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-xl text-brand-green">Lighting Design (3 Phases)</h4>
            <p>The afternoon-to-evening transition is our signature visual moment:</p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Phase 1 (2-4:30 PM):</strong> Natural daylight only, leveraging architecture and greenery.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Phase 2 (4:30-6:30 PM):</strong> Golden hour accentuation with amber washes and warm canopies.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Phase 3 (6:30-9 PM):</strong> Full programmed lighting with moving heads and pin spots.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3B: Staff Dressing */}
      <div className="space-y-12 animate-fade-in-up [animation-delay:400ms]">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          3B: Staff Dressing & Brand Ambassador Presentation
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <h4 className="font-headline text-xl text-brand-green">Branded Uniform Design</h4>
            <p>
              Firefly designs edition-specific staff uniforms that feel like fashion, not corporate merchandise. Reference point: Wanda Lephoto "Dry Goods" collaboration.
            </p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Bartenders:</strong> Minimal aprons in gold or olive over personal outfits.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Ambassadors:</strong> Nairobi streetwear aesthetic blending earth tones and gold accents.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Hosts/MCs:</strong> fashion-forward styling to set the room's energy level.</li>
            </ul>
          </div>
          <div className="space-y-6 font-body text-base text-brand-green/70">
            <h4 className="font-headline text-xl text-brand-green">Brand Immersion Briefing</h4>
            <p>Every person wearing the Savanna brand attends a 45-minute personality download before their first shift.</p>
            <ul className="space-y-0">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Voice:</strong> Dry wit, never corporate.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Product Mastery:</strong> Deep knowledge of all 4 variants, including 0.0.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>UGC Awareness:</strong> Positioning for crowd shots and ambassador engagement.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 text-center bg-white rounded-[24px] border-brand-green/5 shadow-sm">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <GlassWater className="text-brand-gold" size={28} />
            </div>
            <h6 className="font-headline text-2xl text-brand-green mb-2">The Mixologist</h6>
            <p className="font-body text-brand-green/50 text-[14px]">Branded yellow aprons and precision serving.</p>
          </Card>
          <Card className="p-8 text-center bg-white rounded-[24px] border-brand-green/5 shadow-sm">
            <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mic2 className="text-brand-teal" size={28} />
            </div>
            <h6 className="font-headline text-2xl text-brand-green mb-2">The Vibe Host</h6>
            <p className="font-body text-brand-green/50 text-[14px]">Cultural connectors ensuring seamless energy flow.</p>
          </Card>
          <Card className="p-8 text-center bg-white rounded-[24px] border-brand-green/5 shadow-sm">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="text-brand-green" size={28} />
            </div>
            <h6 className="font-headline text-2xl text-brand-green mb-2">Elite Security</h6>
            <p className="font-body text-brand-green/50 text-[14px]">Unobtrusive but vigilant safety protocols.</p>
          </Card>
        </div>
      </div>

      {/* 3C: Social Media Standards */}
      <div className="space-y-12 animate-fade-in-up [animation-delay:600ms]">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          3C: Social Media Visual Standards
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 font-body text-base text-brand-green/70">
            <div className="space-y-4">
              <h4 className="font-headline text-xl text-brand-green">The "Savanna Sundays Look"</h4>
              <p>Firefly maintains a Visual Style Guide governing all content:</p>
              <ul className="space-y-0">
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Palette:</strong> Warm golds, deep greens, cream backgrounds. No corporate blues.</li>
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Photography:</strong> Natural light, shallow depth of field, authentic moments.</li>
                <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Captions:</strong> Short, punchy, cheeky dry wit. Never try-hard.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-xl text-brand-green">Template Systems</h4>
              <p>A suite of social media templates refreshed quarterly across Feed, Stories, and Reels to ensure visual consistency while remaining dynamic.</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Card className="w-[160px] md:w-[200px] aspect-[9/16] bg-brand-ink rounded-[30px] p-2 border-4 border-brand-green/20 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-4 right-4 z-10 opacity-50">
                <Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png" alt="IG" width={32} height={32} />
              </div>
              <div className="w-full h-full bg-brand-gold/10 flex items-end p-4">
                <span className="font-headline text-brand-gold text-lg md:text-xl leading-none">IG REELS</span>
              </div>
            </Card>
            <Card className="w-[160px] md:w-[200px] aspect-[9/16] bg-brand-ink rounded-[30px] p-2 border-4 border-brand-green/20 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-4 right-4 z-10 opacity-50 brightness-0 invert">
                <Image src="https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png" alt="TikTok" width={50} height={16} />
              </div>
              <div className="w-full h-full bg-brand-teal/10 flex items-end p-4">
                <span className="font-headline text-brand-teal text-lg md:text-xl leading-none">TIKTOK LIVES</span>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div className="section-label">Brand Voice Attributes</div>
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-brand-gold text-brand-green px-6 py-3 rounded-full font-bold text-sm">Witty</Badge>
            <Badge className="bg-brand-gold text-brand-green px-6 py-3 rounded-full font-bold text-sm">Self-Aware</Badge>
            <Badge className="bg-brand-gold text-brand-green px-6 py-3 rounded-full font-bold text-sm">Playful</Badge>
            <Badge className="bg-brand-green text-white px-6 py-3 rounded-full font-bold text-sm">Confident</Badge>
            <Badge className="bg-brand-green text-white px-6 py-3 rounded-full font-bold text-sm">Premium</Badge>
            <Badge className="bg-brand-teal text-white px-6 py-3 rounded-full font-bold text-sm">Inclusive</Badge>
            <Badge className="bg-brand-teal text-white px-6 py-3 rounded-full font-bold text-sm">Culturally Sharp</Badge>
            <Badge variant="outline" className="border-brand-green/30 text-brand-green px-6 py-3 rounded-full font-bold text-sm uppercase">Never Preachy</Badge>
            <Badge variant="outline" className="border-brand-green/30 text-brand-green px-6 py-3 rounded-full font-bold text-sm uppercase">Never Corporate</Badge>
            <Badge variant="outline" className="border-brand-green/30 text-brand-green px-6 py-3 rounded-full font-bold text-sm uppercase">Never Cheap</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
