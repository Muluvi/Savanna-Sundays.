"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { cl } from '@/lib/cloudinary';
import { CheckCircle2, Instagram, Youtube, Users, Zap } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface TalentMetric {
  label: string;
  value: string;
  suffix?: string;
  icon?: React.ReactNode;
}

interface MarqueeRowProps {
  name: string;
  handle: string;
  bio: string;
  metrics: TalentMetric[];
  images: string[];
  duration: string;
  reverse?: boolean;
  isFirstRow?: boolean;
  isVerified?: boolean;
}

const StatBadge = ({ metric }: { metric: TalentMetric }) => (
  <div className="flex flex-col items-center md:items-start gap-1 px-4 md:px-6 border-l border-brand-gold/10 first:border-l-0">
    <div className="flex items-center gap-2">
      <span className="text-brand-gold/40">{metric.icon}</span>
      <span className="font-body text-[8px] md:text-[9px] tracking-[3px] text-brand-gold/60 uppercase font-bold">
        {metric.label}
      </span>
    </div>
    <div className="font-headline text-xl md:text-3xl text-brand-gold leading-none tracking-tighter">
      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
    </div>
  </div>
);

const MarqueeRow = ({ 
  name, 
  handle, 
  bio, 
  metrics, 
  images, 
  duration, 
  reverse = false, 
  isFirstRow = false, 
  isVerified = false 
}: MarqueeRowProps) => {
  const displayImages = [...images, ...images];
  const transformation = 'q_auto:best,f_auto,dpr_2.0,h_1000,c_limit';

  return (
    <div className="space-y-6 group/row">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-end">
        <div className="text-center lg:text-left space-y-1">
          <div className="space-y-0.5">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <h4 className="font-headline text-[2.5rem] md:text-[4rem] tracking-tighter text-brand-gold uppercase leading-none">
                {name}
              </h4>
              {isVerified && <CheckCircle2 className="text-blue-400 w-5 h-5 md:w-6 md:h-6 fill-blue-400/10" />}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
              <span className="font-headline text-[12px] tracking-[4px] text-white/80 uppercase">
                {handle}
              </span>
              <div className="hidden md:block w-1 h-1 rounded-full bg-brand-gold/20" />
              <p className="font-body text-[10px] tracking-[2px] text-brand-cream/40 uppercase font-bold">
                {bio}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center bg-white/[0.02] border border-white/5 p-4 rounded-[24px] backdrop-blur-sm">
          {metrics.map((m, i) => (
            <StatBadge key={i} metric={m} />
          ))}
        </div>
      </div>
      
      <div 
        className="relative w-full overflow-hidden group/track"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)'
        }}
      >
        <div 
          className={cn(
            "flex gap-4 w-max",
            "group-hover/track:[animation-play-state:paused]",
            "motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full motion-reduce:scrollbar-hide"
          )}
          style={{ 
            animationName: reverse ? 'scrollR' : 'scrollL',
            animationDuration: duration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {displayImages.map((url, i) => (
            <img 
              key={`${name}-${i}`} 
              src={cl(url, transformation)} 
              alt={`${name} performing live`}
              loading={isFirstRow && i === 0 ? "eager" : "lazy"}
              className="h-[280px] md:h-[520px] w-auto block flex-shrink-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              style={{ borderRadius: 0, border: 'none', boxShadow: 'none' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TalentDivider = () => (
  <div className="w-[60px] h-[1px] bg-brand-gold/20 mx-auto mt-12 mb-12" />
);

export const TalentMarquee = () => {
  const djMoonsImages = [
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435240/IMG_1744_dboqfs.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435239/IMG_1746_st88dv.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435194/IMG_1497_aiud8c.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774435182/20fb5d79-d30b-405e-8a3a-4f434dbe8dc8_fgroxz.jpg"
  ];

  const djMainPattImages = [
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439551/IMG-20260325-WA0028_xg0xmg.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439550/IMG-20260325-WA0025_hejydl.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439550/IMG-20260325-WA0029_xkfd0g.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439549/IMG-20260325-WA0026_vfggnh.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439549/IMG-20260325-WA0024_oagwdk.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439549/IMG-20260325-WA0020_pyiaoj.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774439548/IMG-20260325-WA0021_ws8z0m.jpg"
  ];

  const sameerMCImages = [
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774441116/IMG-20260325-WA0042_oyhkzv.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774441114/IMG-20260325-WA0040_bhwb4z.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774441114/IMG-20260325-WA0041_b2a1sa.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774441113/IMG-20260325-WA0043_ykqagw.jpg",
    "https://res.cloudinary.com/da5j0zjok/image/upload/v1774441113/IMG-20260325-WA0044_iar1fi.jpg"
  ];

  return (
    <div className="bg-[#0A140B] py-16 overflow-hidden w-full relative z-20">
      <div className="text-center mb-12 px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
           <Zap className="text-brand-gold animate-pulse" size={16} />
           <p className="font-headline text-[12px] tracking-[6px] text-brand-gold uppercase font-bold">
            03 — THE RITUAL
          </p>
           <Zap className="text-brand-gold animate-pulse" size={16} />
        </div>
        <h3 className="font-headline text-[clamp(3rem,10vw,6rem)] text-brand-gold uppercase tracking-tighter leading-[0.85]">
          THE SAVANNA <br className="hidden md:block" /> VYBE SQUAD
        </h3>
      </div>

      <div className="space-y-12">
        <MarqueeRow 
          name="DJ MOONS" 
          handle="@djmoons.ke"
          bio="Artist | Artpreneur | Kenya's Most Versatile"
          metrics={[
            { label: "IG Followers", value: "10100", suffix: "", icon: <Instagram size={10} /> },
            { label: "Youtube", value: "1500", suffix: "+", icon: <Youtube size={10} /> },
            { label: "Impact Reach", value: "70000", suffix: "+", icon: <Users size={10} /> }
          ]}
          images={djMoonsImages} 
          duration="50s"
          isFirstRow 
          isVerified
        />
        
        <TalentDivider />
        
        <MarqueeRow 
          name="DJ MAIN PATT" 
          handle="@djmainpatt"
          bio="DJ | Versatile | Top Boy Nation Entertainment"
          metrics={[
            { label: "IG Followers", value: "14600", suffix: "", icon: <Instagram size={10} /> },
            { label: "Engagement", value: "8500", suffix: "+", icon: <Zap size={10} /> }
          ]}
          images={djMainPattImages} 
          duration="60s" 
          reverse
        />
        
        <TalentDivider />
        
        <MarqueeRow 
          name="SAMEER BRY" 
          handle="@sameerbry"
          bio="MC | The Savanna Voice | Kababaye 🐂🇰🇪"
          metrics={[
            { label: "IG Followers", value: "42000", suffix: "", icon: <Instagram size={10} /> },
            { label: "Live Impact", value: "100", suffix: "%", icon: <Zap size={10} /> }
          ]}
          images={sameerMCImages} 
          duration="55s" 
          reverse
        />

        <div className="text-center mt-12">
          <p className="font-body text-[10px] tracking-[4px] text-brand-gold/30 uppercase font-bold">
            Interactive metrics. Hover any track to pause activation.
          </p>
        </div>
      </div>
    </div>
  );
};