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

export const SectionContainer = ({ id, label, title, variant = 'dark', children }: SectionProps) => {
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

  // Subtle title parallax
  const translateX = (scrollProgress - 0.5) * 15; 

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        "py-8 md:py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden transition-all duration-700 dark-section"
      )}
    >
      <CiderFizz className="opacity-5" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-8 md:mb-12">
          <span 
            className="section-label"
            style={{ transform: `translateX(${translateX * 0.4}px)` }}
          >
            {label}
          </span>
          
          <h2 
            className="section-title"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {title}
          </h2>
          
          <div className="w-16 h-1 bg-brand-gold/40" />
        </div>
        
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};
