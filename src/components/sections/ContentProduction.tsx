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

const PlatformDistribution = () => {
  const platforms = [
    { id: 'social-yt', name: 'YouTube', reach: 'DJ sets. 5K–20K views/video in Nairobi market.' },
    { id: 'social-ig', name: 'Instagram', reach: 'Reels + Stories + Photos. 10K–50K impressions/week.' },
    { id: 'social-tt', name: 'TikTok', reach: 'Short-form clips. High discovery potential. 5K–30K views.' },
    { id: 'social-fb', name: 'Facebook', reach: 'Event promotion + photo albums. 603K existing followers.' },
    { id: 'social-x', name: 'Twitter/X', reach: 'Real-time updates + conversation. 1.1K followers, growth opportunity.' },
  ];

  return (
    <div className="space-y-8">
      <div className="section-label text-center">Multi-Platform Distribution Strip</div>
      <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide -mx-6 px-6 snap-x">
        {platforms.map((p) => {
          const img = PlaceHolderImages.find(i => i.id === p.id);
          return (
            <Card key={p.id} className="min-w-[240px] md:flex-1 p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center text-center gap-4 group hover:bg-white/10 transition-all snap-center relative overflow-hidden">
              <div className="h-9 relative w-full flex items-center justify-center">
                {img && (
                  <Image 
                    src={img.imageUrl} 
                    alt={p.name} 
                    height={36} 
                    width={120} 
                    className="object-contain filter brightness-110" 
                  />
                )}
              </div>
              <div className="space-y-1">
                <h5 className="font-headline text-lg text-brand-gold uppercase tracking-wider">{p.name}</h5>
                <p className="font-body text-[10px] text-brand-text-muted font-bold uppercase tracking-widest leading-relaxed">
                  {p.reach}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const InspirationStrip = () => {
  const inspirations = [
    { id: "partner-boiler-room", name: "Boiler Room" },
    { id: "partner-mixmag", name: "Mixmag" },
    { id: "partner-balcony-mix", name: "The Balcony Mix" },
    { id: "label-descendants", name: "Descendants Records" },
    { id: "label-groove-cartel", name: "Groove Cartel SA" },
    { id: "label-sondela", name: "SondeLa Recordings" },
    { id: "label-kunye", name: "Kunye Records" },
  ];

  return (
    <div className="space-y-6 pt-12">
      <div className="text-center px-6">
        <p className="font-body text-[10px] text-brand-text-muted uppercase tracking-[3px] font-bold">
          Savanna Sundays is inspired by platforms that turned DJ sets into cultural movements.
        </p>
      </div>

      <div className="relative py-12 bg-brand-dark border-y border-white/5 overflow-hidden group">
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] space-x-16" style={{ animationDuration: '25s' }}>
          {[...Array(3)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center space-x-16 shrink-0">
              {inspirations.map((item) => {
                const img = PlaceHolderImages.find(p => p.id === item.id);
                return (
                  <div key={`${listIdx}-${item.id}`} className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                    {img && (
                      <div className="relative h-[50px] w-[120px]">
                        <Image 
                          src={img.imageUrl} 
                          alt={item.name} 
                          fill 
                          className="object-contain filter grayscale brightness-200"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Masking Gradient */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
      </div>
    </div>
  );
};

const ContentMockups = () => {
  const savannaLogo = PlaceHolderImages.find(p => p.id === 'savanna-logo');
  const savannaBottle = PlaceHolderImages.find(p => p.id === 'savanna-bottle');
  
  return (
    <div className="space-y-16">
      <div className="section-label text-center">Branded Content Mock-ups</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Mock-up 1: YouTube Thumbnail */}
        <div className="lg:col-span-8 space-y-4">
          <div className="font-body text-[10px] uppercase tracking-[3px] text-brand-gold/60 font-bold">Mock-up 1 — YouTube DJ Set Thumbnail</div>
          <div className="relative aspect-video w-full rounded-[32px] overflow-hidden bg-brand-green group border border-white/10 shadow-2xl">
            <div className="absolute inset-0 grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000">
               <Image 
                 src="https://picsum.photos/seed/music1/1200/675" 
                 alt="DJ Silhouette" 
                 fill 
                 className="object-cover"
                 data-ai-hint="dj silhouette"
               />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-[clamp(40px,6vw,80px)] text-brand-gold leading-[0.85] tracking-tighter drop-shadow-2xl">
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
                  <div className="relative h-12 w-32">
                    <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain object-right" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mock-up 2: Instagram Reel (9:16) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-body text-[10px] uppercase tracking-[3px] text-brand-gold/60 font-bold">Mock-up 2 — Instagram Reel Frame</div>
          <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-[48px] overflow-hidden bg-brand-dark-alt border-[8px] border-brand-dark shadow-2xl group ring-1 ring-white/10">
            <div className="absolute inset-0">
               <Image 
                 src="https://picsum.photos/seed/crowd7/600/1066" 
                 alt="Crowd Energy" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 data-ai-hint="party crowd"
               />
               <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>

            {savannaLogo && (
              <div className="absolute top-8 right-8 w-20 h-10 opacity-60">
                <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain" />
              </div>
            )}

            <div className="absolute bottom-10 left-6 right-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-gold">
                   <Instagram size={18} />
                </div>
                <div className="space-y-0.5">
                  <span className="font-body text-[11px] text-white font-bold tracking-wider">@SavannaCider_EA</span>
                  <div className="flex gap-2">
                    <span className="bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border border-brand-gold/30">AD</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-headline text-3xl text-white leading-tight uppercase tracking-tight">
                  THE SUNDAY<br/>
                  <span className="text-brand-gold">FLYWHEEL</span>
                </p>
                <div className="flex items-center gap-2">
                   <span className="font-body text-[10px] text-brand-gold font-bold tracking-[2px] uppercase">#SavannaSundays</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-6 flex items-end gap-0.5 h-4">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-[2px] bg-brand-gold animate-waveform" 
                  style={{ height: '100%', animationDelay: `${i * 0.1}s` }} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mock-up 3: Edited Photo (Landscape) */}
      <div className="space-y-4">
        <div className="font-body text-[10px] uppercase tracking-[3px] text-brand-gold/60 font-bold text-center">Mock-up 3 — Edited Event Photography</div>
        <div className="relative aspect-[21/9] w-full rounded-[40px] overflow-hidden bg-brand-green group border border-white/10 shadow-2xl">
          <div className="absolute inset-0 grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2000ms]">
             <Image 
               src="https://picsum.photos/seed/event3/1600/680" 
               alt="Venue Atmosphere" 
               fill 
               className="object-cover"
               data-ai-hint="luxury lounge"
             />
          </div>
          
          <div className="absolute inset-0 bg-brand-gold/15 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute inset-0 p-10 flex items-center justify-between">
            <div className="space-y-2 max-w-lg">
              <div className="flex items-center gap-3">
                <Camera className="text-brand-gold" size={20} />
                <span className="font-headline text-2xl text-white uppercase tracking-wider">Atmosphere Capture</span>
              </div>
              <p className="font-body text-xs text-white/60 uppercase tracking-[2px] font-bold">Warm Savanna Grade • Shot at Muze, Westlands</p>
            </div>

            <div className="flex items-end gap-12">
              {savannaBottle && (
                <div className="relative h-48 w-24 group-hover:scale-110 transition-transform duration-700">
                  <Image 
                    src={savannaBottle.imageUrl} 
                    alt="Savanna Bottle" 
                    fill 
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" 
                  />
                </div>
              )}
              <div className="text-right flex flex-col items-end gap-2">
                {savannaLogo && (
                  <div className="relative h-10 w-24 opacity-80">
                    <Image src={savannaLogo.imageUrl} alt="Savanna" fill className="object-contain object-right" />
                  </div>
                )}
                <div className="font-headline text-brand-gold text-2xl leading-none tracking-tighter opacity-60">SAVANNA SUNDAYS</div>
              </div>
            </div>
          </div>

          <div className="absolute top-10 left-10 p-4 border-l-2 border-brand-gold bg-black/40 backdrop-blur-md rounded-r-xl">
             <span className="font-body text-[10px] text-brand-gold font-bold uppercase tracking-[3px]">Brand Moat: Bar Wrap Visible</span>
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
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-relaxed">
          "Every Sunday generates content that keeps Savanna visible all week long."
        </p>
      </div>

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
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <div className="section-label text-center">How Every Piece of Content Works for Savanna</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, i) => (
            <Card 
              key={i} 
              className="p-8 bg-[#FDF8EC] border-none rounded-[32px] space-y-4 shadow-xl hover:-translate-y-1 transition-all duration-500"
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

      <PlatformDistribution />
      
      <InspirationStrip />

      <ContentMockups />

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
                  "flex-1 p-6 rounded-[24px] border transition-all duration-700 snap-center flex flex-col justify-between h-[200px]",
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
    </div>
  );
};
