"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { CiderFizz } from '@/components/brand/VisualElements';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}

export const SectionContainer = ({ id, label, title, children }: SectionProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Constrain translateX to prevent overlapping
  const translateX = (scrollProgress - 0.5) * 20; 

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        "py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden flex flex-col justify-center border-b border-white/5"
      )}
    >
      <div className="noise-overlay" />
      <CiderFizz className="opacity-[0.04] z-0" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-8 md:mb-12 text-center md:text-left relative">
          <span className="section-label">{label}</span>
          <h2 
            className="section-title"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {title}
          </h2>
        </div>
        
        <div className="w-full relative">
          {children}
        </div>
      </div>
    </section>
  );
};
