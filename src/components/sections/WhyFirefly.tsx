
"use client";

import React from 'react';
import Image from 'next/image';
import { WaterDroplets } from '@/components/brand/VisualElements';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Zap, Target, Share2, ShieldCheck, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const WhyFireflySection = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'firefly-logo');

  return (
    <div className="relative space-y-24 py-12">
      <WaterDroplets />
      
      <div className="relative z-10 space-y-24">
        {/* Strategic Pull Quote */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="font-serif italic text-[clamp(24px,4vw,46px)] leading-tight text-white animate-fade-in-up">
            "<span className="text-brand-gold">Savanna Sundays</span> doesn't need another agency. It needs a partner who builds communities, not campaigns — and content engines, not one-off recaps."
          </h3>
        </div>

        {/* 14A: The Content-First Mandate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-body text-base text-brand-cream/60">
            <h4 className="font-headline text-2xl md:text-3xl text-brand-gold border-l-[3px] border-brand-gold pl-4 uppercase">
              14A: The Content-First Mandate
            </h4>
            <p className="leading-relaxed">
              Firefly is not an events company that does social media. We are a **content-first activation agency** that uses events as our primary production set. 
            </p>
            <p className="leading-relaxed">
              Our philosophy is simple: if a physical moment doesn't translate into a high-value digital asset, it is a wasted brand investment. We move beyond "hosting parties" to managing a content harvest that feeds Savanna’s digital hegemony for 30+ days between every Sunday.
            </p>
          </div>

          <Card className="p-8 bg-white/5 border border-white/10 rounded-[32px] space-y-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h5 className="font-headline text-2xl text-white uppercase">The Shift in Mindset</h5>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-brand-gold/10 rounded-xl border-l-4 border-brand-gold">
                <span className="font-body text-[10px] uppercase font-bold tracking-widest text-brand-gold block mb-1">Traditional View</span>
                <p className="text-white/60 text-sm italic">"Let's fill the room and take some photos."</p>
              </div>
              <div className="p-4 bg-brand-teal/10 rounded-xl border-l-4 border-brand-teal">
                <span className="font-body text-[10px] uppercase font-bold tracking-widest text-brand-teal block mb-1">Firefly View</span>
                <p className="text-white text-sm font-bold">"Let's build a set that produces 150+ high-fidelity assets to own the feed for a month."</p>
              </div>
            </div>
          </Card>
        </div>

        {/* 14B: Events as Distribution Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8 bg-brand-green/40 border border-brand-gold/20 rounded-[32px] space-y-6 shadow-2xl order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Every Ticket", sub: "A Data Node", icon: <Target className="text-brand-gold" /> },
                { label: "Every Drink", sub: "A Content Prop", icon: <Layers className="text-brand-teal" /> },
                { label: "Every Venue", sub: "A Soundstage", icon: <Share2 className="text-brand-gold" /> },
                { label: "Every Sunday", sub: "A Media Asset", icon: <TrendingUp className="text-brand-teal" /> },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-2xl flex flex-col items-center text-center gap-2 border border-white/5 group hover:border-brand-gold transition-colors">
                  <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <div className="font-headline text-lg text-white leading-none">{item.label}</div>
                    <div className="font-body text-[10px] uppercase tracking-widest text-white/40">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6 font-body text-base text-brand-cream/60 order-1 lg:order-2">
            <h4 className="font-headline text-2xl md:text-3xl text-brand-gold border-l-[3px] border-brand-gold pl-4 uppercase">
              14B: Events as Distribution
            </h4>
            <p className="leading-relaxed">
              We treat the physical activation as a **distribution network** for the brand's culture. 
            </p>
            <p className="leading-relaxed">
              In Nairobi's fragmented media landscape, standard advertising is being ignored. Savanna Sundays succeeds because it doesn't look like an ad—it looks like a lifestyle people want to join. We use physical proximity to distribute the "Savanna Vibe" directly into the social feeds of the city’s most influential consumers.
            </p>
          </div>
        </div>

        {/* 14C: The Firefly Differentiator */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h4 className="font-headline text-3xl md:text-4xl text-white uppercase tracking-widest">Why Choose Firefly?</h4>
            <div className="w-24 h-1 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-green flex items-center justify-center mx-auto shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <div className="text-center space-y-2">
                <h5 className="font-headline text-2xl text-brand-gold">UNIFIED STEWARDSHIP</h5>
                <p className="font-body text-sm text-white/50 leading-relaxed">We manage the full cycle: Strategy → Production → Content → Community → Data. No fragmented vendor hand-offs.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-green flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 size={24} />
              </div>
              <div className="text-center space-y-2">
                <h5 className="font-headline text-2xl text-brand-gold">BROADCAST STANDARDS</h5>
                <p className="font-body text-sm text-white/50 leading-relaxed">We apply TV-production rigor to live events. Every moment is timed, every light is mapped, every set is recorded.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-green flex items-center justify-center mx-auto shadow-lg">
                <TrendingUp size={24} />
              </div>
              <div className="text-center space-y-2">
                <h5 className="font-headline text-2xl text-brand-gold">DATA-DRIVEN ROI</h5>
                <p className="font-body text-sm text-white/50 leading-relaxed">We trade "Estimated Reach" for hard data. Every scan, every bottle, and every community member is tracked and reported.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Contact & Action */}
        <div className="flex flex-col items-center gap-12 pt-12">
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

          <div className="space-y-4 text-center">
            <p className="font-body font-bold text-sm tracking-[8px] text-brand-gold uppercase">Firefly Management</p>
            <p className="font-body text-[12px] tracking-[2px] uppercase text-brand-cream/35">
              NextGen Mall, Mombasa Road, Nairobi · Kenya
            </p>
          </div>

          <div className="flex justify-center pb-12">
             <button className="btn-primary flex items-center gap-6 group scale-110 hover:scale-115 transition-all shadow-2xl">
               <span className="font-headline text-xl tracking-wider uppercase">LET'S OWN EVERY SUNDAY TOGETHER</span>
               <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                 <ArrowRight className="text-brand-green" size={20} />
               </div>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
