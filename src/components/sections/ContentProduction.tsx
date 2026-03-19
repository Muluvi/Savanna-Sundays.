
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
  { name: "X", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1763590344/X_idVRwaKp9b_4_vpw8j2.png", role: "Recaps" },
];

const platformsRight = [
  { name: "YouTube", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764351543/YouTube_Icon_18_lal2zf.jpg", role: "Full DJ Sets" },
  { name: "Spotify", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1764344747/Spotify_Primary_Logo_RGB_Green_hpueq3.png", role: "Playlists" },
  { name: "SoundCloud", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1765721100/686243c90161ea53ca36dd68_01-primary-white-transparent-p-1600_y4btv4.png", role: "Mixes" },
  { name: "Mixcloud", logo: "https://res.cloudinary.com/da5j0zjok/image/upload/v1767368053/6e028600-2341-4632-9e46-78fffdae5809_20260102_183329_0000_araocz.png", role: "DJ Sets" },
];

export const ContentSocialSection = () => {
  return (
    <div className="space-y-12 md:space-y-24">
      {/* Strategic Intro */}
      <div className="font-body font-light text-[15px] text-brand-green/55 max-w-[680px] leading-[1.7] animate-fade-in-up">
        <p>
          Content is Firefly’s core deliverable and Savanna Sundays’ most valuable compounding asset. Every edition is a content harvest—producing raw material that feeds 30+ days of social media, a growing DJ mix library, and a community narrative that deepens with every Sunday.
        </p>
      </div>

      {/* 4A: Real-Time Content Capture */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          4A: Real-Time Content Capture (Event Day)
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <h4 className="font-headline text-xl text-brand-green">The Content Capture Team</h4>
            <ul className="space-y-0 font-body text-sm md:text-base text-brand-green/70">
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Lead Photographer (1):</strong> Editorial stills—lifestyle, fashion, product.</li>
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Videographer (1):</strong> Multi-angle cinematic footage on gimbal.</li>
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Social Shooter (1):</strong> Vertical phone-native content for IG/TikTok.</li>
              <li className="py-1.5 md:py-2 flex gap-3 items-start"><CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={14} /> <strong>Audio Engineer (1):</strong> Manages direct board-feed recording.</li>
            </ul>
          </div>

          <div className="bg-brand-cream/50 p-6 md:p-8 rounded-2xl border border-brand-green/5">
            <h4 className="font-headline text-lg md:text-xl text-brand-green mb-3 md:mb-4">Real-Time Posting Workflow</h4>
            <p className="font-body text-xs md:text-sm text-brand-green/70 leading-relaxed">
              The phone-native shooter handles live posting. Stories go live as doors open, with hourly cadence increases. High-priority Reels are posted within 60 minutes of Golden Hour capture to leverage peak engagement.
            </p>
          </div>
        </div>

        {/* Platform Ecosystem Visual */}
        <div className="relative mt-8 md:mt-12 pt-8 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">
            <div className="space-y-6 md:space-y-8">
              <div className="relative inline-block mb-2 md:mb-4">
                <BrushStroke className="w-full h-6 md:h-8 opacity-40 -translate-y-1" color="#F4C542" />
                <h5 className="font-headline text-2xl md:text-3xl text-brand-green relative z-10 px-4 uppercase">REAL-TIME</h5>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {platformsLeft.map((p, i) => (
                  <Card key={i} className="p-3 md:p-4 bg-white rounded-2xl border border-brand-green/5 flex flex-col items-center text-center group hover:border-brand-gold transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 flex items-center justify-center">
                      <Image src={p.logo} alt={p.name} width={32} height={32} className={`object-contain ${p.name === 'X' ? 'brightness-0' : ''}`} />
                    </div>
                    <span className="font-body font-bold text-[8px] md:text-[10px] uppercase tracking-widest text-brand-green/40">{p.role}</span>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="relative inline-block mb-2 md:mb-4">
                <BrushStroke className="w-full h-6 md:h-8 opacity-40 -translate-y-1" color="#2D8C7F" />
                <h5 className="font-headline text-2xl md:text-3xl text-brand-green relative z-10 px-4 uppercase">BETWEEN SUNDAYS</h5>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {platformsRight.map((p, i) => (
                  <Card key={i} className="p-3 md:p-4 bg-white rounded-2xl border border-brand-green/5 flex flex-col items-center text-center group hover:border-brand-teal transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-3 flex items-center justify-center">
                      <Image src={p.logo} alt={p.name} width={32} height={32} className="object-contain" />
                    </div>
                    <span className="font-body font-bold text-[8px] md:text-[10px] uppercase tracking-widest text-brand-green/40">{p.role}</span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4B: DJ Set Content Pipeline */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          4B: DJ Set Content Pipeline
        </h3>
        <p className="font-body text-sm md:text-base text-brand-green/70 max-w-3xl leading-relaxed">
          Every set is recorded via direct mixer feed for broadcast-quality audio. Full sets are uploaded within 7 days to YouTube and SoundCloud as the “Savanna Sundays Mix Series.”
        </p>

        <div className="py-8 md:py-12 bg-brand-green rounded-[24px] md:rounded-[30px] p-6 md:p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h5 className="font-headline text-2xl md:text-3xl mb-8 md:mb-12 text-center tracking-widest uppercase">Sonic Pipeline</h5>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {[
                { label: "Live Set", icon: <Play size={16} /> },
                { label: "Audio Capture", icon: <AudioLines size={16} /> },
                { label: "Post-Prod", icon: <Share2 size={16} /> },
                { label: "Upload", icon: <ArrowRight size={16} /> },
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-white/5">
                      {step.icon}
                    </div>
                    <span className="font-body text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="hidden md:block text-brand-gold/40" size={14} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4C: Post-Event Content Calendar */}
      <div className="space-y-8 md:space-y-12 animate-fade-in-up">
        <h3 className="font-headline text-2xl md:text-3xl text-brand-green border-l-[3px] border-brand-gold pl-4 uppercase">
          4C: 30-Day Content Extraction
        </h3>
        
        <div className="bg-white rounded-[24px] md:rounded-[30px] overflow-hidden border border-brand-green/5 shadow-lg">
          <Table>
            <TableHeader className="bg-brand-green">
              <TableRow className="hover:bg-transparent border-none">
                <TableHead className="text-white font-headline tracking-widest py-4 md:py-6 text-xs md:text-sm">Days</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-xs md:text-sm">Content Type</TableHead>
                <TableHead className="text-white font-headline tracking-widest text-xs md:text-sm">Platform</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { time: "Day 1–2", type: "Recap & Highlights", plat: "IG, TikTok, X" },
                { time: "Day 3–7", type: "Crowd Energy & DJ Sets", plat: "YouTube, Feed" },
                { time: "Day 8–14", type: "Community Spotlights", plat: "Reels, WhatsApp" },
                { time: "Day 15–21", type: "Product & Lifestyle", plat: "Feed, YouTube" },
                { time: "Day 22–30", type: "Next Edition Hype", plat: "All, Email" },
              ].map((row, i) => (
                <TableRow key={i} className={i % 2 !== 0 ? 'bg-brand-light-yellow/10' : ''}>
                  <TableCell className="font-headline text-lg md:text-xl py-4 md:py-6 text-brand-teal">{row.time}</TableCell>
                  <TableCell className="font-body font-bold text-xs md:text-sm text-brand-green/70">{row.type}</TableCell>
                  <TableCell className="font-body text-[10px] md:text-xs text-brand-teal font-bold uppercase tracking-wider">{row.plat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
