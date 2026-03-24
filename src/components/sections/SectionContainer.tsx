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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgClass = variant === 'dark' 
    ? "dark-section" 
    : variant === 'alt' 
      ? "bg-brand-dark-alt" 
      : variant === 'cream'
        ? "cream-section"
        : "bg-brand-dark";

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        "py-24 md:py-40 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
        bgClass,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
    >
      {(variant === 'light' || variant === 'alt') && <CiderFizz className="opacity-20" />}
      
      {/* 4K Visual Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-16 md:mb-24">
          <span className={cn(
            "section-label transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>{label}</span>
          
          <h2 className={cn(
            "section-title transition-all duration-1000 delay-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>{title}</h2>
          
          <div className={cn(
            "w-16 h-1 bg-brand-gold transition-all duration-1000 delay-700 transform",
            isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
          )} />
        </div>
        
        <div className={cn(
          "w-full transition-all duration-1000 delay-[800ms] transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        )}>
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