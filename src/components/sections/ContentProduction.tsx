
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Youtube, 
  Instagram, 
  Camera, 
  Video, 
  Scissors, 
  Wand2, 
  Upload, 
  Share2, 
  Eye, 
  TrendingUp, 
  MessageCircle,
  Play,
  CalendarDays,
  Smartphone,
  CheckCircle2,
  Megaphone,
  RefreshCcw,
  Maximize2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

const objectives = [
  {
    title: "BRAND VISIBILITY",
    icon: <Eye className="w-6 h-6" />,
    body: "Savanna logo watermark on every Reel and photo. Branded intro/outro on every DJ set. Lower-thirds on all video. Bar wraps and signage visible in every crowd shot. The brand is in every frame, every week."
  },
  {
    title: "COMMUNITY GROWTH",
    icon: <TrendingUp className="w-6 h-6" />,
    body: "YouTube DJ sets drive subscribers. ‘Spot Yourself’ photo tags drive Instagram follows. Weekly Reels build a content library that compounds. Every Sunday adds to an audience Savanna owns."
  },
  {
    title: "CONSUMER ENGAGEMENT",
    icon: <MessageCircle className="w-6 h-6" />,
    body: "QR codes at every venue link to weekly competitions (built and managed by Firefly). Comment-to-win on YouTube. Influencer Stories drive venue traffic. Each Sunday creates 15+ taggable moments."
  },
  {
    title: "PLATFORM REACH",
    icon: <Share2 className="w-6 h-6" />,
    body: "Content formatted and optimised for YouTube (long-form DJ sets), Instagram Reels, TikTok, Facebook, and Twitter/X. Each platform gets native-format content, not cross-posted reposts."
  }
];

const contentRhythm = [
  { 
    day: "SUNDAY", 
    title: "SHOOT DAY", 
    desc: "Full squad capture", 
    icon: <Video className="w-5 h-5" />, 
    platforms: [],
    details: "All content captured at squad venue."
  },
  { 
    day: "TUESDAY", 
    title: "RECAP DROP", 
    desc: "Reel 1 + Photo Batch 1", 
    icon: <Play className="w-5 h-5" />, 
    platforms: [<Instagram key="ig" size={12} />, <Smartphone key="tt" size={12} />],
    details: "Hero recap published. High-engagement photos delivered."
  },
  { 
    day: "WEDNESDAY", 
    title: "DJ MOMENT", 
    desc: "Reel 2 + Photo Batch 2", 
    icon: <Play className="w-5 h-5" />, 
    platforms: [<Instagram key="ig" size={12} />, <Smartphone key="tt" size={12} />],
    details: "Viral DJ moment clip. Lifestyle gallery batch."
  },
  { 
    day: "THURSDAY", 
    title: "CROWD CUT", 
    desc: "Reel 3 + DJ Edit", 
    icon: <Play className="w-5 h-5" />, 
    platforms: [<Instagram key="ig" size={12} />, <Smartphone key="tt" size={12} />],
    details: "Crowd energy Reel. Mastered DJ audio enters final cut."
  },
  { 
    day: "FRIDAY", 
    title: "FULL SET", 
    desc: "Reel 4 + YouTube Set", 
    icon: <Youtube className="w-5 h-5" />, 
    platforms: [<Youtube key="yt" size={12} />, <Instagram key="ig" size={12} />],
    details: "Influencer highlight Reel. Multi-cam DJ set live on YouTube."
  },
  { 
    day: "SATURDAY", 
    title: "UGC ROUNDUP", 
    desc: "Fan Content + Teaser", 
    icon: <RefreshCcw className="w-5 h-5" />, 
    platforms: [<Instagram key="ig" size={12} />, <Megaphone key="mg" size={12} />],
    details: "Best attendee tags reposted. Next Sunday teaser drops."
  },
];

const pipeline = [
  { node: "SHOOT", sub: "Multi-camera. Board-feed audio. Sunday 2PM–9PM.", icon: <Video className="w-5 h-5" /> },
  { node: "EDIT", sub: "Post-production starts Monday. All 3 deliverables in parallel.", icon: <Scissors className="w-5 h-5" /> },
  { node: "MASTER", sub: "Colour grade, audio master, brand elements, thumbnails.", icon: <Wand2 className="w-5 h-5" /> },
  { node: "UPLOAD", sub: "YouTube/Mixcloud/SoundCloud + Instagram/TikTok/Facebook.", icon: <Upload className="w-5 h-5" /> },
  { node: "DISTRIBUTE", sub: "SEO tags, captions, scheduling, cross-posting.", icon: <Share2 className="w-5 h-5" /> },
];

const costItems = [
  { id: "A", label: "DJ Set Production — KSh 73,000", desc: "Multi-camera shoot, edit, master, upload — 4 sets/month" },
  { id: "B", label: "Reels Production — KSh 39,000", desc: "Shoot, edit, motion graphics, scheduling — 16 Reels/month" },
  { id: "C", label: "Photography — KSh 33,000", desc: "Shoot, cull, edit, grade, format — 28 images/month" },
  { id: "D", label: "Overheads — KSh 20,000", desc: "Equipment, storage, software, project management" }
];

const ContentMockups = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  
  return (
    <div className="space-y-12">
      <div className="section-label text-center">Branded Content Mock-ups</div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Mock-up 1: YouTube Thumbnail */}
        <div className="lg:col-span-8 space-y-4">
          <div className="font-body text-[10px] uppercase tracking-[3px] text-brand-gold/60 font-bold">Mock-up 1 — YouTube DJ Set Thumbnail</div>
          <div className="relative aspect-video w-full rounded-[32px] overflow-hidden bg-brand-green group border border-white/10 shadow-2xl">
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000">
               <Image 
                 src="https://picsum.photos/seed/music1/1200/675" 
                 alt="DJ Silhouette" 
                 fill 
                 className="object-cover"
                 data-ai-hint="dj silhouette"
               />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/60 via-transparent to-transparent" />
            
            {/* Content Layers */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-[clamp(40px,6vw,80px)] text-brand-gold leading-none tracking-tighter drop-shadow-2xl">
                  SAVANNA<br/>SUNDAYS
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-brand-gold" />
                  <span className="font-headline text-2xl text-white uppercase tracking-widest">Muze • DJ Nosh 254</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-full bg-brand-gold text-brand-green flex items-center justify-center shadow-[0_0_30px_rgba(244,197,66,0.5)] group-hover:scale-110 transition-transform">
                  <Play fill="currentColor" size={32} />
                </div>
                {savannaLogo && (
                  <div className="relative h-12 w-32 opacity-90">
                    <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain object-right" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Technical Detail */}
            <div className="absolute top-8 right-8 px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <span className="font-body text-[8px] uppercase tracking-widest text-white/60 font-bold">4K Multi-Cam • Board Feed Audio</span>
            </div>
          </div>
        </div>

        {/* Vertical/Portrait Grid for others */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* Mock-up 2: Instagram Reel */}
          <div className="space-y-4">
            <div className="font-body text-[10px] uppercase tracking-[3px] text-brand-gold/60 font-bold">Mock-up 2 — Instagram Reel</div>
            <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-[32px] overflow-hidden bg-brand-dark-alt border border-white/10 shadow-2xl group">
              <Image src="https://picsum.photos/seed/crowd2/400/711" alt="Crowd Energy" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-ai-hint="crowd energy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center">
                    <Instagram size={12} className="text-brand-green" />
                  </div>
                  <span className="font-body text-[10px] text-white font-bold uppercase tracking-widest">Savanna Sundays</span>
                </div>
                <p className="font-headline text-2xl text-white leading-tight uppercase">THE SUNDAY FLYWHEEL<br/><span className="text-brand-gold">LIVE AT THE ALCHEMIST</span></p>
              </div>
              
              <div className="absolute top-6 right-6">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                   <Maximize2 size={14} className="text-white/60" />
                </div>
              </div>
            </div>
          </div>

          {/* Mock-up 3: Photography Frame */}
          <div className="space-y-4">
            <div className="font-body text-[10px] uppercase tracking-[3px] text-brand-gold/60 font-bold">Mock-up 3 — Pro Photography</div>
            <div className="relative aspect-[4/5] w-full max-w-[280px] mx-auto rounded-[32px] overflow-hidden bg-brand-green/20 border border-brand-gold/20 shadow-xl group">
              <Image src="https://picsum.photos/seed/product3/400/500" alt="Product Moment" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" data-ai-hint="lifestyle party" />
              <div className="absolute inset-0 border-[16px] border-brand-green/10" />
              <div className="absolute bottom-4 right-4">
                <span className="font-headline text-lg text-brand-gold/40 tracking-widest">© FIREFLY 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContentSocialSection = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sequential light-up animation
          contentRhythm.forEach((_, i) => {
            setTimeout(() => {
              setActiveDay(i);
            }, i * 300);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (rhythmRef.current) observer.observe(rhythmRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-24">
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

      {/* Brand Objectives Section */}
      <div className="space-y-8">
        <div className="section-label text-center">How Every Piece of Content Works for Savanna</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, i) => (
            <Card 
              key={i} 
              className="p-8 bg-[#FDF8EC] border-none rounded-[32px] space-y-4 shadow-xl hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold text-brand-green rounded-full flex items-center justify-center shadow-md">
                  {obj.icon}
                </div>
                <h4 className="font-headline text-2xl text-brand-green uppercase tracking-tight leading-none">
                  {obj.title}
                </h4>
              </div>
              <p className="font-body text-brand-dark/80 text-sm leading-relaxed">
                {obj.body}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Content Mockups */}
      <ContentMockups />

      {/* Animated Content Rhythm Calendar */}
      <div className="space-y-8 py-12" ref={rhythmRef}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <CalendarDays className="text-brand-gold" size={20} />
          <div className="section-label mb-0">Weekly Publishing Rhythm</div>
        </div>

        <div className="relative overflow-x-auto scrollbar-hide -mx-6 px-6">
          <div className="flex gap-4 min-w-[1000px] pb-6 snap-x snap-mandatory">
            {contentRhythm.map((item, i) => (
              <Card 
                key={i} 
                className={cn(
                  "flex-1 p-6 rounded-[24px] border transition-all duration-700 snap-center flex flex-col justify-between h-[200px] group",
                  activeDay !== null && activeDay >= i 
                    ? "bg-brand-gold/10 border-brand-gold shadow-[0_0_20px_rgba(244,197,66,0.15)]" 
                    : "bg-white/5 border-white/5 opacity-40"
                )}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "font-headline text-lg tracking-widest uppercase",
                      activeDay !== null && activeDay >= i ? "text-brand-gold" : "text-brand-cream/40"
                    )}>
                      {item.day}
                    </span>
                    <div className={cn(
                      "p-2 rounded-lg transition-colors",
                      activeDay !== null && activeDay >= i ? "bg-brand-gold text-brand-green" : "bg-white/5 text-brand-gold/40"
                    )}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h5 className={cn(
                      "font-headline text-xl uppercase leading-none",
                      activeDay !== null && activeDay >= i ? "text-brand-gold" : "text-brand-cream/60"
                    )}>
                      {item.title}
                    </h5>
                    <p className="font-body text-[10px] text-brand-cream/60 font-bold uppercase tracking-widest">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/10">
                  <div className="flex gap-1.5">
                    {item.platforms.map((p, pIdx) => (
                      <div key={pIdx} className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center text-brand-gold/60">
                        {p}
                      </div>
                    ))}
                  </div>
                  <CheckCircle2 className={cn(
                    "w-4 h-4 transition-all duration-500",
                    activeDay !== null && activeDay >= i ? "text-brand-gold opacity-100" : "text-white/5 opacity-0"
                  )} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline Visual */}
      <div className="space-y-8">
        <div className="section-label text-center">The Content Pipeline</div>
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 px-4">
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
