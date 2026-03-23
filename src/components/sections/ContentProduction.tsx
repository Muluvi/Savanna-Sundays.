"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Youtube, Instagram, Camera, Video, Scissors, Wand2, Upload, Share2 } from 'lucide-react';

const deliverables = [
  {
    tag: "4 videos/month",
    heading: "Full DJ Sets on YouTube",
    body: "Every Sunday set captured multi-camera with board-feed audio. Broadcast-mastered, branded thumbnails, intro/outro, SEO-optimised. Uploaded to YouTube, Mixcloud, SoundCloud.",
    variant: "green"
  },
  {
    tag: "16 Reels/month",
    heading: "Reels Built for the Algorithm",
    body: "Four Reels every week: hero recap, DJ moment clip, crowd/lifestyle cut, between-Sundays teaser. 16 pieces of short-form content per month.",
    variant: "dark"
  },
  {
    tag: "28 photos/month",
    heading: "Edited Photos Every Week",
    body: "Seven fully edited, colour-graded photos per Sunday. Formatted for all platforms, captioned and ready to post.",
    variant: "green"
  }
];

const pipeline = [
  { node: "SHOOT", sub: "Multi-camera. Board-feed audio. Sunday 2PM–9PM.", icon: <Video className="w-5 h-5" /> },
  { node: "EDIT", sub: "Post-production starts Monday. All 3 deliverables in parallel.", icon: <Scissors className="w-5 h-5" /> },
  { node: "MASTER", sub: "Colour grade, audio master, brand elements, thumbnails.", icon: <Wand2 className="w-5 h-5" /> },
  { node: "UPLOAD", sub: "YouTube/Mixcloud/SoundCloud + Instagram/TikTok/Facebook.", icon: <Upload className="w-5 h-5" /> },
  { node: "DISTRIBUTE", sub: "SEO tags, captions, scheduling, cross-posting.", icon: <Share2 className="w-5 h-5" /> },
];

const costItems = [
  { 
    id: "A", 
    label: "DJ Set Production — KSh 73,000", 
    desc: "Multi-camera shoot, edit, master, upload — 4 sets/month" 
  },
  { 
    id: "B", 
    label: "Reels Production — KSh 39,000", 
    desc: "Shoot, edit, motion graphics, scheduling — 16 Reels/month" 
  },
  { 
    id: "C", 
    label: "Photography — KSh 33,000", 
    desc: "Shoot, cull, edit, grade, format — 28 images/month" 
  },
  { 
    id: "D", 
    label: "Overheads — KSh 20,000", 
    desc: "Equipment, storage, software, project management" 
  }
];

export const ContentSocialSection = () => {
  return (
    <div className="space-y-16">
      {/* Header Quote */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-relaxed">
          "Every Sunday generates content that keeps Savanna visible all week long."
        </p>
      </div>

      {/* Deliverable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deliverables.map((card, i) => (
          <Card 
            key={i} 
            className={`p-8 border-none border-t-[3px] border-brand-gold rounded-[24px] space-y-4 shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 ${
              card.variant === 'green' ? 'bg-brand-green' : 'bg-[#221A0A]'
            }`}
          >
            <div className="space-y-4">
              <span className="font-body font-bold text-[10px] uppercase tracking-[3px] text-brand-gold/60">
                {card.tag}
              </span>
              <h4 className="font-headline text-3xl text-brand-gold uppercase tracking-tight leading-none">
                {card.heading}
              </h4>
              <p className="font-body text-[#F8F5E6] text-sm leading-relaxed opacity-80">
                {card.body}
              </p>
            </div>
            <div className="pt-4 flex justify-end opacity-20">
              {card.heading.includes('YouTube') ? <Youtube size={32} /> : card.heading.includes('Reels') ? <Instagram size={32} /> : <Camera size={32} />}
            </div>
          </Card>
        ))}
      </div>

      {/* Pipeline Visual */}
      <div className="space-y-8">
        <div className="section-label text-center">The Content Pipeline</div>
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 px-4">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-6 left-0 w-full h-[2px] bg-brand-green hidden md:block z-0" />
          
          {pipeline.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 flex-1 text-left md:text-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-green flex items-center justify-center shrink-0 shadow-lg border-2 border-brand-green md:border-4">
                {step.icon}
              </div>
              <div className="space-y-1">
                <h5 className="font-headline text-xl text-brand-gold uppercase">{step.node}</h5>
                <p className="font-body text-[11px] text-[#B8A98A] leading-tight max-w-[140px] md:mx-auto">
                  {step.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-8 pt-8 border-t border-white/5">
        <div className="text-center space-y-2">
          <h3 className="font-headline text-3xl md:text-5xl text-white uppercase tracking-tighter">
            What's in the KSh 165,000/Month Fee
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {costItems.map((item) => (
            <Card key={item.id} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col justify-center space-y-2 group hover:border-brand-gold/30 transition-colors">
              <h5 className="font-headline text-xl text-white uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                {item.label}
              </h5>
              <p className="font-body text-[11px] text-[#B8A98A] uppercase tracking-wider font-bold">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <div className="inline-block p-8 rounded-[32px] border-2 border-brand-gold/20 bg-brand-gold/5 shadow-2xl animate-glow-pulse">
            <span className="font-body font-bold text-xs uppercase tracking-[4px] text-brand-gold/60 block mb-2">Investment Total</span>
            <div className="font-headline text-5xl md:text-7xl text-brand-gold leading-none tracking-tighter">
              Monthly Total: KSh 165,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
