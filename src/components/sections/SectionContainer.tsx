"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { CiderFizz } from '@/components/brand/VisualElements';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  variant?: 'light' | 'dark';
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        "py-8 md:py-12 px-5 md:px-12 lg:px-24 flex flex-col justify-center relative transition-all duration-1000",
        variant === 'dark' ? "dark-section" : "bg-brand-cream overflow-hidden",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {variant === 'light' && <CiderFizz />}
      
      {/* Visual Divider for light sections */}
      {variant === 'light' && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      )}
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <span className={cn(
          "section-label transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        )}>{label}</span>
        
        <h2 className={cn(
          "section-title transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>{title}</h2>
        
        <div className={cn(
          "w-full transition-all duration-1000 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {children || (
            <div className="font-body text-base md:text-lg font-light opacity-80 max-w-2xl leading-relaxed">
              <p>Strategic presentation content loading for this segment...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};