"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { CiderFizz } from '@/components/brand/VisualElements';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  variant?: 'light' | 'dark' | 'alt' | 'cream';
  children?: React.ReactNode;
}

export const SectionContainer = ({ id, label, title, variant = 'light', children }: SectionProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible for parallax effects
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgClass = variant === 'dark' 
    ? "dark-section" 
    : variant === 'alt' 
      ? "bg-brand-dark-alt snap-start min-h-screen flex flex-col justify-center" 
      : variant === 'cream'
        ? "cream-section"
        : "bg-brand-dark snap-start min-h-screen flex flex-col justify-center";

  // Subtle parallax for titles - reduced for performance
  const translateX = (scrollProgress - 0.5) * 20; 

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        "py-16 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden transition-all duration-700",
        bgClass
      )}
    >
      {(variant === 'light' || variant === 'alt') && <CiderFizz className="opacity-10" />}
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-12 md:mb-20">
          <span 
            className="section-label block"
            style={{ transform: `translateX(${translateX * 0.5}px)` }}
          >
            {label}
          </span>
          
          <h2 
            className="section-title block"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {title}
          </h2>
          
          <div className="w-24 h-1 bg-brand-gold" />
        </div>
        
        <div className="w-full">
          {children || (
            <div className="font-body text-xl md:text-2xl font-light opacity-80 max-w-3xl leading-relaxed">
              <p>Strategic presentation content loading for this segment...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};