"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Camera, 
  Palette, 
  Sun, 
  GlassWater, 
  Zap, 
  ShieldCheck, 
  Box, 
  Layers, 
  Ruler, 
  Sparkles,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

const standards = [
  {
    title: "GOLDEN HOUR STAGE",
    icon: <Sun className="w-6 h-6" />,
    color: "gold",
    specs: [
      { label: "Material", value: "Light Oak / Matte Steel" },
      { label: "Lighting", value: "3200K Warm LED Arrays" },
      { label: "Capture", value: "Skin-Tone Optimized" },
      { label: "Structure", value: "Modular / Sustainable" }
    ],
    description: "Custom-engineered modular units designed to create a permanent golden hour, optimized for high-engagement mobile photography.",
    details: "Integrated warm-amber LED arrays are specifically calibrated to enhance organic skin tones, ensuring every photograph taken on stage is social-ready without filters."
  },
  {
    title: "SAVANNA BARS",
    icon: <GlassWater className="w-6 h-6" />,
    color: "teal",
    specs: [
      { label: "Capacity", value: "4-Bay High Throughput" },
      { label: "Ritual", value: "Botanical Garnish Unit" },
      { label: "Variants", value: "Dry, Lemon, 0.0" },
      { label: "Finish", value: "Brushed Gold / Cedar" }
    ],
    description: "Architectural service points that transform the act of ordering into a brand-aligned visual asset.",
    details: "Features dedicated chilled compartments for premium garnishes (dehydrated citrus, fresh rosemary) to ensure every serve is a curated visual experience."
  },
  {
    title: "UNIFORM CODE",
    icon: <Palette className="w-6 h-6" />,
    color: "green",
    specs: [
      { label: "Concept", value: "Cultural Streetwear" },
      { label: "Fabric", value: "Linen / Heavy Canvas" },
      { label: "Tone", value: "Timber / Sand / Slate" },
      { label: "Identity", value: "Vibe Host System" }
    ],
    description: "A shift from traditional promo-wear to high-concept cultural streetwear reflecting Nairobi's premium aesthetic.",
    details: "Mixologists in heavyweight canvas utility aprons and Vibe Hosts in custom-tailored linen-blend coordinates ensure staff integrate seamlessly with high-value guests."
  }
];

const materials = [
  { name: "Light Oak", color: "bg-[#E5D5B8]", desc: "Organic warmth" },
  { name: "Matte Steel", color: "bg-[#2A2A2A]", desc: "Industrial precision" },
  { name: "Brushed Gold", color: "bg-[#F4C542]", desc: "Premium accent" },
  { name: "Linen", color: "bg-[#EAE5D1]", desc: "Tactile quality" },
];

export const VisualIdentitySection = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* 03A: Strategic Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end animate-fade-in-up">
        <div className="space-y-4">
          <div className="section-label">03A: The Aesthetic Mandate</div>
          <h3 className="font-headline text-3xl md:text-5xl text-brand-green uppercase leading-tight">
            Designed for <br/>the Lens.
          </h3>
          <p className="font-body text-sm md:text-lg text-brand-green/60 leading-relaxed max-w-xl">
            We don't build sets; we build broadcast environments. Every surface is an architectural decision made to enhance content yield and cultural credibility.
          </p>
        </div>
        
        <div className="flex gap-3 justify-start lg:justify-end pb-2">
          <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-12 rounded-full border border-brand-green/10 flex items-center justify-center text-brand-teal bg-white shadow-sm">
                <Camera size={20} />
             </div>
             <span className="text-[7px] font-bold uppercase tracking-widest text-brand-green/40">Capture</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-12 rounded-full border border-brand-green/10 flex items-center justify-center text-brand-gold bg-white shadow-sm">
                <Layers size={20} />
             </div>
             <span className="text-[7px] font-bold uppercase tracking-widest text-brand-green/40">Texture</span>
          </div>
        </div>
      </div>

      {/* 03B: The Standards Matrix */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="section-label mb-0">03B: Physical Standards</div>
          <div className="h-[1px] flex-1 bg-brand-green/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((standard, i) => (
            <Card 
              key={i} 
              className={cn(
                "relative group overflow-hidden border-none shadow-2xl rounded-[32px] bg-white transition-all duration-500 hover:-translate-y-2",
                standard.color === 'gold' ? "hover:shadow-[0_20px_60px_-15px_rgba(244,197,66,0.3)]" : "hover:shadow-xl"
              )}
            >
              {/* Architectural Grid Background Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Dynamic Glow for Golden Hour */}
              {standard.color === 'gold' && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-100 transition-opacity" />
              )}

              <div className="p-8 space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110",
                    standard.color === 'gold' ? "bg-brand-gold text-brand-green" : 
                    standard.color === 'teal' ? "bg-brand-teal text-white" : "bg-brand-green text-white"
                  )}>
                    {standard.icon}
                  </div>
                  <div className="flex items-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Ruler size={12} className="text-brand-green" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-brand-green">SPEC. 0{i+1}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-headline text-2xl text-brand-green uppercase tracking-tight">{standard.title}</h4>
                  <p className="font-body text-xs text-brand-green/60 leading-relaxed font-semibold italic">
                    "{standard.description}"
                  </p>
                </div>

                {/* Technical Spec List */}
                <div className="space-y-2 pt-2">
                  {standard.specs.map((spec, j) => (
                    <div key={j} className="flex items-center justify-between border-b border-brand-green/5 pb-2">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-brand-green/40">{spec.label}</span>
                      <span className="text-[10px] font-bold text-brand-green">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="font-body text-[11px] text-brand-green/50 leading-relaxed">
                    {standard.details}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 03C: Material Palette */}
      <div className="animate-fade-in-up [animation-delay:400ms]">
        <Card className="p-8 bg-brand-green border-none rounded-[32px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
            <Box size={120} className="text-white" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                  <Sparkles size={20} />
               </div>
               <div className="space-y-1">
                 <h4 className="font-headline text-2xl text-white uppercase tracking-tight">The Material Palette</h4>
                 <p className="font-body text-[10px] text-brand-gold uppercase tracking-[4px] font-bold opacity-60">Physical Brand Integrity</p>
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {materials.map((mat, i) => (
                <div key={i} className="space-y-3 group/mat">
                  <div className={cn(
                    "h-14 w-full rounded-2xl shadow-xl transition-all duration-500 group-hover/mat:scale-105 group-hover/mat:shadow-brand-gold/10",
                    mat.color
                  )} />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest block">{mat.name}</span>
                    <span className="text-[8px] text-white/40 uppercase tracking-widest block">{mat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col items-center py-4">
        <div className="flex items-center gap-2 text-brand-green/20">
          <ShieldCheck size={14} />
          <span className="text-[8px] font-bold uppercase tracking-[4px]">Verified Physical Standard</span>
        </div>
      </div>
    </div>
  );
};
