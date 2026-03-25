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
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
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

  // Constrain translateX and only apply after mount to avoid hydration mismatch
  const translateX = isMounted ? (scrollProgress - 0.5) * 15 : 0; 

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        "py-12 md:py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden flex flex-col justify-center border-b border-white/5"
      )}
    >
      <div className="noise-overlay" />
      <CiderFizz className="opacity-[0.03] z-0" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-6 md:mb-10 text-center md:text-left relative">
          <span className="section-label mb-1">{label}</span>
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
