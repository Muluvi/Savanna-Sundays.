
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { BrushStroke } from '@/components/brand/VisualElements';
import Image from 'next/image';
import { Play, AudioLines, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const platformsLeft = [
  { name: "Instagram", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768409776/Instagram_Glyph_Gradient_kvn0tu.png", role: "Reels & Live" },
  { name: "TikTok", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765720754/TikTok-logo-RGB-Horizontal-black_avux4m.png", role: "Clips & Live" },
  { name: "Facebook", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765889247/AZsnL4dMdfGc81To27QzCg-AZsnL4dMtdFVyuKofEOY6Q_20251216_154319_0000_nq9hvp.png", role: "Event Pages" },
  { name: "X", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1763590344/X_idVRwaKp9b_4_vpw8j2.png", role: "Moment Recap" },
];

const platformsRight = [
  { name: "YouTube", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764351543/YouTube_Icon_18_lal2zf.jpg", role: "Full DJ Sets" },
  { name: "Spotify", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764344747/Spotify_Primary_Logo_RGB_Green_hpueq3.png", role: "Playlists" },
  { name: "SoundCloud", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765721100/686243c90161ea53ca36dd68_01-primary-white-transparent-p-1600_y4btv4.png", role: "Long Mixes" },
  { name: "Mixcloud", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1767368053/6e028600-2341-4632-9e46-78fffdae5809_20260102_183329_0000_araocz.png", role: "DJ Mixes" },
  { name: "Apple Music", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1768162715/9dd05207-b119-4079-ba49-0fbcbff18f34_20260111_231740_0000_ozapnp.png", role: "Apple Music" },
  { name: "Mixmag", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1769203530/Mixmag_xlnckz.png", role: "Media Coverage" },
];

export const ContentSocialSection = () => {
  return (
    <div className="space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Content is Firefly’s core deliverable and Savanna Sundays’ most valuable compounding asset. Every edition is a content harvest—producing raw material that feeds 30+ days of social media, a growing DJ mix library, a visual archive that appreciates in value, and a community narrative that deepens with every Sunday.
        </p>
      </div>

      {/* 4A: Real-Time Content Capture */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          4A: Real-Time Content Capture (Event Day)
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="font-headline text-xl text-brand-green">The Content Capture Team</h4>
            <ul className="space-y-0 font-body text-base text-brand-green/70">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Lead Photographer (1):</strong> editorial-quality stills—lifestyle, fashion, crowd, product, venue. Delivers 200–300 selects per edition.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Videographer (1):</strong> multi-angle cinematic footage on gimbal—crowd wide shots, DJ close-ups, attendee candids.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Phone-Native Social Shooter (1):</strong> vertical content shot on mobile for platform-native Reels and TikTok. First content live within 30 minutes.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Drone Operator (1):</strong> aerial establishing shots of venue scale and golden-hour flyovers. Signature opening shots for highlight reels.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Audio Engineer (1):</strong> manages direct board-feed recording from the DJ mixer. Critical for broadcast-quality audio sets.</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-headline text-xl text-brand-green">Shot List Strategy</h4>
            <ul className="space-y-0 font-body text-base text-brand-green/70">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Crowd Energy:</strong> wide shots showing packed venues and dance floor movement. FOMO drivers.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>DJ Moments:</strong> mixer close-ups and crowd reactions. Mix series thumbnail content.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Fashion & Style:</strong> portraits of the best-dressed attendees. Drives organic UGC and reach.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Brand Touchpoints:</strong> Savanna signage in context, branded bars, and signature serves.</li>
            </ul>
          </div>
        </div>

        {/* Real-Time Posting Workflow Narrative */}
        <div className="bg-brand-cream/50 p-8 rounded-2xl border border-brand-green/5 mt-8">
          <h4 className="font-headline text-xl text-brand-green mb-4">Real-Time Posting Workflow</h4>
          <p className="font-body text-sm text-brand-green/70 mb-6 leading-relaxed">
            The phone-native social shooter is responsible for live posting. First Stories go live as doors open ("The stage is set"), followed by hourly cadence increases. High-priority Reels are posted within 60 minutes of Golden Hour capture to leverage peak platform engagement.
          </p>
        </div>

        {/* Platform Ecosystem Visual */}
        <div className="relative mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="space-y-8">
              <div className="relative inline-block mb-4">
                <BrushStroke className="w-full h-8 opacity-40 -translate-y-1" color="#F4C542" />
                <h5 className="font-headline text-3xl text-brand-green relative z-10 px-4">REAL-TIME CAPTURE</h5>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {platformsLeft.map((p, i) => (
                  <Card key={i} className="p-4 bg-white rounded-2xl border border-brand-green/5 flex flex-col items-center text-center group hover:border-brand-gold transition-colors">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image src={p.logo} alt={p.name} width={36} height={36} className={`object-contain ${p.name === 'X' ? 'brightness-0' : ''}`} />
                    </div>
                    <span className="font-body font-bold text-[10px] uppercase tracking-widest text-brand-green/40 group-hover:text-brand-gold transition-colors">{p.role}</span>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative inline-block mb-4">
                <BrushStroke className="w-full h-8 opacity-40 -translate-y-1" color="#2D8C7F" />
                <h5 className="font-headline text-3xl text-brand-green relative z-10 px-4">BETWEEN SUNDAYS</h5>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {platformsRight.map((p, i) => (
                  <Card key={i} className="p-4 bg-white rounded-2xl border border-brand-green/5 flex flex-col items-center text-center group hover:border-brand-teal transition-colors">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image src={p.logo} alt={p.name} width={36} height={36} className="object-contain" />
                    </div>
                    <span className="font-body font-bold text-[10px] uppercase tracking-widest text-brand-green/40 group-hover:text-brand-teal transition-colors">{p.role}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 border-t-2 border-dashed border-brand-gold/30 pointer-events-none" />
        </div>
      </div>

      {/* 4B: DJ Set Content Pipeline */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          4B: DJ Set Content Pipeline
        </h3>
        <p className="font-body text-base text-brand-green/70 max-w-3xl leading-relaxed">
          Every DJ set at an owned edition is professionally recorded via direct mixer feed—resulting in broadcast-quality audio suitable for streaming platforms. Full sets (typically 60–90 minutes) are uploaded within 7 days to YouTube, Mixcloud, and SoundCloud as the “Savanna Sundays Mix Series.”
        </p>

        <div className="py-12 bg-brand-green rounded-[30px] p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h5 className="font-headline text-3xl mb-12 text-center tracking-widest uppercase">The Music Content Pipeline</h5>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                { label: "Live Set", icon: <Play size={18} /> },
                { label: "Audio Capture", icon: <AudioLines size={18} /> },
                { label: "Post-Prod", icon: <Share2 size={18} /> },
                { label: "Upload", icon: <ArrowRight size={18} /> },
                { label: "Short clips", icon: <Play size={18} /> },
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-white/5">
                      {step.icon}
                    </div>
                    <span className="font-body text-[10px] font-bold uppercase tracking-widest text-white/50">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden md:block text-brand-gold/40" size={16} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-12 flex justify-center gap-6 pt-8 border-t border-white/5">
              {['spotify', 'youtube', 'soundcloud', 'apple', 'mixcloud'].map((p) => (
                <div key={p} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center grayscale opacity-50">
                  <div className="w-4 h-4 bg-white rounded-full opacity-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4C: Post-Event Content Calendar */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          4C: Post-Event Content Calendar
        </h3>
        
        <p className="font-body text-base text-brand-green/70 max-w-3xl leading-relaxed mb-8">
          Firefly operates on the principle that one Sunday produces 30+ days of social media content. This "extraction model" ensures that the brand maintains a continuous presence even between events.
        </p>

        {/* 30-Day Extraction Table */}
        <div className="bg-white rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg my-8">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-6">Timeframe</TableHead>
                <TableHead className="text-white font-headline tracking-widest">Content Type</TableHead>
                <TableHead className="text-white font-headline tracking-widest">Platform & Format</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { time: "Day 1–2", type: "Same-day recap, 24hr highlight reel, Stories", plat: "IG Reels, TikTok, Stories, X clips" },
                { time: "Day 3–7", type: "Crowd energy, best-dressed, DJ set upload", plat: "YouTube, Mixcloud, Feed carousels" },
                { time: "Day 8–14", type: "BTS, DJ profile drops, community spotlight", plat: "IG Reels, TikTok, WhatsApp" },
                { time: "Day 15–21", type: "Throwback moments, Savanna 0.0 features", plat: "IG Feed, Reels, YouTube Shorts" },
                { time: "Day 22–30", type: "Next-edition tease, lineup reveal, ticket launch", plat: "All platforms, WhatsApp, Email" },
              ].map((row, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-xl py-6">{row.time}</TableCell>
                  <TableCell className="font-body font-bold text-brand-green/70">{row.type}</TableCell>
                  <TableCell className="font-body text-sm text-brand-teal font-bold uppercase tracking-wider">{row.plat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 4D: Between-Sundays Digital Strategy */}
      <div className="space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          4D: Between-Sundays Digital Strategy
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="font-headline text-xl text-brand-green">Monday–Saturday Content</h4>
            <ul className="space-y-0 font-body text-base text-brand-green/70">
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Sunday Mood:</strong> lifestyle content that reinforces the golden-hour state of mind.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Cider Culture:</strong> product-led content including Savanna 0.0 mocktail tutorials.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Music Discovery:</strong> sharing tracks and DJ mixes from the YouTube series.</li>
              <li className="py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={16} /> <strong>Community Content:</strong> reposting and spotlighting the ambassador network.</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-headline text-xl text-brand-green">Dark Social & Paid Strategy</h4>
            <p className="font-body text-base text-brand-green/70 leading-relaxed">
              WhatsApp is the primary discovery channel in Nairobi. Firefly engineers dark social distribution through segmented broadcast lists and ambassador prompts. Paid media follows a 70/30 split between event promotion and audience building.
            </p>
            <div className="font-serif italic text-lg text-brand-green border-l-[3px] border-brand-gold pl-6 py-2">
              "We approach this as a content-first activation partner—turning each Sunday into a 30-day digital asset."
            </div>
          </div>
        </div>

        {/* Content Calendar Grid Visual */}
        <div className="space-y-6 mt-12">
          <div className="section-label">30-Day Content Matrix (Indicative)</div>
          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {[...Array(35)].map((_, i) => {
              const types = ['gold', 'teal', 'green', 'yellow'];
              const type = types[i % 4];
              const colors = {
                gold: 'bg-brand-gold/20 border-brand-gold/10',
                teal: 'bg-brand-teal/20 border-brand-teal/10',
                green: 'bg-brand-green/20 border-brand-green/10',
                yellow: 'bg-brand-light-yellow/40 border-brand-light-yellow/20',
              };
              return (
                <div key={i} className={`aspect-square rounded-md border ${colors[type as keyof typeof colors]} flex items-center justify-center overflow-hidden`}>
                  <div className="w-2 h-2 rounded-full bg-black/5" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
