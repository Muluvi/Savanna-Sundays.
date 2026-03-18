
"use client";

import React from 'react';
import Image from 'next/image';
import { WaterDroplets } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export const WhyFireflySection = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative space-y-24 py-12">
      <WaterDroplets />
      
      <div className="relative z-10 text-center space-y-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h3 className="font-serif italic text-[clamp(24px,4vw,46px)] leading-tight text-white animate-fade-in-up">
            "<span className="text-brand-gold">Savanna Sundays</span> doesn't need another agency. It needs a partner who builds communities, not campaigns — and content engines, not one-off recaps."
          </h3>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="relative group">
             {/* Breathing Gold Ring */}
             <div className="absolute inset-0 rounded-full border-4 border-brand-gold animate-pulse-gold opacity-50 -inset-4" />
             <div className="relative w-56 h-56 bg-white/5 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center p-10 shadow-2xl transition-transform hover:scale-105 duration-500">
                {logo && (
                  <Image 
                    src={logo.imageUrl} 
                    alt="Firefly Management" 
                    width={200} 
                    height={56} 
                    className="brightness-0 invert opacity-90"
                  />
                )}
             </div>
          </div>

          <div className="space-y-4">
            <p className="font-body font-bold text-sm tracking-[8px] text-brand-gold uppercase">Firefly Management</p>
            <p className="font-body text-[12px] tracking-[2px] uppercase text-brand-cream/35">
              NextGen Mall, Mombasa Road, Nairobi · Kenya
            </p>
          </div>
        </div>

        <div className="flex justify-center pb-12">
           <button className="btn-primary flex items-center gap-6 group scale-110 hover:scale-115 transition-all shadow-2xl">
             <span className="font-headline text-xl tracking-wider">LET'S BUILD SAVANNA SUNDAYS TOGETHER</span>
             <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
               <ArrowRight className="text-brand-green" size={20} />
             </div>
           </button>
        </div>
      </div>
    </div>
  );
};
